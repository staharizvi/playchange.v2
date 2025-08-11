"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  MessageSquare,
  Mail,
  Phone,
  MapPin,
  Search,
  ChevronDown,
  ChevronRight,
  Book,
  Video,
  Users,
  Headphones,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/shared/Navigation"
import Footer from "@/components/shared/Footer"
import EnhancedBackground from "@/components/shared/EnhancedBackground"

const SupportContent = () => {
  const [selectedFAQ, setSelectedFAQ] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("general")

  const supportStats = [
    { label: "Average Response Time", value: "< 2 hours", icon: MessageSquare },
    { label: "Customer Satisfaction", value: "98.5%", icon: Users },
    { label: "Articles in Knowledge Base", value: "150+", icon: Book },
    { label: "Video Tutorials", value: "50+", icon: Video },
  ]

  const contactMethods = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: MessageSquare,
      availability: "24/7",
      color: "from-green-500 to-emerald-500",
      action: "Start Chat",
    },
    {
      title: "Email Support",
      description: "Send us detailed questions and feedback",
      icon: Mail,
      availability: "Response within 2 hours",
      color: "from-blue-500 to-cyan-500",
      action: "Send Email",
    },
    {
      title: "Phone Support",
      description: "Talk directly with our support experts",
      icon: Phone,
      availability: "Mon-Fri, 9AM-6PM EST",
      color: "from-purple-500 to-pink-500",
      action: "Call Now",
    },
    {
      title: "Community Forum",
      description: "Get help from other players and experts",
      icon: Users,
      availability: "Always active",
      color: "from-orange-500 to-red-500",
      action: "Visit Forum",
    },
  ]

  const faqCategories = [
    { id: "general", name: "General", count: 12 },
    { id: "account", name: "Account & Billing", count: 8 },
    { id: "games", name: "Games & Gameplay", count: 15 },
    { id: "nft", name: "NFTs & Trading", count: 10 },
    { id: "technical", name: "Technical Issues", count: 7 },
  ]

  const faqs = {
    general: [
      {
        question: "What is the Mr. Andrew Platform?",
        answer: "The Mr. Andrew Platform is a revolutionary gaming ecosystem that combines traditional gaming with blockchain technology, NFTs, and social impact initiatives. Players can enjoy various games while earning rewards and contributing to meaningful causes.",
      },
      {
        question: "How do I get started?",
        answer: "Getting started is easy! Simply create an account, choose your subscription tier (we offer a 7-day free trial), and start exploring our game library. You can also join our community forums to connect with other players.",
      },
      {
        question: "Is the platform suitable for beginners?",
        answer: "Absolutely! We welcome players of all skill levels. Our platform includes tutorials, guides, and a supportive community to help new players get comfortable with both traditional gaming and blockchain features.",
      },
    ],
    account: [
      {
        question: "How do I change my subscription plan?",
        answer: "You can upgrade or downgrade your subscription plan at any time through your account settings. Changes take effect immediately, and you'll be charged or credited accordingly.",
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept various payment methods including cryptocurrencies (Bitcoin, Ethereum, USDC, USDT), credit cards, and debit cards. All payments are processed securely through encrypted channels.",
      },
      {
        question: "How do I cancel my subscription?",
        answer: "You can cancel your subscription at any time from your account settings. Your access will continue until the end of your current billing period, and no future charges will be applied.",
      },
    ],
    games: [
      {
        question: "What types of games are available?",
        answer: "We offer a diverse library including action games, strategy games, retro arcade games, NFT collection games, and social impact games. New games are added regularly based on community feedback.",
      },
      {
        question: "Can I play games offline?",
        answer: "Most of our games require an internet connection for features like leaderboards, NFT rewards, and community integration. However, some single-player modes may be available offline.",
      },
      {
        question: "How do game rewards work?",
        answer: "Players earn rewards through gameplay achievements, tournament participation, and community engagement. Rewards can include NFTs, cryptocurrency, exclusive items, and platform benefits.",
      },
    ],
    nft: [
      {
        question: "What are NFTs and how do they work on the platform?",
        answer: "NFTs (Non-Fungible Tokens) are unique digital assets that represent ownership of in-game items, achievements, or collectibles. On our platform, NFTs can be earned through gameplay, purchased, or traded with other players.",
      },
      {
        question: "How do I trade NFTs?",
        answer: "You can trade NFTs through our built-in marketplace. Simply navigate to your inventory, select the NFT you want to trade, and choose to list it for sale or trade with other players.",
      },
      {
        question: "Are NFTs transferable between games?",
        answer: "Some NFTs are cross-game compatible, while others are specific to individual games. Check the NFT details to see its compatibility and utility across different games in our ecosystem.",
      },
    ],
    technical: [
      {
        question: "What are the system requirements?",
        answer: "Our platform runs on most modern devices with a web browser. For optimal performance, we recommend Chrome or Firefox browsers, 4GB RAM, and a stable internet connection.",
      },
      {
        question: "I'm experiencing lag or connection issues. What should I do?",
        answer: "First, check your internet connection and try refreshing the page. If issues persist, try clearing your browser cache, disabling browser extensions, or switching to a different browser. Contact support if problems continue.",
      },
      {
        question: "How do I report bugs or technical issues?",
        answer: "You can report bugs through our support chat, email, or community forums. Please include details about your device, browser, and steps to reproduce the issue for faster resolution.",
      },
    ],
  }

  return (
    <div className="py-32 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.h1
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
            SUPPORT CENTER
          </motion.h1>
          <motion.p
            className="text-2xl text-orange-400 font-orbitron font-bold"
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
            WE'RE HERE TO HELP YOU SUCCEED
          </motion.p>
        </motion.div>

        {/* Support Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {supportStats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="bg-gray-800/50 border-gray-700 p-6 backdrop-blur-sm">
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-orange-500/20 border-2 border-orange-500/50"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(255, 111, 0, 0.3)",
                      "0 0 40px rgba(255, 111, 0, 0.5)",
                      "0 0 20px rgba(255, 111, 0, 0.3)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                >
                  <stat.icon className="w-8 h-8 text-orange-500" />
                </motion.div>
                <div className="text-3xl font-black text-orange-400 mb-2 font-orbitron">{stat.value}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Contact Methods */}
        <div className="mb-20">
          <h2 className="text-4xl font-black text-center mb-12 font-exo2 text-white">Contact Our Support Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                whileHover={{ scale: 1.05, y: -10 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-800/50 border-gray-700 p-6 group-hover:border-orange-500 transition-all duration-300 backdrop-blur-sm h-full">
                  <motion.div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-gradient-to-r ${method.color}`}
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(255, 111, 0, 0.3)",
                        "0 0 40px rgba(255, 111, 0, 0.5)",
                        "0 0 20px rgba(255, 111, 0, 0.3)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    <method.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2 text-center font-exo2">{method.title}</h3>
                  <p className="text-gray-400 text-center mb-4">{method.description}</p>
                  <div className="text-center mb-6">
                    <Badge className="bg-orange-500/20 text-orange-400 border border-orange-500/50">
                      {method.availability}
                    </Badge>
                  </div>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold">
                    {method.action}
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-12 font-exo2 text-white">Frequently Asked Questions</h2>
          
          {/* FAQ Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {faqCategories.map((category) => (
              <motion.button
                key={category.id}
                className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-orange-500 text-black"
                    : "bg-gray-800/50 text-gray-400 hover:text-orange-400 border border-gray-700"
                }`}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name} ({category.count})
              </motion.button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs[selectedCategory as keyof typeof faqs]?.map((faq, index) => (
              <motion.div
                key={index}
                className="border border-gray-700 rounded-lg overflow-hidden bg-gray-800/50 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.button
                  className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-700/50 transition-colors"
                  onClick={() => setSelectedFAQ(selectedFAQ === index ? null : index)}
                  whileHover={{ backgroundColor: "rgba(55, 65, 81, 0.5)" }}
                >
                  <h3 className="text-lg font-bold text-white font-exo2">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: selectedFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-orange-400" />
                  </motion.div>
                </motion.button>
                <motion.div
                  initial={false}
                  animate={{
                    height: selectedFAQ === index ? "auto" : 0,
                    opacity: selectedFAQ === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-gray-300 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quick Help Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gray-800/50 border-gray-700 p-8 backdrop-blur-sm max-w-2xl mx-auto">
            <Headphones className="w-16 h-16 mx-auto mb-6 text-orange-400" />
            <h3 className="text-2xl font-bold text-white mb-4 font-exo2">Still Need Help?</h3>
            <p className="text-gray-400 mb-6">
              Can't find what you're looking for? Our support team is standing by to help you with any questions or issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-orange-500 hover:bg-orange-600 text-black font-bold">
                <MessageSquare className="w-4 h-4 mr-2" />
                Start Live Chat
              </Button>
              <Button className="bg-gray-700 hover:bg-gray-600 text-white font-bold">
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <EnhancedBackground />
      <Navigation />
      <div className="pt-24">
        <SupportContent />
      </div>
      <Footer />
    </div>
  )
}