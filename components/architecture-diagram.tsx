import React from 'react';
import {
  Server,
  Globe,
  Database,
  Radio,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

interface TechCardProps {
  icon: React.ComponentType<{ className?: string }>;
  iconColor: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
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
      className={`rounded-2xl border border-border bg-card/60 p-5 sm:p-6 flex flex-col justify-between hover:border-border/80 transition-colors ${className}`}
    >
      <div>
        <div className="flex items-center gap-3 mb-3">
          <div
            className={`size-9 rounded-xl flex items-center justify-center font-bold ${iconColor}`}
          >
            <Icon className="size-4.5" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">{title}</h4>
            <p className="text-xs text-muted-foreground">{subtitle}</p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed mb-4">
          {description}
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/50">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] px-2 py-0.5 rounded-md bg-muted text-muted-foreground font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export function ArchitectureDiagram() {
  return (
    <div className="not-prose my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <TechCard
        className="lg:col-span-2"
        icon={Server}
        iconColor="bg-indigo-500/10 text-indigo-500"
        title="Backend API"
        subtitle="Laravel • PHP 8.3+"
        description="REST API engine untuk menangani business logic, routing, dan validasi data terpusat."
        tags={['Laravel', 'Laravel Octane', 'REST API']}
      />

      <TechCard
        icon={Radio}
        iconColor="bg-emerald-500/10 text-emerald-500"
        title="Real-Time Service"
        subtitle="Laravel Reverb"
        description="Broadcasting WebSocket untuk pengiriman notifikasi dan pembaruan data secara real-time tanpa polling."
        tags={['WebSockets', 'Laravel Echo']}
      />

      <TechCard
        className="lg:col-span-2"
        icon={Globe}
        iconColor="bg-sky-500/10 text-sky-500"
        title="Frontend Application"
        subtitle="React • TypeScript • Vite+"
        description="SPA terstruktur berdasarkan peran pengguna (auth, student, hrd, admin) dengan Tailwind CSS."
        tags={['React', 'TypeScript', 'Tailwind CSS', 'Vite']}
      />

      <TechCard
        icon={Database}
        iconColor="bg-amber-500/10 text-amber-500"
        title="Database & Storage"
        subtitle="PostgreSQL"
        description="Penyimpanan relasional dengan indexing terstruktur dan manajemen file berkas terisolasi."
        tags={['PostgreSQL', 'Disk Storage']}
      />

      <TechCard
        icon={ShieldCheck}
        iconColor="bg-rose-500/10 text-rose-500"
        title="Autentikasi & RBAC"
        subtitle="Laravel Sanctum"
        description="Manajemen autentikasi token Bearer dan kontrol akses berbasis role untuk multi-entitas."
        tags={['Sanctum', 'RBAC']}
      />

      <TechCard
        className="lg:col-span-2"
        icon={CheckCircle2}
        iconColor="bg-violet-500/10 text-violet-500"
        title="Testing Suite"
        subtitle="Pest PHP • Vitest"
        description="Pengujian fungsional end-to-end untuk API backend dan verifikasi logika komponen frontend."
        tags={['Pest PHP', 'Vitest']}
      />
    </div>
  );
}