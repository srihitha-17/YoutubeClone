
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CheckCircle, ThumbsUp, ThumbsDown, Share2, Download, MoreHorizontal } from 'lucide-react';
import VideoPlayer from '@/components/videos/VideoPlayer';
import VideoGrid from '@/components/videos/VideoGrid'; 
import { getVideoById, trendingVideos } from '@/lib/mockData';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const VideoPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const video = id ? getVideoById(id) : undefined;
  const relatedVideos = trendingVideos.filter(v => v.id !== id).slice(0, 4);
  
  useEffect(() => {
    if (!video && id) {
      navigate('/');
    }
    
    // Update document title
    if (video) {
      document.title = `${video.title} - TubeTown`;
    }
    
    return () => {
      document.title = 'TubeTown';
    };
  }, [video, id, navigate]);
  
  if (!video) {
    return null;
  }

  return (
    <div className="max-w-[1800px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {/* Video player */}
          <VideoPlayer videoId={video.id} />
          
          {/* Video info */}
          <h1 className="text-xl font-bold mt-4 mb-2">{video.title}</h1>
          
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-4">
            <div className="flex items-center gap-3">
              <img 
                src={video.channel.avatar} 
                alt={video.channel.name} 
                className="w-10 h-10 rounded-full"
              />
              
              <div>
                <div className="flex items-center gap-1">
                  <h3 className="font-medium">{video.channel.name}</h3>
                  {video.channel.verified && (
                    <CheckCircle className="h-4 w-4 text-youtube-lightgray" fill="currentColor" />
                  )}
                </div>
                <span className="text-sm text-youtube-lightgray">1.5M subscribers</span>
              </div>
              
              <Button className="ml-4 bg-white text-black hover:bg-white/90">
                Subscribe
              </Button>
            </div>
            
            <div className="flex gap-2">
              <div className="flex rounded-full bg-youtube-darkgray/80">
                <Button variant="ghost" className="flex gap-2 rounded-l-full rounded-r-none border-r border-youtube-darkgray">
                  <ThumbsUp className="h-5 w-5" />
                  <span>125K</span>
                </Button>
                <Button variant="ghost" className="rounded-l-none rounded-r-full">
                  <ThumbsDown className="h-5 w-5" />
                </Button>
              </div>
              
              <Button variant="ghost" className="flex gap-2 rounded-full bg-youtube-darkgray/80">
                <Share2 className="h-5 w-5" />
                <span>Share</span>
              </Button>
              
              <Button variant="ghost" className="flex gap-2 rounded-full bg-youtube-darkgray/80">
                <Download className="h-5 w-5" />
                <span>Download</span>
              </Button>
              
              <Button variant="ghost" size="icon" className="rounded-full bg-youtube-darkgray/80">
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Video description */}
          <div className="bg-youtube-darkgray/50 rounded-xl p-3 mb-6">
            <div className="flex gap-2 text-sm mb-2">
              <span className="font-medium">{video.views}</span>
              <span className="font-medium">{video.uploadedAt}</span>
            </div>
            <p className="text-sm">{video.description}</p>
          </div>
          
          {/* Comments section (simplified) */}
          <div>
            <h3 className="font-medium mb-4">Comments • 1.2K</h3>
            <div className="flex gap-3">
              <img 
                src="https://i.pravatar.cc/150?img=10" 
                alt="User" 
                className="w-10 h-10 rounded-full"
              />
              <div>
                <div className="flex gap-2 items-center">
                  <span className="font-medium">VideoFanatic</span>
                  <span className="text-youtube-lightgray text-sm">2 days ago</span>
                </div>
                <p className="text-sm">This video was so helpful! I learned a lot from this content. Keep up the great work!</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related videos */}
        <div className="lg:col-span-1">
          <Separator className="mb-4 bg-youtube-darkgray/50 lg:hidden" />
          <h3 className="font-medium mb-4">Related videos</h3>
          <div className="flex flex-col gap-4">
            {relatedVideos.map((relatedVideo) => (
              <div key={relatedVideo.id} className="flex gap-2">
                <img 
                  src={relatedVideo.thumbnail} 
                  alt={relatedVideo.title} 
                  className="w-40 h-24 object-cover rounded-md flex-shrink-0"
                  onClick={() => navigate(`/watch/${relatedVideo.id}`)}
                  style={{ cursor: 'pointer' }}
                />
                <div>
                  <h4 className="font-medium text-sm line-clamp-2">{relatedVideo.title}</h4>
                  <p className="text-xs text-youtube-lightgray mt-1">{relatedVideo.channel.name}</p>
                  <p className="text-xs text-youtube-lightgray">
                    {relatedVideo.views} • {relatedVideo.uploadedAt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
