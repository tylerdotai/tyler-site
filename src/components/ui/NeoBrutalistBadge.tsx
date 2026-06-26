import { cn } from "@components/lib/utils"
import { type HTMLAttributes, type ReactNode } from "react"

type Variant = "ground" | "ink" | "accent" | "surface" | "muted"
type Size = "sm" | "md"

interface NeoBrutalistBadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: Variant
  size?: Size
  children?: ReactNode
}

const variantStyles: Record<Variant, { bg: string; text: string; shadow: string }> = {
  ground: {
    bg: "bg-ground",
    text: "text-ink",
    shadow: "#000000",
  },
  ink: {
    bg: "bg-ink",
    text: "text-surface",
    shadow: "#000000",
  },
  accent: {
    bg: "bg-accent",
    text: "text-ink",
    shadow: "#000000",
  },
  surface: {
    bg: "bg-surface",
    text: "text-ink",
    shadow: "#000000",
  },
  muted: {
    bg: "bg-muted",
    text: "text-surface",
    shadow: "#000000",
  },
}

const sizeStyles: Record<Size, string> = {
  sm: "px-2 py-0.5 text-[10px]",
  md: "px-3 py-1 text-xs",
}

function NeoBrutalistBadge({
  variant = "surface",
  size = "md",
  className,
  children,
  ...props
}: NeoBrutalistBadgeProps) {
  const { bg, text, shadow } = variantStyles[variant]
  const shadowStyle = `4px 4px 0 ${shadow}`

  return (
    <div
      className={cn(
        "inline-flex items-center justify-center font-mono uppercase tracking-widest border-[3px] border-ink rounded-none",
        bg,
        text,
        sizeStyles[size],
        className
      )}
      style={{ boxShadow: shadowStyle }}
      {...props}
    >
      {children}
    </div>
  )
}

export { NeoBrutalistBadge, type NeoBrutalistBadgeProps }
