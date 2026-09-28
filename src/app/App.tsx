import { useState } from 'react';
import { Modal } from '../shared/components/ui/Modal';
import { Button } from '../shared/components/ui/Button';

function App() {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);

  return (
    <div className="min-h-screen bg-gray-1 p-8">
      <div className="max-w-md mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-primary text-start">
          تست کامپوننت Modal
        </h1>

        <div className="bg-white p-6 rounded-md shadow-card space-y-3">
          <Button onClick={() => setModal1(true)}>باز کردن Modal ساده</Button>
          <Button variant="outline" onClick={() => setModal2(true)}>
            Modal با Footer
          </Button>
          <Button variant="secondary" onClick={() => setModal3(true)}>
            Modal بزرگ
          </Button>
        </div>
      </div>

      {/* Modal ۱: ساده */}
      <Modal
        isOpen={modal1}
        onClose={() => setModal1(false)}
        title="Modal ساده"
      >
        <p className="text-gray-7 text-start">
          این یک Modal ساده است. می‌تونی با کلیک بیرون یا دکمه Escape ببندیش.
        </p>
      </Modal>

      {/* Modal ۲: با Footer */}
      <Modal
        isOpen={modal2}
        onClose={() => setModal2(false)}
        title="تایید عملیات"
        footer={
          <>
            <Button variant="ghost" onClick={() => setModal2(false)}>
              انصراف
            </Button>
            <Button onClick={() => setModal2(false)}>تایید</Button>
          </>
        }
      >
        <p className="text-gray-7 text-start">
          آیا از انجام این عملیات مطمئن هستید؟ این عملیات قابل بازگشت نیست.
        </p>
      </Modal>

      {/* Modal ۳: بزرگ با محتوای طولانی */}
      <Modal
        isOpen={modal3}
        onClose={() => setModal3(false)}
        title="قوانین و مقررات"
        size="lg"
        footer={<Button onClick={() => setModal3(false)}>متوجه شدم</Button>}
      >
        <div className="space-y-4 text-start text-gray-7 text-sm leading-7">
          {Array.from({ length: 15 }).map((_, i) => (
            <p key={i}>
              {i + 1}. این یک پاراگراف تستی برای بررسی اسکرول داخلی Modal است.
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
          ))}
        </div>
      </Modal>
    </div>
  );
}

export default App;