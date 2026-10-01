import { useNavigate } from 'react-router';
import { Modal } from '../../../shared/components/ui/Modal';
import { Tabs, type Tab } from '../../../shared/components/ui/Tabs';
import { Button } from '../../../shared/components/ui/Button';
import type { InsurancePlan } from '../types';

type InsuranceInfoModalProps = {
  isOpen: boolean;
  onClose: () => void;
  plan: InsurancePlan | null;
  onContinue?: (id: string) => void;
};

export function InsuranceInfoModal({
  isOpen,
  onClose,
  plan,
  onContinue,
}: InsuranceInfoModalProps) {
  const navigate = useNavigate();

  if (!plan) return null;

  const handleContinue = () => {
    onContinue?.(plan.id);
    onClose();
    navigate('/insurance/booking');
  };

  const tabs: Tab[] = [
    {
      id: 'info',
      label: 'اطلاعات بیمه',
      content: (
        <div className="space-y-4 text-sm text-gray-7 leading-7">
          <div className="flex items-center justify-between border-b border-gray-2 pb-3">
            <span>بیمه‌نامه</span>
            <span className="font-bold text-gray-8">{plan.planName}</span>
          </div>
          <div className="flex items-center justify-between border-b border-gray-2 pb-3">
            <span>شرکت بیمه</span>
            <span className="font-bold text-gray-8">{plan.company.name}</span>
          </div>
          <div className="flex items-center justify-between border-b border-gray-2 pb-3">
            <span>سطح پوشش</span>
            <span className="font-bold text-gray-8">{plan.coverageLevel}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>قیمت</span>
            <span className="font-bold text-primary">
              {plan.price.toLocaleString('fa-IR')} تومان
            </span>
          </div>
        </div>
      ),
    },
    {
      id: 'coverage',
      label: 'پوشش خدمات',
      content: (
        <div className="space-y-3 text-sm text-gray-7 leading-7">
          <p className="font-bold text-gray-8 mb-3">
            پوشش‌های این بیمه‌نامه:
          </p>
          <ul className="list-disc pr-5 space-y-2">
            {plan.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      id: 'rules',
      label: 'قوانین استرداد',
      content: (
        <div className="space-y-4 text-sm text-gray-7 leading-7">
          <p>
            در صورت عدم استفاده تا ۶ ماه بعد از صدور با شرایط زیر:
          </p>
          <h4 className="font-bold text-gray-8">بازگشت کامل وجه</h4>
          <ul className="list-disc pr-5 space-y-2">
            <li>در صورت پشیمان شدن از انجام سفر</li>
            <li>در صورت عدم اقدام برای دریافت ویزا</li>
            <li>در صورت ریجکت شدن ویزا</li>
          </ul>
          <h4 className="font-bold text-gray-8 pt-2">۱۰۰٪ جریمه</h4>
          <p>پس از گذشت ۶ ماه از زمان صدور</p>
        </div>
      ),
    },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="اطلاعات بیمه"
      size="lg"
      footer={
        <div className="flex items-center justify-between w-full gap-4">
          <div className="text-start">
            <span className="text-xs text-gray-5 block">
              مجموع پرداختی شما
            </span>
            <span className="text-base font-bold text-primary">
              {plan.price.toLocaleString('fa-IR')} تومان
            </span>
          </div>
          <Button onClick={handleContinue} className="min-w-[120px]">
            ادامه
          </Button>
        </div>
      }
    >
      <Tabs tabs={tabs} variant="line" defaultTab="info" />
    </Modal>
  );
}