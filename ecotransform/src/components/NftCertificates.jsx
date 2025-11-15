import { Award, Download, Share2, Eye, GitCommit, Users, Globe } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useMemo } from "react"; // Added useMemo for calculations

// --- Certificate Data (kept the same) ---
const certificates = [
  {
    id: 1,
    title: "Waste Contributor Certified",
    date: "2024-11-15",
    amount: 25, // Changed to number for calculation
    material: "Plastic Waste",
    transactionHash: "0x1a2b3c4d5e6f7g8h9i0j",
    image: "/nft-certificate.jpg",
  },
  {
    id: 2,
    title: "Eco Champion",
    date: "2024-10-20",
    amount: 50, // Changed to number for calculation
    material: "Mixed Recyclables",
    transactionHash: "0xk1l2m3n4o5p6q7r8s9t",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Green Contributor",
    date: "2024-09-10",
    amount: 15, // Changed to number for calculation
    material: "Textile Waste",
    transactionHash: "0xu0v1w2x3y4z5a6b7c",
    image: "/placeholder.svg?height=400&width=600",
  },
];

// --- Helper Components ---

function StatCard({ icon, value, label }) {
  const Icon = icon;
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 text-center border-b-4 border-orange-500 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
      <Icon className="w-8 h-8 mx-auto text-orange-600 mb-3" />
      <div className="text-4xl font-extrabold text-amber-900 mb-1">{value}</div>
      <p className="text-amber-700 font-medium">{label}</p>
    </div>
  );
}

// --- Main Component ---

