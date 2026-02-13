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

      {/* Murshid + Bafra Temsilci – eine Section, gleicher Container = bündige Ränder */}
      <PageSection background="cream">
        <div className="max-w-6xl mx-auto space-y-10 sm:space-y-12">
          {/* Murshid Section - Şeyh Mehmet Adil */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/seyh-mehmed-adil.jpg"
                  alt="Şeyh Mehmet Adil El-Hakkani"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
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
                  Dergâhımız, Nakşibendî Hakkani silsilesinin günümüz mürşidi olan <strong className="text-dernek-blue">Şeyh Mehmet Adil Hazretleri</strong>&apos;nin mübarek izni ve himayesi altında faaliyetlerini sürdürmektedir.
                </p>
                <p>
                  Babası ve üstadı olan <strong className="text-dernek-blue">Şeyh Nazım Kıbrısî (k.s.)</strong> Hazretleri&apos;nin vefatından sonra, Nakşibendî Hakkani yolunun 41. Büyük Şeyhi ve halifesi olan Şeyh Mehmet Adil Hazretleri&apos;ni mürşid-i kâmil olarak tanır ve kendilerine biat etmiş bulunmaktayız.
                </p>
                <p className="bg-dernek-blue/5 p-6 rounded-lg border-l-4 border-dernek-turquoise italic">
                  &quot;Tarikat yolunda mürşidsiz hareket etmek, rehbersiz yola çıkmak gibidir. Bizler, Şeyh Mehmet Adil Hazretleri&apos;nin manevi rehberliğinde, Nakşibendî Hakkani yolunun edep ve prensipleri doğrultusunda yürümeye çalışmaktayız.&quot;
                </p>
                <p className="text-sm text-gray-600 mt-6">
                  Dergâhımızın tüm faaliyetleri, mürşidimizin izni ve bereketli duaları ile gerçekleşmektedir.
                </p>
              </div>
            </div>
          </div>

          {/* Bafra Temsilcimiz - İbrahim İpek Hoca Efendi */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start pt-8 sm:pt-10">
            <div className="order-2 lg:order-1">
              <span className="inline-block px-3 py-1.5 bg-dernek-green/10 text-dernek-green font-medium rounded-md text-sm mb-3">
                Bafra Temsilcimiz
              </span>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-dernek-blue mb-2">
                İbrahim İpek Hoca Efendi
              </h2>
              <p className="text-base text-dernek-green font-semibold mb-4">
                Nakşibendî Hakkani Dergâhı Bafra Temsilcisi
              </p>
              <div className="space-y-3 text-gray-700 leading-relaxed text-base">
                <p>
                  İbrahim İpek Hoca Efendi, Bafra Hakkânî Dergâhı&apos;nın temsilcisi olarak bölgemizde manevi rehberlik ve irşad hizmetlerini ifa etmektedir.
                </p>
                <p>
                  Şeyh Mehmet Adil Hazretleri&apos;nin mübarek izni ve himayesi altında, Nakşibendî Hakkani yolunun Bafra&apos;daki faaliyetlerinin yürütülmesinde önemli bir vazife üstlenmektedir.
                </p>
                <p className="border-l-2 border-dernek-green/50 pl-4 text-gray-600 italic">
                  Dergâhımızda zikir, sohbet ve hatme programları İbrahim Hoca Efendi&apos;nin rehberliğinde icra edilmektedir.
                </p>
                <p className="text-sm text-gray-500">
                  Detaylı bilgi ve tanıtım metni ileride eklenecektir.
                </p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative w-full max-w-xs aspect-[3/4] rounded-xl overflow-hidden shadow-lg border-2 border-white/90">
                <Image
                  src="/images/ibrahim-hoca-efendi.jpg"
                  alt="İbrahim İpek Hoca Efendi - Bafra Temsilcisi"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Dergâh Section – Hintergrundbild mit Overlay und weichen Rändern */}
      <section className="relative py-32 sm:py-48 overflow-hidden">
        {/* Hintergrundbild */}
        <div className="absolute inset-0">
          <Image
            src="/images/dergah-1.jpeg"
            alt=""
            fill
            className="object-cover"
            priority={false}
          />
        </div>
        {/* Weißes Overlay – reduziert, damit Hintergrundbild sichtbarer bleibt */}
        <div className="absolute inset-0 bg-white/55" aria-hidden />
        {/* Weiche Ränder: Verlauf links und rechts */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden
          style={{
            background:
              "linear-gradient(to right, rgba(255,255,255,0.85) 0%, transparent 22%), linear-gradient(to left, rgba(255,255,255,0.85) 0%, transparent 22%)",
          }}
        />
        {/* Inhalt */}
        <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold tracking-tight text-dernek-blue sm:text-4xl mb-6">
            Dergâh
          </h2>
          <div className="max-w-3xl mb-10 bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-md border border-dernek-turquoise/20 border-l-4 border-l-dernek-turquoise">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Bafra Hakkânî Dergâhı, Bafra&apos;da manevi sohbet, zikir ve hatme programlarının icra edildiği mekândır. Dergâhımız, Nakşibendî Hakkani yolunun Bafra&apos;daki temsilcisi İbrahim İpek Hoca Efendi&apos;nin rehberliğinde hizmet vermektedir. Gazi Paşa Mahallesi&apos;nde, Gazi Paşa Camii&apos;nin Türkocağı Caddesi yönüne doğru az ilerisinde, Kahraman Berber&apos;in yanındadır.
            </p>
            <p className="text-base font-semibold text-dernek-blue">
              Büyükcami, Hocaoğlu Sk. 6c, 55400 Bafra/Samsun
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Kontaktperson 1 */}
            <div className="flex items-center gap-4 bg-white/70 backdrop-blur-sm rounded-xl p-5 shadow-md border border-dernek-turquoise/10">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-dernek-cream flex items-center justify-center border-2 border-dernek-turquoise/20">
                <svg className="w-8 h-8 text-dernek-turquoise" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <p className="font-heading font-semibold text-dernek-blue">Kontakt 1</p>
                <p className="text-sm text-gray-600 mt-0.5">Name wird ergänzt</p>
                <a href="tel:+900000000001" className="text-dernek-turquoise font-medium text-sm mt-1 inline-block hover:underline">
                  +90 000 000 00 01
                </a>
              </div>
            </div>
            {/* Kontaktperson 2 */}
            <div className="flex items-center gap-4 bg-white/70 backdrop-blur-sm rounded-xl p-5 shadow-md border border-dernek-turquoise/10">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-dernek-cream flex items-center justify-center border-2 border-dernek-turquoise/20">
                <svg className="w-8 h-8 text-dernek-turquoise" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <p className="font-heading font-semibold text-dernek-blue">Kontakt 2</p>
                <p className="text-sm text-gray-600 mt-0.5">Name wird ergänzt</p>
                <a href="tel:+900000000002" className="text-dernek-turquoise font-medium text-sm mt-1 inline-block hover:underline">
                  +90 000 000 00 02
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

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
