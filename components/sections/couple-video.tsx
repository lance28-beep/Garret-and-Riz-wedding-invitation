"use client"

import { useState, useEffect, useRef } from "react"
import { Section } from "@/components/section"
import Image from "next/image"
import { motion } from "motion/react"
import { Play } from "lucide-react"
import { useAudio } from "@/contexts/audio-context"
import { Cormorant_Garamond } from "next/font/google"

const cormorant = Cormorant_Garamond({
  weight: "400",
  subsets: ["latin"],
})

// YouTube Player API types
declare global {
  interface Window {
    YT: any
    onYouTubeIframeAPIReady: () => void
  }
}

export function CoupleVideo() {
  // State to track if user has clicked to play the video
  const [hasClicked, setHasClicked] = useState(false)
  const playerRef = useRef<any>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const { pauseMusic, resumeMusic } = useAudio()

  // YouTube video ID
  const videoId = "g8cHAHBUe2A"

  // Load YouTube IFrame API
  useEffect(() => {
    // Load YouTube IFrame API script if not already loaded
    if (!window.YT) {
      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      const firstScriptTag = document.getElementsByTagName('script')[0]
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)
    }
  }, [])

  // Initialize YouTube player when clicked
  useEffect(() => {
    if (!hasClicked || !iframeRef.current) return

    const initPlayer = () => {
      if (window.YT && window.YT.Player && iframeRef.current) {
        playerRef.current = new window.YT.Player(iframeRef.current, {
          events: {
            onReady: () => {
              // Pause background music when video is ready
              pauseMusic()
            },
            onStateChange: (event: any) => {
              // YouTube player states:
              // -1 (unstarted)
              // 0 (ended)
              // 1 (playing)
              // 2 (paused)
              // 3 (buffering)
              // 5 (video cued)
              
              if (event.data === 1) {
                // Video is playing - pause background music
                pauseMusic()
              } else if (event.data === 2 || event.data === 0) {
                // Video is paused or ended - resume background music
                resumeMusic()
              }
            },
          },
        })
      }
    }

    // Wait a bit for iframe to be ready, then initialize
    const timer = setTimeout(() => {
      if (window.YT && window.YT.Player) {
        initPlayer()
      } else {
        // Otherwise wait for API to load
        window.onYouTubeIframeAPIReady = initPlayer
      }
    }, 100)

    return () => {
      clearTimeout(timer)
      if (playerRef.current && playerRef.current.destroy) {
        try {
          playerRef.current.destroy()
        } catch (e) {
          // Ignore errors during cleanup
        }
      }
    }
  }, [hasClicked, pauseMusic, resumeMusic, videoId])

  // Handle thumbnail click - show iframe with autoplay
  const handleThumbnailClick = () => {
    setHasClicked(true)
    // Pause music immediately when user clicks
    pauseMusic()
  }

  return (
    <>
      {/* Global styles to hide YouTube branding */}
      <style jsx global>{`
        /* Hide YouTube logo, title, and branding */
        .youtube-embed-wrapper iframe {
          pointer-events: auto;
        }
        
        /* Additional masking for YouTube UI elements */
        .youtube-mask-container {
          position: relative;
        }
        
        .youtube-mask-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 60px;
          background: transparent;
          z-index: 1;
          pointer-events: none;
        }
        
        .youtube-mask-container::after {
          content: '';
          position: absolute;
          top: 8px;
          right: 8px;
          width: 100px;
          height: 50px;
          background: transparent;
          z-index: 1;
          pointer-events: none;
        }
      `}</style>
      
      <Section
        id="couple-video"
        className="relative py-6 sm:py-8 md:py-12 lg:py-16 overflow-hidden"
      >
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#BFCDD8] via-[#E0CFB5] to-[#F1F1EF]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#8498B0]/30 via-transparent to-[#D2AC6E]/20" />
      </div>

      {/* Header - compact, with updated title */}
      <div className="relative z-10 text-center mb-4 sm:mb-6 md:mb-8 px-3 sm:px-4">
        {/* Glass effect container with transparent glass effect */}
        <div className="backdrop-blur-lg bg-white/20 border border-white/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.1)] max-w-4xl mx-auto">
          <h2 className="style-script-regular text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-black mb-2 sm:mb-3" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
            Save the Date
          </h2>
          
          <p className={`${cormorant.className} text-sm sm:text-base md:text-lg text-black font-normal max-w-2xl mx-auto px-2 leading-relaxed`}>
            Join us as we celebrate our special day
          </p>
        </div>
      </div>

      {/* Video Container */}
      <div className="relative z-10 px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative group"
          >
            {/* Enhanced layered shadow effects for depth */}
            <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-[#8498B0]/35 via-[#D2AC6E]/22 to-[#8498B0]/35 blur-xl sm:blur-2xl opacity-70 group-hover:opacity-90 transition-all duration-500" />
            <div className="absolute -inset-2 sm:-inset-4 bg-black/25 blur-2xl sm:blur-3xl opacity-45 group-hover:opacity-65 transition-all duration-500" />
            
            {/* Elegant video frame with rounded corners and enhanced shadows */}
            <div className="relative bg-gradient-to-br from-black via-[#3A4A5C] to-black overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.3),0_8px_32px_rgba(0,0,0,0.25),0_0_0_1px_rgba(132,152,176,0.2)] sm:shadow-[0_8px_32px_rgba(0,0,0,0.4),0_16px_64px_rgba(0,0,0,0.35),0_0_0_1px_rgba(132,152,176,0.2)] group-hover:shadow-[0_14px_52px_rgba(0,0,0,0.5),0_26px_100px_rgba(0,0,0,0.4),0_0_0_1px_rgba(210,172,110,0.3)] transition-all duration-500">
              {/* Decorative border with gradient */}
              <div className="absolute inset-0 rounded-lg sm:rounded-xl md:rounded-2xl border border-[#D2AC6E]/30 group-hover:border-[#D2AC6E]/50 transition-colors duration-500 pointer-events-none z-20" />
              
              {/* Inner shadow for depth */}
              <div className="absolute inset-0 rounded-lg sm:rounded-xl md:rounded-2xl shadow-[inset_0_0_40px_rgba(0,0,0,0.5)] pointer-events-none z-10" />
              
              {/* Elegant corner accents - top left */}
              <div className="absolute top-0 left-0 w-8 sm:w-12 md:w-16 lg:w-20 h-8 sm:h-12 md:h-16 lg:h-20 pointer-events-none z-20">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-[#D2AC6E]/60 via-[#E0CFB5]/40 to-transparent" />
                <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-[#D2AC6E]/60 via-[#E0CFB5]/40 to-transparent" />
              </div>
              
              {/* Elegant corner accents - top right */}
              <div className="absolute top-0 right-0 w-8 sm:w-12 md:w-16 lg:w-20 h-8 sm:h-12 md:h-16 lg:h-20 pointer-events-none z-20">
                <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-[#D2AC6E]/60 via-[#E0CFB5]/40 to-transparent" />
                <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-[#D2AC6E]/60 via-[#E0CFB5]/40 to-transparent" />
              </div>
              
              {/* Elegant corner accents - bottom left */}
              <div className="absolute bottom-0 left-0 w-8 sm:w-12 md:w-16 lg:w-20 h-8 sm:h-12 md:h-16 lg:h-20 pointer-events-none z-20">
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-[#D2AC6E]/60 via-[#E0CFB5]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 w-px h-full bg-gradient-to-t from-[#D2AC6E]/60 via-[#E0CFB5]/40 to-transparent" />
              </div>
              
              {/* Elegant corner accents - bottom right */}
              <div className="absolute bottom-0 right-0 w-8 sm:w-12 md:w-16 lg:w-20 h-8 sm:h-12 md:h-16 lg:h-20 pointer-events-none z-20">
                <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-[#D2AC6E]/60 via-[#E0CFB5]/40 to-transparent" />
                <div className="absolute bottom-0 right-0 w-px h-full bg-gradient-to-t from-[#D2AC6E]/60 via-[#E0CFB5]/40 to-transparent" />
              </div>
              
              {/* Video wrapper with 16:9 aspect ratio */}
              <div className="relative" style={{ paddingBottom: '56.25%' }}>
                
                {/* Custom Thumbnail - shown before user clicks */}
                {!hasClicked && (
                  <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 cursor-pointer z-20 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden"
                    onClick={handleThumbnailClick}
                  >
                    {/* Custom poster image */}
                    <Image
                      src="/desktop-background/couple (7).webp"
                      alt="Video thumbnail"
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                      priority
                    />
                    
                    {/* Enhanced gradient overlay for better depth and play button visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-black/35 group-hover:from-black/70 group-hover:via-black/35 group-hover:to-black/45 transition-all duration-300" />
                    
                    {/* Inner shadow for depth */}
                    <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.3)]" />
                    
                    {/* Custom Play Button with enhanced shadows */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative"
                      >
                        {/* Glow effect behind button */}
                        <div className="absolute inset-0 rounded-full bg-[#D2AC6E]/45 blur-xl sm:blur-2xl scale-125 sm:scale-150 group-hover:bg-[#D2AC6E]/65 group-hover:scale-[1.5] sm:group-hover:scale-[1.7] transition-all duration-300" />
                        
                        {/* Play button */}
                        <div className="relative flex items-center justify-center w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-white/95 backdrop-blur-sm shadow-[0_4px_16px_rgba(0,0,0,0.3),0_8px_24px_rgba(0,0,0,0.2),0_0_0_1px_rgba(210,172,110,0.2)] sm:shadow-[0_8px_32px_rgba(0,0,0,0.4),0_16px_48px_rgba(0,0,0,0.25),0_0_0_1px_rgba(210,172,110,0.2)] group-hover:bg-white group-hover:shadow-[0_12px_52px_rgba(0,0,0,0.5),0_24px_72px_rgba(210,172,110,0.35),0_0_0_1px_rgba(210,172,110,0.3)] transition-all duration-300">
                          <Play className="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#8498B0] fill-[#8498B0] ml-0.5 sm:ml-1 drop-shadow-md" />
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
                
                {/* YouTube player - only shown after user clicks */}
                {hasClicked && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 youtube-embed-wrapper"
                  >
                    {/* Wrapper to mask YouTube UI elements */}
                    <div className="relative w-full h-full overflow-hidden youtube-mask-container">
                      <iframe
                        ref={iframeRef}
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&cc_load_policy=0&fs=1&playsinline=1&enablejsapi=1&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`}
                        className="absolute inset-0 w-full h-full"
                        style={{ border: 0 }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        title="Wedding Video"
                      />
                      
                      {/* CSS masks to hide YouTube branding areas */}
                      {/* Top overlay - hides title, uploader, and "watch on YouTube" */}
                      <div 
                        className="absolute top-0 left-0 right-0 h-16 pointer-events-none z-10"
                        style={{
                          background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 100%)',
                        }}
                      />
                      
                      {/* Top-right corner mask - hides YouTube logo and related icons */}
                      <div 
                        className="absolute top-2 right-2 w-24 h-12 pointer-events-none z-10 bg-black/60 blur-xl"
                        style={{
                          mixBlendMode: 'multiply',
                        }}
                      />
                      
                      {/* Center overlay when paused - prevents YouTube logo from showing */}
                      <div 
                        className="absolute inset-0 pointer-events-none z-[5]"
                        style={{
                          background: 'radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.02) 100%)',
                        }}
                      />
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
          
          {/* Caption below video */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center mt-6 sm:mt-8 md:mt-10"
          >
            <div className="backdrop-blur-lg bg-white/20 border border-white/30 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 shadow-[0_8px_32px_rgba(0,0,0,0.1)] max-w-2xl mx-auto">
              <p className={`${cormorant.className} text-xs sm:text-sm md:text-base text-black font-normal italic max-w-lg mx-auto leading-relaxed px-1`}>
                We can&apos;t wait to share this special moment with you
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
    </>
  )
}

