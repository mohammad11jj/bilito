import { type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

type SkeletonVariant = 'rectangular' | 'circular' | 'text';
type SkeletonAnimation = 'pulse' | 'none';

type SkeletonProps = HTMLAttributes<HTMLDivElement> & {
  variant?: SkeletonVariant;
  animation?: SkeletonAnimation;
  width?: string | number;
  height?: string | number;
};

const variantClasses: Record<SkeletonVariant, string> = {
  rectangular: 'rounded-md',
  circular: 'rounded-full',
  text: 'rounded-sm h-4',
};

export function Skeleton({
  variant = 'rectangular',
  animation = 'pulse',
  width,
  height,
  className,
  style,
  ...rest
}: SkeletonProps) {
  return (
    <div
      className={cn(
        'bg-gray-2',
        variantClasses[variant],
        animation === 'pulse' && 'animate-pulse',
        className,
      )}
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        ...style,
      }}
      aria-hidden="true"
      {...rest}
    />
  );
}