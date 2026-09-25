export interface TechCardCopy {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
}

export interface ArchitectureCopy {
  backend: TechCardCopy;
  realtime: TechCardCopy;
  frontend: TechCardCopy;
  database: TechCardCopy;
  auth: TechCardCopy;
  testing: TechCardCopy;
}

export const ARCHITECTURE_COPY: Record<string, ArchitectureCopy> = {
  en: {
    backend: {
      title: 'Backend API',
      subtitle: 'Laravel • PHP 8.3+',
      description:
        'REST API engine handling business logic, routing, and centralized data validation.',
      tags: ['Laravel', 'Laravel Octane', 'REST API'],
    },
    realtime: {
      title: 'Real-Time Service',
      subtitle: 'Laravel Reverb',
      description:
        'WebSocket broadcasting that pushes notifications and data updates in real time without polling.',
      tags: ['WebSockets', 'Laravel Echo'],
    },
    frontend: {
      title: 'Frontend Application',
      subtitle: 'React • TypeScript • Vite+',
      description:
        'SPA structured by user role (auth, student, hrd, admin) and styled with Tailwind CSS.',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    },
    database: {
      title: 'Database & Storage',
      subtitle: 'PostgreSQL',
      description:
        'Relational storage with structured indexing and isolated file document management.',
      tags: ['PostgreSQL', 'Disk Storage'],
    },
    auth: {
      title: 'Authentication & RBAC',
      subtitle: 'Laravel Sanctum',
      description:
        'Bearer token authentication and role-based access control across multiple entities.',
      tags: ['Sanctum', 'RBAC'],
    },
    testing: {
      title: 'Testing Suite',
      subtitle: 'Pest PHP • Vitest',
      description:
        'End-to-end functional testing for the backend API and logic verification for frontend components.',
      tags: ['Pest PHP', 'Vitest'],
    },
  },
  id: {
    backend: {
      title: 'Backend API',
      subtitle: 'Laravel • PHP 8.3+',
      description:
        'REST API engine untuk menangani business logic, routing, dan validasi data terpusat.',
      tags: ['Laravel', 'Laravel Octane', 'REST API'],
    },
    realtime: {
      title: 'Real-Time Service',
      subtitle: 'Laravel Reverb',
      description:
        'Broadcasting WebSocket untuk pengiriman notifikasi dan pembaruan data secara real-time tanpa polling.',
      tags: ['WebSockets', 'Laravel Echo'],
    },
    frontend: {
      title: 'Frontend Application',
      subtitle: 'React • TypeScript • Vite+',
      description:
        'SPA terstruktur berdasarkan peran pengguna (auth, student, hrd, admin) dengan Tailwind CSS.',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    },
    database: {
      title: 'Database & Storage',
      subtitle: 'PostgreSQL',
      description:
        'Penyimpanan relasional dengan indexing terstruktur dan manajemen file berkas terisolasi.',
      tags: ['PostgreSQL', 'Disk Storage'],
    },
    auth: {
      title: 'Autentikasi & RBAC',
      subtitle: 'Laravel Sanctum',
      description:
        'Manajemen autentikasi token Bearer dan kontrol akses berbasis role untuk multi-entitas.',
      tags: ['Sanctum', 'RBAC'],
    },
    testing: {
      title: 'Testing Suite',
      subtitle: 'Pest PHP • Vitest',
      description:
        'Pengujian fungsional end-to-end untuk API backend dan verifikasi logika komponen frontend.',
      tags: ['Pest PHP', 'Vitest'],
    },
  },
};

export interface FlowBranch {
  title: string;
  description: string;
  tone: 'emerald' | 'rose';
}

export interface FlowStep {
  title: string;
  description: string;
  chips?: { label: string; tone: 'muted' | 'amber' }[];
  branches?: FlowBranch[];
}

