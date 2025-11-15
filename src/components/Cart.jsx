import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, Trash2, Plus, Minus, Truck, Store, Gift } from 'lucide-react' // Added Gift icon
import { Button } from "./ui/button";

// Component for a single cart item
const CartItem = ({ item, section, onQuantityChange, onRemove }) => (
  // Added hover effect for interaction and subtle animation
  <div className="bg-white rounded-xl shadow-md p-5 flex gap-5 items-center transition-all duration-300 hover:shadow-lg hover:scale-[1.01]">
    <img
      src={item.image || "/placeholder.svg"}
      alt={item.name}
      className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl object-cover border border-gray-100"
    />
    <div className="flex-1 min-w-0">
      <h3 className="text-lg font-bold text-amber-900 truncate">{item.name}</h3>
      <p className="text-sm text-amber-600 mt-1">
        {section === 'buyWaste' ? `Category: ${item.category}` : `Artisan: ${item.artisan}`}
      </p>
      <p className="font-extrabold text-xl text-orange-600 mt-2">
        ₹{(item.price * item.quantity).toLocaleString()}
      </p>
    </div>

    <div className="flex flex-col items-end gap-3 justify-center">
      {/* Quantity Control with better styling */}
      <div className="flex items-center gap-1 bg-amber-50 rounded-full p-1 border border-amber-200">
        <button
          onClick={() => onQuantityChange(section, item.id, item.quantity - 1)}
          className="p-1 text-amber-700 hover:bg-amber-100 rounded-full transition-colors disabled:opacity-50"
          disabled={item.quantity <= 1}
        >
          <Minus className="w-4 h-4" />
        </button>

        <span className="w-6 text-center font-bold text-amber-900 text-sm">
          {item.quantity}
        </span>

        <button
          onClick={() => onQuantityChange(section, item.id, item.quantity + 1)}
          className="p-1 text-amber-700 hover:bg-amber-100 rounded-full transition-colors"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>

      <Button
        onClick={() => onRemove(section, item.id)}
        variant="ghost"
        className="text-red-500 hover:bg-red-50 hover:text-red-700 h-8 p-2"
      >
        <Trash2 className="w-4 h-4 mr-1" />
        Remove
      </Button>
    </div>
  </div>
)

