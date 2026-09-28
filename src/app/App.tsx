import { Plane, Search, Trash2, Plus } from 'lucide-react';
import { Button } from '../shared/components/ui/Button';

function App() {
  return (
    <div className="min-h-screen bg-gray-1 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-primary mb-6">
          تست کامپوننت Button
        </h1>

        {/* Variants */}
        <section className="bg-white p-6 rounded-md shadow-card">
          <h2 className="text-xl font-bold mb-4">Variantها</h2>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary">دکمه اصلی</Button>
            <Button variant="secondary">دکمه ثانویه</Button>
            <Button variant="outline">دکمه با حاشیه</Button>
            <Button variant="ghost">دکمه شبح</Button>
            <Button variant="danger">حذف</Button>
          </div>
        </section>

        {/* Sizes */}
        <section className="bg-white p-6 rounded-md shadow-card">
          <h2 className="text-xl font-bold mb-4">اندازه‌ها</h2>
          <div className="flex flex-wrap items-center gap-3">
            <Button size="sm">کوچیک</Button>
            <Button size="md">متوسط</Button>
            <Button size="lg">بزرگ</Button>
          </div>
        </section>

        {/* Icons */}
        <section className="bg-white p-6 rounded-md shadow-card">
          <h2 className="text-xl font-bold mb-4">آیکون‌ها</h2>
          <div className="flex flex-wrap gap-3">
            <Button leftIcon={<Plane className="w-4 h-4" />}>
              پرواز
            </Button>
            <Button variant="outline" rightIcon={<Search className="w-4 h-4" />}>
              جستجو
            </Button>
            <Button variant="danger" leftIcon={<Trash2 className="w-4 h-4" />}>
              حذف
            </Button>
            <Button variant="secondary" leftIcon={<Plus className="w-4 h-4" />}>
              افزودن
            </Button>
          </div>
        </section>

        {/* States */}
        <section className="bg-white p-6 rounded-md shadow-card">
          <h2 className="text-xl font-bold mb-4">حالت‌ها</h2>
          <div className="flex flex-wrap gap-3">
            <Button loading>در حال بارگذاری</Button>
            <Button disabled>غیرفعال</Button>
            <Button variant="outline" loading>
              Loading outline
            </Button>
          </div>
        </section>

        {/* Full Width */}
        <section className="bg-white p-6 rounded-md shadow-card">
          <h2 className="text-xl font-bold mb-4">عرض کامل</h2>
          <Button fullWidth size="lg" leftIcon={<Search className="w-5 h-5" />}>
            جستجوی پرواز
          </Button>
        </section>
      </div>
    </div>
  );
}

export default App;