import { Metadata } from 'next';
import { generateMetadata as genMeta, getLocalBusinessSchema, getBreadcrumbSchema } from '@/app/lib/seo';
import { siteConfig } from '@/app/lib/data';

export const metadata: Metadata = genMeta({
  title: 'Contact Us',
  description: 'Contact Green Ladder Qatar for waterproofing, duct sealing, and construction services. Get a free quote today. Call +974 30307327 or email us.',
  url: '/contact-us',
  keywords: ['contact Green Ladder', 'construction quote Qatar', 'waterproofing quote Doha', 'duct sealing inquiry'],
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = getLocalBusinessSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Contact Us', url: '/contact-us' },
  ]);

  return (
    <>
      {/* Structured Data for Contact Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* ContactPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact Green Ladder Qatar',
            description: 'Get in touch with Green Ladder for construction services in Qatar',
            url: `${siteConfig.url}/contact-us`,
            mainEntity: {
              '@type': 'Organization',
              name: siteConfig.legalName,
              telephone: siteConfig.phone,
              email: siteConfig.email,
            },
          }),
        }}
      />
      {children}
    </>
  );
}

