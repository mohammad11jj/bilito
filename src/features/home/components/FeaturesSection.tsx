import { Monitor, Headphones, Globe, PenLine } from 'lucide-react';
import { Container } from '../../../shared/components/layout/Container';
import { cn } from '../../../shared/utils/cn';

type Feature = {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
};

const features: Feature[] = [
  {
    id: 'easy-access',
    title: 'دسترسی آسان و راحت',
    icon: Monitor,
  },
  {
    id: 'support',
    title: 'پاسخگویی ۲۴ ساعته',
    icon: Headphones,
  },
  {
    id: 'online',
    title: 'خدمات آنلاین',
    icon: Globe,
  },
  {
    id: 'best-price',
    title: 'کمترین نرخ خرید بلیط',
    icon: PenLine,
  },
];

type FeaturesSectionProps = {
  className?: string;
};

export function FeaturesSection({ className }: FeaturesSectionProps) {
  return (
    <Container className={cn('mt-12 mb-12', className)}>
      <div className="bg-tint-1 rounded-2xl p-6 lg:p-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="flex flex-col items-center gap-3 text-center"
              >
                {/* Icon Box */}
                <div
                  className={cn(
                    'w-16 h-16 rounded-2xl flex items-center justify-center',
                    'bg-white border border-tint-3',
                    'transition-transform duration-200',
                  )}
                >
                  <Icon className="w-7 h-7 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold text-gray-8">
                  {feature.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}