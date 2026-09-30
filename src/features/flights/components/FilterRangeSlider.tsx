import { Range, getTrackBackground } from 'react-range';
import { cn } from '../../../shared/utils/cn';

type FilterRangeSliderProps = {
  min: number;
  max: number;
  step?: number;
  values: [number, number];
  onChange: (values: [number, number]) => void;
  /** فرمت نمایش اعداد (پیش‌فرض: با کاما و فارسی) */
  formatValue?: (value: number) => string;
  className?: string;
};

export function FilterRangeSlider({
  min,
  max,
  step = 1,
  values,
  onChange,
  formatValue = (v) => v.toLocaleString('fa-IR'),
  className,
}: FilterRangeSliderProps) {
  return (
    <div className={cn('w-full', className)} dir="ltr">
      <Range
        values={values}
        step={step}
        min={min}
        max={max}
        onChange={(vals) => onChange(vals as [number, number])}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            className="h-1.5 w-full rounded-full my-3"
            style={{
              ...props.style,
              background: getTrackBackground({
                values,
                colors: ['#DFDFDF', '#1D91CC', '#DFDFDF'],
                min,
                max,
              }),
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            className={cn(
              'w-4 h-4 rounded-full bg-white',
              'border-2 border-primary shadow-drop-2',
              'focus:outline-none focus:ring-2 focus:ring-primary/40',
            )}
            style={{ ...props.style }}
          />
        )}
      />

      {/* Values */}
      <div className="flex items-center justify-between mt-3 text-xs text-gray-7">
        <span>{formatValue(values[0])}</span>
        <span>{formatValue(values[1])}</span>
      </div>
    </div>
  );
}