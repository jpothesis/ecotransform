import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { Leaf, Recycle, Users, TrendingUp, Award, Target } from "lucide-react";

const impactStats = [
  { icon: Recycle, title: "Waste Diverted", value: "2.5M", unit: "kg", progress: 75, target: "3.3M kg by 2024", color: "text-primary" },
  { icon: Leaf, title: "CO₂ Saved", value: "1.8M", unit: "kg", progress: 82, target: "2.2M kg by 2024", color: "text-green-600" },
  { icon: Users, title: "Active Users", value: "15K", unit: "+", progress: 68, target: "22K users by 2024", color: "text-blue-600" },
  { icon: TrendingUp, title: "Revenue Generated", value: "₹45L", unit: "+", progress: 90, target: "₹50L by 2024", color: "text-purple-600" },
];

const achievements = [
  { title: "Eco Warrior", description: "Diverted 100kg+ waste", users: "2.3K users" },
  { title: "Green Champion", description: "Saved 500kg+ CO₂", users: "1.8K users" },
  { title: "Community Leader", description: "Helped 50+ artisans", users: "456 users" },
  { title: "Sustainability Expert", description: "1 year active", users: "3.1K users" },
];

export default function ImpactSection() {
  return (
    <section id="impact" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-64 h-64 bg-gradient-to-r from-amber-200/20 to-orange-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-orange-200/15 to-yellow-200/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-yellow-200/25 to-amber-200/25 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center space-y-6 mb-20 animate-in slide-in-from-bottom duration-700">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-200/50 backdrop-blur-sm">
            <span className="text-sm font-medium text-amber-800">Impact Dashboard</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-balance leading-tight">
            Track Your{" "}
            <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
              Environmental Impact
            </span>
          </h2>
          <p className="text-xl text-amber-800/70 text-pretty max-w-3xl mx-auto leading-relaxed">
            See the real difference you're making. Every piece of waste diverted contributes to a more sustainable future.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {impactStats.map((stat, index) => (
            <Card
              key={index}
              className="group relative bg-white/60 backdrop-blur-sm border border-amber-200/30 hover:bg-white/80 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-in slide-in-from-bottom"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <CardHeader className="pb-3">
                <div className="w-12 h-12 rounded-full bg-white/30 flex items-center justify-center mx-auto mb-3 shadow-md">
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <CardTitle className="text-sm font-medium text-amber-700/80">{stat.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-3xl font-bold">
                  {stat.value} <span className="text-lg text-amber-700/70 ml-1">{stat.unit}</span>
                </div>
                <div className="space-y-2">
                  <Progress value={stat.progress} className="h-2 rounded-full" />
                  <p className="text-xs text-amber-700/70">Target: {stat.target}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Personal Impact Dashboard */}
        <Card className="mb-16 group hover:shadow-xl transition-shadow rounded-xl">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-amber-800">
              <Target className="h-5 w-5 text-primary" />
              <span>Your Personal Impact Dashboard</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {["This Month", "All Time", "Achievements"].map((section, idx) => (
                <div key={idx} className="space-y-4">
                  <h4 className="font-semibold text-amber-800">{section}</h4>
                  <div className="space-y-3">
                    {section === "This Month" && (
                      <>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-amber-700/70">Waste Sold</span>
                          <span className="font-medium">45 kg</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-amber-700/70">CO₂ Saved</span>
                          <span className="font-medium text-green-600">32 kg</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-amber-700/70">Earnings</span>
                          <span className="font-medium text-primary">₹2,340</span>
                        </div>
                      </>
                    )}
                    {section === "All Time" && (
                      <>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-amber-700/70">Total Waste</span>
                          <span className="font-medium">234 kg</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-amber-700/70">Total CO₂</span>
                          <span className="font-medium text-green-600">167 kg</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-amber-700/70">Total Earnings</span>
                          <span className="font-medium text-primary">₹12,890</span>
                        </div>
                      </>
                    )}
                    {section === "Achievements" && (
                      <div className="space-y-2">
                        {achievements.slice(0, 2).map((ach, i) => (
                          <Badge key={i} variant="outline" className="w-full justify-start p-2 rounded-md flex items-center">
                            <Award className="h-4 w-4 mr-2 text-primary" />
                            <div className="text-left">
                              <div className="text-xs font-medium text-amber-800">{ach.title}</div>
                              <div className="text-xs text-amber-700/70">{ach.description}</div>
                            </div>
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Community Achievement Badges */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center text-amber-800">Community Achievements</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all rounded-xl">
                <CardContent className="p-6">
                  <Award className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-1 text-amber-800">{achievement.title}</h4>
                  <p className="text-sm text-amber-700/70 mb-2">{achievement.description}</p>
                  <Badge variant="secondary" className="text-xs rounded-full">
                    {achievement.users}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
