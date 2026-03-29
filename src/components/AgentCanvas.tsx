'use client'

import { useEffect, useRef } from 'react'

interface Node {
  x: number
  y: number
  radius: number
  opacity: number
  phase: number
  vx: number
  vy: number
  color: string
}

export default function AgentCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const nodesRef = useRef<Node[]>([])
  const animFrameRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createNodes = () => {
      const count = Math.min(60, Math.floor((window.innerWidth * window.innerHeight) / 20000))
      const nodes: Node[] = []
      const colors = ['#e0e0e0', '#808080', '#b0b0b0']
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: 2 + Math.random() * 4,
          opacity: 0.3,
          phase: Math.random() * Math.PI * 2,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          color: colors[Math.floor(Math.random() * colors.length)],
        })
      }
      nodesRef.current = nodes
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const nodes = nodesRef.current
      const time = Date.now() * 0.001

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 150) {
            const alpha = (1 - dist / 150) * 0.12
            ctx.strokeStyle = `rgba(160, 160, 160, ${alpha})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw nodes
      for (const node of nodes) {
        // Pulse opacity
        const pulse = Math.sin(time * 0.8 + node.phase)
        const opacity = 0.3 + (pulse + 1) * 0.25
        node.opacity = Math.max(0.2, Math.min(0.8, opacity))

        // Glow
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.radius * 3
        )
        gradient.addColorStop(0, node.color.replace(')', `, ${node.opacity})`).replace('rgb', 'rgba').replace('#', ''))
        gradient.addColorStop(1, 'transparent')
        
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius * 3, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(180, 180, 180, ${node.opacity * 0.15})`
        ctx.fill()

        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(200, 200, 200, ${node.opacity})`
        ctx.fill()

        // Update position (random walk)
        node.x += node.vx
        node.y += node.vy

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        // Dampen velocity
        node.vx *= 0.999
        node.vy *= 0.999

        // Small random perturbation
        if (Math.random() < 0.01) {
          node.vx += (Math.random() - 0.5) * 0.1
          node.vy += (Math.random() - 0.5) * 0.1
        }
      }

      animFrameRef.current = requestAnimationFrame(draw)
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    resize()
    createNodes()
    if (!prefersReducedMotion) {
      draw()
    }

    window.addEventListener('resize', () => {
      resize()
      createNodes()
    })

    return () => {
      cancelAnimationFrame(animFrameRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}
