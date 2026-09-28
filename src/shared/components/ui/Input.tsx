import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: boolean;
  errorMessage?: string;
  helperText?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  required?: boolean;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error = false,
      errorMessage,
      helperText,
      leftIcon,
      rightIcon,
      required,
      className,
      disabled,
      ...rest
    },
    ref,
  ) => {
    return (
      <div className="w-full">
        {/* Label */}
        {label && (
          <label className="block text-sm font-medium text-gray-7 mb-2 text-start">
            {label}
            {required && <span className="text-error mr-1">*</span>}
          </label>
        )}

        {/* Input Wrapper */}
        <div className="relative">
          {/* Left Icon */}
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-5 pointer-events-none">
              {leftIcon}
            </div>
          )}

          {/* Input */}
          <input
            ref={ref}
            disabled={disabled}
            className={cn(
              // Base
              'w-full h-10 rounded-md border bg-white text-sm text-start',
              'placeholder:text-gray-5',
              'transition-colors duration-200',
              'focus:outline-none focus:ring-2',
              // Padding (اگه آیکون داشت، بیشتر)
              leftIcon ? 'pl-10' : 'pl-3',
              rightIcon ? 'pr-10' : 'pr-3',
              // Normal state
              !error &&
                !disabled &&
                'border-gray-3 focus:border-primary focus:ring-primary/20',
              // Error state
              error &&
                'border-error focus:border-error focus:ring-error/20',
              // Disabled state
              disabled && 'bg-gray-2 text-gray-5 cursor-not-allowed border-gray-3',
              className,
            )}
            {...rest}
          />

          {/* Right Icon */}
          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-5">
              {rightIcon}
            </div>
          )}
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

Input.displayName = 'Input';