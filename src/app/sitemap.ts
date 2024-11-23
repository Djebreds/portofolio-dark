import { type MetadataRoute } from 'next';

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: 'https://refifauzan.my.id',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1,
  },
];

export default sitemap;
