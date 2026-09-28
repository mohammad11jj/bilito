import { useState, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

export type Tab = {
  id: string;
  label: string;
  icon?: ReactNode;
  content: ReactNode;
  disabled?: boolean;
};

type TabsVariant = 'line' | 'pill';

type TabsProps = {
  tabs: Tab[];
  defaultTab?: string;
  activeTab?: string;
  onChange?: (id: string) => void;
  variant?: TabsVariant;
  className?: string;
};

export function Tabs({
  tabs,
  defaultTab,
  activeTab,
  onChange,
  variant = 'line',
  className,
}: TabsProps) {
  const [internalTab, setInternalTab] = useState(defaultTab || tabs[0]?.id);
  const active = activeTab ?? internalTab;

  const handleChange = (id: string) => {
    setInternalTab(id);
    onChange?.(id);
  };

  const activeContent = tabs.find((t) => t.id === active)?.content;

  return (
    <div className={cn('w-full', className)}>
      {/* Tabs List */}
      <div
        className={cn(
          'flex items-center overflow-x-auto',
          variant === 'line' && 'gap-1 border-b border-gray-3',
          variant === 'pill' && 'gap-2 bg-gray-2 p-1 rounded-md',
        )}
        role="tablist"
      >
        {tabs.map((tab) => {
          const isActive = active === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              disabled={tab.disabled}
              onClick={() => handleChange(tab.id)}
              className={cn(
                'flex items-center gap-2 whitespace-nowrap text-sm font-medium',
                'transition-colors duration-200',
                'focus:outline-none focus:ring-2 focus:ring-primary/40',
                'disabled:opacity-50 disabled:cursor-not-allowed',
                'shrink-0',
                // Line variant
                variant === 'line' && 'px-4 py-3 -mb-px',
                variant === 'line' &&
                  isActive &&
                  'text-primary border-b-2 border-primary',
                variant === 'line' &&
                  !isActive &&
                  'text-gray-6 hover:text-gray-8 border-b-2 border-transparent',
                // Pill variant
                variant === 'pill' && 'px-4 py-2 rounded-sm',
                variant === 'pill' &&
                  isActive &&
                  'bg-white text-primary shadow-drop-1',
                variant === 'pill' &&
                  !isActive &&
                  'text-gray-6 hover:text-gray-8',
              )}
            >
              {tab.icon && <span className="shrink-0">{tab.icon}</span>}
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab Panel */}
      <div className="pt-4">{activeContent}</div>
    </div>
  );
}