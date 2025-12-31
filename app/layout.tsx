import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";
import { siteConfig } from "./lib/data";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Specialized Contracting & Waterproofing Solutions`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Green Ladder Qatar",
    "waterproofing Qatar",
    "duct sealing Qatar",
    "structural strengthening Qatar",
    "concrete repair Qatar",
    "fireproofing Qatar",
    "epoxy flooring Qatar",
    "construction contractor Qatar",
    "offshore sealing solutions",
    "cable penetration sealing",
    "Doha contractor",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_QA",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Specialized Contracting Solutions`,
    description: siteConfig.description,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <head>
        {/* Favicons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/images/fav-32.png" />
        <link rel="icon" type="image/png" sizes="64x64" href="/images/fav-64.png" />
        <link rel="icon" type="image/png" sizes="128x128" href="/images/fav-128.png" />
        <link rel="apple-touch-icon" sizes="128x128" href="/images/fav-128.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#17b457" />
        <meta name="msapplication-TileColor" content="#17b457" />
        <meta name="msapplication-TileImage" content="/images/fav-128.png" />

        {/* Schema.org Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: siteConfig.legalName,
              alternateName: siteConfig.name,
              url: siteConfig.url,
              logo: `${siteConfig.url}/images/logo.png`,
              contactPoint: {
                "@type": "ContactPoint",
                telephone: siteConfig.phone,
                contactType: "customer service",
                areaServed: "QA",
                availableLanguage: ["English", "Arabic"],
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: siteConfig.address.city,
                addressCountry: siteConfig.address.country,
                postalCode: siteConfig.address.street.replace("PO Box: ", ""),
              },
              sameAs: [
                siteConfig.social.facebook,
                siteConfig.social.instagram,
                siteConfig.social.linkedin,
              ],
            }),
          }}
        />

        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: siteConfig.name,
              image: `${siteConfig.url}/images/logo.png`,
              "@id": siteConfig.url,
              url: siteConfig.url,
              telephone: siteConfig.phone,
              email: siteConfig.email,
              address: {
                "@type": "PostalAddress",
                addressLocality: siteConfig.address.city,
                addressCountry: siteConfig.address.country,
              },
              priceRange: "$$",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
                  opens: "08:00",
                  closes: "18:00",
                },
              ],
              areaServed: {
                "@type": "Country",
                name: "Qatar",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <ScrollToTop />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
