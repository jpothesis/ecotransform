import React, { useState, useMemo } from "react";
import axios from "axios";
import { Button } from "./ui/button";
import { Upload, Camera, Calendar, SparklesIcon, DollarSign } from "lucide-react";

export default function SellWastePage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [material, setMaterial] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [delivery, setDelivery] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [userPrice, setUserPrice] = useState(""); 
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState(null);

  // Handle file selection
  const handleFileUpload = (e) => setSelectedFiles(Array.from(e.target.files));

  // AI-based estimated value
  const { estimatedValue, ratePerKg } = useMemo(() => {
    const qty = parseFloat(quantity) || 0;
    let baseRate = 10;
    switch (material) {
      case "recycled_plastic": baseRate = 40; break;
      case "metal": baseRate = 80; break;
      case "wood": baseRate = 30; break;
      case "textile": baseRate = 20; break;
      case "glass": baseRate = 25; break;
      case "e-waste": baseRate = 100; break;
    }
    const effectiveRate = parseFloat(userPrice) || baseRate;
    return { estimatedValue: `₹ ${(qty * effectiveRate).toFixed(2)}`, ratePerKg: baseRate };
  }, [quantity, material, userPrice]);

  const aiRateText = material ? `(AI Rate: ₹${ratePerKg}/kg)` : "";

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionMessage(null);

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("material", material);
      formData.append("quantity", quantity);
      formData.append("price", userPrice || ratePerKg);
      formData.append("delivery", delivery);
      if (pickupDate) formData.append("pickupDate", pickupDate);
      formData.append("createdBy", "user123"); // replace with actual logged-in user ID if available

      selectedFiles.forEach(file => formData.append("images", file));

      await axios.post("http://localhost:5000/api/waste/create", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setSubmissionMessage({ type: "success", text: "Successfully listed your waste!" });
      setTitle(""); setDescription(""); setMaterial(""); setQuantity(0);
      setDelivery(""); setPickupDate(""); setSelectedFiles([]); setUserPrice("");
    } catch (err) {
      console.error(err);
      setSubmissionMessage({ type: "error", text: "Failed to submit listing." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="text-center mb-10">
          <Upload className="w-16 h-16 mx-auto text-orange-600 mb-4" />
          <h1 className="text-4xl font-extrabold text-amber-950 mb-3">
            List Your Waste for Transformation ♻️
          </h1>
          <p className="text-lg text-amber-800 max-w-2xl mx-auto">
            Turn your scrap into value. Fill in the details, upload photos, and schedule a pickup or drop-off.
          </p>
        </div>

        {submissionMessage && (
          <div className={`p-4 rounded-lg text-center mb-6 ${submissionMessage.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
            <p className="font-semibold">{submissionMessage.text}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-2xl border border-amber-200 space-y-8">
          {/* Title & Description */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-amber-900 border-b pb-2">What are you listing?</h2>
            <input type="text" placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-amber-200" required/>
            <textarea placeholder="Description" value={description} onChange={e=>setDescription(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-amber-200" rows={4} required/>
          </div>

          {/* Material & Quantity */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-amber-900 border-b pb-2">Material & Quantity</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <select value={material} onChange={e=>setMaterial(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-amber-200" required>
                <option value="" disabled>Select Material Type</option>
                <option value="recycled_plastic">Plastic (#1-7)</option>
                <option value="metal">Metal</option>
                <option value="wood">Wood</option>
                <option value="textile">Textile</option>
                <option value="glass">Glass</option>
                <option value="e-waste">E-Waste</option>
              </select>
              <input type="number" min={1} placeholder="Quantity (kg)" value={quantity} onChange={e=>setQuantity(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-amber-200" required/>
            </div>
          </div>

          {/* Upload & Price */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative border-dashed border-4 border-amber-300 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer hover:border-orange-500 transition-colors bg-amber-50 h-56">
              <Camera className="h-10 w-10 text-orange-600 mb-3" />
              <p className="text-amber-700/80 mb-2 text-center font-medium">Upload Photos (Max 5 files)</p>
              <input type="file" multiple accept="image/*" onChange={handleFileUpload} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"/>
              {selectedFiles.length > 0 && <p className="text-sm font-semibold text-green-600 mt-2">✅ {selectedFiles.length} file(s) selected</p>}
            </div>

            <div className="p-6 bg-white rounded-xl border border-amber-200 shadow-md h-56 space-y-3 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-amber-900 flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-orange-600"/> Set Your Price
              </h3>
              <p className="text-sm text-amber-700">Enter desired price per kg. Leave blank to use AI's suggested rate.</p>
              <div className="relative">
                <span className="absolute left-0 top-0 mt-3 ml-4 text-lg font-bold text-amber-800">₹</span>
                <input type="number" min={0} placeholder={`Price per kg ${aiRateText}`} value={userPrice} onChange={e=>setUserPrice(e.target.value)} className="w-full px-4 py-3 pl-10 rounded-xl border border-amber-300"/>
                <span className="absolute right-0 top-0 mt-3 mr-4 text-sm font-semibold text-amber-700">/ kg</span>
              </div>
            </div>
          </div>

          {/* Delivery & Pickup */}
          <div className="space-y-4 pt-4">
            <h2 className="text-2xl font-bold text-amber-900 border-b pb-2">Delivery & Pickup</h2>
            <select value={delivery} onChange={e=>setDelivery(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-amber-200" required>
              <option value="" disabled>Select Delivery Option</option>
              <option value="pickup">Schedule Pickup (We Collect)</option>
              <option value="self_drop">Self Drop</option>
            </select>
            {delivery === "pickup" && (
              <>
                <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 shadow-sm">
                  <Calendar className="h-5 w-5 text-orange-600" />
                  <input type="date" value={pickupDate} onChange={e=>setPickupDate(e.target.value)} className="bg-transparent focus:outline-none text-amber-800 font-medium w-full"/>
                </div>
                <div className="bg-amber-100 p-3 rounded-lg text-sm text-amber-700">
                  Pickup requests require a precise location and may incur a small fee.
                </div>
              </>
            )}
          </div>

          {/* AI Calculated Value */}
          <div className="flex items-center justify-between bg-orange-100 p-5 rounded-xl shadow-lg border-l-4 border-orange-500 mt-8">
            <div className="flex items-center gap-3">
              <SparklesIcon className="h-7 w-7 text-orange-600 animate-pulse" />
              <div className="font-extrabold text-amber-900 text-xl">AI Calculated Value</div>
            </div>
            <div className="text-right">
              <span className="text-sm text-amber-700">{userPrice ? "Your rate applied:" : "AI Estimated Payout:"}</span>
              <span className="font-extrabold text-2xl text-orange-700 block">{estimatedValue}</span>
            </div>
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-lg py-4 rounded-full shadow-lg" disabled={isSubmitting}>
            {isSubmitting ? "Submitting Listing..." : "List Waste Now"}
          </Button>
        </form>
      </div>
    </div>
  );
}
