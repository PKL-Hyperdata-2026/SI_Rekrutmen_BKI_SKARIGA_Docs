'use client';

import { cn } from '@/lib/utils';

interface SegmentedOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
  ariaLabel?: string;
}

interface SegmentedProps {
  options: SegmentedOption[];
  value?: string | null;
  onChange: (value: string) => void;
  className?: string;
  ariaLabel: string;
}

export function Segmented({ options, value, onChange, className, ariaLabel }: SegmentedProps) {
  return (
    <div
      role="radiogroup"
      aria-label={ariaLabel}
      className={cn(
        'inline-flex items-center gap-0.5 rounded-md border border-border bg-muted/50 p-0.5',
        className,
      )}
    >
      {options.map((option) => {
        const active = value === option.value;
        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={option.ariaLabel ?? option.label}
            onClick={() => onChange(option.value)}
            className={cn(
              'inline-flex cursor-pointer items-center justify-center gap-1 rounded-sm px-2 py-1 text-xs font-medium transition-colors',
              'focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-ring',
              active
                ? 'bg-background text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            {option.icon}
            <span>{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}
