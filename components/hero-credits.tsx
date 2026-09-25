'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarGroup,
} from '@/components/ui/avatar';
import { CONTRIBUTORS, contributorInitials } from '@/lib/contributors';
import { i18n } from '@/lib/i18n';

export function HeroCredits() {
  const params = useParams<{ lang?: string }>();
  const lang = params?.lang ?? i18n.defaultLanguage;

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <span className="text-sm text-muted-foreground select-none">Made with ❤️ by</span>

      <AvatarGroup>
        {CONTRIBUTORS.map((c) => (
          <Link
            key={c.name}
            href={`/${lang}/docs/contributor#kontributor`}
            aria-label={c.name}
            className="relative cursor-pointer rounded-full transition-transform duration-200 hover:z-10 hover:-translate-y-0.5 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
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
