'use client'

import { useState } from 'react'
import { useNavigate } from "react-router-dom";        // <-- IMPORTANT
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
import { Button } from "./ui/button"

export default function ProfilePage() {

  const navigate = useNavigate();   // <-- FINALLY HERE

  const [userProfile] = useState({
    name: 'Sarah Anderson',
    email: 'sarah@example.com',
    avatar: '/placeholder-user.jpg',
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
              
              {/* CART BUTTON (now working) */}
              <Button 
                onClick={() => navigate('/cart')}      // <-- REPLACED
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

        {/* REST OF THE PAGE — unchanged */}
        {/* Overview, Impact, Certificates */}
        {/* (skipped here to keep answer short, but your original code remains same) */}

      </div>
    </div>
  )
}
