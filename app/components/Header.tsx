'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { PhoneIcon, MailIcon } from './Icons';
import { siteConfig, navigation } from '@/app/lib/data';
import QuoteModal from './QuoteModal';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const pathname = usePathname();

  // Check if a nav link is active
  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* ========================================
          TOP BAR - Hidden on mobile, visible on tablet+
      ======================================== */}
      <div className="hidden md:block bg-[#0f172a] text-white">
        <div className="container flex items-center justify-center h-10 text-sm">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 hover:text-[#07bdd4] transition-colors"
            >
              <PhoneIcon size={14} />
              <span>{siteConfig.phone}</span>
            </a>
            <span className="w-px h-4 bg-white/30"></span>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 hover:text-[#07bdd4] transition-colors"
            >
              <MailIcon size={14} />
              <span className="hidden lg:inline">{siteConfig.email}</span>
              <span className="lg:hidden">Email Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* ========================================
          MAIN HEADER
      ======================================== */}
      <header
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-sm'
          }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <Link href="/" className="flex-shrink-0 relative z-10">
              <Image
                src="/images/logo.png"
                alt="Green Ladder Qatar"
                width={200}
                height={56}
                className="h-12 lg:h-14 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation - Hidden on mobile/tablet */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.main.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 text-[15px] font-medium rounded-lg transition-all duration-200 ${isActive(item.href)
                      ? 'text-[#17b457] bg-[#17b457]/10'
                      : 'text-gray-700 hover:text-[#17b457] hover:bg-gray-50'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">

              {/* Get a Quote Button - Hidden on small mobile */}
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-white bg-[#17b457] rounded-full hover:bg-[#139146] shadow-md hover:shadow-xl hover:shadow-[#17b457]/30 transform hover:-translate-y-0.5 transition-all duration-300 ease-out"
              >
                <span>Get a Quote</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                <div className="w-5 h-4 flex flex-col justify-between">
                  <span
                    className={`block h-0.5 bg-gray-700 rounded-full transform transition-all duration-300 origin-center ${isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
                      }`}
                  />
                  <span
                    className={`block h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 scale-0' : ''
                      }`}
                  />
                  <span
                    className={`block h-0.5 bg-gray-700 rounded-full transform transition-all duration-300 origin-center ${isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                      }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* ========================================
            MOBILE/TABLET MENU OVERLAY
        ======================================== */}
        <div
          className={`lg:hidden fixed inset-0 top-16 sm:top-26 md:top-[62px] bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* ========================================
            MOBILE/TABLET MENU PANEL
        ======================================== */}
        <div
          className={`lg:hidden fixed top-16 sm:top-26 md:top-[62px] right-0 w-full  h-[calc(100vh-4rem)] bg-white z-50 transform transition-transform duration-300 ease-out shadow-2xl ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div className="h-full flex flex-col">
            {/* Navigation Links */}
            <nav className="flex-1 overflow-y-auto py-4 px-4">
              {navigation.main.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-200 group ${isActive(item.href)
                      ? 'text-[#17b457] bg-[#17b457]/10 font-semibold'
                      : 'text-gray-700 hover:text-[#17b457] hover:bg-[#17b457]/5'
                    }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="font-medium">{item.name}</span>
                  {isActive(item.href) && (
                    <span className="w-2 h-2 rounded-full bg-[#17b457]"></span>
                  )}
                </Link>
              ))}
            </nav>

            {/* Bottom Section */}
            <div className="p-4 border-t border-gray-100 bg-gray-50/50">
              {/* CTA Button */}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsQuoteModalOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-[#17b457] to-[#1fcf66] rounded-xl hover:shadow-lg transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Get a Free Quote
              </button>

              {/* Contact Info */}
              <div className="mt-4 space-y-3">
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white hover:bg-[#17b457]/5 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#17b457]/10 flex items-center justify-center group-hover:bg-[#17b457] transition-colors">
                    <PhoneIcon size={18} className="text-[#17b457] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Call Us</div>
                    <div className="text-sm font-semibold text-gray-800">{siteConfig.phone}</div>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white hover:bg-[#07bdd4]/5 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#07bdd4]/10 flex items-center justify-center group-hover:bg-[#07bdd4] transition-colors flex-shrink-0">
                    <MailIcon size={18} className="text-[#07bdd4] group-hover:text-white transition-colors" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-gray-400">Email Us</div>
                    <div className="text-sm font-semibold text-gray-800">{siteConfig.email}</div>
                  </div>
                </a>
              </div>


            </div>
          </div>
        </div>
      </header>

      {/* Quote Modal */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </>
  );
}
