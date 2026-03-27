'use client'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
import { Button } from "./ui/button"; // Ensure this component exists in your /ui folder

export default function ProfilePage() {
  const navigate = useNavigate()

  // Static state - No backend calls here
  const [userProfile] = useState({
    name: 'Jaanvi Choudhary',
    email: 'jaanvich1@gmail.com',
    avatar: null, // Set to null to use the fallback "SA" circle
    joinDate: 'March 2024',
    level: 'Gold Member',
    contributions: 42,
    totalWaste: 2340
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Profile Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Profile Avatar Circle */}
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white text-3xl font-bold shadow-inner">
                JC
              </div>

              <div className="text-center md:text-left">
                <h1 className="text-3xl font-bold text-amber-900 mb-1">{userProfile.name}</h1>
                <p className="text-amber-700 mb-2">{userProfile.email}</p>

                <div className="flex flex-wrap justify-center md:justify-start gap-3">
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
              <Button
                onClick={() => navigate('/cart')}
                className="bg-orange-500 hover:bg-orange-600 text-white shadow-md transition-colors"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Cart
              </Button>
              <Button variant="outline" className="border-red-300 text-red-700 hover:bg-red-50">
                Sign Out
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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

        {/* OVERVIEW SECTION */}
        <div className="space-y-8 mb-20">
          <h2 className="text-3xl font-bold text-amber-900 flex items-center gap-2">
             <PieChart className="w-8 h-8" /> Overview
          </h2>

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
                        contrib.status === 'Processed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
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

        {/* IMPACT SECTION */}
        <div className="space-y-8 mb-20">
          <h2 className="text-3xl font-bold text-amber-900 flex items-center gap-2">
            <Target className="w-8 h-8" /> My Impact
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <ImpactCard Icon={Leaf} val="2,340" label="Kg Waste Recycled" color="text-green-600" />
            <ImpactCard Icon={Droplet} val="58.5K" label="Liters Water Saved" color="text-blue-600" />
            <ImpactCard Icon={Zap} val="2,450" label="kg CO₂ Offset" color="text-yellow-600" />
            <ImpactCard Icon={Users} val="8" label="Artisans Supported" color="text-purple-600" />
            <ImpactCard Icon={TrendingUp} val="24.4K" label="Trees Equivalent" color="text-orange-600" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            {/* Material Breakdown */}
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

            {/* Monthly Progress */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-amber-900 mb-6">Monthly Impact</h2>
              <div className="space-y-6">
                {[
                  { month: 'October', reduction: '280 kg', percent: 45 },
                  { month: 'November', reduction: '450 kg', percent: 70 },
                  { month: 'December', reduction: '620 kg', percent: 100 }
                ].map((item) => (
                  <div key={item.month}>
                    <div className="flex justify-between mb-2">
                      <span className="text-amber-900 font-semibold">{item.month}</span>
                      <span className="text-green-600 font-bold">{item.reduction}</span>
                    </div>
                    <div className="h-2 bg-amber-200 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500" style={{ width: `${item.percent}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CERTIFICATES SECTION */}
        <div className="space-y-8 pb-20">
          <h2 className="text-3xl font-bold text-amber-900 flex items-center gap-2">
            <Award className="w-8 h-8" /> Certificates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: '0x1a2b...', date: 'Dec 14, 2024', amount: '45 kg', type: 'Textile Recycling' },
              { id: '0x2c3d...', date: 'Dec 10, 2024', amount: '28 kg', type: 'Metal Recycling' },
              { id: '0x3e4f...', date: 'Dec 8, 2024', amount: '35 kg', type: 'Plastic Recycling' }
            ].map((cert, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-amber-100">
                <div className="flex items-start justify-between mb-4">
                  <Award className="w-8 h-8 text-orange-600" />
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Verified</span>
                </div>
                <h3 className="font-bold text-amber-900 mb-2">{cert.type}</h3>
                <p className="text-sm text-amber-700 mb-4">{cert.date}</p>
                <div className="mb-4 p-3 bg-amber-50 rounded-lg text-center">
                  <p className="text-2xl font-bold text-orange-600">{cert.amount}</p>
                </div>
                <div className="p-3 bg-gray-50 rounded text-[10px] text-gray-500 font-mono break-all border border-gray-100">
                  ID: {cert.id}
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

// Small helper component for Impact cards to keep code clean
function ImpactCard({ Icon, val, label, color }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-amber-50">
      <Icon className={`w-10 h-10 ${color} mx-auto mb-4`} />
      <div className="text-2xl font-bold text-orange-600 mb-1">{val}</div>
      <p className="text-amber-700 text-xs font-medium uppercase tracking-wider">{label}</p>
    </div>
  )
}