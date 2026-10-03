import { Container } from '../../../shared/components/layout/Container';

export function InsuranceInfo() {
  return (
    <Container className="py-12">
      <div className="space-y-10">
        {/* بخش ۱: بیمه مسافرتی چیست؟ */}
        <section>
          <h2 className="text-xl font-bold text-gray-8 mb-4 text-start">
            بیمه مسافرتی چیست؟
          </h2>
          <p className="text-sm text-gray-7 leading-8 text-start">
            بیمه مسافرتی (Travel Insurance) یک نوع بیمه است که برای پوشش
            هزینه‌ها و خسارات مرتبط با سفرهای بین‌المللی یا داخلی ارائه می‌شود.
            این بیمه معمولاً توسط شرکت‌های بیمه عرضه می‌شود و شامل تعدادی
            پوشش است که می‌تواند شامل پوشش هزینه‌های پزشکی، از دست دادن
            وسایل، خرابی پرواز، بستری در بیمارستان، هزینه‌های مراقبت پزشکی و
            ... باشد.
          </p>
        </section>

        {/* بخش ۲: خدمات بیمه مسافرتی */}
        <section>
          <h2 className="text-xl font-bold text-gray-8 mb-4 text-start">
            خدمات بیمه مسافرتی
          </h2>
          <ul className="space-y-3 text-sm text-gray-7 leading-8 text-start list-disc pr-6">
            <li>
              <strong>هزینه‌های پزشکی:</strong> هزینه مراقبت پزشکی و بستری
              در بیمارستان برای درمان بیماری‌ها یا حوادث.
            </li>
            <li>
              <strong>هزینه‌های دندانپزشکی:</strong> درمان ضروری برای درمان
              عفونت، کشیدن دندان و ...
            </li>
            <li>
              <strong>جبران هزینه:</strong> در صورت مفقود شدن داروهای همراه
              مسافر (به شرط ضروری بودن مصرف آن‌ها) و ارسال مجدد داروهای مورد
              نیاز.
            </li>
            <li>
              <strong>هزینه‌های بازگشت:</strong> در صورت ابتلا به بیماری که
              بیش از ۱۰ روز نیاز به بستری در بیمارستان داشته باشد.
            </li>
            <li>
              <strong>جبران خسارت اموال:</strong> بیمه مسافرتی می‌تواند در
              صورت خرابت، سرقت یا از دست رفتن وسایل شخصی و اموال شما در سفر
              تأمین کند.
            </li>
          </ul>
        </section>

        {/* بخش ۳: عوامل مؤثر بر قیمت */}
        <section>
          <h2 className="text-xl font-bold text-gray-8 mb-4 text-start">
            عوامل مؤثر بر قیمت بیمه مسافرتی
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-3 text-sm">
              <thead>
                <tr className="bg-tint-1">
                  <th className="border border-gray-3 p-3 text-start text-gray-8">
                    عوامل مؤثر در تعیین قیمت
                  </th>
                  <th className="border border-gray-3 p-3 text-start text-gray-8">
                    نحوه محاسبه در فرمول تعیین حق بیمه
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-7">
                <tr>
                  <td className="border border-gray-3 p-3">سن مسافر</td>
                  <td className="border border-gray-3 p-3">
                    ۱۲ تا ۶۵ سال: ۱۰۰٪ | ۶۶ تا ۷۶ سال: ۱۵۰٪ | ۷۷ سال به بالا: ۲۰۰٪
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-3 p-3">مدت سفر</td>
                  <td className="border border-gray-3 p-3">
                    ۱ تا ۷ روز: ۱۰۰٪ | ۸ تا ۱۵ روز: ۱۳۰٪ | ۱۶ تا ۳۰ روز: ۱۵۰٪
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-3 p-3">مقصد سفر</td>
                  <td className="border border-gray-3 p-3">
                    بر اساس مناطق جغرافیایی مختلف
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </Container>
  );
}