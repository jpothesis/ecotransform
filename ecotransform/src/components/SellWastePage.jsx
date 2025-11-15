import React, { useState, useMemo } from 'react';
import { Button } from "./ui/button";
import { Upload, Camera, Calendar, SparklesIcon, MapPin } from "lucide-react";

export default function SellWastePage() {
  // --- Form State ---
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [material, setMaterial] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [delivery, setDelivery] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState(null);

  // --- Helpers ---
  const handleFileUpload = (event) => {
    setSelectedFiles(Array.from(event.target.files));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionMessage(null);

    // Mock API call simulation
    setTimeout(() => {
      console.log({ title, description, material, quantity, delivery, pickupDate, files: selectedFiles.length });
      setSubmissionMessage({
        type: 'success',
        text: 'Successfully listed your waste! Check your profile for updates.',
      });
      setIsSubmitting(false);
      // Reset form
      setTitle('');
      setDescription('');
      setMaterial('');
      setQuantity(0);
      setDelivery('');
      setPickupDate('');
      setSelectedFiles([]);
    }, 2000);
  };

  // --- Estimated Value in ₹ ---
  const estimatedValue = useMemo(() => {
    const qty = parseFloat(quantity) || 0;
    let ratePerKg = 0;

    switch (material) {
      case 'recycled_plastic':
        ratePerKg = 40;
        break;
      case 'metal':
        ratePerKg = 80;
        break;
      case 'wood':
        ratePerKg = 30;
        break;
      case 'textile':
        ratePerKg = 20;
        break;
      case 'glass':
        ratePerKg = 25;
        break;
      case 'e-waste':
        ratePerKg = 100;
        break;
      default:
        ratePerKg = 10;
    }

    const value = (qty * ratePerKg).toFixed(2);
    return `₹ ${value}`;
  }, [quantity, material]);

  // --- Render ---
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      <div className="max-w-4xl mx-auto px-6 py-10">

        {/* Header */}
        <div className="text-center mb-10">
          <Upload className="w-16 h-16 mx-auto text-orange-600 mb-4" />
          <h1 className="text-4xl font-extrabold text-amber-950 mb-3">
            List Your Waste for Transformation ♻️
          </h1>
          <p className="text-lg text-amber-800 max-w-2xl mx-auto">
            Turn your scrap into value. Fill in the details, upload photos, and schedule a pickup or drop-off.
          </p>
        </div>

        {/* Submission Message */}
        {submissionMessage && (
          <div className={`p-4 rounded-lg text-center mb-6 ${submissionMessage.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            <p className="font-semibold">{submissionMessage.text}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-2xl border border-amber-200 space-y-6">

          {/* Section 1: Basic Details */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-amber-900 border-b pb-2">What are you listing?</h2>

            <input
              type="text"
              placeholder="Title (e.g., Old car tires or Scrap metal sheets)"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-300 transition-all text-lg"
              required
            />

            <textarea
              placeholder="Detailed Description (Condition, size, location, etc.)"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-300 transition-all"
              required
            />
          </div>

          {/* Section 2: Material and Quantity */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <select
              value={material}
              onChange={(e) => setMaterial(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-300 transition-all appearance-none bg-white cursor-pointer"
              required
            >
              <option value="" disabled>Select Material Type</option>
              <option value="recycled_plastic">Plastic (#1-7)</option>
              <option value="metal">Metal (Steel, Aluminum)</option>
              <option value="wood">Wood/Timber Scrap</option>
              <option value="textile">Textile Waste</option>
              <option value="glass">Glass</option>
              <option value="e-waste">E-Waste/Electronics</option>
            </select>

            <div className="relative">
              <input
                type="number"
                min={1}
                placeholder="Quantity (in kg or units)"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-300 transition-all pr-16"
                required
              />
              <span className="absolute right-0 top-0 mt-3 mr-4 text-sm font-semibold text-amber-700">kg</span>
            </div>
          </div>

          {/* AI Evaluation */}
          <div className="flex items-center justify-between bg-amber-100 p-4 rounded-xl shadow-md border-l-4 border-orange-500">
            <div className="flex items-center gap-3">
              <SparklesIcon className="h-6 w-6 text-orange-600 animate-pulse" />
              <div className="font-bold text-amber-800 text-lg">AI Waste Evaluator</div>
            </div>
            <span className="font-bold text-lg text-orange-700">Value: {estimatedValue}</span>
          </div>

          {/* Section 3: Photos and Delivery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="relative border-dashed border-4 border-amber-300 rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer hover:border-orange-500 transition-colors bg-amber-50 h-56">
              <Camera className="h-10 w-10 text-orange-600 mb-3" />
              <p className="text-amber-700/80 mb-3 text-center font-medium">
                Drag & drop files here or click to upload
              </p>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileUpload}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              {selectedFiles.length > 0 && (
                <p className="text-sm font-semibold text-green-600 mt-2">
                  ✅ {selectedFiles.length} file(s) selected
                </p>
              )}
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-amber-900 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-orange-600"/> Delivery Options
              </h3>
              <select
                value={delivery}
                onChange={(e) => setDelivery(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-300 transition-all appearance-none bg-white cursor-pointer"
                required
              >
                <option value="" disabled>Select Delivery Option</option>
                <option value="pickup">Schedule Pickup (We Collect)</option>
                <option value="self_drop">Self Drop (I drop off)</option>
              </select>

              {delivery === 'pickup' && (
                <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm border border-amber-200/50 rounded-xl px-4 py-3 shadow-sm">
                  <Calendar className="h-5 w-5 text-orange-600" />
                  <input
                    type="date"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="bg-transparent focus:outline-none text-amber-800 font-medium w-full"
                    required
                  />
                </div>
              )}

              <div className="bg-amber-50 p-3 rounded-lg text-sm text-amber-700">
                <p>Pickup requests typically incur a small fee which will be deducted from your earnings.</p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <Button 
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-lg py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Listing Waste...' : 'List Waste Now'}
          </Button>

        </form>
      </div>
    </div>
  );
}
