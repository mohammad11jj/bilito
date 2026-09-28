import { Link } from 'react-router';
import { Phone, MapPin, ChevronUp } from 'lucide-react';
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaTelegram,
} from 'react-icons/fa6';

const usefulLinks = [
  { label: 'درباره ما', href: '/about' },
  { label: 'تماس با ما', href: '/contact' },
  { label: 'استرداد بلیط', href: '/refund' },
  { label: 'راهنمای خرید بلیط', href: '/guide' },
  { label: 'قوانین و مقررات', href: '/terms' },
];

const socialLinks = [
  { icon: FaTwitter, href: 'https://twitter.com', label: 'توییتر' },
  { icon: FaFacebook, href: 'https://facebook.com', label: 'فیسبوک' },
  { icon: FaInstagram, href: 'https://instagram.com', label: 'اینستاگرام' },
  { icon: FaYoutube, href: 'https://youtube.com', label: 'یوتیوب' },
  { icon: FaLinkedin, href: 'https://linkedin.com', label: 'لینکدین' },
  { icon: FaTelegram, href: 'https://telegram.org', label: 'تلگرام' },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-1 border-t border-gray-2 mt-auto">
      <div className="container mx-auto px-4 py-10 lg:py-12">
        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* ===== Column 1: Logo + Contact ===== */}
          <div className="space-y-4">
            {/* Logo */}
            <Link to="/" className="inline-flex items-center gap-2">
              <div className="relative w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-5 h-5 text-white"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
                </svg>
              </div>
              <span className="text-2xl font-bold text-primary">بیلیتو</span>
            </Link>

            {/* Address */}
            <div className="flex items-start gap-2 text-sm text-gray-7">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <span className="leading-7">
                تهران، میدان آزادی، خیابان آزادی، خیابان جیحون، طوس غربی
              </span>
            </div>

            {/* Phone */}
            <a
              href="tel:0214576498"
              className="flex items-center gap-2 text-sm text-gray-7 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4 shrink-0" />
              <span>تلفن پشتیبانی: </span>
              <span dir="ltr">۰۲۱-۴۵۷۶۴۹۸</span>
            </a>
          </div>

          {/* ===== Column 2: Useful Links ===== */}
          <div>
            <h3 className="text-base font-bold text-gray-8 mb-4 text-start">
              لینک‌های مفید بیلیتو
            </h3>
            <ul className="space-y-2">
              {usefulLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-7 hover:text-primary transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ===== Column 3: App + Social ===== */}
          <div className="space-y-6">
            {/* App Download */}
            <div>
              <h3 className="text-base font-bold text-gray-8 mb-3 text-start">
                اپلیکیشن بیلیتو
              </h3>
              <p className="text-xs text-gray-6 mb-3 text-start leading-6">
                با نصب اپلیکیشن بیلیتو راحتی و سرعت در رزرو بلیط هواپیما را
                داشته باشید.
              </p>
              <div className="flex flex-wrap gap-2">
                {/* App Store */}
                <a
                  href="#"
                  className="flex items-center gap-2 bg-shade-5 text-white px-4 py-2 rounded-md hover:bg-shade-4 transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  <span className="text-sm font-medium">App Store</span>
                </a>

                {/* Play Store */}
                <a
                  href="#"
                  className="flex items-center gap-2 bg-shade-5 text-white px-4 py-2 rounded-md hover:bg-shade-4 transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.397 12l2.301-2.491zM5.864 2.658L16.802 8.99l-2.302 2.302-8.636-8.634z" />
                  </svg>
                  <span className="text-sm font-medium">Play Store</span>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-base font-bold text-gray-8 mb-3 text-start">
                ما را دنبال کنید
              </h3>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-9 h-9 flex items-center justify-center rounded-md bg-white border border-gray-2 text-gray-7 hover:bg-primary hover:text-white hover:border-primary transition-colors"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Back to Top */}
        <div className="mt-10 pt-6 border-t border-gray-2 flex justify-center">
          <button
            type="button"
            onClick={scrollToTop}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-2 text-gray-7 hover:bg-primary hover:text-white hover:border-primary transition-colors"
            aria-label="بازگشت به بالا"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}