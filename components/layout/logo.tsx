import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
  showText?: boolean;
  variant?: 'default' | 'light';
};

/**
 * Al Khalis Dairy logo — a milk drop inside a leaf, with a wordmark.
 * Pure SVG so it stays crisp at any size and adapts to light/dark.
 */
export function Logo({ className, showText = true, variant = 'default' }: LogoProps) {
  const textColor = variant === 'light' ? 'text-white' : 'text-primary';
  const subColor = variant === 'light' ? 'text-white/70' : 'text-muted-foreground';

  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <svg
        viewBox="0 0 48 48"
        className="h-9 w-9 shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="alkhalis-leaf" x1="0" y1="0" x2="48" y2="48">
            <stop offset="0%" stopColor="#2f9e44" />
            <stop offset="100%" stopColor="#1a7a32" />
          </linearGradient>
          <linearGradient id="alkhalis-drop" x1="14" y1="12" x2="34" y2="40">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#e8f5e9" />
          </linearGradient>
        </defs>
        <path
          d="M24 3C12 8 5 18 5 28c0 9 7 17 19 17s19-8 19-17C43 18 36 8 24 3Z"
          fill="url(#alkhalis-leaf)"
        />
        <path
          d="M24 6c-1 8-1 16 0 24"
          stroke="#ffffff"
          strokeOpacity="0.5"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M24 14c-4 2-7 5-9 9M24 20c-4 2-7 4-9 7M24 26c-3 2-5 4-7 6"
          stroke="#ffffff"
          strokeOpacity="0.35"
          strokeWidth="1.1"
          strokeLinecap="round"
        />
        <path
          d="M24 13c-4 5-7 9-7 13a7 7 0 0 0 14 0c0-4-3-8-7-13Z"
          fill="url(#alkhalis-drop)"
        />
        <ellipse cx="21.5" cy="22" rx="1.6" ry="2.4" fill="#ffffff" opacity="0.8" />
      </svg>
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={cn('font-display text-base font-extrabold tracking-tight', textColor)}>
            Al Khalis
          </span>
          <span className={cn('text-[10px] font-semibold uppercase tracking-[0.22em]', subColor)}>
            Dairy
          </span>
        </div>
      )}
    </div>
  );
}
