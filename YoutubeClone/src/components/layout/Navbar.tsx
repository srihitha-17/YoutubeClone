
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, Bell, User, Video, Mic } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface NavbarProps {
  toggleSidebar: () => void;
}

export default function Navbar({ toggleSidebar }: NavbarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Implement search functionality
  };

  return (
    <header className="sticky top-0 z-50 bg-youtube-dark border-b border-youtube-darkgray flex items-center justify-between px-4 h-14">
      {/* Left section - Logo and menu button */}
      <div className="flex items-center gap-4">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleSidebar} 
          className="rounded-full"
          aria-label="Menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
        
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold">
            Tube<span className="text-youtube-red">Town</span>
          </span>
        </Link>
      </div>
      
      {/* Middle section - Search bar */}
      <div className="hidden md:flex items-center max-w-xl flex-grow mx-4">
        <form onSubmit={handleSearch} className="flex w-full">
          <Input
            type="search"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="rounded-r-none border-r-0 bg-youtube-darkgray/50 focus-visible:ring-0"
          />
          <Button 
            type="submit" 
            variant="secondary"
            className="rounded-l-none bg-youtube-darkgray border border-youtube-darkgray hover:bg-youtube-darkgray/80"
          >
            <Search className="h-4 w-4" />
          </Button>
        </form>
        <Button variant="ghost" size="icon" className="ml-2 rounded-full">
          <Mic className="h-5 w-5" />
        </Button>
      </div>
      
      {/* Right section - Action buttons */}
      <div className="flex items-center gap-1">
        <Button variant="ghost" size="icon" className="rounded-full md:hidden">
          <Search className="h-5 w-5" />
        </Button>
        
        <Button variant="ghost" size="icon" className="rounded-full">
          <Video className="h-5 w-5" />
        </Button>
        
        <Button variant="ghost" size="icon" className="rounded-full">
          <Bell className="h-5 w-5" />
        </Button>
        
        <Button variant="ghost" size="icon" className="rounded-full ml-2">
          <User className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}
