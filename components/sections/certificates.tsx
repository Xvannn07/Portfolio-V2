"use client"

import AnimatedSection from "./section-wrapper"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { motion, AnimatePresence } from "framer-motion"
import { FaCalendar, FaBuilding, FaChevronLeft, FaChevronRight, FaFilePdf, FaAward } from "react-icons/fa"

const certificates = [
	{
		id: "tab1",
		title: "Backend Javascript Fundamentals",
		issuer: "Dicoding Indonesia Academy",
		date: "18 May 2025",
		category: "Web Development",
		description:
			"Menyelesaikan pelatihan komprehensif tentang dasar-dasar pengembangan web termasuk: JavaScript Backend.",
		imageUrl: "/certificates/backend-javascript.png",
		pdfUrl: "/certificates/backend-javascript.pdf",
	},
	{
		id: "tab2",
		title: "Pemograman Javascript",
		issuer: "Dicoding Indonesia Academy",
		date: "13 May 2025",
		category: "Programming",
		description:
			"Berhasil menyelesaikan kursus pemrograman javascript dasar.",
		imageUrl: "/certificates/pemograman-javascript.png",
		pdfUrl: "/certificates/pemograman-javascript.pdf",
	},
	{
		id: "tab3",
		title: "Mikrotik MTCNA",
		issuer: "Mikrotik Academy",
		date: "2 September 2025",
		category: "Mikrotik",
		description:
			"berhasil menyelesaikan persyaratan pelatihan dan sertifikasi yang sesuai, dengan ini diakui sebagai Associate Jaringan Bersertifikat MikroTik.",
		imageUrl: "/certificates/mikrotik-mtcna.png",
		pdfUrl: "/certificates/mikrotik-mtcna.pdf",
	},
	{
		id: "tab4",
		title: "Desain UI/UX Figma",
		issuer: "YHOIKI TEAM Webinar",
		date: "10 Juli 2025",
		category: "UX/UI",
		description:
			"Berhasil menyelesaikan kursus dasar desain UI/UX menggunakan Figma.",
		imageUrl: "/certificates/ui-ux.png",
		pdfUrl: "/certificates/ui-ux.pdf",
	},
	{
		id: "tab5",
		title: "Dasar AI",
		issuer: "Dicoding Indonesia Academy",
		date: "27 September 2025",
		category: "AI",
		description:
			"Berhasil menyelesaikan kursus dasar AI, Dengan Kesempatan Biasiswa IDCamp dan GoogleCloud.",
		imageUrl: "/certificates/dasar-ai.png",
		pdfUrl: "/certificates/dasar-ai.pdf",
	},
]

