import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Play, Heart, MessageCircle, Eye, Clock } from "lucide-react";

const communityPosts = [
  {
    id: 1,
    type: "tutorial",
    title: "Turn Old T-Shirts into Rope",
    author: "Sustainable Sarah",
    thumbnail: "/tutorial-turning-old-t-shirts-into-rope-diy.jpg",
    duration: "5:32",
    views: "12.5K",
    likes: 892,
    comments: 45,
    timeAgo: "2 days ago",
  },
  {
    id: 2,
    type: "showcase",
    title: "My Plastic Bottle Garden",
    author: "Green Guru",
    thumbnail: "/beautiful-garden-made-from-plastic-bottles-vertica.jpg",
    duration: "3:18",
    views: "8.2K",
    likes: 654,
    comments: 32,
    timeAgo: "1 day ago",
  },
  {
    id: 3,
    type: "hack",
    title: "Jugaad: Cardboard Phone Stand",
    author: "Desi Innovator",
    thumbnail: "/creative-cardboard-phone-stand-diy-jugaad.jpg",
    duration: "2:45",
    views: "15.8K",
    likes: 1203,
    comments: 78,
    timeAgo: "3 hours ago",
  },
  {
    id: 4,
    type: "story",
    title: "From Waste to ₹50K/Month",
    author: "Success Stories",
    thumbnail: "/entrepreneur-success-story-waste-business.jpg",
    duration: "8:15",
    views: "25.3K",
    likes: 1876,
    comments: 156,
    timeAgo: "1 week ago",
  },
];

const getTypeColor = (type) => {
  switch (type) {
    case "tutorial":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
    case "showcase":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
    case "hack":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
    case "story":
      return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
  }
};

export default function CommunitySection() {
  return (
    <section
      id="community"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 overflow-hidden"
    >
      {/* Background Floating Blurs */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-64 h-64 bg-gradient-to-r from-orange-200/20 to-amber-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-yellow-200/15 to-orange-200/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-amber-200/25 to-orange-200/25 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center space-y-6 mb-20 animate-in slide-in-from-bottom duration-700">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-amber-100 border border-amber-200/50 backdrop-blur-sm">
            <span className="text-sm font-medium text-amber-800">Community Hub</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-balance leading-tight">
            Join Our Thriving{" "}
            <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
              Community
            </span>
          </h2>

          <p className="text-xl text-amber-800/70 text-pretty max-w-3xl mx-auto leading-relaxed">
            Learn from experts, share your creations, and discover innovative jugaad hacks from our eco-warriors.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {communityPosts.map((post, index) => (
            <Card
              key={post.id}
              className="group relative bg-white/60 backdrop-blur-sm border border-amber-200/30 hover:bg-white/80 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-in slide-in-from-bottom"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="relative">
                <img
                  src={post.thumbnail || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500 rounded-t-lg"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors rounded-t-lg" />

                {/* Play Button */}
                <Button
                  size="sm"
                  className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-110"
                >
                  <Play className="h-5 w-5 ml-0.5" />
                </Button>

                {/* Duration */}
                <Badge className="absolute bottom-2 right-2 bg-black/70 text-white text-xs rounded-md">
                  {post.duration}
                </Badge>

                {/* Type Badge */}
                <Badge
                  className={`absolute top-2 left-2 text-xs capitalize ${getTypeColor(
                    post.type
                  )} rounded-md`}
                >
                  {post.type}
                </Badge>
              </div>

              <CardContent className="p-4 space-y-4">
                <h3 className="font-semibold line-clamp-2 group-hover:text-orange-600 transition-colors">
                  {post.title}
                </h3>

                <div className="flex items-center space-x-2">
                  <img
                    src={
                      post.avatar ||
                      `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        post.author
                      )}&background=random&rounded=true&size=64`
                    }
                    alt={post.author}
                    className="w-7 h-7 rounded-full"
                  />
                  <span className="text-sm text-amber-700/80">{post.author}</span>
                </div>

                <div className="flex items-center justify-between text-xs text-amber-700/70">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <Eye className="h-3 w-3" />
                      <span>{post.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="h-3 w-3" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="h-3 w-3" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{post.timeAgo}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

{/* Join Button */}
<div className="text-center space-y-4">
  <Button
    size="lg"
    className="inline-flex items-center justify-center gap-2 rounded-full py-3 px-8 bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-md transition-all duration-300 transform hover:scale-105 hover:bg-orange-600 hover:from-orange-600 hover:to-orange-600 hover:text-white"
  >
    <MessageCircle className="h-5 w-5" />
    Join Community
  </Button>
  <p className="text-sm text-amber-700/70">
    Share your own tutorials and connect with 10,000+ eco-enthusiasts
  </p>
</div>

      </div>
    </section>
  );
}
