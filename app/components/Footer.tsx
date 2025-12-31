import Link from 'next/link';
import Image from 'next/image';
import { PhoneIcon, MailIcon, MapPinIcon, FacebookIcon, InstagramIcon, LinkedInIcon, WhatsAppIcon } from './Icons';
import { siteConfig, navigation, services } from '@/app/lib/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] text-white">
      {/* Main Footer */}
      <div className="pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-20 lg:pb-20">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
            {/* Company Info */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Link href="/" className="inline-block mb-5">
                <Image
                  src="/images/logo.png"
                  alt="Green Ladder Qatar"
                  width={160}
                  height={45}
                  className="h-11 w-auto brightness-0 invert"
                />
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-5 max-w-xs">
                Qatar&apos;s leading specialized contracting company for waterproofing, duct sealing, and structural strengthening solutions.
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 hover:bg-[#17b457] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105"
                  aria-label="Facebook"
                >
                  <FacebookIcon size={18} />
                </a>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 hover:bg-[#17b457] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105"
                  aria-label="Instagram"
                >
                  <InstagramIcon size={18} />
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 hover:bg-[#07bdd4] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon size={18} />
                </a>
                <a
                  href={`https://wa.me/${siteConfig.phone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 hover:bg-green-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-base font-bold mb-4 text-white uppercase tracking-wide">Quick Links</h4>
              <ul className="space-y-2.5">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-[#07bdd4] transition-colors text-sm inline-flex items-center gap-2.5 group py-0.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-[#07bdd4] transition-colors"></span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h4 className="text-base font-bold mb-4 text-white uppercase tracking-wide">Our Services</h4>
              <ul className="space-y-2.5">
                {services.slice(0, 6).map((service) => (
                  <li key={service.id}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-gray-400 hover:text-[#17b457] transition-colors text-sm inline-flex items-center gap-2.5 group py-0.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-[#17b457] transition-colors"></span>
                      {service.shortTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-base font-bold mb-4 text-white uppercase tracking-wide">Contact Us</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                    className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group"
                  >
                    <div className="w-10 h-10 bg-white/5 group-hover:bg-[#17b457] rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                      <PhoneIcon size={17} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">Phone</p>
                      <p className="text-white font-medium">{siteConfig.phone}</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group"
                  >
                    <div className="w-10 h-10 bg-white/5 group-hover:bg-[#07bdd4] rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                      <MailIcon size={17} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">Email</p>
                      <p className="text-white font-medium text-sm">{siteConfig.email}</p>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3 text-gray-400">
                    <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPinIcon size={17} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">Address</p>
                      <p className="text-white font-medium text-sm">
                        {siteConfig.address.street}<br />
                        {siteConfig.address.city}, {siteConfig.address.country}
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} {siteConfig.legalName}. All Rights Reserved.
            </p>
            {/* <div className="flex gap-8 text-sm">
              <Link href="/privacy-policy" className="text-gray-500 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-500 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
