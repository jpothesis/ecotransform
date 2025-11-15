import { useState } from 'react'
import { ShoppingCart, Trash2, Plus, Minus, Truck, Store } from 'lucide-react'

export default function Cart() {
  const [cartItems, setCartItems] = useState({
    buyWaste: [
      {
        id: 1,
        name: 'Textile Scraps Bundle',
        category: 'Textile',
        price: 250,
        quantity: 2,
        image: 'https://images.unsplash.com/photo-1558769132-cb1aea1f1d58?w=200&h=200&fit=crop'
      },
      {
        id: 2,
        name: 'Plastic Bottles Mix',
        category: 'Plastic',
        price: 120,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=200&h=200&fit=crop'
      }
    ],
    marketplace: [
      {
        id: 3,
        name: 'Handwoven Tote Bag',
        artisan: 'Artisan Collective',
        price: 450,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=200&h=200&fit=crop'
      },
      {
        id: 4,
        name: 'Recycled Jewelry Set',
        artisan: 'EcoArt Studios',
        price: 350,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=200&fit=crop'
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

  const CartItem = ({ item, section, onQuantityChange, onRemove }) => (
    <div className="bg-white rounded-lg shadow p-4 flex gap-4 items-start">
      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 rounded object-cover"
      />
      <div className="flex-1">
        <h3 className="font-semibold text-amber-900">{item.name}</h3>
        <p className="text-sm text-amber-700">{item.category || item.artisan}</p>
        <p className="font-bold text-orange-600 mt-2">₹{item.price.toLocaleString()}</p>
      </div>

      <div className="flex flex-col items-end gap-3">
        <div className="flex items-center gap-2 bg-amber-50 rounded-lg p-1">
          <button
            onClick={() => onQuantityChange(section, item.id, item.quantity - 1)}
            className="p-1 hover:bg-amber-100 rounded"
          >
            <Minus className="w-4 h-4 text-amber-700" />
          </button>

          <span className="w-8 text-center font-semibold text-amber-900">
            {item.quantity}
          </span>

          <button
            onClick={() => onQuantityChange(section, item.id, item.quantity + 1)}
            className="p-1 hover:bg-amber-100 rounded"
          >
            <Plus className="w-4 h-4 text-amber-700" />
          </button>
        </div>

        <button
          onClick={() => onRemove(section, item.id)}
          className="text-red-600 hover:text-red-700 transition-colors"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <ShoppingCart className="w-10 h-10 text-orange-600" />
            <h1 className="text-5xl font-bold text-amber-900">Shopping Cart</h1>
          </div>
          <p className="text-lg text-amber-700 ml-13">
            Review and manage your items from Buy Waste and Marketplace
          </p>
        </div>

        {cartItems.buyWaste.length === 0 && cartItems.marketplace.length === 0 ? (
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <ShoppingCart className="w-16 h-16 text-amber-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-amber-900 mb-2">Your cart is empty</h2>
            <p className="text-amber-700 mb-6">
              Start shopping by exploring our Buy Waste and Marketplace sections
            </p>

            <div className="flex gap-4 justify-center">
              <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition-colors">
                Browse Buy Waste
              </button>

              <button className="px-6 py-3 border-2 border-orange-300 text-orange-700 hover:bg-orange-50 rounded-lg font-semibold transition-colors">
                Browse Marketplace
              </button>
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">

            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-8">

              {/* Buy Waste Section */}
              {cartItems.buyWaste.length > 0 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <Truck className="w-6 h-6 text-orange-600" />
                    </div>

                    <h2 className="text-2xl font-bold text-amber-900">Buy Waste</h2>

                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
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

                  <div className="bg-orange-50 rounded-lg p-4 flex justify-between items-center">
                    <span className="font-semibold text-amber-900">Buy Waste Subtotal:</span>
                    <span className="text-2xl font-bold text-orange-600">
                      ₹{wasteTotal.toLocaleString()}
                    </span>
                  </div>
                </div>
              )}

              {/* Marketplace Section */}
              {cartItems.marketplace.length > 0 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-amber-100 rounded-lg">
                      <Store className="w-6 h-6 text-amber-700" />
                    </div>

                    <h2 className="text-2xl font-bold text-amber-900">Marketplace</h2>

                    <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold">
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

                  <div className="bg-amber-50 rounded-lg p-4 flex justify-between items-center">
                    <span className="font-semibold text-amber-900">Marketplace Subtotal:</span>
                    <span className="text-2xl font-bold text-orange-600">
                      ₹{marketplaceTotal.toLocaleString()}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold text-amber-900 mb-6">Order Summary</h3>

                <div className="space-y-4 mb-6 pb-6 border-b border-amber-200">
                  <div className="flex justify-between text-amber-700">
                    <span>Buy Waste Subtotal</span>
                    <span>₹{wasteTotal.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between text-amber-700">
                    <span>Marketplace Subtotal</span>
                    <span>₹{marketplaceTotal.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between text-amber-700">
                    <span>Shipping</span>
                    <span>₹{(grandTotal > 1000 ? 0 : 100).toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between text-amber-700">
                    <span>Tax (5%)</span>
                    <span>₹{Math.round(grandTotal * 0.05).toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg font-bold text-amber-900">Total</span>
                  <span className="text-3xl font-bold text-orange-600">
                    ₹{Math.round(grandTotal * 1.05 + (grandTotal > 1000 ? 0 : 100)).toLocaleString()}
                  </span>
                </div>

                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 text-lg font-semibold rounded-lg transition-colors mb-3">
                  Proceed to Checkout
                </button>

                <button className="w-full border-2 border-orange-300 text-orange-700 hover:bg-orange-50 py-3 rounded-lg font-semibold transition-colors">
                  Continue Shopping
                </button>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  )
}