import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import PageSection from "@/components/PageSection";
import contentData from "@/data/content.json";
import seoData from "@/data/seo.json";

export const metadata: Metadata = {
  title: seoData.pages["/naksibendi-yolu"].title,
  description: seoData.pages["/naksibendi-yolu"].description,
  keywords: seoData.pages["/naksibendi-yolu"].keywords,
};

export default function NaksibendiPage() {
  const { naksibendi } = contentData;

  return (
    <>
      <HeroSection
        title={naksibendi.title}
        subtitle="Kalp merkezli zikir, sünnete bağlılık ve manevi olgunlaşma"
      />

      {/* Introduction */}
      <PageSection>
        <div className="prose prose-lg max-w-4xl mx-auto">
          <p className="text-xl text-gray-700 leading-relaxed">
            {naksibendi.intro}
          </p>
        </div>
      </PageSection>

      {/* Foundations */}
      <PageSection background="cream" title={naksibendi.foundations.title}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-12">
          {naksibendi.foundations.items.map((item, index) => (
            <div
              key={index}
              className="flex items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-dernek-turquoise group"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-dernek-turquoise/10 flex items-center justify-center mr-4 group-hover:bg-dernek-turquoise/20 transition-colors duration-300">
                <svg
                  className="w-6 h-6 text-dernek-turquoise"
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
              <span className="text-lg font-medium text-dernek-blue group-hover:text-dernek-turquoise transition-colors duration-300">
                {item}
              </span>
            </div>
          ))}
        </div>
      </PageSection>

      {/* Sheikhs */}
      <PageSection title="Manevi Rehberlerimiz">
        <div className="space-y-12 max-w-4xl mx-auto mt-12">
          {naksibendi.sheikhs.map((sheikh, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-dernek-cream"
            >
              <div className="bg-gradient-to-r from-dernek-blue to-dernek-turquoise p-1">
                <div className="bg-white p-8">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-dernek-turquoise to-dernek-green flex items-center justify-center shadow-lg">
                        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-heading font-bold text-dernek-blue mb-2">
                        {sheikh.name}
                      </h3>
                      <p className="text-sm font-semibold text-dernek-turquoise mb-1">
                        {sheikh.title}
                      </p>
                      <p className="text-xs text-dernek-green font-medium mb-4">
                        {sheikh.role}
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        {sheikh.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      {/* Closing Message */}
      <PageSection background="cream">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-dernek-green">
            <p className="text-lg text-gray-700 leading-relaxed">
              Nakşibendî Hakkani yolu, bin yılı aşkın bir geleneğe sahip manevi bir yoldur. 
              Bu yolda, kalp terbiyesi ve Allah sevgisi esas alınarak manevi olgunlaşma hedeflenir.
            </p>
          </div>
        </div>
      </PageSection>
    </>
  );
}
