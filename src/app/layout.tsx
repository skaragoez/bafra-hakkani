import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import seoData from "@/data/seo.json";

export const metadata: Metadata = {
  title: seoData.pages["/"].title,
  description: seoData.pages["/"].description,
  keywords: seoData.pages["/"].keywords,
  icons: {
    icon: '/images/bafra-hakkani-logo_v2.0_transparent.png',
    apple: '/images/bafra-hakkani-logo_v2.0_transparent.png',
  },
  openGraph: {
    type: 'website',
    locale: seoData.site.locale,
    url: seoData.site.url,
    siteName: seoData.site.name,
    title: seoData.pages["/"].title,
    description: seoData.pages["/"].description,
    images: [
      {
        url: '/images/bafra-hakkani-logo_v2.0_transparent.png',
        width: 1200,
        height: 630,
        alt: 'Bafra Hakkânî Dergâhı Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: seoData.pages["/"].title,
    description: seoData.pages["/"].description,
    images: ['/images/bafra-hakkani-logo_v2.0_transparent.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <StructuredData type="organization" />
        <StructuredData type="local-business" />
      </head>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
