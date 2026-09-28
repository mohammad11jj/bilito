import { Textarea } from '../shared/components/ui/Textarea';

function App() {
  return (
    <div className="min-h-screen bg-gray-1 p-8">
      <div className="max-w-md mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-primary mb-6 text-start">
          تست کامپوننت Textarea
        </h1>

        <div className="bg-white p-6 rounded-md shadow-card space-y-5">
          {/* ساده */}
          <Textarea placeholder="پیام خود را وارد کنید..." />

          {/* با Label */}
          <Textarea
            label="توضیحات"
            placeholder="توضیحات خود را وارد کنید..."
          />

          {/* اجباری */}
          <Textarea
            label="دلیل سفر"
            placeholder="دلیل سفر خود را بنویسید..."
            required
          />

          {/* با Helper Text */}
          <Textarea
            label="آدرس"
            placeholder="آدرس کامل خود را وارد کنید..."
            helperText="آدرس دقیق برای ارسال بلیط"
          />

          {/* حالت خطا */}
          <Textarea
            label="پیام"
            placeholder="پیام خود را بنویسید..."
            error
            errorMessage="پیام باید حداقل ۱۰ کاراکتر باشد"
          />

          {/* غیرفعال */}
          <Textarea
            label="یادداشت"
            value="این متن قابل ویرایش نیست"
            disabled
          />
        </div>
      </div>
    </div>
  );
}

export default App;