import seoData from "@/data/seo.json";
import eventsData from "@/data/events.json";

interface StructuredDataProps {
  type?: 'organization' | 'event' | 'local-business';
}

export default function StructuredData({ type = 'organization' }: StructuredDataProps) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": seoData.organization.name,
    "legalName": seoData.organization.legalName,
    "description": seoData.organization.description,
    "url": seoData.site.url,
    "foundingLocation": {
      "@type": "Place",
      "name": seoData.organization.foundingLocation
    },
    "areaServed": {
      "@type": "Place",
      "name": seoData.organization.areaServed
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": seoData.organization.address.addressLocality,
      "addressRegion": seoData.organization.address.addressRegion,
      "addressCountry": seoData.organization.address.addressCountry
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ReligiousOrganization",
    "name": seoData.organization.name,
    "description": seoData.organization.description,
    "url": seoData.site.url,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": seoData.organization.address.addressLocality,
      "addressRegion": seoData.organization.address.addressRegion,
      "addressCountry": seoData.organization.address.addressCountry
    },
    "areaServed": {
      "@type": "Place",
      "name": seoData.organization.areaServed
    }
  };

  const recurringEvent = eventsData.find(event => event.recurring);
  const eventSchema = recurringEvent ? {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": recurringEvent.title,
    "description": recurringEvent.description,
    "eventSchedule": {
      "@type": "Schedule",
      "byDay": "Thursday",
      "repeatFrequency": "P1W"
    },
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "location": {
      "@type": "Place",
      "name": seoData.organization.name,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": seoData.organization.address.addressLocality,
        "addressRegion": seoData.organization.address.addressRegion,
        "addressCountry": seoData.organization.address.addressCountry
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": seoData.organization.name,
      "url": seoData.site.url
    },
    "isAccessibleForFree": true,
    "inLanguage": "tr"
  } : null;

  let schema;
  switch (type) {
    case 'event':
      schema = eventSchema;
      break;
    case 'local-business':
      schema = localBusinessSchema;
      break;
    default:
      schema = organizationSchema;
  }

  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
