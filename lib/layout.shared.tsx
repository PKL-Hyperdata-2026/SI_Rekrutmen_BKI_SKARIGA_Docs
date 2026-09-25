import { i18n } from './i18n';
import { uiTranslations } from 'fumadocs-ui/i18n';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { SITE_NAME } from './site';

export const translations = i18n.translations().extend(uiTranslations()).add({
  en: {
    displayName: 'English',
  },
  id: {
    displayName: 'Bahasa Indonesia',
  },
});

export function baseOptions(locale: string): BaseLayoutProps {
  return {
    nav: {
      title: SITE_NAME,
      url: `/${locale}`,
    },
    githubUrl: `https://github.com/orgs/PKL-Hyperdata-2026/repositories`,
  };
}
