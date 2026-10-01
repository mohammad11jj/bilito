import { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { Menu, Phone, User, ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';
import { Container } from './Container';
import { MobileMenu } from './MobileMenu';
import { cn } from '../../utils/cn';

const mainNavItems = [
  { label: 'صفحه اصلی', href: '/' },
  { label: 'بیمه مسافرتی', href: '/insurance' },
  { label: 'سفرهای من', href: '/trips' },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b border-gray-2">
        <Container>
          <div className="flex items-center justify-between h-16 gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 shrink-0">
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

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 flex-1 justify-center">
              {mainNavItems.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      'text-sm font-medium transition-colors relative py-5',
                      isActive
                        ? 'text-primary'
                        : 'text-gray-7 hover:text-primary',
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}

              <button className="flex items-center gap-1 text-sm font-medium text-gray-7 hover:text-primary transition-colors py-5">
                سایر موارد
                <ChevronDown className="w-4 h-4" />
              </button>
            </nav>

            {/* Left: Support + Profile */}
            <div className="hidden lg:flex items-center gap-4 shrink-0">
              <a
                href="tel:0214045"
                className="flex items-center gap-2 text-sm text-gray-7 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span dir="ltr">۰۲۱-۴۰۴۵</span>
              </a>

              {/* Profile Button (شبیه‌سازی لاگین) */}
              <Link to="/profile">
                <Button
                  leftIcon={<User className="w-4 h-4" />}
                  variant="primary"
                  size="sm"
                >
                  ورود/ثبت نام
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-gray-7 hover:bg-gray-1 rounded-md transition-colors"
              aria-label="باز کردن منو"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}