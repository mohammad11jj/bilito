import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Search } from 'lucide-react';
import { Select } from '../../../shared/components/ui/Select';
import { Button } from '../../../shared/components/ui/Button';
import { Container } from '../../../shared/components/layout/Container';
import { toast } from '../../../shared/store/toastStore';

const countries = [
  { value: 'turkey', label: 'ترکیه' },
  { value: 'uae', label: 'امارات' },
  { value: 'germany', label: 'آلمان' },
  { value: 'france', label: 'فرانسه' },
  { value: 'italy', label: 'ایتالیا' },
  { value: 'england', label: 'انگلستان' },
  { value: 'canada', label: 'کانادا' },
  { value: 'usa', label: 'آمریکا' },
];

const durations = [
  { value: '1-7', label: '۱ تا ۷ روز' },
  { value: '8-15', label: '۸ تا ۱۵ روز' },
  { value: '16-30', label: '۱۶ تا ۳۰ روز' },
  { value: '31-60', label: '۳۱ تا ۶۰ روز' },
  { value: '61-90', label: '۶۱ تا ۹۰ روز' },
];

const passengersOptions = [
  { value: '1', label: '۱ مسافر' },
  { value: '2', label: '۲ مسافر' },
  { value: '3', label: '۳ مسافر' },
  { value: '4', label: '۴ مسافر' },
  { value: '5', label: '۵ مسافر' },
];

export function InsuranceHero() {
  const navigate = useNavigate();

  const [country, setCountry] = useState<string>('');
  const [duration, setDuration] = useState<string>('');
  const [passengers, setPassengers] = useState<string>('1');

const handleSearch = () => {
  if (!country || !duration) {
    toast.warning('لطفاً کشور مقصد و مدت سفر را انتخاب کنید', 'اطلاعات ناقص');
    return;
  }
  const params = new URLSearchParams({ country, duration, passengers });
  navigate(`/insurance/results?${params.toString()}`);
};

  return (
    <section className="relative">
      {/* Background Image */}
      <div className="relative h-[300px] lg:h-[400px] overflow-hidden">
        <img
          src="/insurance-hero.png"
          alt="بیمه مسافرتی"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/30" />
      </div>

      {/* Floating Search Card */}
      <Container>
        <div className="relative -mt-20 lg:-mt-24 bg-white rounded-xl shadow-card p-6 lg:p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 items-end">
            <Select
              label="کشور مقصد"
              placeholder="انتخاب کنید"
              options={countries}
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />

            <Select
              label="مدت سفر"
              placeholder="انتخاب کنید"
              options={durations}
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />

            <Select
              label="تعداد مسافران"
              options={passengersOptions}
              value={passengers}
              onChange={(e) => setPassengers(e.target.value)}
            />

            <Button
              onClick={handleSearch}
              leftIcon={<Search className="w-5 h-5" />}
              className="h-10 px-6 w-full"
            >
              جستجو
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}