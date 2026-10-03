import { useState } from 'react';
import { Shield } from 'lucide-react';
import { Input } from '../../../shared/components/ui/Input';
import { Button } from '../../../shared/components/ui/Button';
import { cn } from '../../../shared/utils/cn';

type PhoneStepProps = {
  onSubmit: (phone: string) => void;
  isLoading?: boolean;
};

export function PhoneStep({ onSubmit, isLoading = false }: PhoneStepProps) {
  const [phone, setPhone] = useState('');
  const [agreed, setAgreed] = useState(false);

  const isValidPhone = /^09\d{9}$/.test(phone);
  const canSubmit = isValidPhone && agreed && !isLoading;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (canSubmit) onSubmit(phone);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Logo */}
      <div className="flex justify-center mb-2">
        <div className="flex items-center gap-2">
          <div className="relative w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-5 h-5 text-white"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
            </svg>
          </div>
          <span className="text-2xl font-bold text-primary">بیلیتو</span>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-lg font-bold text-gray-8 text-center">
        ورود یا ثبت‌نام
      </h2>

      {/* Description */}
      <p className="text-xs text-gray-6 text-center leading-6">
        کد تایید به شماره موبایلی که وارد می‌کنید، ارسال خواهد شد.
      </p>

      {/* Phone Input */}
      <Input
        placeholder="شماره موبایل"
        value={phone}
        onChange={(e) => {
          // فقط عدد قبول کن
          const value = e.target.value.replace(/\D/g, '').slice(0, 11);
          setPhone(value);
        }}
        dir="ltr"
        inputMode="numeric"
        autoFocus
      />

      {/* Agreement Checkbox */}
      <label className="flex items-start gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className={cn(
            'w-4 h-4 mt-0.5 rounded border-2 border-gray-3',
            'accent-primary cursor-pointer',
          )}
        />
        <span className="text-xs text-gray-7 leading-6">
          با ورود و ثبت‌نام در سایت، با{' '}
          <a href="#" className="text-primary hover:underline">
            قوانین بیلیتو
          </a>{' '}
          موافقت می‌کنم.
        </span>
      </label>

      {/* Submit */}
      <Button
        type="submit"
        fullWidth
        disabled={!canSubmit}
        loading={isLoading}
        className="h-11"
      >
        تایید و ادامه
      </Button>
    </form>
  );
}