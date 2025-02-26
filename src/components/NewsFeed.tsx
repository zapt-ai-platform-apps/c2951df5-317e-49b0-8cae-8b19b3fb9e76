import React from 'react';
import NewsCard from './NewsCard';
import { NewsItem } from '../models/newsItem';

interface NewsFeedProps {
  news: NewsItem[];
  loading: boolean;
}

const NewsFeed = ({ news, loading }: NewsFeedProps) => {
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh]">
        <div className="w-12 h-12 border-4 border-t-blue-600 border-b-blue-200 border-l-blue-200 border-r-blue-200 rounded-full animate-spin mb-4"></div>
        <p className="text-gray-600">Loading latest news...</p>
      </div>
    );
  }

  if (news.length === 0) {
    return (
      <div className="text-center py-20">
        <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
        <p className="text-xl font-medium text-gray-600">No news available in this category</p>
        <p className="text-gray-500 mt-2">Please try another category or check back later</p>
      </div>
    );
  }

  return (
    <div>
      {news.map((item, index) => (
        <NewsCard key={item.id} newsItem={item} index={index} />
      ))}
    </div>
  );
};

export default NewsFeed;