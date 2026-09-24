import React from 'react';
import {
  Briefcase,
  UserCheck,
  Calendar,
  CheckCircle2,
  XCircle,
  Clock,
  Send,
  Building2,
  GraduationCap,
} from 'lucide-react';

export function RecruitmentFlow() {
  return (
    <div className="my-8 flex flex-col gap-4">
      <div className="rounded-xl border border-border bg-card p-4 sm:p-5">
        <div className="flex items-center gap-3 mb-2">
          <div className="size-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
            1
          </div>
          <h4 className="text-sm font-bold text-foreground">Pembuatan Lowongan & Notifikasi Otomatis</h4>
        </div>
        <p className="text-xs text-muted-foreground ml-10 mb-3 leading-relaxed">
          HRD mengisi detail posisi, kuota, target pelamar (kelas 12 / alumni), dan filter jurusan. Saat status diterbitkan, sistem langsung mengirim email dan notifikasi in-app ke siswa/alumni yang cocok.
        </p>
        <div className="ml-10 flex flex-wrap gap-2 text-[11px]">
          <span className="px-2 py-0.5 rounded-md bg-muted text-muted-foreground font-mono">HRD: Buat Lowongan</span>
          <span className="px-2 py-0.5 rounded-md bg-primary/10 text-primary font-mono">Sistem: Email & WebSockets</span>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card p-4 sm:p-5">
        <div className="flex items-center gap-3 mb-2">
          <div className="size-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
            2
          </div>
          <h4 className="text-sm font-bold text-foreground">Pengajuan Lamaran & Review Berkas</h4>
        </div>
        <p className="text-xs text-muted-foreground ml-10 mb-3 leading-relaxed">
          Pelamar mengecek lowongan dan melamar dengan melampirkan profil serta E-Portofolio. HRD membuka daftar pelamar dan memverifikasi berkas pendukung.
        </p>
        <div className="ml-10 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-2.5 flex items-start gap-2">
            <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-emerald-700 dark:text-emerald-300 block">Lolos Seleksi Berkas</span>
              <span className="text-[11px] text-muted-foreground">Status berubah ke in-progress, lanjut ke tahap penjadwalan tes.</span>
            </div>
          </div>

          <div className="rounded-lg border border-rose-500/20 bg-rose-500/5 p-2.5 flex items-start gap-2">
            <XCircle className="size-4 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-rose-700 dark:text-rose-300 block">Tidak Lolos Berkas</span>
              <span className="text-[11px] text-muted-foreground">Status ditolak, sistem otomatis mengirim notifikasi penolakan ke pelamar.</span>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card p-4 sm:p-5">
        <div className="flex items-center gap-3 mb-2">
          <div className="size-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
            3
          </div>
          <h4 className="text-sm font-bold text-foreground">Penjadwalan Tes & Validasi Kehadiran</h4>
        </div>
        <p className="text-xs text-muted-foreground ml-10 mb-3 leading-relaxed">
          HRD mengatur agenda tes (waktu, lokasi, passing grade) dan mengirim pengingat ke peserta. Di hari pelaksanaan, Admin BKK memvalidasi daftar kehadiran peserta di lokasi.
        </p>
        <div className="ml-10 flex flex-wrap gap-2 text-[11px]">
          <span className="px-2 py-0.5 rounded-md bg-muted text-muted-foreground font-mono">HRD: Agenda Tes & Pengingat</span>
          <span className="px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-700 dark:text-amber-300 font-mono">Admin BKK: Validasi Presensi</span>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card p-4 sm:p-5">
        <div className="flex items-center gap-3 mb-2">
          <div className="size-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
            4
          </div>
          <h4 className="text-sm font-bold text-foreground">Evaluasi Hasil Seleksi & Keputusan Akhir</h4>
        </div>
        <p className="text-xs text-muted-foreground ml-10 mb-3 leading-relaxed">
          HRD menginput skor psikotes, interview, MCU, nilai akhir, dan mengunggah surat keputusan.
        </p>
        <div className="ml-10 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-2.5 flex items-start gap-2">
            <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-emerald-700 dark:text-emerald-300 block">Diterima Kerja</span>
              <span className="text-[11px] text-muted-foreground">Notifikasi kelulusan terkirim, surat penempatan siap diunduh, data otomatis masuk modul penempatan.</span>
            </div>
          </div>

          <div className="rounded-lg border border-rose-500/20 bg-rose-500/5 p-2.5 flex items-start gap-2">
            <XCircle className="size-4 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-rose-700 dark:text-rose-300 block">Tidak Diterima / Cadangan</span>
              <span className="text-[11px] text-muted-foreground">Pelamar menerima pemberitahuan hasil seleksi akhir di portal siswa.</span>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card p-4 sm:p-5">
        <div className="flex items-center gap-3 mb-2">
          <div className="size-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
            5
          </div>
          <h4 className="text-sm font-bold text-foreground">Monitoring Penempatan & Tracer Study</h4>
        </div>
        <p className="text-xs text-muted-foreground ml-10 leading-relaxed">
          Admin BKK dan HRD memantau retensi kerja lulusan pada bulan ke-3, ke-6, dan ke-12. Data yang masuk otomatis tersambung ke pelaporan keterserapan dan survei tracer study alumni.
        </p>
      </div>
    </div>
  );
}
