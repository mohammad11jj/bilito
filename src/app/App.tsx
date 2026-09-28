import { Skeleton } from '../shared/components/ui/Skeleton';

function App() {
  return (
    <div className="min-h-screen bg-gray-1 p-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-primary text-start">
          تست کامپوننت Skeleton
        </h1>

        {/* اشکال پایه */}
        <section className="bg-white p-6 rounded-md shadow-card space-y-4">
          <h2 className="text-lg font-bold text-start">اشکال پایه</h2>
          <Skeleton width={200} height={20} />
          <Skeleton width="100%" height={40} />
          <div className="flex gap-4 items-center">
            <Skeleton variant="circular" width={48} height={48} />
            <div className="flex-1 space-y-2">
              <Skeleton variant="text" width="60%" />
              <Skeleton variant="text" width="40%" />
            </div>
          </div>
        </section>

        {/* Skeleton کارت پرواز */}
        <section className="bg-white p-6 rounded-md shadow-card space-y-4">
          <h2 className="text-lg font-bold text-start">Skeleton کارت پرواز</h2>
          <div className="border border-gray-3 rounded-md p-4 space-y-3">
            <div className="flex items-center justify-between">
              <Skeleton width={120} height={20} />
              <Skeleton width={80} height={20} />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton width={80} height={16} />
              </div>
              <Skeleton width={60} height={16} />
            </div>
            <Skeleton width="100%" height={44} />
          </div>
        </section>

        {/* Skeleton لیست */}
        <section className="bg-white p-6 rounded-md shadow-card space-y-4">
          <h2 className="text-lg font-bold text-start">Skeleton لیست</h2>
          <div className="space-y-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-3 border border-gray-2 rounded-md"
              >
                <Skeleton variant="circular" width={40} height={40} />
                <div className="flex-1 space-y-2">
                  <Skeleton variant="text" width="70%" />
                  <Skeleton variant="text" width="40%" />
                </div>
                <Skeleton width={60} height={24} />
              </div>
            ))}
          </div>
        </section>

        {/* بدون انیمیشن */}
        <section className="bg-white p-6 rounded-md shadow-card space-y-4">
          <h2 className="text-lg font-bold text-start">بدون انیمیشن</h2>
          <Skeleton animation="none" width="100%" height={40} />
        </section>
      </div>
    </div>
  );
}

export default App;