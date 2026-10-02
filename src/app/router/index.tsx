import { createBrowserRouter } from 'react-router';
import { MainLayout } from '../../shared/components/layout/MainLayout';
import { HomePage } from '../../features/home/pages/HomePage';
import { SearchResultsPage } from '../../features/flights/pages/SearchResultsPage';
import { InsurancePage } from '../../features/insurance/pages/InsurancePage';
import { InsuranceResultsPage } from '../../features/insurance/pages/InsuranceResultsPage';
import { InsuranceBookingPage } from '../../features/insurance/pages/InsuranceBookingPage';
import { UserLayout } from '../../features/user/components/UserLayout';
import { ProfilePage } from '../../features/user/pages/ProfilePage';
import { ProfileEditPage } from '../../features/user/pages/ProfileEditPage';
import { TripsPage } from '../../features/user/pages/TripsPage';
import { TicketsPage } from '../../features/user/pages/TicketsPage';
import { WalletPage } from '../../features/user/pages/WalletPage';
import { ContactPage } from '../../features/contact/pages/ContactPage';
import { AboutPage } from '../../features/contact/pages/AboutPage';
import { NotFoundPage } from '../../features/contact/pages/NotFoundPage';
import { GuidePage } from '../../features/contact/pages/GuidePage';


export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      // Home
      { path: '/', element: <HomePage /> },

      // Flights
      { path: '/flights/search', element: <SearchResultsPage /> },

      // Insurance
      { path: '/insurance', element: <InsurancePage /> },
      { path: '/insurance/results', element: <InsuranceResultsPage /> },
      { path: '/insurance/booking', element: <InsuranceBookingPage /> },

      // User Panel (Nested inside MainLayout)
      {
        element: <UserLayout />,
        children: [
          { path: '/profile', element: <ProfilePage /> },
          { path: '/profile/edit', element: <ProfileEditPage /> },
          { path: '/trips', element: <TripsPage /> },
          { path: '/tickets', element: <TicketsPage /> },
          { path: '/wallet', element: <WalletPage /> },
        ],
      },

      // 404
      { path: '*', element: <NotFoundPage /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/guide', element: <GuidePage /> },
    ],
  },
]);