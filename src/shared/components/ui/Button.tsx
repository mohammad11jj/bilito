import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "../../utils/cn";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-primary text-white hover:bg-shade-1 active:bg-shade-2",
  secondary: "bg-tint-1 text-primary hover:bg-tint-2 active:bg-tint-3",
  outline:
    "border border-primary text-primary bg-white hover:bg-tint-1 active:bg-tint-2",
  ghost: "bg-transparent text-gray-7 hover:bg-gray-2 active:bg-gray-3",
  danger: "bg-error text-white hover:bg-error-light-1 active:bg-error",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-xs gap-1.5",
  md: "h-10 px-4 text-sm gap-2",
  lg: "h-12 px-6 text-base gap-2.5",
};

export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  className,
  children,
  disabled,
  ...rest
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium cursor-pointer",
        "transition-colors duration-200",
        "focus:outline-none focus:ring-2 focus:ring-primary/40",
        sizeClasses[size],
        variantClasses[variant],
        fullWidth && "w-full",
        isDisabled && "opacity-50 cursor-not-allowed",
        className,
      )}
      disabled={isDisabled}
      {...rest}
    >
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : (
        leftIcon && <span className="shrink-0">{leftIcon}</span>
      )}

      {children && <span>{children}</span>}

      {rightIcon && !loading && <span className="shrink-0">{rightIcon}</span>}
    </button>
  );
}
