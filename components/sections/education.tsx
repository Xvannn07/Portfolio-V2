import AnimatedSection from "./section-wrapper"
import Image from "next/image"
import { FaGraduationCap, FaCalendar, FaTrophy, FaArrowRight } from "react-icons/fa"

const schools = [
  {
    name: "SDN 1 Banyuning",
    degree: "Sekolah Dasar",
    year: "2015 - 2020",
    logo: "/school/sdn1_banyuning.jpg",
    description: "fokus membaca & menulis dengan lancar, berhitung dasar, rasa ingin tahu, sikap disiplin, kerja kelompok, keterampilan motorik halus (prakarya), kebiasaan belajar.",
    achievements: ["Lulus dengan predikat yang memuaskan", "Aktif dalam organisasi kemahasiswaan"]
  },
  {
    name: "SMPN 5 singaraja",
    degree: "Sekolah Menengah Pertama",
    year: "2020 - 2023",
    logo: "/school/smpn5_singaraja.jpg",
    description: "berpikir kritis, metode ilmiah sederhana (praktikum), kemampuan presentasi, literasi digital dasar, manajemen waktu, kerja tim.",
    achievements: ["Lulus dengan predikat yang memuaskan"]
  },
  {
    name: "SMKN 3 singaraja",
    degree: "Sekolah Menengah Kejuruan",
    year: "2023 - Sekarang",
    logo: "/school/smkn3_singaraja.jpg",
    description: "Mempelajari jaringan komputer, konfigurasi router/switch, troubleshooting, keamanan dasar jaringan.",
    achievements: ["Lulus dengan Sertifikat Jaringan Mikrotik MTCNA", "Aktif Dalam Praktikum Jaringan Komputer"]
  },
]

export default function Education() {
  return (
    <AnimatedSection id="education" title="PENDIDIKAN">
      <div className="relative">
        {/* Enhanced timeline chain */}
        <div 
          aria-hidden 
          className="timeline-chain"
        />

        <ul className="relative z-10 space-y-8">
          {schools.map((school, idx) => (
            <li
              key={school.name}
              className="education-card group relative rounded-xl border bg-card/50 backdrop-blur-sm p-6 transition-all duration-500 hover:bg-card"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {/* Timeline node */}
              <div className="timeline-node">
                <FaGraduationCap className="timeline-icon" />
              </div>
              
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                {/* Logo Section */}
                <div className="logo-wrapper relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src={school.logo || "/placeholder.svg"}
                    alt={`Logo ${school.name}`}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-110"
                    sizes="80px"
                  />
                  <div className="logo-glow" />
                </div>

                {/* Content Section */}
                <div className="flex-1 space-y-4">
                  <div className="content-header">
                    <h3 className="text-xl font-semibold tracking-tight group-hover:text-primary transition-colors">
                      {school.name}
                    </h3>
                    <p className="mt-1 text-base text-muted-foreground group-hover:text-foreground transition-colors">
                      {school.degree}
                    </p>
                    <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                      <FaCalendar className="h-4 w-4 text-primary" />
                      <span>{school.year}</span>
                    </div>
                  </div>

                  {school.description && (
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {school.description}
                    </p>
                  )}

                  {/* Achievement Section with enhanced styling */}
                  {school.achievements && (
                    <div className="achievement-section pt-2">
                      <div className="flex items-center gap-2 mb-3">
                        <FaTrophy className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">Achievements</span>
                      </div>
                      <ul className="grid gap-2">
                        {school.achievements.map((achievement) => (
                          <li
                            key={achievement}
                            className="achievement-item flex items-center gap-2 text-sm"
                          >
                            <FaArrowRight className="h-3 w-3 text-primary achievement-arrow" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </AnimatedSection>
  )
}
