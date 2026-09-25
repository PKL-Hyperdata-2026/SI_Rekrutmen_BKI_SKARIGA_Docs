'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CONTRIBUTORS, contributorInitials as initials } from '@/lib/contributors';

export function ContributorsGrid() {
  return (
    <div className="not-prose my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {CONTRIBUTORS.map((c) => (
        <a
          key={c.name}
          href={c.url}
          target="_blank"
          rel="noreferrer noopener"
          className="group relative flex items-center gap-3.5 p-3.5 rounded-2xl border border-border bg-card/60 hover:bg-card hover:border-primary/40 hover:shadow-md transition-all duration-200 no-underline!"
        >
          <Avatar className="size-12 border border-border group-hover:border-primary/50 transition-colors">
            <AvatarImage src={c.avatar} alt={c.name} loading="lazy" />
            <AvatarFallback>{initials(c.name)}</AvatarFallback>
          </Avatar>

          <div className="min-w-0 flex-1">
            <div className="text-sm font-bold text-foreground truncate group-hover:text-primary transition-colors no-underline!">
              {c.name}
            </div>
            <div className="text-xs text-muted-foreground truncate mt-0.5 no-underline!">
              {c.handle}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
