import { useState, useRef, useEffect } from 'react';
import * as jalaali from 'jalaali-js';
import { ChevronRight, ChevronLeft, Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '../../utils/cn';

// ===== ثابت‌ها =====
const PERSIAN_MONTHS = [
  'فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور',
  'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند',
];

const PERSIAN_WEEKDAYS = ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'];

// ===== Helper =====
function getTodayJalali() {
  const now = new Date();
  const { jy, jm, jd } = jalaali.toJalaali(
    now.getFullYear(),
    now.getMonth() + 1,
    now.getDate(),
  );
  return { jy, jm, jd };
}

function getDaysInJalaliMonth(jy: number, jm: number) {
  return jalaali.jalaaliMonthLength(jy, jm);
}

function getJalaliDayOfWeek(jy: number, jm: number, jd: number) {
  const { gy, gm, gd } = jalaali.toGregorian(jy, jm, jd);
  const date = new Date(gy, gm - 1, gd);
  const jsDayOfWeek = date.getDay();
  return (jsDayOfWeek + 1) % 7;
}

// ===== تایپ =====
type DatePickerFieldProps = {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  error?: boolean;
  errorMessage?: string;
  disabled?: boolean;
  className?: string;
  required?: boolean;
};

// ===== کامپوننت =====
export function DatePickerField({
  label,
  value,
  onChange,
  placeholder = 'انتخاب تاریخ',
  error = false,
  errorMessage,
  disabled = false,
  className,
  required = false,
}: DatePickerFieldProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const today = getTodayJalali();
  const [viewYear, setViewYear] = useState(today.jy);
  const [viewMonth, setViewMonth] = useState(today.jm);

  const [selectedDate, setSelectedDate] = useState<{
    jy: number;
    jm: number;
    jd: number;
  } | null>(null);

  useEffect(() => {
    if (value) {
      const [gy, gm, gd] = value.split('-').map(Number);
      const { jy, jm, jd } = jalaali.toJalaali(gy, gm, gd);
      setSelectedDate({ jy, jm, jd });
      setViewYear(jy);
      setViewMonth(jm);
    } else {
      setSelectedDate(null);
    }
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () =>
        document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen]);

  const formatDisplay = () => {
    if (!selectedDate) return '';
    return `${selectedDate.jy}/${String(selectedDate.jm).padStart(2, '0')}/${String(selectedDate.jd).padStart(2, '0')}`;
  };

  const handleSelectDay = (jd: number) => {
    const newDate = { jy: viewYear, jm: viewMonth, jd };
    setSelectedDate(newDate);

    const { gy, gm, gd } = jalaali.toGregorian(viewYear, viewMonth, jd);
    const isoDate = `${gy}-${String(gm).padStart(2, '0')}-${String(gd).padStart(2, '0')}`;
    onChange?.(isoDate);
    setIsOpen(false);
  };

  const goToPreviousMonth = () => {
    if (viewMonth === 1) {
      setViewMonth(12);
      setViewYear(viewYear - 1);
    } else {
      setViewMonth(viewMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (viewMonth === 12) {
      setViewMonth(1);
      setViewYear(viewYear + 1);
    } else {
      setViewMonth(viewMonth + 1);
    }
  };

  const daysInMonth = getDaysInJalaliMonth(viewYear, viewMonth);
  const firstDayOfWeek = getJalaliDayOfWeek(viewYear, viewMonth, 1);

  const days: (number | null)[] = [
    ...Array(firstDayOfWeek).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  while (days.length % 7 !== 0) {
    days.push(null);
  }

  const isToday = (jd: number) =>
    today.jy === viewYear && today.jm === viewMonth && today.jd === jd;

  const isSelected = (jd: number) =>
    selectedDate &&
    selectedDate.jy === viewYear &&
    selectedDate.jm === viewMonth &&
    selectedDate.jd === jd;

  return (
    <div className={cn('w-full relative', className)} ref={containerRef}>
      {label && (
        <label className="block text-sm font-medium text-gray-7 mb-2 text-start truncate">
          {label}
          {required && <span className="text-error mr-1">*</span>}
        </label>
      )}

      <button
        type="button"
        onClick={() => !disabled && setIsOpen((v) => !v)}
        disabled={disabled}
        className={cn(
          'w-full h-10 rounded-md border bg-white text-sm text-start',
          'px-3 pl-9 flex items-center',
          'transition-colors duration-200',
          'focus:outline-none focus:ring-2',
          disabled && 'bg-gray-2 cursor-not-allowed opacity-60',
          error
            ? 'border-error focus:border-error focus:ring-error/20'
            : 'border-gray-3 focus:border-primary focus:ring-primary/20',
        )}
      >
        {formatDisplay() || <span className="text-gray-5">{placeholder}</span>}
      </button>

      <CalendarIcon
        className={cn(
          'absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none',
          label && 'top-[calc(50%+12px)]',
          disabled ? 'text-gray-4' : 'text-gray-5',
        )}
      />

      {isOpen && (
        <div
          className={cn(
            'absolute top-full mt-2 right-0 z-50',
            'bg-white rounded-md border border-gray-2 shadow-drop-4',
            'p-4 w-70',
          )}
          dir="rtl"
        >
          <div className="flex items-center justify-between mb-4">
            <button
              type="button"
              onClick={goToPreviousMonth}
              className="w-8 h-8 rounded-md flex items-center justify-center hover:bg-gray-1 transition-colors"
              aria-label="ماه قبل"
            >
              <ChevronRight className="w-4 h-4 text-gray-7" />
            </button>

            <span className="text-sm font-bold text-gray-8">
              {PERSIAN_MONTHS[viewMonth - 1]} {viewYear}
            </span>

            <button
              type="button"
              onClick={goToNextMonth}
              className="w-8 h-8 rounded-md flex items-center justify-center hover:bg-gray-1 transition-colors"
              aria-label="ماه بعد"
            >
              <ChevronLeft className="w-4 h-4 text-gray-7" />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 mb-2">
            {PERSIAN_WEEKDAYS.map((day, idx) => (
              <span
                key={idx}
                className="text-center text-xs font-medium text-gray-5 py-1"
              >
                {day}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {days.map((day, idx) => {
              if (!day) return <span key={idx} />;

              const today_ = isToday(day);
              const selected = isSelected(day);

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSelectDay(day)}
                  className={cn(
                    'aspect-square rounded-md text-sm',
                    'flex items-center justify-center',
                    'transition-colors duration-150',
                    selected
                      ? 'bg-primary text-white font-bold'
                      : today_
                        ? 'bg-tint-2 text-primary font-bold'
                        : 'text-gray-8 hover:bg-tint-1 hover:text-primary',
                  )}
                >
                  {day.toLocaleString('fa-IR')}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {error && errorMessage && (
        <p className="text-error text-xs mt-1.5 text-start">{errorMessage}</p>
      )}
    </div>
  );
}