// Updated CommunityPage with orange button + white text on flip card
'use client';

import { useState } from "react";
import { MessageCircle, Heart, Share2, TrendingUp, Zap, Tag } from "lucide-react";
import { Button } from "./ui/button";

import PriyaAvatar from "/src/assets/portrait-of-priya.png";
import PriyaImage from "/src/assets/textile-collection.jpg";

import RaviAvatar from "/src/assets/ravi.jpg";
import RaviImage from "/src/assets/workshop.png";

import AnjaliAvatar from "/src/assets/anjali.jpg";
import AnjaliImage from "/src/assets/ceramics.jpg";

// Flip Card Data
const flipCardData = [
  {
    id: 101,
    title: "The Upcycled Textile Revolution",
    frontImage: PriyaImage,
    backContent:
      "Priya Sharma's journey turning old saris into modern, sustainable home decor. The collection saved 450 lbs of fabric from landfills this quarter.",
    actionText: "See Collection",
    color: "bg-orange-600",
  },
  {
    id: 102,
    title: "Metal Art from Industrial Scraps",
    frontImage: "/images/metal2.jpg",
    backContent:
      "Ravi Kumar hosts monthly workshops demonstrating how to safely and artistically transform metal waste into powerful sculptures. Next workshop: Nov 25th.",
    actionText: "Join Workshop",
    color: "bg-amber-700",
   
  },
];

// Community Posts
const communityPosts = [
  {
    id: 1,
    author: "Priya Sharma",
    avatar: PriyaAvatar,
    role: "Artisan",
    content:
      "Just finished creating a beautiful collection from old textile scraps! Every piece tells a story of transformation.",
    image: PriyaImage,
    likes: 342,
    comments: 28,
    timestamp: "2 hours ago",
    tags: ["#TextileUpcycling", "#SustainableFashion"],
    isFeatured: true,
    isLiked: true,
  },
  {
    id: 2,
    author: "Ravi Kumar",
    avatar: RaviAvatar,
    role: "Artisan",
    content:
      "Metal sculpture workshop happening next weekend! All materials are 100% recycled industrial waste.",
    image: "/images/metal.jpg",
    likes: 289,
    comments: 45,
    timestamp: "4 hours ago",
    tags: ["#MetalArt", "#RecyclingWorkshop"],
    isFeatured: false,
    isLiked: false,
  },
  {
    id: 3,
    author: "Anjali Mehta",
    avatar: AnjaliAvatar,
    role: "Artisan",
    content:
      "Thanking all the waste contributors who made this amazing ceramic collection possible!",
    image: AnjaliImage,
    likes: 456,
    comments: 67,
    timestamp: "6 hours ago",
    tags: ["#Ceramics", "#ZeroWaste"],
    isFeatured: false,
    isLiked: true,
  },
];

const trendingTopics = [
  { name: "#TextileUpcycling", count: "1.2K Posts" },
  { name: "#PlasticToArt", count: "980 Posts" },
  { name: "#CommunityGathering", count: "510 Posts" },
  { name: "#WasteTransformation", count: "745 Posts" },
];

// Flip Card Component
function FlipCard({ data }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="h-80 cursor-pointer perspective"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
        style={{ transformStyle: "preserve-3d", transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* FRONT */}
        <div className="absolute w-full h-full bg-white rounded-xl shadow-xl overflow-hidden" style={{ backfaceVisibility: "hidden" }}>
          <img src={data.frontImage} alt={data.title} className="w-full h-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <h4 className="text-white text-xl font-bold">{data.title}</h4>
          </div>
        </div>

        {/* BACK */}
        <div
          className={`absolute w-full h-full rounded-xl shadow-xl overflow-hidden p-6 flex flex-col justify-between ${data.color}`}
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div>
            <h4 className="text-2xl font-extrabold mb-3 border-b border-white/50 pb-2 text-white">{data.title}</h4>
            <p className="text-lg text-white">{data.backContent}</p>
          </div>

          {/* FIXED BUTTON: ORANGE BG + WHITE TEXT */}
          <Button className="w-full mt-4 bg-orange-500 text-white hover:bg-orange-600 font-bold">
            {data.actionText}
          </Button>
        </div>
      </div>
    </div>
  );
}

