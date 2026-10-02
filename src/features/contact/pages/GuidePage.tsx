import {
  Search,
  Plane,
  CheckSquare,
  User,
  CreditCard,
  Download,
  type LucideIcon,
} from 'lucide-react';
import { Container } from '../../../shared/components/layout/Container';

type GuideStep = {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
};

const steps: GuideStep[] = [
  {
    id: 1,
    title: 'جستجوی بلیط',
    description:
      'در بخش جستجو، نوع سفر (یک‌طرفه یا رفت و برگشت) و مبدأ و مقصد خود را وارد کنید، تاریخ سفر را انتخاب کنید و تعداد مسافران را مشخص کنید.',
    icon: Search,
  },
  {
    id: 2,
    title: 'انتخاب پرواز',
    description:
      'بر اساس اطلاعاتی که وارد کرده‌اید، نتایج شامل لیست پروازها و قیمت‌ها نمایش داده می‌شود. می‌توانید پروازهای مختلف را بررسی کنید و براساس ترجیحات خود، یک پرواز را انتخاب کنید.',
    icon: Plane,
  },
  {
    id: 3,
    title: 'انتخاب صندلی',
    description:
      'پس از انتخاب پرواز، شما باید صندلی یا صندلی‌های مورد نظر خود را انتخاب کنید.',
    icon: CheckSquare,
  },
  {
    id: 4,
    title: 'اطلاعات مسافران',
    description:
      'در این مرحله باید اطلاعات مسافران را وارد کنید. این اطلاعات شامل نام و نام خانوادگی، جنسیت، تاریخ تولد و اطلاعات تماس می‌باشد.',
    icon: User,
  },
  {
    id: 5,
    title: 'تایید و پرداخت',
    description:
      'در این مرحله باید هزینه بلیط را پرداخت کنید. شما می‌توانید با کارت بانکی که رمز پویا دارد وارد درگاه پرداخت شده و پس از پرداخت موفق، بلیط شما تایید می‌شود و یک بلیط الکترونیکی به شما ارائه می‌شود.',
    icon: CreditCard,
  },
  {
    id: 6,
    title: 'دریافت بلیط',
    description:
      'پس از تایید خرید، بلیط را از وب سایت رزروشده دریافت کنید و یا آن را چاپ کنید.',
    icon: Download,
  },
];

export function GuidePage() {
  return (
    <div>
      {/* Hero */}
      <div className="relative h-[280px] lg:h-[320px] overflow-hidden">
        <img
          src="/contact-hero.png"
          alt="راهنمای خرید بلیط"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />

        <div className="relative h-full">
          <Container className="h-full">
            <div className="h-full flex items-start pt-16 lg:pt-20">
              <h1 className="text-xl lg:text-2xl font-bold text-white text-start max-w-2xl leading-9">
                راحتی و سرعت در رزرو بلیط هواپیما با بیلیتو
              </h1>
            </div>
          </Container>
        </div>
      </div>

      {/* Content */}
      <Container className="py-10">
        {/* Title */}
        <h2 className="text-xl font-bold text-gray-8 mb-8 text-start">
          مراحل خرید آنلاین بلیط هواپیما
        </h2>

        {/* Steps */}
        <div className="space-y-8 max-w-4xl">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className="flex items-start gap-4">
                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-tint-1 border border-tint-3 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <h3 className="text-base font-bold text-gray-8 mb-2 text-start">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-7 leading-7 text-start">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}