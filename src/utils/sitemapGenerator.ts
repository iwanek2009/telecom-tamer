import { writeFileSync } from 'fs';
import { resolve } from 'path';

interface Route {
  path: string;
  priority: number;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
}

const BASE_URL = 'https://smartfony.co.uk';
const CURRENT_DATE = new Date().toISOString().split('T')[0];

const routes: Route[] = [
  { path: '/', priority: 1.0, changefreq: 'daily' },
  { path: '/mobile', priority: 0.8, changefreq: 'weekly' },
  { path: '/broadband', priority: 0.8, changefreq: 'weekly' },
  { path: '/about', priority: 0.7, changefreq: 'monthly' },
  { path: '/sim', priority: 0.8, changefreq: 'weekly' },
  { path: '/internet-uk', priority: 0.8, changefreq: 'weekly' },
  { path: '/broadband/fibre-broadband', priority: 0.8, changefreq: 'weekly' },
  { path: '/broadband/cheap-broadband-deals', priority: 0.8, changefreq: 'weekly' },
  { path: '/broadband/100mbps', priority: 0.8, changefreq: 'weekly' },
  { path: '/broadband/home-phone', priority: 0.8, changefreq: 'weekly' },
  { path: '/broadband/ultrafast', priority: 0.8, changefreq: 'weekly' },
  { path: '/broadband/local', priority: 0.8, changefreq: 'weekly' },
  { path: '/local/fibre-broadband-southampton', priority: 0.8, changefreq: 'weekly' },
  { path: '/local/southampton', priority: 0.8, changefreq: 'weekly' },
  { path: '/local/southampton-broadband-tv', priority: 0.8, changefreq: 'weekly' },
  { path: '/local/liverpool', priority: 0.8, changefreq: 'weekly' },
  { path: '/local/fibre-broadband-liverpool', priority: 0.8, changefreq: 'weekly' },
  { path: '/local/allerton', priority: 0.8, changefreq: 'weekly' },
  { path: '/local/london', priority: 0.8, changefreq: 'weekly' },
  { path: '/local/fibre-broadband-london', priority: 0.8, changefreq: 'weekly' },
  { path: '/local/south-london', priority: 0.8, changefreq: 'weekly' },
  { path: '/local/brixton', priority: 0.8, changefreq: 'weekly' },
  { path: '/local/greenwich', priority: 0.8, changefreq: 'weekly' },
  { path: '/local/croydon', priority: 0.8, changefreq: 'weekly' },
  { path: '/local/central-london', priority: 0.8, changefreq: 'weekly' },
  { path: '/local/zone1-london', priority: 0.8, changefreq: 'weekly' },
  { path: '/local/west-end', priority: 0.8, changefreq: 'weekly' },
  { path: '/local/student-london', priority: 0.8, changefreq: 'weekly' },
  { path: '/local/business-london', priority: 0.8, changefreq: 'weekly' },
  { path: '/local/gaming-london', priority: 0.8, changefreq: 'weekly' },
  { path: '/local/wfh-london', priority: 0.8, changefreq: 'weekly' },
  { path: '/local/north-london', priority: 0.8, changefreq: 'weekly' },
  { path: '/local/islington', priority: 0.8, changefreq: 'weekly' },
  { path: '/local/camden', priority: 0.8, changefreq: 'weekly' },
  { path: '/local/finsbury-park', priority: 0.8, changefreq: 'weekly' },
  { path: '/local/community-fibre', priority: 0.8, changefreq: 'weekly' },
  { path: '/local/virgin-media', priority: 0.8, changefreq: 'weekly' },
  { path: '/local/g-network', priority: 0.8, changefreq: 'weekly' },
  { path: '/local/tv-broadband', priority: 0.8, changefreq: 'weekly' },
  { path: '/local/bt-london', priority: 0.8, changefreq: 'weekly' },
  { path: '/cstyle', priority: 0.7, changefreq: 'monthly' },
];

function generateSitemap(): string {
  const urlset = routes
    .map(
      (route) => `  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${CURRENT_DATE}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority.toFixed(1)}</priority>
  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlset}
</urlset>`;
}

function updateSitemap(): void {
  const sitemap = generateSitemap();
  const sitemapPath = resolve(__dirname, '../../public/sitemap.xml');
  writeFileSync(sitemapPath, sitemap, 'utf8');
  console.log('Sitemap has been updated successfully!');
}

export { updateSitemap };