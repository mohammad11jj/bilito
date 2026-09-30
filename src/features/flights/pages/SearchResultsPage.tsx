import { useMemo, useState } from 'react';
import { Container } from '../../../shared/components/layout/Container';
import { SearchHeader } from '../components/SearchHeader';
import { FilterSidebar } from '../components/FilterSidebar';
import { PriceCalendar } from '../components/PriceCalendar';
import { FlightCard, type FlightCardData } from '../components/FlightCard';
import { SortDropdown, type SortOption } from '../components/SortDropdown';
import { FlightInfoModal } from '../components/FlightInfoModal';
import { initialFilters, type FlightFilters } from '../types';

// ===== داده‌های نمونه =====
const mockFlights: (FlightCardData & { airlineId: string })[] = [
  {
    id: '1',
    airlineId: 'gulf',
    airline: { name: 'Gulf Air' },
    departure: { time: '02:50', airport: 'استانبول', code: 'SAW' },
    arrival: { time: '21:50', airport: 'دبی', code: 'DXB' },
    duration: '19h',
    stops: 0,
    baggage: '20 Kg',
    price: 3341046,
    seatsLeft: 5,
    refundable: false,
    classes: ['economy', 'system'],
  },
  {
    id: '2',
    airlineId: 'pegasus',
    airline: { name: 'Pegasus' },
    departure: { time: '02:50', airport: 'استانبول', code: 'SAW' },
    arrival: { time: '21:50', airport: 'دبی', code: 'DXB' },
    duration: '19h',
    stops: 1,
    baggage: '20 Kg',
    price: 4500000,
    seatsLeft: 3,
    refundable: true,
    classes: ['economy'],
  },
  {
    id: '3',
    airlineId: 'emirates',
    airline: { name: 'Emirates' },
    departure: { time: '02:50', airport: 'استانبول', code: 'SAW' },
    arrival: { time: '21:50', airport: 'دبی', code: 'DXB' },
    duration: '19h',
    stops: 0,
    baggage: '30 Kg',
    price: 5100000,
    seatsLeft: 8,
    refundable: false,
    classes: ['business', 'system'],
  },
  {
    id: '4',
    airlineId: 'qatar',
    airline: { name: 'Qatar Airways' },
    departure: { time: '02:50', airport: 'استانبول', code: 'SAW' },
    arrival: { time: '21:50', airport: 'دبی', code: 'DXB' },
    duration: '19h',
    stops: 2,
    baggage: '25 Kg',
    price: 6200000,
    seatsLeft: 2,
    refundable: true,
    classes: ['business'],
  },
  {
    id: '5',
    airlineId: 'flydubai',
    airline: { name: 'Flydubai' },
    departure: { time: '14:30', airport: 'استانبول', code: 'SAW' },
    arrival: { time: '09:50', airport: 'دبی', code: 'DXB' },
    duration: '19h',
    stops: 1,
    baggage: '20 Kg',
    price: 2900000,
    seatsLeft: 4,
    refundable: false,
    classes: ['economy'],
  },
];

export function SearchResultsPage() {
  const [sortBy, setSortBy] = useState<SortOption>('default');
  const [filters, setFilters] = useState<FlightFilters>(initialFilters);
  const [selectedFlight, setSelectedFlight] = useState<FlightCardData | null>(
    null,
  );

  const searchParams = {
    origin: 'استانبول',
    destination: 'دبی',
    departDate: 'دوشنبه ۶ شهریور',
    returnDate: '',
    passengers: 3,
    flightClass: 'اکونومی',
  };

  // ===== اعمال فیلترها =====
  const filteredFlights = useMemo(() => {
    return mockFlights.filter((flight) => {
      // قیمت
      if (
        flight.price < filters.price.min ||
        flight.price > filters.price.max
      ) {
        return false;
      }

      // ایرلاین
      if (
        filters.airlines.length > 0 &&
        !filters.airlines.includes(flight.airlineId)
      ) {
        return false;
      }

      // توقف
      if (filters.stops === 'direct' && flight.stops !== 0) return false;
      if (filters.stops === 'one' && flight.stops !== 1) return false;
      if (filters.stops === 'two+' && flight.stops < 2) return false;

      // فرودگاه
      if (
        filters.airports.length > 0 &&
        !filters.airports.includes(flight.departure.code) &&
        !filters.airports.includes(flight.arrival.code)
      ) {
        return false;
      }

      return true;
    });
  }, [filters]);

  // ===== اعمال مرتب‌سازی =====
  const sortedFlights = useMemo(() => {
    return [...filteredFlights].sort((a, b) => {
      switch (sortBy) {
        case 'cheapest':
          return a.price - b.price;
        case 'fastest':
          return a.stops - b.stops;
        case 'earliest':
          return a.departure.time.localeCompare(b.departure.time);
        case 'latest':
          return b.departure.time.localeCompare(a.departure.time);
        default:
          return 0;
      }
    });
  }, [filteredFlights, sortBy]);

  return (
    <div className="bg-gray-1 min-h-screen">
      <SearchHeader
        origin={searchParams.origin}
        destination={searchParams.destination}
        departDate={searchParams.departDate}
        returnDate={searchParams.returnDate}
        passengers={searchParams.passengers}
        flightClass={searchParams.flightClass}
        onEdit={() => alert('برگشت به فرم جستجو')}
      />

      <Container className="py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6">
          {/* Sidebar */}
          <aside className="lg:order-1 min-w-0">
            <div className="lg:sticky lg:top-20">
              <FilterSidebar
                totalResults={sortedFlights.length}
                filters={filters}
                onChange={setFilters}
                onApply={(newFilters) => setFilters(newFilters)}
              />
            </div>
          </aside>

          {/* Main */}
          <main className="lg:order-2 space-y-4 min-w-0">
            {/* Calendar + Sort */}
            <div className="flex items-start gap-3">
              <div className="flex-1 min-w-0">
                <PriceCalendar
                  onSelect={(dayId) => console.log('Selected day:', dayId)}
                />
              </div>
              <SortDropdown
                value={sortBy}
                onChange={setSortBy}
                onFilterClick={() => alert('باز کردن فیلتر (موبایل)')}
              />
            </div>

            {/* Flights List */}
            {sortedFlights.length > 0 ? (
              <div className="space-y-3">
                {sortedFlights.map((flight) => (
                  <FlightCard
                    key={flight.id}
                    flight={flight}
                    onDetailsClick={() => setSelectedFlight(flight)}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg border border-gray-2 p-12 text-center">
                <p className="text-sm text-gray-5">
                  هیچ پروازی با فیلترهای انتخابی یافت نشد.
                </p>
              </div>
            )}
          </main>
        </div>
      </Container>

      {/* Flight Info Modal */}
      <FlightInfoModal
        isOpen={!!selectedFlight}
        onClose={() => setSelectedFlight(null)}
        flight={selectedFlight}
        onContinue={(id) => {
          console.log('Continue with flight:', id);
          setSelectedFlight(null);
        }}
      />
    </div>
  );
}