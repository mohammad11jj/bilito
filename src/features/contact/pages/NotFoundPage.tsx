import { Link } from 'react-router';
import { ChevronLeft } from 'lucide-react';
import { Container } from '../../../shared/components/layout/Container';

export function NotFoundPage() {
  return (
    <Container>
      <div className="min-h-[70vh] flex flex-col items-center justify-center py-12 text-center">
        {/* 404 Image */}
        <div className="w-full max-w-md mb-8">
          <img
            src="/404.png"
            alt="۴۰۴"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-8 mb-4">
          صفحه‌ای که می‌خواستی اینجا نیست!
        </h1>

        {/* Description */}
        <p className="text-sm text-gray-6 leading-7 mb-8 max-w-md">
          برای پیدا کردن مسیر درست می‌تونی سری به صفحه اول بزنی.
        </p>

        {/* Back Button - icon on left, text on right */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-shade-1 transition-colors"
        >
          <span>بازگشت به صفحه اصلی</span>
          <ChevronLeft className="w-4 h-4" />
        </Link>
      </div>
    </Container>
  );
}