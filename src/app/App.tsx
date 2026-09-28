import { SearchX, Inbox, Ticket, Wallet } from 'lucide-react';
import { EmptyState } from '../shared/components/ui/EmptyState';
import { Button } from '../shared/components/ui/Button';

function App() {
  return (
    <div className="min-h-screen bg-gray-1 p-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-primary text-start">
          تست کامپوننت EmptyState
        </h1>

        {/* اندازه متوسط - نتایج جستجو */}
        <div className="bg-white rounded-md shadow-card">
          <EmptyState
            icon={<SearchX className="w-full h-full" />}
            title="در این تاریخ پروازی یافت نشد"
            description="برای پیدا کردن مسیر درست، می‌توانید در تاریخ دیگر جستجو کنید."
            action={
              <Button variant="outline">جستجو در تاریخ دیگر</Button>
            }
          />
        </div>

        {/* اندازه کوچیک - تیکت‌های من */}
        <div className="bg-white p-6 rounded-md shadow-card">
          <EmptyState
            size="sm"
            icon={<Ticket className="w-full h-full" />}
            title="شما هیچ تیکتی دریافت نکردید"
            action={
              <Button size="sm" variant="ghost">
                برو به صفحه اصلی
              </Button>
            }
          />
        </div>

        {/* اندازه بزرگ - کیف پول */}
        <div className="bg-white p-6 rounded-md shadow-card">
          <EmptyState
            size="lg"
            icon={<Wallet className="w-full h-full" />}
            title="کیف پول شما خالی است"
            description="برای استفاده از کیف پول، ابتدا باید آن را شارژ کنید."
            action={
              <Button leftIcon={<Wallet className="w-4 h-4" />}>
                شارژ کیف پول
              </Button>
            }
          />
        </div>

        {/* بدون توضیح و بدون دکمه */}
        <div className="bg-white p-6 rounded-md shadow-card">
          <EmptyState
            icon={<Inbox className="w-full h-full" />}
            title="پیامی وجود ندارد"
          />
        </div>
      </div>
    </div>
  );
}

export default App;