'use client'

import { useEffect, useRef, useState } from 'react'

type CursorState = 'default' | 'nav' | 'button' | 'text' | 'canvas' | 'dragging'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLSpanElement>(null)
  const [state, setState] = useState<CursorState>('default')
  const [isVisible, setIsVisible] = useState(false)
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const isDragging = useRef(false)

  useEffect(() => {
    // Touch device — hide cursor entirely
    if ('ontouchstart' in window) return

    const onMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const onMouseLeave = () => setIsVisible(false)
    const onMouseEnter = () => setIsVisible(true)

    const onMouseDown = () => {
      isDragging.current = true
      setState('dragging')
    }

    const onMouseUp = () => {
      isDragging.current = false
      setState('default')
    }

    const onMouseOver = (e: MouseEvent) => {
      if (isDragging.current) return
      const target = e.target as HTMLElement

      if (target.closest('nav') || target.closest('a[href^="#"]')) {
        setState('nav')
      } else if (target.closest('button') || target.closest('a[href]')) {
        setState('button')
      } else if (target.tagName === 'P' || target.tagName === 'SPAN' || target.closest('p') || target.closest('li')) {
        setState('text')
      } else if (target.closest('#agent-canvas')) {
        setState('canvas')
      } else {
        setState('default')
      }
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseleave', onMouseLeave)
    document.addEventListener('mouseenter', onMouseEnter)
    document.addEventListener('mousedown', onMouseDown)
    document.addEventListener('mouseup', onMouseUp)
    document.addEventListener('mouseover', onMouseOver)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseleave', onMouseLeave)
      document.removeEventListener('mouseenter', onMouseEnter)
      document.removeEventListener('mousedown', onMouseDown)
      document.removeEventListener('mouseup', onMouseUp)
      document.removeEventListener('mouseover', onMouseOver)
    }
  }, [])

  const baseStyles: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    pointerEvents: 'none',
    zIndex: 9999,
    transform: `translate(${pos.x}px, ${pos.y}px)`,
    transition: 'opacity 0.15s ease',
    opacity: isVisible ? 1 : 0,
  }

  if (state === 'canvas') {
    return <div ref={cursorRef} style={{ ...baseStyles, opacity: 0 }} />
  }

  if (state === 'dragging') {
    return (
      <div
        ref={cursorRef}
        style={{
          ...baseStyles,
          width: 20,
          height: 20,
          border: '2px solid #ff6b00',
          borderRadius: '50%',
          marginLeft: -10,
          marginTop: -10,
          boxShadow: '0 0 12px rgba(255, 107, 0, 0.6)',
        }}
      />
    )
  }

  if (state === 'nav') {
    return (
      <div
        ref={cursorRef}
        style={{
          ...baseStyles,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          marginLeft: 12,
          marginTop: -8,
        }}
      >
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: '#ff6b00',
            boxShadow: '0 0 10px rgba(255, 107, 0, 0.8)',
          }}
        />
        <span
          ref={labelRef}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            color: '#ff6b00',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            opacity: 1,
            transition: 'opacity 0.1s',
          }}
        >
          CLAW
        </span>
      </div>
    )
  }

  if (state === 'button') {
    return (
      <div
        ref={cursorRef}
        style={{
          ...baseStyles,
          width: 20,
          height: 20,
          border: '2px solid #ff6b00',
          borderRadius: '50%',
          marginLeft: -10,
          marginTop: -10,
          animation: 'cursor-pulse 0.8s ease-in-out infinite',
          boxShadow: '0 0 10px rgba(255, 107, 0, 0.5)',
        }}
      />
    )
  }

  if (state === 'text') {
    return (
      <div
        ref={cursorRef}
        style={{
          ...baseStyles,
          width: 3,
          height: 16,
          background: '#ff6b00',
          borderRadius: 2,
          marginLeft: -1.5,
          marginTop: -8,
          boxShadow: '0 0 6px rgba(255, 107, 0, 0.4)',
        }}
      />
    )
  }

  // default
  return (
    <div
      ref={cursorRef}
      style={{
        ...baseStyles,
        width: 6,
        height: 6,
        borderRadius: '50%',
        background: '#ff6b00',
        marginLeft: -3,
        marginTop: -3,
        boxShadow: '0 0 8px rgba(255, 107, 0, 0.6), 0 0 16px rgba(255, 107, 0, 0.2)',
      }}
    />
  )
}
