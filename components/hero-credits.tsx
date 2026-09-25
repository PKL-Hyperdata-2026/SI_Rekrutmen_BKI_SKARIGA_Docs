'use client';

import Link from 'next/link';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarGroup,
} from '@/components/ui/avatar';
import { CONTRIBUTORS, contributorInitials } from '@/lib/contributors';

export function HeroCredits() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <span className="text-sm text-muted-foreground select-none">Made with ❤️ by</span>

      <AvatarGroup>
        {CONTRIBUTORS.map((c) => (
          <Link
            key={c.name}
            href="/docs/contributor#kontributor"
            aria-label={c.name}
            className="relative rounded-full transition-transform duration-200 hover:z-10 hover:-translate-y-0.5 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            <Avatar>
              <AvatarImage src={c.avatar} alt={c.name} />
              <AvatarFallback>{contributorInitials(c.name)}</AvatarFallback>
            </Avatar>
          </Link>
        ))}
      </AvatarGroup>
    </div>
  );
}