export const RECRUITMENT_FLOW_COPY: Record<string, FlowStep[]> = {
  en: [
    {
      title: 'Vacancy Creation & Automatic Notification',
      description:
        'HRD fills in the position details, quota, applicant targets (grade 12 / alumni), and major filters. Once the status is published, the system immediately sends email and in-app notifications to matching students and alumni.',
      chips: [
        { label: 'HRD: Create Vacancy', tone: 'muted' },
        { label: 'System: Email & WebSockets', tone: 'muted' },
      ],
    },
    {
      title: 'Application Submission & Document Review',
      description:
        'Applicants browse vacancies and apply by attaching their profile and e-portfolio. HRD opens the applicant list and verifies the supporting documents.',
      branches: [
        {
          title: 'Passed Document Screening',
          description:
            'The status moves to in-progress and proceeds to the test scheduling stage.',
          tone: 'emerald',
        },
        {
          title: 'Failed Document Screening',
          description:
            'The status is rejected and the system automatically sends a rejection notification to the applicant.',
          tone: 'rose',
        },
      ],
    },
    {
      title: 'Test Scheduling & Attendance Validation',
      description:
        'HRD sets the test agenda (time, location, passing grade) and sends reminders to participants. On the day of the test, the BKI Admin validates the attendance list at the venue.',
      chips: [
        { label: 'HRD: Test Agenda & Reminder', tone: 'muted' },
        { label: 'BKI Admin: Attendance Validation', tone: 'amber' },
      ],
    },
    {
      title: 'Selection Result Evaluation & Final Decision',
      description:
        'HRD inputs the psychotest, interview, and MCU scores, the final score, and uploads the decision letter.',
      branches: [
        {
          title: 'Hired',
          description:
            'The acceptance notification is sent, the placement letter is ready to download, and the data flows automatically into the placement module.',
          tone: 'emerald',
        },
        {
          title: 'Not Accepted / Reserved',
          description:
            'The applicant receives the final selection result notification in the student portal.',
          tone: 'rose',
        },
      ],
    },
    {
      title: 'Placement Monitoring & Tracer Study',
      description:
        'The BKI Admin and HRD monitor graduate job retention at months 3, 6, and 12. The incoming data feeds automatically into job absorption reporting and the alumni tracer study survey.',
    },
  ],
  id: [
    {
      title: 'Pembuatan Lowongan & Notifikasi Otomatis',
      description:
        'HRD mengisi detail posisi, kuota, target pelamar (kelas 12 / alumni), dan filter jurusan. Saat status diterbitkan, sistem langsung mengirim email dan notifikasi in-app ke siswa/alumni yang cocok.',
      chips: [
        { label: 'HRD: Buat Lowongan', tone: 'muted' },
        { label: 'Sistem: Email & WebSockets', tone: 'muted' },
      ],
    },
    {
      title: 'Pengajuan Lamaran & Review Berkas',
      description:
        'Pelamar mengecek lowongan dan melamar dengan melampirkan profil serta E-Portofolio. HRD membuka daftar pelamar dan memverifikasi berkas pendukung.',
      branches: [
        {
          title: 'Lolos Seleksi Berkas',
          description:
            'Status berubah ke in-progress, lanjut ke tahap penjadwalan tes.',
          tone: 'emerald',
        },
        {
          title: 'Tidak Lolos Berkas',
          description:
            'Status ditolak, sistem otomatis mengirim notifikasi penolakan ke pelamar.',
          tone: 'rose',
        },
      ],
    },
    {
      title: 'Penjadwalan Tes & Validasi Kehadiran',
      description:
        'HRD mengatur agenda tes (waktu, lokasi, passing grade) dan mengirim pengingat ke peserta. Di hari pelaksanaan, Admin BKI memvalidasi daftar kehadiran peserta di lokasi.',
      chips: [
        { label: 'HRD: Agenda Tes & Pengingat', tone: 'muted' },
        { label: 'Admin BKI: Validasi Presensi', tone: 'amber' },
      ],
    },
    {
      title: 'Evaluasi Hasil Seleksi & Keputusan Akhir',
      description:
        'HRD menginput skor psikotes, interview, MCU, nilai akhir, dan mengunggah surat keputusan.',
      branches: [
        {
          title: 'Diterima Kerja',
          description:
            'Notifikasi kelulusan terkirim, surat penempatan siap diunduh, data otomatis masuk modul penempatan.',
          tone: 'emerald',
        },
        {
          title: 'Tidak Diterima / Cadangan',
          description:
            'Pelamar menerima pemberitahuan hasil seleksi akhir di portal siswa.',
          tone: 'rose',
        },
      ],
    },
    {
      title: 'Monitoring Penempatan & Tracer Study',
      description:
        'Admin BKI dan HRD memantau retensi kerja lulusan pada bulan ke-3, ke-6, dan ke-12. Data yang masuk otomatis tersambung ke pelaporan keterserapan dan survei tracer study alumni.',
    },
  ],
};
