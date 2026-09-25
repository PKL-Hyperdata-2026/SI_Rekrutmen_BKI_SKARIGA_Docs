import { RootProvider } from 'fumadocs-ui/provider/next';
import { i18nProvider } from 'fumadocs-ui/i18n';
import { translations } from '@/lib/layout.shared';
import { i18n } from '@/lib/i18n';
import { HtmlLang } from '@/components/html-lang';

export function generateStaticParams() {
  return i18n.languages.map((lang) => ({ lang }));
}

export default async function LangLayout({
  params,
  children,
}: LayoutProps<'/[lang]'>) {
  const { lang } = await params;

  return (
    <RootProvider i18n={i18nProvider(translations, lang)}>
      <HtmlLang lang={lang} />
      {children}
    </RootProvider>
  );
}
