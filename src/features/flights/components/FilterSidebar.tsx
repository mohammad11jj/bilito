import { useState } from 'react';
import { FilterSection } from './FilterSection';
import {
  FilterCheckboxGroup,
  type CheckboxOption,
} from './FilterCheckboxGroup';
import { FilterRadioGroup, type RadioOption } from './FilterRadioGroup';
import { FilterRangeSlider } from './FilterRangeSlider';
import { initialFilters, type FlightFilters } from '../types';
import { cn } from '../../../shared/utils/cn';

const airlineOptions: CheckboxOption[] = [
  { value: 'pegasus', label: 'Pegasus', count: 45 },
  { value: 'gulf', label: 'Gulf Air', count: 32 },
  { value: 'emirates', label: 'Emirates', count: 28 },
  { value: 'oman', label: 'Oman Air', count: 12 },
  { value: 'qatar', label: 'Qatar Airways', count: 8 },
  { value: 'flydubai', label: 'Flydubai', count: 15 },
];

const stopOptions: RadioOption[] = [
  { value: 'all', label: 'همه' },
  { value: 'direct', label: 'مستقیم' },
  { value: 'one', label: 'یک' },
  { value: 'two+', label: 'دو یا بیشتر' },
];

const airportOptions: CheckboxOption[] = [
  { value: 'IST-SAW', label: 'Istanbul - SAW' },
  { value: 'AMM', label: 'Amman - AMM' },
  { value: 'IST-IST', label: 'Istanbul - IST' },
  { value: 'DOH', label: 'Doha - DOH' },
  { value: 'MCT', label: 'Muscat - MCT' },
  { value: 'ATH', label: 'Athens - ATH' },
];

type FilterSidebarProps = {
  totalResults?: number;
  onApply?: (filters: FlightFilters) => void;
  className?: string;
};

/** تبدیل دقیقه به فرمت HH:MM */
function formatTime(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}

export function FilterSidebar({
  totalResults = 121,
  onApply,
  className,
}: FilterSidebarProps) {
  const [filters, setFilters] = useState<FlightFilters>(initialFilters);

  const updateFilter = <K extends keyof FlightFilters>(
    key: K,
    value: FlightFilters[K],
  ) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleClearAll = () => {
    setFilters(initialFilters);
  };

  const handleApply = () => {
    onApply?.(filters);
  };

  return (
    <div
      className={cn(
        'bg-white rounded-lg border border-gray-2',
        'lg:sticky lg:top-20',
        className,
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-2">
        <button
          type="button"
          onClick={handleClearAll}
          className="text-xs text-primary hover:text-shade-1 transition-colors"
        >
          پاک کردن فیلترها
        </button>

        <span className="text-sm font-medium text-gray-8">
          تعداد نتایج:{' '}
          <span className="text-primary font-bold">
            {totalResults.toLocaleString('fa-IR')}
          </span>
        </span>
      </div>

      {/* Filters */}
      <div className="p-4 max-h-[calc(100vh-200px)] overflow-y-auto space-y-1">
        {/* Price */}
        <FilterSection title="قیمت (تومان)">
          <FilterRangeSlider
            min={initialFilters.price.min}
            max={initialFilters.price.max}
            step={500000}
            values={[filters.price.min, filters.price.max]}
            onChange={(values) =>
              updateFilter('price', { min: values[0], max: values[1] })
            }
          />
        </FilterSection>

        {/* Departure Time */}
        <FilterSection title="زمان حرکت">
          <FilterRangeSlider
            min={0}
            max={1440}
            step={30}
            values={[
              filters.departureTime.min,
              filters.departureTime.max,
            ]}
            onChange={(values) =>
              updateFilter('departureTime', {
                min: values[0],
                max: values[1],
              })
            }
            formatValue={formatTime}
          />
        </FilterSection>

        {/* Airlines */}
        <FilterSection title="شرکت هواپیمایی">
          <FilterCheckboxGroup
            options={airlineOptions}
            selected={filters.airlines}
            onChange={(value) => updateFilter('airlines', value)}
          />
        </FilterSection>

        {/* Stops */}
        <FilterSection title="تعداد توقف">
          <FilterRadioGroup
            name="stops"
            options={stopOptions}
            value={filters.stops}
            onChange={(value) =>
              updateFilter('stops', value as FlightFilters['stops'])
            }
          />
        </FilterSection>

        {/* Airports */}
        <FilterSection title="فرودگاه">
          <FilterCheckboxGroup
            options={airportOptions}
            selected={filters.airports}
            onChange={(value) => updateFilter('airports', value)}
          />
        </FilterSection>
      </div>

      {/* Apply Button (Mobile) */}
      <div className="p-4 border-t border-gray-2 lg:hidden">
        <button
          type="button"
          onClick={handleApply}
          className={cn(
            'w-full py-3 rounded-md',
            'bg-primary text-white font-medium text-sm',
            'hover:bg-shade-1 transition-colors',
          )}
        >
          اعمال فیلترها
        </button>
      </div>
    </div>
  );
}