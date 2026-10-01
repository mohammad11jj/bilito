import { useState } from 'react';
import { useNavigate } from 'react-router';
import { AlertTriangle } from 'lucide-react';
import { Input } from '../../../shared/components/ui/Input';
import { Select } from '../../../shared/components/ui/Select';
import { Button } from '../../../shared/components/ui/Button';
import type { User } from '../types';

const mockUser: User = {
  id: '1',
  firstName: 'شیوا',
  lastName: 'ارغوان',
  phone: '۰۹۱۸ ۵۹۲ ۳۰۳۴',
  gender: 'female',
  nationalId: '۳۰۸۹۲۵۸۱۷۸۲',
};

const genderOptions = [
  { value: 'male', label: 'مرد' },
  { value: 'female', label: 'زن' },
];

export function ProfileEditPage() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState(mockUser.firstName);
  const [lastName, setLastName] = useState(mockUser.lastName);
  const [gender, setGender] = useState(mockUser.gender);
  const [nationalId, setNationalId] = useState(mockUser.nationalId);
  const [phone, setPhone] = useState(mockUser.phone);

  // شبیه‌سازی: اطلاعات ناقص است (می‌تونی بر اساس منطق خودت تغییر بدی)
  const isIncomplete = !firstName || !lastName || !gender || !nationalId || !phone;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: اتصال به API
    console.log('Saving:', { firstName, lastName, gender, nationalId, phone });
    alert('اطلاعات با موفقیت ذخیره شد!');
    navigate('/profile');
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg font-bold text-gray-8">ویرایش اطلاعات</h1>
      </div>

      {/* Incomplete Alert */}
      {isIncomplete && (
        <div className="bg-warning-light-2 border border-warning-light-1 rounded-lg p-4 mb-4 flex items-center gap-3">
          <AlertTriangle className="w-5 h-5 text-warning shrink-0" />
          <p className="text-sm text-warning">
            اطلاعات حساب کاربری شما کامل نیست.
          </p>
        </div>
      )}

      {/* Form Card */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg border border-gray-2 p-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
          <Input
            label="نام و نام خانوادگی"
            placeholder="نام خود را وارد کنید"
            value={`${firstName} ${lastName}`}
            onChange={(e) => {
              const parts = e.target.value.split(' ');
              setFirstName(parts[0] || '');
              setLastName(parts.slice(1).join(' ') || '');
            }}
            required
          />

          <Select
            label="جنسیت"
            placeholder="انتخاب کنید"
            options={genderOptions}
            value={gender}
            onChange={(e) => setGender(e.target.value as 'male' | 'female')}
            required
          />

          <Input
            label="کد ملی"
            placeholder="کد ملی خود را وارد کنید"
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
            required
          />

          <Input
            label="شماره تماس"
            placeholder="۰۹۱۲۳۴۵۶۷۸۹"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className="flex justify-start mt-6">
          <Button type="submit" className="min-w-[120px]">
            ثبت
          </Button>
        </div>
      </form>
    </div>
  );
}