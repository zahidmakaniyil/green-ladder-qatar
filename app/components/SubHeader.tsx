import Link from 'next/link';
import { HomeIcon, ChevronRightIcon } from './Icons';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface SubHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs: BreadcrumbItem[];
}

export default function SubHeader({ title, subtitle, breadcrumbs }: SubHeaderProps) {
  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#17b457]/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#07bdd4]/10 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(7, 189, 212, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(7, 189, 212, 0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container relative">
        {/* Breadcrumbs */}
        <nav className="breadcrumb mb-6" aria-label="Breadcrumb">
          <Link href="/" className="flex items-center gap-1 hover:text-[#07bdd4] transition-colors">
            <HomeIcon size={14} />
            <span>Home</span>
          </Link>
          {breadcrumbs.map((item, index) => (
            <span key={index} className="flex items-center gap-1">
              <ChevronRightIcon size={14} className="breadcrumb-separator" />
              {item.href ? (
                <Link href={item.href} className="hover:text-[#07bdd4] transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="breadcrumb-current">{item.label}</span>
              )}
            </span>
          ))}
        </nav>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-lg text-white/60 max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
