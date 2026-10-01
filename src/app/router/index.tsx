import { createBrowserRouter } from 'react-router';
import { MainLayout } from '../../shared/components/layout/MainLayout';
import { HomePage } from '../../features/home/pages/HomePage';
import { SearchResultsPage } from '../../features/flights/pages/SearchResultsPage';
import { InsurancePage } from '../../features/insurance/pages/InsurancePage';
import { InsuranceResultsPage } from '../../features/insurance/pages/InsuranceResultsPage';


function NotFoundPage() {
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl font-bold text-primary mb-4">۴۰۴</h1>
      <p className="text-gray-7">صفحه‌ای که می‌خواستی اینجا نیست!</p>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/flights/search', element: <SearchResultsPage /> },
      { path: '/insurance', element: <InsurancePage /> },
      { path: '/insurance/results', element: <InsuranceResultsPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);