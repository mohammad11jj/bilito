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
  if (!plan) return null;

  const tabs: Tab[] = [
    {
      id: 'info',
      label: 'اطلاعات بیمه',
      content: (
        <div className="space-y-4 text-sm text-gray-7 leading-7">
          <p>
            بیمه‌نامه {plan.company.name} - {plan.planName}
          </p>
          <p>سقف پوشش: {plan.coverageLevel}</p>
          <p>قیمت: {plan.price.toLocaleString('fa-IR')} تومان</p>
        </div>
      ),
    },
    {
      id: 'coverage',
      label: 'پوشش خدمات',
      content: (
        <ul className="list-disc pr-5 space-y-2 text-sm text-gray-7 leading-7">
          {plan.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      ),
    },
    {
      id: 'rules',
      label: 'قوانین استرداد',
      content: (
        <p className="text-sm text-gray-7 leading-7">
          قوانین استرداد بیمه‌نامه بر اساس شرایط شرکت بیمه صادرکننده می‌باشد.
        </p>
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
            <span className="text-xs text-gray-5 block">مجموع پرداختی شما</span>
            <span className="text-base font-bold text-primary">
              {plan.price.toLocaleString('fa-IR')} تومان
            </span>
          </div>
          <Button onClick={() => onContinue?.(plan.id)} className="min-w-[120px]">
            ادامه
          </Button>
        </div>
      }
    >
      <Tabs tabs={tabs} variant="line" defaultTab="info" />
    </Modal>
  );
}