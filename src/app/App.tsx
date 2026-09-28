import { useState } from 'react';
import { Plane, FileText, CreditCard, Shield } from 'lucide-react';
import { Tabs, type Tab } from '../shared/components/ui/Tabs';

const tabs: Tab[] = [
  {
    id: 'info',
    label: 'اطلاعات پرواز',
    icon: <Plane className="w-4 h-4" />,
    content: (
      <div className="space-y-3 text-start">
        <p className="font-bold">پرواز استانبول به دبی</p>
        <p className="text-sm text-gray-7">
          ساعت حرکت: ۰۲:۵۰ | ساعت رسیدن: ۲۱:۵۰ | مدت: ۱۹ ساعت
        </p>
        <p className="text-sm text-gray-7">شماره پرواز: ۱۶۵ | کلاس: اکونومی</p>
      </div>
    ),
  },
  {
    id: 'refund',
    label: 'قوانین استرداد',
    icon: <FileText className="w-4 h-4" />,
    content: (
      <div className="space-y-3 text-start">
        <p className="font-bold">قوانین استرداد</p>
        <ul className="text-sm text-gray-7 space-y-2 list-disc pr-5">
          <li>۷۰٪ جریمه از ساعت ۱۱:۰۰ صبح ۸ روز قبل از پرواز</li>
          <li>۵۵٪ جریمه از زمان صدور بلیط تا ساعت ۱۱:۰۰ صبح ۸ روز قبل</li>
          <li>۸۰٪ جریمه از ساعت ۱۱:۰۰ صبح ۳ روز قبل از پرواز</li>
          <li>۱۰۰٪ جریمه از ساعت ۱۱:۰۰ صبح ۲ روز قبل از پرواز به بعد</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'payment',
    label: 'پرداخت',
    icon: <CreditCard className="w-4 h-4" />,
    content: (
      <div className="space-y-3 text-start">
        <p className="font-bold">اطلاعات پرداخت</p>
        <p className="text-sm text-gray-7">
          مبلغ کل: ۳۳,۴۱۰,۴۶۲ تومان
        </p>
        <p className="text-sm text-gray-7">
          قابل پرداخت از طریق کیف پول یا درگاه بانکی
        </p>
      </div>
    ),
  },
  {
    id: 'insurance',
    label: 'بیمه سامان',
    icon: <Shield className="w-4 h-4" />,
    content: (
      <div className="space-y-3 text-start">
        <p className="font-bold">بیمه مسافرتی</p>
        <p className="text-sm text-gray-7">
          طرح اقتصادی با پوشش کرونا، سطح پوشش ۱۰,۰۰۰ یورو
        </p>
      </div>
    ),
  },
  {
    id: 'disabled',
    label: 'غیرفعال',
    content: <p>این تب غیرفعاله</p>,
    disabled: true,
  },
];

function App() {
  const [activeTab, setActiveTab] = useState('info');

  return (
    <div className="min-h-screen bg-gray-1 p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-2xl font-bold text-primary text-start">
          تست کامپوننت Tabs
        </h1>

        {/* Line Variant */}
        <div className="bg-white p-6 rounded-md shadow-card">
          <h2 className="text-lg font-bold mb-4 text-start">
            حالت Line (خط زیر تب فعال)
          </h2>
          <Tabs tabs={tabs} variant="line" defaultTab="info" />
        </div>

        {/* Pill Variant */}
        <div className="bg-white p-6 rounded-md shadow-card">
          <h2 className="text-lg font-bold mb-4 text-start">
            حالت Pill (پس‌زمینه برای تب فعال)
          </h2>
          <Tabs tabs={tabs} variant="pill" defaultTab="info" />
        </div>

        {/* Controlled */}
        <div className="bg-white p-6 rounded-md shadow-card">
          <h2 className="text-lg font-bold mb-4 text-start">
            حالت کنترل‌شده
          </h2>
          <p className="text-sm text-gray-5 mb-3 text-start">
            تب فعال: <span className="font-bold text-primary">{activeTab}</span>
          </p>
          <Tabs
            tabs={tabs}
            variant="line"
            activeTab={activeTab}
            onChange={setActiveTab}
          />
        </div>
      </div>
    </div>
  );
}

export default App;