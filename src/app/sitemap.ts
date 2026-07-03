import { MetadataRoute } from 'next';
import { BRAND_DATA } from '../data/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jonroseman.com';

  const projects = BRAND_DATA.projects.map((project) => ({
    url: `${baseUrl}/project/${project.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const books = BRAND_DATA.books.map((book) => ({
    url: `${baseUrl}/book/${book.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    ...projects,
    ...books,
  ];
}
