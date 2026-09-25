'use client';

import { useParams } from 'next/navigation';
import {
  Server,
  Globe,
  Database,
  Radio,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { ARCHITECTURE_COPY, type TechCardCopy } from '@/lib/diagram-copy';
import { i18n } from '@/lib/i18n';

interface TechCardProps extends TechCardCopy {
  icon: React.ComponentType<{ className?: string }>;
  iconColor: string;
  className?: string;
}

function TechCard({
  icon: Icon,
  iconColor,
  title,
  subtitle,
  description,
  tags,
  className = '',
}: TechCardProps) {
  return (
    <div
      className={`flex flex-col justify-between rounded-2xl border border-border bg-card/60 p-5 transition-colors hover:border-border/80 sm:p-6 ${className}`}
    >
      <div>
        <div className="mb-3 flex items-center gap-3">
          <div
            className={`flex size-9 items-center justify-center rounded-xl font-bold ${iconColor}`}
          >
            <Icon className="size-4.5" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">{title}</h4>
            <p className="text-xs text-muted-foreground">{subtitle}</p>
          </div>
        </div>
        <p className="mb-4 text-xs leading-relaxed text-muted-foreground">{description}</p>
      </div>

      <div className="flex flex-wrap gap-1.5 border-t border-border/50 pt-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export function ArchitectureDiagram() {
  const params = useParams<{ lang?: string }>();
  const lang = params?.lang ?? i18n.defaultLanguage;
  const copy = ARCHITECTURE_COPY[lang] ?? ARCHITECTURE_COPY[i18n.defaultLanguage];

  return (
    <div className="not-prose my-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <TechCard
        className="lg:col-span-2"
        icon={Server}
        iconColor="bg-indigo-500/10 text-indigo-500"
        {...copy.backend}
      />

      <TechCard
        icon={Radio}
        iconColor="bg-emerald-500/10 text-emerald-500"
        {...copy.realtime}
      />

      <TechCard
        className="lg:col-span-2"
        icon={Globe}
        iconColor="bg-sky-500/10 text-sky-500"
        {...copy.frontend}
      />

      <TechCard
        icon={Database}
        iconColor="bg-amber-500/10 text-amber-500"
        {...copy.database}
      />

      <TechCard
        icon={ShieldCheck}
        iconColor="bg-rose-500/10 text-rose-500"
        {...copy.auth}
      />

      <TechCard
        className="lg:col-span-2"
        icon={CheckCircle2}
        iconColor="bg-violet-500/10 text-violet-500"
        {...copy.testing}
      />
    </div>
  );
}
