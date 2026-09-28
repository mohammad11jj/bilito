import { Check } from 'lucide-react';
import { cn } from '../../utils/cn';

export type Step = {
  id: number;
  label: string;
};

type StepperProps = {
  steps: Step[];
  currentStep: number; // 1-based (1, 2, 3, ...)
  className?: string;
};

export function Stepper({ steps, currentStep, className }: StepperProps) {
  return (
    <div className={cn('w-full', className)}>
      <div className="flex items-start justify-between">
        {steps.map((step, index) => {
          const isCompleted = step.id < currentStep;
          const isCurrent = step.id === currentStep;
          const isPending = step.id > currentStep;

          return (
            <div
              key={step.id}
              className={cn(
                'flex items-start',
                index < steps.length - 1 && 'flex-1',
              )}
            >
              {/* Step Circle + Label */}
              <div className="flex flex-col items-center gap-2 shrink-0">
                {/* Circle */}
                <div
                  className={cn(
                    'w-8 h-8 rounded-full flex items-center justify-center',
                    'text-sm font-bold transition-colors duration-200',
                    // Completed
                    isCompleted && 'bg-primary text-white',
                    // Current
                    isCurrent && 'bg-primary text-white',
                    // Pending
                    isPending && 'bg-gray-2 text-gray-5 border border-gray-3',
                  )}
                >
                  {isCompleted ? (
                    <Check className="w-4 h-4" strokeWidth={3} />
                  ) : (
                    <span>{step.id}</span>
                  )}
                </div>

                {/* Label */}
                <span
                  className={cn(
                    'text-xs whitespace-nowrap',
                    isCompleted && 'text-primary font-medium',
                    isCurrent && 'text-primary font-bold',
                    isPending && 'text-gray-5',
                  )}
                >
                  {step.label}
                </span>
              </div>

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    'flex-1 h-0.5 mt-4 mx-2 transition-colors duration-200',
                    isCompleted ? 'bg-primary' : 'bg-gray-3',
                  )}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}