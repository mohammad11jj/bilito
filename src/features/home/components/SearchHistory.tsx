import { Clock, X } from 'lucide-react';
import { Container } from '../../../shared/components/layout/Container';
import { cn } from '../../../shared/utils/cn';

type SearchHistoryItem = {
  id: string;
  origin: string;
  destination: string;
};

type SearchHistoryProps = {
  items: SearchHistoryItem[];
  onSelect?: (item: SearchHistoryItem) => void;
  onRemove?: (id: string) => void;
  onClearAll?: () => void;
  className?: string;
};

export function SearchHistory({
  items,
  onSelect,
  onRemove,
  onClearAll,
  className,
}: SearchHistoryProps) {
  if (items.length === 0) return null;

  return (
    <Container className={cn('mt-10', className)}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-gray-7">
          <Clock className="w-4 h-4" />
          <span className="text-sm font-medium">تاریخچه جستجو</span>
        </div>

        {onClearAll && (
          <button
            type="button"
            onClick={onClearAll}
            className="text-xs text-gray-5 hover:text-error transition-colors"
          >
            پاک کردن همه
          </button>
        )}
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {items.map((item) => (
          <div
            key={item.id}
            className={cn(
              'group flex items-center gap-2 shrink-0',
              'bg-white border border-gray-2 rounded-md',
              'px-3 py-2 text-sm',
              'hover:border-primary hover:bg-tint-1',
              'transition-colors duration-200 cursor-pointer',
            )}
            onClick={() => onSelect?.(item)}
          >
            <span className="text-gray-7 group-hover:text-primary transition-colors">
              {item.origin} به {item.destination}
            </span>

            {onRemove && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onRemove(item.id);
                }}
                className={cn(
                  'w-5 h-5 rounded-full flex items-center justify-center',
                  'text-gray-5 hover:text-error hover:bg-error-light-2',
                  'transition-colors',
                )}
                aria-label="حذف از تاریخچه"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        ))}
      </div>
    </Container>
  );
}