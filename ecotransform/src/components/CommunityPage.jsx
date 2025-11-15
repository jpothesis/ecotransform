import { MessageCircle, Heart, Share2 } from "lucide-react";
import { Button } from "./ui/button";

import PriyaAvatar from "/src/assets/portrait-of-priya.png";
import PriyaImage from "/src/assets/textile-collection.jpg";

import RaviAvatar from "/src/assets/ravi.jpg";
import RaviImage from "/src/assets/workshop.png";

import AnjaliAvatar from "/src/assets/anjali.jpg";
import AnjaliImage from "/src/assets/ceramics.jpg";


// ⭐ Community Posts Data
const communityPosts = [
  {
    id: 1,
    author: "Priya Sharma",
    avatar: PriyaAvatar,
    role: "Artisan",
    content:
      "Just finished creating a beautiful collection from old textile scraps! So excited to share this with everyone.",
    image: PriyaImage,
    likes: 342,
    comments: 28,
    timestamp: "2 hours ago",
  },
  {
    id: 2,
    author: "Ravi Kumar",
    avatar: RaviAvatar,
    role: "Artisan",
    content:
      "Metal sculpture workshop happening next weekend! All materials are 100% recycled. Join us!",
    image: RaviImage,
    likes: 289,
    comments: 45,
    timestamp: "4 hours ago",
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
  },
];

// ⭐ Main Component
export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      <div className="max-w-4xl mx-auto px-6 py-20">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-amber-900 mb-4">Community</h1>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Connect with other waste contributors and artisans. Share stories,
            celebrate transformations, and build a sustainable community.
          </p>
        </div>

        {/* Post Creator */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex gap-4">
            <img
              src="/abstract-geometric-shapes.png"
              alt="You"
              className="w-12 h-12 rounded-full"
            />
            <input
              type="text"
              placeholder="Share your sustainability story..."
              className="flex-1 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500"
            />
          </div>
          <div className="flex gap-3 mt-4">
            <Button variant="outline" className="border-amber-200 text-amber-900">
              Add Photo
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white ml-auto">
              Post
            </Button>
          </div>
        </div>

        {/* Posts Feed */}
        <div className="space-y-6">
          {communityPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">

                {/* Post Header */}
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={post.avatar}
                    alt={post.author}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-bold text-amber-900">{post.author}</h3>
                    <p className="text-sm text-amber-700">
                      {post.role} • {post.timestamp}
                    </p>
                  </div>
                </div>

                {/* Post Content */}
                <p className="text-amber-900 mb-4">{post.content}</p>

                <img
                  src={post.image}
                  alt="Post"
                  className="w-full rounded-lg mb-4"
                />

                {/* Actions */}
                <div className="flex gap-6 text-amber-700 text-sm pt-4 border-t border-amber-200">
                  <button className="flex items-center gap-2 hover:text-orange-600 transition-colors">
                    <Heart className="w-5 h-5" />
                    {post.likes} Likes
                  </button>

                  <button className="flex items-center gap-2 hover:text-orange-600 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    {post.comments} Comments
                  </button>

                  <button className="flex items-center gap-2 hover:text-orange-600 transition-colors ml-auto">
                    <Share2 className="w-5 h-5" />
                    Share
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
