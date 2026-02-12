import HeroVideo from "@/components/HeroVideo";
import PageSection from "@/components/PageSection";
import Image from "next/image";
import Link from "next/link";
import contentData from "@/data/content.json";

export default function HomePage() {
  const { homepage } = contentData;

  return (
    <>
      {/* Hero Video */}
      <HeroVideo />

      {/* Intro Section with Title & Description */}
      <PageSection centered>
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-dernek-blue mb-6">
            {homepage.hero.title}
          </h1>
          <p className="text-xl sm:text-2xl text-dernek-green font-semibold mb-8">
            {homepage.hero.subtitle}
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            {homepage.hero.description}
          </p>
          <div className="inline-block px-6 py-3 bg-dernek-turquoise/10 rounded-lg border-2 border-dernek-turquoise/20">
            <p className="text-lg text-dernek-blue font-medium">
              {homepage.welcome.text}
            </p>
          </div>
        </div>
      </PageSection>

      {/* Murshid Section - Şeyh Mehmet Adil */}
      <PageSection background="cream">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="flex justify-center lg:justify-end order-2 lg:order-1">
              <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/seyh-mehmed-adil.jpg"
                  alt="Şeyh Mehmet Adil El-Hakkani"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="order-1 lg:order-2">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-dernek-turquoise/10 text-dernek-turquoise font-semibold rounded-full text-sm mb-4">
                  Manevi Rehberimiz
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-dernek-blue mb-4">
                  Şeyh Mehmet Adil El-Hakkani El-Rabbani
                </h2>
                <p className="text-lg text-dernek-green font-semibold mb-6">
                  Nakşibendî Hakkani Tarikatı 41. Büyük Şeyhi
                </p>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Dergâhımız, Nakşibendî Hakkani silsilesinin günümüz mürşidi olan <strong className="text-dernek-blue">Şeyh Mehmet Adil Hazretleri</strong>'nin mübarek izni ve himayesi altında faaliyetlerini sürdürmektedir.
                </p>
                <p>
                  Babası ve üstadı olan <strong className="text-dernek-blue">Şeyh Nazım Kıbrısî (k.s.)</strong> Hazretleri'nin vefatından sonra, Nakşibendî Hakkani yolunun 41. Büyük Şeyhi ve halifesi olan Şeyh Mehmet Adil Hazretleri'ni mürşid-i kâmil olarak tanır ve kendilerine biat etmiş bulunmaktayız.
                </p>
                <p className="bg-dernek-blue/5 p-6 rounded-lg border-l-4 border-dernek-turquoise italic">
                  "Tarikat yolunda mürşidsiz hareket etmek, rehbersiz yola çıkmak gibidir. Bizler, Şeyh Mehmet Adil Hazretleri'nin manevi rehberliğinde, Nakşibendî Hakkani yolunun edep ve prensipleri doğrultusunda yürümeye çalışmaktayız."
                </p>
                <p className="text-sm text-gray-600 mt-6">
                  Dergâhımızın tüm faaliyetleri, mürşidimizin izni ve bereketli duaları ile gerçekleşmektedir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Highlights Section */}
      <PageSection title="Misyonumuz" centered>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mt-12">
          {homepage.highlights.map((highlight, index) => (
            <div
              key={index}
              className="relative bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-dernek-turquoise group"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-dernek-turquoise/10 mb-6 group-hover:bg-dernek-turquoise/20 transition-colors duration-300">
                  <svg
                    className="w-8 h-8 text-dernek-turquoise"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-semibold text-dernek-blue mb-3 group-hover:text-dernek-turquoise transition-colors duration-300">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      {/* Call to Action */}
      <PageSection background="cream">
        <div className="bg-gradient-to-r from-dernek-blue to-dernek-turquoise rounded-2xl p-12 text-center shadow-xl">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Perşembe Hatme-i Hacegan
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Her Perşembe akşamı düzenlenen Hatme-i Hacegan programımıza katılabilirsiniz.
          </p>
          <Link
            href="/etkinlikler"
            className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-dernek-blue transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Etkinlikler
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </PageSection>
    </>
  );
}
