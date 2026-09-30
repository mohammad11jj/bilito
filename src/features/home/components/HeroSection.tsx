import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';
import {
  Plane,
  ArrowLeftRight,
  Calendar,
  Users,
  Minus,
  Plus,
  Search,
} from 'lucide-react';
import { Select } from '../../../shared/components/ui/Select';
import { Button } from '../../../shared/components/ui/Button';
import { Container } from '../../../shared/components/layout/Container';
import { cn } from '../../../shared/utils/cn';

type FlightType = 'international' | 'domestic';
type TripType = 'oneway' | 'roundtrip' | 'multicity';

const cities = [
  { value: 'THR', label: 'تهران (THR)' },
  { value: 'IST', label: 'استانبول (IST)' },
  { value: 'DXB', label: 'دبی (DXB)' },
  { value: 'MHD', label: 'مشهد (MHD)' },
  { value: 'SYZ', label: 'شیراز (SYZ)' },
  { value: 'IFN', label: 'اصفهان (IFN)' },
  { value: 'KIH', label: 'کیش (KIH)' },
  { value: 'AWZ', label: 'اهواز (AWZ)' },
];

const flightClasses = [
  { value: 'economy', label: 'اکونومی' },
  { value: 'business', label: 'بیزینس' },
  { value: 'first', label: 'فرست کلاس' },
];

export function HeroSection() {
  const navigate = useNavigate();

  const [flightType, setFlightType] = useState<FlightType>('international');
  const [tripType, setTripType] = useState<TripType>('oneway');
  const [origin, setOrigin] = useState<string>('');
  const [destination, setDestination] = useState<string>('');
  const [departDate, setDepartDate] = useState<string>('');
  const [returnDate, setReturnDate] = useState<string>('');
  const [flightClass, setFlightClass] = useState<string>('economy');
  const [passengers, setPassengers] = useState({
    adults: 1,
    children: 0,
    infants: 0,
  });

  const handleSwap = () => {
    setOrigin(destination);
    setDestination(origin);
  };

  const handleSearch = () => {
    const params = new URLSearchParams({
      origin,
      destination,
      departDate,
      returnDate,
      flightClass,
      passengers: String(
        passengers.adults + passengers.children + passengers.infants,
      ),
    });
    navigate(`/flights/search?${params.toString()}`);
  };

  const showReturnDate = tripType === 'roundtrip';

  return (
    <section className="relative">
      {/* Background Image */}
      <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
        <img
          src="/hero.png"
          alt="پرواز"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/30" />
      </div>

      {/* Floating Search Card */}
      <Container>
        <div className="relative -mt-20 lg:-mt-24 bg-white rounded-xl shadow-card p-6 lg:p-8">
          {/* Tabs */}
          <div className="flex items-center gap-2 border-b border-gray-2 mb-6">
            <TabButton
              isActive={flightType === 'international'}
              onClick={() => setFlightType('international')}
              icon={<Plane className="w-4 h-4" />}
              label="پرواز خارجی"
            />
            <TabButton
              isActive={flightType === 'domestic'}
              onClick={() => setFlightType('domestic')}
              icon={<Plane className="w-4 h-4" />}
              label="پرواز داخلی"
            />
          </div>

          {/* Trip Type Selector */}
          <div className="flex items-center gap-2 mb-6 flex-wrap">
            <TripTypeButton
              isActive={tripType === 'oneway'}
              onClick={() => setTripType('oneway')}
              label="یک طرفه"
            />
            <TripTypeButton
              isActive={tripType === 'roundtrip'}
              onClick={() => setTripType('roundtrip')}
              label="رفت و برگشت"
            />
            <TripTypeButton
              isActive={tripType === 'multicity'}
              onClick={() => setTripType('multicity')}
              label="چند مسیره"
            />
          </div>

          {/* Search Form */}
          <div
            className={cn(
              'grid grid-cols-1 md:grid-cols-2 gap-3 items-end',
              showReturnDate
                ? 'lg:grid-cols-[1fr_auto_1fr_0.9fr_0.9fr_0.8fr_0.8fr_auto]'
                : 'lg:grid-cols-[1fr_auto_1fr_0.9fr_0.8fr_0.8fr_auto]',
            )}
          >
            <Select
              label="مبدأ"
              placeholder="شهر مبدأ"
              options={cities}
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
            />

            <button
              type="button"
              onClick={handleSwap}
              className={cn(
                'w-10 h-10 rounded-full flex items-center justify-center',
                'bg-tint-1 text-primary border border-tint-3',
                'hover:bg-tint-2 transition-colors',
                'focus:outline-none focus:ring-2 focus:ring-primary/40',
                'mx-auto lg:mb-0',
              )}
              aria-label="جابجایی مبدأ و مقصد"
            >
              <ArrowLeftRight className="w-4 h-4" />
            </button>

            <Select
              label="مقصد"
              placeholder="شهر مقصد"
              options={cities}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />

            <DateField
              label="تاریخ رفت"
              value={departDate}
              onChange={setDepartDate}
            />

            {showReturnDate && (
              <DateField
                label="برگشت"
                value={returnDate}
                onChange={setReturnDate}
              />
            )}

            <PassengersDropdown
              counts={passengers}
              onChange={setPassengers}
            />

            <Select
              label="کلاس"
              options={flightClasses}
              value={flightClass}
              onChange={(e) => setFlightClass(e.target.value)}
            />

            <Button
              onClick={handleSearch}
              leftIcon={<Search className="w-5 h-5" />}
              className="h-10 px-6 lg:min-w-[120px] w-full"
            >
              جستجو
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ===== Tab Button =====
type TabButtonProps = {
  isActive: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
};

function TabButton({ isActive, onClick, icon, label }: TabButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'flex items-center gap-2 px-4 py-3 text-sm font-medium',
        'transition-colors duration-200',
        'border-b-2 -mb-px',
        isActive
          ? 'text-primary border-primary'
          : 'text-gray-6 border-transparent hover:text-gray-8',
      )}
    >
      {icon}
      {label}
    </button>
  );
}

