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

      {/* History - The Birth of Naqshbandi Tariqa */}
      <PageSection background="cream" title={naksibendi.history.title}>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-dernek-green">
            <p className="text-lg text-gray-700 leading-relaxed">
              {naksibendi.history.content}
            </p>
          </div>
        </div>
      </PageSection>

      {/* Real Faith */}
      <PageSection title={naksibendi.realFaith.title}>
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            {naksibendi.realFaith.content}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {naksibendi.realFaith.signs.map((sign, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-dernek-turquoise/5 to-dernek-green/5 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-dernek-turquoise"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-dernek-turquoise flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-heading font-bold text-dernek-blue mb-3 text-center">
                  {sign.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  {sign.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-dernek-cream/30 p-6 rounded-lg border-l-4 border-dernek-gold mt-8">
            <p className="text-gray-700 italic leading-relaxed">
              {naksibendi.realFaith.note}
            </p>
          </div>
        </div>
      </PageSection>

      {/* Sheikh's Role */}
      <PageSection background="cream" title={naksibendi.sheikh.title}>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed">
              {naksibendi.sheikh.content}
            </p>
          </div>
        </div>
      </PageSection>

      {/* Sohbet */}
      <PageSection title={naksibendi.sohbet.title}>
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            {naksibendi.sohbet.content}
          </p>
          
          <div className="bg-gradient-to-r from-dernek-blue/5 via-dernek-turquoise/5 to-dernek-green/5 p-8 rounded-xl shadow-lg border-l-4 border-dernek-blue">
            <div className="flex items-start space-x-4">
              <svg className="w-8 h-8 text-dernek-turquoise flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
              </svg>
              <p className="text-lg text-gray-700 leading-relaxed italic">
                {naksibendi.sohbet.quote}
              </p>
            </div>
          </div>

          <div className="bg-dernek-cream/50 p-6 rounded-lg">
            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold text-dernek-blue">Not: </span>
              {naksibendi.sohbet.benefit}
            </p>
          </div>
        </div>
      </PageSection>

      {/* The Naqsh (Seal) */}
      <PageSection background="cream" title={naksibendi.naqsh.title}>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-dernek-gold">
            <p className="text-lg text-gray-700 leading-relaxed">
              {naksibendi.naqsh.content}
            </p>
          </div>
        </div>
      </PageSection>

      {/* Station of Siddiq */}
      <PageSection title={naksibendi.station.title}>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-dernek-blue/5 to-dernek-turquoise/5 p-8 rounded-xl shadow-lg border-l-4 border-dernek-blue">
            <p className="text-lg text-gray-700 leading-relaxed">
              {naksibendi.station.content}
            </p>
          </div>
        </div>
      </PageSection>

      {/* Foundations */}
      <PageSection background="cream" title={naksibendi.foundations.title}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
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

      {/* The Way - Connection to Prophet */}
      <PageSection title={naksibendi.way.title}>
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            {naksibendi.way.content}
          </p>
          
          <div className="bg-gradient-to-r from-dernek-green/5 via-dernek-turquoise/5 to-dernek-blue/5 p-8 rounded-xl shadow-lg border-l-4 border-dernek-green">
            <p className="text-lg text-gray-700 leading-relaxed italic">
              {naksibendi.way.quote}
            </p>
          </div>
        </div>
      </PageSection>

      {/* Connection with Sheikh */}
      <PageSection background="cream" title={naksibendi.connection.title}>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-dernek-turquoise">
            <div className="flex items-start space-x-4">
              <svg className="w-8 h-8 text-dernek-turquoise flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
              </svg>
              <p className="text-lg text-gray-700 leading-relaxed italic">
                {naksibendi.connection.quote}
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Sheikhs - Spiritual Chain */}
      <PageSection title="Manevi Silsile: Nakşibendî Şeyhleri">
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
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-dernek-green">
            <h3 className="text-2xl font-heading font-bold text-dernek-blue mb-4 text-center">
              {naksibendi.closing.title}
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              {naksibendi.closing.content}
            </p>
          </div>
        </div>
      </PageSection>
    </>
  );
}
