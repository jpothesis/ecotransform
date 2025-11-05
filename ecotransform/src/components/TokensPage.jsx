import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Wallet, ArrowUpRight, ArrowDownRight, TrendingUp, History, Gift } from "lucide-react";

const tokenFeatures = [
  {
    icon: Wallet,
    title: "Wallet Balance",
    description: "Check your EcoTokens balance and track your earnings in real-time",
    details: ["Live token balance", "Recent transactions", "Total earned", "Available for withdrawal"],
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: ArrowUpRight,
    title: "Send Tokens",
    description: "Send tokens to other users securely on the blockchain",
    details: ["Instant transfers", "Low fees", "Secure & verified", "Recipient history"],
    gradient: "from-orange-500 to-yellow-500",
  },
  {
    icon: ArrowDownRight,
    title: "Receive Tokens",
    description: "Receive tokens from other users or as rewards from platform activities",
    details: ["Track incoming tokens", "Notifications on receipt", "Verified transactions", "Transaction logs"],
    gradient: "from-yellow-500 to-amber-500",
  },
  {
    icon: TrendingUp,
    title: "Stake Tokens",
    description: "Stake your tokens to earn rewards and boost your sustainability impact",
    details: ["Flexible staking periods", "Reward multiplier", "Early withdrawal options", "Stake history"],
    gradient: "from-amber-600 to-orange-600",
  },
  {
    icon: History,
    title: "Transaction History",
    description: "View all your token transactions securely on the blockchain",
    details: ["Sent & received tokens", "Staking & rewards", "Time-stamped entries", "Exportable logs"],
    gradient: "from-orange-600 to-yellow-600",
  },
  {
    icon: Gift,
    title: "Rewards & Bonuses",
    description: "Earn bonus tokens for sustainable actions and referrals",
    details: ["Referral rewards", "Activity bonuses", "Seasonal campaigns", "Claim & redeem tokens"],
    gradient: "from-yellow-600 to-amber-600",
  },
];

export default function TokensPage() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-64 h-64 bg-gradient-to-r from-amber-200/20 to-orange-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-orange-200/15 to-yellow-200/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-yellow-200/25 to-amber-200/25 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-200/50 backdrop-blur-sm">
            <span className="text-sm font-medium text-amber-800">Blockchain Tokens</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Manage Your{" "}
            <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
              EcoTokens
            </span>
          </h2>
          <p className="text-xl text-amber-800/70 max-w-3xl mx-auto leading-relaxed">
            Track, send, receive, stake, and earn rewards using your EcoTokens—all powered by blockchain transparency and security.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tokenFeatures.map((feature, index) => (
            <Card
              key={index}
              className="group relative bg-white/60 backdrop-blur-sm border border-amber-200/30 hover:bg-white/80 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="space-y-4">
                <div className="relative">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center shadow-lg`}>
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className={`absolute inset-0 w-14 h-14 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-20 blur-xl`} />
                </div>
                <div className="space-y-3">
                  <CardTitle className="text-xl font-bold text-amber-900">{feature.title}</CardTitle>
                  <CardDescription className="text-amber-700/70">{feature.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm text-amber-700/80">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient} mr-3 flex-shrink-0`} />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full rounded-full py-3 px-6 bg-white/40 border border-amber-200/60 text-amber-800 hover:bg-gradient-to-r hover:from-amber-600 hover:to-orange-600 hover:text-white transition-all duration-300">
                  Explore
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