// Post Component
function CommunityPost({ post }) {
  const [isLiked, setIsLiked] = useState(post.isLiked);
  const [likeCount, setLikeCount] = useState(post.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border ${post.isFeatured ? "border-orange-300 lg:col-span-2" : "border-amber-100"}`}>
      <div className="p-6">
        {post.isFeatured && (
          <div className="mb-4 inline-block bg-gradient-to-r from-orange-400 to-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            ⭐ Featured
          </div>
        )}

        <div className="flex items-start gap-3 mb-4">
          <img src={post.avatar} alt={post.author} className="w-12 h-12 rounded-full object-cover border-2 border-orange-300" />
          <div>
            <h3 className="font-bold text-amber-900">{post.author}</h3>
            <p className="text-xs font-medium text-orange-600 bg-orange-100 px-2 py-0.5 rounded-full inline-block mt-0.5">{post.role}</p>
            <p className="text-sm text-amber-600 mt-1">{post.timestamp}</p>
          </div>
        </div>

        <p className="text-amber-900 mb-4">{post.content}</p>

        {post.image && (
          <img src={post.image} alt={post.author} className="w-full h-auto max-h-96 object-cover rounded-lg mb-4 border border-amber-100" />
        )}

        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag, index) => (
            <span key={index} className="text-xs text-orange-700 bg-orange-50 px-3 py-1 rounded-full flex items-center gap-1">
              <Tag className="w-3 h-3" />
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-6 text-amber-700 text-sm pt-4 border-t border-amber-200">
          <button onClick={handleLike} className={`flex items-center gap-2 ${isLiked ? "text-red-500" : "hover:text-red-500"}`}>
            <Heart className={`w-5 h-5 ${isLiked ? "fill-red-500" : ""}`} />
            {likeCount} Likes
          </button>

          <button className="flex items-center gap-2 hover:text-orange-600">
            <MessageCircle className="w-5 h-5" />
            {post.comments} Comments
          </button>

          <button className="flex items-center gap-2 hover:text-orange-600 ml-auto">
            <Share2 className="w-5 h-5" />
            Share
          </button>
        </div>
      </div>
    </div>
  );
}

// Main Page
export default function CommunityPage() {
  const featuredPost = communityPosts.find((post) => post.isFeatured);
  const regularPosts = communityPosts.filter((post) => !post.isFeatured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-orange-600 bg-orange-100 px-4 py-2 rounded-full">🌱 Artisan & Contributor Hub</span>
          <h1 className="text-5xl font-extrabold text-amber-950 mt-4">Connect & Collaborate</h1>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto mt-4">Share your sustainable creations, connect with fellow artisans, and celebrate transformations that matter.</p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-amber-950 mb-8 flex items-center gap-2">
            <Zap className="w-8 h-8 text-orange-500" /> Featured Initiatives
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {flipCardData.map((card) => (
              <FlipCard key={card.id} data={card} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-xl p-6 mb-8 border border-orange-200">
              <h2 className="text-2xl font-semibold text-amber-900 mb-4">Start a Conversation</h2>
              <div className="flex gap-4 items-start mb-4">
                <img src={PriyaAvatar} alt="Your Profile" className="w-12 h-12 rounded-full object-cover border-2 border-orange-400" />
                <textarea placeholder="Share your latest zero-waste project..." rows="4" className="flex-1 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-amber-900 resize-none"></textarea>
              </div>
              <div className="flex gap-3 justify-end">
                <Button variant="outline" className="border-orange-300">Add Photo/Video</Button>
                <Button className="bg-orange-500 text-white">Publish Post</Button>
              </div>
            </div>

            {featuredPost && (
              <div className="mb-8">
                <CommunityPost post={featuredPost} />
              </div>
            )}

            <h2 className="text-3xl font-bold text-amber-950 mb-6">Recent Posts</h2>
            <div className="space-y-8">
              {regularPosts.map((post) => (
                <CommunityPost key={post.id} post={post} />
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-20 bg-white p-6 rounded-xl shadow-lg border border-orange-200">
              <h3 className="text-xl font-bold text-amber-900 mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-orange-500" /> Trending Topics
              </h3>

              <ul className="space-y-4">
                {trendingTopics.map((topic, index) => (
                  <li key={index} className="pb-4 border-b border-amber-100 cursor-pointer">
                    <p className="text-base font-semibold text-orange-700">{topic.name}</p>
                    <p className="text-sm text-amber-600">{topic.count}</p>
                  </li>
                ))}
              </ul>

              <Button variant="outline" className="w-full mt-6">View All Trends</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
