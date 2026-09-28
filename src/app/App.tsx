import { Accordion, type AccordionItem } from '../shared/components/ui/Accordion';

const faqItems: AccordionItem[] = [
  {
    id: '1',
    title: 'در هر پرواز میزان بار مجاز چقدر است؟',
    content: (
      <p>
        بلیط تمام خطوط هوایی دنیا در سایت بیلیتو موجود است. چه پروازهایی که
        مبدا یا مقصد آنها ایران است و چه پروازهای داخلی. پروازهای ایرانی مثل
        لوفت‌هانزا، امارات، قطرایرویز، ترکیش،ایر، ایران‌ایر و ...
      </p>
    ),
  },
  {
    id: '2',
    title: 'نرخ بلیط هواپیما برای نوزادان و کودکان زیر ۱۲ سال چگونه است؟',
    content: (
      <p>
        نرخ بلیط برای کودکان زیر ۱۲ سال معمولاً ۵۰٪ بلیط بزرگسال و برای
        نوزادان (زیر ۲ سال) ۱۰٪ بلیط بزرگسال محاسبه می‌شود.
      </p>
    ),
  },
  {
    id: '3',
    title: 'آیا پس از خرید اینترنتی بلیط هواپیما امکان استرداد آن وجود دارد؟',
    content: (
      <p>
        بله، طبق قوانین استرداد، می‌توانید بسته به زمان باقی‌مانده تا پرواز،
        با پرداخت جریمه مشخص، بلیط خود را استرداد کنید.
      </p>
    ),
  },
  {
    id: '4',
    title: 'آیا پس از خرید بلیط هواپیما امکان تغییر نام یا نام خانوادگی وجود دارد؟',
    content: (
      <p>
        معمولاً تغییر نام امکان‌پذیر نیست، ولی در برخی موارد با پرداخت هزینه
        امکان‌پذیر است. باید با پشتیبانی تماس بگیرید.
      </p>
    ),
  },
  {
    id: '5',
    title: 'هنگامی که از سایت خرید بلیط هواپیما رزرو بلیط را انجام می‌دهیم امکان انتخاب صندلی مورد نظرمان وجود دارد؟',
    content: (
      <p>
        بله، پس از انتخاب پرواز، می‌توانید صندلی مورد نظر خود را انتخاب کنید.
      </p>
    ),
  },
  {
    id: '6',
    title: 'بلیط پرواز چه کشورهایی ایرانی‌هایی را می‌توانم در سایت بیلیتو جستجو و خریداری کنم؟',
    content: (
      <p>
        تمام پروازهای بین‌المللی از ایران به کشورهای مختلف و همچنین پروازهای
        داخلی.
      </p>
    ),
  },
  {
    id: '7',
    title: 'چطور تاریخ پرواز را تغییر دهم؟',
    content: (
      <p>
        از طریق پنل کاربری، بخش "سفرهای من"، می‌توانید درخواست تغییر تاریخ
        دهید. توجه کنید که جریمه تغییر تاریخ اعمال می‌شود.
      </p>
    ),
  },
  {
    id: '8',
    title: 'غیرفعال',
    content: <p>این آیتم غیرفعاله</p>,
    disabled: true,
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-1 p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-2xl font-bold text-primary text-start">
          تست کامپوننت Accordion
        </h1>

        {/* Single */}
        <div className="bg-white p-6 rounded-md shadow-card">
          <h2 className="text-lg font-bold mb-4 text-start">
            حالت Single (فقط یک آیتم باز)
          </h2>
          <Accordion items={faqItems} type="single" />
        </div>

        {/* Multiple */}
        <div className="bg-white p-6 rounded-md shadow-card">
          <h2 className="text-lg font-bold mb-4 text-start">
            حالت Multiple (چند آیتم باز)
          </h2>
          <Accordion items={faqItems} type="multiple" defaultOpen={['1', '2']} />
        </div>
      </div>
    </div>
  );
}

export default App;