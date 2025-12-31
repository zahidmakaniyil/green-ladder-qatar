import Link from 'next/link';
import Image from 'next/image';
import { services, stats, siteConfig, blogPosts } from './lib/data';
import ServiceCard from './components/ServiceCard';
import { CheckIcon, ArrowRightIcon } from './components/Icons';

export default function HomePage() {
  const featuredService = services.find(s => s.slug === 'duct-sealing-system');
  // Sort: featured services first, then by priority (limit to 6)
  const mainServices = services
    .sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return a.priority - b.priority;
    })
    .slice(0, 6);

  return (
    <>
      {/* ========================================
          HERO SECTION
      ======================================== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/home/hero-bg.webp)' }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/95 via-[#0f172a]/85 to-[#0f172a]/75" />

        {/* Animated Color Accents */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#17b457]/15 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#07bdd4]/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(7, 189, 212, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(7, 189, 212, 0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>

        <div className="container relative z-10 py-20">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm my-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-[#17b457] animate-pulse"></span>
              <span className="text-white/80 text-sm font-medium">Qatar&apos;s Trusted Construction Partner</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6 animate-fade-in-up">
              Specialized
              <span className="block bg-gradient-to-r from-[#17b457] to-[#07bdd4] bg-clip-text text-transparent">
                Contracting Solutions
              </span>
              for Qatar
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mb-10 leading-relaxed animate-fade-in-up stagger-1">
              Experts in waterproofing, duct sealing, structural strengthening, and specialized construction services for offshore and onshore facilities.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up stagger-2">
              <Link href="/services" className="btn btn-primary">
                Explore Services
                <ArrowRightIcon size={18} />
              </Link>
              <Link href="/contact-us" className="btn btn-outline-secondary !border-white/30 !text-white hover:!bg-white hover:!text-[#0f172a]">
                Get Free Quote
              </Link>
            </div>

            {/* Trust Indicators */}
            {/* <div className="grid grid-cols-3 gap-4 md:gap-8 mt-14 pt-8 border-t border-white/10 animate-fade-in-up stagger-3 mb-10">
              {stats.slice(0, 3).map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#07bdd4] to-[#17b457] bg-clip-text text-transparent">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-white/50 text-xs sm:text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div> */}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* ========================================
          FEATURED SERVICE - DUCT SEALING
      ======================================== */}
      {featuredService && (
        <section className="section bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#07bdd4]/5 to-transparent"></div>

          <div className="container relative">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Content */}
              <div>
                <div className="feature-badge mb-6 text-white">
                  ⭐ Featured Service
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-[#17b457] to-[#07bdd4] bg-clip-text text-transparent">
                    Duct Sealing System
                  </span>
                  <span className="block text-2xl md:text-3xl text-gray-600 mt-2 font-semibold">
                    Offshore & Onshore
                  </span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {featuredService.description}
                </p>

                {/* Benefits */}
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {featuredService.benefits.slice(0, 6).map((benefit, index) => (
                    <div key={index} className="check-item">
                      <div className="check-icon bg-gradient-to-br from-[#17b457] to-[#07bdd4]">
                        <CheckIcon size={12} className="text-white" />
                      </div>
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/services/${featuredService.slug}`}
                  className="btn btn-primary"
                >
                  Learn More About Duct Sealing
                  <ArrowRightIcon size={18} />
                </Link>
              </div>

              {/* Image/Visual */}
              <div className="relative hidden lg:block">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#17b457] to-[#07bdd4] p-1">
                  <div className="w-full h-full rounded-xl bg-white flex items-center justify-center overflow-hidden">
                    <div className="text-center p-8">
                      <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#17b457]/10 to-[#07bdd4]/10 flex items-center justify-center">
                        <svg className="w-16 h-16 text-[#07bdd4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">100% Water Tightness</h3>
                      <p className="text-gray-500">Guaranteed protection for your facilities</p>

                      <div className="flex justify-center gap-4 mt-8">
                        <div className="px-4 py-2 bg-[#17b457]/10 rounded-lg">
                          <div className="text-[#17b457] font-bold">Offshore</div>
                        </div>
                        <div className="px-4 py-2 bg-[#07bdd4]/10 rounded-lg">
                          <div className="text-[#07bdd4] font-bold">Onshore</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Cards */}
                <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-4 animate-float hidden lg:block">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-[#17b457]/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#17b457]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-gray-800">IMO Certified</div>
                      <div className="text-sm text-gray-500">International Standards</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4 animate-float hidden lg:block" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-[#07bdd4]/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#07bdd4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-gray-800">Fire Rated</div>
                      <div className="text-sm text-gray-500">Safety Guaranteed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ========================================
          SERVICES SECTION
      ======================================== */}
      <section className="section bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <div className="section-title">
            <span className="section-label">What We Offer</span>
            <h2>Our Professional Services</h2>
            <p>Comprehensive construction solutions tailored to your needs with guaranteed quality and expertise</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainServices.map((service, index) => (
              <div key={service.id} className={`animate-fade-in-up stagger-${index + 1}`}>
                <ServiceCard service={service} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn btn-outline">
              View All Services
              <ArrowRightIcon size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================
          ABOUT PREVIEW SECTION
      ======================================== */}
      <section className="section relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/home/qatar-bg.webp)' }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#0f172a]/90" />

        {/* Gradient Accents */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#17b457]/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#07bdd4]/10 to-transparent"></div>
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label">About Green Ladder</span>
              <h2 className="text-white mb-6">Qatar&apos;s Trusted Partner for Construction Excellence</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Green Ladder WLL is a specialized contracting & trading company dealing in waterproofing, structural strengthening, duct sealing, and injection/grouting services.
              </p>
              <p className="text-white/60 leading-relaxed mb-8">
                We are a result-oriented company with exceptional technical expertise, offering the right solutions and executing jobs with absolute commitment. We deliver quality products and workmanship on time.
              </p>
              <Link href="/about-us" className="btn btn-secondary">
                Learn More About Us
                <ArrowRightIcon size={18} />
              </Link>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="card card-dark text-center">
                  <div className="stat-number-light text-4xl mb-2">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          WHY CHOOSE US
      ======================================== */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <span className="section-label">Why Green Ladder</span>
            <h2>The Green Ladder Advantage</h2>
            <p>Trusted by leading companies in Qatar for our expertise, reliability, and commitment to excellence</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '👷', title: 'Expert Team', desc: '150+ skilled professionals with years of specialized experience' },
              { icon: '🏆', title: 'Quality Assured', desc: 'Premium certified materials meeting international standards' },
              { icon: '⚡', title: 'Fast Delivery', desc: 'On-time project completion without quality compromise' },
              { icon: '🛡️', title: 'Full Warranty', desc: 'Comprehensive warranties on all our services and products' },
            ].map((item, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-white border border-gray-100 hover:border-[#07bdd4]/30 hover:shadow-lg transition-all duration-300">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          BLOG PREVIEW
      ======================================== */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="section-title">
            <span className="section-label">Latest Insights</span>
            <h2>From Our Blog</h2>
            <p>Stay updated with industry news, tips, and insights from our experts</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blogs/${post.slug}`} className="block group">
                <article className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#07bdd4]/30 transition-all duration-300 h-full flex flex-col">
                  <div className="aspect-video overflow-hidden relative">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 text-xs font-medium bg-[#07bdd4]/10 text-[#07bdd4] rounded-full">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-sm">{post.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#17b457] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm line-clamp-2 flex-grow">{post.excerpt}</p>
                    <span className="inline-flex items-center gap-2 text-[#17b457] font-medium text-sm mt-4 group-hover:gap-3 transition-all">
                      Read More <ArrowRightIcon size={16} />
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/blogs" className="btn btn-outline">
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================
          CTA SECTION
      ======================================== */}
      <section className="section relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/home/start-project.webp)' }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#17b457]/90 to-[#07bdd4]/90"></div>

        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>

        <div className="container relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
            Contact us today for a free consultation and quote. Our experts are ready to help you with your construction needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact-us" className="btn btn-white">
              Get Free Quote
            </Link>
            <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="btn btn-ghost !text-white !border-white/30 border-2 hover:!bg-white/10">
              Call Us: {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
