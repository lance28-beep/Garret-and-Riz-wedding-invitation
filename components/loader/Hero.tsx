import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { FadeIn } from './FadeIn';

interface HeroProps {
  onOpen: () => void;
  visible: boolean;
}

const desktopImages: string[] = [
  '/desktop-background/couple (1).JPG',
  '/desktop-background/couple (2).JPG',
  '/desktop-background/couple (3).JPG',
  '/desktop-background/couple (4).JPG',
  '/desktop-background/couple (5).JPG',
];

const mobileImages: string[] = [
  '/mobile-background/couple (6).JPG',
  '/mobile-background/couple (2).JPG',
  '/mobile-background/couple (3).JPG',
  '/mobile-background/couple (4).JPG',
  '/mobile-background/couple (5).JPG',
];

export const Hero: React.FC<HeroProps> = ({ onOpen, visible }) => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window === 'undefined') return;

    const media = window.matchMedia('(max-width: 768px)');
    const handleChange = () => setIsMobile(media.matches);
    handleChange();
    media.addEventListener('change', handleChange);
    return () => media.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % 5);
    }, 5500);
    return () => clearInterval(timer);
  }, [mounted]);

  const images = useMemo(() => (isMobile ? mobileImages : desktopImages), [isMobile]);

  return (
    <div className={`fixed inset-0 z-30 flex items-center justify-center overflow-hidden transition-all duration-1000 ${visible ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt="Couple"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${i === index ? 'opacity-90' : 'opacity-0'}`}
          />
        ))}

        {/* Soft overlay tint */}
        <div className="absolute inset-0 bg-[#F1F1EF]/45 pointer-events-none" />

      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center p-6 w-full max-w-md mx-auto h-full">
        
        {/* Top Logo/Monogram */}
        <FadeIn show={visible} delay={300} className="mb-auto mt-8">
          <div className="w-16 h-24 border border-[#8498B0]/45 rounded-[2rem] flex items-center justify-center backdrop-blur-sm bg-[#8498B0] p-2">
            <div className="relative w-full h-full">
              <Image
                src="/monogram/NewMonogram.png"
                alt="Monogram"
                fill
                className="object-contain brightness-0 invert drop-shadow-md"
                priority
              />
            </div>
          </div>
        </FadeIn>

        <div className="flex-1" />

        <div className="flex flex-col items-center justify-end w-full gap-4 pb-14 sm:pb-16 md:pb-20">
          <FadeIn show={visible} delay={600}>
          <h2
            className="text-6xl md:text-8xl text-white transform -rotate-6 drop-shadow-lg opacity-95"
            style={{
              fontFamily: '"Great Vibes", cursive',
              fontWeight: 400,
              textShadow: '0 6px 18px rgba(0,0,0,0.35), 0 0 12px rgba(255,255,255,0.4)',
            }}
          >
            You are
          </h2>
          </FadeIn>
          
          <FadeIn show={visible} delay={900}>
          <h1
            className="text-5xl md:text-7xl text-white font-bold tracking-wider uppercase drop-shadow-[0_10px_24px_rgba(0,0,0,0.35)]"
            style={{
              fontFamily: '"Cinzel", serif',
              fontWeight: 700,
              textShadow: '0 8px 22px rgba(0,0,0,0.38), 0 0 14px rgba(255,255,255,0.35)',
            }}
          >
            Invited!
          </h1>
          </FadeIn>

          <FadeIn show={visible} delay={1500}>
          <button 
            onClick={onOpen}
            className="group relative px-10 py-4 bg-[#8498B0] text-[#F1F1EF] font-serif text-sm tracking-[0.2em] uppercase transition-all duration-500 hover:bg-[#BFCDD8] shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0 rounded-sm overflow-hidden"
          >
            <span
              className="relative z-10 text-white"
              style={{ fontFamily: '"Cinzel", serif', fontWeight: 400 }}
            >
              Open Invitation
            </span>
            {/* Button sheen effect */}
            <div className="absolute top-0 left-[-100%] w-full h-full bg-white/10 skew-x-12 group-hover:animate-[shimmer_1s_infinite]" />
          </button>
          </FadeIn>
        </div>

        {/* Bottom Spacer */}
        <div className="h-4" />
      </div>
    </div>
  );
};