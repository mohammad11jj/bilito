import {
  forwardRef,
  type SelectHTMLAttributes,
} from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';

export type SelectOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  error?: boolean;
  errorMessage?: string;
  helperText?: string;
  options: SelectOption[];
  placeholder?: string;
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      error = false,
      errorMessage,
      helperText,
      options,
      placeholder,
      className,
      disabled,
      required,
      value,
      defaultValue,
      ...rest
    },
    ref,
  ) => {
    // چک می‌کنیم که آیا مقدار انتخاب شده (برای حالت placeholder)
    const hasValue = value !== undefined ? value !== '' : defaultValue !== undefined && defaultValue !== '';

    return (
      <div className="w-full">
        {/* Label */}
        {label && (
          <label className="block text-sm font-medium text-gray-7 mb-2 text-start">
            {label}
            {required && <span className="text-error mr-1">*</span>}
          </label>
        )}

        {/* Select Wrapper */}
        <div className="relative">
          {/* Select */}
          <select
            ref={ref}
            disabled={disabled}
            value={value}
            defaultValue={defaultValue}
            className={cn(
              // Base
              'w-full h-10 rounded-md border bg-white text-sm text-start',
              'appearance-none cursor-pointer',
              'pl-3 pr-10',
              'transition-colors duration-200',
              'focus:outline-none focus:ring-2',
              // رنگ متن: اگه placeholder نشون داده بشه، خاکستری
              !hasValue && placeholder && 'text-gray-5',
              // Normal
              !error &&
                !disabled &&
                'border-gray-3 focus:border-primary focus:ring-primary/20',
              // Error
              error && 'border-error focus:border-error focus:ring-error/20',
              // Disabled
              disabled &&
                'bg-gray-2 text-gray-5 cursor-not-allowed border-gray-3',
              className,
            )}
            {...rest}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>

          {/* Chevron Icon */}
          <ChevronDown
            className={cn(
              'absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none',
              disabled ? 'text-gray-4' : 'text-gray-5',
            )}
          />
        </div>

        {/* Error Message */}
        {error && errorMessage && (
          <p className="text-error text-xs mt-1.5 text-start">{errorMessage}</p>
        )}

        {/* Helper Text */}
        {!error && helperText && (
          <p className="text-gray-5 text-xs mt-1.5 text-start">{helperText}</p>
        )}
      </div>
    );
  },
);

Select.displayName = 'Select';