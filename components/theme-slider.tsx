'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useSyncExternalStore } from 'react';
import { Segmented } from '@/components/ui/segmented';

const noop = () => () => {};

export function ThemeSlider({ className }: { className?: string }) {
  const { setTheme, resolvedTheme } = useTheme();
  const mounted = useSyncExternalStore(
    noop,
    () => true,
    () => false,
  );

  return (
    <Segmented
      className={className}
      ariaLabel="Theme"
      value={mounted ? resolvedTheme : null}
      onChange={setTheme}
      options={[
        { value: 'light', label: '', icon: <Sun className="size-3.5" />, ariaLabel: 'Light' },
        { value: 'dark', label: '', icon: <Moon className="size-3.5" />, ariaLabel: 'Dark' },
      ]}
    />
  );
}
