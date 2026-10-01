import { useState } from 'react';
import { Container } from '../../../shared/components/layout/Container';
import { InsuranceCard } from '../components/InsuranceCard';
import { InsuranceInfoModal } from '../components/InsuranceInfoModal';
import type { InsurancePlan } from '../types';

// دیتای نمونه
const mockPlans: InsurancePlan[] = [
  {
    id: '1',
    company: { name: 'بیمه سامان' },
    planName: 'طرح اقتصادی',
    coverageLevel: '۵,۰۰۰ یورو',
    coverageLimit: 5000,
    coverages: ['پوشش کرونا', 'پوشش آتش سوزی', 'همه کشورهای جهان'],
    price: 3341046,
    features: [
      'پرداخت هزینه بستری شدن در بیمارستان و معالجات پزشکی',
      'پرداخت هزینه فوریت‌های دندانپزشکی',
      'انتقال بیمه شده به نزدیک‌ترین مرکز درمانی',
    ],
  },
  {
    id: '2',
    company: { name: 'بیمه تعاون' },
    planName: 'طرح ویژه',
    coverageLevel: '۱۰,۰۰۰ یورو',
    coverageLimit: 10000,
    coverages: ['پوشش کرونا', 'پوشش آتش سوزی', 'همه کشورهای جهان'],
    price: 4500000,
    features: [
      'پرداخت هزینه بستری شدن در بیمارستان و معالجات پزشکی',
      'پرداخت هزینه فوریت‌های دندانپزشکی',
      'انتقال بیمه شده به نزدیک‌ترین مرکز درمانی',
    ],
  },
  {
    id: '3',
    company: { name: 'Mideast Assistance' },
    planName: 'طرح اقتصادی (با پوشش کرونا)',
    coverageLevel: '۵,۰۰۰ یورو',
    coverageLimit: 5000,
    coverages: ['پوشش کرونا', 'پوشش آتش سوزی', 'همه کشورهای جهان'],
    price: 3341046,
    features: [
      'پرداخت هزینه بستری شدن در بیمارستان و معالجات پزشکی',
      'پرداخت هزینه فوریت‌های دندانپزشکی',
      'انتقال بیمه شده به نزدیک‌ترین مرکز درمانی',
    ],
  },
  {
    id: '4',
    company: { name: 'بیمه ایران' },
    planName: 'طرح لوکس',
    coverageLevel: '۲۰,۰۰۰ یورو',
    coverageLimit: 20000,
    coverages: ['پوشش کرونا', 'پوشش آتش سوزی', 'همه کشورهای جهان'],
    price: 6800000,
    features: [
      'پرداخت هزینه بستری شدن در بیمارستان و معالجات پزشکی',
      'پرداخت هزینه فوریت‌های دندانپزشکی',
      'انتقال بیمه شده به نزدیک‌ترین مرکز درمانی',
    ],
  },
];

export function InsuranceResultsPage() {
  const [selectedPlan, setSelectedPlan] = useState<InsurancePlan | null>(null);

  return (
    <div className="bg-gray-1 min-h-screen">
      {/* Header */}
      <div className="bg-tint-1 border-b border-tint-2 py-3">
        <Container>
          <h1 className="text-sm font-medium text-gray-8 text-start">
            بیمه مسافرتی به مقصد استانبول | ۵ تا ۸ روز | ۱ مسافر
          </h1>
        </Container>
      </div>

      <Container className="py-6">
        {/* Plans List - Single Column */}
        <div className="space-y-4">
          {mockPlans.map((plan) => (
            <InsuranceCard
              key={plan.id}
              plan={plan}
              onDetailsClick={() => setSelectedPlan(plan)}
            />
          ))}
        </div>
      </Container>

      {/* Modal */}
      <InsuranceInfoModal
        isOpen={!!selectedPlan}
        onClose={() => setSelectedPlan(null)}
        plan={selectedPlan}
      />
    </div>
  );
}