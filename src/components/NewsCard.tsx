import React from 'react';
import { NewsItem, formatPublishDate } from '../models/newsItem';

interface NewsCardProps {
  newsItem: NewsItem;
  index: number;
}

const NewsCard = ({ newsItem, index }: NewsCardProps) => {
  const { title, content, imageUrl, source, publishedAt, category, url } = newsItem;
  
  // Animation delay based on index for staggered appearance
  const animationDelay = `${index * 0.1}s`;
  
  const handleCardClick = () => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden mb-6 news-card swipe-up"
      style={{ animationDelay }}
      onClick={handleCardClick}
    >
      <div className="md:flex">
        <div className="md:w-2/5">
          <div className="relative h-48 md:h-full">
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 text-xs font-medium rounded-md">
              {category}
            </div>
          </div>
        </div>
        
        <div className="p-5 md:w-3/5">
          <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">{title}</h2>
          <p className="text-gray-600 mb-4 line-clamp-3">{content}</p>
          
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span className="font-medium">{source}</span>
            <span>{formatPublishDate(publishedAt)}</span>
          </div>
          
          {url && (
            <div className="mt-3 text-right">
              <span className="text-blue-600 text-sm cursor-pointer">Read more →</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;