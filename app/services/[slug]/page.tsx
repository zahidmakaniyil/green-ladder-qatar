import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SubHeader from '@/app/components/SubHeader';
import { ArrowRightIcon, CheckIcon, ChevronDownIcon } from '@/app/components/Icons';
import { ServiceIcon, ServiceCardSmall } from '@/app/components/ServiceCard';
import { services, siteConfig } from '@/app/lib/data';
import { generateMetadata as genMeta, getServiceSchema, getFAQSchema, getBreadcrumbSchema } from '@/app/lib/seo';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find(s => s.slug === slug);

  if (!service) return {};

  return genMeta({
    title: service.title,
    description: service.description,
    url: `/services/${service.slug}`,
    keywords: service.keywords || [],
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find(s => s.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedServices = services.filter(s => s.slug !== slug).slice(0, 3);
  const isDuctSealing = slug === 'duct-sealing-system';

  // Schema data
  const serviceSchema = getServiceSchema(service);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: service.title, url: `/services/${service.slug}` },
  ]);
  const faqSchema = service.faqs ? getFAQSchema(service.faqs) : null;

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <SubHeader
        title={service.title}
        breadcrumbs={[
          { label: 'Services', href: '/services' },
          { label: service.shortTitle }
        ]}
        subtitle={service.shortDescription}
      />

      {/* Hero Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center text-white">
                  <ServiceIcon icon={service.icon} size={32} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{service.shortTitle}</h2>
                  {service.featured && (
                    <span className="inline-block bg-accent text-dark-bg px-3 py-1 rounded-full text-xs font-bold mt-1">
                      ⭐ Featured Service
                    </span>
                  )}
                </div>
              </div>

              <div className="prose max-w-none">
                <p className="text-lg text-muted mb-6">
                  {service.description}
                </p>

                {/* Benefits */}
                {service.benefits && (
                  <div className="bg-primary-50 rounded-2xl p-6 mb-8">
                    <h3 className="text-xl font-bold mb-4">Key Benefits</h3>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckIcon size={14} className="text-white" />
                          </div>
                          <span className="text-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Applications (for Duct Sealing) */}
                {isDuctSealing && service.applications && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Applications</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {service.applications.offshore && (
                        <div className="bg-dark-bg text-white rounded-xl p-6">
                          <h4 className="text-accent font-bold mb-3">Offshore Facilities</h4>
                          <ul className="space-y-2">
                            {service.applications.offshore.map((item, i) => (
                              <li key={i} className="flex items-center gap-2 text-white/80">
                                <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {service.applications.onshore && (
                        <div className="bg-primary-100 rounded-xl p-6">
                          <h4 className="text-primary font-bold mb-3">Onshore Facilities</h4>
                          <ul className="space-y-2">
                            {service.applications.onshore.map((item, i) => (
                              <li key={i} className="flex items-center gap-2 text-foreground">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* FAQs */}
                {service.faqs && service.faqs.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
                    <div className="space-y-4">
                      {service.faqs.map((faq, i) => (
                        <details key={i} className="group bg-gray-50 rounded-xl overflow-hidden">
                          <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-foreground hover:bg-gray-100 transition-colors">
                            {faq.question}
                            <ChevronDownIcon size={20} className="text-muted group-open:rotate-180 transition-transform" />
                          </summary>
                          <div className="p-4 pt-0 text-muted">
                            {faq.answer}
                          </div>
                        </details>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-primary to-primary-light rounded-2xl p-6 text-white sticky top-24">
                <h3 className="text-xl font-bold mb-3">Interested in This Service?</h3>
                <p className="text-white/80 text-sm mb-6">
                  Contact us today for a free consultation and quote. Our experts are ready to help.
                </p>
                <Link href="/contact-us" className="btn btn-white w-full mb-3">
                  Get a Free Quote
                </Link>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                  className="btn btn-outline-white border-white text-white hover:bg-white hover:text-primary w-full"
                >
                  Call {siteConfig.phone}
                </a>

                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-sm text-white/60 mb-2">Or WhatsApp us:</p>
                  <a
                    href={`https://wa.me/${siteConfig.phone.replace(/[^0-9]/g, '')}?text=Hi, I'm interested in ${service.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-accent hover:underline"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="section-title">
            <span className="section-label">Explore More</span>
            <h2>Related Services</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {relatedServices.map((relService) => (
              <ServiceCardSmall key={relService.id} service={relService} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/services" className="btn btn-outline">
              View All Services
              <ArrowRightIcon size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
