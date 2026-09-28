import { type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

type CardVariant = 'default' | 'outlined' | 'elevated';
type CardPadding = 'none' | 'sm' | 'md' | 'lg';

type CardProps = HTMLAttributes<HTMLDivElement> & {
  variant?: CardVariant;
  padding?: CardPadding;
  hoverable?: boolean;
  children: ReactNode;
};

const variantClasses: Record<CardVariant, string> = {
  default: 'bg-white shadow-card border border-gray-2',
  outlined: 'bg-white border border-gray-3',
  elevated: 'bg-white shadow-drop-4 border border-gray-2',
};

const paddingClasses: Record<CardPadding, string> = {
  none: '',
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-6',
};

export function Card({
  variant = 'default',
  padding = 'md',
  hoverable = false,
  children,
  className,
  ...rest
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-lg overflow-hidden',
        variantClasses[variant],
        padding !== 'none' && paddingClasses[padding],
        hoverable &&
          'transition-shadow duration-200 hover:shadow-drop-4 cursor-pointer',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

// ============================================
// Card Header
// ============================================
type CardSectionProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function CardHeader({ children, className, ...rest }: CardSectionProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-between p-4 border-b border-gray-2',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

// ============================================
// Card Body
// ============================================
export function CardBody({ children, className, ...rest }: CardSectionProps) {
  return (
    <div className={cn('p-4', className)} {...rest}>
      {children}
    </div>
  );
}

// ============================================
// Card Footer
// ============================================
export function CardFooter({ children, className, ...rest }: CardSectionProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-between p-4 border-t border-gray-2',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}