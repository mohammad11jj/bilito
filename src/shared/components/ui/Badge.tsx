import { type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

type BadgeVariant =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'error'
  | 'info';

type BadgeSize = 'sm' | 'md';

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
  size?: BadgeSize;
  pill?: boolean;
  icon?: ReactNode;
  children: ReactNode;
};

const variantClasses: Record<BadgeVariant, string> = {
  default: 'bg-gray-2 text-gray-7',
  primary: 'bg-tint-1 text-primary',
  success: 'bg-success-light-2 text-success',
  warning: 'bg-warning-light-2 text-warning',
  error: 'bg-error-light-2 text-error',
  info: 'bg-tint-2 text-shade-1',
};

const sizeClasses: Record<BadgeSize, string> = {
  sm: 'h-5 px-2 text-xs gap-1',
  md: 'h-6 px-3 text-sm gap-1.5',
};

export function Badge({
  variant = 'default',
  size = 'md',
  pill = false,
  icon,
  children,
  className,
  ...rest
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center font-medium whitespace-nowrap',
        sizeClasses[size],
        variantClasses[variant],
        pill ? 'rounded-full' : 'rounded-md',
        className,
      )}
      {...rest}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
}