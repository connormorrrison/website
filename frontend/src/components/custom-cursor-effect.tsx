"use client"
import React, { useState, useCallback } from "react"
import ReactDOM from "react-dom"
import { motion, AnimatePresence } from "motion/react"

interface CustomCursorEffectProps {
  children: React.ReactNode
  cursor: React.ReactNode
}

export function CustomCursorEffect({ children, cursor }: CustomCursorEffectProps) {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setPos({ x: e.clientX, y: e.clientY })
  }, [])

  const cursorEl = mounted ? ReactDOM.createPortal(
    <AnimatePresence>
      {visible && (
        <div
          style={{
            position: 'fixed',
            left: pos.x,
            top: pos.y,
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            zIndex: 9999,
          }}
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 500, damping: 25 }}
            style={{ fontSize: '1.5rem', userSelect: 'none' }}
          >
            {cursor}
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  ) : null

  return (
    <>
      <div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        style={{ cursor: 'none', display: 'inline-flex' }}
      >
        {children}
      </div>
      {cursorEl}
    </>
  )
}
