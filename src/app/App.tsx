import { useState } from 'react';
import { Select } from '../shared/components/ui/Select';

const genderOptions = [
  { value: 'male', label: 'مرد' },
  { value: 'female', label: 'زن' },
];

const classOptions = [
  { value: 'economy', label: 'اکونومی' },
  { value: 'business', label: 'بیزینس' },
  { value: 'first', label: 'فرست کلاس' },
];

const cityOptions = [
  { value: 'tehran', label: 'تهران' },
  { value: 'mashhad', label: 'مشهد' },
  { value: 'shiraz', label: 'شیراز' },
  { value: 'isfahan', label: 'اصفهان', disabled: true },
];

function App() {
  const [gender, setGender] = useState('');
  const [classType, setClassType] = useState('economy');

  return (
    <div className="min-h-screen bg-gray-1 p-8">
      <div className="max-w-md mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-primary text-start">
          تست کامپوننت Select
        </h1>

        <div className="bg-white p-6 rounded-md shadow-card space-y-5">
          {/* ساده با placeholder */}
          <Select
            placeholder="انتخاب کنید"
            options={cityOptions}
          />

          {/* با Label */}
          <Select
            label="جنسیت"
            placeholder="جنسیت خود را انتخاب کنید"
            options={genderOptions}
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />

          {/* اجباری */}
          <Select
            label="کلاس پرواز"
            placeholder="کلاس را انتخاب کنید"
            options={classOptions}
            required
          />

          {/* با Helper Text */}
          <Select
            label="مقصد"
            placeholder="مقصد خود را انتخاب کنید"
            options={cityOptions}
            helperText="برای جستجوی سریع‌تر، مقصد را انتخاب کنید"
          />

          {/* حالت خطا */}
          <Select
            label="شهر مبدا"
            placeholder="شهر مبدا را انتخاب کنید"
            options={cityOptions}
            error
            errorMessage="لطفاً شهر مبدا را انتخاب کنید"
          />

          {/* غیرفعال */}
          <Select
            label="کشور"
            options={[{ value: 'iran', label: 'ایران' }]}
            disabled
          />

          {/* مقدار پیش‌فرض */}
          <Select
            label="کلاس انتخابی"
            options={classOptions}
            value={classType}
            onChange={(e) => setClassType(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;