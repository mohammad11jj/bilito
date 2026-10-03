import { create } from 'zustand';

export type ToastVariant = 'success' | 'error' | 'warning' | 'info';

export type Toast = {
  id: string;
  message: string;
  title?: string;
  variant: ToastVariant;
  duration?: number;
};

type ToastState = {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, 'id'>) => void;
  removeToast: (id: string) => void;
  clearAll: () => void;
};

export const useToastStore = create<ToastState>((set) => ({
  toasts: [],

  addToast: (toast) => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
    const newToast: Toast = { ...toast, id };

    set((state) => ({
      toasts: [...state.toasts, newToast],
    }));

    // حذف خودکار بعد از duration
    const duration = toast.duration ?? 4000;
    if (duration > 0) {
      setTimeout(() => {
        set((state) => ({
          toasts: state.toasts.filter((t) => t.id !== id),
        }));
      }, duration);
    }
  },

  removeToast: (id) => {
    set((state) => ({
      toasts: state.toasts.filter((t) => t.id !== id),
    }));
  },

  clearAll: () => set({ toasts: [] }),
}));

/**
 * Helper: استفاده ساده‌تر
 */
export const toast = {
  success: (message: string, title?: string) =>
    useToastStore.getState().addToast({ message, title, variant: 'success' }),
  error: (message: string, title?: string) =>
    useToastStore.getState().addToast({ message, title, variant: 'error' }),
  warning: (message: string, title?: string) =>
    useToastStore.getState().addToast({ message, title, variant: 'warning' }),
  info: (message: string, title?: string) =>
    useToastStore.getState().addToast({ message, title, variant: 'info' }),
};