import { useState } from 'react';
import { Plane, ChevronDown, ChevronUp, Luggage, Clock } from 'lucide-react';
import { Badge } from '../../../shared/components/ui/Badge';
import { cn } from '../../../shared/utils/cn';

export type TripPassenger = {
  name: string;
  nameEn: string;
  birthDate: string;
  nationalId: string;
};

export type Trip = {
  id: string;
  airline: {
    name: string;
    logo?: string;
  };
  routeTitle: string;
  bookingNumber: string;
  bookingDate: string;
  flightDate: string;
  totalPrice: number;
  departure: {
    time: string;
    airport: string;
    code: string;
  };
  arrival: {
    time: string;
    airport: string;
    code: string;
  };
  duration: string;
  baggage: string;
  flightNumber: string;
  classType: string;
  status: 'active' | 'completed' | 'delayed' | 'canceled';
  passengers?: TripPassenger[];
};

type TripCardProps = {
  trip: Trip;
  onDetailsClick?: (id: string) => void;
  className?: string;
};

const statusLabels: Record<
  Trip['status'],
  { label: string; variant: 'success' | 'error' | 'warning' | 'default' }
> = {
  active: { label: 'تایید شده', variant: 'success' },
  completed: { label: 'تمام شده', variant: 'success' },
  delayed: { label: 'تاخیر دارد', variant: 'error' },
  canceled: { label: 'لغو شده', variant: 'error' },
};

export function TripCard({ trip, className }: TripCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const status = statusLabels[trip.status];

  return (
    <div
      className={cn(
        'bg-white rounded-lg border border-gray-2 overflow-hidden',
        'transition-colors duration-200',
        className,
      )}
    >
      {/* ===== Row 1: Airline + Route (Right) + Status (Left) ===== */}
      <div className="flex items-center justify-between gap-3 p-4 border-b border-gray-2">
        <div className="flex items-center gap-2">
          {trip.airline.logo ? (
            <img
              src={trip.airline.logo}
              alt={trip.airline.name}
              className="w-8 h-8 object-contain"
            />
          ) : (
            <div className="w-8 h-8 rounded-md bg-tint-1 flex items-center justify-center">
              <Plane className="w-4 h-4 text-primary" />
            </div>
          )}
          <span className="text-sm font-bold text-gray-8 whitespace-nowrap">
            {trip.routeTitle}
          </span>
        </div>

        <Badge variant={status.variant} size="sm">
          {status.label}
        </Badge>
      </div>

      {/* ===== Row 2: Booking Meta + Details Button ===== */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 px-4 py-3 text-xs">
        <div>
          <span className="text-gray-5">شماره رزرو: </span>
          <span className="font-bold text-gray-8">{trip.bookingNumber}</span>
        </div>
        <div>
          <span className="text-gray-5">تاریخ رزرو: </span>
          <span className="font-bold text-gray-8">{trip.bookingDate}</span>
        </div>
        <div>
          <span className="text-gray-5">تاریخ پرواز: </span>
          <span className="font-bold text-gray-8">{trip.flightDate}</span>
        </div>
        <div>
          <span className="text-gray-5">مبلغ کل سفارش: </span>
          <span className="font-bold text-gray-8">
            {trip.totalPrice.toLocaleString('fa-IR')} تومان
          </span>
        </div>

        {/* Details Button (Right after meta info) */}
        <button
          type="button"
          onClick={() => setIsExpanded((v) => !v)}
          className={cn(
            'flex items-center gap-1.5 ms-auto',
            'text-xs font-medium text-primary',
            'hover:text-shade-1 transition-colors',
            'focus:outline-none',
          )}
        >
          {isExpanded ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
          <span>جزئیات سفر</span>
        </button>
      </div>

      {/* ===== Expanded Content ===== */}
      {isExpanded && (
        <>
          {/* Row 3: Flight Info */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 px-4 py-4 border-t border-gray-2">
            {/* Departure */}
            <div className="flex flex-col items-center gap-1 shrink-0">
              <span className="text-lg font-bold text-gray-8" dir="ltr">
                {trip.departure.time}
              </span>
              <span className="text-xs text-gray-5 whitespace-nowrap">
                {trip.departure.airport} ({trip.departure.code})
              </span>
            </div>

            {/* Middle: Duration + Dashed + Baggage */}
            <div className="flex flex-col items-center gap-1 min-w-[120px] shrink-0">
              <div className="flex items-center gap-1.5 text-xs text-gray-5">
                <Clock className="w-3 h-3" />
                <span>{trip.duration}</span>
              </div>
              <div className="relative w-full flex items-center">
                <div className="flex-1 border-t border-dashed border-gray-3" />
                <Plane className="w-4 h-4 text-primary mx-1.5 shrink-0 -rotate-90" />
                <div className="flex-1 border-t border-dashed border-gray-3" />
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-5">
                <Luggage className="w-3 h-3" />
                <span>{trip.baggage}</span>
              </div>
            </div>

            {/* Arrival */}
            <div className="flex flex-col items-center gap-1 shrink-0">
              <span className="text-lg font-bold text-gray-8" dir="ltr">
                {trip.arrival.time}
              </span>
              <span className="text-xs text-gray-5 whitespace-nowrap">
                {trip.arrival.airport} ({trip.arrival.code})
              </span>
            </div>

            {/* Flight Number */}
            <div className="flex flex-col items-center gap-1 shrink-0 px-4 border-r border-gray-2">
              <span className="text-xs text-gray-5">شماره پرواز</span>
              <span className="text-sm font-bold text-gray-8" dir="ltr">
                {trip.flightNumber}
              </span>
            </div>

            {/* Class */}
            <div className="flex flex-col items-center gap-1 shrink-0">
              <span className="text-xs text-gray-5">کلاس پرواز</span>
              <span className="text-sm font-bold text-gray-8">
                {trip.classType}
              </span>
            </div>

            {/* Status */}
            <div className="flex flex-col items-center gap-1 shrink-0">
              <span className="text-xs text-gray-5">وضعیت</span>
              <span className="text-sm font-bold text-success">تایید شده</span>
            </div>
          </div>

          {/* Row 4: Passengers Table */}
          {trip.passengers && trip.passengers.length > 0 && (
            <div className="border-t border-gray-2">
              {/* Table Header */}
              <div className="hidden md:grid grid-cols-4 gap-4 px-4 py-3 bg-gray-1 text-xs text-gray-7 border-b border-gray-2">
                <span className="text-start font-medium">نام مسافر</span>
                <span className="text-start font-medium">نام مسافر به لاتین</span>
                <span className="text-start font-medium">تاریخ تولد</span>
                <span className="text-start font-medium">کد ملی/شماره گذرنامه</span>
              </div>

              {/* Passengers */}
              <div className="divide-y divide-gray-2">
                {trip.passengers.map((passenger, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 py-3 text-xs"
                  >
                    <span className="text-gray-8 font-medium">
                      {passenger.name}
                    </span>
                    <span className="text-gray-7" dir="ltr">
                      {passenger.nameEn}
                    </span>
                    <span className="text-gray-7">{passenger.birthDate}</span>
                    <span className="text-gray-7">{passenger.nationalId}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}