import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Layers,
  Terminal,
  Users,
  Workflow,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

export default function HomePage() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-col justify-between py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
      <div className="flex flex-col items-center text-center pt-8 pb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold tracking-wide uppercase mb-6">
          <Sparkles className="size-3.5" />
          <span>Bursa Kerja Khusus • SMK PGRI 3 Malang</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground max-w-4xl leading-[1.15]">
          Dokumentasi Sistem Informasi Rekrutmen BKI SKARIGA
        </h1>

        <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Semua panduan teknis yang kamu butuhkan: struktur arsitektur sistem, alur seleksi kerja dari awal sampai penempatan, referensi API, dan cara setup environment lokal.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-90 transition-opacity"
          >
            <BookOpen className="size-4" />
            <span>Mulai Baca Dokumen</span>
            <ArrowRight className="size-4" />
          </Link>

          <Link
            href="/docs/development/getting-started"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <Terminal className="size-4" />
            <span>Setup & Cara Menjalankan</span>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 my-8">
        <Link
          href="/docs/architecture"
          className="group flex flex-col p-5 rounded-2xl border border-border bg-card hover:border-primary/40 hover:bg-accent/40 transition-all duration-150"
        >
          <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
            <Layers className="size-5" />
          </div>
          <h2 className="text-base font-bold text-foreground mb-1.5 flex items-center justify-between">
            <span>Arsitektur Sistem</span>
            <ArrowRight className="size-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
          </h2>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Struktur decoupled Laravel 13 API dan frontend React 19 dengan runtime Bun + Vite.
          </p>
        </Link>

        <Link
          href="/docs/business-flow"
          className="group flex flex-col p-5 rounded-2xl border border-border bg-card hover:border-primary/40 hover:bg-accent/40 transition-all duration-150"
        >
          <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
            <Workflow className="size-5" />
          </div>
          <h2 className="text-base font-bold text-foreground mb-1.5 flex items-center justify-between">
            <span>Alur Seleksi Kerja</span>
            <ArrowRight className="size-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
          </h2>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Proses lengkap dari publikasi loker, verifikasi berkas, tes/interview, sampai penempatan.
          </p>
        </Link>

        <Link
          href="/docs/api-reference"
          className="group flex flex-col p-5 rounded-2xl border border-border bg-card hover:border-primary/40 hover:bg-accent/40 transition-all duration-150"
        >
          <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
            <ShieldCheck className="size-5" />
          </div>
          <h2 className="text-base font-bold text-foreground mb-1.5 flex items-center justify-between">
            <span>Referensi API</span>
            <ArrowRight className="size-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
          </h2>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Daftar endpoint REST API, autentikasi Sanctum, dan kontrol hak akses tiap role.
          </p>
        </Link>

        <Link
          href="/docs/development/getting-started"
          className="group flex flex-col p-5 rounded-2xl border border-border bg-card hover:border-primary/40 hover:bg-accent/40 transition-all duration-150"
        >
          <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
            <Terminal className="size-5" />
          </div>
          <h2 className="text-base font-bold text-foreground mb-1.5 flex items-center justify-between">
            <span>Panduan Dev & Run</span>
            <ArrowRight className="size-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
          </h2>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Perintah cepat buat menjalankan backend, frontend, database, dan suite pengujian otomatis.
          </p>
        </Link>
      </div>

      <div className="mt-6 p-6 rounded-2xl border border-border bg-card/60 backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-4">
          <Terminal className="size-4 text-primary" />
          <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
            Quick Start (Development Run)
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
          <div className="rounded-xl border border-border bg-background p-3.5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-foreground">Backend API (All-in-One)</span>
              <span className="text-[10px] text-muted-foreground bg-muted px-1.5 py-0.5 rounded font-mono">Terminal 1</span>
            </div>
            <pre className="text-xs text-muted-foreground font-mono bg-muted/50 p-2.5 rounded-lg overflow-x-auto">
              <code>cd backend{'\n'}php artisan dev</code>
            </pre>
          </div>

          <div className="rounded-xl border border-border bg-background p-3.5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-foreground">Frontend App</span>
              <span className="text-[10px] text-muted-foreground bg-muted px-1.5 py-0.5 rounded font-mono">Terminal 2</span>
            </div>
            <pre className="text-xs text-muted-foreground font-mono bg-muted/50 p-2.5 rounded-lg overflow-x-auto">
              <code>cd frontend{'\n'}bun run dev</code>
            </pre>
          </div>

          <div className="rounded-xl border border-border bg-background p-3.5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-foreground">Documentation</span>
              <span className="text-[10px] text-muted-foreground bg-muted px-1.5 py-0.5 rounded font-mono">Terminal 3</span>
            </div>
            <pre className="text-xs text-muted-foreground font-mono bg-muted/50 p-2.5 rounded-lg overflow-x-auto">
              <code>cd documentation{'\n'}bun run dev</code>
            </pre>
          </div>
        </div>
      </div>

      <footer className="pt-8 pb-4 text-center text-xs text-muted-foreground border-t border-border mt-12 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>BKI SKARIGA • SMK PGRI 3 Malang</p>
        <div className="flex items-center gap-4">
          <Link href="/docs" className="hover:text-foreground transition-colors">Dokumentasi</Link>
          <Link href="/docs/api-reference" className="hover:text-foreground transition-colors">API</Link>
          <Link href="/docs/development/getting-started" className="hover:text-foreground transition-colors">Cara Menjalankan</Link>
        </div>
      </footer>
    </main>
  );
}
