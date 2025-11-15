import React, { useState } from 'react';
import { ShoppingCart, Scale, Info, Truck } from 'lucide-react';

const BuyWaste = () => {
  const [selectedItems, setSelectedItems] = useState(new Set());

  const wasteProducts = [
    {
      id: 1,
      name: "PET Plastic Bottles",
      category: "Plastic Waste",
      pricePerKg: 45,
      minOrder: "50 kg",
      image: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=500&h=400&fit=crop",
      description: "Clean, sorted PET plastic bottles ready for recycling. Ideal for manufacturing new bottles or polyester fiber.",
      purity: "95%",
      condition: "Crushed & Baled"
    },
    {
      id: 2,
      name: "Scrap Steel",
      category: "Metal Waste",
      pricePerKg: 35,
      minOrder: "100 kg",
      image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=500&h=400&fit=crop",
      description: "Mixed scrap steel from industrial sources. Perfect for metal fabrication and smelting.",
      purity: "90%",
      condition: "Shredded"
    },
    {
      id: 3,
      name: "Aluminum Cans",
      category: "Metal Waste",
      pricePerKg: 120,
      minOrder: "25 kg",
      image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=500&h=400&fit=crop",
      description: "Collected and compressed aluminum beverage cans. High-grade material for aluminum recycling.",
      purity: "98%",
      condition: "Compressed"
    },
    {
      id: 4,
      name: "Cardboard Boxes",
      category: "Paper Waste",
      pricePerKg: 12,
      minOrder: "200 kg",
      image: "https://images.unsplash.com/photo-1607627000458-210e8d2bdb1d?w=500&h=400&fit=crop",
      description: "Sorted corrugated cardboard boxes from commercial packaging. Excellent for paper mills.",
      purity: "92%",
      condition: "Flattened & Bundled"
    },
    {
      id: 5,
      name: "Copper Wire Scrap",
      category: "Metal Waste",
      pricePerKg: 580,
      minOrder: "10 kg",
      image: "https://images.unsplash.com/photo-1473445730015-841f29a9490b?w=500&h=400&fit=crop",
      description: "Pure copper wire extracted from electrical cables. Premium quality for copper smelting.",
      purity: "99%",
      condition: "Stripped & Sorted"
    },
    {
      id: 6,
      name: "HDPE Plastic",
      category: "Plastic Waste",
      pricePerKg: 38,
      minOrder: "75 kg",
      image: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=500&h=400&fit=crop",
      description: "High-density polyethylene from bottles and containers. Suitable for making pipes and toys.",
      purity: "94%",
      condition: "Shredded & Washed"
    },
    {
      id: 7,
      name: "Glass Bottles",
      category: "Glass Waste",
      pricePerKg: 8,
      minOrder: "150 kg",
      image: "https://images.unsplash.com/photo-1582408921715-18e7806365c1?w=500&h=400&fit=crop",
      description: "Sorted glass bottles by color (clear, green, brown). Ready for glass manufacturing recycling.",
      purity: "96%",
      condition: "Crushed"
    },
    {
      id: 8,
      name: "E-Waste Components",
      category: "Electronic Waste",
      pricePerKg: 250,
      minOrder: "20 kg",
      image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&h=400&fit=crop",
      description: "Circuit boards and electronic components from discarded devices. Contains precious metals.",
      purity: "85%",
      condition: "Dismantled"
    },
    {
      id: 9,
      name: "Newspaper & Magazines",
      category: "Paper Waste",
      pricePerKg: 15,
      minOrder: "100 kg",
      image: "https://images.unsplash.com/photo-1586339277861-b0b895343ba5?w=500&h=400&fit=crop",
      description: "Old newspapers and magazines in good condition. Perfect for paper recycling units.",
      purity: "93%",
      condition: "Bundled"
    },
    {
      id: 10,
      name: "Rubber Tires",
      category: "Rubber Waste",
      pricePerKg: 18,
      minOrder: "80 kg",
      image: "https://images.unsplash.com/photo-1594535182308-8ffefbb661e1?w=500&h=400&fit=crop",
      description: "Used vehicle tires suitable for rubber crumb production or tire-derived fuel.",
      purity: "90%",
      condition: "Whole/Shredded"
    },
    {
      id: 11,
      name: "Textile Fabric Scraps",
      category: "Textile Waste",
      pricePerKg: 22,
      minOrder: "50 kg",
      image: "https://images.unsplash.com/photo-1558769132-cb1aea1f1d58?w=500&h=400&fit=crop",
      description: "Mixed cotton and polyester fabric scraps from garment manufacturing units.",
      purity: "88%",
      condition: "Sorted by Type"
    },
    {
      id: 12,
      name: "Brass Scrap",
      category: "Metal Waste",
      pricePerKg: 420,
      minOrder: "15 kg",
      image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=500&h=400&fit=crop",
      description: "Mixed brass scrap from plumbing fixtures and fittings. High value metal waste.",
      purity: "95%",
      condition: "Mixed Pieces"
    }
  ];

  const toggleSelection = (id) => {
    setSelectedItems(prev => {
      const newSelection = new Set(prev);
      if (newSelection.has(id)) {
        newSelection.delete(id);
      } else {
        newSelection.add(id);
      }
      return newSelection;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */}
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
            Source sorted and processed waste materials for your recycling business or upcycling projects. Verified quality and competitive bulk pricing.
          </p>
        </div>

        {/* Waste Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wasteProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-bold text-orange-600">
                  {product.purity} Pure
                </div>
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {product.category}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-orange-600 font-medium mb-3">
                  {product.condition}
                </p>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Minimum Order */}
                <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
                  <Truck size={16} />
                  <span>Min Order: {product.minOrder}</span>
                </div>

                {/* Price and Action */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-sm text-gray-500">Price per kg</p>
                    <p className="text-2xl font-bold text-gray-800">
                      ₹{product.pricePerKg}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      <Info size={20} className="text-gray-600" />
                    </button>
                    <button 
                      onClick={() => toggleSelection(product.id)}
                      className={`px-4 py-2 rounded-lg transition-colors font-medium flex items-center gap-2 ${
                        selectedItems.has(product.id)
                          ? 'bg-green-600 text-white hover:bg-green-700'
                          : 'bg-orange-500 text-white hover:bg-orange-600'
                      }`}
                    >
                      <ShoppingCart size={18} />
                      {selectedItems.has(product.id) ? 'Added' : 'Buy'}
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