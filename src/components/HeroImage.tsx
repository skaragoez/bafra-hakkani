import Image from 'next/image';

interface HeroImageProps {
  src?: string;
  alt?: string;
}

export default function HeroImage({ 
  src = "/images/bafra-hakkani-logo_v2.0_transparent.png", 
  alt = "Bafra Nakşibendî Hakkani Derneği" 
}: HeroImageProps) {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden bg-gradient-to-br from-dernek-blue/5 via-dernek-cream to-dernek-turquoise/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-dernek-turquoise rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-dernek-green rounded-full blur-3xl"></div>
      </div>

      {/* Hero Image */}
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="relative w-full max-w-4xl h-full p-8 md:p-16">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain drop-shadow-2xl"
            priority
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 80vw, 1200px"
          />
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
