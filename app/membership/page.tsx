"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Check,
  X,
  Crown,
  Star,
  Zap,
  Shield,
  Trophy,
  Users,
  Play,
  Heart,
  Gift,
  MessageSquare,
  BarChart3,
  Calendar,
  Headphones,
  Sparkles,
  Target,
  Award,
  Gamepad2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Navigation from "@/components/shared/Navigation"
import Footer from "@/components/shared/Footer"
import EnhancedBackground from "@/components/shared/EnhancedBackground"

const MembershipPage = () => {
  const [selectedPlan, setSelectedPlan] = useState("gamer")
  const [billingCycle, setBillingCycle] = useState("monthly")

  const plans = [
    {
      id: "free",
      name: "Free/Freemium",
      price: { monthly: 0, yearly: 0 },
      description: "Profile + record tracking + limited premium content samples",
      badge: "Get Started",
      color: "from-gray-600 to-gray-800",
      popular: false,
      features: {
        profile: true,
        recordTracking: true,
        premiumSamples: true,
        communityViewing: true,
        playMotionAds: true,
        gameLibrary: false,
        adFreeStreaming: false,
        tournaments: false,
        analytics: false,
        prioritySupport: false,
        earlyAccess: false,
        betaTesting: false,
        personalCoach: false,
        revenueSharing: false,
        customContent: false,
        vipEvents: false
      }
    },
    {
      id: "gamer",
      name: "Gamer",
      price: { monthly: 7.59, yearly: 75.90 },
      description: "Perfect for casual gamers",
      badge: "Most Popular",
      color: "from-orange-500 to-orange-600",
      popular: true,
      features: {
        profile: true,
        recordTracking: true,
        premiumSamples: true,
        communityViewing: true,
        playMotionAds: true,
        gameLibrary: true,
        adFreeStreaming: false,
        tournaments: "basic",
        analytics: false,
        prioritySupport: false,
        earlyAccess: false,
        betaTesting: false,
        personalCoach: false,
        revenueSharing: false,
        customContent: false,
        vipEvents: false
      }
    },
    {
      id: "pro",
      name: "Pro Player",
      price: { monthly: 24.59, yearly: 245.90 },
      description: "For serious competitive gamers",
      badge: "Pro Level",
      color: "from-purple-500 to-purple-600",
      popular: false,
      features: {
        profile: true,
        recordTracking: true,
        premiumSamples: true,
        communityViewing: true,
        playMotionAds: false,
        gameLibrary: true,
        adFreeStreaming: true,
        tournaments: "priority",
        analytics: true,
        prioritySupport: true,
        earlyAccess: true,
        betaTesting: false,
        personalCoach: false,
        revenueSharing: false,
        customContent: false,
        vipEvents: false
      }
    },
    {
      id: "champion",
      name: "Champion",
      price: { monthly: 45.95, yearly: 459.50 },
      description: "Ultimate gaming experience",
      badge: "Elite",
      color: "from-yellow-500 to-yellow-600",
      popular: false,
      features: {
        profile: true,
        recordTracking: true,
        premiumSamples: true,
        communityViewing: true,
        playMotionAds: false,
        gameLibrary: true,
        adFreeStreaming: true,
        tournaments: "exclusive",
        analytics: true,
        prioritySupport: true,
        earlyAccess: true,
        betaTesting: true,
        personalCoach: true,
        revenueSharing: true,
        customContent: true,
        vipEvents: true
      }
    }
  ]

  const featureDetails = [
    {
      key: "profile",
      name: "Profile & Customization",
      icon: Users,
      description: "Create and customize your gaming profile"
    },
    {
      key: "recordTracking",
      name: "Performance Tracking",
      icon: BarChart3,
      description: "Track your gaming performance and records"
    },
    {
      key: "premiumSamples",
      name: "Premium Content Samples",
      icon: Star,
      description: "Access to limited premium content previews"
    },
    {
      key: "communityViewing",
      name: "Community Access",
      icon: MessageSquare,
      description: "View and participate in community discussions"
    },
    {
      key: "playMotionAds",
      name: "Play Motion (with ads)",
      icon: Play,
      description: "Access to Play Motion streaming with advertisements"
    },
    {
      key: "gameLibrary",
      name: "Full Game Library",
      icon: Gamepad2,
      description: "Access to complete game collection"
    },
    {
      key: "adFreeStreaming",
      name: "Ad-Free Play Motion",
      icon: Zap,
      description: "Enjoy Play Motion without advertisements"
    },
    {
      key: "tournaments",
      name: "Tournament Access",
      icon: Trophy,
      description: "Participate in gaming tournaments"
    },
    {
      key: "analytics",
      name: "Advanced Analytics",
      icon: Target,
      description: "Detailed performance analytics and insights"
    },
    {
      key: "prioritySupport",
      name: "Priority Support",
      icon: Headphones,
      description: "Fast-track customer support"
    },
    {
      key: "earlyAccess",
      name: "Early Access",
      icon: Calendar,
      description: "Get early access to new games and features"
    },
    {
      key: "betaTesting",
      name: "Beta Testing",
      icon: Shield,
      description: "Participate in beta testing programs"
    },
    {
      key: "personalCoach",
      name: "Personal Gaming Coach",
      icon: Award,
      description: "One-on-one coaching sessions"
    },
    {
      key: "revenueSharing",
      name: "Revenue Sharing",
      icon: Gift,
      description: "Earn from revenue sharing programs"
    },
    {
      key: "customContent",
      name: "Custom Content Requests",
      icon: Sparkles,
      description: "Request custom content and features"
    },
    {
      key: "vipEvents",
      name: "VIP Events",
      icon: Crown,
      description: "Exclusive access to VIP gaming events"
    }
  ]

  const renderFeatureValue = (plan, featureKey) => {
    const value = plan.features[featureKey]
    
    if (value === true) {
      return <Check className="w-5 h-5 text-green-500" />
    } else if (value === false) {
      return <X className="w-5 h-5 text-gray-400" />
    } else if (typeof value === "string") {
      return (
        <Badge className={`text-xs ${
          value === "basic" ? "bg-blue-500 text-white" :
          value === "priority" ? "bg-purple-500 text-white" :
          value === "exclusive" ? "bg-yellow-500 text-black" :
          "bg-gray-500 text-white"
        }`}>
          {value}
        </Badge>
      )
    }
    return <X className="w-5 h-5 text-gray-400" />
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <EnhancedBackground />
      <Navigation />
      <div className="pt-24">
        {/* Hero Section */}
        <section className="py-20 px-6 text-center">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <h1 className="text-6xl md:text-8xl font-black mb-6 font-exo2 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
                LEVEL UP YOUR GAME
              </h1>
              <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan to unleash your gaming potential. From casual gaming to professional esports.
              </p>
            </motion.div>

            {/* Billing Toggle */}
            <motion.div 
              className="flex items-center justify-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-gray-800/50 rounded-full p-2 backdrop-blur-sm">
                <button
                  onClick={() => setBillingCycle("monthly")}
                  className={`px-6 py-3 rounded-full font-bold transition-all ${
                    billingCycle === "monthly" ? "bg-orange-500 text-black" : "text-gray-400"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle("yearly")}
                  className={`px-6 py-3 rounded-full font-bold transition-all ${
                    billingCycle === "yearly" ? "bg-orange-500 text-black" : "text-gray-400"
                  }`}
                >
                  Yearly <Badge className="bg-green-500 text-white ml-2">Save 20%</Badge>
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-20">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.id}
                  className={`relative cursor-pointer ${plan.popular ? "scale-105 z-10" : ""}`}
                  onClick={() => setSelectedPlan(plan.id)}
                  whileHover={{ scale: plan.popular ? 1.08 : 1.05, y: -10 }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Plan Badge */}
                  <motion.div
                    className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 rounded-full font-bold text-sm z-10 ${
                      plan.popular 
                        ? "bg-orange-500 text-black" 
                        : plan.name === "Champion"
                          ? "bg-yellow-500 text-black"
                          : plan.name === "Pro Player"
                            ? "bg-purple-500 text-white"
                            : "bg-gray-600 text-white"
                    }`}
                    animate={plan.popular ? {
                      boxShadow: [
                        "0 0 10px rgba(255, 111, 0, 0.5)",
                        "0 0 20px rgba(255, 111, 0, 0.8)",
                        "0 0 10px rgba(255, 111, 0, 0.5)",
                      ],
                    } : {}}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    {plan.badge}
                  </motion.div>

                  <Card className={`bg-gray-800/50 border-2 ${
                    selectedPlan === plan.id ? "border-orange-500" : "border-gray-700"
                  } overflow-hidden transition-all duration-500 backdrop-blur-sm h-full`}>
                    {/* Header */}
                    <div className={`bg-gradient-to-r ${plan.color} p-6 text-center`}>
                      <h3 className="text-2xl font-black text-white mb-2 font-exo2">{plan.name}</h3>
                      <div className="text-4xl font-black text-white mb-1">
                        ${billingCycle === "monthly" ? plan.price.monthly : (plan.price.yearly / 12).toFixed(2)}
                      </div>
                      <div className="text-white/80 text-sm">
                        {billingCycle === "monthly" ? "per month" : "per month (billed yearly)"}
                      </div>
                      {billingCycle === "yearly" && plan.price.yearly > 0 && (
                        <Badge className="bg-white/20 text-white mt-2">
                          ${plan.price.yearly}/year
                        </Badge>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-gray-400 text-center mb-6">{plan.description}</p>
                      
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          className={`w-full ${
                            plan.popular
                              ? "bg-orange-500 hover:bg-orange-600 text-black"
                              : plan.name === "Champion"
                                ? "bg-yellow-500 hover:bg-yellow-600 text-black"
                                : plan.name === "Pro Player"
                                  ? "bg-purple-500 hover:bg-purple-600 text-white"
                                  : "bg-gray-700 hover:bg-gray-600 text-white"
                          } font-bold py-4 text-lg rounded-full transition-all duration-300`}
                        >
                          {plan.name === "Free/Freemium" ? "GET STARTED FREE" : 
                           plan.name === "Champion" ? "GO CHAMPION" :
                           "UPGRADE NOW"}
                        </Button>
                      </motion.div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Comprehensive Comparison Chart */}
        <section className="py-20 px-6 bg-gray-900/20">
          <div className="container mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-black text-white mb-6 font-exo2">Feature Comparison</h2>
              <p className="text-xl text-gray-400">Compare all features across our membership tiers</p>
            </motion.div>

            <div className="overflow-x-auto">
              <table className="w-full max-w-6xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-800 to-gray-900">
                    <th className="text-left p-6 text-white font-bold">Features</th>
                    {plans.map((plan) => (
                      <th key={plan.id} className="text-center p-6 text-white font-bold min-w-32">
                        <div className={`inline-block px-3 py-1 rounded-full text-sm ${
                          plan.popular ? "bg-orange-500 text-black" : "bg-gray-700"
                        }`}>
                          {plan.name}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {featureDetails.map((feature, index) => (
                    <motion.tr 
                      key={feature.key}
                      className="border-b border-gray-700/50 hover:bg-gray-700/20 transition-colors"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <td className="p-4">
                        <div className="flex items-center space-x-3">
                          <feature.icon className="w-5 h-5 text-orange-500" />
                          <div>
                            <div className="text-white font-semibold">{feature.name}</div>
                            <div className="text-gray-400 text-sm">{feature.description}</div>
                          </div>
                        </div>
                      </td>
                      {plans.map((plan) => (
                        <td key={plan.id} className="p-4 text-center">
                          {renderFeatureValue(plan, feature.key)}
                        </td>
                      ))}
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Pre-Launch Hype Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <motion.div
              className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/30 rounded-3xl p-12 text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="w-20 h-20 mx-auto mb-6"
              >
                <Crown className="w-20 h-20 text-yellow-500" />
              </motion.div>
              
              <h2 className="text-4xl font-black text-white mb-6 font-exo2">Pre-Launch Special</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the revolution! Get exclusive early access to Playchange with special launch pricing. 
                Limited time offer for our founding members.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Trophy className="w-12 h-12 text-orange-500 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-white mb-2">Exclusive Access</h3>
                  <p className="text-gray-400">Be among the first to experience next-gen gaming</p>
                </div>
                <div className="text-center">
                  <Gift className="w-12 h-12 text-green-500 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-white mb-2">Launch Bonuses</h3>
                  <p className="text-gray-400">Special rewards and exclusive content for early members</p>
                </div>
                <div className="text-center">
                  <Star className="w-12 h-12 text-purple-500 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-white mb-2">Founder Status</h3>
                  <p className="text-gray-400">Permanent founder badge and special privileges</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black font-bold px-8 py-4 text-lg rounded-full">
                  <Crown className="w-5 h-5 mr-2" />
                  Join Pre-Launch
                </Button>
                <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black px-8 py-4 text-lg rounded-full">
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default MembershipPage