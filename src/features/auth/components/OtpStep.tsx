import { useState, useRef, useEffect } from 'react';
import { Button } from '../../../shared/components/ui/Button';
import { cn } from '../../../shared/utils/cn';

type OtpStepProps = {
  phone: string;
  onSubmit: (code: string) => void;
  onEditPhone: () => void;
  onResend?: () => void;
  isLoading?: boolean;
  error?: string;
};

const OTP_LENGTH = 5;
const RESEND_TIMEOUT = 120; // 2 دقیقه

export function OtpStep({
  phone,
  onSubmit,
  onEditPhone,
  onResend,
  isLoading = false,
  error,
}: OtpStepProps) {
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(''));
  const [countdown, setCountdown] = useState(RESEND_TIMEOUT);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // فوکوس روی اولین اینپوت
  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  // تایمر شمارش معکوس
  useEffect(() => {
    if (countdown <= 0) return;
    const timer = setInterval(() => {
      setCountdown((c) => c - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [countdown]);

  const handleChange = (index: number, value: string) => {
    // فقط یه رقم قبول کن
    const digit = value.replace(/\D/g, '').slice(-1);
    if (!digit) return;

    const newOtp = [...otp];
    newOtp[index] = digit;
    setOtp(newOtp);

    // فوکوس روی اینپوت بعدی
    if (index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    // اگه همه پر شدن، submit کن
    if (newOtp.every((d) => d !== '')) {
      onSubmit(newOtp.join(''));
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    // Backspace → پاک کردن و رفتن به قبلی
    if (e.key === 'Backspace') {
      if (otp[index]) {
        const newOtp = [...otp];
        newOtp[index] = '';
        setOtp(newOtp);
      } else if (index > 0) {
        inputRefs.current[index - 1]?.focus();
        const newOtp = [...otp];
        newOtp[index - 1] = '';
        setOtp(newOtp);
      }
    }
    // Arrow keys
    if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    if (e.key === 'ArrowRight' && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData
      .getData('text')
      .replace(/\D/g, '')
      .slice(0, OTP_LENGTH);
    const newOtp = [...otp];
    pasted.split('').forEach((d, i) => {
      newOtp[i] = d;
    });
    setOtp(newOtp);

    // فوکوس روی آخرین اینپوت پر شده
    const lastIndex = Math.min(pasted.length, OTP_LENGTH - 1);
    inputRefs.current[lastIndex]?.focus();

    if (newOtp.every((d) => d !== '')) {
      onSubmit(newOtp.join(''));
    }
  };

  const handleResend = () => {
    setCountdown(RESEND_TIMEOUT);
    setOtp(Array(OTP_LENGTH).fill(''));
    inputRefs.current[0]?.focus();
    onResend?.();
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${String(s).padStart(2, '0')}`;
  };

  const isComplete = otp.every((d) => d !== '');

  return (
    <div className="space-y-5">
      {/* Title */}
      <h2 className="text-lg font-bold text-gray-8 text-center">
        تایید شماره موبایل
      </h2>

      {/* Description */}
      <p className="text-xs text-gray-6 text-center leading-6">
        کد ۵ رقمی ارسال شده به شماره{' '}
        <span className="font-bold text-gray-8" dir="ltr">
          {phone}
        </span>{' '}
        را وارد کنید.
      </p>

      {/* Error Message */}
      {error && (
        <div className="bg-error-light-2 border border-error-light-1 rounded-md px-3 py-2">
          <p className="text-xs text-error text-center">{error}</p>
        </div>
      )}

      {/* OTP Inputs */}
      <div className="flex items-center justify-center gap-2" dir="ltr">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
            disabled={isLoading}
            className={cn(
              'w-12 h-12 text-center text-lg font-bold rounded-md border-2',
              'transition-colors duration-200',
              'focus:outline-none focus:ring-2',
              error
                ? 'border-error focus:border-error focus:ring-error/30'
                : digit
                  ? 'border-primary focus:border-primary focus:ring-primary/30'
                  : 'border-gray-3 focus:border-primary focus:ring-primary/30',
              'disabled:bg-gray-2 disabled:cursor-not-allowed',
            )}
          />
        ))}
      </div>

      {/* Resend Timer */}
      <div className="flex items-center justify-between text-xs">
        <button
          type="button"
          onClick={onEditPhone}
          className="text-primary hover:text-shade-1 transition-colors font-medium"
        >
          ویرایش شماره موبایل
        </button>

        {countdown > 0 ? (
          <span className="text-gray-6">
            {formatTime(countdown)} تا دریافت مجدد کد
          </span>
        ) : (
          <button
            type="button"
            onClick={handleResend}
            className="text-primary hover:text-shade-1 transition-colors font-medium"
          >
            دریافت مجدد کد
          </button>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="button"
        fullWidth
        disabled={!isComplete || isLoading}
        loading={isLoading}
        onClick={() => onSubmit(otp.join(''))}
        className="h-11"
      >
        ورود
      </Button>
    </div>
  );
}