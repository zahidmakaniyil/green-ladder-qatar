import { Metadata } from 'next';
import Link from 'next/link';
import SubHeader from '@/app/components/SubHeader';
import { ArrowRightIcon } from '@/app/components/Icons';
import { generateMetadata as genMeta } from '@/app/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'Gallery',
  description: 'View our gallery showcasing Green Ladder Qatar\'s completed projects, installations, and construction works.',
  url: '/gallery',
  keywords: ['construction gallery Qatar', 'project photos', 'waterproofing images'],
});

// Placeholder gallery categories
const galleryCategories = [
  { name: 'Duct Sealing', count: 12 },
  { name: 'Waterproofing', count: 18 },
  { name: 'Structural Works', count: 15 },
  { name: 'Flooring', count: 10 },
  { name: 'Fire Protection', count: 8 },
];

export default function GalleryPage() {
  return (
    <>
      <SubHeader
        title="Gallery"
        breadcrumbs={[{ label: 'Gallery' }]}
        subtitle="Browse through our collection of project photos showcasing our quality workmanship."
      />

      <section className="section bg-white">
        <div className="container">
          <div className="section-title">
            <span className="section-label">Our Work</span>
            <h2>Project Gallery</h2>
            <p>
              Visual showcase of our expertise in specialized contracting
              and construction services.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <button className="px-6 py-2 bg-primary text-white rounded-full font-medium text-sm">
              All
            </button>
            {galleryCategories.map((cat) => (
              <button
                key={cat.name}
                className="px-6 py-2 bg-gray-100 hover:bg-primary hover:text-white text-foreground rounded-full font-medium text-sm transition-colors"
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid - Placeholder */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl overflow-hidden group cursor-pointer"
              >
                <div className="w-full h-full flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-dark-bg/0 group-hover:bg-dark-bg/60 transition-colors flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                      View
                    </span>
                  </div>
                  <div className="w-16 h-16 bg-white/30 rounded-xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gallery Coming Soon Notice */}
          <div className="mt-12 bg-primary-50 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold mb-3">More Photos Coming Soon</h3>
            <p className="text-muted mb-6">
              We&apos;re updating our gallery with high-quality images from our recent projects.
              Contact us to see additional project photos and examples of our work.
            </p>
            <Link href="/contact-us" className="btn btn-primary">
              Request Project Photos
              <ArrowRightIcon size={18} />
            </Link>
          </div>
        </div>
      </section>


    </>
  );
}

