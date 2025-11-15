import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Upload, Users, ShoppingBag, TrendingUp, MessageCircle, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Upload,
    title: "Sell Waste",
    description: "Upload photos/videos, get instant valuation, and schedule convenient pickup",
    details: ["Photo/video upload", "AI-powered valuation", "Flexible pickup scheduling", "Real-time tracking"],
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Users,
    title: "Customize with Artisans",
    description: "Connect directly with skilled artisans, chat in real-time, and collaborate on unique creations",
    details: ["Direct messaging", "Video consultations", "Design collaboration", "Progress tracking"],
    gradient: "from-orange-500 to-yellow-500",
  },
  {
    icon: ShoppingBag,
    title: "Eco-Marketplace",
    description: "Discover and purchase beautiful eco-products made from upcycled waste materials",
    details: ["Curated products", "Sustainability ratings", "Artisan stories", "Secure payments"],
    gradient: "from-yellow-500 to-amber-500",
  },
  {
    icon: TrendingUp,
    title: "Revenue Sharing",
    description: "Fair revenue split between waste sellers and artisans for every product sold",
    details: ["Transparent pricing", "Automatic payouts", "Performance analytics", "Bonus incentives"],
    gradient: "from-amber-600 to-orange-600",
  },
  {
    icon: MessageCircle,
    title: "Community Hub",
    description: "Share reels, jugaad hacks, tutorials, and showcase your sustainable creations",
    details: ["Video content", "Tutorial sharing", "Community challenges", "Expert tips"],
    gradient: "from-orange-600 to-yellow-600",
  },
  {
    icon: BarChart3,
    title: "Waste Tracker",
    description: "Monitor your environmental impact and see how much waste you've helped divert",
    details: ["Impact dashboard", "CO2 savings", "Waste diverted", "Achievement badges"],
    gradient: "from-yellow-600 to-amber-600",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-64 h-64 bg-gradient-to-r from-amber-200/20 to-orange-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-orange-200/15 to-yellow-200/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-yellow-200/25 to-amber-200/25 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center space-y-6 mb-20 animate-in slide-in-from-bottom duration-700">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-200/50 backdrop-blur-sm">
            <span className="text-sm font-medium text-amber-800">Complete Platform</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight">
            Everything You Need for{" "}
            <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
              Sustainable Living
            </span>
          </h2>
          
          <p className="text-xl text-amber-800/70 text-pretty max-w-3xl mx-auto leading-relaxed">
            Our comprehensive platform makes it easy to turn waste into value while building a more sustainable future
            together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group relative bg-white/60 backdrop-blur-sm border border-amber-200/30 hover:bg-white/80 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-in slide-in-from-bottom"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="space-y-4">
                <div className="relative">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className={`absolute inset-0 w-14 h-14 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300`} />
                </div>
                
                <div className="space-y-3">
                  <CardTitle className="text-xl font-bold text-amber-900 group-hover:text-amber-800 transition-colors">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-amber-700/70 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm text-amber-700/80 group-hover:text-amber-700 transition-colors">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient} mr-3 flex-shrink-0`} />
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  variant="outline"
                  className="w-full rounded-full py-3 px-6 bg-white/40 backdrop-blur-sm border border-amber-200/60 text-amber-800 hover:bg-gradient-to-r hover:from-amber-600 hover:to-orange-600 hover:text-white hover:border-transparent transition-all duration-300 transform hover:scale-105 font-medium"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}