import { Container } from '../../../shared/components/layout/Container';
import { SearchHeader } from '../components/SearchHeader';
import { FilterSidebar } from '../components/FilterSidebar';
import { PriceCalendar } from '../components/PriceCalendar';
import { FlightCard, type FlightCardData } from '../components/FlightCard';

// دیتای نمونه
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
  const searchParams = {
    origin: 'استانبول',
    destination: 'دبی',
    departDate: 'دوشنبه ۶ شهریور',
    returnDate: '',
    passengers: 3,
    flightClass: 'اکونومی',
  };

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
          <aside className="lg:order-1">
            <FilterSidebar
              totalResults={121}
              onApply={(filters) => console.log('Filters:', filters)}
            />
          </aside>

          {/* Main */}
          <main className="lg:order-2 space-y-4">
            {/* Price Calendar */}
            <PriceCalendar
              onSelect={(dayId) => console.log('Selected day:', dayId)}
            />

            {/* Flights List */}
            <div className="space-y-3">
              {mockFlights.map((flight) => (
                <FlightCard
                  key={flight.id}
                  flight={flight}
                  onDetailsClick={(id) =>
                    alert(`جزئیات پرواز ${id}`)
                  }
                />
              ))}
            </div>
          </main>
        </div>
      </Container>
    </div>
  );
}