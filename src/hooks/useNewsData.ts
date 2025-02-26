import { useState, useEffect } from 'react';
import { NewsItem, sampleNewsItems } from '../models/newsItem';
import * as Sentry from '@sentry/browser';

export function useNewsData() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Get unique categories from news items
  const categories = [...new Set(sampleNewsItems.map(item => item.category))];
  
  useEffect(() => {
    // In a real app, we would fetch from an API
    // For now, simulate loading with sample data
    const fetchNews = async () => {
      setLoading(true);
      try {
        // Simulate network request
        await new Promise(resolve => setTimeout(resolve, 1000));
        setNews(sampleNewsItems);
        console.log('Loaded news data:', sampleNewsItems.length, 'items');
      } catch (error) {
        console.error('Error loading news:', error);
        Sentry.captureException(error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  // Filter news by category if one is selected
  const filteredNews = selectedCategory
    ? news.filter(item => item.category === selectedCategory)
    : news;

  return {
    news: filteredNews,
    loading,
    categories,
    selectedCategory,
    setSelectedCategory
  };
}