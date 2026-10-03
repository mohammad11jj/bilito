import { useState } from 'react';
import { Wallet, Plus } from 'lucide-react';
import { Input } from '../../../shared/components/ui/Input';
import { Button } from '../../../shared/components/ui/Button';
import { toast } from '../../../shared/store/toastStore';
import { cn } from '../../../shared/utils/cn';

export function WalletPage() {
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleCharge = () => {
    const numAmount = Number(amount.replace(/,/g, ''));

    if (!numAmount || numAmount <= 0) {
      toast.error('لطفاً مبلغ معتبری وارد کنید', 'خطا');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setBalance(balance + numAmount);
      setAmount('');
      setIsLoading(false);
      toast.success('موجودی کیف پول شما با موفقیت افزایش یافت', 'موفقیت');
    }, 1000);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg font-bold text-gray-8">کیف پول</h1>
      </div>

      <div className="bg-white rounded-lg border border-gray-2 p-6">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Wallet className="w-5 h-5 text-gray-8" />
          <h2 className="text-base font-bold text-gray-8">
            موجودی حساب کاربری
          </h2>
        </div>

        <div className="text-center mb-8">
          <p className="text-sm text-gray-5 mb-2">موجودی کیف پول شما</p>
          <p className="text-2xl font-bold text-gray-8">
            {balance.toLocaleString('fa-IR')} تومان
          </p>
        </div>

        <div className="border-t border-gray-2 mb-6" />

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
              loading={isLoading}
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