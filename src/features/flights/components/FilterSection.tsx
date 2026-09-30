import { useState, type ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../../shared/utils/cn';

type FilterSectionProps = {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
};

export function FilterSection({
  title,
  children,
  defaultOpen = true,
  className,
}: FilterSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={cn('border-b border-gray-2 pb-4 last:border-b-0', className)}>
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        className={cn(
          'w-full flex items-center justify-between py-3',
          'text-start',
          'focus:outline-none',
        )}
        aria-expanded={isOpen}
      >
        <span className="text-sm font-bold text-gray-8">{title}</span>
        <ChevronDown
          className={cn(
            'w-4 h-4 text-gray-6 transition-transform duration-200',
            isOpen && 'rotate-180',
          )}
        />
      </button>

      {isOpen && <div className="pt-2">{children}</div>}
    </div>
  );
}