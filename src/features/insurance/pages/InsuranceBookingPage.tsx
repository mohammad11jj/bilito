import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router';
import { Shield, Check, X } from 'lucide-react';
import { Container } from '../../../shared/components/layout/Container';
import { Stepper, type Step } from '../../../shared/components/ui/Stepper';
import { Button } from '../../../shared/components/ui/Button';
import { Input } from '../../../shared/components/ui/Input';
import { Select } from '../../../shared/components/ui/Select';
import { Badge } from '../../../shared/components/ui/Badge';
import { Alert } from '../../../shared/components/ui/Alert';

const steps: Step[] = [
  { id: 1, label: 'انتخاب بیمه' },
  { id: 2, label: 'مشخصات مسافران' },
  { id: 3, label: 'تایید بیمه و پرداخت' },
  { id: 4, label: 'صدور بیمه' },
];

type Passenger = {
  firstName: string;
  lastName: string;
  firstNameEn: string;
  lastNameEn: string;
  gender: string;
  birthDate: string;
  nationalId: string;
  passportNumber: string;
  mobile: string;
  email: string;
};

const emptyPassenger: Passenger = {
  firstName: '',
  lastName: '',
  firstNameEn: '',
  lastNameEn: '',
  gender: '',
  birthDate: '',
  nationalId: '',
  passportNumber: '',
  mobile: '',
  email: '',
};

