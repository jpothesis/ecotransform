import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Star, Heart, ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Upcycled Denim Tote Bag",
    price: "₹899",
    originalPrice: "₹1,299",
    rating: 4.8,
    reviews: 124,
    artisan: "Priya Sharma",
    image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg",
    tags: ["Eco-Friendly", "Handmade", "Denim"],
    wasteSource: "Old Jeans",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    id: 2,
    name: "Recycled Plastic Planters",
    price: "₹549",
    originalPrice: "₹799",
    rating: 4.9,
    reviews: 89,
    artisan: "Rajesh Kumar",
    image: "https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg",
    tags: ["Garden", "Recycled", "Colorful"],
    wasteSource: "Plastic Bottles",
    gradient: "from-orange-500 to-yellow-500",
  },
  {
    id: 3,
    name: "Newspaper Wall Art",
    price: "₹1,299",
    originalPrice: "₹1,899",
    rating: 4.7,
    reviews: 67,
    artisan: "Meera Patel",
    image: "https://images.pexels.com/photos/1070945/pexels-photo-1070945.jpeg",
    tags: ["Art", "Unique", "Wall Decor"],
    wasteSource: "Old Newspapers",
    gradient: "from-yellow-500 to-amber-500",
  },
  {
    id: 4,
    name: "Tire Ottoman Set",
    price: "₹2,499",
    originalPrice: "₹3,499",
    rating: 4.6,
    reviews: 45,
    artisan: "Amit Singh",
    image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg",
    tags: ["Furniture", "Modern", "Durable"],
    wasteSource: "Car Tires",
    gradient: "from-amber-600 to-orange-600",
  },
];

export default function MarketplaceSection() {
  return (
    <section id="marketplace" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-amber-200/20 to-orange-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-gradient-to-r from-orange-200/15 to-yellow-200/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-yellow-200/25 to-amber-200/25 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center space-y-6 mb-20 animate-in slide-in-from-bottom duration-700">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-200/50 backdrop-blur-sm">
            <span className="text-sm font-medium text-amber-800">Curated Collection</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight">
            Discover Amazing{" "}
            <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
              Eco-Products
            </span>
          </h2>
          
          <p className="text-xl text-amber-800/70 text-pretty max-w-3xl mx-auto leading-relaxed">
            Browse our curated marketplace of beautiful products made from upcycled waste materials by talented
            artisans.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="group relative bg-white/60 backdrop-blur-sm border border-amber-200/30 hover:bg-white/80 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden animate-in slide-in-from-bottom"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <Button
                  size="sm"
                  className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white text-amber-800 border-0 shadow-lg"
                >
                  <Heart className="h-4 w-4" />
                </Button>
                
                <Badge className={`absolute top-3 left-3 bg-gradient-to-r ${product.gradient} text-white border-0 rounded-full px-3 py-1 font-medium shadow-lg`}>
                  {Math.round(
                    ((Number.parseFloat(product.originalPrice.slice(1)) -
                      Number.parseFloat(product.price.slice(1))) /
                      Number.parseFloat(product.originalPrice.slice(1))) *
                      100
                  )}
                  % OFF
                </Badge>
              </div>

              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-bold text-lg line-clamp-2 text-amber-900 group-hover:text-amber-800 transition-colors leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-sm text-amber-700/60 font-medium">by {product.artisan}</p>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    <span className="text-sm font-semibold ml-1 text-amber-800">{product.rating}</span>
                  </div>
                  <span className="text-sm text-amber-700/60">({product.reviews})</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag, idx) => (
                    <Badge 
                      key={idx} 
                      variant="outline" 
                      className="text-xs bg-amber-50/50 border-amber-200/60 text-amber-700 hover:bg-amber-100/50 transition-colors rounded-full px-3 py-1"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="text-sm text-amber-700/70 bg-amber-50/50 rounded-full px-3 py-2 border border-amber-200/30">
                  Made from: <span className={`font-semibold bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}>{product.wasteSource}</span>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className={`text-xl font-bold bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}>
                        {product.price}
                      </span>
                      <span className="text-sm text-amber-700/50 line-through">{product.originalPrice}</span>
                    </div>
                  </div>
                  <Button 
                    size="sm" 
                    className={`shrink-0 rounded-full bg-gradient-to-r ${product.gradient} hover:shadow-lg hover:scale-105 transition-all duration-300 border-0 px-4 py-2 font-medium`}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-in slide-in-from-bottom duration-700 delay-700">
          <Button 
            size="lg" 
            className="rounded-full px-8 py-4 bg-white/60 backdrop-blur-sm border border-amber-200/60 text-amber-800 hover:bg-gradient-to-r hover:from-amber-600 hover:to-orange-600 hover:text-white hover:border-transparent transition-all duration-300 transform hover:scale-105 font-medium text-base"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}