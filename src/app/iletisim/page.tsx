import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import PageSection from "@/components/PageSection";
import contentData from "@/data/content.json";
import seoData from "@/data/seo.json";

export const metadata: Metadata = {
  title: seoData.pages["/iletisim"].title,
  description: seoData.pages["/iletisim"].description,
  keywords: seoData.pages["/iletisim"].keywords,
};

export default function IletisimPage() {
  const { iletisim } = contentData;

  const contactInfo = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      label: iletisim.info.address.label,
      value: iletisim.info.address.value,
      color: 'dernek-turquoise',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      label: iletisim.info.phone.label,
      value: iletisim.info.phone.value,
      color: 'dernek-green',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      label: iletisim.info.email.label,
      value: iletisim.info.email.value,
      color: 'dernek-blue',
    },
  ];

  return (
    <>
      <HeroSection
        title={iletisim.title}
        subtitle={iletisim.subtitle}
      />

      <PageSection>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-${info.color} group text-center`}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${info.color}/10 mb-6 text-${info.color} group-hover:bg-${info.color}/20 transition-colors duration-300`}>
                  {info.icon}
                </div>
                <h3 className="text-lg font-heading font-semibold text-dernek-blue mb-3">
                  {info.label}
                </h3>
                <p className="text-gray-600">
                  {info.value}
                </p>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="bg-dernek-cream p-8 rounded-lg shadow-md text-center">
            <svg
              className="mx-auto h-12 w-12 text-dernek-turquoise mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-lg text-gray-700">
              {iletisim.note}
            </p>
          </div>
        </div>
      </PageSection>

      {/* Map Placeholder */}
      <PageSection background="cream" title="Konum">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-12 rounded-lg shadow-md text-center border-2 border-dashed border-dernek-turquoise/30">
            <svg
              className="mx-auto h-20 w-20 text-dernek-turquoise/40 mb-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
              />
            </svg>
            <p className="text-lg text-gray-600">
              Harita yakında eklenecektir
            </p>
          </div>
        </div>
      </PageSection>
    </>
  );
}
