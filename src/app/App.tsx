import { Plane, MapPin } from 'lucide-react';
import { Card, CardHeader, CardBody, CardFooter } from '../shared/components/ui/Card';
import { Button } from '../shared/components/ui/Button';
import { Badge } from '../shared/components/ui/Badge';

function App() {
  return (
    <div className="min-h-screen bg-gray-1 p-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-primary text-start">
          تست کامپوننت Card
        </h1>

        {/* Card ساده */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-start">Card ساده</h2>
          <Card>
            <p className="text-start text-gray-7">
              این یک Card ساده با پدینگ پیش‌فرض است.
            </p>
          </Card>
        </section>

        {/* Card با بخش‌های جدا */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-start">Card با Header و Footer</h2>
          <Card padding="none">
            <CardHeader>
              <h3 className="font-bold">اطلاعات پرواز</h3>
              <Badge variant="success" size="sm">تایید شده</Badge>
            </CardHeader>
            <CardBody>
              <div className="flex items-center gap-3">
                <Plane className="w-5 h-5 text-primary" />
                <span className="text-gray-7">
                  پرواز استانبول به دبی، ساعت ۲۱:۵۰
                </span>
              </div>
            </CardBody>
            <CardFooter>
              <span className="text-primary font-bold">۳,۳۴۱,۰۴۶ تومان</span>
              <Button size="sm">جزئیات بلیط</Button>
            </CardFooter>
          </Card>
        </section>

        {/* Variants */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-start">Variantها</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Card variant="default">
              <p className="text-start text-sm">Default</p>
            </Card>
            <Card variant="outlined">
              <p className="text-start text-sm">Outlined</p>
            </Card>
            <Card variant="elevated">
              <p className="text-start text-sm">Elevated</p>
            </Card>
          </div>
        </section>

        {/* Hoverable */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-start">قابل Hover</h2>
          <Card hoverable>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-primary" />
              <div className="text-start">
                <p className="font-bold">مشهد</p>
                <p className="text-gray-5 text-sm">شروع قیمت از ۱,۵۰۰,۰۰۰ تومان</p>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}

export default App;