export default function NftCertificates() {
  const [selectedCertificate, setSelectedCertificate] =
    useState(certificates[0] || null);

  // Dynamic calculation for stats
  const { totalWaste, totalCarbonOffset } = useMemo(() => {
    const waste = certificates.reduce((sum, cert) => sum + cert.amount, 0);
    // Simple mock calculation: 1 kg of waste = 27 kg CO2 offset (for demonstration)
    const carbonOffset = waste * 27; 
    return { totalWaste: waste, totalCarbonOffset: carbonOffset.toLocaleString() };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      <div className="max-w-6xl mx-auto px-6 py-20">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Award className="w-16 h-16 mx-auto text-orange-600 mb-4 animate-bounce-slow" />
          <h1 className="text-5xl font-extrabold text-amber-950 mb-4">
            Proof of Impact (NFTs) 🏆
          </h1>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto">
            Your contributions are permanently recorded on the blockchain. **Each NFT is proof of a real-world eco-friendly action.**
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <StatCard icon={Award} value={certificates.length} label="Certificates Earned" />
          <StatCard icon={GitCommit} value={`${totalWaste} kg`} label="Total Waste Contributed" />
          <StatCard icon={Globe} value={`${totalCarbonOffset} kg`} label="Carbon Offset (Est.)" />
        </div>

        {/* Certificates Grid */}
        <h2 className="text-3xl font-bold text-amber-950 mb-6 border-b-2 border-orange-200 pb-3">
            Your Collection
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {certificates.map((cert) => {
            const isSelected = selectedCertificate && selectedCertificate.id === cert.id;
            const cardClass = `
              bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 cursor-pointer 
              transform hover:scale-[1.03] hover:shadow-2xl 
              ${isSelected ? 'ring-4 ring-orange-500 shadow-2xl' : 'ring-0'}
            `;

            return (
              <div
                key={cert.id}
                className={cardClass}
                onClick={() => setSelectedCertificate(cert)}
              >
                <img
                  src={cert.image || "/placeholder.svg"}
                  alt={cert.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="w-5 h-5 text-orange-600" />
                    <h3 className="text-lg font-bold text-amber-900">
                      {cert.title}
                    </h3>
                  </div>

                  <div className="space-y-2 text-sm text-amber-700 mb-4">
                    <p>
                      <span className="font-semibold">Contribution:</span> {cert.amount} kg
                    </p>
                    <p>
                      <span className="font-semibold">Material:</span>{" "}
                      {cert.material}
                    </p>
                    <p>
                      <span className="font-semibold">Date Minted:</span>{" "}
                      {new Date(cert.date).toLocaleDateString()}
                    </p>
                  </div>

                  <div className="bg-amber-50 p-3 rounded-lg mb-4">
                    <p className="text-xs text-amber-700 break-all font-mono truncate">
                      Hash: {cert.transactionHash}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      className="flex-1 bg-orange-500 hover:bg-orange-600 text-white gap-2"
                      onClick={(e) => {
                          e.stopPropagation(); // Prevent modal closing/reopening
                          setSelectedCertificate(cert);
                      }}
                    >
                      <Eye className="w-4 h-4" />
                      View Details
                    </Button>

                    <Button
                      variant="outline"
                      className="border-amber-200 text-amber-900 hover:bg-amber-50 gap-2"
                    >
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed View Modal (With Transition) */}
        {selectedCertificate && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center p-4 z-50 transition-opacity duration-300"
            onClick={() => setSelectedCertificate(null)}
          >
            <div
              // Added animation classes for scale-up effect
              className="bg-white rounded-xl shadow-2xl max-w-3xl w-full transform scale-95 opacity-0 animate-modal-in"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6 border-b pb-4">
                  <h2 className="text-3xl font-extrabold text-amber-950 flex items-center gap-3">
                    <Award className="w-8 h-8 text-orange-600 fill-orange-100" />
                    {selectedCertificate.title}
                  </h2>
                  <button
                    onClick={() => setSelectedCertificate(null)}
                    className="text-amber-700 hover:text-amber-900 text-2xl font-bold transition-colors ml-4"
                  >
                    ×
                  </button>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    {/* Image Column */}
                    <div>
                        <img
                          src={selectedCertificate.image || "/placeholder.svg"}
                          alt={selectedCertificate.title}
                          className="w-full rounded-lg shadow-lg border-4 border-amber-100"
                        />
                    </div>

                    {/* Details Column */}
                    <div>
                        <div className="space-y-4 mb-6">
                            <DetailItem label="Waste Amount" value={`${selectedCertificate.amount} kg`} color="text-orange-600" />
                            <DetailItem label="Material Type" value={selectedCertificate.material} color="text-amber-800" />
                            <DetailItem label="Mint Date" value={new Date(selectedCertificate.date).toLocaleDateString()} color="text-amber-800" />
                        </div>
                        
                        <div className="bg-amber-50 p-4 rounded-lg mb-6 border border-amber-200">
                            <p className="text-xs font-semibold text-amber-700 mb-2">
                                Blockchain Transaction Hash (Proof)
                            </p>
                            <p className="text-sm text-amber-900 break-all font-mono">
                                {selectedCertificate.transactionHash}
                            </p>
                        </div>
                        
                        <p className="text-sm text-amber-700 italic mb-6">
                            This is a verified NFT certificate on the, serving as **immutable proof** of your sustainable contribution.
                        </p>

                        <div className="flex flex-col gap-3">
                            <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold gap-2">
                                <Download className="w-4 h-4" />
                                Download Certificate
                            </Button>
                            <Button
                                variant="outline"
                                className="w-full border-orange-300 text-orange-700 hover:bg-orange-50 gap-2"
                            >
                                <Share2 className="w-4 h-4" />
                                Share on Social Media
                            </Button>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            {/* Added custom Tailwind keyframes/classes to simulate the animation (requires Tailwind config update) */}
            <style jsx global>{`
                @keyframes modal-in {
                    from {
                        transform: scale(0.9);
                        opacity: 0;
                    }
                    to {
                        transform: scale(1);
                        opacity: 1;
                    }
                }
                .animate-modal-in {
                    animation: modal-in 0.3s ease-out forwards;
                }
                .animate-bounce-slow {
                    animation: bounce 4s infinite;
                }
            `}</style>
          </div>
        )}
      </div>
    </div>
  );
}

// Helper for detail item styling in the modal
const DetailItem = ({ label, value, color }) => (
    <div>
        <p className="text-sm font-semibold text-amber-700">{label}</p>
        <p className={`text-xl font-extrabold ${color}`}>{value}</p>
    </div>
);