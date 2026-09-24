import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'Sistem Informasi Rekrutmen BKI SKARIGA',
    },
    githubUrl: `https://github.com/orgs/PKL-Hyperdata-2026/repositories`,
  };
}
