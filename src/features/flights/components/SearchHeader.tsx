import { Pencil, Calendar, Users, Plane } from 'lucide-react';
import { Container } from '../../../shared/components/layout/Container';
import { cn } from '../../../shared/utils/cn';

type SearchHeaderProps = {
  origin: string;
  destination: string;
  departDate: string;
  returnDate?: string;
  passengers: number;
  flightClass: string;
  onEdit?: () => void;
  className?: string;
};

export function SearchHeader({
  origin,
  destination,
  departDate,
  returnDate,
  passengers,
  flightClass,
  onEdit,
  className,
}: SearchHeaderProps) {
  return (
    <div className={cn('bg-tint-1 border-b border-tint-2', className)}>
      <Container>
        <div className="flex items-center justify-between gap-4 py-3">
          {/* Search Info */}
          <div className="flex items-center gap-4 flex-wrap">
            {/* Route */}
            <div className="flex items-center gap-2 text-sm">
              <Plane className="w-4 h-4 text-primary" />
              <span className="font-medium text-gray-8">
                بلیط هواپیما {origin} به {destination}
              </span>
            </div>

            {/* Divider */}
            <span className="hidden md:block w-px h-4 bg-tint-3" />

            {/* Date */}
            <div className="flex items-center gap-2 text-sm text-gray-7">
              <Calendar className="w-4 h-4" />
              <span>
                {departDate}
                {returnDate && ` - ${returnDate}`}
              </span>
            </div>

            {/* Divider */}
            <span className="hidden md:block w-px h-4 bg-tint-3" />

            {/* Passengers */}
            <div className="flex items-center gap-2 text-sm text-gray-7">
              <Users className="w-4 h-4" />
              <span>{passengers} مسافر</span>
            </div>

            {/* Divider */}
            <span className="hidden md:block w-px h-4 bg-tint-3" />

            {/* Class */}
            <span className="text-sm text-gray-7">{flightClass}</span>
          </div>

          {/* Edit Button */}
          {onEdit && (
            <button
              type="button"
              onClick={onEdit}
              className={cn(
                'flex items-center gap-2 shrink-0',
                'px-3 py-1.5 rounded-md',
                'text-sm font-medium text-primary',
                'bg-white border border-tint-3',
                'hover:bg-tint-2 transition-colors',
                'focus:outline-none focus:ring-2 focus:ring-primary/40',
              )}
            >
              <Pencil className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">ویرایش جستجو</span>
            </button>
          )}
        </div>
      </Container>
    </div>
  );
}