import { useState } from 'react';
import { Checkbox } from '../shared/components/ui/Checkbox';

function App() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="min-h-screen bg-gray-1 p-8">
      <div className="max-w-md mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-primary mb-6 text-start">
          تست کامپوننت Checkbox
        </h1>

        <div className="bg-white p-6 rounded-md shadow-card space-y-5">
          {/* ساده بدون label */}
          <Checkbox />

          {/* با label */}
          <Checkbox label="قوانین و مقررات را می‌پذیرم" />

          {/* کنترل‌شده */}
          <Checkbox
            label="با تاییدیه ایمیلی موافقم"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />

          {/* اجباری */}
          <Checkbox label="اطلاعات را مطالعه کرده‌ام" required />

          {/* حالت خطا */}
          <Checkbox
            label="پذیرش قوانین"
            error
            errorMessage="برای ادامه باید قوانین را بپذیرید"
          />

          {/* غیرفعال */}
          <Checkbox label="این گزینه فعلاً غیرفعال است" disabled />

          {/* غیرفعال و تیک‌خورده */}
          <Checkbox label="غیرفعال اما تیک‌خورده" disabled defaultChecked />
        </div>
      </div>
    </div>
  );
}

export default App;