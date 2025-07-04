
import { useState } from 'react';
import VideoGrid from '@/components/videos/VideoGrid';
import { trendingVideos } from '@/lib/mockData';
import { Button } from '@/components/ui/button';

const categories = [
  "All", 
  "Gaming", 
  "Music", 
  "Live", 
  "Computer Science", 
  "Programming",
  "Podcasts", 
  "Cooking", 
  "Recently uploaded", 
  "New to you"
];

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  return (
    <div>
      {/* Category pills */}
      <div className="flex gap-3 pb-4 overflow-x-auto scrollbar-none mb-4">
        {categories.map((category) => (
          <Button 
            key={category}
            variant={activeCategory === category ? "default" : "secondary"}
            className={`px-4 py-1 rounded-full whitespace-nowrap text-sm ${
              activeCategory === category ? "bg-white text-black" : "bg-youtube-darkgray/90"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      
      {/* Videos grid */}
      <VideoGrid videos={trendingVideos} />
    </div>
  );
};

export default Index;
