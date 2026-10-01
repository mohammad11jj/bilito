import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Search, X, MessageSquare } from 'lucide-react';
import { EmptyState } from '../../../shared/components/ui/EmptyState';
import { Button } from '../../../shared/components/ui/Button';
import { TripCard, type Trip } from '../components/TripCard';

const mockTrips: Trip[] = [
  {
    id: '1',
    airline: { name: 'Pegasus' },
    routeTitle: 'پرواز استانبول به دبی',
    bookingNumber: '۱۲۳۴۵۶',
    bookingDate: '۱۴۰۲/۰۲/۱۸',
    flightDate: '۱۴۰۲/۰۶/۲۵',
    totalPrice: 11470154,
    departure: { time: '02:50', airport: 'استانبول', code: 'SAW' },
    arrival: { time: '21:50', airport: 'دبی', code: 'DXB' },
    duration: '19:00',
    baggage: '20 Kg',
    flightNumber: '165',
    classType: 'اکونومی',
    status: 'active',
    passengers: [
      {
        name: 'خانم شیوا ارغوان',
        nameEn: 'Mrs.Shiva.Arghavan',
        birthDate: '۱۳۷۵/۰۴/۲۵',
        nationalId: '۱۲۳۴۵۶۷۸۹۹۸۷',
      },
      {
        name: 'خانم شیوا ارغوان',
        nameEn: 'Mrs.Shiva.Arghavan',
        birthDate: '۱۳۷۵/۰۴/۲۵',
        nationalId: '۱۲۳۴۵۶۷۸۹۹۸۷',
      },
      {
        name: 'خانم شیوا ارغوان',
        nameEn: 'Mrs.Shiva.Arghavan',
        birthDate: '۱۳۷۵/۰۴/۲۵',
        nationalId: '۱۲۳۴۵۶۷۸۹۹۸۷',
      },
    ],
  },
  {
    id: '2',
    airline: { name: 'Pegasus' },
    routeTitle: 'پرواز استانبول به دبی',
    bookingNumber: '۱۲۳۴۵۶',
    bookingDate: '۱۴۰۲/۰۲/۱۸',
    flightDate: '۱۴۰۲/۰۶/۲۵',
    totalPrice: 11470154,
    departure: { time: '02:50', airport: 'استانبول', code: 'SAW' },
    arrival: { time: '21:50', airport: 'دبی', code: 'DXB' },
    duration: '19:00',
    baggage: '20 Kg',
    flightNumber: '165',
    classType: 'اکونومی',
    status: 'completed',
  },
  {
    id: '3',
    airline: { name: 'Pegasus' },
    routeTitle: 'پرواز استانبول به دبی',
    bookingNumber: '۱۲۳۴۵۶',
    bookingDate: '۱۴۰۲/۰۲/۱۸',
    flightDate: '۱۴۰۲/۰۶/۲۵',
    totalPrice: 11470154,
    departure: { time: '02:50', airport: 'استانبول', code: 'SAW' },
    arrival: { time: '21:50', airport: 'دبی', code: 'DXB' },
    duration: '19:00',
    baggage: '20 Kg',
    flightNumber: '165',
    classType: 'اکونومی',
    status: 'completed',
  },
];

export function TripsPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [showAlert, setShowAlert] = useState(true);

  const filteredTrips = mockTrips.filter(
    (trip) =>
      searchQuery === '' ||
      trip.airline.name.includes(searchQuery) ||
      trip.routeTitle.includes(searchQuery) ||
      trip.bookingNumber.includes(searchQuery),
  );

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2 order-2 sm:order-1 w-full sm:w-auto">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="h-10 px-3 rounded-md border border-gray-3 bg-white text-sm cursor-pointer"
          >
            <option value="newest">مرتب سازی</option>
            <option value="newest">جدیدترین</option>
            <option value="oldest">قدیمی‌ترین</option>
            <option value="cheapest">کم‌ترین قیمت</option>
          </select>

          <div className="relative flex-1 sm:flex-none sm:w-64">
            <input
              type="text"
              placeholder="جستجو"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-10 pr-10 pl-3 rounded-md border border-gray-3 bg-white text-sm"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-5 pointer-events-none" />
          </div>
        </div>

        <h1 className="text-lg font-bold text-gray-8 order-1 sm:order-2">
          سفرهای من
        </h1>
      </div>

      {/* Alert */}
      {showAlert && (
        <div className="bg-tint-1 border border-tint-3 rounded-lg p-4 mb-4 flex items-start gap-3">
          <button
            type="button"
            onClick={() => setShowAlert(false)}
            className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-gray-7 hover:bg-tint-2 transition-colors"
            aria-label="بستن"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex-1 text-xs text-shade-3 text-start leading-6">
            پرواز شماره ۱۶۵ از استانبول به دبی در تاریخ ۶ شهریور ۱۴۰۲ در ساعت
            ۲۱:۵۰ به مدت ۲ ساعت تاخیر دارد.
          </div>

          <MessageSquare className="w-5 h-5 text-primary shrink-0" />
        </div>
      )}

      {/* Trips List */}
      {filteredTrips.length > 0 ? (
        <div className="space-y-4">
          {filteredTrips.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg border border-gray-2">
          <EmptyState
            icon={<Search className="w-full h-full" />}
            title="شما هیچ سفری ندارید"
            description="برای شروع، پرواز مورد نظر خود را جستجو کنید."
            action={
              <Button onClick={() => navigate('/')}>برو به صفحه اصلی</Button>
            }
          />
        </div>
      )}
    </div>
  );
}