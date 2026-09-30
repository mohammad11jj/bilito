import { Container } from '../../../shared/components/layout/Container';
import { SearchHeader } from '../components/SearchHeader';

export function SearchResultsPage() {
  // این داده‌ها فعلاً mock هستن. بعداً از URL query param میان
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
      {/* Search Header */}
      <SearchHeader
        origin={searchParams.origin}
        destination={searchParams.destination}
        departDate={searchParams.departDate}
        returnDate={searchParams.returnDate}
        passengers={searchParams.passengers}
        flightClass={searchParams.flightClass}
        onEdit={() => alert('برگشت به فرم جستجو')}
      />

      {/* Main Content */}
      <Container className="py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
          {/* Sidebar - Filters */}
          <aside className="lg:order-1">
            <div className="bg-white rounded-lg border border-gray-2 p-4 sticky top-20">
              <p className="text-sm text-gray-5 text-center py-8">
                سایدبار فیلتر اینجا قرار می‌گیره
              </p>
            </div>
          </aside>

          {/* Main - Flights List */}
          <main className="lg:order-2">
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