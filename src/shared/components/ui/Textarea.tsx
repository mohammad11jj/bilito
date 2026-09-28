import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  error?: boolean;
  errorMessage?: string;
  helperText?: string;
  required?: boolean;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      error = false,
      errorMessage,
      helperText,
      required,
      className,
      disabled,
      rows = 4,
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

        {/* Textarea */}
        <textarea
          ref={ref}
          disabled={disabled}
          rows={rows}
          className={cn(
            // Base
            "w-full rounded-md border bg-white text-sm text-start",
            "px-3 py-2",
            "placeholder:text-gray-5",
            "transition-colors duration-200",
            "resize-y min-h-24",
            "focus:outline-none focus:ring-2",
            // Normal state
            !error &&
              !disabled &&
              "border-gray-3 focus:border-primary focus:ring-primary/20",
            // Error state
            error && "border-error focus:border-error focus:ring-error/20",
            // Disabled state
            disabled &&
              "bg-gray-2 text-gray-5 cursor-not-allowed border-gray-3 resize-none",
            className,
          )}
          {...rest}
        />

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

Textarea.displayName = "Textarea";
