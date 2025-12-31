import { Metadata } from 'next';
import Link from 'next/link';
import SubHeader from '@/app/components/SubHeader';
import { ArrowRightIcon, UsersIcon, AwardIcon, ClockIcon, StarIcon, ScaleIcon, LightbulbIcon, ShieldCheckIcon } from '@/app/components/Icons';
import { aboutContent, stats, siteConfig } from '@/app/lib/data';
import { generateMetadata as genMeta } from '@/app/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'About Us',
  description: 'Learn about Green Ladder WLL - Qatar\'s leading specialized contracting company for waterproofing, duct sealing, and structural strengthening services.',
  url: '/about-us',
  keywords: ['about Green Ladder', 'contracting company Qatar', 'construction company Doha'],
});

export default function AboutPage() {
  return (
    <>
      <SubHeader 
        title="About Us"
        breadcrumbs={[{ label: 'About Us' }]}
        subtitle="Learn about our story, mission, and commitment to excellence in Qatar's construction industry."
      />

      {/* Who We Are Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label">Our Story</span>
              <h2 className="mb-6">Who We Are</h2>
              <p className="text-muted mb-4 text-lg">
                {aboutContent.intro}
              </p>
              <p className="text-muted mb-6">
                {aboutContent.full}
              </p>
              
              <div className="grid grid-cols-3 gap-4 mt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-primary-50 rounded-xl">
                    <div className="text-3xl font-bold text-primary">{stat.value}{stat.suffix}</div>
                    <p className="text-sm text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mb-6">
                    <span className="text-white font-bold text-3xl">GL</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{siteConfig.legalName}</h3>
                  <p className="text-muted mb-4">Specialized Contracting & Trading Company</p>
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <span className="w-3 h-3 bg-primary rounded-full"></span>
                    Established in Qatar
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section section-light">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted">
                {aboutContent.mission}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted">
                {aboutContent.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-title">
            <span className="section-label">What Drives Us</span>
            <h2>Our Core Values</h2>
            <p>The principles that guide everything we do at Green Ladder.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutContent.values.map((value, index) => {
              const icons = [
                <StarIcon key="star" size={28} />,
                <ScaleIcon key="scale" size={28} />,
                <LightbulbIcon key="lightbulb" size={28} />,
                <ShieldCheckIcon key="shield" size={28} />
              ];
              return (
                <div key={index} className="card text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                    {icons[index]}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                  <p className="text-muted text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-title">
            <span className="section-label">Our Expertise</span>
            <h2 className="text-white">What We Do</h2>
            <p>Comprehensive specialized contracting services across Qatar.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card card-dark">
              <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-4 text-accent">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Waterproofing</h3>
              <p className="text-white/70">
                Advanced waterproofing solutions for basements, roofs, tanks, and all structural elements.
              </p>
            </div>

            <div className="card card-dark">
              <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-4 text-accent">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Duct Sealing</h3>
              <p className="text-white/70">
                Specialized cable penetration sealing for offshore and onshore facilities with fire safety.
              </p>
            </div>

            <div className="card card-dark">
              <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-4 text-accent">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Structural Works</h3>
              <p className="text-white/70">
                Strengthening, repair, and rehabilitation of concrete structures using modern techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label">Why Us</span>
              <h2 className="mb-6">Why Choose Green Ladder?</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <UsersIcon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Experienced Team</h4>
                    <p className="text-muted">Our skilled professionals bring years of expertise in specialized construction services.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <AwardIcon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Quality Assured</h4>
                    <p className="text-muted">We use only premium materials that meet international standards and certifications.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <ClockIcon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Timely Delivery</h4>
                    <p className="text-muted">We are committed to completing projects on schedule without compromising quality.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-primary-light rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Ready to Work With Us?</h3>
              <p className="text-white/80 mb-6">
                Contact us today to discuss your project requirements. Our team is ready to provide expert solutions tailored to your needs.
              </p>
              <Link href="/contact-us" className="btn btn-white">
                Get in Touch
                <ArrowRightIcon size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

