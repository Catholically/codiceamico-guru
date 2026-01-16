import { categories, referralCodes } from '@/data/codes';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://codiceamico.guru';
  
  // Homepage
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ];

  // Blog/Guide articles
  const blogArticles = [
    {
      slug: 'codice-amico-ing-conto-arancio-4-percento',
      lastModified: new Date('2025-01-15'),
    },
  ];

  blogArticles.forEach((article) => {
    routes.push({
      url: `${baseUrl}/${article.slug}`,
      lastModified: article.lastModified,
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
