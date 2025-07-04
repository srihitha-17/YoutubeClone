
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { Video } from '@/lib/mockData';

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <div className="flex flex-col animate-fade-in">
      <Link to={`/watch/${video.id}`} className="relative group">
        <img 
          src={video.thumbnail} 
          alt={video.title} 
          className="w-full h-auto object-cover rounded-lg aspect-video"
        />
        <span className="video-duration text-xs font-medium text-white">
          {video.duration}
        </span>
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity rounded-lg" />
      </Link>
      <div className="flex gap-3 mt-3">
        <Link to={`/channel/${video.channel.name}`} className="flex-shrink-0">
          <img 
            src={video.channel.avatar} 
            alt={video.channel.name} 
            className="w-9 h-9 rounded-full"
          />
        </Link>
        
        <div className="flex flex-col">
          <Link to={`/watch/${video.id}`} className="font-semibold line-clamp-2 hover:text-youtube-red">
            {video.title}
          </Link>
          
          <Link to={`/channel/${video.channel.name}`} className="flex items-center gap-1 text-sm text-youtube-lightgray mt-1">
            {video.channel.name}
            {video.channel.verified && (
              <CheckCircle className="h-3.5 w-3.5" fill="currentColor" />
            )}
          </Link>
          
          <div className="text-sm text-youtube-lightgray">
            {video.views} • {video.uploadedAt}
          </div>
        </div>
      </div>
    </div>
  );
}
