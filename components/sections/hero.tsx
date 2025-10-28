"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion" // Add AnimatePresence
import { useState, useEffect } from "react" // Add React hooks

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0)
  const texts = ["Seorang Pelajar", "Pengembangan Website"]

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((current) => (current + 1) % texts.length)
    }, 4000) // Change text every 4 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" aria-label="Perkenalan" className="relative overflow-hidden min-h-[70vh]">
      {/* Animated Marquee background */}
      <motion.div 
        aria-hidden 
        className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="simple-marquee text-[20vw] font-bold uppercase text-primary/20"
          animate={{ 
            x: [0, -1000],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {"WEB DEVELOPER • NETWORK ENGINEER • BACKEND •".repeat(4)}
        </motion.div>
      </motion.div>

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 py-20 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p 
            className="text-sm text-muted-foreground cursor-default"
            whileHover={{ scale: 1.05 }}
          >
            <motion.span 
              className="wave-hand inline-block"
              animate={{ 
                rotate: [0, 14, -8, 14, -4, 10, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              👋
            </motion.span> 
            Halo
          </motion.p>
          {/* Title Section with Animated Text */}
          <motion.h1 
            className="mt-2 text-pretty text-4xl font-bold tracking-tight md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Saya{" "}
            <motion.span 
              className="text-primary"
              whileHover={{ scale: 1.05 }}
            >
              Made Khrisna
            </motion.span>
            ,{" "}
            <AnimatePresence mode="wait">
              <motion.span
                key={textIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="inline-block"
              >
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ 
                    width: "100%",
                    transition: {
                      duration: 2,
                      ease: "easeOut",
                    }
                  }}
                  className="inline-block whitespace-nowrap overflow-hidden"
                  style={{ borderRight: "2px solid", paddingRight: "4px" }}
                >
                  {texts[textIndex]}
                </motion.span>
              </motion.span>
            </AnimatePresence>
          </motion.h1>
          <motion.p 
            className="mt-4 text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ color: "#your-text-color" }}
          >
            Hallo saya adalah seorang pelajar yang memiliki minat besar dalam dunia
            desain dan pengembangan web. Saya senang menciptakan solusi kreatif yang
            tidak hanya menarik secara visual, tetapi juga fungsional dan user-friendly.
          </motion.p>
          <motion.div 
            className="mt-6 flex gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild>
                <a href="#projects">Lihat Projek</a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="secondary" asChild>
                <a href="#contact">Kontak</a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="relative mx-auto aspect-[4/5] w-72 md:w-80 perspective-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Blobs remain unchanged */}
          <motion.div 
            className="accent-blob absolute -left-6 -top-6 h-24 w-24 rotate-6 md:h-28 md:w-28"
            animate={{ 
              y: [0, -10, 0],
              rotate: [6, 8, 6],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div 
            className="accent-blob absolute -right-8 bottom-4 h-32 w-20 -rotate-6 md:h-40 md:w-24"
            animate={{ 
              y: [0, 10, 0],
              rotate: [-6, -8, -6],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Modified Image container */}
          <div className="relative h-full w-full overflow-hidden rounded-xl ring-1 ring-black/5">
            <motion.div
              className="h-full w-full"
              whileHover={{ 
                scale: 1.03,
                rotate: 2,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
            >
              <Image
                src="/images/profile.png"
                alt="Foto formal setengah badan"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 768px) 20rem, 18rem"
                style={{ 
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden"
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
