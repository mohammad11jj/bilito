import { Plane, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { Badge } from '../shared/components/ui/Badge';

function App() {
  return (
    <div className="min-h-screen bg-gray-1 p-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-primary text-start">
          تست کامپوننت Badge
        </h1>

        {/* Variants */}
        <section className="bg-white p-6 rounded-md shadow-card">
          <h2 className="text-lg font-bold mb-4 text-start">Variantها</h2>
          <div className="flex flex-wrap gap-3">
            <Badge variant="default">پیش‌فرض</Badge>
            <Badge variant="primary">اکونومی</Badge>
            <Badge variant="success">تایید شده</Badge>
            <Badge variant="warning">در انتظار</Badge>
            <Badge variant="error">تایید نشده</Badge>
            <Badge variant="info">اطلاعات</Badge>
          </div>
        </section>

        {/* Sizes */}
        <section className="bg-white p-6 rounded-md shadow-card">
          <h2 className="text-lg font-bold mb-4 text-start">اندازه‌ها</h2>
          <div className="flex flex-wrap items-center gap-3">
            <Badge size="sm" variant="primary">کوچیک</Badge>
            <Badge size="md" variant="primary">متوسط</Badge>
          </div>
        </section>

        {/* Pill */}
        <section className="bg-white p-6 rounded-md shadow-card">
          <h2 className="text-lg font-bold mb-4 text-start">حالت Pill</h2>
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="primary" pill>اکونومی</Badge>
            <Badge variant="error" pill>غیر قابل استرداد</Badge>
            <Badge variant="success" pill>تایید شده</Badge>
          </div>
        </section>

        {/* With Icon */}
        <section className="bg-white p-6 rounded-md shadow-card">
          <h2 className="text-lg font-bold mb-4 text-start">با آیکون</h2>
          <div className="flex flex-wrap gap-3">
            <Badge variant="primary" icon={<Plane className="w-3.5 h-3.5" />}>
              پرواز مستقیم
            </Badge>
            <Badge
              variant="success"
              icon={<CheckCircle className="w-3.5 h-3.5" />}
            >
              تایید شده
            </Badge>
            <Badge
              variant="error"
              icon={<XCircle className="w-3.5 h-3.5" />}
            >
              لغو شده
            </Badge>
            <Badge
              variant="warning"
              icon={<AlertCircle className="w-3.5 h-3.5" />}
            >
              در انتظار تایید
            </Badge>
          </div>
        </section>

        {/* نمونه واقعی از پروژه */}
        <section className="bg-white p-6 rounded-md shadow-card">
          <h2 className="text-lg font-bold mb-4 text-start">
            نمونه واقعی از پروژه
          </h2>
          <div className="border border-gray-3 rounded-md p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="font-bold">پرواز استانبول به دبی</span>
              <Badge variant="error" size="sm">5 صندلی باقی مانده</Badge>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              <Badge variant="primary" size="sm">اکونومی</Badge>
              <Badge variant="info" size="sm">سیستمتی</Badge>
              <Badge variant="error" size="sm">غیر قابل استرداد</Badge>
              <Badge variant="success" size="sm">تایید شده</Badge>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;