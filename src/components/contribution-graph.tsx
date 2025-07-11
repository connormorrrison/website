"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";

interface Cell {
  x: number;
  y: number;
  opacity: number;
  pulseSpeed: number;
  pulseDir: 1 | -1;
  base: number;
}

export default function ContributionGraph() {
  const ROWS = 7;
  const CELL_SIZE = 10;
  const CELL_GAP = 4;
  const OUTER_PAD = 8;
  const MAX_COLS = 80;

  const [cells, setCells] = useState<Cell[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0, cols: 0 });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  const roundRect = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    size: number,
    radius: number
  ) => {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + size - radius, y);
    ctx.quadraticCurveTo(x + size, y, x + size, y + radius);
    ctx.lineTo(x + size, y + size - radius);
    ctx.quadraticCurveTo(x + size, y + size, x + size - radius, y + size);
    ctx.lineTo(x + radius, y + size);
    ctx.quadraticCurveTo(x, y + size, x, y + size - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
    ctx.fill();
  };

  useEffect(() => {
    const calculateDimensions = (width: number) => {
      if (width === 0) return;
      
      const availableWidth = width - OUTER_PAD * 2 + CELL_GAP;
      const newCols = Math.min(
        MAX_COLS,
        Math.floor(availableWidth / (CELL_SIZE + CELL_GAP))
      );

      if (newCols > 0) {
        const newWidth = newCols * (CELL_SIZE + CELL_GAP) + OUTER_PAD * 2 - CELL_GAP;
        const newHeight = ROWS * (CELL_SIZE + CELL_GAP) + OUTER_PAD * 2 - CELL_GAP;

        setDimensions(currentDims => {
          if (currentDims.width !== newWidth || currentDims.height !== newHeight) {
            return { width: newWidth, height: newHeight, cols: newCols };
          }
          return currentDims;
        });
      } else {
        setDimensions({ width: 0, height: 0, cols: 0 });
      }
    };

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        calculateDimensions(entry.contentRect.width);
      }
    });

    const container = containerRef.current;
    if (container) {
      observer.observe(container);
    }

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, []);

  useEffect(() => {
    if (dimensions.cols === 0) return;

    const init: Cell[] = [];
    for (let y = 0; y < ROWS; y++) {
      for (let x = 0; x < dimensions.cols; x++) {
        init.push({
          x: OUTER_PAD + x * (CELL_SIZE + CELL_GAP),
          y: OUTER_PAD + y * (CELL_SIZE + CELL_GAP),
          opacity: Math.random() * 0.7 + 0.1,
          pulseSpeed: (Math.random() * 0.02 + 0.005) * 0.5,
          pulseDir: Math.random() > 0.5 ? 1 : -1,
          base:
            Math.random() > 0.85
              ? Math.random() > 0.5 ? 0.9 : 0.6
              : Math.random() > 0.5 ? 0.3 : 0.1,
        });
      }
    }
    setCells(init);
  }, [dimensions.cols]);

  const animate = useCallback(() => {
    if (!canvasRef.current || !cells.length) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const nextCells = cells.map((cell) => {
      let op = cell.opacity + cell.pulseDir * cell.pulseSpeed;
      const hi = Math.min(0.95, cell.base + 0.15);
      const lo = Math.max(0.05, cell.base - 0.15);

      if (op > hi) { op = hi; cell.pulseDir = -1; }
      else if (op < lo) { op = lo; cell.pulseDir = 1; }

      ctx.fillStyle = `hsla(120, 85%, ${Math.floor(op * 100) / 3 + 25}%, ${op})`;
      roundRect(ctx, cell.x, cell.y, CELL_SIZE, CELL_SIZE / 4);

      return { ...cell, opacity: op };
    });

    setCells(nextCells);
    animationFrameRef.current = requestAnimationFrame(animate);
  }, [cells]);

  useEffect(() => {
    if (!canvasRef.current || !dimensions.width) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = dimensions.width * dpr;
    canvas.height = dimensions.height * dpr;
    ctx.scale(dpr, dpr);

    animationFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [animate, dimensions]);

  return (
    <div ref={containerRef} className="w-full flex justify-start overflow-hidden">
      <canvas
        ref={canvasRef}
        style={{
          width: `${dimensions.width}px`,
          height: `${dimensions.height}px`,
          maxWidth: '100%',
        }}
      />
    </div>
  );
}
