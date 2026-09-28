import { useState, type ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';

export type AccordionItem = {
  id: string;
  title: string;
  content: ReactNode;
  disabled?: boolean;
};

type AccordionProps = {
  items: AccordionItem[];
  type?: 'single' | 'multiple';
  defaultOpen?: string[];
  className?: string;
};

export function Accordion({
  items,
  type = 'single',
  defaultOpen = [],
  className,
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>(defaultOpen);

  const toggle = (id: string) => {
    if (type === 'single') {
      setOpenItems(openItems.includes(id) ? [] : [id]);
    } else {
      setOpenItems(
        openItems.includes(id)
          ? openItems.filter((i) => i !== id)
          : [...openItems, id],
      );
    }
  };

  return (
    <div className={cn('space-y-2', className)}>
      {items.map((item) => {
        const isOpen = openItems.includes(item.id);

        return (
          <div
            key={item.id}
            className={cn(
              'border border-gray-3 rounded-md bg-white overflow-hidden',
              item.disabled && 'opacity-50',
            )}
          >
            {/* Trigger */}
            <button
              type="button"
              onClick={() => !item.disabled && toggle(item.id)}
              disabled={item.disabled}
              aria-expanded={isOpen}
              className={cn(
                'w-full flex items-center justify-between gap-3',
                'p-4 text-start',
                'transition-colors duration-200',
                'focus:outline-none focus:ring-2 focus:ring-primary/40',
                !item.disabled && 'hover:bg-gray-1',
                item.disabled && 'cursor-not-allowed',
              )}
            >
              <span className="text-sm font-medium text-gray-8 flex-1">
                {item.title}
              </span>
              <ChevronDown
                className={cn(
                  'w-5 h-5 shrink-0 text-gray-6',
                  'transition-transform duration-200',
                  isOpen && 'rotate-180 text-primary',
                )}
              />
            </button>

            {/* Content */}
            {isOpen && (
              <div className="px-4 pb-4 pt-0 text-sm text-gray-7 leading-7 text-start border-t border-gray-2">
                <div className="pt-4">{item.content}</div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}