
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Compass, Clock, ThumbsUp, Flame, Music, Film, Gamepad2, Newspaper, Trophy, Lightbulb, History } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
}

interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  to: string;
  isExpanded: boolean;
}

function SidebarItem({ icon, text, to, isExpanded }: SidebarItemProps) {
  return (
    <Link 
      to={to} 
      className={cn(
        "flex items-center gap-4 p-3 hover:bg-youtube-darkgray/60 rounded-lg transition-colors",
        isExpanded ? "justify-start" : "justify-center"
      )}
    >
      <span>{icon}</span>
      {isExpanded && <span>{text}</span>}
    </Link>
  );
}

export default function Sidebar({ isOpen }: SidebarProps) {
  const mainItems = [
    { icon: <Home className="h-5 w-5" />, text: 'Home', to: '/' },
    { icon: <Compass className="h-5 w-5" />, text: 'Explore', to: '/explore' },
    { icon: <History className="h-5 w-5" />, text: 'History', to: '/history' }
  ];
  
  const libraryItems = [
    { icon: <Clock className="h-5 w-5" />, text: 'Watch Later', to: '/playlist/watch-later' },
    { icon: <ThumbsUp className="h-5 w-5" />, text: 'Liked Videos', to: '/playlist/liked' }
  ];
  
  const exploreItems = [
    { icon: <Flame className="h-5 w-5" />, text: 'Trending', to: '/trending' },
    { icon: <Music className="h-5 w-5" />, text: 'Music', to: '/music' },
    { icon: <Film className="h-5 w-5" />, text: 'Movies', to: '/movies' },
    { icon: <Gamepad2 className="h-5 w-5" />, text: 'Gaming', to: '/gaming' },
    { icon: <Newspaper className="h-5 w-5" />, text: 'News', to: '/news' },
    { icon: <Trophy className="h-5 w-5" />, text: 'Sports', to: '/sports' },
    { icon: <Lightbulb className="h-5 w-5" />, text: 'Learning', to: '/learning' }
  ];

  return (
    <aside 
      className={cn(
        "min-h-[calc(100vh-56px)] bg-youtube-dark transition-all overflow-y-auto scrollbar-none",
        isOpen ? "w-56" : "w-16"
      )}
    >
      <div className="py-2">
        <div className="px-2">
          {mainItems.map((item, index) => (
            <SidebarItem 
              key={index} 
              icon={item.icon} 
              text={item.text} 
              to={item.to} 
              isExpanded={isOpen} 
            />
          ))}
        </div>
        
        {isOpen && (
          <>
            <div className="mt-3 pt-3 border-t border-youtube-darkgray/80">
              <h3 className="px-4 py-1 text-sm">Library</h3>
              <div className="px-2">
                {libraryItems.map((item, index) => (
                  <SidebarItem 
                    key={index} 
                    icon={item.icon} 
                    text={item.text} 
                    to={item.to} 
                    isExpanded={isOpen} 
                  />
                ))}
              </div>
            </div>
            
            <div className="mt-3 pt-3 border-t border-youtube-darkgray/80">
              <h3 className="px-4 py-1 text-sm">Explore</h3>
              <div className="px-2">
                {exploreItems.map((item, index) => (
                  <SidebarItem 
                    key={index} 
                    icon={item.icon} 
                    text={item.text} 
                    to={item.to} 
                    isExpanded={isOpen} 
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
