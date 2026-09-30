import { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { cn } from '../../../shared/utils/cn';

type DayPrice = {
  id: string;
  jalaliDate: string;
  weekday: string;
  gregorianDate: string;
  price: number | null;
};

const mockDays: DayPrice[] = [
  { id: '1', jalaliDate: '5/27', weekday: 'شنبه', gregorianDate: '22 Aug', price: 1300000 },
  { id: '2', jalaliDate: '5/28', weekday: 'یکشنبه', gregorianDate: '23 Aug', price: 1300000 },
  { id: '3', jalaliDate: '5/29', weekday: 'دوشنبه', gregorianDate: '24 Aug', price: null },
  { id: '4', jalaliDate: '5/30', weekday: 'سه‌شنبه', gregorianDate: '25 Aug', price: 2300000 },
  { id: '5', jalaliDate: '5/31', weekday: 'چهارشنبه', gregorianDate: '26 Aug', price: 1300000 },
  { id: '6', jalaliDate: '6/1', weekday: 'پنجشنبه', gregorianDate: '27 Aug', price: 1300000 },
  { id: '7', jalaliDate: '6/2', weekday: 'جمعه', gregorianDate: '28 Aug', price: 0 },
];

type PriceCalendarProps = {
  days?: DayPrice[];
  selectedDayId?: string;
  onSelect?: (dayId: string) => void;
  onPrevious?: () => void;
  onNext?: () => void;
  className?: string;
};

export function PriceCalendar({
  days = mockDays,
  selectedDayId,
  onSelect,
  onPrevious,
  onNext,
  className,
}: PriceCalendarProps) {
  const [selected, setSelected] = useState<string>(selectedDayId || days[3]?.id);

  const handleSelect = (id: string) => {
    setSelected(id);
    onSelect?.(id);
  };

  return (
    <div className={cn('bg-white rounded-lg border border-gray-2 p-3', className)}>
      <div className="flex items-center gap-2">
        {/* Right Arrow */}
        <button
          type="button"
          onClick={onPrevious}
          className={cn(
            'w-8 h-8 shrink-0 flex items-center justify-center',
            'rounded-md text-gray-6',
            'hover:bg-gray-1 transition-colors',
            'focus:outline-none focus:ring-2 focus:ring-primary/40',
          )}
          aria-label="روزهای قبل"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Days */}
        <div className="flex-1 flex items-stretch gap-1 overflow-x-auto py-1">
          {days.map((day) => {
            const isSelected = day.id === selected;
            const isUnavailable = day.price === null;
            const isFull = day.price === 0;
            const isExpensive = (day.price ?? 0) > 1500000;

            return (
              <button
                key={day.id}
                type="button"
                onClick={() => handleSelect(day.id)}
                disabled={isUnavailable || isFull}
                className={cn(
                  'relative flex flex-col items-center justify-center gap-1',
                  'min-w-[80px] py-2 px-2 rounded-md',
                  'transition-colors duration-200',
                  'focus:outline-none focus:ring-2 focus:ring-primary/40',
                  // Selected
                  isSelected && 'bg-tint-1',
                  // Normal
                  !isSelected &&
                    !isUnavailable &&
                    !isFull &&
                    'hover:bg-gray-1',
                  // Unavailable / Full
                  (isUnavailable || isFull) &&
                    'opacity-50 cursor-not-allowed',
                )}
              >
                <span
                  className={cn(
                    'text-xs font-medium whitespace-nowrap',
                    isSelected ? 'text-primary' : 'text-gray-8',
                  )}
                >
                  {day.weekday} {day.jalaliDate}
                </span>

                <span className="text-[10px] text-gray-5 whitespace-nowrap">
                  {day.gregorianDate}
                </span>

                <span
                  className={cn(
                    'text-xs font-bold whitespace-nowrap mt-0.5',
                    isUnavailable || isFull
                      ? 'text-gray-5'
                      : isExpensive
                        ? 'text-error'
                        : 'text-primary',
                  )}
                >
                  {isUnavailable
                    ? 'ناموجود'
                    : isFull
                      ? 'ظرفیت تکمیل'
                      : `${(day.price as number).toLocaleString('fa-IR')} تومان`}
                </span>

                {/* Selected Underline */}
                {isSelected && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Left Arrow */}
        <button
          type="button"
          onClick={onNext}
          className={cn(
            'w-8 h-8 shrink-0 flex items-center justify-center',
            'rounded-md text-gray-6',
            'hover:bg-gray-1 transition-colors',
            'focus:outline-none focus:ring-2 focus:ring-primary/40',
          )}
          aria-label="روزهای بعد"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}