import { Metadata } from 'next';
import Link from 'next/link';
import SubHeader from '@/app/components/SubHeader';
import { ArrowRightIcon } from '@/app/components/Icons';
import { blogPosts } from '@/app/lib/data';
import { generateMetadata as genMeta } from '@/app/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'Blog',
  description: 'Read the latest news, tips, and insights about construction, waterproofing, and duct sealing from Green Ladder Qatar experts.',
  url: '/blogs',
  keywords: ['construction blog Qatar', 'waterproofing tips', 'duct sealing guide'],
});

export default function BlogsPage() {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <>
      <SubHeader
        title="Our Blog"
        breadcrumbs={[{ label: 'Blog' }]}
        subtitle="Latest news, insights, and expert tips from our industry professionals."
      />

      <section className="section bg-white">
        <div className="container">
          {/* Featured Post */}
          <div className="mb-12">
            <Link
              href={`/blogs/${featuredPost.slug}`}
              className="grid md:grid-cols-2 gap-0 bg-white rounded-2xl overflow-hidden shadow-lg group border border-border"
            >
              <div className="h-64 md:h-full min-h-[280px] md:min-h-[320px] overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-8 flex flex-col justify-center bg-primary-50">
                <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-xs font-bold mb-4 w-fit">
                  Featured
                </span>
                <span className="text-sm text-primary font-medium uppercase tracking-wider mb-2">
                  {featuredPost.category}
                </span>
                <h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-muted mb-4">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted">{featuredPost.date}</span>
                  <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                    Read More <ArrowRightIcon size={16} />
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Blog Grid */}
          <div className="section-title">
            <span className="section-label">Latest Articles</span>
            <h2>From Our Blog</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blogs/${post.slug}`}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group border border-border"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs text-primary font-medium uppercase tracking-wider">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-bold mt-2 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted">{post.date}</span>
                    <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                      Read <ArrowRightIcon size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* More Articles Coming Soon */}
          <div className="mt-12 bg-gray-50 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold mb-3">More Articles Coming Soon</h3>
            <p className="text-muted mb-6">
              Stay tuned for more expert insights, industry news, and helpful tips
              from our team of construction professionals.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

