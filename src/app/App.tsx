function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-1">
      <div className="bg-white p-6 rounded-md shadow-card max-w-md">
        <h1 className="text-3xl font-bold text-primary mb-4">
          سلام! پروژه بیلیتو 🚀
        </h1>
        
        <p className="text-gray-7 text-base mb-6">
          اگه این کارت با سایه آبی ملایم، فونت IRANSansX و چیدمان راست‌چین
          دیده می‌شه، یعنی همه چیز درست کار می‌کنه.
        </p>

        <div className="flex gap-2 mb-6">
          <div className="w-10 h-10 rounded-sm bg-primary" title="primary"></div>
          <div className="w-10 h-10 rounded-sm bg-tint-3" title="tint-3"></div>
          <div className="w-10 h-10 rounded-sm bg-shade-3" title="shade-3"></div>
          <div className="w-10 h-10 rounded-sm bg-success" title="success"></div>
          <div className="w-10 h-10 rounded-sm bg-error" title="error"></div>
          <div className="w-10 h-10 rounded-sm bg-warning" title="warning"></div>
        </div>

        <div className="flex gap-3">
          <button className="bg-primary text-white px-6 py-3 rounded-md hover:bg-shade-1 transition">
            دکمه اصلی
          </button>
          <button className="border-2 border-primary text-primary px-6 py-3 rounded-md hover:bg-tint-1 transition">
            دکمه ثانویه
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;