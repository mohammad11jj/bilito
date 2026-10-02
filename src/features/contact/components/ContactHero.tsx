import { NavLink } from 'react-router';
import { Container } from '../../../shared/components/layout/Container';
import { cn } from '../../../shared/utils/cn';

export function ContactHero() {
  return (
    <section>
      {/* Hero Image */}
      <div className="relative h-[280px] lg:h-[320px] overflow-hidden">
        <img
          src="/contact-hero.png"
          alt="تماس با ما"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />

        {/* Text - Inside Container, aligned with logo */}
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

      {/* Tabs - Right aligned */}
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
    </section>
  );
}