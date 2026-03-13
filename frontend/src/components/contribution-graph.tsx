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

export default function ContributionGraph({ vertical = false }: { vertical?: boolean }) {
  const CELL_SIZE = 10;
  const CELL_GAP = 4;
  const OUTER_PAD = 8;
  const FIXED_COUNT = 7; // rows in horizontal mode, cols in vertical mode
  const MAX_DYNAMIC = 80;

  const [cells, setCells] = useState<Cell[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0, dynamicCount: 0 });
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
    const calculateDimensions = (size: number) => {
      if (size === 0) return;
      const available = size - OUTER_PAD * 2 + CELL_GAP;
      const dynamicCount = Math.min(MAX_DYNAMIC, Math.floor(available / (CELL_SIZE + CELL_GAP)));

      if (dynamicCount > 0) {
        const dynamicDim = dynamicCount * (CELL_SIZE + CELL_GAP) + OUTER_PAD * 2 - CELL_GAP;
        const fixedDim = FIXED_COUNT * (CELL_SIZE + CELL_GAP) + OUTER_PAD * 2 - CELL_GAP;
        const newWidth = vertical ? fixedDim : dynamicDim;
        const newHeight = vertical ? dynamicDim : fixedDim;

        setDimensions(current => {
          if (current.width !== newWidth || current.height !== newHeight || current.dynamicCount !== dynamicCount) {
            return { width: newWidth, height: newHeight, dynamicCount };
          }
          return current;
        });
      } else {
        setDimensions({ width: 0, height: 0, dynamicCount: 0 });
      }
    };

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        const size = vertical ? entry.contentRect.height : entry.contentRect.width;
        calculateDimensions(size);
      }
    });

    const container = containerRef.current;
    if (container) observer.observe(container);
    return () => { if (container) observer.unobserve(container); };
  }, [vertical]);

  useEffect(() => {
    if (dimensions.dynamicCount === 0) return;
    const rows = vertical ? dimensions.dynamicCount : FIXED_COUNT;
    const cols = vertical ? FIXED_COUNT : dimensions.dynamicCount;

    const init: Cell[] = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        init.push({
          x: OUTER_PAD + col * (CELL_SIZE + CELL_GAP),
          y: OUTER_PAD + row * (CELL_SIZE + CELL_GAP),
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
  }, [dimensions.dynamicCount, vertical]);

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
    <div
      ref={containerRef}
      className={vertical ? "h-full flex flex-col justify-start overflow-hidden" : "w-full flex justify-start overflow-hidden"}
      style={vertical ? { width: `${dimensions.width}px` } : undefined}
    >
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
