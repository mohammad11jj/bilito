import {
  forwardRef,
  type InputHTMLAttributes,
  type ReactNode,
} from 'react';
import { cn } from '../../utils/cn';

type RadioProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  label?: ReactNode;
  error?: boolean;
  errorMessage?: string;
};

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    { label, error = false, errorMessage, className, disabled, id, ...rest },
    ref,
  ) => {
    const inputId = id || `radio-${Math.random().toString(36).slice(2, 9)}`;

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
          {/* Hidden native radio */}
          <input
            ref={ref}
            id={inputId}
            type="radio"
            disabled={disabled}
            className="sr-only"
            {...rest}
          />

          {/* Custom radio circle */}
          <span
            className={cn(
              'shrink-0 w-5 h-5 rounded-full border-2 transition-colors duration-200',
              'flex items-center justify-center',
              // Normal
              !error &&
                !disabled &&
                'border-gray-3 bg-white group-hover:border-primary',
              // Checked → حاشیه آبی
              'group-has-[:checked]:border-primary',
              // Error
              error && 'border-error',
              // Disabled
              disabled && 'bg-gray-2 border-gray-3',
            )}
          >
            {/* Inner dot */}
            <span
              className={cn(
                'w-2.5 h-2.5 rounded-full bg-primary',
                'opacity-0 scale-0 transition-all duration-200',
                'group-has-[:checked]:opacity-100 group-has-[:checked]:scale-100',
                error && 'bg-error',
              )}
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

Radio.displayName = 'Radio';