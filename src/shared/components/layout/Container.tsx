import { type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Container({ children, className, ...rest }: ContainerProps) {
  return (
    <div
      className={cn('w-full max-w-6xl mx-auto px-4', className)}
      {...rest}
    >
      {children}
    </div>
  );
}