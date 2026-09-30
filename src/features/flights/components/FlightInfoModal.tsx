import { Plane, Luggage, Clock } from 'lucide-react';
import { Modal } from '../../../shared/components/ui/Modal';
import { Tabs, type Tab } from '../../../shared/components/ui/Tabs';
import { Button } from '../../../shared/components/ui/Button';
import { cn } from '../../../shared/utils/cn';
import type { FlightCardData } from './FlightCard';

type FlightInfoModalProps = {
  isOpen: boolean;
  onClose: () => void;
  flight: FlightCardData | null;
  onContinue?: (id: string) => void;
  className?: string;
};

export function FlightInfoModal({
  isOpen,
  onClose,
  flight,
  onContinue,
  className,
}: FlightInfoModalProps) {
  if (!flight) return null;

  const tabs: Tab[] = [
    {
      id: 'info',
      label: 'اطلاعات پرواز',
      content: <FlightInfoTab flight={flight} />,
    },
    {
      id: 'refund',
      label: 'قوانین استرداد',
      content: <RefundRulesTab />,
    },
    {
      id: 'visa',
      label: 'قوانین ویزا و مسیر',
      content: <VisaRulesTab />,
    },
    {
      id: 'baggage',
      label: 'بار مجاز',
      content: <BaggageRulesTab />,
    },
  ];

  const totalPrice = flight.price;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="اطلاعات پرواز"
      size="lg"
      className={className}
      footer={
        <div className="flex items-center justify-between w-full gap-4">
          <div className="text-start">
            <span className="text-xs text-gray-5 block">مجموع پرداختی شما</span>
            <span className="text-base font-bold text-primary">
              {totalPrice.toLocaleString('fa-IR')} تومان
            </span>
          </div>
          <Button
            onClick={() => onContinue?.(flight.id)}
            className="min-w-[120px]"
          >
            ادامه
          </Button>
        </div>
      }
    >
      <Tabs tabs={tabs} variant="line" defaultTab="info" />
    </Modal>
  );
}

