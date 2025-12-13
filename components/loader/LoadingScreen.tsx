import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onComplete, 1000); // Wait for fade out animation
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden transition-opacity duration-1000 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#8498B0]" />

      <div className="relative flex flex-col items-center justify-center">
        <div className="relative flex items-center justify-center">
          {/* Glow halos */}
          <div className="absolute w-40 h-40 rounded-full bg-white/25 blur-3xl animate-pulse" />
          <div className="absolute w-28 h-28 rounded-full bg-[#8498B0]/30 blur-2xl animate-ping" />

          {/* Outer decorative rings */}
          <div className="absolute w-32 h-32 rounded-full border border-[#8498B0]/70 animate-ping" />
          <div className="absolute w-26 h-26 rounded-full border border-[#8498B0]/70 animate-[spin_7s_linear_infinite]" />
          <div className="absolute w-22 h-22 rounded-full border-t-2 border-b-2 border-[#D2AC6E]/80 animate-[spin_12s_linear_infinite_reverse]" />

          {/* Monogram */}
          <div className="flex flex-col items-center justify-center z-10">
            <div className="relative w-24 h-24">
              <Image
                src="/monogram/NewMonogram.png"
                alt="Monogram"
                fill
                className="object-contain brightness-0 invert drop-shadow-md"
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p
            className="text-xs uppercase tracking-[0.3em] text-white/80 animate-pulse drop-shadow"
            style={{ fontFamily: '"Cinzel", serif', fontWeight: 700 }}
          >
            Loading Invitation
          </p>
        </div>
      </div>
    </div>
  );
};