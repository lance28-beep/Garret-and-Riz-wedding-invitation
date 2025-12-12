"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "motion/react"
import { Instagram, Facebook, Twitter, Share2, Copy, Download } from "lucide-react"
import { Section } from "@/components/section"
import { QRCodeCanvas } from "qrcode.react"
import { siteConfig } from "@/content/site"
import { Cormorant_Garamond } from "next/font/google"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400"],
})

export function SnapShare() {
  const [copiedHashtag, setCopiedHashtag] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const websiteUrl = typeof window !== "undefined" ? window.location.href : "https://example.com"
  const driveLink = siteConfig.snapShare?.googleDriveLink || ""
  const groomNickname = siteConfig.couple.groomNickname
  const brideNickname = siteConfig.couple.brideNickname
  const sanitizedGroomName = groomNickname.replace(/\s+/g, "")
  const sanitizedBrideName = brideNickname.replace(/\s+/g, "")

  const shareText = `Celebrate ${groomNickname} & ${brideNickname}'s wedding! Explore the details and share your special memories: ${websiteUrl} ✨`

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640)

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])


  const shareOnSocial = (platform: "instagram" | "facebook" | "twitter" | "tiktok") => {
    const encodedUrl = encodeURIComponent(websiteUrl)
    const encodedText = encodeURIComponent(shareText)

    const urls: Record<string, string> = {
      instagram: `https://www.instagram.com/`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodedText}`,
      tiktok: `https://www.tiktok.com/`,
    }

    const target = urls[platform]
    if (target) {
      window.open(target, "_blank", "width=600,height=400")
    }
  }

  const downloadQRCode = () => {
    const canvas = document.getElementById("snapshare-qr") as HTMLCanvasElement | null
    if (!canvas) return
    const link = document.createElement("a")
    link.download = `${sanitizedGroomName.toLowerCase()}-${sanitizedBrideName.toLowerCase()}-wedding-qr.png`
    link.href = canvas.toDataURL("image/png")
    link.click()
  }

  const downloadDriveQRCode = () => {
    const canvas = document.getElementById("drive-qr") as HTMLCanvasElement | null
    if (!canvas) return
    const link = document.createElement("a")
    link.download = "drive-qr.png"
    link.href = canvas.toDataURL("image/png")
    link.click()
  }

  const copyDriveLink = async () => {
    if (driveLink) {
      try {
        await navigator.clipboard.writeText(driveLink)
        setCopiedHashtag(true)
        setTimeout(() => setCopiedHashtag(false), 2000)
      } catch (err) {
        console.error("Failed to copy: ", err)
      }
    }
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <Section
      id="snap-share"
      className="relative overflow-hidden py-14 sm:py-20 md:py-24 lg:py-28 bg-transparent"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[#E0CFB5]/50 z-0" />
      
      <div className="relative max-w-6xl mx-auto px-3 sm:px-6 md:px-8">
        <motion.div
          className="text-center mb-7 sm:mb-12"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Glass overlay container */}
          <div className="relative backdrop-blur-md bg-white/40 border border-white/40 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#525E2C]/30 bg-white/10 px-3.5 py-1.5 text-[8px] sm:text-xs tracking-[0.42em] uppercase mb-3 sm:mb-4" style={{ color: "#525E2C" }}>
              Share Your Memories
            </div>
            <h2
              className="style-script-regular text-2xl sm:text-5xl md:text-6xl lg:text-7xl mt-3 sm:mt-4"
              style={{ color: "#525E2C" }}
            >
              Capture & Share the Celebration
            </h2>
            <p 
              className={`${cormorant.className} text-[10px] sm:text-sm md:text-base max-w-2xl mx-auto mt-3 sm:mt-4 leading-relaxed px-2`}
              style={{ color: "#525E2C" }}
            >
              Capture the beautiful moments of {groomNickname} & {brideNickname}'s wedding day. Share your favorite memories so our keepsake gallery glows with every smile, embrace, and celebration from this special day.
            </p>
            <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-[#525E2C]/60 to-transparent" />
          </div>
        </motion.div>

        <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-7 lg:gap-10" variants={staggerChildren} initial="initial" animate="animate">
          <motion.div
            className="p-[1.5px] rounded-[22px] bg-gradient-to-br from-[#525E2C]/50 via-[#909E8D]/30 to-[#525E2C]/50 h-full lg:order-1"
            variants={fadeInUp}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-br from-[#909E8D] to-[#525E2C] rounded-[20px] p-3 sm:p-6 md:p-8 lg:p-8 shadow-xl border border-[#909E8D]/40 h-full flex flex-col justify-start">
              <div className="flex flex-col w-full">
                {/* Hashtag Section */}
                <div className="mb-4 sm:mb-5 md:mb-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20">
                    <p className={`${cormorant.className} text-white text-[10px] sm:text-xs md:text-sm text-center mb-2 sm:mb-3 leading-relaxed`}>
                      Use these hashtags on your posts to be featured in our gallery.
                    </p>
                    <button
                      onClick={async () => {
                        const hashtag = "#ForeverSophistiKatedWithChristian"
                        try {
                          await navigator.clipboard.writeText(hashtag)
                          setCopiedHashtag(true)
                          setTimeout(() => setCopiedHashtag(false), 2000)
                        } catch (err) {
                          console.error("Failed to copy: ", err)
                        }
                      }}
                      className="w-full flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg px-4 py-2.5 sm:py-3 border border-white/30 hover:border-white/50 transition-all duration-200 group"
                    >
                      <span className={`${cormorant.className} text-white font-semibold text-sm sm:text-base md:text-lg tracking-wide`}>
                        #ForeverSophistiKatedWithChristian
                      </span>
                      <Copy className={`w-4 h-4 text-white/80 group-hover:text-white transition-colors ${copiedHashtag ? "text-green-300" : ""}`} />
                    </button>
                    {copiedHashtag && (
                      <p className={`${cormorant.className} text-green-300 text-[10px] sm:text-xs text-center mt-2`}>
                        Hashtag copied!
                      </p>
                    )}
                  </div>
                </div>

                <h4 className={`${cormorant.className} text-[13px] sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-white mb-3 sm:mb-4 md:mb-5 text-center`}>
                  Our Favorite Moments
                </h4>
                <div className="grid grid-cols-2 gap-1.5 sm:gap-3 md:gap-4">
                  <motion.div
                    className="relative aspect-square rounded-xl overflow-hidden shadow-md border-2 border-[#525E2C]/30 hover:border-[#525E2C]/50 transition-all"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Image src="/mobile-background/couple (7).jpeg" alt="Wedding moment 1" fill className="object-cover" />
                  </motion.div>
                  <motion.div
                    className="relative aspect-square rounded-xl overflow-hidden shadow-md border-2 border-[#525E2C]/30 hover:border-[#525E2C]/50 transition-all"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Image src="/mobile-background/couple (8).jpeg" alt="Wedding moment 2" fill className="object-cover" />
                  </motion.div>
                  <motion.div
                    className="relative col-span-2 aspect-[3/2] rounded-xl overflow-hidden shadow-md border-2 border-[#525E2C]/30 hover:border-[#525E2C]/50 transition-all"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Image src="/desktop-background/couple (6).jpeg" alt="Wedding moment 3" fill className="object-cover" />
                  </motion.div>
                </div>
                <p className={`${cormorant.className} text-white text-[10px] sm:text-xs text-center mt-4 sm:mt-5 md:mt-6 px-1.5`}>
                  Share your snapshots to be featured in our keepsake gallery.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div className="space-y-4 lg:space-y-6 h-full flex flex-col lg:order-2" variants={fadeInUp}>
            <div className="p-[1.5px] rounded-[22px] bg-gradient-to-br from-[#525E2C]/50 via-[#909E8D]/30 to-[#525E2C]/50 flex-1">
              <div className="bg-gradient-to-br from-[#909E8D] to-[#525E2C] rounded-[20px] p-3 sm:p-6 md:p-8 shadow-xl border border-[#909E8D]/40 text-center h-full flex flex-col">
                <h4 className={`${cormorant.className} text-[15px] sm:text-xl md:text-2xl font-semibold text-white mb-3`}>
                  Share Our Wedding Website
                </h4>
                <p className={`${cormorant.className} text-white text-[11px] sm:text-sm mb-4 sm:mb-5 leading-relaxed px-1`}>
                  Spread the word about {groomNickname} & {brideNickname}'s wedding celebration. Share this QR code with friends and family so they can join the celebration.
                </p>
                <div className="mx-auto inline-flex flex-col items-center bg-white/80 backdrop-blur-sm p-3 sm:p-6 md:p-7 rounded-2xl shadow-md border border-[#525E2C]/30 mb-4 flex-1 justify-center">
                  <div className="mb-3 p-2 sm:p-4 rounded-xl bg-white border border-[#525E2C]/20">
                    <div className="bg-white p-2 sm:p-4 rounded-lg shadow-sm border border-[#525E2C]/20">
                      <QRCodeCanvas 
                        id="snapshare-qr" 
                        value={websiteUrl} 
                        size={isMobile ? 160 : 220} 
                        includeMargin 
                        className="bg-white" 
                      />
                    </div>
                  </div>
                  <button
                    onClick={downloadQRCode}
                    className="flex items-center gap-2 mx-auto px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#525E2C] to-[#909E8D] text-white transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 text-xs sm:text-sm border border-[#525E2C]/40"
                  >
                    <Download className="w-4 h-4" />
                    <span className={`${cormorant.className} tracking-[0.18em] uppercase font-medium`}>Download QR</span>
                  </button>
                </div>
                <p className={`${cormorant.className} text-white text-[10px] sm:text-xs mt-auto`}>
                  Scan with any camera app to open the full invitation and schedule.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#909E8D] to-[#525E2C] rounded-[20px] p-3 sm:p-6 md:p-7 shadow-xl border border-[#909E8D]/40">
              <h5 className={`${cormorant.className} text-[15px] sm:text-xl font-semibold text-white mb-3 text-center`}>
                Share on Social Media
              </h5>
              <p className={`${cormorant.className} text-white text-[10px] sm:text-xs text-center mb-4`}>
                Help spread the word about {groomNickname} & {brideNickname}'s wedding celebration. Share the event across your favorite platforms.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                <button
                  onClick={() => shareOnSocial("instagram")}
                  className="group flex items-center justify-center gap-2 bg-gradient-to-r from-[#525E2C] to-[#909E8D] text-white px-4 py-3 rounded-lg hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg border border-[#525E2C]/70"
                >
                  <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className={`${cormorant.className} font-medium text-xs sm:text-sm uppercase tracking-[0.2em]`}>Instagram</span>
                </button>
                <button
                  onClick={() => shareOnSocial("facebook")}
                  className="group flex items-center justify-center gap-2 bg-gradient-to-r from-[#525E2C] to-[#909E8D] text-white px-4 py-3 rounded-lg hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg border border-[#525E2C]/70"
                >
                  <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className={`${cormorant.className} font-medium text-xs sm:text-sm uppercase tracking-[0.2em]`}>Facebook</span>
                </button>
                <button
                  onClick={() => shareOnSocial("tiktok")}
                  className="group flex items-center justify-center gap-2 bg-gradient-to-r from-[#525E2C] to-[#909E8D] text-white px-4 py-3 rounded-lg hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg border border-[#525E2C]/70"
                >
                  <Share2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className={`${cormorant.className} font-medium text-xs sm:text-sm uppercase tracking-[0.2em]`}>TikTok</span>
                </button>
                <button
                  onClick={() => shareOnSocial("twitter")}
                  className="group flex items-center justify-center gap-2 bg-gradient-to-r from-[#525E2C] to-[#909E8D] text-white px-4 py-3 rounded-lg hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg border border-[#525E2C]/70"
                >
                  <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className={`${cormorant.className} font-medium text-xs sm:text-sm uppercase tracking-[0.2em]`}>Twitter</span>
                </button>
              </div>
            </div>

            {driveLink && (
              <div className="p-[1.5px] rounded-[22px] bg-gradient-to-br from-[#525E2C]/50 via-[#909E8D]/30 to-[#525E2C]/50">
                <div className="bg-gradient-to-br from-[#909E8D] to-[#525E2C] rounded-[20px] p-3 sm:p-6 md:p-7 shadow-xl border border-[#909E8D]/40 text-center">
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[#525E2C]/30 bg-white/80 backdrop-blur-sm px-2.5 py-1 text-[9px] uppercase tracking-[0.32em] text-[#D1AB6D] mb-3">
                    Upload Your Photos & Videos
                  </div>
                  <p className={`${cormorant.className} text-white text-[11px] sm:text-sm leading-relaxed mb-4 sm:mb-5 px-1`}>
                    Help us capture our special day! Scan the QR or use the actions below to drop your clips into our shared Drive.
                  </p>
                  <div className="mx-auto inline-flex flex-col items-center bg-white/80 backdrop-blur-sm p-3 sm:p-6 rounded-2xl shadow-md border border-[#525E2C]/30 mb-4">
                    <div className="mb-3 p-2 sm:p-4 rounded-xl bg-white border border-[#525E2C]/20">
                      <div className="bg-white p-2 sm:p-4 rounded-lg shadow-sm border border-[#525E2C]/20">
                        <QRCodeCanvas id="drive-qr" value={driveLink} size={isMobile ? 150 : 200} includeMargin className="bg-white" />
                      </div>
                    </div>
                    <p className={`${cormorant.className} text-[#525E2C]/90 text-[10px] sm:text-xs`}>📱 Scan with your camera app</p>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                    <button
                      onClick={copyDriveLink}
                      className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white text-[#D1AB6D] border border-[#525E2C]/40 shadow-sm hover:shadow-md hover:bg-[#525E2C]/5 text-xs sm:text-sm transition-all"
                    >
                      <Copy className="w-4 h-4" />
                      <span className={`${cormorant.className} tracking-[0.18em] uppercase font-medium`}>Copy Link</span>
                    </button>
                    <button
                      onClick={downloadDriveQRCode}
                      className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#525E2C] to-[#909E8D] text-white border border-[#525E2C]/50 shadow-sm hover:shadow-md text-xs sm:text-sm transition-all"
                    >
                      <Download className="w-4 h-4" />
                      <span className={`${cormorant.className} tracking-[0.18em] uppercase font-medium`}>Download QR</span>
                    </button>
                    <a
                      href={driveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white text-[#D1AB6D] border border-[#525E2C]/40 shadow-sm hover:shadow-md hover:bg-[#525E2C]/5 text-xs sm:text-sm transition-all"
                    >
                      <Share2 className="w-4 h-4" />
                      <span className={`${cormorant.className} tracking-[0.18em] uppercase font-medium`}>Open Drive</span>
                    </a>
                  </div>
                  <p className={`${cormorant.className} text-white text-[10px] sm:text-xs mt-3`}>or tap "Open Google Drive Folder."</p>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>

        <motion.div className="text-center mt-7 sm:mt-12" variants={fadeInUp}>
          <div className="bg-white/10 rounded-[22px] p-4 sm:p-7 shadow-[0_25px_80px_rgba(0,0,0,0.35)] border border-white/20 max-w-3xl mx-auto backdrop-blur-xl">
            <p 
              className={`${cormorant.className} text-[13px] sm:text-base md:text-lg leading-relaxed mb-4 px-2`}
              style={{ color: "#525E2C" }}
            >
              Thank you for helping make {groomNickname} & {brideNickname}'s wedding celebration memorable. Your photos and messages create beautiful memories
              that will last a lifetime—keep sharing the joy throughout the evening.
            </p>
            <div 
              className={`${cormorant.className} flex items-center justify-center gap-2 text-[10px] sm:text-xs tracking-[0.32em] uppercase`}
              style={{ color: "#525E2C" }}
            >
              <span>See you in the celebration</span>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}