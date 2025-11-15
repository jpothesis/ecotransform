import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Users } from "lucide-react";

// Sample artisan data (replace with real data or API)
const artisans = [
  {
    id: 1,
    name: "Priya Sharma",
    category: "Handmade Bags",
    description: "Expert in creating upcycled denim and jute bags with sustainable methods.",
    image: "/images/priyasharma.jpg",
  },
  {
    id: 2,
    name: "Rohit Verma",
    category: "Eco-Home Decor",
    description: "Crafts unique home decor using recycled and natural materials.",
    image: "/images/rohitverma.jpg",
  },
  {
    id: 3,
    name: "Ananya Gupta",
    category: "Organic Clothing",
    description: "Designs eco-friendly clothing using organic cotton and natural dyes.",
    image: "/images/ananyagupta.jpg",
  },
];

export default function ArtisansPage() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 min-h-screen">
      {/* Heading */}
      <div className="text-center mb-12 space-y-4">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-200/50 backdrop-blur-sm">
          <Users className="h-5 w-5 text-amber-800 mr-2" />
          <span className="text-sm font-medium text-amber-800">Our Artisans</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold text-balance leading-tight">
          Meet the Talented <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">Craftsmen</span>
        </h2>
        <p className="text-xl text-amber-800/70 max-w-3xl mx-auto leading-relaxed">
          Explore the profiles of our skilled artisans who create sustainable and eco-friendly products.
        </p>
      </div>

      {/* Artisan Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {artisans.map((artisan) => (
          <Card
            key={artisan.id}
            className="group relative bg-white/60 backdrop-blur-sm border border-amber-200/30 hover:bg-white/80 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
          >
            <CardHeader>
              <img
                src={artisan.image}
                alt={artisan.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardTitle className="text-amber-800 mt-4">{artisan.name}</CardTitle>
              <p className="text-amber-700/80 text-sm">{artisan.category}</p>
            </CardHeader>
            <CardContent className="text-amber-700/80 text-sm mt-2">
              {artisan.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
