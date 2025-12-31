import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SubHeader from '@/app/components/SubHeader';
import { ArrowRightIcon, ShieldCheckIcon } from '@/app/components/Icons';
import { blogPosts, siteConfig } from '@/app/lib/data';
import { generateMetadata as genMeta, getArticleSchema, getBreadcrumbSchema } from '@/app/lib/seo';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) return {};

  return genMeta({
    title: post.title,
    description: post.excerpt,
    url: `/blogs/${post.slug}`,
    type: 'article',
    publishedTime: post.date,
    author: post.author,
    keywords: [post.category, 'construction blog', 'Qatar construction'],
  });
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter(p => p.slug !== slug).slice(0, 2);

  // Schema data
  const articleSchema = getArticleSchema({
    title: post.title,
    description: post.excerpt,
    slug: post.slug,
    date: post.date,
    author: post.author,
    image: post.image,
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blogs' },
    { name: post.title, url: `/blogs/${post.slug}` },
  ]);

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <SubHeader
        title={post.title}
        breadcrumbs={[
          { label: 'Blog', href: '/blogs' },
          { label: post.title }
        ]}
      />

      <article className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Post Meta */}
            <div className="flex items-center gap-4 mb-8 flex-wrap">
              <span className="inline-block bg-primary-50 text-primary px-4 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
              <span className="text-muted text-sm">{post.date}</span>
              <span className="text-muted text-sm">By {post.author}</span>
            </div>

            {/* Featured Image */}
            <div className="h-64 md:h-96 rounded-2xl mb-8 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Post Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted mb-6 leading-relaxed">
                {post.excerpt}
              </p>

              <p className="text-muted mb-6">
                {post.content}
              </p>

              <p className="text-muted mb-6">
                At Green Ladder Qatar, we are committed to providing the highest quality solutions
                for all your construction and waterproofing needs. Our team of experts brings years
                of experience and cutting-edge technology to every project we undertake.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">
                Why Choose Professional Services?
              </h3>

              <p className="text-muted mb-6">
                Professional contracting services ensure that your project is completed to the
                highest standards, using quality materials and proven techniques. This not only
                guarantees the longevity of your investment but also ensures compliance with
                safety regulations and industry standards.
              </p>

              <p className="text-muted mb-6">
                Whether you&apos;re dealing with waterproofing challenges, structural repairs, or
                specialized sealing requirements, our team is equipped to deliver solutions
                that exceed expectations.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">
                Contact Us Today
              </h3>

              <p className="text-muted mb-6">
                Ready to discuss your project? Contact Green Ladder Qatar today for a free
                consultation and quote. Our experts are standing by to help you find the
                perfect solution for your needs.
              </p>
            </div>

            {/* Share & CTA */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="bg-primary-50 rounded-2xl p-6 text-center">
                <h3 className="text-lg font-bold mb-2">Need Help With Your Project?</h3>
                <p className="text-muted mb-4">
                  Contact us today for expert advice and a free quote.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/contact-us" className="btn btn-primary">
                    Get a Free Quote
                  </Link>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                    className="btn btn-outline"
                  >
                    Call {siteConfig.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="section-title">
            <span className="section-label">Keep Reading</span>
            <h2>Related Articles</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {relatedPosts.map((relPost) => (
              <Link
                key={relPost.id}
                href={`/blogs/${relPost.slug}`}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group border border-border"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={relPost.image}
                    alt={relPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs text-primary font-medium uppercase tracking-wider">
                    {relPost.category}
                  </span>
                  <h3 className="text-lg font-bold mt-2 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {relPost.title}
                  </h3>
                  <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                    Read More <ArrowRightIcon size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/blogs" className="btn btn-outline">
              View All Articles
              <ArrowRightIcon size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}


