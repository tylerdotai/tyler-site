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

    const timeout = setTimeout(() => {
      sessionStorage.setItem(sessionKey, '1')
      setLoadAnimationDone(true)
    }, 2000)

    return () => clearTimeout(timeout)
  }, [])

  // Click-drag scratch marks
  useEffect(() => {
    const layer = scratchLayerRef.current
    if (!layer) return

    const onMouseDown = (e: MouseEvent) => {
      if (e.button !== 0) return
      isDraggingRef.current = true
      addScratchPoint(e.clientX, e.clientY)
    }

    const onMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return
      addScratchPoint(e.clientX, e.clientY)
    }

    const onMouseUp = () => {
      isDraggingRef.current = false
    }

    const addScratchPoint = (x: number, y: number) => {
      const scratch = document.createElement('div')
      scratch.style.cssText = `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        width: 30px;
        height: 40px;
        pointer-events: none;
        z-index: 9998;
        transform: translate(-50%, -50%);
        animation: scratch-appear 0.1s ease forwards;
      `
      scratch.innerHTML = `
        <svg width="30" height="40" viewBox="0 0 30 40" fill="none">
          <path d="M 6 38 L 14 4 L 14.5 4 L 7.5 38" fill="#ff6b00" opacity="0.75"/>
          <path d="M 10 38 L 17 6 L 17.3 6 L 11.5 38" fill="#ff6b00" opacity="0.65"/>
          <path d="M 14 38 L 19 10 L 19.2 10 L 15.5 38" fill="#ff6b00" opacity="0.55"/>
          <circle cx="6" cy="41" r="2" fill="#ff6b00" opacity="0.4"/>
          <circle cx="22" cy="40" r="1.2" fill="#ff6b00" opacity="0.35"/>
        </svg>
      `
      layer.appendChild(scratch)
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
      {!loadAnimationDone && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9997,
          }}
        >
          {/*
            Dark surface with SVG mask — claw marks are BLACK (transparent cutouts)
            that reveal the content (hero) below.
          */}
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              animation: 'overlay-fade-out 2s ease forwards',
            }}
          >
            <defs>
              {/*
                Mask: white = opaque (show dark surface)
                       black = transparent (cut through to content below)
              */}
              <mask id="claw-cutout">
                <rect x="0" y="0" width="100" height="100" fill="white"/>

                {/* Scratch 1 — diagonal down-right, 3 parallel gouge strokes */}
                <g style={{ animation: 'scratch-reveal-1 0.25s ease-out 0.05s forwards', opacity: 0 }}>
                  <path d="M 5 26 L 20 12 L 38 24 L 55 10 L 80 26" stroke="black" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M 10 30 L 24 16 L 40 28 L 57 15 L 78 30" stroke="black" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M 15 34 L 28 21 L 42 33 L 59 20 L 76 34" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </g>

                {/* Scratch 2 — inverted V, from top */}
                <g style={{ animation: 'scratch-reveal-2 0.25s ease-out 0.12s forwards', opacity: 0 }}>
                  <path d="M 20 8 L 34 22 L 50 22 L 66 12 L 85 5" stroke="black" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M 24 13 L 36 25 L 52 25 L 67 15 L 83 9" stroke="black" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M 28 18 L 38 28 L 54 28 L 68 19 L 81 14" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </g>

                {/* Scratch 3 — lower diagonal, from left */}
                <g style={{ animation: 'scratch-reveal-3 0.25s ease-out 0.2s forwards', opacity: 0 }}>
                  <path d="M 30 50 L 44 38 L 60 48 L 76 36 L 98 52" stroke="black" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M 34 54 L 47 43 L 62 52 L 78 41 L 95 54" stroke="black" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M 38 58 L 50 48 L 64 56 L 79 46 L 92 58" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
              </mask>

              <filter id="tear-edge" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="0.4" result="blur"/>
                <feFlood floodColor="#ff6b00" floodOpacity="0.9" result="color"/>
                <feComposite in="color" in2="blur" operator="in" result="glow"/>
                <feMerge>
                  <feMergeNode in="glow"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Dark surface with claw marks cut out — reveals page content below */}
            <rect x="0" y="0" width="100" height="100" fill="#0a0a0a" mask="url(#claw-cutout)"/>

            {/* Orange glow on tear edges — painted on top of the scratches */}
            <g filter="url(#tear-edge)" style={{ pointerEvents: 'none' }}>
              <path d="M 5 26 L 20 12 L 38 24 L 55 10 L 80 26" stroke="#ff6b00" strokeWidth="0.6" fill="none" opacity="0.9"/>
              <path d="M 10 30 L 24 16 L 40 28 L 57 15 L 78 30" stroke="#ff6b00" strokeWidth="0.4" fill="none" opacity="0.6"/>
              <path d="M 20 8 L 34 22 L 50 22 L 66 12 L 85 5" stroke="#ff6b00" strokeWidth="0.6" fill="none" opacity="0.9"/>
              <path d="M 24 13 L 36 25 L 52 25 L 67 15 L 83 9" stroke="#ff6b00" strokeWidth="0.4" fill="none" opacity="0.6"/>
              <path d="M 30 50 L 44 38 L 60 48 L 76 36 L 98 52" stroke="#ff6b00" strokeWidth="0.6" fill="none" opacity="0.9"/>
              <path d="M 34 54 L 47 43 L 62 52 L 78 41 L 95 54" stroke="#ff6b00" strokeWidth="0.4" fill="none" opacity="0.6"/>
            </g>
          </svg>

          {/* Particle debris */}
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
            {[
              { top: '14%', left: '10%', delay: '0.05s', size: 4 },
              { top: '19%', left: '44%', delay: '0.08s', size: 3 },
              { top: '8%', left: '32%', delay: '0.06s', size: 2 },
              { top: '27%', right: '17%', delay: '0.1s', size: 5 },
              { top: '48%', left: '20%', delay: '0.15s', size: 3 },
              { top: '55%', left: '46%', delay: '0.18s', size: 2 },
              { top: '38%', left: '6%', delay: '0.12s', size: 3 },
              { top: '33%', right: '30%', delay: '0.14s', size: 2 },
            ].map((p, i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  top: p.top,
                  right: p.right,
                  left: p.left,
                  width: p.size,
                  height: p.size,
                  borderRadius: '50%',
                  background: '#ff6b00',
                  animation: `particle-fly-${i % 3} 0.35s ease-out ${p.delay} forwards`,
                  opacity: 0,
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Persistent ambient marks */}
      {loadAnimationDone && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', opacity: 0.06 }}>
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
            <path d="M 5 20 L 25 5 L 45 20" stroke="#ff6b00" strokeWidth="0.3" strokeLinecap="round"/>
            <path d="M 60 60 L 80 45 L 95 60" stroke="#ff6b00" strokeWidth="0.3" strokeLinecap="round"/>
          </svg>
        </div>
      )}

      {/* Interactive scratch layer */}
      <div ref={scratchLayerRef} style={{ position: 'fixed', inset: 0, zIndex: 9998, pointerEvents: 'none' }}/>

      <style>{`
        @keyframes overlay-fade-out {
          0% { opacity: 1; }
          70% { opacity: 1; }
          100% { opacity: 0; pointer-events: none; }
        }
        @keyframes scratch-reveal-1 {
          0% { opacity: 0; clip-path: inset(0 100% 0 0); }
          20% { opacity: 1; }
          100% { opacity: 0; clip-path: inset(0 0 0 0); }
        }
        @keyframes scratch-reveal-2 {
          0% { opacity: 0; clip-path: inset(100% 0 0 0); }
          20% { opacity: 1; }
          100% { opacity: 0; clip-path: inset(0 0 0 0); }
        }
        @keyframes scratch-reveal-3 {
          0% { opacity: 0; clip-path: inset(0 0 0 100%); }
          20% { opacity: 1; }
          100% { opacity: 0; clip-path: inset(0 0 0 0); }
        }
        @keyframes particle-fly-0 {
          0% { transform: scale(0); opacity: 0.9; }
          100% { transform: scale(2.5) translate(-10px, -15px); opacity: 0; }
        }
        @keyframes particle-fly-1 {
          0% { transform: scale(0); opacity: 0.9; }
          100% { transform: scale(2) translate(15px, -10px); opacity: 0; }
        }
        @keyframes particle-fly-2 {
          0% { transform: scale(0); opacity: 0.9; }
          100% { transform: scale(3) translate(-8px, 18px); opacity: 0; }
        }
        @keyframes scratch-appear {
          0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
          100% { opacity: 0.45; transform: translate(-50%, -50%) scale(1); }
        }
      `}</style>
    </>
  )
}
