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
        className={`absolute inset-0 flex items-center justify-start px-6 md:px-12 lg:px-24 transition-opacity duration-[3000ms] ${
          showOverlay ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="mx-auto max-w-7xl w-full flex flex-col md:flex-row items-center md:items-center justify-start gap-8 md:gap-16">
          {/* Logo - Left Side - Larger */}
          <div className="flex justify-start">
            <div className="relative w-80 h-80 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] drop-shadow-2xl">
              <Image
                src="/images/bafra-hakkani-logo_v2.0_transparent.png"
                alt="Bafra Hakkânî Dergâhı Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Text - Right Side */}
          <div className="flex justify-start">
            <h1 
              className="hero-title text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-dernek-blue drop-shadow-lg text-center md:text-left leading-none"
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
