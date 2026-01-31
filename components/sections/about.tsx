"use client"

import type React from "react"
import AnimatedSection from "./section-wrapper"
import Image from "next/image"
import { FaGithub, FaBriefcase, FaGraduationCap, FaUser, FaMapMarkerAlt } from 'react-icons/fa'
import { motion, Variants } from "framer-motion" // Add Variants type

export default function About() {
  const containerVariants: Variants = {
    initial: { 
      opacity: 0 
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5
      },
    }
  }

  const itemVariants: Variants = {
    initial: { 
      y: 20, 
      opacity: 0 
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    }
  }

  const imageVariants: Variants = {
    initial: { 
      scale: 0.8, 
      opacity: 0 
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      }
    },
    hover: {
      scale: 1.05,
      rotate: 2,
      transition: {
        duration: 0.3,
      }
    }
  }

  const statCardVariants: Variants = {
    initial: { 
      y: 20, 
      opacity: 0 
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      }
    },
    hover: {
      y: -5,
      scale: 1.05,
      transition: {
        duration: 0.2,
      }
    }
  }

  return (
    <AnimatedSection id="about" title="Perkenalan">
      <motion.div
        className="grid gap-6 md:grid-cols-5"
        variants={containerVariants}
        initial="initial"
        animate="animate"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div 
          className="md:col-span-2 rounded-xl border bg-card p-4 flex items-center justify-center"
          variants={itemVariants}
        >
          <motion.div
            variants={imageVariants}
            whileHover="hover"
          >
            <Image 
              src="/images/logo.png" 
              alt="Logo" 
              width={400} 
              height={400} 
              className="object-contain" 
              priority 
            />
          </motion.div>
        </motion.div>

        <motion.div 
          className="md:col-span-3 space-y-6"
          variants={containerVariants}
        >
          {["Halo, saya Made Khrisna Ari Dwi Payana. Saya pelajar di SMKN 3 Singaraja, jurusan Teknik Jaringan dan Komputer Telekomunikasi (TJKT), dan tinggal di Buleleng, Bali.",
            "Saya memiliki hobi bermain bulu tangkis dengan mengikuti ekstrarikurer bola tangkis di sekolah saya untuk meningkatkan skill bermain saya.",
            "Saya sangat menyukai dunia teknologi, terutama pemrograman dan jaringan. Selama lebih dari tiga tahun saya aktif di bidang pemrograman dan pengembangan web, serta memiliki sekitar satu tahun pengalaman di bidang jaringan.",
            "Fokus saya adalah membuat aplikasi yang bermanfaat, khususnya yang memadukan konsep jaringan dan pemrograman."
          ].map((text, index) => (
            <motion.p
              key={index}
              className="leading-relaxed"
              variants={itemVariants}
            >
              {text}
            </motion.p>
          ))}

          <motion.div 
            className="grid grid-cols-1 gap-4 sm:grid-cols-3"
            variants={containerVariants}
          >
            {[
              { icon: FaUser, text: "17 Tahun" },
              { icon: FaMapMarkerAlt, text: "Buleleng, Bali" },
              { icon: FaGraduationCap, text: "Pelajar SMKN 3 Singaraja" }
            ].map(({ icon: Icon, text }, index) => (
              <motion.div 
                key={text}
                className="stat-card flex flex-col items-center gap-2 p-3 rounded-lg border bg-card/50"
                variants={statCardVariants}
                custom={index}
                whileHover="hover"
              >
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon className="text-2xl text-primary" />
                </motion.div>
                <span className="text-sm text-center">{text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatedSection>
  )
}
