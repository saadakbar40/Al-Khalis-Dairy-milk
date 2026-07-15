import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

type RatingStarsProps = {
  rating: number;
  size?: number;
  className?: string;
  showValue?: boolean;
  reviews?: number;
};

export function RatingStars({
  rating,
  size = 16,
  className,
  showValue = false,
  reviews,
}: RatingStarsProps) {
  return (
    <div className={cn('flex items-center gap-1', className)}>
      <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, i) => {
          const filled = i < Math.floor(rating);
          const half = !filled && i < rating;
          return (
            <Star
              key={i}
              style={{ width: size, height: size }}
              className={cn(
                filled
                  ? 'fill-accent text-accent'
                  : half
                  ? 'fill-accent/50 text-accent'
                  : 'fill-muted text-muted-foreground/30'
              )}
            />
          );
        })}
      </div>
      {showValue && (
        <span className="text-sm font-medium text-foreground">
          {rating.toFixed(1)}
          {reviews !== undefined && (
            <span className="ml-1 text-muted-foreground">({reviews})</span>
          )}
        </span>
      )}
    </div>
  );
}
