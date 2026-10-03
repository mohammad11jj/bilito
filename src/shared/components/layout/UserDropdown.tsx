import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router';
import {
  User,
  ChevronDown,
  Plane,
  Wallet,
  Ticket,
  LogOut,
} from 'lucide-react';
import { ConfirmDialog } from '../ui/ConfirmDialog';
import { useAuthStore } from '../../../features/auth/store/authStore';
import { cn } from '../../utils/cn';

const menuItems = [
  { label: 'اطلاعات حساب کاربری', href: '/profile', icon: User },
  { label: 'سفرهای من', href: '/trips', icon: Plane },
  { label: 'تیکت‌های من', href: '/tickets', icon: Ticket },
  { label: 'کیف پول', href: '/wallet', icon: Wallet },
];

export function UserDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () =>
        document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen]);

  const handleLogoutConfirm = () => {
    logout();
    setIsOpen(false);
    setIsLogoutDialogOpen(false);
    navigate('/');
  };

  if (!user) return null;

  return (
    <>
      <div className="relative" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
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
          <ChevronDown
            className={cn(
              'w-3.5 h-3.5 transition-transform duration-200',
              isOpen && 'rotate-180',
            )}
          />
        </button>

        {isOpen && (
          <div
            className={cn(
              'absolute top-full left-0 mt-2 z-50',
              'w-56 bg-white rounded-md border border-gray-2',
              'shadow-drop-4 py-2',
            )}
          >
            <div className="px-4 py-3 border-b border-gray-2">
              <p className="text-sm font-bold text-gray-8 text-start">
                {user.firstName} {user.lastName}
              </p>
              <p className="text-xs text-gray-5 mt-1 text-start" dir="ltr">
                {user.phone}
              </p>
            </div>

            <div className="py-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'flex items-center gap-3 px-4 py-2.5',
                      'text-sm text-gray-7',
                      'hover:bg-gray-1 hover:text-primary',
                      'transition-colors',
                    )}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>

            <div className="pt-2 border-t border-gray-2">
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  setIsLogoutDialogOpen(true);
                }}
                className={cn(
                  'w-full flex items-center gap-3 px-4 py-2.5',
                  'text-sm text-error',
                  'hover:bg-error-light-2',
                  'transition-colors',
                )}
              >
                <LogOut className="w-4 h-4 shrink-0" />
                <span>خروج از حساب کاربری</span>
              </button>
            </div>
          </div>
        )}
      </div>

      <ConfirmDialog
        isOpen={isLogoutDialogOpen}
        onClose={() => setIsLogoutDialogOpen(false)}
        onConfirm={handleLogoutConfirm}
        title="خروج از حساب کاربری"
        message="آیا از خروج از حساب کاربری مطمئن هستید؟"
        confirmText="خروج"
        cancelText="انصراف"
        variant="danger"
      />
    </>
  );
}