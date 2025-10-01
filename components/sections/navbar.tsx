"use client"

import { useEffect, useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import useScrollSpy from "@/hooks/use-scrollspy"
import { cn } from "@/lib/utils"

const SECTIONS = [
  { id: "hero", label: "Perkenalan" },
  { id: "about", label: "Perkenalan" },
  { id: "skills", label: "Keahlian" },
  { id: "projects", label: "Projek" },
  { id: "education", label: "Pendidikan" },
  { id: "certificates", label: "Sertifikat" },
  { id: "experience", label: "Pengalaman" },
  { id: "contact", label: "Kontak" },
]

export default function Navbar() {
  const activeId = useScrollSpy(
    SECTIONS.map((s) => s.id),
    { rootMargin: "-40% 0% -50% 0%" },
  )
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener("scroll", close)
    return () => window.removeEventListener("scroll", close)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/50 border-b">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#hero" className="flex items-center gap-2 font-semibold tracking-tight text-balance">
          <img src="/images/logo.png" alt="Logo" className="size-7 rounded" />
          <span>
            <span className="text-primary">Xvannn</span>07
          </span>
        </a>

        <button className="md:hidden" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          <Menu className="size-6" />
        </button>

        <ul
          className={cn(
            "md:flex md:gap-4 md:static md:bg-transparent md:p-0",
            open ? "absolute left-0 right-0 top-full bg-background p-4 grid gap-2" : "hidden md:flex",
          )}
        >
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={cn(
                  "rounded-md px-3 py-2 text-sm transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                  activeId === s.id && "text-primary",
                )}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
