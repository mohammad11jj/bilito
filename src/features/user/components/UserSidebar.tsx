import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import {
  User as UserIcon,
  Plane,
  Ticket,
  Wallet,
  LogOut,
  Camera,
} from 'lucide-react';
import { ConfirmDialog } from '../../../shared/components/ui/ConfirmDialog';
import { cn } from '../../../shared/utils/cn';
import { useAuthStore } from '../../auth/store/authStore';

const menuItems = [
  {
    label: 'اطلاعات حساب کاربری',
    href: '/profile',
    icon: UserIcon,
    end: true,
  },
  { label: 'سفرهای من', href: '/trips', icon: Plane },
  { label: 'تیکت‌های من', href: '/tickets', icon: Ticket },
  { label: 'کیف پول', href: '/wallet', icon: Wallet },
];

type UserSidebarProps = {
  className?: string;
};

export function UserSidebar({ className }: UserSidebarProps) {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();
  const [imageError, setImageError] = useState(false);
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);

  const handleLogoutConfirm = () => {
    logout();
    setIsLogoutDialogOpen(false);
    navigate('/');
  };

  if (!user) {
    navigate('/');
    return null;
  }

  const showImage = user.avatar && !imageError;

  return (
    <>
      <aside
        className={cn(
          'bg-white rounded-lg border border-gray-2 p-5',
          'lg:sticky lg:top-20',
          className,
        )}
      >
        <div className="flex flex-col items-center gap-3 pb-5 border-b border-gray-2">
          <div className="relative">
            <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-2 flex items-center justify-center">
              {showImage ? (
                <img
                  src={user.avatar}
                  alt={`${user.firstName} ${user.lastName}`}
                  className="w-full h-full object-cover"
                  onError={() => setImageError(true)}
                />
              ) : (
                <UserIcon className="w-10 h-10 text-gray-5" />
              )}
            </div>
            <button
              type="button"
              className={cn(
                'absolute bottom-0 left-0',
                'w-7 h-7 rounded-full',
                'bg-primary text-white',
                'flex items-center justify-center',
                'border-2 border-white',
                'hover:bg-shade-1 transition-colors',
              )}
              aria-label="تغییر تصویر پروفایل"
            >
              <Camera className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="text-center">
            <p className="text-sm font-bold text-gray-8">
              {user.firstName} {user.lastName}
            </p>
            <p className="text-xs text-gray-5 mt-1" dir="ltr">
              {user.phone}
            </p>
          </div>
        </div>

        <nav className="py-4 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.href}
                to={item.href}
                end={item.end}
                className={({ isActive }) =>
                  cn(
                    'flex items-center gap-3 px-3 py-2.5 rounded-md',
                    'text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-tint-1 text-primary'
                      : 'text-gray-7 hover:bg-gray-1',
                  )
                }
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        <div className="pt-4 border-t border-gray-2">
          <button
            type="button"
            onClick={() => setIsLogoutDialogOpen(true)}
            className={cn(
              'w-full flex items-center gap-3 px-3 py-2.5 rounded-md',
              'text-sm font-medium text-error',
              'hover:bg-error-light-2 transition-colors',
            )}
          >
            <LogOut className="w-4 h-4 shrink-0" />
            <span>خروج از حساب کاربری</span>
          </button>
        </div>
      </aside>

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