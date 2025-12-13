"use client"

import React from "react"
import { useEffect, useMemo, useState, useRef } from "react"
import { Section } from "@/components/section"
import { Loader2, Users } from "lucide-react"
import { Cormorant_Garamond } from "next/font/google"
import { siteConfig } from "@/content/site"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400"],
})

interface PrincipalSponsor {
  MalePrincipalSponsor: string
  FemalePrincipalSponsor: string
}

export function PrincipalSponsors() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  // Helper component for elegant section titles
  const SectionTitle = ({
    children,
    align = "center",
    className = "",
  }: {
    children: React.ReactNode
    align?: "left" | "center" | "right"
    className?: string
  }) => {
    const textAlign =
      align === "right" ? "text-right" : align === "left" ? "text-left" : "text-center"
    return (
      <h3
        className={`relative ${cormorant.className} text-xs sm:text-sm md:text-base lg:text-lg font-semibold uppercase text-black mb-1.5 sm:mb-2 md:mb-3 tracking-[0.1em] sm:tracking-[0.15em] ${textAlign} ${className} transition-all duration-300`}
      >
        {children}
      </h3>
    )
  }

  // Helper component for name items with alignment
  const NameItem = ({ name, align = "center" }: { name: string, align?: "left" | "center" | "right" }) => {
    const containerAlign =
      align === "right" ? "items-end" : align === "left" ? "items-start" : "items-center"
    const textAlign =
      align === "right" ? "text-right" : align === "left" ? "text-left" : "text-center"
    return (
      <div
        className={`relative flex flex-col ${containerAlign} justify-center py-1 sm:py-1.5 md:py-2.5 w-full group/item transition-all duration-300 hover:scale-[1.02] sm:hover:scale-[1.03]`}
      >
        {/* Hover highlight effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E0CFB5]/18 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 rounded-md" />

        <p
          className={`relative text-black text-[9px] sm:text-[10px] md:text-xs lg:text-sm font-semibold leading-snug break-words ${textAlign} group-hover/item:text-[#8498B0] transition-all duration-300`}
        >
          {name}
        </p>
      </div>
    )
  }

  // Remote data state
  const [sponsors, setSponsors] = useState<PrincipalSponsor[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchSponsors = async () => {
    setIsLoading(true)
    try {
      const res = await fetch("/api/principal-sponsor", { cache: "no-store" })
      if (!res.ok) throw new Error("Failed to load principal sponsors")
      const data: PrincipalSponsor[] = await res.json()
      setSponsors(data)
    } catch (e: any) {
      console.error(e)
      setError(e?.message || "Failed to load principal sponsors")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchSponsors()
  }, [])

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  // Keep sponsors as pairs to ensure alignment
  const sponsorPairs = useMemo(() => 
    sponsors.filter(s => s.MalePrincipalSponsor || s.FemalePrincipalSponsor),
    [sponsors]
  )

  const { groomNickname, brideNickname } = siteConfig.couple

  return (
    <div ref={sectionRef}>
      <Section
        id="sponsors"
        className="relative bg-[#8498B0] py-10 sm:py-12 md:py-16 lg:py-20 overflow-hidden"
      >
        {/* Background image */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <img
            src="/Details/galleryBackground.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Header */}
        <div className="relative z-10 text-center mb-8 sm:mb-10 md:mb-12 px-4">
          {/* Glass effect container with transparent glass effect */}
          <div className="backdrop-blur-lg bg-white/20 border border-white/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.1)] max-w-4xl mx-auto">
            <div className="space-y-3 sm:space-y-4">
              <p
                className={`${cormorant.className} text-xs sm:text-sm md:text-base uppercase tracking-[0.3em] font-semibold text-black`}
              >
                Our Beloved Principal Sponsors
              </p>
              <h2
                className="style-script-regular text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black font-normal"
              >
                Standing with {groomNickname} &amp; {brideNickname}
              </h2>
            </div>

            <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
              <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-black/40 to-transparent" />
              <div className="w-2 h-2 rounded-full bg-[#D2AC6E]" />
              <div className="w-12 sm:w-16 h-px bg-gradient-to-l from-transparent via-black/40 to-transparent" />
            </div>
          </div>
        </div>

        {/* Sponsors content */}
        <div
          className={`relative z-30 max-w-4xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Card with glass effect and sage green tint */}
          <div className="relative backdrop-blur-md bg-[#8498B0]/20 border border-white/20 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 group">
            {/* Card content */}
            <div className="relative py-3 sm:py-6 md:py-8 z-10">
              <div className="relative z-10 w-full">
              {isLoading ? (
                <div className="flex items-center justify-center py-24 sm:py-28 md:py-32">
                  <div className="flex flex-col items-center gap-4">
                    <Loader2 className="h-10 w-10 sm:h-12 sm:w-12 animate-spin text-[#8498B0]" />
                    <span className="text-black font-serif text-base sm:text-lg">Loading sponsors...</span>
                  </div>
                </div>
              ) : error ? (
                <div className="flex items-center justify-center py-24 sm:py-28 md:py-32">
                  <div className="text-center">
                    <p className="text-red-600 font-serif text-base sm:text-lg mb-3">{error}</p>
                    <button
                      onClick={fetchSponsors}
                      className="text-black hover:text-[#8498B0] font-serif underline transition-colors duration-200"
                    >
                      Try again
                    </button>
                  </div>
                </div>
              ) : sponsorPairs.length === 0 ? (
                <div className="text-center py-24 sm:py-28 md:py-32">
                  <Users className="h-14 w-14 sm:h-16 sm:w-16 text-[#8498B0]/60 mx-auto mb-4" />
                  <p className="text-black font-serif text-base sm:text-lg">No sponsors yet</p>
                </div>
              ) : (
                <div className="mb-3 sm:mb-4 md:mb-6 lg:mb-8 space-y-6 sm:space-y-8">
                  {/* Principal Sponsors grid */}
                  <div>
                    <div className="grid grid-cols-1 min-[350px]:grid-cols-2 gap-x-1.5 sm:gap-x-2 md:gap-x-3 mb-1.5 sm:mb-2 md:mb-3">
                      <SectionTitle align="right" className="pr-2 sm:pr-3 md:pr-4">
                        Male Principal Sponsors
                      </SectionTitle>
                      <SectionTitle align="left" className="pl-2 sm:pl-3 md:pl-4">
                        Female Principal Sponsors
                      </SectionTitle>
                    </div>
                    <div className="grid grid-cols-1 min-[350px]:grid-cols-2 gap-x-1.5 sm:gap-x-2 md:gap-x-3 gap-y-1 sm:gap-y-1.5 md:gap-y-2 items-stretch">
                      {sponsorPairs.map((pair, idx) => (
                        <React.Fragment key={`pair-${idx}-${pair.MalePrincipalSponsor || 'empty'}-${pair.FemalePrincipalSponsor || 'empty'}`}>
                          <div className="px-2 sm:px-3 md:px-4">
                            {pair.MalePrincipalSponsor ? (
                              <NameItem name={pair.MalePrincipalSponsor} align="right" />
                            ) : (
                              <div className="py-0.5 sm:py-1 md:py-1.5" />
                            )}
                          </div>
                          <div className="px-2 sm:px-3 md:px-4">
                            {pair.FemalePrincipalSponsor ? (
                              <NameItem name={pair.FemalePrincipalSponsor} align="left" />
                            ) : (
                              <div className="py-0.5 sm:py-1 md:py-1.5" />
                            )}
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      </Section>
    </div>
  )
}