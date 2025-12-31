import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SubHeader from '@/app/components/SubHeader';
import { ArrowRightIcon } from '@/app/components/Icons';
import { generateMetadata as genMeta } from '@/app/lib/seo';

// Gallery images
const galleryImages = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  src: `/images/gallery/gallery-${i + 1}.webp`,
  alt: `Green Ladder Qatar Project ${i + 1}`,
}));

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
        backgroundImage="/images/gallery/gallery-bg.webp"
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

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="aspect-square rounded-xl overflow-hidden group cursor-pointer relative"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-dark-bg/0 group-hover:bg-dark-bg/60 transition-colors flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                    View
                  </span>
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

