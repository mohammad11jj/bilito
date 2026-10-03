import { Check, X, AlertTriangle, Info } from 'lucide-react';
import { cn } from '../../utils/cn';
import type { Toast as ToastType, ToastVariant } from '../../store/toastStore';

const variantConfig: Record<
  ToastVariant,
  {
    icon: typeof Check;
    bg: string;
    text: string;
    iconColor: string;
    border: string;
  }
> = {
  success: {
    icon: Check,
    bg: 'bg-success-light-2',
    text: 'text-success',
    iconColor: 'text-success',
    border: 'border-success-light-1',
  },
  error: {
    icon: X,
    bg: 'bg-error-light-2',
    text: 'text-error',
    iconColor: 'text-error',
    border: 'border-error-light-1',
  },
  warning: {
    icon: AlertTriangle,
    bg: 'bg-warning-light-2',
    text: 'text-warning',
    iconColor: 'text-warning',
    border: 'border-warning-light-1',
  },
  info: {
    icon: Info,
    bg: 'bg-tint-1',
    text: 'text-shade-1',
    iconColor: 'text-primary',
    border: 'border-tint-3',
  },
};

type ToastProps = {
  toast: ToastType;
  onClose: () => void;
};

export function Toast({ toast, onClose }: ToastProps) {
  const config = variantConfig[toast.variant];
  const Icon = config.icon;

  return (
    <div
      className={cn(
        'flex items-start gap-3 p-4 rounded-md border shadow-drop-4',
        'min-w-[300px] max-w-md',
        'animate-in slide-in-from-top-2 fade-in duration-300',
        config.bg,
        config.border,
      )}
      role="alert"
    >
      {/* Icon */}
      <div
        className={cn(
          'w-6 h-6 rounded-full flex items-center justify-center shrink-0',
          'bg-white/50',
        )}
      >
        <Icon className={cn('w-4 h-4', config.iconColor)} strokeWidth={3} />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 text-start">
        {toast.title && (
          <p className={cn('text-sm font-bold mb-1', config.text)}>
            {toast.title}
          </p>
        )}
        <p className={cn('text-xs leading-6', config.text)}>{toast.message}</p>
      </div>

      {/* Close */}
      <button
        type="button"
        onClick={onClose}
        className={cn(
          'w-6 h-6 rounded flex items-center justify-center shrink-0',
          'hover:bg-black/5 transition-colors',
          config.text,
        )}
        aria-label="بستن"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}