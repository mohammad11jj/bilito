import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { AlertTriangle } from 'lucide-react';
import { Input } from '../../../shared/components/ui/Input';
import { Select } from '../../../shared/components/ui/Select';
import { Button } from '../../../shared/components/ui/Button';
import { useAuthStore } from '../../auth/store/authStore';

const genderOptions = [
  { value: 'male', label: 'مرد' },
  { value: 'female', label: 'زن' },
];

export function ProfileEditPage() {
  const navigate = useNavigate();
  const { user, updateUser } = useAuthStore();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [nationalId, setNationalId] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName || '');
      setLastName(user.lastName || '');
      setGender(user.gender || '');
      setNationalId(user.nationalId || '');
      setPhone(user.phone || '');
    }
  }, [user]);

  const isIncomplete =
    !firstName || !lastName || !phone || !gender || !nationalId;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    updateUser({
      firstName,
      lastName,
      gender: gender as 'male' | 'female',
      nationalId,
      phone,
    });

    alert('اطلاعات با موفقیت ذخیره شد!');
    navigate('/profile');
  };

  if (!user) return null;

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg font-bold text-gray-8">ویرایش اطلاعات</h1>
      </div>

      {isIncomplete && (
        <div className="bg-warning-light-2 border border-warning-light-1 rounded-lg p-4 mb-4 flex items-center gap-3">
          <AlertTriangle className="w-5 h-5 text-warning shrink-0" />
          <p className="text-sm text-warning">
            اطلاعات حساب کاربری شما کامل نیست.
          </p>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg border border-gray-2 p-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
          <Input
            label="نام"
            placeholder="نام خود را وارد کنید"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />

          <Input
            label="نام خانوادگی"
            placeholder="نام خانوادگی خود را وارد کنید"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />

          <Select
            label="جنسیت"
            placeholder="انتخاب کنید"
            options={genderOptions}
            value={gender}
            onChange={(e) => setGender(e.target.value)}
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