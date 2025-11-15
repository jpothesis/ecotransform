import { TrendingUp, Leaf, Droplet, Zap, Users } from 'lucide-react';

export default function ImpactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-amber-900 mb-4">
            Our Environmental Impact
          </h1>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Together, we're creating a sustainable future. Track the real environmental
            impact of every waste contribution.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <Leaf className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-orange-600 mb-2">12,450</div>
            <p className="text-amber-700">Kg Waste Recycled</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <Droplet className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-orange-600 mb-2">2.3M</div>
            <p className="text-amber-700">Liters Water Saved</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <Zap className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-orange-600 mb-2">15.2K</div>
            <p className="text-amber-700">kg CO₂ Offset</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-orange-600 mb-2">4,250</div>
            <p className="text-amber-700">Active Contributors</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <TrendingUp className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-orange-600 mb-2">892</div>
            <p className="text-amber-700">Artisans Supported</p>
          </div>
        </div>

        {/* Breakdown Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Waste Diversion */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-amber-900 mb-6">
              Waste Diversion by Material
            </h2>

            <div className="space-y-4">
              {[
                { material: 'Plastic', percentage: 35, color: 'bg-blue-500' },
                { material: 'Textile', percentage: 25, color: 'bg-orange-500' },
                { material: 'Metal', percentage: 20, color: 'bg-gray-500' },
                { material: 'Glass', percentage: 15, color: 'bg-cyan-500' },
                { material: 'Other', percentage: 5, color: 'bg-amber-500' },
              ].map((item) => (
                <div key={item.material}>
                  <div className="flex justify-between mb-2">
                    <span className="text-amber-900 font-semibold">
                      {item.material}
                    </span>
                    <span className="text-orange-600 font-bold">
                      {item.percentage}%
                    </span>
                  </div>

                  <div className="h-3 bg-amber-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.color}`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carbon Timeline */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-amber-900 mb-6">
              Carbon Impact Timeline
            </h2>

            <div className="space-y-6">
              {[
                { month: 'January', reduction: '850 kg' },
                { month: 'February', reduction: '1,200 kg' },
                { month: 'March', reduction: '1,850 kg' },
                { month: 'April', reduction: '2,450 kg' },
                { month: 'May', reduction: '3,100 kg' },
                { month: 'June', reduction: '3,750 kg' },
              ].map((item) => (
                <div key={item.month}>
                  <div className="flex justify-between mb-2">
                    <span className="text-amber-900 font-semibold">
                      {item.month}
                    </span>
                    <span className="text-green-600 font-bold">
                      {item.reduction}
                    </span>
                  </div>

                  <div className="h-2 bg-amber-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-green-500"
                      style={{
                        width: `${
                          (parseInt(item.reduction) / 3750) * 100
                        }%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-xl shadow-lg p-12 text-center">
          <h2 className="text-3xl font-bold text-amber-900 mb-8">
            Key Environmental Achievements
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-5xl font-bold text-orange-600 mb-3">
                12.4K
              </div>
              <p className="text-amber-700 mb-4">
                Trees Equivalent CO₂ Offset
              </p>
              <p className="text-sm text-amber-600">
                Equal to planting 12,400 trees annually
              </p>
            </div>

            <div>
              <div className="text-5xl font-bold text-orange-600 mb-3">
                23M
              </div>
              <p className="text-amber-700 mb-4">
                Gallons of Water Conserved
              </p>
              <p className="text-sm text-amber-600">
                Enough water for 1,200 people yearly
              </p>
            </div>

            <div>
              <div className="text-5xl font-bold text-orange-600 mb-3">
                892
              </div>
              <p className="text-amber-700 mb-4">
                Livelihoods Supported
              </p>
              <p className="text-sm text-amber-600">
                Artisans earning sustainable income
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
