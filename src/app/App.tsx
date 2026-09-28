import { useState } from 'react';
import { Stepper } from '../shared/components/ui/Stepper';
import { Button } from '../shared/components/ui/Button';

const steps = [
  { id: 1, label: 'انتخاب بلیط' },
  { id: 2, label: 'مشخصات مسافران' },
  { id: 3, label: 'تایید و پرداخت' },
  { id: 4, label: 'صدور بلیط' },
];

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="min-h-screen bg-gray-1 p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-2xl font-bold text-primary text-start">
          تست کامپوننت Stepper
        </h1>

        {/* Stepper */}
        <div className="bg-white p-6 rounded-md shadow-card">
          <Stepper steps={steps} currentStep={currentStep} />
        </div>

        {/* Controls */}
        <div className="bg-white p-6 rounded-md shadow-card space-y-4">
          <p className="text-start text-gray-7">
            مرحله فعلی: <span className="font-bold text-primary">{currentStep}</span>
          </p>
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={() => setCurrentStep((s) => Math.max(1, s - 1))}
              disabled={currentStep === 1}
            >
              مرحله قبل
            </Button>
            <Button
              onClick={() =>
                setCurrentStep((s) => Math.min(steps.length, s + 1))
              }
              disabled={currentStep === steps.length}
            >
              مرحله بعد
            </Button>
          </div>
        </div>

        {/* Stepper در حالت‌های مختلف */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-start">
            حالت‌های مختلف Stepper
          </h2>

          <div className="bg-white p-6 rounded-md shadow-card space-y-2">
            <p className="text-start text-sm text-gray-5">مرحله ۱ (شروع):</p>
            <Stepper steps={steps} currentStep={1} />
          </div>

          <div className="bg-white p-6 rounded-md shadow-card space-y-2">
            <p className="text-start text-sm text-gray-5">مرحله ۲:</p>
            <Stepper steps={steps} currentStep={2} />
          </div>

          <div className="bg-white p-6 rounded-md shadow-card space-y-2">
            <p className="text-start text-sm text-gray-5">مرحله ۴ (پایان):</p>
            <Stepper steps={steps} currentStep={4} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;