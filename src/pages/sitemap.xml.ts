import { exams } from '../data/exams';

export async function GET() {
  const siteUrl = 'https://reducephoto.com';

  // Base pages (static routes)
  const basePages = [
    '',
    '/about',
    '/background-remove',
    '/contact',
    '/convert',
    '/crop',
    '/exams',
    '/passport-print',
    '/privacy',
    '/resizer',
    '/terms',
  ];

  // Dynamic exam routes
  const examPages = exams.map((exam) => `/exam/${exam.id}`);

  const allUrls = [...basePages, ...examPages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allUrls
    .map(
      (url) => `
  <url>
    <loc>${siteUrl}${url}/</loc>
    <changefreq>${url === '' ? 'daily' : 'weekly'}</changefreq>
    <priority>${url === '' ? '1.0' : url.startsWith('/exam/') ? '0.8' : '0.5'}</priority>
  </url>`
    )
    .join('')}
</urlset>`.trim();

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
