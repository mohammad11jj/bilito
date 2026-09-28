import { Mail, Lock, Search } from 'lucide-react';
import { Input } from '../shared/components/ui/Input';

function App() {
  return (
    <div className="min-h-screen bg-gray-1 p-8">
      <div className="max-w-md mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-primary mb-6 text-start">
          تست کامپوننت Input
        </h1>

        <div className="bg-white p-6 rounded-md shadow-card space-y-5">
          {/* ساده */}
          <Input placeholder="نام خود را وارد کنید" />

          {/* با Label */}
          <Input label="نام و نام خانوادگی" placeholder="مثال: محمد احمدی" />

          {/* اجباری */}
          <Input
            label="شماره موبایل"
            placeholder="09123456789"
            required
          />

          {/* با Helper Text */}
          <Input
            label="ایمیل"
            placeholder="example@email.com"
            helperText="ایمیل خود را برای دریافت بلیط وارد کنید"
          />

          {/* با آیکون چپ */}
          <Input
            label="جستجو"
            placeholder="مقصد خود را وارد کنید"
            leftIcon={<Search className="w-4 h-4" />}
          />

          {/* با آیکون راست */}
          <Input
            label="ایمیل"
            type="email"
            placeholder="example@email.com"
            rightIcon={<Mail className="w-4 h-4" />}
          />

          {/* حالت خطا */}
          <Input
            label="رمز عبور"
            type="password"
            placeholder="رمز عبور"
            leftIcon={<Lock className="w-4 h-4" />}
            error
            errorMessage="رمز عبور باید حداقل ۸ کاراکتر باشد"
          />

          {/* غیرفعال */}
          <Input
            label="کد ملی"
            value="1234567890"
            disabled
          />
        </div>
      </div>
    </div>
  );
}

export default App;