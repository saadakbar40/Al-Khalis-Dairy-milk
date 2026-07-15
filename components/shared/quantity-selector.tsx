import { Minus, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

type QuantitySelectorProps = {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
};

const sizes = {
  sm: 'h-8 w-8',
  md: 'h-9 w-9',
  lg: 'h-10 w-10',
};

const iconSizes = {
  sm: 'h-3.5 w-3.5',
  md: 'h-4 w-4',
  lg: 'h-5 w-5',
};

export function QuantitySelector({
  quantity,
  onDecrease,
  onIncrease,
  className,
  size = 'md',
}: QuantitySelectorProps) {
  return (
    <div className={cn('flex items-center rounded-xl border border-border', className)}>
      <button
        onClick={onDecrease}
        className={cn(
          'flex items-center justify-center text-muted-foreground transition-colors hover:text-foreground',
          sizes[size]
        )}
        aria-label="Decrease quantity"
      >
        <Minus className={iconSizes[size]} />
      </button>
      <span
        className={cn(
          'min-w-10 text-center font-semibold',
          size === 'sm' && 'text-sm',
          size === 'lg' && 'text-lg'
        )}
      >
        {quantity}
      </span>
      <button
        onClick={onIncrease}
        className={cn(
          'flex items-center justify-center text-muted-foreground transition-colors hover:text-foreground',
          sizes[size]
        )}
        aria-label="Increase quantity"
      >
        <Plus className={iconSizes[size]} />
      </button>
    </div>
  );
}
