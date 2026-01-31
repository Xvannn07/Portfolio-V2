"use client"

import AnimatedSection from "./section-wrapper"
import Image from "next/image"
import { FaBriefcase, FaCalendar, FaArrowRight, FaMapMarkerAlt } from "react-icons/fa"

const jobs = [
	{
		role: "Network Engineer",
		company: "PT. PALAPA MEDIA PERKASA",
		period: "2025 - Sekarang",
		location: "Singaraja, Bali",
		desc: "Menjadi Siswa Teknisi Magang Dengan Menginstalasi jaringan Serta Maintenance.",
		skills: ["Mikrotik", "Installation Fiber", "Troubleshooting"],
		companyLogo: "/companies/palapamedia.png",
	},
	{
		role: "UX/UI Designer",
		company: "YHOIKI TEAM",
		period: "2025 - Sekarang",
		location: "Remote",
		desc: "Membangun UI reaktif Dengan Figma, dan Mengimplementasikan Ke Next.js Dan Typescript.",
		skills: ["React", "TypeScript", "Next.js", "Tailwind", "Figma"],
		companyLogo: "/companies/yhoiki.png",
	},
]

export default function Experience() {
	return (
		<AnimatedSection id="experience" title="PENGALAMAN">
			<div className="relative space-y-12">
				{/* Enhanced Timeline line with gradient and dots */}
				<div
					className="absolute left-8 top-2 bottom-2 w-[3px] bg-gradient-to-b from-primary via-primary/50 to-primary/10"
					aria-hidden
				/>

				{jobs.map((job, idx) => (
					<article
						key={job.role}
						className="experience-card group relative ml-12 rounded-xl border bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-card"
						style={{ animationDelay: `${idx * 150}ms` }}
					>
						{/* Animated Timeline dot */}
						<div className="timeline-dot absolute -left-[42px] top-8 flex h-6 w-6 items-center justify-center">
							<span className="absolute h-full w-full animate-ping rounded-full bg-primary/20" />
							<span className="absolute h-full w-full rounded-full border-2 border-primary bg-background" />
						</div>

						<div className="flex flex-col gap-6 sm:flex-row sm:items-start">
							{/* Company Logo Container */}
							<div className="company-logo-wrapper relative h-24 w-24 shrink-0 overflow-hidden rounded-xl">
								<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10" />
								<Image
									src={job.companyLogo}
									alt={`${job.company} logo`}
									fill
									className="object-contain p-2 transition-transform duration-300 group-hover:scale-110"
								/>
							</div>

							{/* Content Container */}
							<div className="flex-1 space-y-4">
								<header className="space-y-2">
									<h3 className="flex flex-wrap items-center gap-2 font-medium">
										<span className="role-title text-lg text-primary">
											{job.role}
										</span>
										<FaArrowRight className="h-3 w-3 text-muted-foreground transition-transform group-hover:translate-x-1" />
										<span className="company-name">{job.company}</span>
									</h3>

									<div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
										<div className="flex items-center gap-1">
											<FaCalendar className="h-3 w-3 text-primary" />
											<span>{job.period}</span>
										</div>
										<div className="flex items-center gap-1">
											<FaMapMarkerAlt className="h-3 w-3 text-primary" />
											<span>{job.location}</span>
										</div>
									</div>
								</header>

								<p className="text-pretty text-sm text-muted-foreground transition-colors group-hover:text-foreground">
									{job.desc}
								</p>

								{job.skills && (
									<div className="flex flex-wrap gap-2">
										{job.skills.map((skill) => (
											<span
												key={skill}
												className="skill-tag rounded-full bg-primary/10 px-3 py-1 text-xs text-primary transition-all hover:scale-105 hover:bg-primary/20"
											>
												{skill}
											</span>
										))}
									</div>
								)}
							</div>
						</div>
					</article>
				))}
			</div>
		</AnimatedSection>
	)
}
