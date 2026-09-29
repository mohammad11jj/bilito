import { Container } from '../../../shared/components/layout/Container';
import { cn } from '../../../shared/utils/cn';

type Destination = {
  id: string;
  title: string;
  ctaLabel: string;
  image: string;
};

const topDestinations: Destination[] = [
  {
    id: 'kish',
    title: 'بهترین فصل شنا',
    ctaLabel: 'خرید بلیط پروازهای کیش',
    image: '/destinations/kish.png',
  },
  {
    id: 'turkey',
    title: 'سفر به ترکیه',
    ctaLabel: 'خرید بلیط پروازهای ترکیه',
    image: '/destinations/turkey.png',
  },
];

const sideDestinations: Destination[] = [
  {
    id: 'shiraz',
    title: 'دنیایی از تاریخ و هنر',
    ctaLabel: 'خرید بلیط پروازهای شیراز',
    image: '/destinations/shiraz.png',
  },
  {
    id: 'dubai',
    title: 'شگفتی در صحرا',
    ctaLabel: 'خرید بلیط پروازهای دبی',
    image: '/destinations/dubai.png',
  },
];

type PopularDestinationsProps = {
  onSelect?: (id: string) => void;
  className?: string;
};

export function PopularDestinations({
  onSelect,
  className,
}: PopularDestinationsProps) {
  return (
    <Container className={cn('mt-12', className)}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <DestinationCard
          destination={topDestinations[0]}
          onSelect={onSelect}
          height="h-72"
          size="normal"
        />

        <DestinationCard
          destination={topDestinations[1]}
          onSelect={onSelect}
          height="h-72"
          size="normal"
        />

        <div className="flex flex-col gap-4">
          <DestinationCard
            destination={sideDestinations[0]}
            onSelect={onSelect}
            height="h-[8.5rem]"
            size="small"
          />
          <DestinationCard
            destination={sideDestinations[1]}
            onSelect={onSelect}
            height="h-[8.5rem]"
            size="small"
          />
        </div>
      </div>
    </Container>
  );
}

// ===== Destination Card =====
type DestinationCardProps = {
  destination: Destination;
  onSelect?: (id: string) => void;
  height: string;
  size?: 'normal' | 'small';
};

function DestinationCard({
  destination,
  onSelect,
  height,
  size = 'normal',
}: DestinationCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect?.(destination.id)}
      className={cn(
        'group relative w-full rounded-xl overflow-hidden',
        'text-start transition-transform duration-300',
        'hover:scale-[1.02]',
        'focus:outline-none focus:ring-2 focus:ring-primary/40',
        height,
      )}
    >
      <img
        src={destination.image}
        alt={destination.title}
        className={cn(
          'absolute inset-0 w-full h-full object-cover object-center',
          'transition-transform duration-500 group-hover:scale-110',
        )}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      <div className="relative h-full flex flex-col justify-end items-start p-4">
        <h3
          className={cn(
            'text-white font-bold mb-2',
            size === 'normal' ? 'text-lg' : 'text-sm',
          )}
        >
          {destination.title}
        </h3>

        <span
          className={cn(
            'inline-block rounded-md',
            'bg-white/10 backdrop-blur-sm border border-white/40',
            'text-white font-medium',
            'transition-colors duration-200',
            'group-hover:bg-white group-hover:text-gray-9',
            size === 'normal'
              ? 'px-3 py-2 text-xs'
              : 'px-2 py-1 text-[11px]',
          )}
        >
          {destination.ctaLabel}
        </span>
      </div>
    </button>
  );
}