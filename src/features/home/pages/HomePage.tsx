import { useState } from 'react';
import { useNavigate } from 'react-router';
import { HeroSection } from '../components/HeroSection';
import { SearchHistory } from '../components/SearchHistory';
import { PopularDestinations } from '../components/PopularDestinations';
import { TopDomesticFlights } from '../components/TopDomesticFlights';
import { FAQSection } from '../components/FAQSection';
import { FeaturesSection } from '../components/FeaturesSection';
import { toast } from '../../../shared/store/toastStore';

const initialHistory = [
  { id: '1', origin: 'تهران', destination: 'استانبول' },
  { id: '2', origin: 'تهران', destination: 'دبی' },
  { id: '3', origin: 'تهران', destination: 'شیراز' },
  { id: '4', origin: 'تهران', destination: 'مشهد' },
  { id: '5', origin: 'تهران', destination: 'کیش' },
  { id: '6', origin: 'تهران', destination: 'اصفهان' },
];

export function HomePage() {
  const navigate = useNavigate();
  const [history, setHistory] = useState(initialHistory);

  const handleRemove = (id: string) => {
    setHistory((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearAll = () => {
    setHistory([]);
    toast.success('تاریخچه جستجو پاک شد', 'موفقیت');
  };

  const handleHistorySelect = (item: {
    id: string;
    origin: string;
    destination: string;
  }) => {
    const params = new URLSearchParams({
      origin: item.origin,
      destination: item.destination,
    });
    toast.info(`در حال جستجوی ${item.origin} به ${item.destination}`, 'جستجو');
    navigate(`/flights/search?${params.toString()}`);
  };

  const handleDestinationClick = (id: string) => {
    toast.info(`در حال انتقال به پروازهای ${id}`, 'اطلاع');
    // بعداً: navigate به SearchResultsPage با فیلتر
  };

  return (
    <div>
      <HeroSection />
      <SearchHistory
        items={history}
        onSelect={handleHistorySelect}
        onRemove={handleRemove}
        onClearAll={handleClearAll}
      />
      <PopularDestinations onSelect={handleDestinationClick} />
      <TopDomesticFlights
        onSelect={(id) =>
          toast.info(`در حال انتقال به پرواز ${id}`, 'اطلاع')
        }
      />
      <FAQSection />
      <FeaturesSection />
    </div>
  );
}