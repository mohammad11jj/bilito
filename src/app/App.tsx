import { Info, Clock } from 'lucide-react';
import { Alert } from '../shared/components/ui/Alert';
import { Button } from '../shared/components/ui/Button';

function App() {
  return (
    <div className="min-h-screen bg-gray-1 p-8">
      <div className="max-w-2xl mx-auto space-y-4">
        <h1 className="text-2xl font-bold text-primary text-start">
          تست کامپوننت Alert
        </h1>

        {/* Info */}
        <Alert variant="info">
          اطلاعات زیر را دقیقاً مطابق با مقادیر درج شده در پاسپورت وارد نمایید.
        </Alert>

        {/* Success */}
        <Alert variant="success" title="پرداخت شما با موفقیت انجام شد">
          بلیط شما صادر شد و به ایمیل شما ارسال گردید. از پنل کاربری می‌توانید
          بلیط را دانلود کنید.
        </Alert>

        {/* Warning */}
        <Alert variant="warning" title="اطلاعات حساب کاربری شما کامل نیست">
          برای ادامه فرآیند خرید، لطفاً اطلاعات پروفایل خود را تکمیل کنید.
        </Alert>

        {/* Error */}
        <Alert variant="error" title="پرداخت شما ناموفق بود">
          اگر هزینه بلیط از حساب بانکی شما کسر شده، طی ۷۲ ساعت به حساب شما
          بازخواهد گشت. شماره پیگیری: ۱۲۳۴۵۶۷۸۹۱۲۳
        </Alert>

        {/* با آیکون سفارشی */}
        <Alert variant="info" icon={<Clock className="w-5 h-5" />}>
          پرواز شماره ۱۶۵ از استانبول به دبی در تاریخ ۶ شهریور ۱۴۰۲ ساعت
          ۲۱:۵۰ به مدت ۲ ساعت تاخیر دارد.
        </Alert>

        {/* با دکمه بستن */}
        <Alert variant="warning" onClose={() => alert('Alert بسته شد')}>
          این یک Alert با دکمه بستن است. روی ضربدر کلیک کنید.
        </Alert>

        {/* با Action */}
        <Alert
          variant="info"
          title="اطلاعات حساب کاربری"
          action={
            <Button size="sm" variant="outline">
              تکمیل اطلاعات
            </Button>
          }
        >
          اطلاعات پروفایل شما ناقص است. لطفاً آن را تکمیل کنید.
        </Alert>

        {/* بدون آیکون */}
        <Alert variant="success" showIcon={false}>
          این Alert بدون آیکون است.
        </Alert>

        {/* نمونه واقعی از پروژه - پیام تاخیر پرواز */}
        <div className="bg-tint-1 p-4 rounded-md">
          <Alert
            variant="info"
            className="bg-white/60"
            onClose={() => alert('بسته شد')}
          >
            پرواز شماره ۱۶۵ از استانبول به دبی در تاریخ ۶ شهریور ۱۴۰۲ در ساعت
            ۲۱:۵۰ به مدت ۲ ساعت تاخیر دارد.
          </Alert>
        </div>
      </div>
    </div>
  );
}

export default App;