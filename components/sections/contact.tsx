"use client"

import type React from "react"

import AnimatedSection from "./section-wrapper"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function Contact() {
  const [sent, setSent] = useState(false)

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <AnimatedSection id="contact" title="Hubungi Saya">
      <div className="grid gap-8 md:grid-cols-2">
        <form onSubmit={onSubmit} className="space-y-3">
          <Input required placeholder="Nama" aria-label="Nama" />
          <Input required type="email" placeholder="Email" aria-label="Email" />
          <Textarea required rows={5} placeholder="Pesan" aria-label="Pesan" />
          <Button type="submit">Kirim</Button>
          {sent && <p className="text-sm text-green-600">Terima kasih! Pesan dummy terkirim (simulasi).</p>}
        </form>
        <div>
          <p className="mb-2 text-sm text-muted-foreground">Atau langsung kirim email:</p>
          <a className="text-primary underline" href="mailto:hello@example.com">
            xvannn07@gmail.com
          </a>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <a className="rounded-md border p-3 hover:bg-secondary" href="https://t.me/Xvannn07" aria-label="LinkedIn">
              Telegram
            </a>
            <a className="rounded-md border p-3 hover:bg-secondary" href="https://github.com/Xvannn07" aria-label="GitHub">
              GitHub
            </a>
            <a className="rounded-md border p-3 hover:bg-secondary" href="https://instagram.com/Xvannn07" aria-label="GitHub">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
