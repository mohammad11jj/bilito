import { Checkbox } from '../../../shared/components/ui/Checkbox';
import { cn } from '../../../shared/utils/cn';

export type CheckboxOption = {
  value: string;
  label: string;
  count?: number;
};

type FilterCheckboxGroupProps = {
  options: CheckboxOption[];
  selected: string[];
  onChange: (selected: string[]) => void;
  className?: string;
};

export function FilterCheckboxGroup({
  options,
  selected,
  onChange,
  className,
}: FilterCheckboxGroupProps) {
  const handleToggle = (value: string) => {
    if (selected.includes(value)) {
      onChange(selected.filter((v) => v !== value));
    } else {
      onChange([...selected, value]);
    }
  };

  return (
    <div className={cn('space-y-3', className)}>
      {options.map((option) => (
        <Checkbox
          key={option.value}
          label={
            <span className="flex items-center justify-between w-full">
              <span>{option.label}</span>
              {option.count !== undefined && (
                <span className="text-xs text-gray-5">
                  ({option.count.toLocaleString('fa-IR')})
                </span>
              )}
            </span>
          }
          checked={selected.includes(option.value)}
          onChange={() => handleToggle(option.value)}
        />
      ))}
    </div>
  );
}