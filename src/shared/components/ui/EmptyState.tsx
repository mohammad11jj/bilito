import { type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

type EmptyStateSize = 'sm' | 'md' | 'lg';

type EmptyStateProps = HTMLAttributes<HTMLDivElement> & {
  icon?: ReactNode;
  image?: ReactNode;
  title: string;
  description?: string;
  action?: ReactNode;
  size?: EmptyStateSize;
};

type SizeConfig = {
  icon: string;
  title: string;
  desc: string;
  pad: string;
};

const sizeClasses: Record<EmptyStateSize, SizeConfig> = {
  sm: {
    icon: 'w-12 h-12',
    title: 'text-base font-bold',
    desc: 'text-xs',
    pad: 'py-6',
  },
  md: {
    icon: 'w-16 h-16',
    title: 'text-lg font-bold',
    desc: 'text-sm',
    pad: 'py-10',
  },
  lg: {
    icon: 'w-24 h-24',
    title: 'text-xl font-bold',
    desc: 'text-base',
    pad: 'py-16',
  },
};

export function EmptyState({
  icon,
  image,
  title,
  description,
  action,
  size = 'md',
  className,
  ...rest
}: EmptyStateProps) {
  const sizes = sizeClasses[size];

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center text-center',
        sizes.pad,
        className,
      )}
      {...rest}
    >
      {/* Icon or Image */}
      {(icon || image) && (
        <div
          className={cn(
            'text-gray-4 mb-4 flex items-center justify-center',
            sizes.icon,
          )}
        >
          {image || icon}
        </div>
      )}

      {/* Title */}
      <h3 className={cn('text-gray-8 mb-2', sizes.title)}>{title}</h3>

      {/* Description */}
      {description && (
        <p className={cn('text-gray-5 mb-6 max-w-md leading-7', sizes.desc)}>
          {description}
        </p>
      )}

      {/* Action */}
      {action && <div>{action}</div>}
    </div>
  );
}