export default function Certificates() {
	const { toast } = useToast()
	const sliderRef = useRef<HTMLDivElement>(null)
	const [activeIndex, setActiveIndex] = useState(0)
	const [canScrollLeft, setCanScrollLeft] = useState(false)
	const [canScrollRight, setCanScrollRight] = useState(true)

	const handleScroll = () => {
		if (!sliderRef.current) return
		
		const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current
		setCanScrollLeft(scrollLeft > 0)
		setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
		
		// Update active index based on scroll position
		const slideWidth = clientWidth
		const newIndex = Math.round(scrollLeft / slideWidth)
		setActiveIndex(newIndex)
	}

	const scroll = (direction: 'left' | 'right') => {
		if (!sliderRef.current) return
		
		const newIndex = direction === 'left' 
			? Math.max(0, activeIndex - 1)
			: Math.min(certificates.length - 1, activeIndex + 1)
		
		setActiveIndex(newIndex)
		sliderRef.current.scrollTo({
			left: newIndex * sliderRef.current.clientWidth,
			behavior: 'smooth'
		})
	}

	useEffect(() => {
		const slider = sliderRef.current
		if (slider) {
			slider.addEventListener('scroll', handleScroll)
			handleScroll() // Check initial scroll state
		}
		return () => slider?.removeEventListener('scroll', handleScroll)
	}, [])

	const openPDF = (pdfUrl: string, title: string) => {
		window.open(pdfUrl, "_blank", "noopener,noreferrer")
		toast({
			title: "Opening Certificate",
			description: `Viewing "${title}" certificate in new tab`,
			duration: 1500,
		})
	}

	return (
		<AnimatedSection id="certificates" title="SERTIFIKAT">
			<div className="relative">
				{/* Enhanced Navigation Buttons */}
				<motion.button
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.95 }}
					onClick={() => scroll('left')}
					className={`nav-button left-4 ${!canScrollLeft && 'pointer-events-none opacity-0'}`}
				>
					<FaChevronLeft className="h-5 w-5" />
				</motion.button>
				
				<motion.button
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.95 }}
					onClick={() => scroll('right')}
					className={`nav-button right-4 ${!canScrollRight && 'pointer-events-none opacity-0'}`}
				>
					<FaChevronRight className="h-5 w-5" />
				</motion.button>

				{/* Progress Indicators */}
				<div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
					{certificates.map((_, idx) => (
						<button
							key={idx}
							onClick={() => {
								if (!sliderRef.current) return
								sliderRef.current.scrollTo({
									left: idx * sliderRef.current.clientWidth,
									behavior: 'smooth'
								})
								setActiveIndex(idx)
							}}
							className={`h-1.5 w-8 rounded-full transition-all duration-300 
								${idx === activeIndex ? 'bg-primary w-12' : 'bg-primary/20'}`}
						/>
					))}
				</div>

				{/* Enhanced Certificates Slider */}
				<div 
					ref={sliderRef}
					className="certificates-slider hide-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-12 pt-4"
				>
					<AnimatePresence mode="wait">
						{certificates.map((cert, idx) => (
							<motion.div
								key={cert.id}
								initial={{ scale: 0.8, opacity: 0 }}
								animate={{ 
									scale: idx === activeIndex ? 1 : 0.9,
									opacity: idx === activeIndex ? 1 : 0.5,
								}}
								exit={{ scale: 0.8, opacity: 0 }}
								transition={{ duration: 0.3 }}
								className="certificate-slide relative h-[28rem] w-[20rem] shrink-0 snap-center"
							>
								<div className="certificate-card group relative h-full overflow-hidden rounded-xl bg-card/50 backdrop-blur-sm transition-all duration-500 hover:bg-card">
									{/* Category Badge */}
									<div className="absolute -right-16 top-4 z-10 rotate-45 bg-primary/80 px-16 py-1 text-xs font-medium text-primary-foreground backdrop-blur-sm">
										{cert.category}
									</div>

									{/* Certificate Image */}
									<div className="relative aspect-[4/3] w-full overflow-hidden">
										<Image
											src={cert.imageUrl}
											alt={cert.title}
											fill
											className="object-cover transition-all duration-500 group-hover:scale-105"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
											<button
												onClick={() => openPDF(cert.pdfUrl, cert.title)}
												className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-primary p-3 text-primary-foreground opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 hover:scale-110 hover:bg-accent"
											>
												<FaFilePdf className="h-6 w-6" />
											</button>
										</div>
									</div>

									{/* Certificate Content */}
									<div className="space-y-4 p-6">
										<div className="flex items-start gap-3">
											<div className="certificate-icon-wrapper rounded-lg bg-primary/10 p-2">
												<FaAward className="h-5 w-5 text-primary" />
											</div>
											<h3 className="flex-1 font-semibold tracking-tight transition-colors group-hover:text-primary">
												{cert.title}
											</h3>
										</div>

										<div className="grid gap-3 text-sm">
											<div className="certificate-info-item flex items-center gap-2">
												<FaBuilding className="h-4 w-4 text-primary" />
												<span className="truncate">{cert.issuer}</span>
											</div>
											<div className="certificate-info-item flex items-center gap-2">
												<FaCalendar className="h-4 w-4 text-primary" />
												<span>{cert.date}</span>
											</div>
										</div>

										<div className="description-container relative">
											<p className="certificate-description text-sm text-muted-foreground transition-colors group-hover:text-foreground">
												{cert.description}
											</p>
											{/* Gradient overlay */}
											<div className="description-fade absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-card to-transparent group-hover:opacity-0 transition-opacity" />
										</div>
									</div>

									{/* Hover Glow Effect */}
									<div className="glow-effect absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
								</div>
							</motion.div>
						))}
					</AnimatePresence>
				</div>
			</div>
		</AnimatedSection>
	)
}
