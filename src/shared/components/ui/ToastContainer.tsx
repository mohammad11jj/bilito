import { createPortal } from 'react-dom';
import { useToastStore } from '../../store/toastStore';
import { Toast } from './Toast';

export function ToastContainer() {
  const { toasts, removeToast } = useToastStore();

  if (toasts.length === 0) return null;

  return createPortal(
    <div
      className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] flex flex-col gap-2 pointer-events-none"
      aria-live="polite"
      aria-atomic="true"
    >
      {toasts.map((toast) => (
        <div key={toast.id} className="pointer-events-auto">
          <Toast toast={toast} onClose={() => removeToast(toast.id)} />
        </div>
      ))}
    </div>,
    document.body,
  );
}