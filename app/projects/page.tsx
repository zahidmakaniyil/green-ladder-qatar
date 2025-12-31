import { Metadata } from 'next';
import Link from 'next/link';
import SubHeader from '@/app/components/SubHeader';
import { ArrowRightIcon } from '@/app/components/Icons';
import { projects, siteConfig } from '@/app/lib/data';
import { generateMetadata as genMeta } from '@/app/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'Our Projects',
  description: 'Explore Green Ladder Qatar\'s portfolio of completed projects including duct sealing, waterproofing, and structural strengthening works.',
  url: '/projects',
  keywords: ['construction projects Qatar', 'waterproofing projects', 'duct sealing projects'],
});

export default function ProjectsPage() {
  return (
    <>
      <SubHeader 
        title="Our Projects"
        breadcrumbs={[{ label: 'Projects' }]}
        subtitle="Explore our portfolio of successfully completed projects across Qatar and the region."
      />

      <section className="section bg-white">
        <div className="container">
          <div className="section-title">
            <span className="section-label">Our Work</span>
            <h2>Featured Projects</h2>
            <p>
              A showcase of our expertise and commitment to excellence 
              in specialized contracting services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="group relative bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl overflow-hidden h-80"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-dark-bg/40 to-transparent z-10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <span className="text-4xl font-bold text-white">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <span className="inline-block bg-accent text-dark-bg px-3 py-1 rounded-full text-xs font-bold mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/70 text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* More Projects Coming Soon */}
          <div className="mt-12 bg-gray-50 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold mb-3">More Projects Coming Soon</h3>
            <p className="text-muted mb-6">
              We&apos;re currently updating our portfolio with our latest projects. 
              Contact us to learn more about our work and see additional examples.
            </p>
            <Link href="/contact-us" className="btn btn-primary">
              Request Project Examples
              <ArrowRightIcon size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section section-dark">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="stat-number">500+</div>
              <p className="text-white/70">Projects Completed</p>
            </div>
            <div>
              <div className="stat-number">200+</div>
              <p className="text-white/70">Happy Clients</p>
            </div>
            <div>
              <div className="stat-number">15+</div>
              <p className="text-white/70">Years Experience</p>
            </div>
            <div>
              <div className="stat-number">150+</div>
              <p className="text-white/70">Team Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-white">
        <div className="container text-center">
          <h2 className="mb-4">Ready to Start Your Project?</h2>
          <p className="text-muted mb-8 max-w-2xl mx-auto">
            Let us help you bring your project to life. Contact us today for a 
            free consultation and discover how we can meet your construction needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us" className="btn btn-primary">
              Get a Free Quote
              <ArrowRightIcon size={18} />
            </Link>
            <a 
              href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
              className="btn btn-outline"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

