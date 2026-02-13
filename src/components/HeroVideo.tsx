'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface HeroVideoProps {
  videoSrc?: string;
}

export default function HeroVideo({ 
  videoSrc = "/bafra.mp4" 
}: HeroVideoProps) {
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    // Show overlay immediately
    setShowOverlay(true);
  }, []);

  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[85vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-image-1.png"
          alt="Background Pattern"
          fill
          className="object-cover"
          priority
          quality={100}
        />
      </div>
      
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-white/20"></div>

      {/* Logo and Text Overlay - appears at 15 seconds */}
      <div 
        className={`absolute inset-0 flex items-start pt-12 md:items-center md:pt-0 justify-center px-4 sm:px-6 md:px-12 lg:px-24 transition-opacity duration-[3000ms] ${
          showOverlay ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="mx-auto max-w-7xl w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12">
          {/* Logo - Much larger on mobile, positioned higher */}
          <div className="flex justify-center md:justify-end flex-shrink-0">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 drop-shadow-2xl">
              <Image
                src="/images/bafra-hakkani-logo_v2.0_transparent.png"
                alt="Bafra Hakkânî Dergâhı Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Text - Larger on mobile */}
          <div className="flex justify-center md:justify-start">
            <h1 
              className="hero-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-dernek-blue drop-shadow-lg text-center md:text-left leading-tight md:leading-none"
            >
              Bafra Hakkânî<br />
              Dergâhı
            </h1>
          </div>
        </div>
      </div>

      {/* Rotating Seal - Bottom Right */}
      <div className="absolute -bottom-32 -right-32 md:-bottom-48 md:-right-48 lg:-bottom-64 lg:-right-64 w-[28rem] h-[28rem] md:w-[42rem] md:h-[42rem] lg:w-[50rem] lg:h-[50rem] overflow-visible pointer-events-none">
        <div className="relative w-full h-full animate-spin-slower">
          <Image
            src="/images/hakkani-mührü.png"
            alt="Hakkânî Mührü"
            fill
            className="object-contain opacity-30"
          />
        </div>
      </div>

      {/* Bottom Gradient Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
