import { useState } from 'react';
import { HeroSection } from '../components/HeroSection';
import { SearchHistory } from '../components/SearchHistory';

const initialHistory = [
  { id: '1', origin: 'تهران', destination: 'استانبول' },
  { id: '2', origin: 'تهران', destination: 'دبی' },
  { id: '3', origin: 'تهران', destination: 'شیراز' },
  { id: '4', origin: 'تهران', destination: 'مشهد' },
  { id: '5', origin: 'تهران', destination: 'کیش' },
  { id: '6', origin: 'تهران', destination: 'اصفهان' },
];

export function HomePage() {
  const [history, setHistory] = useState(initialHistory);

  const handleRemove = (id: string) => {
    setHistory((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearAll = () => {
    setHistory([]);
  };

  const handleSelect = (item: { id: string; origin: string; destination: string }) => {
    alert(`جستجو برای: ${item.origin} به ${item.destination}`);
    // بعداً: setOrigin, setDestination و trigger search
  };

  return (
    <div>
      <HeroSection />
      <SearchHistory
        items={history}
        onSelect={handleSelect}
        onRemove={handleRemove}
        onClearAll={handleClearAll}
      />
    </div>
  );
}