import { Link } from 'react-router';
import { Pencil } from 'lucide-react';
import { cn } from '../../../shared/utils/cn';
import type { User } from '../types';

const mockUser: User = {
  id: '1',
  firstName: 'شیوا',
  lastName: 'ارغوان',
  phone: '۰۹۱۸ ۵۹۲ ۳۰۳۴',
  gender: 'female',
  nationalId: '۳۰۸۹۲۵۸۱۷۸۲',
};

export function ProfilePage() {
  const user = mockUser;

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg font-bold text-gray-8">اطلاعات حساب کاربری</h1>
      </div>

      {/* Info Card */}
      <div className="bg-white rounded-lg border border-gray-2 p-6">
        {/* Edit Link */}
        <div className="flex justify-end mb-6">
          <Link
            to="/profile/edit"
            className={cn(
              'inline-flex items-center gap-2',
              'text-sm font-medium text-primary',
              'hover:text-shade-1 transition-colors',
            )}
          >
            <Pencil className="w-4 h-4" />
            <span>ویرایش اطلاعات</span>
          </Link>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
          <InfoField label="نام و نام خانوادگی" value={`${user.firstName} ${user.lastName}`} />
          <InfoField
            label="جنسیت"
            value={user.gender === 'female' ? 'زن' : 'مرد'}
          />
          <InfoField label="کد ملی" value={user.nationalId} />
          <InfoField label="شماره تماس" value={user.phone} />
        </div>
      </div>
    </div>
  );
}

// ===== Info Field =====
type InfoFieldProps = {
  label: string;
  value: string;
};

function InfoField({ label, value }: InfoFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-xs text-gray-5">{label}</span>
      <span className="text-sm font-medium text-gray-8">{value}</span>
    </div>
  );
}