import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Upload, Camera, DollarSign, Calendar, Sparkle, SparkleIcon, SparklesIcon } from "lucide-react";

export default function SellWastePage() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [estimatedValue, setEstimatedValue] = useState("₹0");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [material, setMaterial] = useState("");
  const [delivery, setDelivery] = useState("");

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
    let totalValue = files.length * 100; // placeholder AI value
    setEstimatedValue(`₹${totalValue}`);
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 min-h-screen">
      {/* Background Blurs */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-64 h-64 bg-gradient-to-r from-amber-200/20 to-orange-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-orange-200/15 to-yellow-200/15 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-5xl mx-auto space-y-12">
        {/* Heading */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-200/50 backdrop-blur-sm">
            <span className="text-sm font-medium text-amber-800">Sell Your Waste</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-balance leading-tight">
            Turn Your Waste into{" "}
            <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
              Value
            </span>
          </h2>
          <p className="text-xl text-amber-800/70 max-w-3xl mx-auto leading-relaxed">
            Upload your recyclable waste, fill product details, and schedule convenient pickup.
          </p>
        </div>

        {/* Product Form Card */}
        <Card className="group relative bg-white/60 backdrop-blur-sm border border-amber-200/30 hover:bg-white/80 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
          <CardHeader>
            <CardTitle className="text-amber-800">Product Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Product Title */}
            <input
              type="text"
              placeholder="Product Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-amber-200 focus:border-amber-400 focus:ring-1 focus:ring-amber-300 transition-all"
            />

            {/* Description */}
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-amber-200 focus:border-amber-400 focus:ring-1 focus:ring-amber-300 transition-all"
              rows={3}
            />

            {/* Category */}
            <input
              type="text"
              placeholder="Category (e.g., Home Decor)"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-amber-200 focus:border-amber-400 focus:ring-1 focus:ring-amber-300 transition-all"
            />

            {/* Quantity */}
            <input
              type="number"
              min={1}
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-amber-200 focus:border-amber-400 focus:ring-1 focus:ring-amber-300 transition-all"
            />

            {/* Material Dropdown */}
            <select
              value={material}
              onChange={(e) => setMaterial(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-amber-200 focus:border-amber-400 focus:ring-1 focus:ring-amber-300 transition-all"
            >
              <option value="">Select Material</option>
              <option value="bamboo">Bamboo</option>
              <option value="recycled_plastic">Recycled Plastic</option>
              <option value="jute">Jute</option>
              <option value="cork">Cork</option>
              <option value="organic_cotton">Organic Cotton</option>
              <option value="glass">Glass</option>
            </select>

            {/* Delivery Options */}
            <select
              value={delivery}
              onChange={(e) => setDelivery(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-amber-200 focus:border-amber-400 focus:ring-1 focus:ring-amber-300 transition-all"
            >
              <option value="">Select Delivery Option</option>
              <option value="pickup">Pickup</option>
              <option value="courier">Courier</option>
              <option value="self_drop">Self Drop</option>
            </select>

            {/* Upload Box */}
            <div className="relative border-dashed border-2 border-amber-200 rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer hover:border-amber-400 transition-colors">
              <Camera className="h-10 w-10 text-amber-600 mb-3" />
              <p className="text-amber-700/80 mb-3 text-center">
                Drag & drop files here or click to upload
              </p>
              <input
                type="file"
                multiple
                accept="image/*,video/*"
                onChange={handleFileUpload}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>

            {selectedFiles.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-semibold text-amber-800">Files Selected ({selectedFiles.length})</h4>
                <ul className="space-y-1 text-sm text-amber-700/80">
                  {selectedFiles.map((file, idx) => (
                    <li key={idx}>{file.name}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Estimated Value */}
            <div className="flex items-center justify-between bg-amber-100/50 p-4 rounded-xl shadow-sm">
              <div className="font-bold text-amber-800 text-lg">AI Waste Evaluator</div>
              <SparklesIcon className="h-6 w-6 text-amber-600" />
              <span className="font-bold text-amber-800 text-lg">Estimated Value: {estimatedValue}</span>
            </div>

            {/* Schedule Pickup */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm border border-amber-200/50 rounded-full px-4 py-2 shadow-sm w-full sm:w-auto">
                <Calendar className="h-5 w-5 text-primary" />
                <input
                  type="date"
                  className="bg-transparent focus:outline-none text-amber-800 font-medium"
                />
              </div>
              <Button className="rounded-full py-3 px-6 bg-gradient-to-r from-orange-600 to-amber-600 text-white hover:bg-orange-600 hover:text-white transition-all duration-300 w-full sm:w-auto">
                Schedule Pickup
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
