import { createBrowserRouter } from "react-router";
import { MainLayout } from "../../shared/components/layout/MainLayout";
import { HomePage } from "../../features/home/pages/HomePage";

function InsurancePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-primary text-start">
        بیمه مسافرتی
      </h1>
    </div>
  );
}

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
      { path: "/", element: <HomePage /> },
      { path: "/insurance", element: <InsurancePage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
