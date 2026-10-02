import { useState } from 'react';
import { Send } from 'lucide-react';
import { Container } from '../../../shared/components/layout/Container';
import { Input } from '../../../shared/components/ui/Input';
import { Select } from '../../../shared/components/ui/Select';
import { Button } from '../../../shared/components/ui/Button';

const subjectOptions = [
  { value: 'support', label: 'پشتیبانی' },
  { value: 'complaint', label: 'شکایت' },
  { value: 'suggestion', label: 'پیشنهاد' },
  { value: 'other', label: 'سایر' },
];

export function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, subject, message });
    alert('پیام شما با موفقیت ارسال شد!');
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <Container className="pb-12">
      {/* Intro Text - Outside the card */}
      <p className="text-sm text-gray-7 leading-7 text-start mb-6 max-w-3xl">
        در صورتی که سوالی دارید یا نیاز به راهنمایی دارید، لطفا از فرم زیر
        برای تماس با ما استفاده کنید. تیم پشتیبانی ما در اسرع وقت پاسخگوی
        شما خواهد بود.
      </p>

      {/* Form Card */}
      <div className="bg-white rounded-lg border border-gray-2 p-6">
        <h2 className="text-base font-bold text-gray-8 mb-6 text-start">
          فرم تماس با ما
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:items-stretch">
            {/* Right: Text inputs */}
            <div className="flex flex-col gap-4">
              <Input
                label="نام و نام خانوادگی"
                placeholder="نام خود را وارد کنید"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <Input
                label="ایمیل"
                placeholder="example@email.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                dir="ltr"
                required
              />

              <Select
                label="موضوع"
                placeholder="انتخاب کنید"
                options={subjectOptions}
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>

            {/* Left: Textarea + Button (same height as right column) */}
            <div className="flex flex-col h-full">
              <label className="block text-sm font-medium text-gray-7 mb-2 text-start">
                پیام
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="پیام خود را وارد کنید..."
                className="flex-1 w-full rounded-md border border-gray-3 bg-white text-sm p-3 text-start resize-none placeholder:text-gray-5 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                required
              />

              <div className="mt-4">
                <Button
                  type="submit"
                  leftIcon={<Send className="w-4 h-4" />}
                  className="min-w-[140px]"
                >
                  ارسال پیام
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
}