import { AlertTriangle } from 'lucide-react';
import { Modal } from './Modal';
import { Button } from './Button';

type ConfirmDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  variant?: 'danger' | 'warning' | 'primary';
  isLoading?: boolean;
};

export function ConfirmDialog({
  isOpen,
  onClose,
  onConfirm,
  title = 'تایید عملیات',
  message,
  confirmText = 'تایید',
  cancelText = 'انصراف',
  variant = 'danger',
  isLoading = false,
}: ConfirmDialogProps) {
  const confirmVariant = variant === 'danger' ? 'danger' : 'primary';

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="sm"
      title={title}
      showCloseButton={false}
      footer={
        <>
          <Button
            variant="ghost"
            onClick={onClose}
            disabled={isLoading}
          >
            {cancelText}
          </Button>
          <Button
            variant={confirmVariant}
            onClick={onConfirm}
            loading={isLoading}
          >
            {confirmText}
          </Button>
        </>
      }
    >
      <div className="flex items-start gap-3">
        {variant === 'danger' && (
          <div className="w-10 h-10 rounded-full bg-error-light-2 flex items-center justify-center shrink-0">
            <AlertTriangle className="w-5 h-5 text-error" />
          </div>
        )}
        <p className="text-sm text-gray-7 leading-7 flex-1 text-start">
          {message}
        </p>
      </div>
    </Modal>
  );
}