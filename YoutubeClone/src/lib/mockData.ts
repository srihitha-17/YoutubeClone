
export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  channel: {
    name: string;
    avatar: string;
    verified: boolean;
  };
  views: string;
  uploadedAt: string;
  duration: string;
  description?: string;
}

export const trendingVideos: Video[] = [
  {
    id: "v1",
    title: "Building a Modern YouTube Clone with React",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    channel: {
      name: "WebDevMasters",
      avatar: "https://i.pravatar.cc/150?img=1",
      verified: true,
    },
    views: "1.2M views",
    uploadedAt: "3 days ago",
    duration: "15:24",
    description: "In this tutorial, we'll build a complete YouTube clone using React, Tailwind CSS and modern web technologies. You'll learn about responsive design, video playback, and more!"
  },
  {
    id: "v2",
    title: "Top 10 Must-Have Tech Gadgets of 2025",
    thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    channel: {
      name: "TechReviewer",
      avatar: "https://i.pravatar.cc/150?img=2",
      verified: true,
    },
    views: "845K views",
    uploadedAt: "1 week ago",
    duration: "12:45",
    description: "Check out these amazing tech gadgets that are revolutionizing the way we live and work in 2025. From smart home devices to personal gadgets, we cover it all!"
  },
  {
    id: "v3",
    title: "Easy Homemade Pizza Recipe | Perfect Every Time",
    thumbnail: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    channel: {
      name: "ChefEats",
      avatar: "https://i.pravatar.cc/150?img=3",
      verified: false,
    },
    views: "2.5M views",
    uploadedAt: "2 months ago",
    duration: "18:32",
    description: "Learn how to make the perfect homemade pizza from scratch with this easy-to-follow recipe. Crispy crust, delicious toppings, and all the tips you need for success!"
  },
  {
    id: "v4",
    title: "Morning Yoga Routine for Beginners",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    channel: {
      name: "YogaWithSarah",
      avatar: "https://i.pravatar.cc/150?img=4",
      verified: false,
    },
    views: "1.8M views",
    uploadedAt: "3 weeks ago",
    duration: "25:10",
    description: "Start your day with this gentle yoga routine designed for beginners. Improve flexibility, reduce stress, and boost your energy with these simple poses."
  },
  {
    id: "v5",
    title: "Learn JavaScript in 2025 | Modern Features Explained",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    channel: {
      name: "CodeWithAlex",
      avatar: "https://i.pravatar.cc/150?img=5",
      verified: true,
    },
    views: "956K views",
    uploadedAt: "5 days ago",
    duration: "42:18",
    description: "This comprehensive tutorial covers all the modern JavaScript features you need to know in 2025. Perfect for beginners and intermediate developers looking to level up."
  },
  {
    id: "v6",
    title: "Inside the World's Most Luxurious Hotel",
    thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    channel: {
      name: "TravelExplorer",
      avatar: "https://i.pravatar.cc/150?img=6",
      verified: true,
    },
    views: "3.4M views",
    uploadedAt: "1 month ago",
    duration: "22:54",
    description: "Take an exclusive tour inside the world's most luxurious hotel. From gold-plated fixtures to underwater suites, this property defines opulence."
  },
  {
    id: "v7",
    title: "Car Maintenance Tips Everyone Should Know",
    thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    channel: {
      name: "AutoExpert",
      avatar: "https://i.pravatar.cc/150?img=7",
      verified: false,
    },
    views: "1.1M views",
    uploadedAt: "2 weeks ago",
    duration: "15:42",
    description: "Learn essential car maintenance tips that will save you money and extend the life of your vehicle. No mechanical experience needed!"
  },
  {
    id: "v8",
    title: "The History of Video Games | Documentary",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    channel: {
      name: "GamingHistorian",
      avatar: "https://i.pravatar.cc/150?img=8",
      verified: true,
    },
    views: "4.7M views",
    uploadedAt: "6 months ago",
    duration: "1:05:23",
    description: "Explore the fascinating evolution of video games from the earliest arcade machines to today's cutting-edge experiences in this feature-length documentary."
  }
];

export const getVideoById = (id: string): Video | undefined => {
  return trendingVideos.find(video => video.id === id);
};
