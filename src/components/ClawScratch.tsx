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

    // Fire after animation completes (scratches + debris + hold)
    const timeout = setTimeout(() => {
      sessionStorage.setItem(sessionKey, '1')
      setLoadAnimationDone(true)
    }, 2200)

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
      `

      // Realistic 3-prong claw gouge — ragged edges, varied widths
      scratch.innerHTML = `
        <svg width="30" height="40" viewBox="0 0 30 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- Main gouge 1 — widest, deepest -->
          <path d="M 6 38 L 14 4 L 14.5 4 L 7.5 38" fill="#ff6b00" opacity="0.7"/>
          <!-- Gouge 2 -->
          <path d="M 10 38 L 17 6 L 17.3 6 L 11.5 38" fill="#ff6b00" opacity="0.6"/>
          <!-- Gouge 3 — shallowest -->
          <path d="M 14 38 L 19 10 L 19.2 10 L 15.5 38" fill="#ff6b00" opacity="0.5"/>
          <!-- Rough edges / debris -->
          <circle cx="5" cy="37" r="1.5" fill="#ff6b00" opacity="0.4"/>
          <circle cx="20" cy="36" r="1" fill="#ff6b00" opacity="0.3"/>
          <circle cx="8" cy="35" r="0.8" fill="#ff6b00" opacity="0.3"/>
          <!-- Glow -->
          <ellipse cx="12" cy="20" rx="12" ry="18" fill="#ff6b00" opacity="0.08"/>
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
      {/* Page-load claw reveal — torn overlay effect */}
      {!loadAnimationDone && (
        <div
          className="claw-overlay"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9997,
          }}
        >
          {/* SVG mask — scratches are transparent cutouts revealing content beneath */}
          <svg
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              mixBlendMode: 'normal',
            }}
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              {/* The mask makes scratches transparent — reveals content below */}
              <mask id="claw-mask">
                {/* White = show overlay (opaque) */}
                <rect x="0" y="0" width="100" height="100" fill="white"/>
                {/* Black = transparent (cutout) — the scratch marks */}
                {/* Scratch 1 — aggressive diagonal down-right gouge */}
                <path d="M -5 22 L 18 5 L 50 22 L 18 23 Z" fill="black"/>
                <path d="M -2 23 L 20 8 L 52 23 L 20 24 Z" fill="black"/>
                <path d="M 1 24 L 22 11 L 54 24 L 22 25 Z" fill="black"/>
                {/* Scratch 2 — diagonal up-right */}
                <path d="M 15 -5 L 35 22 L 75 22 L 35 21 Z" fill="black"/>
                <path d="M 17 -5 L 38 24 L 78 24 L 38 23 Z" fill="black"/>
                <path d="M 19 -5 L 41 26 L 81 26 L 41 25 Z" fill="black"/>
                {/* Scratch 3 — lower diagonal down-right */}
                <path d="M 35 55 L 58 38 L 105 55 L 58 56 Z" fill="black"/>
                <path d="M 38 56 L 62 40 L 108 56 L 62 57 Z" fill="black"/>
                <path d="M 41 57 L 66 42 L 111 57 L 66 58 Z" fill="black"/>
              </mask>
              {/* Glow filter for orange edge effect */}
              <filter id="tear-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="0.4" result="blur"/>
                <feFlood floodColor="#ff6b00" floodOpacity="0.6" result="color"/>
                <feComposite in="color" in2="blur" operator="in" result="glow"/>
                <feMerge>
                  <feMergeNode in="glow"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Dark surface with mask — scratches become transparent cutouts */}
            <rect
              x="0" y="0" width="100" height="100"
              fill="#0a0a0a"
              mask="url(#claw-mask)"
            />

            {/* Orange glow strokes on top of scratches — the torn edge effect */}
            <g filter="url(#tear-glow)">
              {/* Scratch 1 glow */}
              <path d="M 18 5 L 50 22" stroke="#ff6b00" strokeWidth="0.4" opacity="0.8" fill="none"/>
              <path d="M 20 8 L 52 23" stroke="#ff6b00" strokeWidth="0.3" opacity="0.5" fill="none"/>
              <path d="M 22 11 L 54 24" stroke="#ff6b00" strokeWidth="0.2" opacity="0.3" fill="none"/>
              {/* Scratch 2 glow */}
              <path d="M 35 22 L 75 22" stroke="#ff6b00" strokeWidth="0.4" opacity="0.8" fill="none"/>
              <path d="M 38 24 L 78 24" stroke="#ff6b00" strokeWidth="0.3" opacity="0.5" fill="none"/>
              <path d="M 41 26 L 81 26" stroke="#ff6b00" strokeWidth="0.2" opacity="0.3" fill="none"/>
              {/* Scratch 3 glow */}
              <path d="M 58 38 L 105 55" stroke="#ff6b00" strokeWidth="0.4" opacity="0.8" fill="none"/>
              <path d="M 62 40 L 108 56" stroke="#ff6b00" strokeWidth="0.3" opacity="0.5" fill="none"/>
              <path d="M 66 42 L 111 57" stroke="#ff6b00" strokeWidth="0.2" opacity="0.3" fill="none"/>
            </g>
          </svg>

          {/* Animated scratch reveal — each scratch tears in sequentially */}
          <div className="claw-scratches" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
            {/* Scratch 1 — tears in from left */}
            <div style={{
              position: 'absolute',
              top: '18%',
              left: '-2%',
              width: '55%',
              height: 80,
              overflow: 'visible',
              animation: 'claw-tear-1 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
            }}>
              <svg width="100%" height="80" viewBox="0 0 400 80" preserveAspectRatio="none" fill="none">
                <path d="M 5 75 L 80 5 L 400 75" stroke="#ff6b00" strokeWidth="8" strokeLinecap="round" filter="url(#tear-glow)"/>
                <path d="M 20 75 L 100 10 L 380 75" stroke="#ff6b00" strokeWidth="5" strokeLinecap="round" opacity="0.7"/>
                <path d="M 35 75 L 120 20 L 360 75" stroke="#ff6b00" strokeWidth="3" strokeLinecap="round" opacity="0.5"/>
              </svg>
            </div>

            {/* Scratch 2 — tears in from top */}
            <div style={{
              position: 'absolute',
              top: '38%',
              left: '20%',
              width: '60%',
              height: 80,
              overflow: 'visible',
              animation: 'claw-tear-2 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.06s forwards',
              opacity: 0,
            }}>
              <svg width="100%" height="80" viewBox="0 0 400 80" preserveAspectRatio="none" fill="none">
                <path d="M 0 5 L 120 75 L 400 5" stroke="#ff6b00" strokeWidth="8" strokeLinecap="round" filter="url(#tear-glow)"/>
                <path d="M 20 5 L 140 70 L 380 5" stroke="#ff6b00" strokeWidth="5" strokeLinecap="round" opacity="0.7"/>
                <path d="M 40 5 L 160 65 L 360 5" stroke="#ff6b00" strokeWidth="3" strokeLinecap="round" opacity="0.5"/>
              </svg>
            </div>

            {/* Scratch 3 — tears in from right */}
            <div style={{
              position: 'absolute',
              top: '58%',
              left: '42%',
              width: '58%',
              height: 80,
              overflow: 'visible',
              animation: 'claw-tear-3 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.12s forwards',
              opacity: 0,
            }}>
              <svg width="100%" height="80" viewBox="0 0 400 80" preserveAspectRatio="none" fill="none">
                <path d="M 0 75 L 80 5 L 395 75" stroke="#ff6b00" strokeWidth="8" strokeLinecap="round" filter="url(#tear-glow)"/>
                <path d="M 20 75 L 100 15 L 380 75" stroke="#ff6b00" strokeWidth="5" strokeLinecap="round" opacity="0.7"/>
                <path d="M 40 75 L 120 25 L 360 75" stroke="#ff6b00" strokeWidth="3" strokeLinecap="round" opacity="0.5"/>
              </svg>
            </div>
          </div>

          {/* Particle debris near scratches */}
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
            <div style={{
              position: 'absolute',
              top: '15%',
              left: '12%',
              width: 4,
              height: 4,
              borderRadius: '50%',
              background: '#ff6b00',
              animation: 'particle-burst 0.25s ease-out forwards',
            }}/>
            <div style={{
              position: 'absolute',
              top: '22%',
              left: '48%',
              width: 3,
              height: 3,
              borderRadius: '50%',
              background: '#ff6b00',
              animation: 'particle-burst 0.25s ease-out 0.05s forwards',
            }}/>
            <div style={{
              position: 'absolute',
              top: '42%',
              right: '18%',
              width: 5,
              height: 5,
              borderRadius: '50%',
              background: '#ff6b00',
              animation: 'particle-burst 0.25s ease-out 0.08s forwards',
            }}/>
            <div style={{
              position: 'absolute',
              top: '44%',
              right: '35%',
              width: 2,
              height: 2,
              borderRadius: '50%',
              background: '#ff6b00',
              animation: 'particle-burst 0.25s ease-out 0.1s forwards',
            }}/>
            <div style={{
              position: 'absolute',
              bottom: '38%',
              left: '28%',
              width: 3,
              height: 3,
              borderRadius: '50%',
              background: '#ff6b00',
              animation: 'particle-burst 0.25s ease-out 0.12s forwards',
            }}/>
            <div style={{
              position: 'absolute',
              bottom: '35%',
              left: '55%',
              width: 2,
              height: 2,
              borderRadius: '50%',
              background: '#ff6b00',
              animation: 'particle-burst 0.25s ease-out 0.15s forwards',
            }}/>
          </div>
        </div>
      )}

      {/* Persistent ambient claw marks (subtle background texture) */}
      {loadAnimationDone && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 0,
            pointerEvents: 'none',
            opacity: 0.06,
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

      {/* Scratch layer for interactive drag marks */}
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
        /* Overlay fades out after scratches tear through */
        @keyframes claw-overlay-out {
          0% { opacity: 1; }
          70% { opacity: 1; }
          100% { opacity: 0; pointer-events: none; }
        }
        .claw-overlay {
          animation: claw-overlay-out 2.2s ease forwards;
        }

        /* Scratch 1 — tears in from left */
        @keyframes claw-tear-1 {
          0% {
            opacity: 0;
            transform: translateX(-30px) scaleX(0.2);
          }
          20% {
            opacity: 1;
            transform: translateX(0) scaleX(1.05);
          }
          40% {
            transform: translateX(0) scaleX(0.98);
          }
          60% { opacity: 1; }
          100% { opacity: 0; transform: translateX(0) scaleX(1); }
        }

        /* Scratch 2 — tears in from top */
        @keyframes claw-tear-2 {
          0% {
            opacity: 0;
            transform: translateY(-20px) scaleY(0.2);
          }
          20% {
            opacity: 1;
            transform: translateY(0) scaleY(1.1);
          }
          40% {
            transform: translateY(0) scaleY(0.97);
          }
          60% { opacity: 1; }
          100% { opacity: 0; transform: translateY(0) scaleY(1); }
        }

        /* Scratch 3 — tears in from right */
        @keyframes claw-tear-3 {
          0% {
            opacity: 0;
            transform: translateX(30px) scaleX(0.2);
          }
          20% {
            opacity: 1;
            transform: translateX(0) scaleX(1.05);
          }
          40% {
            transform: translateX(0) scaleX(0.98);
          }
          60% { opacity: 1; }
          100% { opacity: 0; transform: translateX(0) scaleX(1); }
        }

        /* Debris particles burst outward */
        @keyframes particle-burst {
          0% {
            transform: scale(0) translate(0, 0);
            opacity: 0.8;
          }
          50% {
            opacity: 0.4;
          }
          100% {
            transform: scale(1.5) translate(var(--tx, 5px), var(--ty, -8px));
            opacity: 0;
          }
        }
        @keyframes cursor-pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.3); }
        }
      `}</style>
    </>
  )
}
