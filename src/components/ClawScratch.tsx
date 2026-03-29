'use client'

import { useEffect, useRef, useState } from 'react'

export default function ClawScratch() {
  const scratchLayerRef = useRef<HTMLDivElement>(null)
  const hasLoadedRef = useRef(false)
  const isDraggingRef = useRef(false)
  const [loadAnimationDone, setLoadAnimationDone] = useState(false)

  // Page-load claw reveal
  useEffect(() => {
    if (hasLoadedRef.current) return
    hasLoadedRef.current = true

    const sessionKey = 'claw-scratch-loaded'
    if (sessionStorage.getItem(sessionKey)) {
      setLoadAnimationDone(true)
      return
    }

    // Fire after a brief delay
    const timeout = setTimeout(() => {
      sessionStorage.setItem(sessionKey, '1')
      setLoadAnimationDone(true)
    }, 1800)

    return () => clearTimeout(timeout)
  }, [])

  // Click-drag scratch marks
  useEffect(() => {
    const layer = scratchLayerRef.current
    if (!layer) return

    const onMouseDown = (e: MouseEvent) => {
      if (e.button !== 0) return
      isDraggingRef.current = true
      addScratchPoint(e.clientX, e.clientY, false)
    }

    const onMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return
      addScratchPoint(e.clientX, e.clientY, true)
    }

    const onMouseUp = () => {
      isDraggingRef.current = false
    }

    const addScratchPoint = (x: number, y: number, isDrag: boolean) => {
      const scratch = document.createElement('div')
      scratch.style.cssText = `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        width: 25px;
        height: 25px;
        pointer-events: none;
        opacity: 0.45;
        transform: translate(-50%, -50%);
        z-index: 9998;
      `

      // 3-prong claw SVG scratch mark
      scratch.innerHTML = `
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="5" y1="20" x2="20" y2="5" stroke="#ff6b00" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="8" y1="20" x2="17" y2="11" stroke="#ff6b00" stroke-width="2" stroke-linecap="round" opacity="0.7"/>
          <line x1="12" y1="20" x2="17" y2="15" stroke="#ff6b00" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/>
        </svg>
      `

      layer.appendChild(scratch)

      // Fade out after 3s
      setTimeout(() => {
        scratch.style.transition = 'opacity 0.5s ease'
        scratch.style.opacity = '0'
        setTimeout(() => scratch.remove(), 500)
      }, 3000)
    }

    document.addEventListener('mousedown', onMouseDown)
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)

    return () => {
      document.removeEventListener('mousedown', onMouseDown)
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
    }
  }, [loadAnimationDone])

  return (
    <>
      {/* Page-load claw reveal */}
      {!loadAnimationDone && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9997,
            background: '#0a0a0a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'claw-reveal-bg 1.8s ease forwards',
          }}
        >
          <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
            {/* Claw scratch 1 */}
            <div
              style={{
                position: 'absolute',
                top: '25%',
                left: '-5%',
                width: '40%',
                height: 60,
                animation: 'claw-scratch-1 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards',
              }}
            >
              <svg width="100%" height="60" viewBox="0 0 300 60" preserveAspectRatio="none" fill="none">
                <path d="M 10 50 L 80 10 L 140 50" stroke="#ff6b00" strokeWidth="3" strokeLinecap="round"/>
                <path d="M 30 50 L 90 15 L 130 50" stroke="#ff6b00" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
                <path d="M 50 50 L 95 25 L 120 50" stroke="#ff6b00" strokeWidth="1.5" strokeLinecap="round" opacity="0.35"/>
              </svg>
            </div>
            {/* Claw scratch 2 */}
            <div
              style={{
                position: 'absolute',
                top: '42%',
                left: '25%',
                width: '50%',
                height: 60,
                animation: 'claw-scratch-2 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0.15s forwards',
                opacity: 0,
              }}
            >
              <svg width="100%" height="60" viewBox="0 0 320 60" preserveAspectRatio="none" fill="none">
                <path d="M 10 10 L 90 50 L 310 10" stroke="#ff6b00" strokeWidth="3" strokeLinecap="round"/>
                <path d="M 30 10 L 100 45 L 280 10" stroke="#ff6b00" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
                <path d="M 50 10 L 105 40 L 250 10" stroke="#ff6b00" strokeWidth="1.5" strokeLinecap="round" opacity="0.35"/>
              </svg>
            </div>
            {/* Claw scratch 3 */}
            <div
              style={{
                position: 'absolute',
                top: '60%',
                left: '50%',
                width: '45%',
                height: 60,
                animation: 'claw-scratch-3 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0.3s forwards',
                opacity: 0,
              }}
            >
              <svg width="100%" height="60" viewBox="0 0 300 60" preserveAspectRatio="none" fill="none">
                <path d="M 10 50 L 80 10 L 290 50" stroke="#ff6b00" strokeWidth="3" strokeLinecap="round"/>
                <path d="M 30 50 L 90 15 L 260 50" stroke="#ff6b00" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
                <path d="M 50 50 L 95 25 L 230 50" stroke="#ff6b00" strokeWidth="1.5" strokeLinecap="round" opacity="0.35"/>
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* Persistent ambient claw marks (shown after load animation) */}
      {loadAnimationDone && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 0,
            pointerEvents: 'none',
            opacity: 0.08,
          }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            fill="none"
            style={{ position: 'absolute', inset: 0 }}
          >
            <path d="M 5 20 L 25 5 L 45 20" stroke="#ff6b00" strokeWidth="0.3" strokeLinecap="round"/>
            <path d="M 15 20 L 30 8 L 40 20" stroke="#ff6b00" strokeWidth="0.2" strokeLinecap="round"/>
            <path d="M 60 60 L 80 45 L 95 60" stroke="#ff6b00" strokeWidth="0.3" strokeLinecap="round"/>
            <path d="M 65 60 L 78 48 L 88 60" stroke="#ff6b00" strokeWidth="0.2" strokeLinecap="round"/>
          </svg>
        </div>
      )}

      {/* Scratch layer for interactive marks */}
      <div
        ref={scratchLayerRef}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9998,
          pointerEvents: 'none',
        }}
      />

      <style>{`
        @keyframes claw-scratch-1 {
          0% { opacity: 0; transform: translateX(-30px); }
          60% { opacity: 1; transform: translateX(0) scaleY(1.1); }
          80% { transform: translateX(0) scaleY(0.95); }
          100% { opacity: 0.2; transform: translateX(0) scaleY(1); }
        }
        @keyframes claw-scratch-2 {
          0% { opacity: 0; transform: translateY(-20px); }
          60% { opacity: 1; transform: translateY(0) scaleY(1.1); }
          80% { transform: translateY(0) scaleY(0.95); }
          100% { opacity: 0.2; transform: translateY(0) scaleY(1); }
        }
        @keyframes claw-scratch-3 {
          0% { opacity: 0; transform: translateX(30px); }
          60% { opacity: 1; transform: translateX(0) scaleY(1.1); }
          80% { transform: translateX(0) scaleY(0.95); }
          100% { opacity: 0.2; transform: translateX(0) scaleY(1); }
        }
        @keyframes cursor-pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.3); }
        }
        @keyframes claw-reveal-bg {
          0% { opacity: 1; }
          80% { opacity: 1; }
          100% { opacity: 0; pointer-events: none; }
        }
      `}</style>
    </>
  )
}
