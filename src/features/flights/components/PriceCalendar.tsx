import { useState, useRef, useEffect } from 'react';
import { ChevronRight, ChevronLeft, ChevronDown } from 'lucide-react';
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
  { id: '8', jalaliDate: '6/3', weekday: 'شنبه', gregorianDate: '29 Aug', price: 1400000 },
  { id: '9', jalaliDate: '6/4', weekday: 'یکشنبه', gregorianDate: '30 Aug', price: 1500000 },
  { id: '10', jalaliDate: '6/5', weekday: 'دوشنبه', gregorianDate: '31 Aug', price: 1600000 },
];

type PriceCalendarProps = {
  days?: DayPrice[];
  selectedDayId?: string;
  onSelect?: (dayId: string) => void;
  defaultOpen?: boolean;
  className?: string;
};

export function PriceCalendar({
  days = mockDays,
  selectedDayId,
  onSelect,
  defaultOpen = true,
  className,
}: PriceCalendarProps) {
  const [selected, setSelected] = useState<string>(selectedDayId || days[3]?.id);
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [scrollX, setScrollX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleSelect = (id: string) => {
    setSelected(id);
    onSelect?.(id);
  };

  const getMaxScroll = () => {
    if (!containerRef.current || !contentRef.current) return 0;
    return Math.max(
      0,
      contentRef.current.scrollWidth - containerRef.current.clientWidth,
    );
  };

  const scroll = (direction: 'left' | 'right') => {
    const amount = 300;
    const maxScroll = getMaxScroll();
    const newX =
      direction === 'left'
        ? Math.max(0, scrollX - amount)
        : Math.min(maxScroll, scrollX + amount);
    setScrollX(newX);
  };

  useEffect(() => {
    if (!isOpen) setScrollX(0);
  }, [isOpen]);

  return (
    <div className={cn('bg-white rounded-lg border border-gray-2', className)}>
      {/* Header - border color is transparent when closed to avoid jump */}
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        className={cn(
          'w-full h-10 flex items-center justify-between px-4',
          'text-start',
          'hover:bg-gray-1 transition-colors',
          'focus:outline-none',
          // Border always exists but color changes
          'border-b',
          isOpen ? 'border-gray-2 rounded-t-lg' : 'border-transparent rounded-lg',
        )}
        aria-expanded={isOpen}
      >
        <span className="text-sm font-medium text-gray-8">تقویم قیمتی</span>
        <ChevronDown
          className={cn(
            'w-4 h-4 text-gray-6 transition-transform duration-200',
            isOpen && 'rotate-180',
          )}
        />
      </button>

      {/* Content */}
      {isOpen && (
        <div className="px-4 pb-4 pt-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scroll('right')}
              className={cn(
                'w-8 h-8 shrink-0 flex items-center justify-center',
                'rounded-md text-gray-6',
                'hover:bg-gray-1 transition-colors',
                'focus:outline-none focus:ring-2 focus:ring-primary/40',
              )}
              aria-label="روزهای بعد"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <div
              ref={containerRef}
              className="flex-1 overflow-hidden py-1"
              dir="ltr"
            >
              <div
                ref={contentRef}
                className="flex items-stretch gap-1 transition-transform duration-300"
                style={{ transform: `translateX(${-scrollX}px)` }}
              >
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
                        'min-w-[80px] py-2 px-2 rounded-md shrink-0',
                        'transition-colors duration-200',
                        'focus:outline-none focus:ring-2 focus:ring-primary/40',
                        isSelected && 'bg-tint-1',
                        !isSelected && !isUnavailable && !isFull && 'hover:bg-gray-1',
                        (isUnavailable || isFull) && 'opacity-50 cursor-not-allowed',
                      )}
                      dir="rtl"
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

                      {isSelected && (
                        <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <button
              type="button"
              onClick={() => scroll('left')}
              className={cn(
                'w-8 h-8 shrink-0 flex items-center justify-center',
                'rounded-md text-gray-6',
                'hover:bg-gray-1 transition-colors',
                'focus:outline-none focus:ring-2 focus:ring-primary/40',
              )}
              aria-label="روزهای قبل"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}