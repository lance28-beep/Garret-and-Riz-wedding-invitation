"use client"

import { Suspense, useState, useCallback } from "react"
import dynamic from "next/dynamic"
import { AudioProvider } from "@/contexts/audio-context"
import { Hero as MainHero } from "@/components/sections/hero"
import { Welcome } from "@/components/sections/welcome"
import { Countdown } from "@/components/sections/countdown"
import { WeddingTimeline } from "@/components/sections/wedding-timeline"
// import { Narrative } from "@/components/sections/narrative"
import { Gallery } from "@/components/sections/gallery"
import { Messages } from "@/components/sections/messages"
import { Details } from "@/components/sections/details"
import Image from "next/image"
import { Section } from "@/components/section"
import { BookOfGuests } from "@/components/sections/book-of-guests"
import { Registry } from "@/components/sections/registry"
import { FAQ } from "@/components/sections/faq"
import { SnapShare } from "@/components/sections/snap-share"
import { Footer } from "@/components/sections/footer"
import { Hero as InvitationHero } from "@/components/loader/Hero"
import { LoadingScreen } from "@/components/loader/LoadingScreen"
import { Navbar } from "@/components/navbar"
import { AppState } from "@/components/types"
import BackgroundMusic from "@/components/background-music"
import { CoupleVideo } from "@/components/sections/couple-video"

const Silk = dynamic(() => import("@/components/silk"), { ssr: false })
const GuestList = dynamic(() => import("@/components/sections/guest-list").then(mod => ({ default: mod.GuestList })), { ssr: false })

export default function Home() {
  const [appState, setAppState] = useState<AppState>(AppState.LOADING)
  const enableDecor = process.env.NEXT_PUBLIC_ENABLE_DECOR !== 'false'

  const handleLoadingComplete = useCallback(() => {
    setAppState(AppState.LANDING)
  }, [])

  const handleOpenInvitation = useCallback(() => {
    setAppState(AppState.DETAILS)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  return (
    <AudioProvider>
      <div className="relative min-h-screen bg-cloud text-charcoal selection:bg-birch selection:text-nut overflow-hidden font-sans">
        {appState === AppState.LOADING && <LoadingScreen onComplete={handleLoadingComplete} />}

        <main className="relative w-full h-full">
          <InvitationHero onOpen={handleOpenInvitation} visible={appState === AppState.LANDING} />

          <div className={`transition-opacity duration-700 ${appState === AppState.DETAILS ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            {enableDecor && <BackgroundMusic />}
            {enableDecor && (
              <div className="fixed inset-0 z-0 pointer-events-none">
                <Suspense fallback={<div className="w-full h-full bg-gradient-to-b from-primary/10 to-secondary/5" />}>
                  <Silk speed={5} scale={1.1} color="#F1F1EF" noiseIntensity={0.8} rotation={0.3} />
                </Suspense>
              </div>
            )}

            <div className="relative z-10">
              {appState === AppState.DETAILS && <Navbar />}
              <MainHero />
              <Welcome />
              <CoupleVideo />
              <Countdown />
              {/* <Narrative /> */}
              <Gallery />
              <Messages />
              <Details />
              <WeddingTimeline />
              <Section
                id="entourage-sponsors"
                className="relative py-12 md:py-16 lg:py-20 overflow-hidden bg-gradient-to-br from-[#8498B0] via-[#BFCDD8] to-[#8498B0]"
              >
                {/* Background gradient */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8498B0] via-[#BFCDD8] to-[#8498B0]" />
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#8498B0]/90 via-[#BFCDD8]/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#8498B0]/90 via-[#BFCDD8]/60 to-transparent" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(241,241,239,0.25),transparent_70%)]" />
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-6xl mx-auto px-1 sm:px-3 md:px-5">
                  <div className="relative w-full rounded-lg sm:rounded-2xl overflow-hidden border border-white/40 bg-white/85 backdrop-blur-lg shadow-[0_18px_40px_rgba(132,152,176,0.18)] p-1.5 sm:p-3.5 md:p-5">
                    <div className="relative w-full aspect-auto rounded-md sm:rounded-xl overflow-hidden">
                      <Image
                        src="/Details/entourage and sponsor.png"
                        alt="Entourage and Sponsor"
                        width={1200}
                        height={800}
                        className="w-full h-auto object-contain"
                        sizes="(min-width: 1024px) 1000px, (min-width: 640px) 800px, 100vw"
                        priority={false}
                      />
                    </div>
                  </div>
                </div>
              </Section>
              <GuestList />
              <BookOfGuests />
              <Registry />
              <FAQ />
              <SnapShare />
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </AudioProvider>
  )
}
