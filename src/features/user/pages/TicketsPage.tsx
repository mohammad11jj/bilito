import { useState } from 'react';
import { useNavigate } from 'react-router';
import { SearchX } from 'lucide-react';
import { EmptyState } from '../../../shared/components/ui/EmptyState';
import { Button } from '../../../shared/components/ui/Button';
import { TicketCard, type Ticket } from '../components/TicketCard';

const mockTickets: Ticket[] = [
  {
    id: '1',
    date: '۱۴۰۲/۰۶/۰۷',
    time: '۱۴:۵۳',
    message:
      'چگونه می‌توانم از سایت شما بلیط اوکراین را رزرو کنم؟',
    reply:
      'با سلام و وقت بخیر. لطفا به قسمت راهنمای تهیه بلیط در بخش هدر مراجعه نمایید.',
    likes: 0,
    dislikes: 0,
  },
  {
    id: '2',
    date: '۱۴۰۲/۰۶/۰۷',
    time: '۱۴:۵۳',
    message:
      'چگونه می‌توانم از سایت شما بلیط اوکراین را رزرو کنم؟ می‌خواهم به ترکیه بروم به شهر استانبول یا آنکارا و از آنجا به شهر اکراین بروم و نتوانم مدتنی در اکراین بمانم و سپس به استانبول برگردم و به ایران',
    reply:
      'با سلام و وقت بخیر. لطفا به قسمت راهنمای تهیه بلیط در بخش هدر مراجعه نمایید.',
    likes: 0,
    dislikes: 0,
  },
  {
    id: '3',
    date: '۱۴۰۲/۰۶/۰۷',
    time: '۱۴:۵۳',
    message: 'چگونه می‌توانم از سایت شما بلیط اوکراین را رزرو کنم؟',
    reply:
      'با سلام و وقت بخیر. لطفا به قسمت راهنمای تهیه بلیط در بخش هدر مراجعه نمایید.',
    likes: 0,
    dislikes: 0,
  },
  {
    id: '4',
    date: '۱۴۰۲/۰۶/۰۷',
    time: '۱۴:۵۳',
    message: 'چگونه می‌توانم از سایت شما بلیط اوکراین را رزرو کنم؟',
    reply:
      'با سلام و وقت بخیر. لطفا به قسمت راهنمای تهیه بلیط در بخش هدر مراجعه نمایید.',
    likes: 0,
    dislikes: 0,
  },
];

export function TicketsPage() {
  const navigate = useNavigate();
  const [tickets, setTickets] = useState<Ticket[]>(mockTickets);

  const handleDelete = (id: string) => {
    if (confirm('این تیکت حذف شود؟')) {
      setTickets((prev) => prev.filter((t) => t.id !== id));
    }
  };

  const handleLike = (id: string) => {
    setTickets((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, likes: t.likes + 1 } : t,
      ),
    );
  };

  const handleDislike = (id: string) => {
    setTickets((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, dislikes: t.dislikes + 1 } : t,
      ),
    );
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg font-bold text-gray-8">تیکت‌های من</h1>

        <select
          className="h-10 px-3 rounded-md border border-gray-3 bg-white text-sm cursor-pointer"
          defaultValue="newest"
        >
          <option value="newest">جدیدترین</option>
          <option value="oldest">قدیمی‌ترین</option>
          <option value="most-liked">بیشترین پسند</option>
        </select>
      </div>

      {/* Tickets List */}
      {tickets.length > 0 ? (
        <div className="space-y-4">
          {tickets.map((ticket) => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
              onDelete={handleDelete}
              onLike={handleLike}
              onDislike={handleDislike}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg border border-gray-2">
          <EmptyState
            icon={<SearchX className="w-full h-full" />}
            title="شما هیچ تیکتی دریافت نکردید"
            action={
              <Button onClick={() => navigate('/')}>برو به صفحه اصلی</Button>
            }
          />
        </div>
      )}
    </div>
  );
}