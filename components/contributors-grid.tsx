'use client';

import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CONTRIBUTORS, contributorInitials as initials } from '@/lib/contributors';

export function ContributorsGrid() {
  return (
    <div className="not-prose my-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {CONTRIBUTORS.map((c) => (
        <a
          key={c.name}
          href={c.url}
          target="_blank"
          rel="noreferrer noopener"
          className="group relative flex cursor-pointer items-center gap-3.5 rounded-2xl border border-border bg-card/60 p-3.5 no-underline! transition-all duration-200 hover:border-primary/40 hover:bg-card hover:shadow-md"
        >
          <Avatar className="size-12 border border-border transition-colors group-hover:border-primary/50">
            <AvatarImage src={c.avatar} alt={c.name} loading="lazy" />
            <AvatarFallback>{initials(c.name)}</AvatarFallback>
          </Avatar>

          <div className="min-w-0 flex-1">
            <div className="truncate text-sm font-bold text-foreground no-underline! transition-colors group-hover:text-primary">
              {c.name}
            </div>
            <div className="mt-0.5 truncate text-xs text-muted-foreground no-underline!">
              {c.handle}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
