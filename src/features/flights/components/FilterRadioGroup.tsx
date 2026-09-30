import { Radio } from '../../../shared/components/ui/Radio';
import { cn } from '../../../shared/utils/cn';

export type RadioOption = {
  value: string;
  label: string;
  count?: number;
};

type FilterRadioGroupProps = {
  name: string;
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
};

export function FilterRadioGroup({
  name,
  options,
  value,
  onChange,
  className,
}: FilterRadioGroupProps) {
  return (
    <div className={cn('space-y-3', className)}>
      {options.map((option) => (
        <Radio
          key={option.value}
          name={name}
          value={option.value}
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
          checked={value === option.value}
          onChange={() => onChange(option.value)}
        />
      ))}
    </div>
  );
}