export default function Cart() {
  const [cartItems, setCartItems] = useState({
    buyWaste: [
      {
        id: 1,
        name: 'Textile Scraps Bundle',
        category: 'Textile',
        price: 250,
        quantity: 2,
        image: '/textile-waste.jpg'
      },
      {
        id: 2,
        name: 'Plastic Bottles Mix',
        category: 'Plastic',
        price: 120,
        quantity: 1,
        image: '/plastic-bottles.jpg'
      }
    ],
    marketplace: [
      {
        id: 3,
        name: 'Handwoven Tote Bag',
        artisan: 'Artisan Collective',
        price: 450,
        quantity: 1,
        image: '/tote-bag.jpg'
      },
      {
        id: 4,
        name: 'Recycled Jewelry Set',
        artisan: 'EcoArt Studios',
        price: 350,
        quantity: 1,
        image: '/assorted-jewelry-display.png'
      }
    ]
  })

  const updateQuantity = (section, id, newQuantity) => {
    if (newQuantity < 1) return
    setCartItems(prev => ({
      ...prev,
      [section]: prev[section].map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    }))
  }

  const removeItem = (section, id) => {
    setCartItems(prev => ({
      ...prev,
      [section]: prev[section].filter(item => item.id !== id)
    }))
  }

  const calculateTotal = (items) =>
    items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const wasteTotal = calculateTotal(cartItems.buyWaste)
  const marketplaceTotal = calculateTotal(cartItems.marketplace)
  const grandTotal = wasteTotal + marketplaceTotal
  
  const shippingCost = grandTotal > 1000 ? 0 : 100;
  const tax = Math.round(grandTotal * 0.05);
  const finalTotal = grandTotal + shippingCost + tax;

  const isEmpty = cartItems.buyWaste.length === 0 && cartItems.marketplace.length === 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20"> {/* <--- ADDED pt-20 HERE to clear the assumed fixed navbar */}

        {/* Header */}
        <div className="mb-10 text-center">
          <div className="flex items-center justify-center gap-4 mb-2">
            <ShoppingCart className="w-10 h-10 text-orange-600 animate-bounce" />
            <h1 className="text-5xl font-extrabold text-amber-900">Your Shopping Cart</h1>
          </div>
          <p className="text-xl text-amber-700 mt-2">
            Manage your selections before checkout.
          </p>
        </div>

        {isEmpty ? (
          // Empty Cart State
          <div className="bg-white rounded-3xl shadow-2xl p-16 text-center animate-fadeIn">
            <ShoppingCart className="w-20 h-20 text-amber-300 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-amber-900 mb-3">Your cart is feeling lonely!</h2>
            <p className="text-lg text-amber-700 mb-8">
              Explore our ethical products and waste materials to fill it up.
            </p>

            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg">
                <Link to="/sell-waste">Buy Waste Materials</Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-orange-300 text-orange-700 hover:bg-orange-50"
              >
                <Link to="/marketplace">Shop Artisan Products</Link>
              </Button>
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Cart Items Section */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Buy Waste Section */}
              {cartItems.buyWaste.length > 0 && (
                <div className="space-y-4 p-6 bg-white rounded-2xl shadow-xl animate-slideInLeft">
                  <div className="flex items-center gap-4 mb-4 border-b pb-3 border-amber-100">
                    <div className="p-3 bg-orange-100 rounded-full">
                      <Truck className="w-7 h-7 text-orange-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-amber-900">Buy Waste (Raw Materials)</h2>
                    <span className="px-4 py-1 bg-orange-100 text-orange-700 rounded-full text-md font-semibold">
                      {cartItems.buyWaste.length} items
                    </span>
                  </div>

                  <div className="space-y-4">
                    {cartItems.buyWaste.map(item => (
                      <CartItem
                        key={item.id}
                        item={item}
                        section="buyWaste"
                        onQuantityChange={updateQuantity}
                        onRemove={removeItem}
                      />
                    ))}
                  </div>

                  <div className="bg-orange-50 rounded-xl p-5 flex justify-between items-center mt-6 border border-orange-200">
                    <span className="font-semibold text-xl text-amber-900">Subtotal for Raw Materials:</span>
                    <span className="text-3xl font-extrabold text-orange-600">
                      ₹{wasteTotal.toLocaleString()}
                    </span>
                  </div>
                </div>
              )}

              {/* Marketplace Section */}
              {cartItems.marketplace.length > 0 && (
                <div className="space-y-4 p-6 bg-white rounded-2xl shadow-xl animate-slideInLeft delay-100">
                  <div className="flex items-center gap-4 mb-4 border-b pb-3 border-amber-100">
                    <div className="p-3 bg-amber-100 rounded-full">
                      <Store className="w-7 h-7 text-amber-700" />
                    </div>
                    <h2 className="text-3xl font-bold text-amber-900">Marketplace (Artisan Products)</h2>
                    <span className="px-4 py-1 bg-amber-100 text-amber-700 rounded-full text-md font-semibold">
                      {cartItems.marketplace.length} items
                    </span>
                  </div>

                  <div className="space-y-4">
                    {cartItems.marketplace.map(item => (
                      <CartItem
                        key={item.id}
                        item={item}
                        section="marketplace"
                        onQuantityChange={updateQuantity}
                        onRemove={removeItem}
                      />
                    ))}
                  </div>

                  <div className="bg-amber-50 rounded-xl p-5 flex justify-between items-center mt-6 border border-amber-200">
                    <span className="font-semibold text-xl text-amber-900">Subtotal for Artisan Products:</span>
                    <span className="text-3xl font-extrabold text-orange-600">
                      ₹{marketplaceTotal.toLocaleString()}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              {/* Sticky Summary: Increased top-spacing to top-20 to clear a typical navbar */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 sticky top-20 animate-slideInRight"> {/* <--- MODIFIED top-6/top-10 to top-20 */}
                <h3 className="text-2xl font-extrabold text-amber-900 mb-6 border-b pb-3">Order Summary</h3>

                <div className="space-y-4 mb-6 pb-6 border-b border-amber-200">
                  <div className="flex justify-between text-lg text-amber-700">
                    <span className="font-medium">Raw Materials Subtotal</span>
                    <span className="font-semibold">₹{wasteTotal.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between text-lg text-amber-700">
                    <span className="font-medium">Artisan Products Subtotal</span>
                    <span className="font-semibold">₹{marketplaceTotal.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between text-lg text-amber-700">
                    <span className="font-medium">Shipping</span>
                    <span className={`font-semibold ${shippingCost === 0 ? 'text-green-600' : 'text-amber-900'}`}>
                      {shippingCost === 0 ? 'FREE' : `₹${shippingCost.toLocaleString()}`}
                    </span>
                  </div>
                  
                  {shippingCost === 0 && (
                     <div className="flex items-center gap-2 text-sm text-green-600 bg-green-50 p-2 rounded-lg font-semibold">
                        <Gift className="w-4 h-4" />
                        <span>Congratulations! Your order qualifies for FREE Shipping.</span>
                    </div>
                  )}


                  <div className="flex justify-between text-lg text-amber-700">
                    <span className="font-medium">Tax (5%)</span>
                    <span className="font-semibold">₹{tax.toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-8">
                  <span className="text-xl font-extrabold text-amber-900">GRAND TOTAL</span>
                  <span className="text-4xl font-extrabold text-orange-600">
                    ₹{finalTotal.toLocaleString()}
                  </span>
                </div>

                <Button size="xl" className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transition-all">
                  Proceed to Secure Checkout
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="w-full mt-4 border-orange-300 text-orange-700 hover:bg-orange-50 hover:text-orange-800 font-semibold"
                >
                  <Link to="/marketplace">
                     <Store className="w-4 h-4 mr-2"/>
                     Continue Shopping
                  </Link>
                </Button>
              </div>
            </div>

          </div>
        )}
      </div>

      {/* Tailwind CSS keyframes for animation (you would place these in your global CSS) */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .animate-slideInRight {
          animation: slideInRight 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .delay-100 {
            animation-delay: 0.1s;
        }
      `}</style>
    </div>
  )
}