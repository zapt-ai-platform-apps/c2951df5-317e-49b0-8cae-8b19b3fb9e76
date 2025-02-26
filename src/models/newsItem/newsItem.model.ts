export interface NewsItem {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  source: string;
  publishedAt: Date;
  category: string;
  url?: string;
}

export function createNewsItem(params: Omit<NewsItem, 'id'>): NewsItem {
  return {
    id: Math.random().toString(36).substring(2, 9),
    ...params,
  };
}

export function formatPublishDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}