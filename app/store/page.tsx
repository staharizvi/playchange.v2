"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Check,
  Star,
  Shield,
  Coins,
  CreditCard,
  Wallet,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Navigation from "@/components/shared/Navigation"
import Footer from "@/components/shared/Footer"
import EnhancedBackground from "@/components/shared/EnhancedBackground"

// SubscriptionTiers Component
const SubscriptionTiers = () => {
  const [selectedTier, setSelectedTier] = useState(1)

  const tiers = [
    {
      name: "Free Trial",
      price: "Free",
      duration: "7 Days",
      description: "Experience PlayChange with limited access",
      features: ["Access to 3 games", "Basic community features", "Limited NFT rewards", "Standard support"],
      color: "from-gray-600 to-gray-800",
      popular: false,
    },
    {
      name: "Gamer",
      price: "$9.99",
      duration: "per month",
      description: "Perfect for casual gamers",
      features: [
        "Access to all games",
        "Full community access",
        "NFT rewards & trading",
        "Priority support",
        "Monthly exclusive drops",
      ],
      color: "from-orange-500 to-orange-600",
      popular: true,
    },
    {
      name: "Pro Player",
      price: "$19.99",
      duration: "per month",
      description: "For serious competitive gamers",
      features: [
        "Everything in Gamer",
        "Early access to new games",
        "Exclusive tournaments",
        "Advanced analytics",
        "Custom profile themes",
        "VIP community access",
      ],
      color: "from-purple-500 to-purple-600",
      popular: false,
    },
    {
      name: "Champion",
      price: "$39.99",
      duration: "per month",
      description: "Ultimate gaming experience",
      features: [
        "Everything in Pro Player",
        "Beta testing access",
        "Direct developer contact",
        "Exclusive NFT collections",
        "Personal gaming coach",
        "Revenue sharing program",
        "Custom game requests",
      ],
      color: "from-yellow-500 to-yellow-600",
      popular: false,
    },
  ]

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-black to-gray-900 relative">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-7xl md:text-9xl font-black mb-6 font-exo2"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{
              background: "linear-gradient(90deg, #ffffff, #ff6f00, #ffffff, #ff6f00, #ffffff)",
              backgroundSize: "300% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            CHOOSE YOUR PLAN
          </motion.h2>
          <motion.p
            className="text-2xl text-orange-400 font-orbitron font-bold mb-8"
            animate={{
              textShadow: [
                "0 0 10px rgba(255, 111, 0, 0.5)",
                "0 0 30px rgba(255, 111, 0, 0.8)",
                "0 0 10px rgba(255, 111, 0, 0.5)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
            }}
          >
            START WITH 7-DAY FREE TRIAL
          </motion.p>

          {/* Free Trial Highlight */}
          <motion.div
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-black px-8 py-4 rounded-full inline-block font-bold text-lg mb-12"
            animate={{
              boxShadow: [
                "0 0 20px rgba(255, 111, 0, 0.5)",
                "0 0 40px rgba(255, 111, 0, 0.8)",
                "0 0 20px rgba(255, 111, 0, 0.5)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
            }}
          >
            🎮 LIMITED TIME: Free Access to All Games for First 7 Days
          </motion.div>
        </motion.div>

        {/* Subscription Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              className={`relative cursor-pointer ${tier.popular ? "scale-105" : ""}`}
              onClick={() => setSelectedTier(index)}
              whileHover={{ scale: tier.popular ? 1.08 : 1.05, y: -10 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <motion.div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-black px-6 py-2 rounded-full font-bold text-sm z-10"
                  animate={{
                    boxShadow: [
                      "0 0 10px rgba(255, 111, 0, 0.5)",
                      "0 0 20px rgba(255, 111, 0, 0.8)",
                      "0 0 10px rgba(255, 111, 0, 0.5)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                >
                  MOST POPULAR
                </motion.div>
              )}

              <Card
                className={`bg-gray-800/50 border-2 ${
                  selectedTier === index ? "border-orange-500" : "border-gray-700"
                } overflow-hidden transition-all duration-500 backdrop-blur-sm h-full`}
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${tier.color} p-6 text-center`}>
                  <h3 className="text-2xl font-black text-white mb-2 font-exo2">{tier.name}</h3>
                  <div className="text-4xl font-black text-white mb-1">{tier.price}</div>
                  <div className="text-white/80">{tier.duration}</div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-300 mb-6 text-center font-exo2">{tier.description}</p>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                      >
                        <Check className="w-5 h-5 text-orange-500 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full py-3 font-bold ${
                      tier.popular
                        ? "bg-orange-500 hover:bg-orange-600 text-black"
                        : "bg-gray-700 hover:bg-gray-600 text-white"
                    }`}
                  >
                    {tier.name === "Free Trial" ? "Start Free Trial" : "Select Plan"}
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// PaymentIntegration Component
const PaymentIntegration = () => {
  const [selectedPayment, setSelectedPayment] = useState("crypto")

  const paymentMethods = [
    {
      id: "crypto",
      name: "Cryptocurrency",
      icon: Coins,
      description: "Pay with Bitcoin, Ethereum, or other cryptocurrencies",
      features: ["On-chain & Off-chain", "Lower fees", "Instant transactions", "Rewards bonus"],
      color: "from-orange-500 to-yellow-500",
    },
    {
      id: "credit",
      name: "Credit Card",
      icon: CreditCard,
      description: "Traditional payment with Visa, Mastercard, or Amex",
      features: ["Instant processing", "Buyer protection", "Monthly billing", "Auto-renewal"],
      color: "from-blue-500 to-purple-500",
    },
    {
      id: "debit",
      name: "Debit Card",
      icon: Wallet,
      description: "Direct payment from your bank account",
      features: ["No credit check", "Immediate deduction", "Bank security", "Transaction history"],
      color: "from-green-500 to-teal-500",
    },
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black relative">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-black mb-4 font-exo2"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{
              background: "linear-gradient(90deg, #ffffff, #ff6f00, #ffffff)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            SECURE PAYMENT
          </motion.h2>
          <p className="text-xl text-orange-400 font-orbitron font-bold">CHOOSE YOUR PREFERRED METHOD</p>
        </motion.div>

        {/* Payment Method Selection */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {paymentMethods.map((method) => (
            <motion.div
              key={method.id}
              className={`cursor-pointer ${selectedPayment === method.id ? "ring-2 ring-orange-500" : ""}`}
              onClick={() => setSelectedPayment(method.id)}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="bg-gray-800/50 border-gray-700 hover:border-orange-500 transition-all duration-300 backdrop-blur-sm">
                <div className="p-6 text-center">
                  <motion.div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-gradient-to-r ${method.color}`}
                    animate={{
                      boxShadow:
                        selectedPayment === method.id
                          ? [
                              "0 0 20px rgba(255, 111, 0, 0.5)",
                              "0 0 40px rgba(255, 111, 0, 0.8)",
                              "0 0 20px rgba(255, 111, 0, 0.5)",
                            ]
                          : "none",
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    <method.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-white mb-2 font-exo2">{method.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{method.description}</p>

                  <div className="space-y-2">
                    {method.features.map((feature, index) => (
                      <div key={index} className="flex items-center justify-center space-x-2">
                        <Check className="w-4 h-4 text-orange-500" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Payment Form */}
        <motion.div
          className="bg-gray-800/50 rounded-3xl p-8 backdrop-blur-sm border border-gray-700"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-white font-exo2">Payment Details</h3>
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-green-500" />
              <span className="text-green-500 font-bold">Secure & Encrypted</span>
            </div>
          </div>

          {selectedPayment === "crypto" && (
            <div className="space-y-6">
              <div>
                <label className="block text-orange-500 font-bold mb-2">Select Cryptocurrency</label>
                <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-orange-500 focus:outline-none">
                  <option>Bitcoin (BTC)</option>
                  <option>Ethereum (ETH)</option>
                  <option>USDC</option>
                  <option>USDT</option>
                </select>
              </div>
              <div>
                <label className="block text-orange-500 font-bold mb-2">Wallet Address</label>
                <input
                  type="text"
                  placeholder="Enter your wallet address"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none"
                />
              </div>
            </div>
          )}

          {(selectedPayment === "credit" || selectedPayment === "debit") && (
            <div className="space-y-6">
              <div>
                <label className="block text-orange-500 font-bold mb-2">Card Number</label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-orange-500 font-bold mb-2">Expiry Date</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-orange-500 font-bold mb-2">CVV</label>
                  <input
                    type="text"
                    placeholder="123"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-orange-500 font-bold mb-2">Cardholder Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none"
                />
              </div>
            </div>
          )}

          <motion.div
            className="mt-8 text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-12 py-4 text-lg">
              Complete Payment
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default function StorePage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <EnhancedBackground />
      <Navigation />
      <div className="pt-24">
        <SubscriptionTiers />
        <PaymentIntegration />
      </div>
      <Footer />
    </div>
  )
}