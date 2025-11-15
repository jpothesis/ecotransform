'use client'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom' // Imported from 'react-router-dom'

import {
  TrendingUp,
  Leaf,
  Droplet,
  Zap,
  Users,
  Award,
  ShoppingCart,
  Target,
  PieChart
} from 'lucide-react'
import { Button } from "./ui/button"; // Assuming you use shadcn/ui Button

// NOTE: Since we are using React Router (useNavigate), we no longer need to import CartPage here
// as the router handles rendering it at the '/cart' path.
// The local state simulation (activePage) is also removed.

export default function ProfilePage() {
  const navigate = useNavigate()

  const [userProfile] = useState({
    name: 'Sarah Anderson',
    email: 'sarah@example.com',
    avatar: '/placeholder-user.jpg',
    joinDate: 'March 2024',
    level: 'Gold Member',
    contributions: 42,
    totalWaste: 2340
  })
  
  // Removed: const [activePage, setActivePage] = useState('profile');
  // Removed: if (activePage === 'cart') { ... }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Profile Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white text-3xl font-bold">
                SA
              </div>

              <div>
                <h1 className="text-3xl font-bold text-amber-900 mb-1">{userProfile.name}</h1>
                <p className="text-amber-700 mb-2">{userProfile.email}</p>

                <div className="flex gap-3">
                  <span className="px-4 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
                    {userProfile.level}
                  </span>

                  <span className="px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                    Member since {userProfile.joinDate}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-3">

              {/* Cart Button using React Router Navigation */}
              <Button
                onClick={() => navigate('/cart')} // Corrected and simplified logic

                className="bg-orange-500 hover:bg-orange-600 text-white shadow-md transition-colors"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Cart
              </Button>
              {/* --- END CART BUTTON --- */}

              <Button variant="outline" className="border-red-300 text-red-700 hover:bg-red-50">
                Sign Out
              </Button>
            </div>
          </div>

          {/* Quick Stats (Rest of the Profile Header content is unchanged) */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg p-4 text-center">
              <p className="text-3xl font-bold text-orange-600">{userProfile.contributions}</p>
              <p className="text-amber-700 text-sm">Total Contributions</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg p-4 text-center">
              <p className="text-3xl font-bold text-orange-600">{userProfile.totalWaste} kg</p>
              <p className="text-amber-700 text-sm">Waste Diverted</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg p-4 text-center">
              <p className="text-3xl font-bold text-orange-600">18</p>
              <p className="text-amber-700 text-sm">NFT Certificates</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg p-4 text-center">
              <p className="text-3xl font-bold text-orange-600">2,450 kg</p>
              <p className="text-amber-700 text-sm">CO₂ Offset</p>
            </div>
          </div>
        </div>


        {/* -------------------------------------------
            OVERVIEW SECTION (always visible)
        -------------------------------------------- */}

        {/* OVERVIEW SECTION */}

        <div className="space-y-8 mb-20">
          <h2 className="text-3xl font-bold text-amber-900">📊 Overview</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Recent Contributions */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-amber-900 mb-6">Recent Contributions</h2>

              <div className="space-y-4">
                {[
                  { date: 'Dec 14, 2024', waste: 'Textile Scraps', amount: '45 kg', status: 'Processed' },
                  { date: 'Dec 12, 2024', waste: 'Plastic Bottles', amount: '12 kg', status: 'Processing' },
                  { date: 'Dec 10, 2024', waste: 'Metal Scraps', amount: '28 kg', status: 'Processed' }
                ].map((contrib, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-amber-50 rounded-lg">
                    <div>
                      <p className="font-semibold text-amber-900">{contrib.waste}</p>
                      <p className="text-sm text-amber-600">{contrib.date}</p>
                    </div>

                    <div className="text-right">
                      <p className="font-bold text-orange-600">{contrib.amount}</p>

                      <span className={`text-xs px-2 py-1 rounded ${
                        contrib.status === 'Processed'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                        }`}>
                        {contrib.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-amber-900 mb-6">Achievements</h2>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '🎯', title: 'First Contributor', desc: 'Made first waste contribution' },
                  { icon: '🌱', title: 'Eco Warrior', desc: '100+ kg waste diverted' },
                  { icon: '🏆', title: 'Sustainability Star', desc: '50+ contributions' },
                  { icon: '💚', title: 'Green Guardian', desc: '1000+ kg diverted' }
                ].map((achievement, idx) => (
                  <div key={idx} className="p-4 bg-amber-50 rounded-lg text-center">
                    <p className="text-3xl mb-2">{achievement.icon}</p>
                    <p className="font-semibold text-amber-900 text-sm">{achievement.title}</p>
                    <p className="text-xs text-amber-600">{achievement.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>





        {/* -------------------------------------------
            IMPACT SECTION (always visible)
        -------------------------------------------- */}

        {/* IMPACT SECTION */}

        <div className="space-y-8 mb-20">
          <h2 className="text-3xl font-bold text-amber-900">🎯 My Impact</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <Leaf className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-orange-600 mb-2">2,340</div>
              <p className="text-amber-700">Kg Waste Recycled</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <Droplet className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-orange-600 mb-2">58.5K</div>
              <p className="text-amber-700">Liters Water Saved</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <Zap className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-orange-600 mb-2">2,450</div>
              <p className="text-amber-700">kg CO₂ Offset</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-orange-600 mb-2">8</div>
              <p className="text-amber-700">Artisans Supported</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <TrendingUp className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-orange-600 mb-2">24.4K</div>
              <p className="text-amber-700">Trees Equivalent</p>
            </div>

          </div>

          {/* Waste Breakdown + Monthly Impact */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Waste Breakdown */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-amber-900 mb-6">Waste Diversion by Material</h2>

              <div className="space-y-4">
                {[
                  { material: 'Textile', percentage: 40, color: 'bg-orange-500' },
                  { material: 'Plastic', percentage: 30, color: 'bg-blue-500' },
                  { material: 'Metal', percentage: 20, color: 'bg-gray-500' },
                  { material: 'Glass', percentage: 10, color: 'bg-cyan-500' }
                ].map((item) => (
                  <div key={item.material}>
                    <div className="flex justify-between mb-2">
                      <span className="text-amber-900 font-semibold">{item.material}</span>
                      <span className="text-orange-600 font-bold">{item.percentage}%</span>
                    </div>

                    <div className="h-3 bg-amber-200 rounded-full overflow-hidden">
                      <div className={`h-full ${item.color}`} style={{ width: `${item.percentage}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Monthly Impact */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-amber-900 mb-6">Monthly Impact</h2>

              <div className="space-y-6">
                {[
                  { month: 'October', reduction: '280 kg' },
                  { month: 'November', reduction: '450 kg' },
                  { month: 'December', reduction: '620 kg' }
                ].map((item) => {
                  const percent = (parseInt(item.reduction) / 620) * 100

                  return (
                    <div key={item.month}>
                      <div className="flex justify-between mb-2">
                        <span className="text-amber-900 font-semibold">{item.month}</span>
                        <span className="text-green-600 font-bold">{item.reduction}</span>
                      </div>

                      <div className="h-2 bg-amber-200 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500" style={{ width: `${percent}%` }} />
                    </div>
                  </div>
                  )
                })}
              </div>
            </div>

          </div>

        </div>




        {/* -------------------------------------------
            NFT CERTIFICATES SECTION (always visible)
        -------------------------------------------- */}
        <div className="space-y-8 pb-20">
          <h2 className="text-3xl font-bold text-amber-900">🏅 Certificates</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              { id: '0x1a2b...', date: 'Dec 14, 2024', amount: '45 kg', type: 'Textile Recycling', status: 'Verified' },
              { id: '0x2c3d...', date: 'Dec 10, 2024', amount: '28 kg', type: 'Metal Recycling', status: 'Verified' },
              { id: '0x3e4f...', date: 'Dec 8, 2024', amount: '35 kg', type: 'Plastic Recycling', status: 'Verified' },
              { id: '0x4f5g...', date: 'Dec 5, 2024', amount: '22 kg', type: 'Glass Recycling', status: 'Verified' },
              { id: '0x5g6h...', date: 'Dec 1, 2024', amount: '38 kg', type: 'Mixed Materials', status: 'Verified' },
              { id: '0x6h7i...', date: 'Nov 28, 2024', amount: '41 kg', type: 'Textile Recycling', status: 'Verified' }
            ].map((cert, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">

                <div className="flex items-start justify-between mb-4">
                  <Award className="w-8 h-8 text-orange-600" />

                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                    {cert.status}
                  </span>
                </div>

                <h3 className="font-bold text-amber-900 mb-2">{cert.type}</h3>
                <p className="text-sm text-amber-700 mb-4">{cert.date}</p>

                <div className="mb-4 p-3 bg-amber-50 rounded-lg">
                  <p className="text-2xl font-bold text-orange-600">{cert.amount}</p>
                </div>

                <div className="p-3 bg-gray-100 rounded text-xs text-gray-600 font-mono break-all">
                  {cert.id}
                </div>

                <Button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white">
                  View Certificate
                </Button>

              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  )
}