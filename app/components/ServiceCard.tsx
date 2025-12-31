'use client';

import Link from 'next/link';
import Image from 'next/image';
import { getServiceIcon } from './Icons';
import type { Service } from '@/app/lib/data';

interface ServiceCardProps {
  service: Service;
}

interface ServiceIconProps {
  icon: string;
  size?: number;
  className?: string;
}

// ServiceIcon component for rendering service icons
export function ServiceIcon({ icon, size = 24, className = '' }: ServiceIconProps) {
  const IconComponent = getServiceIcon(icon);
  if (!IconComponent) return null;
  return <IconComponent size={size} className={className} />;
}

// Small service card for related services
export function ServiceCardSmall({ service }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block w-full overflow-hidden"
    >
      <div className="rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#07bdd4]/30 transition-all duration-300 overflow-hidden">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 relative overflow-hidden">
            <Image
              src={`/images/services/${service.slug}.webp`}
              alt={service.shortTitle}
              fill
              sizes="96px"
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="flex-1 min-w-0 overflow-hidden pr-4">
            <h4 className="font-bold text-gray-800 group-hover:text-[#17b457] transition-colors truncate text-sm sm:text-base">
              {service.shortTitle}
            </h4>
            <p className="text-gray-500 text-xs sm:text-sm line-clamp-2">
              {service.shortDescription}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block h-full"
    >
      <div className="h-full rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#07bdd4]/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
        {/* Image */}
        <div className="relative h-52 sm:h-56 overflow-hidden">
          <Image
            src={`/images/services/${service.slug}.webp`}
            alt={service.shortTitle}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {/* Featured Badge */}
          {service.featured && (
            <span className="absolute top-3 left-3 px-2.5 py-1 text-xs font-semibold bg-gradient-to-r from-[#17b457] to-[#07bdd4] text-white rounded-full">
              Featured
            </span>
          )}
        </div>

        <div className="p-5">
          {/* Title */}
          <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#17b457] transition-colors">
            {service.shortTitle}
          </h3>

          {/* Description */}
          <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
            {service.shortDescription}
          </p>

          {/* Read More */}
          <div className="mt-4 flex items-center gap-2 text-[#07bdd4] font-medium text-sm">
            Read More
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
