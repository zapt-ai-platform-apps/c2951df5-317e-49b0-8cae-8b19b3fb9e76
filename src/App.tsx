import React from 'react';
import './index.css';
import Header from './components/Header';
import NewsFeed from './components/NewsFeed';
import ZaptBadge from './components/ZaptBadge';
import { useNewsData } from './hooks/useNewsData';

const App = () => {
  const { news, loading, categories, selectedCategory, setSelectedCategory } = useNewsData();

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Header 
        activeCategory={selectedCategory} 
        onCategoryChange={setSelectedCategory}
        categories={categories}
      />
      
      <main className="pt-32 pb-16 px-4 max-w-2xl mx-auto">
        <NewsFeed news={news} loading={loading} />
      </main>
      
      <ZaptBadge />
    </div>
  );
};

export default App;