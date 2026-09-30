import { ChevronDown, SlidersHorizontal } from 'lucide-react';
import { cn } from '../../../shared/utils/cn';

export type SortOption =
  | 'default'
  | 'cheapest'
  | 'fastest'
  | 'earliest'
  | 'latest';

type SortDropdownProps = {
  value: SortOption;
  onChange: (value: SortOption) => void;
  onFilterClick?: () => void;
  className?: string;
};

const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'default', label: 'پیش‌فرض' },
  { value: 'cheapest', label: 'ارزان‌ترین' },
  { value: 'fastest', label: 'سریع‌ترین' },
  { value: 'earliest', label: 'زودترین' },
  { value: 'latest', label: 'دیرترین' },
];

export function SortDropdown({
  value,
  onChange,
  onFilterClick,
  className,
}: SortDropdownProps) {
  const activeOption = sortOptions.find((opt) => opt.value === value);

  return (
    <div className={cn('flex items-center gap-2', className)}>
      {/* Sort Dropdown */}
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value as SortOption)}
          className={cn(
            'h-10 pr-4 pl-9 rounded-md border border-gray-3 bg-white',
            'text-sm font-medium text-gray-8',
            'appearance-none cursor-pointer',
            'transition-colors duration-200',
            'focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20',
            'min-w-[160px]',
          )}
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              مرتب‌سازی: {option.label}
            </option>
          ))}
        </select>

        <ChevronDown
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-5 pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* Filter Button (Mobile) */}
      {onFilterClick && (
        <button
          type="button"
          onClick={onFilterClick}
          className={cn(
            'lg:hidden h-10 px-4 rounded-md',
            'flex items-center gap-2',
            'border border-gray-3 bg-white text-gray-7',
            'text-sm font-medium',
            'hover:bg-gray-1 transition-colors',
            'focus:outline-none focus:ring-2 focus:ring-primary/40',
          )}
        >
          <SlidersHorizontal className="w-4 h-4" />
          فیلترها
        </button>
      )}
    </div>
  );
}