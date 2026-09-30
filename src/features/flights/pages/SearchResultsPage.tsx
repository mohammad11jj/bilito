import { Container } from '../../../shared/components/layout/Container';
import { SearchHeader } from '../components/SearchHeader';
import { FilterSidebar } from '../components/FilterSidebar';

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
          <aside className="lg:order-2">
            <FilterSidebar
              totalResults={121}
              onApply={(filters) => console.log('Filters:', filters)}
            />
          </aside>

          {/* Main */}
          <main className="lg:order-1">
            <div className="bg-white rounded-lg border border-gray-2 p-6">
              <p className="text-sm text-gray-5 text-center py-12">
                لیست پروازها اینجا قرار می‌گیره
              </p>
            </div>
          </main>
        </div>
      </Container>
    </div>
  );
}