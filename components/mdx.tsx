import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { ArchitectureDiagram } from '@/components/architecture-diagram';
import { RecruitmentFlow } from '@/components/recruitment-flow';
import { ContributorsGrid } from '@/components/contributors-grid';

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    ArchitectureDiagram,
    RecruitmentFlow,
    ContributorsGrid,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
