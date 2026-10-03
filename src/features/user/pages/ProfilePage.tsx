import { Link } from 'react-router';
import { Pencil } from 'lucide-react';
import { useAuthStore } from '../../auth/store/authStore';

export function ProfilePage() {
  const { user } = useAuthStore();

  if (!user) return null;

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg font-bold text-gray-8">اطلاعات حساب کاربری</h1>
      </div>

      <div className="bg-white rounded-lg border border-gray-2 p-6">
        <div className="flex justify-end mb-6">
          <Link
            to="/profile/edit"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-shade-1 transition-colors"
          >
            <Pencil className="w-4 h-4" />
            <span>ویرایش اطلاعات</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
          <InfoField
            label="نام و نام خانوادگی"
            value={
              `${user.firstName || ''} ${user.lastName || ''}`.trim() || '—'
            }
          />
          <InfoField
            label="جنسیت"
            value={
              user.gender === 'male'
                ? 'مرد'
                : user.gender === 'female'
                  ? 'زن'
                  : '—'
            }
          />
          <InfoField label="کد ملی" value={user.nationalId || '—'} />
          <InfoField label="شماره تماس" value={user.phone || '—'} />
        </div>
      </div>
    </div>
  );
}

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