import { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router';
import {
  Menu,
  Phone,
  User,
  ChevronDown,
  Info,
  MessageSquare,
  BookOpen,
  Moon,
  Sun,
} from 'lucide-react';
import { Button } from '../ui/Button';
import { Container } from './Container';
import { MobileMenu } from './MobileMenu';
import { LoginModal } from '../../../features/auth/components/LoginModal';
import { useAuthStore } from '../../../features/auth/store/authStore';
import { useThemeStore } from '../../store/themeStore';
import { cn } from '../../utils/cn';

const mainNavItems = [
  { label: 'صفحه اصلی', href: '/' },
  { label: 'بیمه مسافرتی', href: '/insurance' },
  { label: 'سفرهای من', href: '/trips' },
];

const moreNavItems = [
  { label: 'درباره ما', href: '/about', icon: Info },
  { label: 'تماس با ما', href: '/contact', icon: MessageSquare },
  { label: 'راهنمای خرید بلیط', href: '/guide', icon: BookOpen },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const moreRef = useRef<HTMLDivElement>(null);
  const { isLoggedIn, user } = useAuthStore();
  const { theme, toggleTheme } = useThemeStore();

  // بستن dropdown با کلیک بیرون
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setIsMoreOpen(false);
      }
    };
    if (isMoreOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () =>
        document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isMoreOpen]);

  // بستن با Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMoreOpen(false);
    };
    if (isMoreOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isMoreOpen]);

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

              {/* سایر موارد - Dropdown */}
              <div className="relative" ref={moreRef}>
                <button
                  type="button"
                  onClick={() => setIsMoreOpen((v) => !v)}
                  className={cn(
                    'flex items-center gap-1 text-sm font-medium transition-colors py-5',
                    isMoreOpen
                      ? 'text-primary'
                      : 'text-gray-7 hover:text-primary',
                  )}
                  aria-expanded={isMoreOpen}
                  aria-haspopup="menu"
                >
                  سایر موارد
                  <ChevronDown
                    className={cn(
                      'w-4 h-4 transition-transform duration-200',
                      isMoreOpen && 'rotate-180',
                    )}
                  />
                </button>

                {isMoreOpen && (
                  <div
                    className={cn(
                      'absolute top-full right-0 mt-1 z-50',
                      'w-56 bg-white rounded-md border border-gray-2',
                      'shadow-drop-4 py-2',
                    )}
                    role="menu"
                  >
                    {moreNavItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <NavLink
                          key={item.href}
                          to={item.href}
                          onClick={() => setIsMoreOpen(false)}
                          className={({ isActive }) =>
                            cn(
                              'flex items-center gap-3 px-4 py-2.5',
                              'text-sm transition-colors',
                              isActive
                                ? 'bg-tint-1 text-primary'
                                : 'text-gray-7 hover:bg-gray-1 hover:text-primary',
                            )
                          }
                          role="menuitem"
                        >
                          <Icon className="w-4 h-4 shrink-0" />
                          <span>{item.label}</span>
                        </NavLink>
                      );
                    })}
                  </div>
                )}
              </div>
            </nav>

            {/* Left: Support + Theme Toggle + Profile/Login */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <a
                href="tel:0214045"
                className="flex items-center gap-2 text-sm text-gray-7 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span dir="ltr">۰۲۱-۴۰۴۵</span>
              </a>

              {/* Theme Toggle */}
              <button
                type="button"
                onClick={toggleTheme}
                className={cn(
                  'w-9 h-9 rounded-md flex items-center justify-center',
                  'text-gray-7 hover:bg-gray-1 transition-colors',
                  'focus:outline-none focus:ring-2 focus:ring-primary/40',
                )}
                aria-label={theme === 'dark' ? 'حالت روشن' : 'حالت شب'}
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>

              {isLoggedIn && user ? (
                <Link to="/profile">
                  <button
                    type="button"
                    className={cn(
                      'flex items-center gap-2 px-3 py-2 rounded-md',
                      'bg-tint-1 text-primary border border-tint-3',
                      'text-sm font-medium',
                      'hover:bg-tint-2 transition-colors',
                      'focus:outline-none focus:ring-2 focus:ring-primary/40',
                    )}
                  >
                    <User className="w-4 h-4" />
                    <span>{user.firstName || 'کاربر'}</span>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                </Link>
              ) : (
                <Button
                  leftIcon={<User className="w-4 h-4" />}
                  variant="primary"
                  size="sm"
                  onClick={() => setIsLoginModalOpen(true)}
                >
                  ورود/ثبت نام
                </Button>
              )}
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

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onLoginClick={() => {
          setIsMobileMenuOpen(false);
          setIsLoginModalOpen(true);
        }}
      />

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </>
  );
}