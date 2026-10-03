import { Skeleton } from '../../shared/components/ui/Skeleton';
import { Container } from '../../shared/components/layout/Container';

export function PageLoader() {
  return (
    <Container className="py-10">
      <div className="space-y-4">
        <Skeleton className="h-10 w-1/3" />
        <Skeleton className="h-40 w-full" />
        <Skeleton className="h-40 w-full" />
      </div>
    </Container>
  );
}