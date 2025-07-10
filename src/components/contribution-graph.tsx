"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";

// Define the structure for a single cell in the grid
interface Cell {
  x: number;
  y: number;
  opacity: number;
  pulseSpeed: number;
  pulseDir: 1 | -1;
  base: number;
}

export default function ContributionGraph() {
  // --- Configuration Constants ---
  const ROWS = 7;
  const CELL_SIZE = 10;
  const CELL_GAP = 4;
  const OUTER_PAD = 8;
  const MAX_COLS = 80; // Maximum number of columns to render

  // --- State and Refs ---
  const [cells, setCells] = useState<Cell[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0, cols: 0 });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  // --- Helper function to draw a rounded rectangle ---
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
    ctx.quadraticCurveTo(x, y + size, x, y + size - radius); // Corrected 'r' to 'radius' here
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
    ctx.fill();
  };

  // --- Effect to observe container size changes ---
  // This uses a ResizeObserver for accurate and performant size detection.
  useEffect(() => {
    const calculateDimensions = (width: number) => {
      if (width === 0) return;
      
      // Calculate how many columns can fit in the container
      const availableWidth = width - OUTER_PAD * 2 + CELL_GAP;
      const newCols = Math.min(
        MAX_COLS,
        Math.floor(availableWidth / (CELL_SIZE + CELL_GAP))
      );

      if (newCols > 0) {
        // Calculate the exact width the canvas should be to fit the columns perfectly
        const newWidth = newCols * (CELL_SIZE + CELL_GAP) + OUTER_PAD * 2 - CELL_GAP;
        const newHeight = ROWS * (CELL_SIZE + CELL_GAP) + OUTER_PAD * 2 - CELL_GAP;

        // Update state only if dimensions have actually changed to avoid unnecessary re-renders
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
      // We are only observing one element
      const entry = entries[0];
      if (entry) {
        calculateDimensions(entry.contentRect.width);
      }
    });

    const container = containerRef.current;
    if (container) {
      observer.observe(container);
    }

    // Cleanup: disconnect the observer when the component unmounts
    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount

  // --- Effect to initialize or update the cell grid ---
  // This runs whenever the number of columns changes.
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
  }, [dimensions.cols]); // Reruns only when the column count changes

  // --- Effect for the animation loop ---
  const animate = useCallback(() => {
    if (!canvasRef.current || !cells.length) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear the canvas for the next frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw each cell
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

  // --- Effect to manage canvas drawing and animation ---
  useEffect(() => {
    if (!canvasRef.current || !dimensions.width) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Adjust for high-DPI screens
    const dpr = window.devicePixelRatio || 1;
    canvas.width = dimensions.width * dpr;
    canvas.height = dimensions.height * dpr;
    ctx.scale(dpr, dpr);

    // Start the animation
    animationFrameRef.current = requestAnimationFrame(animate);

    // Cleanup: cancel animation frame
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [animate, dimensions]);

  // --- Render the component ---
  return (
    <div ref={containerRef} className="w-full flex justify-start overflow-hidden">
      <canvas
        ref={canvasRef}
        style={{
          width: `${dimensions.width}px`,
          height: `${dimensions.height}px`,
          maxWidth: '100%',
          transition: 'width 0.2s ease-out', // Optional: smooth transition
        }}
      />
    </div>
  );
}
