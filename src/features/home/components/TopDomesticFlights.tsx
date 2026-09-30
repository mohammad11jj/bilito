import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Container } from '../../../shared/components/layout/Container';
import { cn } from '../../../shared/utils/cn';

type City = {
  id: string;
  label: string;
};

type Flight = {
  id: string;
  origin: string;
  destination: string;
  image: string;
  price: number;
};

const cities: City[] = [
  { id: 'tehran', label: 'تهران' },
  { id: 'mashhad', label: 'مشهد' },
  { id: 'shiraz', label: 'شیراز' },
  { id: 'kish', label: 'کیش' },
];

// عکس‌های موجود
const IMAGES = {
  kish: '/flights/kish.png',
  mashhad: '/flights/mashhad.png',
  tehran1: '/flights/tehran1.png',
  tehran2: '/flights/tehran2.png',
};

const flightsByCity: Record<string, Flight[]> = {
  tehran: [
    {
      id: 'thr-mhd',
      origin: 'تهران',
      destination: 'مشهد',
      image: IMAGES.mashhad,
      price: 1500000,
    },
    {
      id: 'thr-kih',
      origin: 'تهران',
      destination: 'کیش',
      image: IMAGES.kish,
      price: 2000000,
    },
    {
      id: 'thr-syz',
      origin: 'تهران',
      destination: 'شیراز',
      image: IMAGES.tehran1,
      price: 1700000,
    },
    {
      id: 'thr-ifn',
      origin: 'تهران',
      destination: 'اصفهان',
      image: IMAGES.tehran2,
      price: 1200000,
    },
  ],
  mashhad: [
    {
      id: 'mhd-thr',
      origin: 'مشهد',
      destination: 'تهران',
      image: IMAGES.tehran1,
      price: 1500000,
    },
    {
      id: 'mhd-kih',
      origin: 'مشهد',
      destination: 'کیش',
      image: IMAGES.kish,
      price: 2200000,
    },
    {
      id: 'mhd-syz',
      origin: 'مشهد',
      destination: 'شیراز',
      image: IMAGES.tehran2,
      price: 1900000,
    },
    {
      id: 'mhd-ifn',
      origin: 'مشهد',
      destination: 'اصفهان',
      image: IMAGES.mashhad,
      price: 1800000,
    },
  ],
  shiraz: [
    {
      id: 'syz-thr',
      origin: 'شیراز',
      destination: 'تهران',
      image: IMAGES.tehran1,
      price: 1700000,
    },
    {
      id: 'syz-mhd',
      origin: 'شیراز',
      destination: 'مشهد',
      image: IMAGES.mashhad,
      price: 1900000,
    },
    {
      id: 'syz-kih',
      origin: 'شیراز',
      destination: 'کیش',
      image: IMAGES.kish,
      price: 2100000,
    },
    {
      id: 'syz-ifn',
      origin: 'شیراز',
      destination: 'اصفهان',
      image: IMAGES.tehran2,
      price: 1100000,
    },
  ],
  kish: [
    {
      id: 'kih-thr',
      origin: 'کیش',
      destination: 'تهران',
      image: IMAGES.tehran1,
      price: 2000000,
    },
    {
      id: 'kih-mhd',
      origin: 'کیش',
      destination: 'مشهد',
      image: IMAGES.mashhad,
      price: 2200000,
    },
    {
      id: 'kih-syz',
      origin: 'کیش',
      destination: 'شیراز',
      image: IMAGES.tehran2,
      price: 2100000,
    },
    {
      id: 'kih-ifn',
      origin: 'کیش',
      destination: 'اصفهان',
      image: IMAGES.kish,
      price: 2300000,
    },
  ],
};

type TopDomesticFlightsProps = {
  onSelect?: (flightId: string) => void;
  className?: string;
};

export function TopDomesticFlights({
  onSelect,
  className,
}: TopDomesticFlightsProps) {
  const [activeCity, setActiveCity] = useState<string>('tehran');

  const flights = flightsByCity[activeCity] || [];

  return (
    <Container className={cn('mt-12', className)}>
      <h2 className="text-xl font-bold text-gray-8 mb-6 text-start">
        پرطرفدارترین پروازهای داخلی
      </h2>

      {/* City Tabs */}
      <div className="flex items-center gap-2 mb-6 flex-wrap">
        {cities.map((city) => (
          <button
            key={city.id}
            type="button"
            onClick={() => setActiveCity(city.id)}
            className={cn(
              'px-5 py-2 text-sm font-medium rounded-md',
              'transition-colors duration-200',
              'focus:outline-none focus:ring-2 focus:ring-primary/40',
              activeCity === city.id
                ? 'bg-tint-1 text-primary border border-tint-3'
                : 'bg-white text-gray-7 border border-gray-3 hover:bg-gray-1',
            )}
          >
            {city.label}
          </button>
        ))}
      </div>

      {/* Flight Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {flights.map((flight) => (
          <FlightCard
            key={flight.id}
            flight={flight}
            onSelect={onSelect}
          />
        ))}
      </div>
    </Container>
  );
}

// ===== Flight Card =====
type FlightCardProps = {
  flight: Flight;
  onSelect?: (id: string) => void;
};

function FlightCard({ flight, onSelect }: FlightCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect?.(flight.id)}
      className={cn(
        'group flex items-center gap-3',
        'bg-white border border-gray-2 rounded-xl p-3',
        'transition-all duration-200',
        'hover:border-primary hover:shadow-card',
        'focus:outline-none focus:ring-2 focus:ring-primary/40',
        'text-start',
      )}
    >
      <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
        <img
          src={flight.image}
          alt={flight.destination}
          className={cn(
            'w-full h-full object-cover object-center',
            'transition-transform duration-300 group-hover:scale-110',
          )}
        />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5 mb-2 text-sm font-bold text-gray-8">
          <span className="truncate">{flight.origin}</span>
          <ArrowLeft className="w-3.5 h-3.5 text-primary shrink-0" />
          <span className="truncate">{flight.destination}</span>
        </div>

        <div className="text-xs text-gray-5 mb-1">شروع قیمت از</div>
        <div className="text-sm font-bold text-primary">
          {flight.price.toLocaleString('fa-IR')} تومان
        </div>
      </div>
    </button>
  );
}