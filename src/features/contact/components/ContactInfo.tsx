import { MapPin, Phone, Mail, Search } from 'lucide-react';
import { Container } from '../../../shared/components/layout/Container';

export function ContactInfo() {
  return (
    <Container className="py-10">
      {/* Intro */}
      <p className="text-sm text-gray-7 leading-7 text-start mb-8 max-w-3xl">
        ما در مجموعه بیلیتو همواره به نظرات، پیشنهادات و سوالات شما عزیزان
        ارزش قائلیم و مشتاقانه منتظر کمک به شما هستیم.
      </p>

      {/* Contact Card */}
      <div className="bg-white rounded-lg border border-gray-2 overflow-hidden">
        {/* Header: Title */}
        <div className="px-6 py-4 border-b border-gray-2">
          <div className="flex items-center gap-2">
            <Search className="w-4 h-4 text-primary" />
            <h2 className="text-sm font-bold text-gray-8">جستجوی بلیط</h2>
          </div>
        </div>

        {/* Content: Info (Right) + Map (Left) */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] lg:items-stretch">
          {/* Info - Right in RTL */}
          <div className="p-6 space-y-4 order-1 flex flex-col justify-center">
            {/* Address */}
            <div className="flex items-center gap-3 text-sm">
              <div className="w-9 h-9 rounded-md bg-tint-1 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-primary" />
              </div>
              <span className="text-gray-5 whitespace-nowrap">آدرس:</span>
              <span className="text-gray-8 leading-6">
                تهران، میدان آزادی، خیابان آزادی، خیابان جیحون، طوس غربی
              </span>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 text-sm">
              <div className="w-9 h-9 rounded-md bg-tint-1 flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4 text-primary" />
              </div>
              <span className="text-gray-5 whitespace-nowrap">شماره تماس:</span>
              <a
                href="tel:02176915432"
                className="text-gray-8 hover:text-primary transition-colors"
                dir="ltr"
              >
                ۰۲۱-۷۶۹۱۵۴۳۲
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 text-sm">
              <div className="w-9 h-9 rounded-md bg-tint-1 flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4 text-primary" />
              </div>
              <span className="text-gray-5 whitespace-nowrap">ایمیل:</span>
              <a
                href="mailto:Shiva.Arghvni996@Gmail.Com"
                className="text-gray-8 hover:text-primary transition-colors break-all"
                dir="ltr"
              >
                Shiva.Arghvni996@Gmail.Com
              </a>
            </div>
          </div>

          {/* Map - Left in RTL, full height */}
          <div className="order-2 p-4 h-full">
            <div className="rounded-md overflow-hidden border border-gray-2 h-full min-h-[200px]">
              <img
                src="/map.png"
                alt="نقشه دفتر مرکزی"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}