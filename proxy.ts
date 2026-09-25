import { NextResponse } from 'next/server';
import type { NextFetchEvent, NextRequest } from 'next/server';
import { createI18nMiddleware } from 'fumadocs-core/i18n/middleware';
import { isMarkdownPreferred, rewritePath } from 'fumadocs-core/negotiation';
import { i18n } from '@/lib/i18n';
import { docsContentRoute, docsRoute } from '@/lib/shared';

const i18nMiddleware = createI18nMiddleware(i18n);

const { rewrite: rewriteDocs } = rewritePath(
  `/:lang${docsRoute}{/*path}`,
  `/:lang${docsContentRoute}{/*path}/content.md`,
);
const { rewrite: rewriteSuffix } = rewritePath(
  `/:lang${docsRoute}{/*path}.md`,
  `/:lang${docsContentRoute}{/*path}/content.md`,
);

export default function proxy(request: NextRequest, event: NextFetchEvent) {
  const { pathname } = request.nextUrl;

  const suffix = rewriteSuffix(pathname);
  if (suffix) {
    return NextResponse.rewrite(new URL(suffix, request.nextUrl));
  }

  if (isMarkdownPreferred(request)) {
    const result = rewriteDocs(pathname);

    if (result) {
      return NextResponse.rewrite(new URL(result, request.nextUrl), {
        headers: { Vary: 'Accept' },
      });
    }
  }

  return i18nMiddleware(request, event);
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|icon.png|hero.png|llms\\.txt|llms-full\\.txt).*)',
  ],
};
