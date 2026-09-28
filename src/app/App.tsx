import { Header } from '../shared/components/layout/Header';
import { Button } from '../shared/components/ui/Button';

function App() {
  return (
    <div className="min-h-screen bg-gray-1">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-primary text-start mb-4">
          صفحه اصلی
        </h1>
        <p className="text-gray-7 mb-6 text-start">
          این یه صفحه تستیه. Header رو بالای صفحه ببین.
        </p>
        <Button>دکمه تستی</Button>
      </main>
    </div>
  );
}

export default App;