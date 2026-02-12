import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import PageSection from "@/components/PageSection";
import EventCard from "@/components/EventCard";
import contentData from "@/data/content.json";
import eventsData from "@/data/events.json";
import seoData from "@/data/seo.json";

export const metadata: Metadata = {
  title: seoData.pages["/etkinlikler"].title,
  description: seoData.pages["/etkinlikler"].description,
  keywords: seoData.pages["/etkinlikler"].keywords,
};

export default function EtkinliklerPage() {
  const { etkinlikler } = contentData;

  return (
    <>
      <HeroSection
        title={etkinlikler.title}
        subtitle={etkinlikler.subtitle}
      />

      {/* Recurring Events */}
      <PageSection title="Düzenli Programlarımız">
        <div className="space-y-8 max-w-3xl mx-auto">
          {eventsData
            .filter((event) => event.recurring)
            .map((event) => (
              <EventCard
                key={event.id}
                title={event.title}
                description={event.description}
                schedule={event.schedule}
                recurring={event.recurring}
                type={event.type}
                details={event.details}
              />
            ))}
        </div>
      </PageSection>

      {/* Upcoming Events */}
      <PageSection background="cream" title={etkinlikler.upcoming.title}>
        <div className="max-w-3xl mx-auto">
          {eventsData.filter((event) => !event.recurring).length > 0 ? (
            <div className="space-y-8">
              {eventsData
                .filter((event) => !event.recurring)
                .map((event) => (
                  <EventCard
                    key={event.id}
                    title={event.title}
                    description={event.description}
                    schedule={event.schedule}
                    recurring={event.recurring}
                    type={event.type}
                    details={event.details}
                  />
                ))}
            </div>
          ) : (
            <div className="text-center bg-white p-12 rounded-lg shadow-md border border-dernek-cream">
              <svg
                className="mx-auto h-16 w-16 text-dernek-turquoise/40 mb-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="text-lg text-gray-600">
                {etkinlikler.upcoming.emptyMessage}
              </p>
            </div>
          )}
        </div>
      </PageSection>
    </>
  );
}
