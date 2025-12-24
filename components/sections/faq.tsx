"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Section } from "@/components/section"
import { Cormorant_Garamond } from "next/font/google"
import { siteConfig } from "@/content/site"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
})

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: "Is there a dress code?",
    answer:
      "We kindly request our guests to dress within our wedding colors and align with the attire guide in the Details section.\n\nPrincipal Sponsors:\nNinong: Barong\nNinang: Long Dress\n\nWedding Guests:\nSemi formal – dress, polo shirt or long sleeves.",
  },
  {
    question: "Can I bring a plus one?",
    answer:
      "We're so excited to have you celebrate with us! Unfortunately due to limited space and our venue's capacity, we're unable to accommodate additional guests. We truly hope you understand and we can't wait to celebrate together on the day!",
  },
  {
    question: "Is there parking available?",
    answer:
      "Yes, parking is available at the venue.",
  },
  {
    question: "How do I RSVP?",
    answer:
      `Please RSVP on or before ${siteConfig.details.rsvp.deadline} through the RSVP section on this invitation. We kindly ask for your response to help us prepare for the big day.`,
  },
  {
    question: "Will there be assigned seating?",
    answer:
      "Yes, there will be assigned seating, and our reception team will gladly guide you to your table so you can relax and enjoy the celebration.",
  },
  {
    question: "What should I give as a gift?",
    answer:
      "With all that we have, we are truly blessed, your presence and prayers are what we request. But if you desire to give nonetheless, monetary gift is the one we humbly suggest.",
  },
  {
    question: "When is the wedding?",
    answer:
      `Our wedding will be held on ${siteConfig.ceremony.date} at ${siteConfig.ceremony.time}. We kindly ask guests to arrive by ${siteConfig.ceremony.guestsTime} to help us begin promptly.`,
  },
  {
    question: "Where will the ceremony and reception take place?",
    answer:
      `The ceremony will be held at ${siteConfig.ceremony.location}. The reception will be held at ${siteConfig.reception.location}. You can find directions and copy the addresses in the Details section above.`,
  },
  {
    question: "What time should I arrive?",
    answer:
      `Kindly arrive by ${siteConfig.ceremony.guestsTime} so we can begin the ceremony promptly at exactly ${siteConfig.ceremony.time}. Your punctuality means so much to us!`,
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <Section
      id="faq"
      className="relative py-12 md:py-16 lg:py-20 overflow-hidden bg-gradient-to-br from-[#8498B0] via-[#BFCDD8] to-[#8498B0]"
    >
      {/* Wedding gradient background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Main gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#8498B0] via-[#BFCDD8] to-[#8498B0]" />
        {/* Radial gradient accents */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#8498B0]/90 via-[#BFCDD8]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#8498B0]/90 via-[#BFCDD8]/60 to-transparent" />
        {/* Soft radial light */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(241,241,239,0.25),transparent_70%)]" />
      </div>

      {/* Section Header */}
      <div className="relative z-30 text-center mb-6 sm:mb-9 md:mb-12 px-3 sm:px-4">
        {/* Small label */}
        <p
          className={`${cormorant.className} text-[0.7rem] sm:text-xs md:text-sm uppercase tracking-[0.28em] text-white mb-2`}
          style={{ textShadow: "0 2px 10px rgba(0,0,0,0.75)" }}
        >
          Questions & Answers
        </p>

        <h2
          className="style-script-regular text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-1.5 sm:mb-3 md:mb-4"
          style={{ textShadow: "0 4px 18px rgba(0,0,0,0.9)" }}
        >
          Frequently Asked Questions
        </h2>

        {/* Simple divider */}
        <div className="flex items-center justify-center gap-2 mt-3 sm:mt-4">
          <div className="w-8 sm:w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
          <div className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_12px_rgba(255,255,255,0.7)]" />
          <div className="w-8 sm:w-12 md:w-16 h-px bg-gradient-to-l from-transparent via-white/60 to-transparent" />
        </div>
      </div>

      {/* FAQ content */}
      <div className="relative z-10 max-w-4xl mx-auto px-3 sm:px-5">
        {/* Main card */}
        <div className="relative bg-white/85 backdrop-blur-lg border border-white/40 rounded-lg sm:rounded-xl md:rounded-2xl shadow-[0_18px_40px_rgba(132,152,176,0.18)] overflow-hidden">
          {/* FAQ items */}
          <div className="relative p-2.5 sm:p-4 md:p-5 lg:p-6">
            <div className="space-y-1.5 sm:space-y-2 md:space-y-3">
              {faqItems.map((item, index) => {
                const isOpen = openIndex === index
                const contentId = `faq-item-${index}`
                return (
                  <div
                    key={index}
                    className="rounded-lg sm:rounded-xl border border-white/60 bg-white shadow-xl hover:border-[#8498B0]/50 hover:shadow-2xl transition-all duration-300 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleItem(index)}
                      className="group w-full px-2.5 sm:px-3 md:px-4 lg:px-5 py-2 sm:py-2.5 md:py-3 lg:py-4 flex items-center justify-between text-left outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 transition-colors"
                      aria-expanded={isOpen}
                      aria-controls={contentId}
                    >
                      <span className={`${cormorant.className} font-semibold text-[#8498B0] pr-2 sm:pr-3 md:pr-4 text-xs sm:text-sm md:text-base lg:text-lg leading-snug sm:leading-relaxed transition-colors duration-200 group-hover:text-[#6A7C94]`}>
                        {item.question}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`text-[#8498B0]/60 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""} w-4 h-4 sm:w-5 sm:h-5`}
                        aria-hidden
                      />
                    </button>

                    <div
                      id={contentId}
                      role="region"
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-2.5 sm:px-3 md:px-4 lg:px-5 py-2 sm:py-2.5 md:py-3 lg:py-4 bg-white border-t border-[#E0CFB5]/70">
                          {item.answer.includes("[RSVP_LINK]") ? (
                            <p className={`${cormorant.className} text-[#8498B0] font-semibold leading-relaxed sm:leading-loose text-sm sm:text-base md:text-lg lg:text-xl whitespace-pre-line tracking-wide`}>
                              {item.answer.split("[RSVP_LINK]")[0]}
                              <a 
                                href="#guest-list" 
                                className="text-[#8498B0] underline font-bold hover:text-[#6A7C94] transition-colors"
                                onClick={(e) => {
                                  e.preventDefault()
                                  document.getElementById('guest-list')?.scrollIntoView({ behavior: 'smooth' })
                                }}
                              >
                                {item.answer.match(/\[RSVP_LINK\](.*?)\[\/RSVP_LINK\]/)?.[1]}
                              </a>
                              {item.answer.split("[/RSVP_LINK]")[1]}
                            </p>
                          ) : (
                            <p className={`${cormorant.className} text-[#8498B0] font-semibold leading-relaxed sm:leading-loose text-sm sm:text-base md:text-lg lg:text-xl whitespace-pre-line tracking-wide`}>
                              {item.answer}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