// ===== Trip Type Button =====
type TripTypeButtonProps = {
  isActive: boolean;
  onClick: () => void;
  label: string;
};

function TripTypeButton({ isActive, onClick, label }: TripTypeButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'px-4 py-2 text-sm font-medium rounded-md',
        'transition-colors duration-200',
        'focus:outline-none focus:ring-2 focus:ring-primary/40',
        isActive
          ? 'bg-primary text-white'
          : 'bg-white text-gray-7 border border-gray-3 hover:bg-gray-1',
      )}
    >
      {label}
    </button>
  );
}

// ===== Date Field =====
type DateFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

function DateField({ label, value, onChange }: DateFieldProps) {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-7 mb-2 text-start truncate">
        {label}
      </label>
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="انتخاب تاریخ"
          className={cn(
            'w-full h-10 rounded-md border bg-white text-sm text-start',
            'px-3 pl-9',
            'placeholder:text-gray-5',
            'transition-colors duration-200',
            'border-gray-3 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none',
          )}
        />
        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-5 pointer-events-none" />
      </div>
    </div>
  );
}

// ===== Passengers Dropdown =====
type Counts = {
  adults: number;
  children: number;
  infants: number;
};

type PassengersDropdownProps = {
  counts: Counts;
  onChange: (counts: Counts) => void;
};

function PassengersDropdown({ counts, onChange }: PassengersDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const total = counts.adults + counts.children + counts.infants;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () =>
        document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  const updateCount = (key: keyof Counts, delta: number) => {
    const newValue = Math.max(0, counts[key] + delta);
    onChange({ ...counts, [key]: newValue });
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <label className="block text-sm font-medium text-gray-7 mb-2 text-start">
        مسافران
      </label>

      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        className={cn(
          'w-full h-10 rounded-md border bg-white text-sm',
          'px-3 flex items-center justify-between',
          'transition-colors duration-200',
          'border-gray-3 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none',
        )}
      >
        <span className="flex items-center gap-2 text-gray-7 truncate">
          <Users className="w-4 h-4 text-gray-5 shrink-0" />
          {total} مسافر
        </span>
      </button>

      {isOpen && (
        <div
          className={cn(
            'absolute top-full mt-2 right-0 z-30 min-w-[260px]',
            'bg-white border border-gray-3 rounded-md shadow-drop-4',
            'p-4 space-y-4',
          )}
        >
          <Counter
            label="بزرگسال"
            sublabel="(بالای ۱۲ سال)"
            value={counts.adults}
            onDecrease={() => updateCount('adults', -1)}
            onIncrease={() => updateCount('adults', +1)}
            min={1}
          />
          <Counter
            label="کودک"
            sublabel="(۲ تا ۱۲ سال)"
            value={counts.children}
            onDecrease={() => updateCount('children', -1)}
            onIncrease={() => updateCount('children', +1)}
          />
          <Counter
            label="نوزاد"
            sublabel="(زیر ۲ سال)"
            value={counts.infants}
            onDecrease={() => updateCount('infants', -1)}
            onIncrease={() => updateCount('infants', +1)}
          />

          <div className="pt-3 border-t border-gray-2">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-full py-2 text-sm font-medium text-primary hover:bg-tint-1 rounded-md transition-colors"
            >
              تایید
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ===== Counter =====
type CounterProps = {
  label: string;
  sublabel?: string;
  value: number;
  onDecrease: () => void;
  onIncrease: () => void;
  min?: number;
};

function Counter({
  label,
  sublabel,
  value,
  onDecrease,
  onIncrease,
  min = 0,
}: CounterProps) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="text-start">
        <p className="text-sm font-medium text-gray-8">{label}</p>
        {sublabel && <p className="text-xs text-gray-5">{sublabel}</p>}
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onDecrease}
          disabled={value <= min}
          className={cn(
            'w-8 h-8 rounded-full flex items-center justify-center',
            'bg-tint-1 text-primary transition-colors',
            'hover:bg-tint-2',
            'disabled:opacity-40 disabled:cursor-not-allowed',
          )}
          aria-label={`کاهش ${label}`}
        >
          <Minus className="w-4 h-4" />
        </button>

        <span className="w-6 text-center text-sm font-bold text-gray-8">
          {value.toLocaleString('fa-IR')}
        </span>

        <button
          type="button"
          onClick={onIncrease}
          className={cn(
            'w-8 h-8 rounded-full flex items-center justify-center',
            'bg-primary text-white transition-colors',
            'hover:bg-shade-1',
          )}
          aria-label={`افزایش ${label}`}
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}