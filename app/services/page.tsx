import { Metadata } from 'next';
import Link from 'next/link';
import SubHeader from '@/app/components/SubHeader';
import { ArrowRightIcon, ShieldCheckIcon } from '@/app/components/Icons';
import { services } from '@/app/lib/data';
import { generateMetadata as genMeta } from '@/app/lib/seo';
import ServiceCard from '@/app/components/ServiceCard';

export const metadata: Metadata = genMeta({
  title: 'Our Services',
  description: 'Explore Green Ladder Qatar\'s comprehensive range of specialized contracting services including duct sealing, waterproofing, structural strengthening, and more.',
  url: '/services',
  keywords: ['contracting services Qatar', 'waterproofing services', 'duct sealing services', 'construction Qatar'],
});

export default function ServicesPage() {
  const featuredService = services.find(s => s.slug === 'duct-sealing-system');
  const otherServices = services.filter(s => s.slug !== 'duct-sealing-system');

  return (
    <>
      <SubHeader 
        title="Our Services"
        breadcrumbs={[{ label: 'Services' }]}
        subtitle="Comprehensive specialized contracting solutions for all your construction and waterproofing needs."
      />

      {/* Featured Service Banner */}
      {featuredService && (
        <section className="py-16 bg-gradient-to-r from-[#17b457] to-[#07bdd4] text-white">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block bg-white text-[#17b457] px-4 py-1.5 rounded-full text-sm font-bold mb-4">
                  ⭐ Our Specialty
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{featuredService.title}</h2>
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  {featuredService.description}
                </p>
                <Link 
                  href={`/services/${featuredService.slug}`}
                  className="btn btn-white"
                >
                  Learn More About This Service
                  <ArrowRightIcon size={18} />
                </Link>
              </div>
              <div className="flex justify-center">
                <div className="w-48 h-48 bg-white/10 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <ShieldCheckIcon size={80} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Services Grid */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-title">
            <span className="section-label">What We Offer</span>
            <h2>All Our Services</h2>
            <p>
              Professional contracting services delivered with expertise, 
              quality materials, and commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-dark">
        <div className="container text-center">
          <h2 className="text-white mb-4">Need a Custom Solution?</h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Can&apos;t find what you&apos;re looking for? Contact us to discuss your specific 
            requirements. We offer tailored solutions for unique project needs.
          </p>
          <Link href="/contact-us" className="btn btn-secondary">
            Contact Us Today
            <ArrowRightIcon size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
