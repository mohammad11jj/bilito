import { Outlet } from 'react-router';
import { Container } from '../../../shared/components/layout/Container';
import { UserSidebar } from './UserSidebar';

export function UserLayout() {
  return (
    <div className="bg-gray-1 min-h-screen py-6">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
          {/* Sidebar - Right in RTL */}
          <div className="lg:order-1">
            <UserSidebar />
          </div>

          {/* Main Content */}
          <main className="lg:order-2 min-w-0">
            <Outlet />
          </main>
        </div>
      </Container>
    </div>
  );
}