import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router';
import { MainLayout } from '../../shared/components/layout/MainLayout';
import { PageLoader } from './PageLoader';
import {
  HomePage,
  SearchResultsPage,
  InsurancePage,
  InsuranceResultsPage,
  InsuranceBookingPage,
  UserLayout,
  ProfilePage,
  ProfileEditPage,
  TripsPage,
  TicketsPage,
  WalletPage,
  ContactPage,
  AboutPage,
  GuidePage,
  NotFoundPage,
} from './lazyPages';

// Helper: wrap element with Suspense
const withSuspense = (Component: React.ComponentType) => (
  <Suspense fallback={<PageLoader />}>
    <Component />
  </Suspense>
);

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      // Home
      { path: '/', element: withSuspense(HomePage) },

      // Flights
      { path: '/flights/search', element: withSuspense(SearchResultsPage) },

      // Insurance
      { path: '/insurance', element: withSuspense(InsurancePage) },
      { path: '/insurance/results', element: withSuspense(InsuranceResultsPage) },
      { path: '/insurance/booking', element: withSuspense(InsuranceBookingPage) },

      // User Panel (Nested)
      {
        element: withSuspense(UserLayout),
        children: [
          { path: '/profile', element: withSuspense(ProfilePage) },
          { path: '/profile/edit', element: withSuspense(ProfileEditPage) },
          { path: '/trips', element: withSuspense(TripsPage) },
          { path: '/tickets', element: withSuspense(TicketsPage) },
          { path: '/wallet', element: withSuspense(WalletPage) },
        ],
      },

      // Static Pages
      { path: '/contact', element: withSuspense(ContactPage) },
      { path: '/about', element: withSuspense(AboutPage) },
      { path: '/guide', element: withSuspense(GuidePage) },

      // 404
      { path: '*', element: withSuspense(NotFoundPage) },
    ],
  },
]);