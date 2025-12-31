'use client';

import Link from 'next/link';
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
  const IconComponent = getServiceIcon(service.icon);

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block w-full overflow-hidden"
    >
      <div className="p-4 sm:p-5 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#07bdd4]/30 transition-all duration-300">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#07bdd4]/10 to-[#17b457]/10 rounded-xl flex items-center justify-center flex-shrink-0 text-[#07bdd4] group-hover:from-[#17b457] group-hover:to-[#07bdd4] group-hover:text-white transition-all">
            {IconComponent && <IconComponent size={20} className="sm:w-6 sm:h-6" />}
          </div>
          <div className="flex-1 min-w-0 overflow-hidden">
            <h4 className="font-bold text-gray-800 group-hover:text-[#17b457] transition-colors truncate text-sm sm:text-base">
              {service.shortTitle}
            </h4>
            <p className="text-gray-500 text-xs sm:text-sm truncate">
              {service.shortDescription}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = getServiceIcon(service.icon);

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block h-full"
    >
      <div className="h-full p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#07bdd4]/30 transition-all duration-300 hover:-translate-y-1">
        {/* Icon */}
        <div className="service-icon mb-4">
          {IconComponent && <IconComponent size={24} />}
        </div>

        {/* Featured Badge */}
        {service.featured && (
          <span className="inline-block px-2.5 py-1 text-xs font-semibold bg-gradient-to-r from-[#17b457] to-[#07bdd4] text-white rounded-full mb-3">
            Featured
          </span>
        )}

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#17b457] transition-colors">
          {service.shortTitle}
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
          {service.shortDescription}
        </p>

        {/* Learn More */}
        <div className="mt-4 flex items-center gap-2 text-[#07bdd4] font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
          Learn More
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
