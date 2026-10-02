import { NavLink } from 'react-router';
import { Container } from '../../../shared/components/layout/Container';
import { cn } from '../../../shared/utils/cn';

export function AboutPage() {
  return (
    <div>
      {/* Hero Image */}
      <div className="relative h-[280px] lg:h-[320px] overflow-hidden">
        <img
          src="/contact-hero.png"
          alt="درباره ما"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />

        <div className="relative h-full">
          <Container className="h-full">
            <div className="h-full flex items-start pt-16 lg:pt-20">
              <h1 className="text-xl lg:text-2xl font-bold text-white text-start max-w-2xl leading-9">
                همراه با ما به مسیری از راحتی، سرعت و خدمات بی‌نظیر پرواز کنید
              </h1>
            </div>
          </Container>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-2">
        <Container>
          <div className="flex items-center justify-start gap-1">
            {/* درباره ما */}
            <NavLink
              to="/about"
              className={({ isActive }) =>
                cn(
                  'px-5 py-4 text-sm font-medium transition-colors',
                  'border-b-2 -mb-px',
                  isActive
                    ? 'text-primary border-primary'
                    : 'text-gray-6 border-transparent hover:text-gray-8',
                )
              }
            >
              درباره ما
            </NavLink>

            {/* تماس با ما */}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                cn(
                  'px-5 py-4 text-sm font-medium transition-colors',
                  'border-b-2 -mb-px',
                  isActive
                    ? 'text-primary border-primary'
                    : 'text-gray-6 border-transparent hover:text-gray-8',
                )
              }
            >
              تماس با ما
            </NavLink>
          </div>
        </Container>
      </div>

      {/* Content */}
      <Container className="py-10">
        <div className="space-y-8 max-w-4xl">
          <p className="text-sm text-gray-7 leading-8 text-start">
            ما در بیلیتو مفتخریم که یکی از پیشروان در صنعت هواپیمایی هستیم و
            خدماتی بی‌نظیر را به مسافران عزیز ارائه می‌دهیم. با تیمی از
            کارشناسان حرفه‌ای در زمینه‌ی هواپیمایی، ما بهترین شرایط و تجربه را
            برای سفرهای شما فراهم می‌کنیم.
          </p>

          <section>
            <h2 className="text-lg font-bold text-gray-8 mb-3 text-start">
              اهداف ما
            </h2>
            <p className="text-sm text-gray-7 leading-8 text-start">
              هدف اصلی ما در بیلیتو، ارائه‌ی خدماتی با کیفیت و استاندارد در
              سطح بین‌المللی است. با تمرکز بر رضایت مشتریان، ما سعی می‌کنیم
              تجربه‌ی سفری بی‌نظیر را برای شما به ارمغان بیاوریم. از لحظه‌ی
              رزرو تا رسیدن به مقصد، ما همراه شما خواهیم بود و اطمینان
              می‌دهیم که هر جزئیات سفر شما به بهترین شکل ممکن انجام شود.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-8 mb-3 text-start">
              خدمات ما
            </h2>
            <p className="text-sm text-gray-7 leading-8 text-start">
              در بیلیتو، ما مجموعه‌ای از خدمات شگفت‌انگیز را برای شما آماده
              کرده‌ایم. از رزرو آنلاین سریع و آسان، تا پروازهای راحت و
              امکانات لوکس در هواپیما، همه‌ی جزئیات سفر شما تحت نظر ماست.
              همچنین، با تیم پشتیبانی ما در دسترس شما هستیم تا در صورت بروز
              هرگونه مشکل یا سوال، به شما کمک کنیم.
            </p>
          </section>

          <p className="text-sm text-gray-7 leading-8 text-start">
            با تشکر از انتخاب شما برای سفر با بیلیتو. ما در انتظار خدمت‌رسانی
            به شما هستیم و امیدواریم که تجربه‌ی سفری فوق‌العاده را برای شما
            فراهم کنیم.
          </p>
        </div>
      </Container>
    </div>
  );
}