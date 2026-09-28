import { useState } from 'react';
import { Radio } from '../shared/components/ui/Radio';

function App() {
  const [gender, setGender] = useState('male');
  const [classType, setClassType] = useState('economy');

  return (
    <div className="min-h-screen bg-gray-1 p-8">
      <div className="max-w-md mx-auto space-y-8">
        <h1 className="text-2xl font-bold text-primary text-start">
          تست کامپوننت Radio
        </h1>

        <div className="bg-white p-6 rounded-md shadow-card space-y-6">
          {/* گروه جنسیت */}
          <div className="space-y-3">
            <p className="text-sm font-medium text-gray-7 text-start">جنسیت:</p>
            <div className="flex gap-6">
              <Radio
                name="gender"
                value="male"
                label="مرد"
                checked={gender === 'male'}
                onChange={(e) => setGender(e.target.value)}
              />
              <Radio
                name="gender"
                value="female"
                label="زن"
                checked={gender === 'female'}
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
          </div>

          {/* گروه کلاس پرواز */}
          <div className="space-y-3">
            <p className="text-sm font-medium text-gray-7 text-start">
              کلاس پرواز:
            </p>
            <div className="flex flex-col gap-3">
              <Radio
                name="class"
                value="economy"
                label="اکونومی"
                checked={classType === 'economy'}
                onChange={(e) => setClassType(e.target.value)}
              />
              <Radio
                name="class"
                value="business"
                label="بیزینس"
                checked={classType === 'business'}
                onChange={(e) => setClassType(e.target.value)}
              />
              <Radio
                name="class"
                value="first"
                label="فرست کلاس"
                checked={classType === 'first'}
                onChange={(e) => setClassType(e.target.value)}
              />
            </div>
          </div>

          {/* حالت غیرفعال */}
          <div className="space-y-3">
            <p className="text-sm font-medium text-gray-7 text-start">
              حالت غیرفعال:
            </p>
            <Radio name="disabled-demo" label="گزینه غیرفعال" disabled />
            <Radio
              name="disabled-demo"
              label="گزینه غیرفعال (انتخاب‌شده)"
              disabled
              defaultChecked
            />
          </div>

          {/* حالت خطا */}
          <div className="space-y-3">
            <p className="text-sm font-medium text-gray-7 text-start">
              حالت خطا:
            </p>
            <Radio
              name="error-demo"
              label="این گزینه الزامی است"
              error
              errorMessage="لطفاً یکی از گزینه‌ها را انتخاب کنید"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;