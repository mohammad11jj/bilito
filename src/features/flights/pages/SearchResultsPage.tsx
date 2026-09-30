import { useState } from 'react';
import { Container } from '../../../shared/components/layout/Container';
import { SearchHeader } from '../components/SearchHeader';
import { FilterSidebar } from '../components/FilterSidebar';
import { PriceCalendar } from '../components/PriceCalendar';
import { FlightCard, type FlightCardData } from '../components/FlightCard';
import { SortDropdown, type SortOption } from '../components/SortDropdown';

const mockFlights: FlightCardData[] = [
  {
    id: '1',
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
];

export function SearchResultsPage() {
  const [sortBy, setSortBy] = useState<SortOption>('default');

  const searchParams = {
    origin: 'استانبول',
    destination: 'دبی',
    departDate: 'دوشنبه ۶ شهریور',
    returnDate: '',
    passengers: 3,
    flightClass: 'اکونومی',
  };

  const sortedFlights = [...mockFlights].sort((a, b) => {
    switch (sortBy) {
      case 'cheapest':
        return a.price - b.price;
      case 'fastest':
        return a.stops - b.stops;
      default:
        return 0;
    }
  });

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
                onApply={(filters) => console.log('Filters:', filters)}
              />
            </div>
          </aside>

          {/* Main */}
          <main className="lg:order-2 space-y-4 min-w-0">
            {/* Calendar + Sort (same row) */}
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
            <div className="space-y-3">
              {sortedFlights.map((flight) => (
                <FlightCard
                  key={flight.id}
                  flight={flight}
                  onDetailsClick={(id) => alert(`جزئیات پرواز ${id}`)}
                />
              ))}
            </div>
          </main>
        </div>
      </Container>
    </div>
  );
}