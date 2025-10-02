"use client"

import AnimatedSection from "./section-wrapper"
import { 
  SiNextdotjs, 
  SiReact, 
  SiTypescript, 
  SiTailwindcss, 
  SiFigma, 
  SiGit,
  SiVuedotjs,
  SiExpress,
  SiBootstrap,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiAdobexd
} from "react-icons/si"
import { FaServer } from "react-icons/fa"

const skills = [
  // Frontend
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "Vue.js", icon: SiVuedotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },
  
  // Styling & Design
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "UI/UX Design", icon: SiAdobexd },
  { name: "Figma", icon: SiFigma },
  
  // Backend & Tools
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "Backend", icon: FaServer },
  { name: "Git", icon: SiGit },
]

export default function Skills() {
  return (
    <AnimatedSection id="skills" title="BIDANG KEAHLIAN">
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
        {skills.map(({ name, icon: Icon }, idx) => (
          <li
            key={name}
            className="skill-card group rounded-lg border bg-card p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg animate-pop"
            style={{
              animationDelay: `${idx * 70}ms`,
              transform: `perspective(1000px) rotateX(0deg)`,
            }}
          >
            <div className="skill-icon-wrapper relative">
              <Icon
                className="mx-auto size-8 transition-all duration-300 group-hover:text-primary group-hover:scale-110 group-hover:rotate-12"
                aria-hidden
              />
              <div className="skill-glow absolute inset-0 opacity-0 group-hover:opacity-100" />
            </div>
            <p className="mt-2 text-sm font-medium transition-colors group-hover:text-primary">
              {name}
            </p>
          </li>
        ))}
      </ul>
    </AnimatedSection>
  )
}
