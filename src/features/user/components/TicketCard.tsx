import { Calendar, Trash2, ThumbsUp, ThumbsDown, Reply } from 'lucide-react';
import { cn } from '../../../shared/utils/cn';

export type Ticket = {
  id: string;
  date: string;
  time: string;
  message: string;
  reply?: string;
  likes: number;
  dislikes: number;
};

type TicketCardProps = {
  ticket: Ticket;
  onDelete?: (id: string) => void;
  onLike?: (id: string) => void;
  onDislike?: (id: string) => void;
  className?: string;
};

export function TicketCard({
  ticket,
  onDelete,
  onLike,
  onDislike,
  className,
}: TicketCardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-lg border border-gray-2 p-4',
        'transition-colors duration-200',
        'hover:border-primary',
        className,
      )}
    >
      {/* Date + Time */}
      <div className="flex items-center justify-end gap-1.5 text-xs text-gray-5 mb-3">
        <span dir="ltr">
          {ticket.time} - {ticket.date}
        </span>
        <Calendar className="w-3.5 h-3.5" />
      </div>

      {/* Message */}
      <p className="text-sm text-gray-8 leading-7 mb-4 text-start">
        {ticket.message}
      </p>

      {/* Reply (if exists) */}
      {ticket.reply && (
        <div className="bg-tint-1 rounded-md p-3 mb-4 flex items-start gap-2">
          <Reply className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          <p className="text-xs text-shade-3 leading-6 text-start">
            {ticket.reply}
          </p>
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center justify-between gap-2 pt-3 border-t border-gray-2">
        {/* Left: Delete + Like/Dislike */}
        <div className="flex items-center gap-1">
          {/* Delete */}
          <button
            type="button"
            onClick={() => onDelete?.(ticket.id)}
            className={cn(
              'w-8 h-8 rounded-md flex items-center justify-center',
              'text-error hover:bg-error-light-2 transition-colors',
              'focus:outline-none focus:ring-2 focus:ring-error/30',
            )}
            aria-label="حذف تیکت"
          >
            <Trash2 className="w-4 h-4" />
          </button>

          {/* Like */}
          <button
            type="button"
            onClick={() => onLike?.(ticket.id)}
            className={cn(
              'w-8 h-8 rounded-md flex items-center justify-center gap-1',
              'text-gray-6 hover:bg-gray-1 hover:text-success transition-colors',
              'focus:outline-none focus:ring-2 focus:ring-primary/40',
            )}
            aria-label="پسندیدن"
          >
            <ThumbsUp className="w-4 h-4" />
            {ticket.likes > 0 && (
              <span className="text-xs">{ticket.likes}</span>
            )}
          </button>

          {/* Dislike */}
          <button
            type="button"
            onClick={() => onDislike?.(ticket.id)}
            className={cn(
              'w-8 h-8 rounded-md flex items-center justify-center gap-1',
              'text-gray-6 hover:bg-gray-1 hover:text-error transition-colors',
              'focus:outline-none focus:ring-2 focus:ring-primary/40',
            )}
            aria-label="نپسندیدن"
          >
            <ThumbsDown className="w-4 h-4" />
            {ticket.dislikes > 0 && (
              <span className="text-xs">{ticket.dislikes}</span>
            )}
          </button>
        </div>

        {/* Right: Reply Button */}
        <button
          type="button"
          className={cn(
            'flex items-center gap-1.5 text-xs text-gray-5',
            'hover:text-primary transition-colors',
            'focus:outline-none',
          )}
        >
          <Reply className="w-3.5 h-3.5 -scale-x-100" />
          <span>پاسخ</span>
        </button>
      </div>
    </div>
  );
}