import { Plane, Luggage, Clock } from 'lucide-react';
import { Badge } from '../../../shared/components/ui/Badge';
import { Button } from '../../../shared/components/ui/Button';
import { cn } from '../../../shared/utils/cn';

export type FlightCardData = {
  id: string;
  airline: {
    name: string;
    logo?: string;
  };
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
  stops: number;
  baggage: string;
  price: number;
  seatsLeft?: number;
  refundable: boolean;
  classes: string[];
};

type FlightCardProps = {
  flight: FlightCardData;
  onDetailsClick?: (id: string) => void;
  className?: string;
};

const classLabels: Record<string, string> = {
  economy: 'اکونومی',
  business: 'بیزینس',
  first: 'فرست کلاس',
  system: 'سیستمی',
};

export function FlightCard({
  flight,
  onDetailsClick,
  className,
}: FlightCardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-lg border border-gray-2 p-6',
        'transition-colors duration-200',
        'hover:border-primary',
        className,
      )}
    >
      {/* ===== Row 1: Status (Right) + Classes (Left) ===== */}
      <div className="flex items-center justify-between gap-2 mb-8 flex-wrap">
        <div className="flex items-center gap-2">
          {flight.seatsLeft !== undefined && flight.seatsLeft <= 5 && (
            <Badge variant="error" size="sm">
              {flight.seatsLeft.toLocaleString('fa-IR')} صندلی باقی مانده
            </Badge>
          )}
          {!flight.refundable && (
            <Badge variant="error" size="sm">
              غیر قابل استرداد
            </Badge>
          )}
        </div>

        <div className="flex items-center gap-2">
          {flight.classes.map((cls) => (
            <Badge key={cls} variant="primary" size="sm">
              {classLabels[cls] || cls}
            </Badge>
          ))}
        </div>
      </div>

      {/* ===== Row 2: Everything in one line (RTL) ===== */}
      <div className="flex items-center gap-4">
        {/* Airline */}
        <div className="flex items-center gap-2 shrink-0">
          {flight.airline.logo ? (
            <img
              src={flight.airline.logo}
              alt={flight.airline.name}
              className="w-10 h-10 object-contain shrink-0"
            />
          ) : (
            <div className="w-10 h-10 rounded-md bg-tint-1 flex items-center justify-center shrink-0">
              <Plane className="w-5 h-5 text-primary" />
            </div>
          )}
          <span className="text-xs text-gray-7 whitespace-nowrap">
            {flight.airline.name}
          </span>
        </div>

        {/* Arrival (Right) */}
        <div className="flex flex-col items-center gap-1.5 shrink-0">
          <span className="text-xl font-bold text-gray-8" dir="ltr">
            {flight.arrival.time}
          </span>
          <span className="text-xs text-gray-5 whitespace-nowrap">
            {flight.arrival.airport} ({flight.arrival.code})
          </span>
        </div>

        {/* Middle: Duration + Dashed line + Baggage */}
        <div className="flex-1 flex flex-col items-center gap-1.5 min-w-[120px]">
          <div className="flex items-center gap-1.5 text-xs text-gray-5">
            <Clock className="w-3.5 h-3.5" />
            <span>{flight.duration}</span>
          </div>

          <div className="relative w-full flex items-center">
            <div className="flex-1 border-t border-dashed border-gray-3" />
            <Plane className="w-4 h-4 text-primary mx-1.5 shrink-0 -rotate-90" />
            <div className="flex-1 border-t border-dashed border-gray-3" />
          </div>

          <div className="flex items-center gap-1.5 text-xs text-gray-5">
            <Luggage className="w-3.5 h-3.5" />
            <span>{flight.baggage}</span>
          </div>
        </div>

        {/* Departure (Left) */}
        <div className="flex flex-col items-center gap-1.5 shrink-0">
          <span className="text-xl font-bold text-gray-8" dir="ltr">
            {flight.departure.time}
          </span>
          <span className="text-xs text-gray-5 whitespace-nowrap">
            {flight.departure.airport} ({flight.departure.code})
          </span>
        </div>

        {/* Spacer */}
        <div className="flex-1 min-w-[20px]" />

        {/* Price */}
        <div className="shrink-0">
          <span className="text-base font-bold text-primary whitespace-nowrap">
            {flight.price.toLocaleString('fa-IR')} تومان
          </span>
        </div>

        {/* Details Button */}
        <div className="shrink-0">
          <Button
            onClick={() => onDetailsClick?.(flight.id)}
            className="min-w-[120px] h-10"
          >
            جزئیات بلیط
          </Button>
        </div>
      </div>
    </div>
  );
}