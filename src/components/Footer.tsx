import Link from 'next/link';
import Image from 'next/image';

const navigation = {
  main: [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Hakkımızda', href: '/hakkimizda' },
    { name: 'Nakşibendî Yolu', href: '/naksibendi-yolu' },
    { name: 'Şeyh Mehmet Adil', href: '/seyh-mehmet-adil' },
    { name: 'Etkinlikler', href: '/etkinlikler' },
    { name: 'İletişim', href: '/iletisim' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-dernek-blue">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-image-1.png"
          alt="Background Pattern"
          fill
          className="object-cover"
          quality={100}
        />
      </div>
      
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-dernek-blue/80"></div>

      <div className="relative mx-auto max-w-7xl overflow-hidden px-6 py-12 sm:py-16 lg:px-8">
        {/* Logo and Description */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="relative h-40 w-40 sm:h-48 sm:w-48">
              <Image
                src="/images/bafra-hakkani-logo_v2.0_transparent.png"
                alt="Bafra Hakkânî Dergâhı Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <h3 className="text-xl font-heading font-semibold text-white mb-2">
            Bafra Hakkânî Dergâhı
          </h3>
          <p className="text-dernek-cream/80 max-w-md mx-auto text-sm">
            Zikir, sohbet ve kardeşlik ortamı içerisinde Allah'a yakınlaşma yolunda birlikte yürüyoruz.
          </p>
        </div>

        {/* Navigation */}
        <nav className="-mb-6 flex flex-wrap justify-center gap-x-8 gap-y-3 mb-8" aria-label="Footer">
          {navigation.main.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm leading-6 text-dernek-cream/80 hover:text-dernek-turquoise transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Divider */}
        <div className="mt-8 border-t border-white/10 pt-8">
          <p className="text-center text-xs leading-5 text-dernek-cream/60">
            &copy; {currentYear} Bafra Hakkânî Dergâhı. Tüm hakları saklıdır.
          </p>
          <p className="text-center text-xs leading-5 text-dernek-cream/60 mt-2">
            Samsun / Bafra
          </p>
        </div>
      </div>
    </footer>
  );
}
