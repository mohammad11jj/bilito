import { useState } from 'react';
import { Wallet, Plus, Check, AlertTriangle, X } from 'lucide-react';
import { Input } from '../../../shared/components/ui/Input';
import { Button } from '../../../shared/components/ui/Button';
import { cn } from '../../../shared/utils/cn';

type PaymentStatus = 'idle' | 'success' | 'failed';

export function WalletPage() {
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState<PaymentStatus>('idle');

  const handleCharge = () => {
    const numAmount = Number(amount.replace(/,/g, ''));

    if (!numAmount || numAmount <= 0) {
      setStatus('failed');
      return;
    }

    // شبیه‌سازی: بعد از ۱ ثانیه موفق
    setTimeout(() => {
      setBalance(balance + numAmount);
      setAmount('');
      setStatus('success');

      // مخفی کردن Alert بعد از ۵ ثانیه
      setTimeout(() => setStatus('idle'), 5000);
    }, 1000);
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg font-bold text-gray-8">کیف پول</h1>
      </div>

      {/* Success Alert */}
      {status === 'success' && (
        <div className="bg-success-light-2 border border-success-light-1 rounded-lg p-4 mb-4 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-success flex items-center justify-center shrink-0">
            <Check className="w-4 h-4 text-white" />
          </div>
          <p className="text-sm text-success font-medium flex-1 text-start">
            موجودی کیف پول شما با موفقیت افزایش یافت.
          </p>
        </div>
      )}

      {/* Failed Alert */}
      {status === 'failed' && (
        <>
          <div className="bg-error-light-2 border border-error-light-1 rounded-lg p-4 mb-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-error flex items-center justify-center shrink-0">
              <X className="w-4 h-4 text-white" />
            </div>
            <p className="text-sm text-error font-medium flex-1 text-start">
              افزایش موجودی کیف پول ناموفق بود.
            </p>
          </div>

          <div className="bg-warning-light-2 border border-warning-light-1 rounded-lg p-4 mb-4 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-warning shrink-0 mt-0.5" />
            <div className="flex-1 text-xs text-warning leading-6 text-start">
              پرداخت شما ناموفق بود. اگر مبلغی از حسابتان کسر شده، ظرف مدت
              ۷۲ ساعت به حساب شما برمی‌گردد.
              <br />
              شماره پیگیری تراکنش: ۱۲۳۴۵۶۷۸۹۱۲۳
            </div>
          </div>
        </>
      )}

      {/* Wallet Card */}
      <div className="bg-white rounded-lg border border-gray-2 p-6">
        {/* Title */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <Wallet className="w-5 h-5 text-gray-8" />
          <h2 className="text-base font-bold text-gray-8">
            موجودی حساب کاربری
          </h2>
        </div>

        {/* Balance */}
        <div className="text-center mb-8">
          <p className="text-sm text-gray-5 mb-2">موجودی کیف پول شما</p>
          <p className="text-2xl font-bold text-gray-8">
            {balance.toLocaleString('fa-IR')} تومان
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-2 mb-6" />

        {/* Charge Form */}
        <div>
          <p className="text-sm font-medium text-gray-8 mb-4 text-start">
            افزایش موجودی
          </p>

          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-end">
            <div className="flex-1">
              <Input
                placeholder="مبلغ به تومان وارد شود."
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                type="text"
                dir="ltr"
                className="text-start"
              />
            </div>

            <Button
              onClick={handleCharge}
              leftIcon={<Plus className="w-4 h-4" />}
              className="h-10 px-6 whitespace-nowrap"
            >
              افزایش اعتبار
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}