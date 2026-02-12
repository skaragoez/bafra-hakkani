interface PageSectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'cream';
  centered?: boolean;
}

export default function PageSection({
  title,
  subtitle,
  children,
  className = '',
  background = 'white',
  centered = false,
}: PageSectionProps) {
  const bgColor = background === 'cream' ? 'bg-dernek-cream' : 'bg-white';

  return (
    <section className={`py-16 sm:py-24 ${bgColor} ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {(title || subtitle) && (
          <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
            {title && (
              <h2 className="text-3xl font-heading font-bold tracking-tight text-dernek-blue sm:text-4xl mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
