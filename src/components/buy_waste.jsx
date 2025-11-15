import React, { useEffect, useState } from "react";
import { ShoppingCart, Scale, Info, Truck } from "lucide-react";
import axios from "axios";

const BuyWaste = () => {
  const [wasteProducts, setWasteProducts] = useState([]);
  const [selectedItems, setSelectedItems] = useState(new Set());

  useEffect(() => {
    const fetchWaste = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/waste/all");
        setWasteProducts(res.data.data || res.data); // depending on response structure
      } catch (err) {
        console.error("Error fetching waste:", err);
      }
    };
    fetchWaste();
  }, []);

  const toggleSelection = (id) => {
    setSelectedItems(prev => {
      const newSet = new Set(prev);
      newSet.has(id) ? newSet.delete(id) : newSet.add(id);
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full mb-6">
            <Scale size={20} />
            <span className="font-medium">Buy Raw Materials</span>
          </div>
          <h1 className="text-5xl font-bold mb-4">
            Purchase Quality <span className="text-orange-600">Waste Materials</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Source sorted and processed waste materials for your recycling business or upcycling projects.
          </p>
        </div>

        {/* Waste Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wasteProducts.map(product => (
            <div key={product._id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden group">
                <img src={`http://localhost:5000${product.images[0]}`} alt={product.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-bold text-orange-600">
                  {product.material}
                </div>
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {product.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{product.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
                  <Truck size={16} />
                  <span>Quantity: {product.quantity} kg</span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-sm text-gray-500">Price per kg</p>
                    <p className="text-2xl font-bold text-gray-800">₹{product.price}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      <Info size={20} className="text-gray-600" />
                    </button>
                    <button 
                      onClick={() => toggleSelection(product._id)}
                      className={`px-4 py-2 rounded-lg transition-colors font-medium flex items-center gap-2 ${
                        selectedItems.has(product._id) ? "bg-green-600 text-white hover:bg-green-700" : "bg-orange-500 text-white hover:bg-orange-600"
                      }`}
                    >
                      <ShoppingCart size={18} />
                      {selectedItems.has(product._id) ? "Added" : "Buy"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuyWaste;
