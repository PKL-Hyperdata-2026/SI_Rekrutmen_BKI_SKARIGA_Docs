import Link from 'next/link';
import {
  Layers,
  Terminal,
  Workflow,
  ShieldCheck,
  ArrowUpRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HeroPreview } from '@/components/hero-preview';
import { HeroCredits } from '@/components/hero-credits';
import {
  CodeBlock,
  CodeBlockActions,
  CodeBlockCopyButton,
  CodeBlockFilename,
  CodeBlockHeader,
  CodeBlockTitle,
} from '@/components/ai-elements/code-block';
import { GithubIcon } from '@/components/icons/icons';
import { MobileNavControls } from '@/components/nav-controls';
import { PageEnter, StaggerGroup, StaggerItem } from '@/components/motion-enter';
import { HOME_COPY, QUICK_START } from '@/lib/home-copy';
import { i18n } from '@/lib/i18n';

const SECTION_ICONS = [Layers, Workflow, ShieldCheck, Terminal];

export function generateStaticParams() {
  return i18n.languages.map((lang) => ({ lang }));
}

export default async function HomePage(props: PageProps<'/[lang]'>) {
  const { lang } = await props.params;
  const copy = HOME_COPY[lang] ?? HOME_COPY[i18n.defaultLanguage];
  const prefix = `/${lang}`;

  return (
    <main className="relative mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-6xl flex-col justify-between px-4 py-12 sm:px-6 lg:px-8">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-48 -z-10 hidden h-75 w-175 -translate-x-1/2 bg-blue-100 opacity-50 blur-3xl md:block dark:bg-blue-500/20 dark:opacity-40"
      />

      <PageEnter className="flex flex-col items-center pt-8 pb-12 text-center">
        <div className="mb-6 flex w-full justify-end">
          <MobileNavControls />
        </div>

        <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.15] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          {copy.heading}
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {copy.subheading}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <Button
            size="lg"
            variant="outline"
            nativeButton={false}
            render={<Link href={`${prefix}/docs`} />}
            className="cursor-pointer"
          >
            {copy.readDocs}
            <ArrowUpRight />
          </Button>

          <Button
            size="lg"
            nativeButton={false}
            render={<Link href="https://github.com/orgs/PKL-Hyperdata-2026/repositories" />}
            className="cursor-pointer"
          >
            <GithubIcon className='text-white dark:text-black' />
            {copy.starGithub}
            <ArrowUpRight />
          </Button>
        </div>

        <div className="w-full pt-14 md:w-10/12">
          <HeroPreview />
        </div>

        <div className="pt-10">
          <HeroCredits />
        </div>
      </PageEnter>

      <StaggerGroup className="my-8 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-4">
        {copy.sections.map((section, index) => {
          const Icon = SECTION_ICONS[index] ?? Layers;
          return (
            <StaggerItem key={section.href}>
              <Link
                href={`${prefix}${section.href}`}
                className="group flex h-full cursor-pointer flex-col rounded-2xl border border-border bg-card p-5 transition-all duration-150 hover:border-primary/40 hover:bg-accent/40"
              >
                <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-105">
                  <Icon className="size-5" />
                </div>
                <h2 className="mb-1.5 flex items-center justify-between text-base font-bold text-foreground">
                  <span>{section.title}</span>
                  <ArrowUpRight className="size-4 -translate-x-1 text-primary opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                </h2>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {section.description}
                </p>
              </Link>
            </StaggerItem>
          );
        })}
      </StaggerGroup>

      <PageEnter delay={0.15} className="mt-6 rounded-2xl border border-border bg-card/60 p-6">
        <div className="mb-4 flex items-center gap-2">
          <Terminal className="size-4 text-primary" />
          <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
            {copy.quickStart}
          </h3>
        </div>
        <StaggerGroup className="grid grid-cols-1 gap-4 text-left md:grid-cols-3">
          {QUICK_START.map((item) => (
            <StaggerItem key={item.terminal}>
              <CodeBlock code={item.command} language="sh">
                <CodeBlockHeader>
                  <CodeBlockTitle>
                    <CodeBlockFilename>{item.label}</CodeBlockFilename>
                  </CodeBlockTitle>
                  <CodeBlockActions>
                    <CodeBlockCopyButton className="cursor-pointer" />
                  </CodeBlockActions>
                </CodeBlockHeader>
              </CodeBlock>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </PageEnter>

      <footer className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pb-4 pt-8 text-center text-xs text-muted-foreground sm:flex-row">
        <p>{copy.footerTagline}</p>
        <div className="flex items-center gap-4">
          {copy.footerLinks.map((link) => (
            <Link
              key={link.href}
              href={`${prefix}${link.href}`}
              className="cursor-pointer transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </footer>
    </main>
  );
}
