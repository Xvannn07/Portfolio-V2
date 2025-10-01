import Navbar from "@/components/sections/navbar"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Skills from "@/components/sections/skills"
import Projects from "@/components/sections/projects"
import Education from "@/components/sections/education"
import Certificates from "@/components/sections/certificates"
import Experience from "@/components/sections/experience"
import Contact from "@/components/sections/contact"
import Footer from "@/components/sections/footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certificates />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}
