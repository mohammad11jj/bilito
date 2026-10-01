import { Shield } from 'lucide-react';
import { Badge } from '../../../shared/components/ui/Badge';
import { Button } from '../../../shared/components/ui/Button';
import { cn } from '../../../shared/utils/cn';
import type { InsurancePlan } from '../types';

type InsuranceCardProps = {
  plan: InsurancePlan;
  onDetailsClick?: (id: string) => void;
  className?: string;
};

export function InsuranceCard({
  plan,
  onDetailsClick,
  className,
}: InsuranceCardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-lg border border-gray-2 p-5',
        'transition-colors duration-200',
        'hover:border-primary',
        className,
      )}
    >
      {/* Main Row: Left Column (Price + Button) + Rest */}
      <div className="flex items-start justify-between gap-6">
        {/* Right Side: Company + Plan + Coverage Info + Chips */}
        <div className="flex-1 min-w-0">
          {/* Row 1: Company + Plan */}
          <div className="flex items-center justify-between gap-4 mb-4">
            {/* Company */}
            <div className="flex items-center gap-2 shrink-0">
              {plan.company.logo ? (
                <img
                  src={plan.company.logo}
                  alt={plan.company.name}
                  className="w-10 h-10 object-contain shrink-0"
                />
              ) : (
                <div className="w-10 h-10 rounded-md bg-tint-1 flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
              )}
              <span className="text-sm font-bold text-gray-8">
                {plan.company.name}
              </span>
            </div>

            {/* Plan Name */}
            <div className="text-center">
              <span className="text-sm font-bold text-gray-8">
                {plan.planName}
              </span>
            </div>
          </div>

          {/* Row 2: Coverage Info */}
          <div className="flex items-center justify-between gap-4 mb-4 text-xs text-gray-7">
            <div className="flex items-center gap-1.5">
              <span>شرکت کمک رسان:</span>
              <span className="font-bold text-gray-8">Mideast Assistance</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span>سطح پوشش:</span>
              <span className="font-bold text-gray-8">{plan.coverageLevel}</span>
            </div>
          </div>

          {/* Row 3: Coverages (Chips) */}
          {plan.coverages.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {plan.coverages.map((coverage, idx) => (
                <Badge key={idx} variant="info" size="sm">
                  {coverage}
                </Badge>
              ))}
            </div>
          )}
        </div>

        {/* Left Side: Price (Top) + Button (Bottom) */}
        <div className="flex flex-col items-end gap-3 shrink-0 min-w-[160px]">
          {/* Price */}
          <span className="text-base font-bold text-primary whitespace-nowrap">
            {plan.price.toLocaleString('fa-IR')} تومان
          </span>

          {/* Button */}
          <Button
            onClick={() => onDetailsClick?.(plan.id)}
            fullWidth
            className="h-10"
          >
            جزئیات طرح
          </Button>
        </div>
      </div>
    </div>
  );
}