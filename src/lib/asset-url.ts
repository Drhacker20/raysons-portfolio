// Asset CDN helper.
// Lovable assets are served from /__l5e/... which only resolves on lovable.app domains.
// On other hosts (e.g. Vercel), we prepend the published Lovable URL so the same files load.
const CDN_BASE = "https://raysons-portfolio.lovable.app";

export function assetUrl(url: string): string {
  if (!url) return url;
  if (/^https?:\/\//i.test(url)) return url;
  if (url.startsWith("/__l5e/")) return `${CDN_BASE}${url}`;
  return url;
}