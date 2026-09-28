import {
  Info,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  X,
  type LucideIcon,
} from 'lucide-react';
import { type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

type AlertVariant = 'info' | 'success' | 'warning' | 'error';

type AlertProps = HTMLAttributes<HTMLDivElement> & {
  variant?: AlertVariant;
  title?: string;
  icon?: ReactNode;
  showIcon?: boolean;
  onClose?: () => void;
  action?: ReactNode;
  children?: ReactNode;
};

const variantClasses: Record<AlertVariant, string> = {
  info: 'bg-tint-1 text-shade-1',
  success: 'bg-success-light-2 text-success',
  warning: 'bg-warning-light-2 text-warning',
  error: 'bg-error-light-2 text-error',
};

const defaultIcons: Record<AlertVariant, LucideIcon> = {
  info: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  error: XCircle,
};

export function Alert({
  variant = 'info',
  title,
  icon,
  showIcon = true,
  onClose,
  action,
  children,
  className,
  ...rest
}: AlertProps) {
  const DefaultIcon = defaultIcons[variant];

  return (
    <div
      role="alert"
      className={cn(
        'flex items-start gap-3 p-4 rounded-md text-sm',
        variantClasses[variant],
        className,
      )}
      {...rest}
    >
      {/* Icon */}
      {showIcon && (
        <span className="shrink-0 mt-0.5">
          {icon || <DefaultIcon className="w-5 h-5" />}
        </span>
      )}

      {/* Content */}
      <div className="flex-1 text-start">
        {title && <p className="font-bold mb-1">{title}</p>}
        {children && <div className="leading-7">{children}</div>}
      </div>

      {/* Action */}
      {action && <div className="shrink-0">{action}</div>}

      {/* Close Button */}
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className={cn(
            'shrink-0 p-1 rounded transition-colors',
            'hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-current/30',
          )}
          aria-label="بستن"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}