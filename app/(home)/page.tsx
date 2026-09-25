import Link from 'next/link';
import {
  BookOpen,
  Layers,
  Terminal,
  Workflow,
  ShieldCheck,
  ArrowUpRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HeroPreview } from '@/components/hero-preview';
import { HeroCredits } from '@/components/hero-credits';
import { CodeBlock, CodeBlockActions, CodeBlockCopyButton, CodeBlockFilename, CodeBlockHeader, CodeBlockTitle } from '@/components/ai-elements/code-block';
import { GithubIcon } from '@/components/icons/icons';

const SECTIONS = [
  {
    href: '/docs/architecture',
    icon: Layers,
    title: 'Arsitektur Sistem',
    description:
      'Struktur decoupled Laravel 13 API dan frontend React 19 dengan runtime Bun + Vite.',
  },
  {
    href: '/docs/business-flow',
    icon: Workflow,
    title: 'Alur Seleksi Kerja',
    description:
      'Proses lengkap dari publikasi loker, verifikasi berkas, tes/interview, sampai penempatan.',
  },
  {
    href: '/docs/api-reference',
    icon: ShieldCheck,
    title: 'Referensi API',
    description:
      'Daftar endpoint REST API, autentikasi Sanctum, dan kontrol hak akses tiap role.',
  },
  {
    href: '/docs/development/getting-started',
    icon: Terminal,
    title: 'Panduan Dev & Run',
    description:
      'Perintah cepat buat menjalankan backend, frontend, database, dan suite pengujian otomatis.',
  },
];

const QUICK_START = [
  { label: 'Backend', terminal: 'Terminal 1', command: 'cd backend\nphp artisan dev' },
  { label: 'Frontend', terminal: 'Terminal 2', command: 'cd frontend\nbun run dev' },
  { label: 'Documentation', terminal: 'Terminal 3', command: 'cd documentation\nbun run dev' },
];

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-6xl flex-col justify-between px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center pt-8 pb-12 text-center">
        <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.15] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Dokumentasi Sistem Informasi Rekrutmen BKI SKARIGA
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Semua panduan teknis yang kamu butuhkan: struktur arsitektur sistem, alur seleksi kerja
          dari awal sampai penempatan, referensi API, dan cara setup environment lokal.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <Button size="lg" variant="outline" nativeButton={false} render={<Link href="/docs" />}>
            <BookOpen />
            Mulai Baca Dokumentasi
            <ArrowUpRight />
          </Button>

          <Button
            size="lg"
            nativeButton={false}
            render={<Link href="https://github.com/orgs/PKL-Hyperdata-2026/repositories" />}
          >
            <GithubIcon/>
            Star on Github
            <ArrowUpRight />
          </Button>
        </div>

        <div className="w-full pt-14 md:w-10/12">
          <HeroPreview />
        </div>

        <div className="pt-10">
          <HeroCredits />
        </div>
      </div>

      <div className="my-8 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-4">
        {SECTIONS.map(({ href, icon: Icon, title, description }) => (
          <Link
            key={href}
            href={href}
            className="group flex flex-col rounded-2xl border border-border bg-card p-5 transition-all duration-150 hover:border-primary/40 hover:bg-accent/40"
          >
            <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-105">
              <Icon className="size-5" />
            </div>
            <h2 className="mb-1.5 flex items-center justify-between text-base font-bold text-foreground">
              <span>{title}</span>
              <ArrowUpRight className="size-4 -translate-x-1 text-primary opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
            </h2>
            <p className="text-xs leading-relaxed text-muted-foreground">{description}</p>
          </Link>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-border bg-card/60 p-6">
        <div className="mb-4 flex items-center gap-2">
          <Terminal className="size-4 text-primary" />
          <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
            Quick Start
          </h3>
        </div>
        <div className="grid grid-cols-1 gap-4 text-left md:grid-cols-3">
          {QUICK_START.map((item) => (
            <CodeBlock key={item.terminal} code={item.command} language="sh">
              <CodeBlockHeader>
                <CodeBlockTitle>
                  <CodeBlockFilename>{item.label}</CodeBlockFilename>
                </CodeBlockTitle>
                <CodeBlockActions>
                  <CodeBlockCopyButton className='cursor-pointer' />
                </CodeBlockActions>
              </CodeBlockHeader>
            </CodeBlock>
          ))}
        </div>
      </div>

      <footer className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pb-4 pt-8 text-center text-xs text-muted-foreground sm:flex-row">
        <p>BKI SKARIGA • SMK PGRI 3 Malang</p>
        <div className="flex items-center gap-4">
          <Link href="/docs" className="transition-colors hover:text-foreground">
            Dokumentasi
          </Link>
          <Link href="/docs/api-reference" className="transition-colors hover:text-foreground">
            API
          </Link>
          <Link
            href="/docs/development/getting-started"
            className="transition-colors hover:text-foreground"
          >
            Cara Menjalankan
          </Link>
        </div>
      </footer>
    </main>
  );
}
