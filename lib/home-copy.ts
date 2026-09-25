export interface HomeSection {
  href: string;
  title: string;
  description: string;
}

export interface HomeCopy {
  heading: string;
  subheading: string;
  readDocs: string;
  starGithub: string;
  quickStart: string;
  sections: HomeSection[];
  footerTagline: string;
  footerLinks: { href: string; label: string }[];
}

const ICONS = ['architecture', 'business-flow', 'api-reference', 'development'] as const;
export const SECTION_ICONS = ICONS;

export const HOME_COPY: Record<string, HomeCopy> = {
  en: {
    heading: 'BKI SKARIGA Recruitment Information System Documentation',
    subheading:
      'Everything technical you need: system architecture, the full selection-to-placement flow, the REST API reference, and how to set up the environment locally.',
    readDocs: 'Documentations',
    starGithub: 'Star on Github',
    quickStart: 'Quick Start',
    sections: [
      {
        href: '/docs/architecture',
        title: 'System Architecture',
        description:
          'Decoupled Laravel 13 API and React 19 frontend running on Bun and Vite.',
      },
      {
        href: '/docs/business-flow',
        title: 'Recruitment Flow',
        description:
          'The complete process: publishing a vacancy, screening documents, tests and interviews, through to placement.',
      },
      {
        href: '/docs/api-reference',
        title: 'API Reference',
        description:
          'Every REST endpoint, Sanctum authentication, and the access rules for each role.',
      },
      {
        href: '/docs/development/getting-started',
        title: 'Development Guide',
        description:
          'Commands to run the backend, frontend, database, and the automated test suites.',
      },
    ],
    footerTagline: 'BKI SKARIGA • SMK PGRI 3 Malang',
    footerLinks: [
      { href: '/docs', label: 'Documentation' },
      { href: '/docs/api-reference', label: 'API' },
      { href: '/docs/development/getting-started', label: 'How to Run' },
    ],
  },
  id: {
    heading: 'Dokumentasi Sistem Informasi Rekrutmen BKI SKARIGA',
    subheading:
      'Semua panduan teknis yang kamu butuhkan: struktur arsitektur sistem, alur seleksi kerja dari awal sampai penempatan, referensi API, dan cara setup environment lokal.',
    readDocs: 'Baca Dokumentasi',
    starGithub: 'Star on Github',
    quickStart: 'Quick Start',
    sections: [
      {
        href: '/docs/architecture',
        title: 'Arsitektur Sistem',
        description:
          'Struktur decoupled Laravel 13 API dan frontend React 19 dengan runtime Bun + Vite.',
      },
      {
        href: '/docs/business-flow',
        title: 'Alur Seleksi Kerja',
        description:
          'Proses lengkap dari publikasi loker, verifikasi berkas, tes/interview, sampai penempatan.',
      },
      {
        href: '/docs/api-reference',
        title: 'Referensi API',
        description:
          'Daftar endpoint REST API, autentikasi Sanctum, dan kontrol hak akses tiap role.',
      },
      {
        href: '/docs/development/getting-started',
        title: 'Panduan Dev & Run',
        description:
          'Perintah cepat buat menjalankan backend, frontend, database, dan suite pengujian otomatis.',
      },
    ],
    footerTagline: 'BKI SKARIGA • SMK PGRI 3 Malang',
    footerLinks: [
      { href: '/docs', label: 'Dokumentasi' },
      { href: '/docs/api-reference', label: 'API' },
      { href: '/docs/development/getting-started', label: 'Cara Menjalankan' },
    ],
  },
};

export const QUICK_START = [
  { label: 'Backend', terminal: 'Terminal 1', command: 'cd backend\nphp artisan dev' },
  { label: 'Frontend', terminal: 'Terminal 2', command: 'cd frontend\nbun run dev' },
  { label: 'Documentation', terminal: 'Terminal 3', command: 'cd documentation\nbun run dev' },
];
