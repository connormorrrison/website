"use client"
import React, { useEffect, useState, useRef } from "react"

export default function ContributionGraph() {
  // configuration
  const cols = 80
  const rows = 7
  const cellSize = 10
  const cellGap = 4
  const outerPad = 8
  const width = cols * (cellSize + cellGap) + outerPad * 2 - cellGap - 130
  const height = rows * (cellSize + cellGap) + outerPad * 2 - cellGap

  // state / refs
  const [cells, setCells] = useState<any[]>([])
  const requestRef = useRef<number | null>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // init grid
  useEffect(() => {
    const init: any[] = []
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        init.push({
          x: outerPad + x * (cellSize + cellGap),
          y: outerPad + y * (cellSize + cellGap),
          opacity: Math.random() * 0.7 + 0.1,
          pulseSpeed: (Math.random() * 0.02 + 0.005) * 0.5,
          pulseDir: Math.random() > 0.5 ? 1 : -1,
          base:
            Math.random() > 0.85
              ? Math.random() > 0.5
                ? 0.9
                : 0.6
              : Math.random() > 0.5
              ? 0.3
              : 0.1,
        })
      }
    }
    setCells(init)
  }, [])

  // rounded-rect helper
  const roundRect = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    size: number,
    r: number
  ) => {
    ctx.beginPath()
    ctx.moveTo(x + r, y)
    ctx.lineTo(x + size - r, y)
    ctx.quadraticCurveTo(x + size, y, x + size, y + r)
    ctx.lineTo(x + size, y + size - r)
    ctx.quadraticCurveTo(x + size, y + size, x + size - r, y + size)
    ctx.lineTo(x + r, y + size)
    ctx.quadraticCurveTo(x, y + size, x, y + size - r)
    ctx.lineTo(x, y + r)
    ctx.quadraticCurveTo(x, y, x + r, y)
    ctx.closePath()
    ctx.fill()
  }

  // animation loop
  useEffect(() => {
    if (!cells.length) return

    const canvas = canvasRef.current!
    const ctx = canvas.getContext("2d")!
    const dpr = window.devicePixelRatio || 1
    canvas.width = width * dpr
    canvas.height = height * dpr
    ctx.scale(dpr, dpr)

    const animate = () => {
      ctx.clearRect(0, 0, width, height)
      const next = cells.map(cell => {
        let op = cell.opacity + cell.pulseDir * cell.pulseSpeed
        const hi = Math.min(0.95, cell.base + 0.15)
        const lo = Math.max(0.05, cell.base - 0.15)
        if (op > hi) { op = hi; cell.pulseDir = -1 }
        if (op < lo) { op = lo; cell.pulseDir = 1 }
        ctx.fillStyle = `hsla(120,85%,${Math.floor(op * 100) / 3 + 25}%,${op})`
        roundRect(ctx, cell.x, cell.y, cellSize, cellSize / 4)
        return { ...cell, opacity: op }
      })
      setCells(next)
      requestRef.current = requestAnimationFrame(animate)
    }

    requestRef.current = requestAnimationFrame(animate)
    return () => {
      if (requestRef.current !== null) cancelAnimationFrame(requestRef.current)
    }
  }, [cells])

  // render
  return (
    <div className="w-full flex justify-start">
      <canvas
        ref={canvasRef}
        style={{
          width: `${width}px`,
          height: `${height}px`,
          border: "none",
        }}
      />
    </div>
  )
}
