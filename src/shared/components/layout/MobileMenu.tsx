import { useEffect } from 'react';
import { Link, NavLink } from 'react-router';
import {
  X,
  Home,
  Shield,
  Plane,
  Phone,
  User,
  Info,
  Ticket,
  Wallet,
} from 'lucide-react';
import { Button } from '../ui/Button';
import { useAuthStore } from '../../../features/auth/store/authStore';
import { cn } from '../../utils/cn';

const mobileNavItems = [
  { label: 'صفحه اصلی', href: '/', icon: Home },
  { label: 'بیمه مسافرتی', href: '/insurance', icon: Shield },
  { label: 'سفرهای من', href: '/trips', icon: Plane },
  { label: 'تیکت‌های من', href: '/tickets', icon: Ticket },
  { label: 'کیف پول', href: '/wallet', icon: Wallet },
  { label: 'تماس با ما', href: '/contact', icon: Phone },
  { label: 'درباره ما', href: '/about', icon: Info },
];

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  onLoginClick?: () => void;
};

export function MobileMenu({
  isOpen,
  onClose,
  onLoginClick,
}: MobileMenuProps) {
  const { isLoggedIn, user } = useAuthStore();

  useEffect(() => {
    if (isOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  const handleLoginButtonClick = () => {
    onClose();
    onLoginClick?.();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 bg-black/50 z-50 lg:hidden transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none',
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={cn(
          'fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white z-50 lg:hidden',
          'flex flex-col shadow-xl',
          'transition-transform duration-300',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
        aria-hidden={!isOpen}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-2 shrink-0">
          <Link to="/" onClick={onClose} className="flex items-center gap-2">
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

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-md text-gray-7 hover:bg-gray-2 transition-colors"
            aria-label="بستن منو"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-2">
          {mobileNavItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={onClose}
                className={({ isActive }) =>
                  cn(
                    'flex items-center gap-3 px-4 py-3 rounded-md',
                    'text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-tint-1 text-primary'
                      : 'text-gray-7 hover:bg-gray-1',
                  )
                }
              >
                <Icon className="w-5 h-5 shrink-0" />
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        {/* Footer: Support + Login */}
        <div className="p-4 border-t border-gray-2 space-y-3 shrink-0">
          <a
            href="tel:0214045"
            className="flex items-center gap-2 text-sm text-gray-7 hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span dir="ltr">۰۲۱-۴۰۴۵</span>
          </a>

          {isLoggedIn && user ? (
            <Link to="/profile" onClick={onClose} className="block">
              <Button
                leftIcon={<User className="w-4 h-4" />}
                variant="secondary"
                fullWidth
              >
                {user.firstName || 'پنل کاربری'}
              </Button>
            </Link>
          ) : (
            <Button
              leftIcon={<User className="w-4 h-4" />}
              fullWidth
              onClick={handleLoginButtonClick}
            >
              ورود / ثبت‌نام
            </Button>
          )}
        </div>
      </aside>
    </>
  );
}