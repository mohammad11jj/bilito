import {
  forwardRef,
  type InputHTMLAttributes,
  type ReactNode,
} from 'react';
import { Check } from 'lucide-react';
import { cn } from '../../utils/cn';

type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  label?: ReactNode;
  error?: boolean;
  errorMessage?: string;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { label, error = false, errorMessage, className, disabled, id, ...rest },
    ref,
  ) => {
    const inputId = id || `checkbox-${Math.random().toString(36).slice(2, 9)}`;

    return (
      <div className="w-full">
        <label
          htmlFor={inputId}
          className={cn(
            'group inline-flex items-center gap-2 cursor-pointer',
            disabled && 'cursor-not-allowed opacity-50',
            className,
          )}
        >
          {/* Hidden native checkbox */}
          <input
            ref={ref}
            id={inputId}
            type="checkbox"
            disabled={disabled}
            className="sr-only"
            {...rest}
          />

          {/* Custom checkbox box */}
          <span
            className={cn(
              'shrink-0 w-5 h-5 rounded border-2 transition-colors duration-200',
              'flex items-center justify-center',
              // Normal
              !error &&
                !disabled &&
                'border-gray-3 bg-white group-hover:border-primary',
              // Checked
              'group-has-[:checked]:bg-primary group-has-[:checked]:border-primary',
              // Error
              error && 'border-error',
              // Disabled
              disabled && 'bg-gray-2 border-gray-3',
            )}
          >
            <Check
              className={cn(
                'w-3.5 h-3.5 text-white',
                'opacity-0 scale-50 transition-all duration-200',
                'group-has-[:checked]:opacity-100 group-has-[:checked]:scale-100',
              )}
              strokeWidth={3}
            />
          </span>

          {/* Label */}
          {label && (
            <span className="text-sm text-gray-8 select-none">{label}</span>
          )}
        </label>

        {/* Error Message */}
        {error && errorMessage && (
          <p className="text-error text-xs mt-1.5 text-start">{errorMessage}</p>
        )}
      </div>
    );
  },
);

Checkbox.displayName = 'Checkbox';