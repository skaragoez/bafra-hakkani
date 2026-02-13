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
                  Nakşibendî Hakkânî Tarikatı 41. Büyük Şeyhi
                </p>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Dergâhımız, Nakşibendî Hakkânî silsilesinin günümüz mürşidi olan <strong className="text-dernek-blue">Şeyh Mehmet Adil Hazretleri</strong>&apos;nin mübarek izni ve himayesi altında faaliyetlerini sürdürmektedir.
                </p>
                <p>
                  Babası ve üstadı olan <strong className="text-dernek-blue">Şeyh Nazım Kıbrısî (k.s.)</strong> Hazretleri&apos;nin vefatından sonra, Nakşibendî Hakkânî yolunun 41. Büyük Şeyhi ve halifesi olan Şeyh Mehmet Adil Hazretleri&apos;ni mürşid-i kâmil olarak tanır ve kendilerine biat etmiş bulunmaktayız.
                </p>
                <p className="bg-dernek-blue/5 p-6 rounded-lg border-l-4 border-dernek-turquoise italic">
                  &quot;Tarikat yolunda mürşidsiz hareket etmek, rehbersiz yola çıkmak gibidir. Bizler, Şeyh Mehmet Adil Hazretleri&apos;nin manevi rehberliğinde, Nakşibendî Hakkânî yolunun edep ve prensipleri doğrultusunda yürümeye çalışmaktayız.&quot;
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
                Nakşibendî Hakkânî Dergâhı Bafra Temsilcisi
              </p>
              <div className="space-y-3 text-gray-700 leading-relaxed text-base">
                <p>
                  İbrahim İpek Hoca Efendi, Bafra Hakkânî Dergâhı&apos;nın temsilcisi olarak bölgemizde manevi rehberlik ve irşad hizmetlerini ifa etmektedir.
                </p>
                <p>
                  Şeyh Mehmet Adil Hazretleri&apos;nin mübarek izni ve himayesi altında, Nakşibendî Hakkânî yolunun Bafra&apos;daki faaliyetlerinin yürütülmesinde önemli bir vazife üstlenmektedir.
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
              Bafra Hakkânî Dergâhı, Bafra&apos;da manevi sohbet, zikir ve hatme programlarının icra edildiği mekândır. Dergâhımız, Nakşibendî Hakkânî yolunun Bafra&apos;daki temsilcisi İbrahim İpek Hoca Efendi&apos;nin rehberliğinde hizmet vermektedir. Gazi Paşa Mahallesi&apos;nde, Gazi Paşa Camii&apos;nin Türkocağı Caddesi yönüne doğru az ilerisinde, Kahraman Berber&apos;in yanındadır.
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

      {/* Mission Section with Shah Naqshband's Teaching */}
      <PageSection title="Misyonumuz" centered>
        {/* Quote from Shah Bahauddin Naqshband */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-dernek-cream/50 rounded-2xl p-8 md:p-10 border-2 border-dernek-turquoise/20 shadow-md">
            <blockquote className="text-2xl md:text-3xl font-heading italic text-dernek-blue leading-relaxed text-center mb-4">
              &quot;Tarîkatuna as-sohba, wa&apos;l-khayru fi&apos;l-jama&apos;iyya&quot;
            </blockquote>
            <p className="text-lg text-dernek-green text-center mb-2">
              &quot;Bizim yolumuz sohbettir ve hayır cemaat içindedir&quot;
            </p>
            <cite className="block text-center text-base text-gray-600 not-italic">
              — Şah Bahaeddin Nakşibend (k.s.)
            </cite>
          </div>
        </div>

        {/* Three Core Principles from this Teaching */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-5xl mx-auto mb-12 items-start">
          {/* Sohbet */}
          <div className="relative bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-dernek-turquoise group">
            <div className="text-center">
              <div className="relative inline-flex items-center justify-center w-36 h-36 mb-6">
                <Image
                  src="/images/icon-sohbet.png"
                  alt="Sohbet"
                  width={144}
                  height={144}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-heading font-semibold text-dernek-blue mb-3 group-hover:text-dernek-turquoise transition-colors duration-300">
                Sohbet
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Manevi sohbet ve arkadaşlık yoluyla kalp terbiyesi, ruhun arınması ve Allah&apos;a yakınlaşma yolunda ilerleme.
              </p>
            </div>
          </div>

          {/* Cemaat */}
          <div className="relative bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-dernek-green group">
            <div className="text-center">
              <div className="relative inline-flex items-center justify-center w-36 h-36 mb-6">
                <Image
                  src="/images/icon-cemaat.png"
                  alt="Cemaat"
                  width={144}
                  height={144}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-heading font-semibold text-dernek-blue mb-3 group-hover:text-dernek-green transition-colors duration-300">
                Cemaat
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Birlikte olmak, kardeşlik bağları kurmak ve topluluk içinde manevi gelişimi paylaşmak.
              </p>
            </div>
          </div>

          {/* Zikir */}
          <div className="relative bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-dernek-blue group">
            <div className="text-center">
              <div className="relative inline-flex items-center justify-center w-36 h-36 mb-6">
                <Image
                  src="/images/icon-ibadet.png"
                  alt="Zikir ve İbadet"
                  width={144}
                  height={144}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-heading font-semibold text-dernek-blue mb-3 group-hover:text-dernek-blue transition-colors duration-300">
                Zikir ve İbadet
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Allah&apos;ı anmak, hatme programları ve toplu ibadetler yoluyla manevi bağlılığı güçlendirmek.
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Call to Action - Hatme-i Hacegan */}
      <PageSection background="cream">
        <div className="relative bg-gradient-to-br from-dernek-blue via-dernek-turquoise to-dernek-green rounded-3xl p-14 md:p-16 text-center shadow-2xl overflow-hidden">
          {/* Decorative pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-3xl" />
          </div>
          
          {/* Content */}
          <div className="relative z-10">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-6 border-2 border-white/40">
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Perşembe Hatme-i Hacegan
            </h2>
            <p className="text-white/95 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Her Perşembe ikindi namazından sonra düzenlenen Hatme-i Hacegan programımıza katılabilirsiniz.
            </p>
            <Link
              href="/etkinlikler"
              className="inline-flex items-center px-10 py-4 bg-white text-dernek-blue font-bold text-lg rounded-xl hover:bg-dernek-cream hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-white/25"
            >
              Etkinliklere Git
              <svg className="ml-3 w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </PageSection>
    </>
  );
}