// ===== Tab 1: اطلاعات پرواز =====
function FlightInfoTab({ flight }: { flight: FlightCardData }) {
  return (
    <div className="space-y-6">
      {/* Airline */}
      <div className="flex items-center gap-2">
        {flight.airline.logo ? (
          <img
            src={flight.airline.logo}
            alt={flight.airline.name}
            className="w-8 h-8 object-contain"
          />
        ) : (
          <div className="w-8 h-8 rounded-md bg-tint-1 flex items-center justify-center">
            <Plane className="w-4 h-4 text-primary" />
          </div>
        )}
        <span className="text-sm font-medium text-gray-8">
          {flight.airline.name}
        </span>
      </div>

      {/* Flight Route */}
      <div className="flex items-center gap-4 bg-gray-1 rounded-lg p-4">
        {/* Departure */}
        <div className="flex flex-col items-center gap-1 shrink-0">
          <span className="text-xl font-bold text-gray-8" dir="ltr">
            {flight.departure.time}
          </span>
          <span className="text-xs text-gray-5 whitespace-nowrap">
            {flight.departure.airport} ({flight.departure.code})
          </span>
        </div>

        {/* Middle */}
        <div className="flex-1 flex flex-col items-center gap-1 min-w-[100px]">
          <div className="flex items-center gap-1.5 text-xs text-gray-5">
            <Clock className="w-3 h-3" />
            <span>{flight.duration}</span>
          </div>
          <div className="relative w-full flex items-center">
            <div className="flex-1 border-t border-dashed border-gray-3" />
            <Plane className="w-4 h-4 text-primary mx-1.5 shrink-0 -rotate-90" />
            <div className="flex-1 border-t border-dashed border-gray-3" />
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-5">
            <Luggage className="w-3 h-3" />
            <span>{flight.baggage}</span>
          </div>
        </div>

        {/* Arrival */}
        <div className="flex flex-col items-center gap-1 shrink-0">
          <span className="text-xl font-bold text-gray-8" dir="ltr">
            {flight.arrival.time}
          </span>
          <span className="text-xs text-gray-5 whitespace-nowrap">
            {flight.arrival.airport} ({flight.arrival.code})
          </span>
        </div>
      </div>

      {/* Price per Adult / Child */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white border border-gray-2 rounded-md p-3">
          <p className="text-xs text-gray-5 mb-1">قیمت برای هر بزرگسال</p>
          <p className="text-sm font-bold text-primary">
            {flight.price.toLocaleString('fa-IR')} تومان
          </p>
        </div>
        <div className="bg-white border border-gray-2 rounded-md p-3">
          <p className="text-xs text-gray-5 mb-1">قیمت برای هر کودک</p>
          <p className="text-sm font-bold text-primary">
            {flight.price.toLocaleString('fa-IR')} تومان
          </p>
        </div>
      </div>
    </div>
  );
}

// ===== Tab 2: قوانین استرداد =====
function RefundRulesTab() {
  return (
    <div className="space-y-4 text-sm text-gray-7 leading-7">
      <h4 className="font-bold text-gray-8">قوانین استرداد</h4>
      <ul className="list-disc pr-5 space-y-2">
        <li>۷۰ درصد جریمه از ساعت ۱۱:۰۰ صبح ۸ روز قبل از پرواز تا ساعت ۱۱:۰۰ صبح ۳ روز قبل از پرواز.</li>
        <li>۵۵ درصد جریمه از زمان صدور بلیط تا ساعت ۱۱:۰۰ صبح ۸ روز قبل از پرواز.</li>
        <li>۸۰ درصد جریمه از ساعت ۱۱:۰۰ صبح ۳ روز قبل از پرواز تا ساعت ۱۱:۰۰ صبح ۲ روز قبل از پرواز.</li>
        <li>۱۰۰ درصد جریمه از ساعت ۱۱:۰۰ صبح ۲ روز قبل از پرواز به بعد.</li>
      </ul>

      <h4 className="font-bold text-gray-8 pt-2">قوانین تغییرات بلیط</h4>
      <ul className="list-disc pr-5 space-y-2">
        <li>تا ۲۴ ساعت مانده به پرواز به مسافران جهت تغییر رزرو جریمه‌ای تعلق نمی‌گیرد.</li>
        <li>هزینه تغییر کلاس نرخی دریافت می‌شود از ۲۴ ساعت مانده به پرواز به بعد، به‌ازای هر مسافر در هر مسیر پروازی، جریمه تغییر رزرو معادل ۱,۳۰۰,۰۰۰ تومان ایران (به‌اضافه هزینه تغییر کلاس نرخی) می‌باشد.</li>
      </ul>
    </div>
  );
}

// ===== Tab 3: قوانین ویزا و مسیر =====
function VisaRulesTab() {
  return (
    <div className="space-y-4 text-sm text-gray-7 leading-7">
      <h4 className="font-bold text-gray-8">قوانین عمومی سفر</h4>
      <p>
        ساعت الزامی حضور: از ۴ ساعت قبل پرواز حضور الزامی است و ۱ ساعت قبل
        پرواز سیستم‌های پذیرش مسافر بسته خواهند شد.
      </p>
      <p>
        مسافران سیستمتی بیزینس کلاس: مسافر که کلاس پروازی بیزینسی را انتخاب
        کرده‌اند می‌توانند به‌طور رایگان از سالن فرودگاه امام جهت پروازهای
        خروجی استفاده کنند.
      </p>
    </div>
  );
}

// ===== Tab 4: بار مجاز =====
function BaggageRulesTab() {
  return (
    <div className="space-y-4 text-sm text-gray-7 leading-7">
      <h4 className="font-bold text-gray-8">قوانین بار</h4>
      <ul className="list-disc pr-5 space-y-2">
        <li>حداکثر تعداد بسته: به ازای هر مسافر برابر ۲ بسته می‌باشد.</li>
        <li>میزان بار دستی مجاز: ۵ کیلوگرم.</li>
        <li>میزان بار مجاز برای بزرگسال و کودک: ۳۰ کیلوگرم.</li>
        <li>میزان بار مجاز برای نوزاد: ۱۰ کیلوگرم.</li>
      </ul>

      <h4 className="font-bold text-gray-8 pt-2">قوانین تغییرات بار</h4>
      <p>هزینه بار اضافی در فرودگاه شهر مبدا برابر ۲۰۰,۰۰۰ تومان ایران می‌باشد.</p>
    </div>
  );
}