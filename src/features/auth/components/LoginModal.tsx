import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Modal } from '../../../shared/components/ui/Modal';
import { PhoneStep } from './PhoneStep';
import { OtpStep } from './OtpStep';
import { useAuthStore } from '../store/authStore';
import type { AuthStep, User } from '../types';

type LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
  redirectTo?: string;
};

export function LoginModal({
  isOpen,
  onClose,
  redirectTo,
}: LoginModalProps) {
  const navigate = useNavigate();
  const { login } = useAuthStore();

  const [step, setStep] = useState<AuthStep>('phone');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // ریست state وقتی مودال بسته می‌شه
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setStep('phone');
        setPhone('');
        setIsLoading(false);
        setError('');
      }, 300);
    }
  }, [isOpen]);

  const handlePhoneSubmit = async (phoneNumber: string) => {
    setIsLoading(true);
    setError('');

    // شبیه‌سازی ارسال کد
    setTimeout(() => {
      setPhone(phoneNumber);
      setStep('otp');
      setIsLoading(false);
    }, 1000);
  };

  const handleOtpSubmit = async (code: string) => {
    setIsLoading(true);
    setError('');

    // شبیه‌سازی تایید کد
    setTimeout(() => {
      // کد صحیح (mock): 12345
      if (code === '12345') {
        const mockUser: User = {
          id: '1',
          phone,
          firstName: 'شیوا',
          lastName: 'ارغوان',
        };
        const mockToken = 'mock-jwt-token-' + Date.now();

        login(mockUser, mockToken);
        setStep('success');

        // بستن مودال و انتقال
        setTimeout(() => {
          onClose();
          if (redirectTo) {
            navigate(redirectTo);
          } else {
            navigate('/profile');
          }
        }, 800);
      } else {
        setError('کد تایید نادرست می‌باشد!');
        setIsLoading(false);
      }
    }, 1000);
  };

  const handleEditPhone = () => {
    setStep('phone');
    setPhone('');
    setError('');
  };

  const handleResend = () => {
    setError('');
    // شبیه‌سازی ارسال مجدد
    console.log('Resending code to', phone);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="sm"
      showCloseButton={false}
    >
      <div className="py-2">
        {/* Step: Phone */}
        {step === 'phone' && (
          <PhoneStep onSubmit={handlePhoneSubmit} isLoading={isLoading} />
        )}

        {/* Step: OTP */}
        {step === 'otp' && (
          <OtpStep
            phone={phone}
            onSubmit={handleOtpSubmit}
            onEditPhone={handleEditPhone}
            onResend={handleResend}
            isLoading={isLoading}
            error={error}
          />
        )}

        {/* Step: Success */}
        {step === 'success' && (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="w-16 h-16 rounded-full bg-success-light-2 flex items-center justify-center mb-4">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8 text-success"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-gray-8 mb-2">
              با موفقیت وارد شدید
            </h3>
            <p className="text-xs text-gray-6">
              در حال انتقال به پنل کاربری...
            </p>
          </div>
        )}
      </div>
    </Modal>
  );
}