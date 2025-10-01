export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer aria-label="Footer" className="bg-primary/5 border-t border-border mt-16">
      <div className="mx-auto max-w-6xl px-4 py-8 text-foreground">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3">
            {/* If you have a logo image, place it here */}
            {/* <Image src="/logo.svg" alt="" width={24} height={24} className="opacity-80" /> */}
            <span className="text-sm font-medium tracking-wide">Xvannn07</span>
          </div>

          {/* Copyright */}
          <div className="text-xs text-foreground/70">© {year} • All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
