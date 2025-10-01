"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export default function AnimatedSection({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: React.ReactNode
}) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => entry.isIntersecting && setVisible(true), { threshold: 0.12 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section id={id} ref={ref} className="relative section-decor mx-auto max-w-6xl px-4 py-16">
      {/* full-width surface background behind section content */}
      <div aria-hidden className="section-surface" />
      {/* floating background objects */}
      <div aria-hidden className="floating-objects">
        <span className="blob" />
        <span className="blob" />
        <span className="blob" />
      </div>

      <h2 className="relative z-10 mb-6 text-pretty text-2xl font-semibold tracking-tight md:text-3xl">
        <span className="title-frame">{title}</span>
      </h2>

      <div className={cn("relative z-10", visible && "reveal-in")}>{children}</div>
    </section>
  )
}
