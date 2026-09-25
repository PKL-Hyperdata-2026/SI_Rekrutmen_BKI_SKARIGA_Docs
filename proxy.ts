import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";
import { isMarkdownPreferred, rewritePath } from "fumadocs-core/negotiation";
import { i18n } from "@/lib/i18n";
import { docsContentRoute, docsRoute } from "@/lib/shared";

const COOKIE_NAME = "FD_LOCALE";

const { rewrite: rewriteDocs } = rewritePath(
  `/:lang${docsRoute}{/*path}`,
  `/:lang${docsContentRoute}{/*path}/content.md`,
);
const { rewrite: rewriteSuffix } = rewritePath(
  `/:lang${docsRoute}{/*path}.md`,
  `/:lang${docsContentRoute}{/*path}/content.md`,
);

function getPathLocale(pathname: string): string | undefined {
  const segments = pathname.split("/");
  if (
    segments.length > 1 &&
    (i18n.languages as readonly string[]).includes(segments[1])
  ) {
    return segments[1];
  }
  return undefined;
}

export default function proxy(request: NextRequest, _event: NextFetchEvent) {
  const { pathname } = request.nextUrl;

  const suffix = rewriteSuffix(pathname);
  if (suffix) {
    return NextResponse.rewrite(new URL(suffix, request.nextUrl));
  }

  if (isMarkdownPreferred(request)) {
    const result = rewriteDocs(pathname);

    if (result) {
      return NextResponse.rewrite(new URL(result, request.nextUrl), {
        headers: { Vary: "Accept" },
      });
    }
  }

  const pathLocale = getPathLocale(pathname);

  if (!pathLocale) {
    const cookieLocale = request.cookies.get(COOKIE_NAME)?.value;
    const targetLocale =
      cookieLocale &&
      (i18n.languages as readonly string[]).includes(cookieLocale)
        ? cookieLocale
        : i18n.defaultLanguage;

    const redirectUrl = new URL(request.nextUrl);
    redirectUrl.pathname =
      `/${targetLocale}${pathname === "/" ? "/" : pathname}`.replaceAll(
        /\/+/g,
        "/",
      );

    const response = NextResponse.redirect(redirectUrl);
    response.cookies.set(COOKIE_NAME, targetLocale, {
      path: "/",
      sameSite: "lax",
    });
    return response;
  }

  const response = NextResponse.next();
  if (request.cookies.get(COOKIE_NAME)?.value !== pathLocale) {
    response.cookies.set(COOKIE_NAME, pathLocale, {
      path: "/",
      sameSite: "lax",
    });
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|icon.png|hero.png|llms\\.txt|llms-full\\.txt).*)",
  ],
};
