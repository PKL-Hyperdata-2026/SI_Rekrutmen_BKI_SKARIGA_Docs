'use client';

import { LanguageSelect, LanguageSelectText } from 'fumadocs-ui/layouts/shared/slots/language-select';
import { Languages } from 'lucide-react';
import { ThemeSlider } from '@/components/theme-slider';

export function NavControls({ className }: { className?: string }) {
  return <ThemeSlider className={className} />;
}

export function MobileNavControls() {
  return (
    <div className="flex items-center gap-2 lg:hidden">
      <ThemeSlider />
      <LanguageSelect variant="secondary" className="gap-1.5 px-2 py-1 text-xs">
        <Languages className="size-3.5" />
        <LanguageSelectText />
      </LanguageSelect>
    </div>
  );
}
