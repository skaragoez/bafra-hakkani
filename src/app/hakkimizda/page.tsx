import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import PageSection from "@/components/PageSection";
import contentData from "@/data/content.json";
import seoData from "@/data/seo.json";

export const metadata: Metadata = {
  title: seoData.pages["/hakkimizda"].title,
  description: seoData.pages["/hakkimizda"].description,
  keywords: seoData.pages["/hakkimizda"].keywords,
};

export default function HakkimizdaPage() {
  const { hakkimizda } = contentData;

  return (
    <>
      <HeroSection
        title={hakkimizda.title}
        subtitle="Nakşibendî Hakkani yolunun prensipleri doğrultusunda"
      />

      {/* Introduction */}
      <PageSection>
        <div className="prose prose-lg max-w-4xl mx-auto">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            {hakkimizda.intro}
          </p>
          <p className="text-lg text-dernek-blue font-semibold border-l-4 border-dernek-turquoise pl-6 py-3 bg-dernek-cream/30">
            {hakkimizda.principle}
          </p>
        </div>
      </PageSection>

      {/* Principles */}
      <PageSection background="cream" title="Temel Prensiplerimiz" centered>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12">
          {hakkimizda.principles.map((principle, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-dernek-green group"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-dernek-green/10 mb-6 group-hover:bg-dernek-green/20 transition-colors duration-300">
                  <svg
                    className="w-8 h-8 text-dernek-green"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-semibold text-dernek-blue mb-3 group-hover:text-dernek-green transition-colors duration-300">
                  {principle.title}
                </h3>
                <p className="text-gray-600">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      {/* Spiritual Lineage */}
      <PageSection title={hakkimizda.lineage.title} subtitle={hakkimizda.lineage.description}>
        <div className="max-w-3xl mx-auto mt-12">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-dernek-turquoise/30"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              <div className="relative pl-20">
                <div className="absolute left-0 w-16 h-16 rounded-full bg-dernek-turquoise flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-dernek-turquoise">
                  <h4 className="text-lg font-heading font-semibold text-dernek-blue mb-2">
                    Şeyh Nazım Kıbrısî (k.s.)
                  </h4>
                  <p className="text-sm text-dernek-turquoise font-medium mb-2">
                    40. Büyük Şeyh
                  </p>
                  <p className="text-gray-600">
                    Nakşibendî Hakkani yolunun dünya çapında yayılmasına vesile olmuş büyük mürşid
                  </p>
                </div>
              </div>

              <div className="relative pl-20">
                <div className="absolute left-0 w-16 h-16 rounded-full bg-dernek-green flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-dernek-green">
                  <h4 className="text-lg font-heading font-semibold text-dernek-blue mb-2">
                    Şeyh Mehmet Adil El-Hakkani El-Rabbani
                  </h4>
                  <p className="text-sm text-dernek-green font-medium mb-2">
                    41. Büyük Şeyh - Günümüz Mürşidi
                  </p>
                  <p className="text-gray-600">
                    Şeyh Nazım Hazretleri'nin halefi ve günümüz manevi rehberi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>
    </>
  );
}
