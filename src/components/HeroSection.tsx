import Image from 'next/image';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description?: string;
}

export default function HeroSection({ title, subtitle, description }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-dernek-blue via-dernek-blue to-dernek-turquoise/20 text-white overflow-hidden">
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
      <div className="absolute inset-0 bg-dernek-blue/70"></div>

      {/* Decorative background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-dernek-turquoise rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-dernek-green rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6 animate-fade-in">
            {title}
          </h1>
          <p className="text-xl sm:text-2xl font-medium text-dernek-cream mb-8 animate-fade-in-delay-1">
            {subtitle}
          </p>
          {description && (
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/90 animate-fade-in-delay-2">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-16 text-dernek-cream"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </section>
  );
}
