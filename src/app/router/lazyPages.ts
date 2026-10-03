import { lazy } from 'react';

export const HomePage = lazy(() =>
  import('../../features/home/pages/HomePage').then((m) => ({
    default: m.HomePage,
  })),
);

export const SearchResultsPage = lazy(() =>
  import('../../features/flights/pages/SearchResultsPage').then((m) => ({
    default: m.SearchResultsPage,
  })),
);

export const InsurancePage = lazy(() =>
  import('../../features/insurance/pages/InsurancePage').then((m) => ({
    default: m.InsurancePage,
  })),
);

export const InsuranceResultsPage = lazy(() =>
  import('../../features/insurance/pages/InsuranceResultsPage').then((m) => ({
    default: m.InsuranceResultsPage,
  })),
);

export const InsuranceBookingPage = lazy(() =>
  import('../../features/insurance/pages/InsuranceBookingPage').then((m) => ({
    default: m.InsuranceBookingPage,
  })),
);

export const UserLayout = lazy(() =>
  import('../../features/user/components/UserLayout').then((m) => ({
    default: m.UserLayout,
  })),
);

export const ProfilePage = lazy(() =>
  import('../../features/user/pages/ProfilePage').then((m) => ({
    default: m.ProfilePage,
  })),
);

export const ProfileEditPage = lazy(() =>
  import('../../features/user/pages/ProfileEditPage').then((m) => ({
    default: m.ProfileEditPage,
  })),
);

export const TripsPage = lazy(() =>
  import('../../features/user/pages/TripsPage').then((m) => ({
    default: m.TripsPage,
  })),
);

export const TicketsPage = lazy(() =>
  import('../../features/user/pages/TicketsPage').then((m) => ({
    default: m.TicketsPage,
  })),
);

export const WalletPage = lazy(() =>
  import('../../features/user/pages/WalletPage').then((m) => ({
    default: m.WalletPage,
  })),
);

export const ContactPage = lazy(() =>
  import('../../features/contact/pages/ContactPage').then((m) => ({
    default: m.ContactPage,
  })),
);

export const AboutPage = lazy(() =>
  import('../../features/contact/pages/AboutPage').then((m) => ({
    default: m.AboutPage,
  })),
);

export const GuidePage = lazy(() =>
  import('../../features/contact/pages/GuidePage').then((m) => ({
    default: m.GuidePage,
  })),
);

export const NotFoundPage = lazy(() =>
  import('../../features/contact/pages/NotFoundPage').then((m) => ({
    default: m.NotFoundPage,
  })),
);