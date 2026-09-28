import { useState } from 'react';
import { Pagination } from '../shared/components/ui/Pagination';

function App() {
  const [page1, setPage1] = useState(1);
  const [page2, setPage2] = useState(5);
  const [page3, setPage3] = useState(10);
  const [page4, setPage4] = useState(50);

  return (
    <div className="min-h-screen bg-gray-1 p-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-2xl font-bold text-primary text-start">
          تست کامپوننت Pagination
        </h1>

        <div className="bg-white p-6 rounded-md shadow-card space-y-6">
          {/* ۵ صفحه - همه نشون داده می‌شن */}
          <div className="space-y-2">
            <p className="text-sm text-gray-5 text-start">
              ۵ صفحه (همه شماره‌ها):
            </p>
            <Pagination
              currentPage={page1}
              totalPages={5}
              onPageChange={setPage1}
            />
            <p className="text-xs text-gray-6 text-center">
              صفحه فعلی: {page1}
            </p>
          </div>

          {/* ۱۰ صفحه - صفحه ۵ */}
          <div className="space-y-2">
            <p className="text-sm text-gray-5 text-start">
              ۱۰ صفحه (صفحه جاری ۵):
            </p>
            <Pagination
              currentPage={page2}
              totalPages={10}
              onPageChange={setPage2}
            />
            <p className="text-xs text-gray-6 text-center">
              صفحه فعلی: {page2}
            </p>
          </div>

          {/* ۱۰ صفحه - صفحه آخر */}
          <div className="space-y-2">
            <p className="text-sm text-gray-5 text-start">
              ۱۰ صفحه (صفحه جاری ۱۰ - آخرین):
            </p>
            <Pagination
              currentPage={page3}
              totalPages={10}
              onPageChange={setPage3}
            />
            <p className="text-xs text-gray-6 text-center">
              صفحه فعلی: {page3}
            </p>
          </div>

          {/* ۱۰۰ صفحه */}
          <div className="space-y-2">
            <p className="text-sm text-gray-5 text-start">
              ۱۰۰ صفحه (صفحه جاری ۵۰):
            </p>
            <Pagination
              currentPage={page4}
              totalPages={100}
              onPageChange={setPage4}
            />
            <p className="text-xs text-gray-6 text-center">
              صفحه فعلی: {page4}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;