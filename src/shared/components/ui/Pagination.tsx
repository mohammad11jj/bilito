import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../utils/cn';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
  className?: string;
};

const DOTS = '...';

function getPageNumbers(
  current: number,
  total: number,
  siblingCount: number,
): (number | string)[] {
  // تعداد کل شماره‌هایی که می‌خوایم نشون بدیم (تقریبی)
  const totalNumbers = siblingCount * 2 + 5;

  // اگه تعداد صفحات کمه، همه رو نشون بده
  if (total <= totalNumbers) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const leftSibling = Math.max(current - siblingCount, 1);
  const rightSibling = Math.min(current + siblingCount, total);

  const showLeftDots = leftSibling > 2;
  const showRightDots = rightSibling < total - 1;

  // فقط سمت راست dots داریم
  if (!showLeftDots && showRightDots) {
    const leftRange = Array.from(
      { length: 3 + siblingCount * 2 },
      (_, i) => i + 1,
    );
    return [...leftRange, DOTS, total];
  }

  // فقط سمت چپ dots داریم
  if (showLeftDots && !showRightDots) {
    const rightRange = Array.from(
      { length: 3 + siblingCount * 2 },
      (_, i) => total - (3 + siblingCount * 2) + i + 1,
    );
    return [1, DOTS, ...rightRange];
  }

  // هر دو طرف dots داریم
  const middleRange = Array.from(
    { length: rightSibling - leftSibling + 1 },
    (_, i) => leftSibling + i,
  );
  return [1, DOTS, ...middleRange, DOTS, total];
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  className,
}: PaginationProps) {
  const pages = getPageNumbers(currentPage, totalPages, siblingCount);

  const baseButtonClass =
    'w-9 h-9 flex items-center justify-center rounded-md text-sm font-medium ' +
    'transition-colors duration-200 ' +
    'focus:outline-none focus:ring-2 focus:ring-primary/40 ' +
    'disabled:opacity-50 disabled:cursor-not-allowed';

  return (
    <nav
      className={cn('flex items-center justify-center gap-1', className)}
      aria-label="صفحه‌بندی"
    >
      {/* Previous (قبلی - در RTL: سمت راست) */}
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={cn(
          baseButtonClass,
          'border border-gray-3 text-gray-7 hover:bg-gray-1',
        )}
        aria-label="صفحه قبل"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Page Numbers */}
      {pages.map((page, index) => {
        // Dots
        if (page === DOTS) {
          return (
            <span
              key={`dots-${index}`}
              className="w-9 h-9 flex items-center justify-center text-gray-5 select-none"
            >
              ...
            </span>
          );
        }

        const pageNum = page as number;
        const isActive = pageNum === currentPage;

        return (
          <button
            key={pageNum}
            type="button"
            onClick={() => onPageChange(pageNum)}
            className={cn(
              baseButtonClass,
              isActive
                ? 'bg-primary text-white border border-primary'
                : 'border border-gray-3 text-gray-7 hover:bg-gray-1',
            )}
            aria-current={isActive ? 'page' : undefined}
            aria-label={`صفحه ${pageNum}`}
          >
            {pageNum.toLocaleString('fa-IR')}
          </button>
        );
      })}

      {/* Next (بعدی - در RTL: سمت چپ) */}
      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={cn(
          baseButtonClass,
          'border border-gray-3 text-gray-7 hover:bg-gray-1',
        )}
        aria-label="صفحه بعد"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
    </nav>
  );
}