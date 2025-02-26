import React from 'react';

interface HeaderProps {
  activeCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  categories: string[];
}

const Header = ({ activeCategory, onCategoryChange, categories }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-10">
      <div className="max-w-4xl mx-auto px-4 py-3">
        {/* Logo and app name */}
        <div className="flex items-center justify-center mb-3">
          <img 
            src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=64&height=64" 
            alt="Qshorts Logo" 
            className="h-8 w-8 mr-2"
          />
          <h1 className="text-xl font-bold text-blue-600">Qshorts</h1>
        </div>
        
        {/* Category navigation */}
        <div className="overflow-x-auto pb-2">
          <div className="flex space-x-2 min-w-max">
            <button
              onClick={() => onCategoryChange(null)}
              className={`category-pill cursor-pointer ${activeCategory === null ? 'active' : ''}`}
            >
              All
            </button>
            
            {categories.map(category => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`category-pill cursor-pointer ${activeCategory === category ? 'active' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;