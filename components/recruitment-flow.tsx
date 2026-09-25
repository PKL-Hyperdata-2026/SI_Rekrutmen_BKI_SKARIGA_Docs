'use client';

import { useParams } from 'next/navigation';
import { CheckCircle2, XCircle } from 'lucide-react';
import { RECRUITMENT_FLOW_COPY, type FlowStep } from '@/lib/diagram-copy';
import { i18n } from '@/lib/i18n';

const CHIP_TONE = {
  muted: 'bg-muted text-muted-foreground',
  amber: 'bg-amber-500/10 text-amber-700 dark:text-amber-300',
} as const;

const BRANCH_TONE = {
  emerald: {
    wrapper: 'border-emerald-500/20 bg-emerald-500/5',
    icon: 'text-emerald-600 dark:text-emerald-400',
    title: 'text-emerald-700 dark:text-emerald-300',
  },
  rose: {
    wrapper: 'border-rose-500/20 bg-rose-500/5',
    icon: 'text-rose-600 dark:text-rose-400',
    title: 'text-rose-700 dark:text-rose-300',
  },
} as const;

function Step({ step, index }: { step: FlowStep; index: number }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4 sm:p-5">
      <div className="mb-2 flex items-center gap-3">
        <div className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">
          {index + 1}
        </div>
        <h4 className="text-sm font-bold text-foreground">{step.title}</h4>
      </div>

      <p className="mb-3 ml-10 text-xs leading-relaxed text-muted-foreground">
        {step.description}
      </p>

      {step.chips && step.chips.length > 0 && (
        <div className="ml-10 flex flex-wrap gap-2 text-[11px]">
          {step.chips.map((chip) => (
            <span key={chip.label} className={`rounded-md px-2 py-0.5 font-mono ${CHIP_TONE[chip.tone]}`}>
              {chip.label}
            </span>
          ))}
        </div>
      )}

      {step.branches && step.branches.length > 0 && (
        <div className="ml-10 grid grid-cols-1 gap-2 text-xs sm:grid-cols-2">
          {step.branches.map((branch) => {
            const tone = BRANCH_TONE[branch.tone];
            const Icon = branch.tone === 'emerald' ? CheckCircle2 : XCircle;
            return (
              <div
                key={branch.title}
                className={`flex items-start gap-2 rounded-lg border p-2.5 ${tone.wrapper}`}
              >
                <Icon className={`mt-0.5 size-4 shrink-0 ${tone.icon}`} />
                <div>
                  <span className={`block font-semibold ${tone.title}`}>{branch.title}</span>
                  <span className="text-[11px] text-muted-foreground">{branch.description}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function RecruitmentFlow() {
  const params = useParams<{ lang?: string }>();
  const lang = params?.lang ?? i18n.defaultLanguage;
  const steps = RECRUITMENT_FLOW_COPY[lang] ?? RECRUITMENT_FLOW_COPY[i18n.defaultLanguage];

  return (
    <div className="my-8 flex flex-col gap-4">
      {steps.map((step, index) => (
        <Step key={step.title} step={step} index={index} />
      ))}
    </div>
  );
}
