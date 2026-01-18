import { categories, referralCodes } from '@/data/codes';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://codiceamico.guru';
  const today = new Date();

  // Homepage
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: today,
      changeFrequency: 'daily',
      priority: 1,
    },
    // Confronto page (high value for SEO)
    {
      url: `${baseUrl}/confronto`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    // Guide page
    {
      url: `${baseUrl}/guide`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    // Glossario page
    {
      url: `${baseUrl}/glossario`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    // Contatti page
    {
      url: `${baseUrl}/contatti`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    // Privacy page
    {
      url: `${baseUrl}/privacy`,
      lastModified: today,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    // Inserisci codice page
    {
      url: `${baseUrl}/inserisci-codice`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Blog
    {
      url: `${baseUrl}/blog`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/dove-pubblicare-codice-amico`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
  ];

  // SEO landing pages
  const seoPages = [
    { slug: 'codice-amico-ing-conto-arancio-4-percento', lastModified: new Date('2026-01-15') },
    { slug: 'bbva-passaparola', lastModified: new Date('2026-01-15') },
    { slug: 'n26-invita-i-tuoi-amici', lastModified: new Date('2026-01-15') },
    { slug: 'revolut-invita-un-amico', lastModified: new Date('2026-01-15') },
    { slug: 'satispay-invita-un-amico', lastModified: new Date('2026-01-15') },
    { slug: 'octopus-energy-octofriends', lastModified: new Date('2026-01-15') },
    { slug: 'wise-invita-amici', lastModified: new Date('2026-01-15') },
    { slug: 'glovo-invita-un-amico', lastModified: new Date('2026-01-15') },
    { slug: 'genertel-piu-buoni-insieme', lastModified: new Date('2026-01-15') },
    { slug: 'amex-business-platinum-referral', lastModified: new Date('2026-01-15') },
  ];

  seoPages.forEach((page) => {
    routes.push({
      url: `${baseUrl}/${page.slug}`,
      lastModified: page.lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    });
  });
  
  // Categories
  categories.forEach((category) => {
    routes.push({
      url: `${baseUrl}/categoria/${category.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    });
  });
  
  // Individual codes
  referralCodes
    .filter((code) => code.active)
    .forEach((code) => {
      routes.push({
        url: `${baseUrl}/${code.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      });
    });
  
  return routes;
}
