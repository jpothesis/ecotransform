import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { MessageCircle, Sparkles, ShoppingCart } from "lucide-react";

const wasteItems = [
  {
    id: 1,
    name: "Used Plastic Bottles",
    price: "₹200/kg",
    seller: "Ravi Verma",
    wasteType: "Plastic",
    image: "https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg",
    gradient: "from-amber-500 to-orange-500",
    phone: "919999999999"
  },
  {
    id: 2,
    name: "Old Denim Fabric",
    price: "₹350/kg",
    seller: "Neha Gupta",
    wasteType: "Fabric",
    image: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg",
    gradient: "from-orange-500 to-yellow-500",
    phone: "918888888888"
  },
  {
    id: 3,
    name: "Scrap Wood Pieces",
    price: "₹500/kg",
    seller: "Arjun Singh",
    wasteType: "Wood",
    image: "https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg",
    gradient: "from-yellow-500 to-amber-500",
    phone: "917777777777"
  },
];

export default function BuyWastePage() {
  const [selectedWaste, setSelectedWaste] = useState("");
  const [aiIdeas, setAiIdeas] = useState("");

  const generateIdeas = () => {
    if (!selectedWaste) return;

    setAiIdeas(`✨ Creative ideas for ${selectedWaste}:\n\n• Home decor items  \n• Storage organizers  \n• Fashion accessories  \n• DIY gifts  \n• Furniture pieces`);
  };

  const handleContact = (phone, item) => {
    const message = `Hi, I'm interested in buying ${item}`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`);
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-amber-200/20 to-orange-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-gradient-to-r from-orange-200/15 to-yellow-200/15 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center space-y-6 mb-20 animate-in slide-in-from-bottom duration-700">
          <h1 className="text-5xl font-bold">
            Buy Waste{" "}
            <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
              Create Wonders
            </span>
          </h1>
          <p className="text-lg text-amber-800/70">
            Purchase waste materials and transform them into amazing products.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {wasteItems.map((item, index) => (
            <Card
              key={item.id}
              className="group bg-white/60 backdrop-blur-sm border border-amber-200/30 hover:bg-white/80 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden animate-in slide-in-from-bottom"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <CardContent className="p-6 space-y-4">
                <h2 className="text-lg font-bold text-amber-900">
                  {item.name}
                </h2>
                <p className="text-sm text-amber-700/60">Seller: {item.seller}</p>

                <Badge className={`bg-gradient-to-r ${item.gradient} text-white rounded-full px-3 py-1`}>
                  {item.wasteType}
                </Badge>

                <p className={`text-xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                  {item.price}
                </p>

                <div className="flex gap-2">
                  <Button
                    className={`flex-1 rounded-full bg-gradient-to-r ${item.gradient} hover:scale-105 transition-all duration-300`}
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" /> Buy
                  </Button>

                  <Button
                    variant="outline"
                    className="flex-1 rounded-full border-amber-300 text-amber-800 hover:bg-amber-100 transition"
                    onClick={() => handleContact(item.phone, item.name)}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" /> Contact
                  </Button>
                </div>

                <Button
                  variant="ghost"
                  className="w-full rounded-full hover:bg-amber-100"
                  onClick={() => setSelectedWaste(item.name)}
                >
                  <Sparkles className="mr-2 h-4 w-4" /> Get AI Ideas
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* AI Section */}
        <div className="bg-white/60 backdrop-blur-sm border border-amber-200/30 rounded-2xl shadow-lg p-8 max-w-3xl mx-auto animate-in slide-in-from-bottom duration-700">
          <h2 className="text-2xl font-bold mb-4 text-amber-900">
            AI Waste → Wonder Generator
          </h2>

          <input
            type="text"
            placeholder="Enter waste type (plastic, denim...)"
            value={selectedWaste}
            onChange={(e) => setSelectedWaste(e.target.value)}
            className="w-full px-4 py-2 border border-amber-200 rounded-full mb-4 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />

          <Button
            onClick={generateIdeas}
            className="rounded-full bg-gradient-to-r from-amber-600 to-orange-600 hover:scale-105 transition-all duration-300 mb-4"
          >
            Generate Ideas
          </Button>

          {aiIdeas && (
            <div className="bg-amber-50/60 border border-amber-200 p-4 rounded-xl whitespace-pre-line text-amber-900">
              {aiIdeas}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
