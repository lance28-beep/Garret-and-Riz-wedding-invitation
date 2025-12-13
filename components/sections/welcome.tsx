"use client"

import { Section } from "@/components/section"
import { siteConfig } from "@/content/site"
import { Cormorant_Garamond } from "next/font/google"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
})

export function Welcome() {
  const groomName = siteConfig.couple.groomNickname || siteConfig.couple.groom
  const brideName = siteConfig.couple.brideNickname || siteConfig.couple.bride
  return (
    <Section
      id="welcome"
      className="relative overflow-hidden bg-transparent py-12 sm:py-16 md:py-20"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[#E0CFB5]/50 z-0" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Glass effect container with transparent glass effect */}
        <div className="relative overflow-hidden rounded-3xl sm:rounded-[2rem] border border-white/30 backdrop-blur-lg bg-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] px-5 sm:px-8 md:px-10 py-8 sm:py-10 md:py-12">

          <div className="relative text-center space-y-6 sm:space-y-7 md:space-y-8">
          {/* Main heading */}
          <div className="space-y-2 sm:space-y-3">
            <p
              className={`${cormorant.className} text-xs sm:text-sm md:text-base uppercase tracking-[0.28em] text-black font-semibold`}
            >
              {groomName} &amp; {brideName}
            </p>
            <h2
              className="style-script-regular text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black font-normal"
            >
              Welcome to our wedding website
            </h2>


            {/* Verse */}
            <div className="space-y-2 pt-2">
              <p
                className={`${cormorant.className} text-sm sm:text-base md:text-lg text-black italic leading-relaxed px-2 sm:px-4`}
              >
                &quot;Love is patient, love is kind. It does not envy, it does not boast, it is not proud… It always protects, always trusts, always hopes, always perseveres.&quot;
              </p>
              <p
                className={`${cormorant.className} text-xs sm:text-sm md:text-base text-black tracking-[0.2em] uppercase font-medium`}
              >
                1 Corinthians 13:4–7 (NIV)
              </p>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center gap-2 pt-2">
              <span className="h-px w-12 sm:w-20 md:w-24 bg-black/30" />
              <span className="w-2 h-2 rounded-full bg-[#D2AC6E] shadow-[0_0_16px_rgba(210,172,110,0.8)]" />
              <span className="h-px w-12 sm:w-20 md:w-24 bg-black/30" />
            </div>
          </div>

          {/* Body text */}
          <div
            className={`${cormorant.className} text-base sm:text-lg md:text-xl leading-relaxed sm:leading-8 md:leading-9 text-black space-y-4 sm:space-y-5 px-2 sm:px-4`}
          >
            <p className="font-normal">
              We&apos;ve found a love that&apos;s a true blessing, and we give thanks to God for writing the
              beautiful story of our journey together. With hearts full of gratitude, we&apos;re excited to share
              this blessing with you! Thank you for your love, prayers, and support. We can&apos;t wait to celebrate
              this joyful day together!
            </p>
            <p className="font-normal">
              Feel free to browse through important information and other helpful reminders — everything you
              need to join us in this celebration!
            </p>
          </div>
          </div>
        </div>
      </div>
    </Section>
  )
}


