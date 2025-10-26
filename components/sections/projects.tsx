"use client"

import AnimatedSection from "./section-wrapper"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Tag, ChevronDown } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const projects = [
	{
		index: 0,
		title: "Chat AI Website",
		description:
			"Platform chatgpt online yang memungkinkan untuk berinteraksi dengan AI dan juga membuat gambar dengan kekuatan AI.",
		image: "/portfolio/project-chatgpt.png?height=300&width=700",
		tags: ["React", "Vuejs", "Node.js", "Tailwind CSS"],
		github: null,
		demo: "https://chatgpt.xvannn07.xyz",
	},
	{
		index: 1,
		title: "Web DL",
		description:
			"Tools online yang memungkinkan untuk mengunduh media berupa gambar atau video di platform yang didukung.",
		image: "/portfolio/project-webdl.png?height=300&width=700",
		tags: ["ExpressJs", "Tailwind CSS", "Node.js", "HTML"],
		github: "https://github.com/xvannn07/web-down",
		demo: "https://webdl.xvannn07.xyz",
	},
	{
		index: 2,
		title: "Tiktok Downloader",
		description:
			"Website online yang memungkinkan Anda mengunduh media berupa gambar atau video di platform TikTok secara gratis.",
		image: "/portfolio/project-tiktok.png?height=300&width=700",
		tags: ["ExpressJS", "Bootsrap", "Node.js", "HTML/CSS"],
		github: "https://github.com/tiktok-downloader",
		demo: "https://tiktok.xvannn07.xyz",
	},
	{
		index: 3,
		title: "Template Hostpot Mikrotik",
		description:
			"Script template hotspot Mikrotik yang memungkinkan Anda mengubah UI pada hotspot Mikrotik agar terlihat lebih keren dan modern.",
		image: "/portfolio/project-mikrotik.png?height=300&width=700",
		tags: ["HTML/CSS", "JavaScript", "Mikrotik"],
		github: "https://github.com/Xvannn07/templat-hostpot-mikrotik",
		demo: null,
	},
	{
		index: 4,
		title: "Template Hotspot Mikrotik V2",
		description:
			"Script template hotspot Mikrotik yang memungkinkan Anda mengubah UI pada hotspot Mikrotik agar terlihat lebih keren dan modern.",
		image: "/portfolio/project-mikrotik-v2.png?height=300&width=700",
		tags: ["HTML/CSS", "JavaScript", "Mikrotik"],
		github: "https://github.com/Xvannn07/template-hotpot-mikrotik-v2",
		demo: null,
	},
	{
		index: 5,
		title: "Profil Kelas TJKT 2",
		description:
			"Menampilkan profil kelas dengan berbagai aktivitas, foto kelompok, dan juga struktur organisasi kelas.",
		image: "/portfolio/project-kelas.png?height=300&width=700",
		tags: ["HTML/CSS", "Javascript", "VueJS", "Tailwind CSS"],
		github: null,
		demo: "https://tjkt2.vannesa.biz.id",
	},
]

export default function Projects() {
	const [expandedDesc, setExpandedDesc] = useState<number | null>(null)

	return (
		<AnimatedSection id="projects" title="Projek">
			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" data-stagger>
				{projects.map((project, idx) => (
					<Card
						key={project.title}
						className="project-card group relative overflow-hidden border-border/40 backdrop-blur-sm"
						style={{ animationDelay: `${idx * 100}ms` }}
						onClick={() => setExpandedDesc(expandedDesc === idx ? null : idx)}
					>
						{/* Project Image */}
						<div className="relative aspect-video w-full overflow-hidden">
							<Image
								src={project.image}
								alt={project.title}
								fill
								className="object-cover transition-all duration-500 group-hover:scale-105"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
								<div className="absolute bottom-4 left-4 flex gap-2">
									{project.demo && (
										<Button
											size="sm"
											className="project-button"
											onClick={() => window.open(project.demo, "_blank")}
										>
											<ExternalLink className="mr-2 h-4 w-4" />
											Demo
										</Button>
									)}
									{project.github && (
										<Button
											variant="secondary"
											size="sm"
											className="project-button"
											onClick={() => window.open(project.github, "_blank")}
										>
											<Github className="mr-2 h-4 w-4" />
											Sumber
										</Button>
									)}
								</div>
							</div>
						</div>

						{/* Project Content */}
						<CardHeader className="space-y-2">
							<CardTitle className="text-xl font-semibold tracking-tight">
								{project.title}
							</CardTitle>
							<motion.div
								className="description-wrapper relative"
								animate={{ height: expandedDesc === idx ? "auto" : "3rem" }}
								transition={{ duration: 0.3, ease: "easeOut" }}
							>
								<motion.p
									className={`text-sm text-muted-foreground transition-colors ${
										expandedDesc === idx ? "" : "line-clamp-2"
									}`}
									initial={false}
									animate={{
										opacity: expandedDesc === idx ? 1 : 0.7,
									}}
									transition={{ duration: 0.2 }}
								>
									{project.description}
								</motion.p>
								{project.description.length > 100 && (
									<motion.div
										className="absolute bottom-0 left-0 right-0 flex justify-center"
										initial={{ opacity: 0 }}
										animate={{ opacity: expandedDesc === idx ? 0 : 1 }}
									>
										<ChevronDown
											className="h-4 w-4 text-primary animate-bounce"
											aria-hidden
										/>
									</motion.div>
								)}
							</motion.div>
						</CardHeader>

						{/* Project Tags */}
						<CardFooter>
							<div className="flex flex-wrap gap-2">
								{project.tags.map((tag) => (
									<span
										key={tag}
										className="project-tag inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
									>
										<Tag className="h-3 w-3" />
										{tag}
									</span>
								))}
							</div>
						</CardFooter>
					</Card>
				))}
			</div>
		</AnimatedSection>
	)
}