export function InsuranceBookingPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(1);
  const [passengers, setPassengers] = useState<Passenger[]>([emptyPassenger]);
  const [paymentResult, setPaymentResult] = useState<'success' | 'error' | null>(null);

  // اطلاعات طرح (از query params یا mock)
  const planInfo = {
    company: 'بیمه سامان',
    planName: 'طرح اقتصادی',
    coverageLevel: '۵,۰۰۰ یورو',
    price: 3341046,
  };

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handlePayment = () => {
    // شبیه‌سازی پرداخت
    setTimeout(() => {
      setPaymentResult('success');
      setCurrentStep(4);
    }, 1000);
  };

  const updatePassenger = (
    index: number,
    field: keyof Passenger,
    value: string,
  ) => {
    const updated = [...passengers];
    updated[index] = { ...updated[index], [field]: value };
    setPassengers(updated);
  };

  const addPassenger = () => {
    setPassengers([...passengers, emptyPassenger]);
  };

  const removePassenger = (index: number) => {
    setPassengers(passengers.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-gray-1 min-h-screen">
      {/* Stepper */}
      <div className="bg-white border-b border-gray-2 py-6">
        <Container>
          <Stepper steps={steps} currentStep={currentStep} />
        </Container>
      </div>

      <Container className="py-8">
        {/* ===== Step 1: اطلاعات طرح ===== */}
        {currentStep === 1 && (
          <div className="max-w-2xl mx-auto bg-white rounded-lg border border-gray-2 p-6">
            <h2 className="text-lg font-bold text-gray-8 mb-6 text-start">
              اطلاعات طرح انتخابی
            </h2>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-md bg-tint-1 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div className="text-start">
                <p className="text-sm font-bold text-gray-8">{planInfo.company}</p>
                <p className="text-xs text-gray-5">{planInfo.planName}</p>
              </div>
            </div>

            <div className="space-y-3 mb-6 text-sm">
              <div className="flex justify-between border-b border-gray-2 pb-3">
                <span className="text-gray-7">سطح پوشش</span>
                <span className="font-bold text-gray-8">{planInfo.coverageLevel}</span>
              </div>
              <div className="flex justify-between border-b border-gray-2 pb-3">
                <span className="text-gray-7">مدت سفر</span>
                <span className="font-bold text-gray-8">۵ تا ۸ روز</span>
              </div>
              <div className="flex justify-between border-b border-gray-2 pb-3">
                <span className="text-gray-7">تعداد مسافران</span>
                <span className="font-bold text-gray-8">{passengers.length} نفر</span>
              </div>
              <div className="flex justify-between pt-3">
                <span className="font-bold text-gray-8">مجموع پرداختی</span>
                <span className="font-bold text-primary">
                  {(planInfo.price * passengers.length).toLocaleString('fa-IR')} تومان
                </span>
              </div>
            </div>

            <div className="flex gap-3">
              <Button onClick={handleNext} fullWidth>
                ادامه
              </Button>
            </div>
          </div>
        )}

        {/* ===== Step 2: مشخصات مسافران ===== */}
        {currentStep === 2 && (
          <div className="space-y-4">
            <Alert variant="info">
              اطلاعات زیر را دقیقاً مطابق با مقادیر درج شده در پاسپورت وارد
              نمایید.
            </Alert>

            {passengers.map((passenger, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-2 p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold text-gray-8">
                    مسافر {index + 1}
                  </h3>
                  {passengers.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removePassenger(index)}
                      className="text-error hover:text-error-light-1 transition-colors"
                      aria-label="حذف مسافر"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="نام (فارسی)"
                    placeholder="مثال: شیوا"
                    value={passenger.firstName}
                    onChange={(e) =>
                      updatePassenger(index, 'firstName', e.target.value)
                    }
                    required
                  />
                  <Input
                    label="نام خانوادگی (فارسی)"
                    placeholder="مثال: ارغوان"
                    value={passenger.lastName}
                    onChange={(e) =>
                      updatePassenger(index, 'lastName', e.target.value)
                    }
                    required
                  />
                  <Input
                    label="نام (لاتین)"
                    placeholder="Mrs.Shiva"
                    value={passenger.firstNameEn}
                    onChange={(e) =>
                      updatePassenger(index, 'firstNameEn', e.target.value)
                    }
                    required
                    dir="ltr"
                  />
                  <Input
                    label="نام خانوادگی (لاتین)"
                    placeholder="Arghavan"
                    value={passenger.lastNameEn}
                    onChange={(e) =>
                      updatePassenger(index, 'lastNameEn', e.target.value)
                    }
                    required
                    dir="ltr"
                  />
                  <Select
                    label="جنسیت"
                    placeholder="انتخاب کنید"
                    options={[
                      { value: 'male', label: 'مرد' },
                      { value: 'female', label: 'زن' },
                    ]}
                    value={passenger.gender}
                    onChange={(e) =>
                      updatePassenger(index, 'gender', e.target.value)
                    }
                    required
                  />
                  <Input
                    label="تاریخ تولد (میلادی)"
                    placeholder="1375/04/25"
                    value={passenger.birthDate}
                    onChange={(e) =>
                      updatePassenger(index, 'birthDate', e.target.value)
                    }
                    required
                    dir="ltr"
                  />
                  <Input
                    label="کد ملی"
                    placeholder="1234567890"
                    value={passenger.nationalId}
                    onChange={(e) =>
                      updatePassenger(index, 'nationalId', e.target.value)
                    }
                    required
                  />
                  <Input
                    label="شماره پاسپورت"
                    placeholder="12345678"
                    value={passenger.passportNumber}
                    onChange={(e) =>
                      updatePassenger(index, 'passportNumber', e.target.value)
                    }
                    required
                    dir="ltr"
                  />
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={addPassenger}
              className="w-full py-3 rounded-lg border-2 border-dashed border-gray-3 text-gray-7 hover:border-primary hover:text-primary transition-colors"
            >
              + افزودن مسافر جدید
            </button>

            <div className="flex gap-3 pt-4">
              <Button variant="outline" onClick={handleBack} className="min-w-[120px]">
                بازگشت
              </Button>
              <Button onClick={handleNext} className="flex-1">
                تایید و ادامه
              </Button>
            </div>
          </div>
        )}

        {/* ===== Step 3: تایید و پرداخت ===== */}
        {currentStep === 3 && (
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="bg-white rounded-lg border border-gray-2 p-6">
              <h3 className="text-sm font-bold text-gray-8 mb-4 text-start">
                خلاصه اطلاعات
              </h3>

              <div className="space-y-3 text-sm">
                {passengers.map((p, i) => (
                  <div key={i} className="flex justify-between border-b border-gray-2 pb-2">
                    <span className="text-gray-7">مسافر {i + 1}</span>
                    <span className="text-gray-8">
                      {p.firstName} {p.lastName}
                    </span>
                  </div>
                ))}
                <div className="flex justify-between pt-2">
                  <span className="font-bold text-gray-8">مجموع پرداختی</span>
                  <span className="font-bold text-primary text-base">
                    {(planInfo.price * passengers.length).toLocaleString('fa-IR')} تومان
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-2 p-6">
              <h3 className="text-sm font-bold text-gray-8 mb-4 text-start">
                اطلاعات تماس
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="ایمیل"
                  placeholder="example@email.com"
                  dir="ltr"
                />
                <Input label="شماره موبایل" placeholder="09123456789" />
              </div>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" onClick={handleBack} className="min-w-[120px]">
                بازگشت
              </Button>
              <Button onClick={handlePayment} className="flex-1">
                پرداخت
              </Button>
            </div>
          </div>
        )}

        {/* ===== Step 4: نتیجه ===== */}
        {currentStep === 4 && paymentResult === 'success' && (
          <div className="max-w-2xl mx-auto space-y-4">
            <Alert variant="success" title="پرداخت شما با موفقیت انجام شد">
              بیمه‌نامه شما صادر شد و به ایمیل شما ارسال گردید.
            </Alert>

            <div className="bg-white rounded-lg border border-gray-2 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-success-light-2 flex items-center justify-center">
                  <Check className="w-6 h-6 text-success" />
                </div>
                <div className="text-start">
                  <p className="text-sm font-bold text-gray-8">بیمه‌نامه صادر شد</p>
                  <p className="text-xs text-gray-5">
                    شماره سفارش: ۱۲۳۴۵۶
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => navigate('/')}
                  className="flex-1"
                >
                  بازگشت به صفحه اصلی
                </Button>
                <Button className="flex-1">دانلود بیمه‌نامه</Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}