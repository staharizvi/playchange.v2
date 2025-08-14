"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ShoppingCart,
  Eye,
  Heart,
  Share2,
  Filter,
  Search,
  Wallet,
  Coins,
  TrendingUp,
  Clock,
  Star,
  Zap,
  Award,
  Play,
  Download,
  Tag,
  Users,
  Activity,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  Upload,
  Image as ImageIcon,
  Video,
  Gamepad2,
  Trophy,
  Flame,
  Crown,
  Gem,
  Sparkles,
  ChevronDown,
  Grid3X3,
  List,
  SortAsc,
  SortDesc,
  Calendar,
  BarChart3,
  LineChart,
  PieChart,
  Wallet2,
  CreditCard,
  Bitcoin,
  Banknote,
  CheckCircle,
  AlertTriangle,
  Info,
  X,
  ArrowRight,
  ExternalLink,
  Copy,
  RefreshCw
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Navigation from "@/components/shared/Navigation"
import Footer from "@/components/shared/Footer"
import EnhancedBackground from "@/components/shared/EnhancedBackground"
import UpgradePrompt from "@/components/shared/UpgradePrompt"
import SocialSharing from "@/components/shared/SocialSharing"
import SponsorSlot from "@/components/shared/SponsorSlot"
import AIVirtualAssistant from "@/components/shared/AIVirtualAssistant"
import PaymentGateways from "@/components/shared/PaymentGateways"
import Gamification from "@/components/shared/Gamification"
import BlockchainIntegration from "@/components/shared/BlockchainIntegration"
import PlayMotionPlayer from "@/components/shared/PlayMotionPlayer"

const NFTMarketplace = () => {
  const [activeTab, setActiveTab] = useState("marketplace")
  const [viewMode, setViewMode] = useState("grid")
  const [sortBy, setSortBy] = useState("newest")
  const [filterCategory, setFilterCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedNFT, setSelectedNFT] = useState(null)
  const [showWallet, setShowWallet] = useState(false)
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [showPurchaseModal, setShowPurchaseModal] = useState(false)

  const marketplaceStats = [
    { label: "Total Volume", value: "2.4M SOL", icon: DollarSign, change: "+12.5%", color: "text-green-500" },
    { label: "Active Listings", value: "15.7K", icon: Tag, change: "+8.2%", color: "text-blue-500" },
    { label: "Floor Price", value: "0.05 SOL", icon: TrendingUp, change: "-3.1%", color: "text-red-500" },
    { label: "Instant Sales", value: "89.2K", icon: Activity, change: "+15.8%", color: "text-orange-500" },
  ]

  const nftListings = [
    {
      id: 1,
      title: "Epic CryptoBoxers Knockout",
      description: "Legendary knockout combo that won the championship",
      creator: "ProGamer_Elite",
      owner: "NFTCollector_99",
      game: "CryptoBoxers",
      price: "12.5",
      currency: "SOL",
      usdPrice: "1,250",
      thumbnail: "/placeholder.svg?height=300&width=300&text=NFT+1",
      videoUrl: "/placeholder.mp4",
      rarity: "Legendary",
      views: "45.2K",
      likes: "3.8K",
      duration: "0:47",
      type: "Game Clip",
      category: "PvP",
      tags: ["Epic", "Championship", "Knockout"],
      stats: { power: 95, rarity: 98, popularity: 89 },
      listingType: "fixed",
      timeLeft: null,
      lastSale: "11.8 SOL",
      priceHistory: [1.8, 2.1, 2.5, 2.3, 2.5],
      created: "2024-01-15",
      listed: "2024-01-20"
    },
    {
      id: 2,
      title: "Token Quest Speedrun WR",
      description: "World record speedrun clip - unbeatable time",
      creator: "SpeedRunner_X",
      owner: "GameCollector",
      game: "Token Quest",
      price: "9.2",
      currency: "SOL", 
      usdPrice: "920",
      thumbnail: "/placeholder.svg?height=300&width=300&text=NFT+2",
      videoUrl: "/placeholder.mp4",
      rarity: "Epic",
      views: "28.7K",
      likes: "2.1K",
      duration: "1:23",
      type: "Game Clip",
      category: "Speedrun",
      tags: ["World Record", "Speedrun", "Skill"],
      stats: { power: 88, rarity: 85, popularity: 92 },
      listingType: "fixed",
      timeLeft: null,
      lastSale: "1.5 ETH",
      priceHistory: [1.2, 1.5, 1.6, 1.8],
      created: "2024-01-10",
      listed: "2024-01-18"
    },
    {
      id: 3,
      title: "Rare Trophy Unlock Moment",
      description: "First player to unlock the Crypto Crown trophy",
      creator: "TrophyHunter",
      owner: "RareFinder",
      game: "Trophy Quest",
      price: "0.95",
      currency: "ETH",
      usdPrice: "1,615",
      thumbnail: "/placeholder.svg?height=300&width=300&text=NFT+3",
      videoUrl: "/placeholder.mp4",
      rarity: "Rare",
      views: "19.4K",
      likes: "1.7K",
      duration: "0:35",
      type: "Achievement",
      category: "Trophy",
      tags: ["First", "Trophy", "Achievement"],
      stats: { power: 75, rarity: 78, popularity: 85 },
      listingType: "fixed",
      timeLeft: null,
      lastSale: "0.8 ETH",
      priceHistory: [0.6, 0.7, 0.8, 0.9, 0.95],
      created: "2024-01-12",
      listed: "2024-01-19"
    },
    {
      id: 4,
      title: "Community Event Highlight",
      description: "Epic moment from PlayChange community tournament",
      creator: "CommunityHub",
      owner: "EventLover",
      game: "Various",
      price: "0.65",
      currency: "ETH",
      usdPrice: "1,105",
      thumbnail: "/placeholder.svg?height=300&width=300&text=NFT+4",
      videoUrl: "/placeholder.mp4",
      rarity: "Common",
      views: "12.8K",
      likes: "950",
      duration: "1:12",
      type: "Event",
      category: "Community",
      tags: ["Community", "Tournament", "Social"],
      stats: { power: 65, rarity: 45, popularity: 78 },
      listingType: "fixed",
      timeLeft: null,
      lastSale: "0.5 ETH",
      priceHistory: [0.4, 0.5, 0.55, 0.65],
      created: "2024-01-14",
      listed: "2024-01-21"
    },
    {
      id: 5,
      title: "NFT Trading Masterclass",
      description: "Educational clip showing advanced trading strategies",
      creator: "CryptoTrader_Pro",
      owner: "LearnCrypto",
      game: "NFT Trading",
      price: "1.2",
      currency: "ETH",
      usdPrice: "2,040",
      thumbnail: "/placeholder.svg?height=300&width=300&text=NFT+5",
      videoUrl: "/placeholder.mp4",
      rarity: "Epic",
      views: "15.6K",
      likes: "1.3K",
      duration: "2:45",
      type: "Educational",
      category: "Trading",
      tags: ["Educational", "Trading", "Strategy"],
      stats: { power: 70, rarity: 82, popularity: 88 },
      listingType: "fixed",
      timeLeft: null,
      lastSale: "1.0 ETH",
      priceHistory: [0.8, 1.0, 1.1, 1.2],
      created: "2024-01-16",
      listed: "2024-01-22"
    },
    {
      id: 6,
      title: "Retro Game Perfect Run",
      description: "Flawless playthrough of classic arcade game",
      creator: "RetroKing",
      owner: "ArcadeFan",
      game: "Pixel Warriors",
      price: "0.75",
      currency: "ETH",
      usdPrice: "1,275",
      thumbnail: "/placeholder.svg?height=300&width=300&text=NFT+6",
      videoUrl: "/placeholder.mp4",
      rarity: "Rare",
      views: "22.1K",
      likes: "1.9K",
      duration: "3:20",
      type: "Perfect Run",
      category: "Retro",
      tags: ["Perfect", "Retro", "Arcade"],
      stats: { power: 82, rarity: 75, popularity: 86 },
      listingType: "fixed",
      timeLeft: null,
      lastSale: "0.6 ETH",
      priceHistory: [0.5, 0.6, 0.7, 0.75],
      created: "2024-01-11",
      listed: "2024-01-17"
    }
  ]

  const userWallet = {
    address: "0x742d35Cc6644C008532e8aB8B8Db71C7Ac6c8F21",
    balance: {
      eth: "5.24",
      usdc: "12,450",
      tokens: "850"
    },
    nftsOwned: 23,
    totalValue: "18.7 ETH"
  }

  const transactionHistory = [
    { type: "purchase", nft: "Epic CryptoBoxers Knockout", price: "2.5 ETH", date: "2024-01-22", status: "completed" },
    { type: "sale", nft: "Speedrun Record Clip", price: "1.8 ETH", date: "2024-01-21", status: "completed" },
    { type: "listing", nft: "Trophy Unlock Moment", price: "0.95 ETH", date: "2024-01-20", status: "active" },
    { type: "purchase", nft: "Community Event Highlight", price: "3.2 SOL", date: "2024-01-19", status: "completed" }
  ]

  const categories = [
    { id: "all", name: "All Categories", count: 1240 },
    { id: "pvp", name: "PvP Clips", count: 340 },
    { id: "speedrun", name: "Speedruns", count: 125 },
    { id: "achievement", name: "Achievements", count: 280 },
    { id: "educational", name: "Educational", count: 95 },
    { id: "community", name: "Community", count: 200 },
    { id: "retro", name: "Retro Games", count: 180 },
    { id: "tournament", name: "Tournaments", count: 160 }
  ]

  const handlePurchase = (nft: any) => {
    setSelectedNFT(nft)
    setShowPurchaseModal(true)
  }

  const handlePaymentComplete = (method: string, transactionId: string) => {
    console.log(`✅ Solana Payment completed: ${method} - Transaction: ${transactionId}`)
    
    // Simulate Solana transaction confirmation
    setTimeout(() => {
      alert(`🎉 NFT Purchase Successful!\n\nPayment Method: ${method}\nTransaction ID: ${transactionId}\n\nYour NFT "${selectedNFT?.title}" has been transferred to your wallet on Solana blockchain. Ultra-low fees of ~$0.001!`)
      setShowPurchaseModal(false)
      setSelectedNFT(null)
    }, 1000)
  }

  const filteredNFTs = nftListings.filter(nft => {
    const matchesCategory = filterCategory === "all" || nft.category.toLowerCase() === filterCategory
    const matchesSearch = nft.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         nft.creator.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         nft.game.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const sortedNFTs = [...filteredNFTs].sort((a, b) => {
    switch (sortBy) {
      case "price-high": return parseFloat(b.price) - parseFloat(a.price)
      case "price-low": return parseFloat(a.price) - parseFloat(b.price)
      case "popular": return parseInt(b.views.replace("K", "000").replace(".", "")) - parseInt(a.views.replace("K", "000").replace(".", ""))
      case "newest": return new Date(b.listed).getTime() - new Date(a.listed).getTime()
      case "oldest": return new Date(a.listed).getTime() - new Date(b.listed).getTime()
      default: return 0
    }
  })

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case "Legendary": return "from-yellow-400 to-orange-500"
      case "Epic": return "from-purple-500 to-pink-500"
      case "Rare": return "from-blue-500 to-cyan-500"
      default: return "from-gray-500 to-gray-600"
    }
  }

  const getRarityBadgeColor = (rarity) => {
    switch (rarity) {
      case "Legendary": return "bg-yellow-500 text-black"
      case "Epic": return "bg-purple-500 text-white"
      case "Rare": return "bg-blue-500 text-white"
      default: return "bg-gray-500 text-white"
    }
  }

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-black via-gray-900/10 to-black relative min-h-screen">
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
            NFT MARKETPLACE
          </motion.h2>
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
            BUY • SELL • TRADE EPIC GAME CLIPS
          </motion.p>
          
          {/* Marketplace Social Sharing */}
          <motion.div 
            className="flex justify-center mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <SocialSharing
              title="PlayChange NFT Marketplace - Epic Gaming Moments"
              description="Discover, buy, and sell the most epic gaming moments as NFTs. Join the revolution!"
              url={typeof window !== 'undefined' ? window.location.href : ''}
              type="marketplace"
              referralCode="MARKETPLACE2024"
              onShare={(platform) => console.log(`Shared marketplace on ${platform}`)}
            />
          </motion.div>
        </motion.div>

        {/* Sponsor Banner */}
        <div className="flex justify-center mb-12">
          <SponsorSlot
            slotId="marketplace-header"
            size="banner"
            position="header"
            className="mx-auto"
          />
        </div>

        {/* Upgrade Prompt for Premium NFT Features */}
        <div className="max-w-4xl mx-auto mb-12">
          <UpgradePrompt
            variant="banner"
            feature="Premium NFT Trading"
            description="Get access to exclusive NFT drops, custom content requests, and revenue sharing"
            recommendedPlan="champion"
          />
        </div>

        {/* Marketplace Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {marketplaceStats.map((stat, index) => (
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
                <div className="text-gray-400 font-medium mb-2">{stat.label}</div>
                <div className={`text-sm font-bold ${stat.color}`}>
                  {stat.change.startsWith('+') ? '↗' : '↘'} {stat.change}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800/50 rounded-2xl p-2 backdrop-blur-sm border border-gray-700">
            {["marketplace", "my-nfts", "create", "analytics", "wallet", "gamification", "blockchain"].map((tab) => (
              <motion.button
                key={tab}
                className={`px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                  activeTab === tab ? "bg-orange-500 text-black" : "text-gray-400 hover:text-orange-400"
                }`}
                onClick={() => setActiveTab(tab)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1).replace('-', ' ')}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <AnimatePresence mode="wait">
          {/* Marketplace Section */}
          {activeTab === "marketplace" && (
            <motion.div
              key="marketplace"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="max-w-7xl mx-auto"
            >
              <div className="flex gap-8">
                {/* Main Content */}
                <div className="flex-1">
              {/* Enhanced Search and Filters */}
              <motion.div 
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-gray-700/50"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {/* Search Bar */}
                <div className="mb-6">
                  <div className="relative max-w-2xl">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-500 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search NFTs, creators, games..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-gray-900/50 border border-gray-600 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none backdrop-blur-sm text-lg"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery("")}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Filters Row */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                  {/* Category Pills */}
                  <div className="flex flex-wrap gap-3">
                    <div className="text-sm font-medium text-gray-400 mr-3 flex items-center">
                      <Filter className="w-4 h-4 mr-2" />
                      Categories:
                    </div>
                    {categories.slice(0, 6).map((category) => (
                      <motion.button
                        key={category.id}
                        onClick={() => setFilterCategory(category.id)}
                        className={`px-4 py-2 rounded-full font-bold text-sm transition-all duration-300 flex items-center space-x-2 ${
                          filterCategory === category.id
                            ? "bg-gradient-to-r from-orange-500 to-orange-600 text-black shadow-lg shadow-orange-500/25"
                            : "bg-gray-700/50 text-gray-300 hover:bg-gray-600 hover:text-orange-400 border border-gray-600"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>{category.name}</span>
                        <Badge className="bg-black/20 text-xs px-1">
                          {category.count}
                        </Badge>
                      </motion.button>
                    ))}
                  </div>
                  
                  {/* Sort and View Controls */}
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-gray-400">Sort:</span>
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-2 text-white focus:border-orange-500 focus:outline-none backdrop-blur-sm min-w-[180px]"
                      >
                        <option value="newest">🕒 Newest First</option>
                        <option value="oldest">📅 Oldest First</option>
                        <option value="price-high">💰 Highest Price</option>
                        <option value="price-low">💸 Lowest Price</option>
                        <option value="popular">🔥 Most Popular</option>
                        <option value="recently-listed">📅 Recently Listed</option>
                      </select>
                    </div>
                    
                    <div className="flex bg-gray-700/50 border border-gray-600 rounded-xl backdrop-blur-sm">
                      <motion.button
                        onClick={() => setViewMode("grid")}
                        className={`p-3 rounded-l-xl transition-colors ${viewMode === "grid" ? "text-orange-500 bg-orange-500/10" : "text-gray-400 hover:text-orange-400"}`}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Grid3X3 className="w-5 h-5" />
                      </motion.button>
                      <motion.button
                        onClick={() => setViewMode("list")}
                        className={`p-3 rounded-r-xl transition-colors ${viewMode === "list" ? "text-orange-500 bg-orange-500/10" : "text-gray-400 hover:text-orange-400"}`}
                        whileHover={{ scale: 1.05 }}
                      >
                        <List className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>
                </div>
                
                {/* Quick Stats */}
                <div className="mt-6 pt-4 border-t border-gray-700/50 flex items-center justify-between text-sm">
                  <div className="text-gray-400">
                    Showing <span className="text-orange-400 font-bold">{filteredNFTs.length}</span> of <span className="text-white font-bold">{nftListings.length}</span> NFTs
                  </div>
                  <div className="flex items-center space-x-6 text-gray-400">
                    <div className="flex items-center space-x-2">
                      <Gem className="w-4 h-4 text-purple-400" />
                      <span>Floor: <span className="text-purple-400 font-bold">{marketplaceStats[2].value}</span></span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <BarChart3 className="w-4 h-4 text-green-400" />
                      <span>Volume: <span className="text-green-400 font-bold">{marketplaceStats[0].value}</span></span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* NFT Grid */}
              <div className={viewMode === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start" : "space-y-4"}>
                {/* Insert sponsor ad every 6 NFTs in grid view */}
                {sortedNFTs.map((nft, index) => (
                  <React.Fragment key={`nft-${nft.id}`}>
                    {index > 0 && index % 6 === 0 && viewMode === "grid" && (
                      <motion.div
                        className="lg:col-span-1"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <SponsorSlot
                          slotId={`content-${Math.floor(index / 6)}`}
                          size="large"
                          position="content"
                          className="h-full"
                        />
                      </motion.div>
                    )}
                  <motion.div
                    key={nft.id}
                    className="group cursor-pointer"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedNFT(nft)}
                  >
                    <Card className={`bg-gradient-to-br from-gray-800/50 via-gray-900/50 to-black/50 border-gray-700/50 overflow-hidden group-hover:border-orange-500 group-hover:shadow-2xl group-hover:shadow-orange-500/10 transition-all duration-500 backdrop-blur-sm transform group-hover:scale-[1.02] group-hover:-rotate-1 ${index % 3 === 0 ? 'rounded-3xl' : index % 3 === 1 ? 'rounded-2xl rotate-1' : 'rounded-xl -rotate-1'}`}>
                      {/* NFT Preview */}
                      <div className={`relative ${index % 4 === 0 ? 'aspect-[4/5]' : index % 4 === 1 ? 'aspect-square' : index % 4 === 2 ? 'aspect-[5/4]' : 'aspect-[3/4]'} overflow-hidden`}>
                        <Image
                          src={nft.thumbnail}
                          alt={nft.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        
                        {/* Animated Rarity Glow */}
                        <motion.div 
                          className={`absolute inset-0 bg-gradient-to-t ${getRarityColor(nft.rarity)} opacity-30`}
                          animate={{
                            opacity: [0.2, 0.4, 0.2]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut"
                          }}
                        />
                        
                        {/* Dynamic Corner Badges */}
                        <div className="absolute top-4 left-4 transform -rotate-12">
                          <motion.div
                            animate={{ 
                              rotate: [-12, -8, -12],
                              scale: [1, 1.05, 1]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY
                            }}
                          >
                            <Badge className={`${getRarityBadgeColor(nft.rarity)} font-bold text-xs px-3 py-1 shadow-lg`}>
                              ✨ {nft.rarity}
                            </Badge>
                          </motion.div>
                        </div>
                        
                        <div className="absolute top-4 right-4 flex flex-col space-y-2 items-end">
                          <motion.div
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          >
                            <Badge className="bg-green-500/90 backdrop-blur-sm text-white rounded-full px-3 py-1 shadow-lg">
                              <ShoppingCart className="w-3 h-3 mr-1" />
                              Buy Now
                            </Badge>
                          </motion.div>
                          <Badge className="bg-black/60 backdrop-blur-sm text-white rounded-full px-3 py-1">
                            🎬 {nft.duration}
                          </Badge>
                        </div>
                        
                        {/* Floating Stats */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex justify-between items-end">
                            <div className="flex space-x-2">
                              <motion.div
                                className="bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 text-white text-xs flex items-center space-x-1"
                                whileHover={{ scale: 1.1 }}
                              >
                                <Eye className="w-3 h-3 text-blue-400" />
                                <span>{nft.views}</span>
                              </motion.div>
                              <motion.div
                                className="bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 text-white text-xs flex items-center space-x-1"
                                whileHover={{ scale: 1.1 }}
                              >
                                <Heart className="w-3 h-3 text-red-400" />
                                <span>{nft.likes}</span>
                              </motion.div>
                            </div>
                            <Badge className="bg-gradient-to-r from-orange-500 to-orange-600 text-black font-bold rounded-full px-3 py-1 shadow-lg">
                              🎮 {nft.type}
                            </Badge>
                          </div>
                        </div>
                        
                        {/* Enhanced Play Button Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                          <motion.div
                            className="relative"
                            initial={{ scale: 0, rotate: 0 }}
                            whileHover={{ 
                              scale: 1.2, 
                              rotate: 360,
                              background: "linear-gradient(45deg, #ff6f00, #ff8f00, #ff6f00)"
                            }}
                            transition={{ duration: 0.5 }}
                          >
                            <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-2xl shadow-orange-500/50 border-4 border-white/20">
                              <Play className="w-10 h-10 text-black ml-1" fill="currentColor" />
                            </div>
                            <motion.div
                              className="absolute -inset-2 border-2 border-orange-400 rounded-full"
                              animate={{ rotate: [0, 360] }}
                              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            />
                          </motion.div>
                        </div>
                      </div>
                      
                      {/* NFT Info */}
                      <div className="p-6 flex flex-col h-full">
                        {/* Title and Description Section */}
                        <div className="mb-4">
                          <h3 className="font-bold text-white text-lg mb-2 group-hover:text-orange-400 transition-colors line-clamp-2 leading-tight">
                            {nft.title}
                          </h3>
                          <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed">{nft.description}</p>
                        </div>
                        
                        {/* Creator and Game Info Section */}
                        <div className="flex items-center justify-between mb-4 bg-gray-900/30 rounded-lg p-3">
                          <div className="flex items-center space-x-3">
                            <div className="relative">
                              <Image
                                src="/placeholder.svg?height=32&width=32&text=C"
                                alt={nft.creator}
                                width={32}
                                height={32}
                                className="rounded-full border-2 border-orange-500/30"
                              />
                              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border border-gray-800"></div>
                            </div>
                            <div>
                              <div className="text-xs text-gray-500 uppercase tracking-wide">Creator</div>
                              <div className="text-sm font-semibold text-orange-400 truncate max-w-[100px]">{nft.creator}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xs text-gray-500 uppercase tracking-wide">Game</div>
                            <div className="text-sm font-semibold text-white">{nft.game}</div>
                          </div>
                        </div>
                        
                        {/* Tags Section */}
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-2">
                            {nft.tags.slice(0, 3).map((tag, tagIndex) => (
                              <Badge key={tagIndex} className="bg-orange-500/20 text-orange-400 border border-orange-500/30 text-xs px-2 py-1">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        {/* Price and Actions Section */}
                        <div className="mt-auto">
                          {/* Price Display */}
                          <div className="bg-gray-800/50 rounded-lg p-4 mb-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">
                                  Instant Price
                                </div>
                                <div className="flex items-baseline space-x-2">
                                  <span className="text-2xl font-black text-orange-400">
                                    {nft.price}
                                  </span>
                                  <span className="text-sm font-medium text-orange-300">
                                    {nft.currency}
                                  </span>
                                </div>
                                <div className="text-xs text-gray-400 mt-1">
                                  ≈ ${nft.usdPrice}
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-xs text-green-400 uppercase tracking-wide mb-1">Status</div>
                                <div className="text-sm font-bold text-green-400">Available</div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Action Buttons */}
                          <div className="flex items-center space-x-2">
                            <Button
                              size="sm"
                              onClick={() => handlePurchase(nft)}
                              className="flex-1 bg-orange-500 hover:bg-orange-600 text-black font-bold py-2 px-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/25"
                            >
                              <ShoppingCart className="w-4 h-4 mr-2" />
                              Buy Now
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white p-2 transition-all duration-200"
                            >
                              <Heart className="w-4 h-4" />
                            </Button>
                            <SocialSharing
                              title={nft.title}
                              description={nft.description}
                              url={`${typeof window !== 'undefined' ? window.location.origin : 'https://playchange.io'}/nft/${nft.id}`}
                              imageUrl={nft.thumbnail}
                              type="nft"
                              referralCode="USER123"
                              onShare={(platform) => console.log(`Shared ${nft.title} on ${platform}`)}
                            />
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                  </React.Fragment>
                ))}
              </div>
                </div>
                
                {/* Sidebar with Sponsor Slots */}
                <div className="hidden xl:block w-80 space-y-6">
                  <SponsorSlot
                    slotId="sidebar-premium"
                    size="large"
                    position="sidebar"
                    className="w-full"
                  />
                  
                  <SponsorSlot
                    slotId="sidebar-secondary"
                    size="medium"
                    position="sidebar"
                    className="w-full"
                  />
                  
                  {/* PlayChange Branding Card */}
                  <motion.div
                    className="bg-gradient-to-br from-orange-500 to-red-500 p-6 rounded-xl text-black"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                        <Gamepad2 className="w-6 h-6 text-orange-500" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl">PlayChange.io</h3>
                        <p className="text-sm opacity-80">IN GAMES WE TRUST</p>
                      </div>
                    </div>
                    <p className="text-sm mb-4">
                      The ultimate gaming platform where epic moments become valuable NFTs.
                    </p>
                    <Button className="w-full bg-black text-orange-500 hover:bg-gray-900 font-bold">
                      Join Premium
                      <Star className="w-4 h-4 ml-2" />
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}

          {/* My NFTs Section */}
          {activeTab === "my-nfts" && (
            <motion.div
              key="my-nfts"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="max-w-6xl mx-auto"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {nftListings.slice(0, 6).map((nft, index) => (
                  <motion.div
                    key={nft.id}
                    className="group"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="bg-gray-800/50 border-gray-700 overflow-hidden group-hover:border-orange-500 transition-all duration-300 backdrop-blur-sm">
                      <div className="relative aspect-square">
                        <Image
                          src={nft.thumbnail}
                          alt={nft.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-3 right-3">
                          <Badge className="bg-green-500 text-white">
                            Owned
                          </Badge>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-white mb-2">{nft.title}</h3>
                        <div className="flex justify-between items-center">
                          <div className="text-orange-400 font-bold">
                            {nft.price} {nft.currency}
                          </div>
                          <div className="flex space-x-2">
                            <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-black">
                              Sell
                            </Button>
                            <Button size="sm" variant="outline" className="border-gray-600 text-white">
                              Transfer
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Create NFT Section */}
          {activeTab === "create" && (
            <motion.div
              key="create"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="max-w-4xl mx-auto"
            >
              <Card className="bg-gray-800/50 border-gray-700 p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-6 font-exo2">Create New NFT</h3>
                
                <div className="space-y-6">
                  {/* Upload Section */}
                  <div>
                    <label className="block text-orange-500 font-bold mb-3">Upload Game Clip</label>
                    <div className="border-2 border-dashed border-gray-600 rounded-xl p-12 text-center hover:border-orange-500 transition-colors">
                      <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-400 mb-2">Drop your video file here or click to browse</p>
                      <p className="text-sm text-gray-500">Supports MP4, MOV, AVI (Max 100MB)</p>
                      <Button className="mt-4 bg-orange-500 hover:bg-orange-600 text-black font-bold">
                        Choose File
                      </Button>
                    </div>
                  </div>
                  
                  {/* NFT Details */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-orange-500 font-bold mb-2">NFT Title</label>
                      <input
                        type="text"
                        placeholder="Enter NFT title"
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-orange-500 font-bold mb-2">Game</label>
                      <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-orange-500 focus:outline-none">
                        <option>CryptoBoxers</option>
                        <option>Token Quest</option>
                        <option>Eco Warriors</option>
                        <option>Social Impact Racing</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-orange-500 font-bold mb-2">Description</label>
                    <textarea
                      placeholder="Describe your epic moment..."
                      rows={4}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none"
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-orange-500 font-bold mb-2">Category</label>
                      <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-orange-500 focus:outline-none">
                        <option>PvP Clip</option>
                        <option>Speedrun</option>
                        <option>Achievement</option>
                        <option>Educational</option>
                        <option>Community Event</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-orange-500 font-bold mb-2">Rarity</label>
                      <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-orange-500 focus:outline-none">
                        <option>Common</option>
                        <option>Rare</option>
                        <option>Epic</option>
                        <option>Legendary</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-orange-500 font-bold mb-2">Royalty %</label>
                      <input
                        type="number"
                        placeholder="5"
                        min="0"
                        max="20"
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none"
                      />
                    </div>
                  </div>
                  
                  {/* Pricing */}
                  <div>
                    <label className="block text-orange-500 font-bold mb-3">Listing Type</label>
                    <div className="flex space-x-4 mb-4">
                      <label className="flex items-center space-x-2">
                        <input type="radio" name="listingType" value="fixed" className="text-orange-500" />
                        <span className="text-white">Fixed Price</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="radio" name="listingType" value="instant" className="text-orange-500" />
                        <span className="text-white">Instant Sale</span>
                      </label>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-orange-500 font-bold mb-2">Price</label>
                        <div className="relative">
                          <input
                            type="number"
                            placeholder="0.5"
                            step="0.01"
                            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 pr-16 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none"
                          />
                          <select className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-transparent text-orange-400 font-bold focus:outline-none">
                            <option>ETH</option>
                            <option>USDC</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-orange-500 font-bold mb-2">Duration (Days)</label>
                        <input
                          type="number"
                          placeholder="7"
                          min="1"
                          max="30"
                          className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div>
                    <label className="block text-orange-500 font-bold mb-2">Tags</label>
                    <input
                      type="text"
                      placeholder="epic, pvp, championship (comma separated)"
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none"
                    />
                  </div>
                  
                  {/* Create Button */}
                  <div className="flex justify-center pt-6">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-12 py-4 text-lg">
                      <Sparkles className="w-5 h-5 mr-2" />
                      Create NFT
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}

          {/* Analytics Section */}
          {activeTab === "analytics" && (
            <motion.div
              key="analytics"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="max-w-6xl mx-auto"
            >
              <div className="grid md:grid-cols-2 gap-8">
                {/* Portfolio Value */}
                <Card className="bg-gray-800/50 border-gray-700 p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-white mb-4 font-exo2">Portfolio Value</h3>
                  <div className="text-4xl font-black text-orange-400 mb-2">{userWallet.totalValue}</div>
                  <div className="text-green-500 font-bold">+12.5% this month</div>
                  <div className="h-40 mt-4 bg-gray-700/50 rounded-lg flex items-center justify-center">
                    <LineChart className="w-16 h-16 text-gray-500" />
                  </div>
                </Card>
                
                {/* Trading Activity */}
                <Card className="bg-gray-800/50 border-gray-700 p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-white mb-4 font-exo2">Trading Activity</h3>
                  <div className="space-y-4">
                    {transactionHistory.slice(0, 4).map((tx, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full ${
                            tx.type === 'purchase' ? 'bg-green-500' :
                            tx.type === 'sale' ? 'bg-blue-500' :
                            tx.type === 'listing' ? 'bg-orange-500' :
                            'bg-purple-500'
                          }`} />
                          <div>
                            <div className="text-white font-medium capitalize">{tx.type}</div>
                            <div className="text-gray-400 text-sm">{tx.date}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-orange-400 font-bold">{tx.price}</div>
                          <div className={`text-xs ${
                            tx.status === 'completed' ? 'text-green-500' :
                            tx.status === 'pending' ? 'text-orange-500' :
                            'text-blue-500'
                          }`}>
                            {tx.status}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </motion.div>
          )}

          {/* Wallet Section */}
          {activeTab === "wallet" && (
            <motion.div
              key="wallet"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="max-w-4xl mx-auto"
            >
              <div className="grid md:grid-cols-3 gap-8">
                {/* Wallet Balance */}
                <Card className="bg-gray-800/50 border-gray-700 p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-white mb-4 font-exo2">Wallet Balance</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <Bitcoin className="w-5 h-5 text-orange-500" />
                        <span className="text-white">ETH</span>
                      </div>
                      <div className="text-right">
                        <div className="text-orange-400 font-bold">{userWallet.balance.eth}</div>
                        <div className="text-gray-400 text-sm">~$8,906</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <Coins className="w-5 h-5 text-blue-500" />
                        <span className="text-white">USDC</span>
                      </div>
                      <div className="text-right">
                        <div className="text-blue-400 font-bold">{userWallet.balance.usdc}</div>
                        <div className="text-gray-400 text-sm">Stable</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <Star className="w-5 h-5 text-purple-500" />
                        <span className="text-white">Tokens</span>
                      </div>
                      <div className="text-right">
                        <div className="text-purple-400 font-bold">{userWallet.balance.tokens}</div>
                        <div className="text-gray-400 text-sm">Platform</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2 mt-6">
                    <Button className="flex-1 bg-orange-500 hover:bg-orange-600 text-black font-bold">
                      Deposit
                    </Button>
                    <Button className="flex-1 bg-gray-700 hover:bg-gray-600 text-white">
                      Withdraw
                    </Button>
                  </div>
                </Card>
                
                {/* Wallet Info */}
                <div className="md:col-span-2">
                  <Card className="bg-gray-800/50 border-gray-700 p-6 backdrop-blur-sm mb-6">
                    <h3 className="text-xl font-bold text-white mb-4 font-exo2">Wallet Address</h3>
                    <div className="flex items-center space-x-3 bg-gray-700/50 rounded-lg p-4">
                      <code className="text-orange-400 font-mono text-sm flex-1">
                        {userWallet.address}
                      </code>
                      <Button size="sm" variant="outline" className="border-gray-600 text-white">
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </Card>
                  
                  <Card className="bg-gray-800/50 border-gray-700 p-6 backdrop-blur-sm">
                    <h3 className="text-xl font-bold text-white mb-4 font-exo2">Transaction History</h3>
                    <div className="space-y-3">
                      {transactionHistory.map((tx, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              tx.type === 'purchase' ? 'bg-green-500/20 text-green-500' :
                              tx.type === 'sale' ? 'bg-blue-500/20 text-blue-500' :
                              tx.type === 'listing' ? 'bg-orange-500/20 text-orange-500' :
                              'bg-purple-500/20 text-purple-500'
                            }`}>
                              {tx.type === 'purchase' && <ShoppingCart className="w-4 h-4" />}
                              {tx.type === 'sale' && <DollarSign className="w-4 h-4" />}
                              {tx.type === 'listing' && <Tag className="w-4 h-4" />}
                              {tx.type === 'bid' && <Gavel className="w-4 h-4" />}
                            </div>
                            <div>
                              <div className="text-white font-medium capitalize">{tx.type}</div>
                              <div className="text-gray-400 text-sm">{tx.nft}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-orange-400 font-bold">{tx.price}</div>
                            <div className="text-gray-400 text-sm">{tx.date}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            </motion.div>
          )}
          {/* Gamification Section */}
          {activeTab === "gamification" && (
            <motion.div
              key="gamification"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="max-w-6xl mx-auto"
            >
              <Gamification 
                userId="current-user"
                showLeaderboard={true}
                showAchievements={true}
                showRewards={true}
              />
            </motion.div>
          )}

          {/* Blockchain Section */}
          {activeTab === "blockchain" && (
            <motion.div
              key="blockchain"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="max-w-6xl mx-auto"
            >
              <BlockchainIntegration 
                autoConnect={true}
                supportedNetworks={['mainnet', 'polygon', 'arbitrum']}
                defaultNetwork="mainnet"
              />
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* NFT Detail Modal */}
      {selectedNFT && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedNFT(null)}
        >
          <motion.div
            className="bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-white font-exo2">{selectedNFT.title}</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedNFT(null)}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {/* NFT Preview */}
                <div>
                  <div className="relative aspect-square rounded-xl overflow-hidden mb-4">
                    <Image
                      src={selectedNFT.thumbnail}
                      alt={selectedNFT.title}
                      fill
                      className="object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${getRarityColor(selectedNFT.rarity)} opacity-20`} />
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-400">{selectedNFT.stats.power}</div>
                      <div className="text-sm text-gray-400">Power</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">{selectedNFT.stats.rarity}</div>
                      <div className="text-sm text-gray-400">Rarity</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400">{selectedNFT.stats.popularity}</div>
                      <div className="text-sm text-gray-400">Popularity</div>
                    </div>
                  </div>
                </div>
                
                {/* NFT Details */}
                <div>
                  <div className="space-y-6">
                    <div>
                      <Badge className={`${getRarityBadgeColor(selectedNFT.rarity)} font-bold mb-3`}>
                        {selectedNFT.rarity}
                      </Badge>
                      <p className="text-gray-300">{selectedNFT.description}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Creator</div>
                        <div className="text-orange-400 font-bold">{selectedNFT.creator}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Owner</div>
                        <div className="text-white font-bold">{selectedNFT.owner}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Game</div>
                        <div className="text-white font-bold">{selectedNFT.game}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Category</div>
                        <div className="text-white font-bold">{selectedNFT.category}</div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-sm text-gray-400 mb-2">Current Price</div>
                      <div className="text-4xl font-black text-orange-400 mb-2">
                        {selectedNFT.price} {selectedNFT.currency}
                      </div>
                      <div className="text-gray-400">${selectedNFT.usdPrice}</div>
                    </div>
                    
                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-green-400 font-bold">Status:</span>
                        <span className="text-white font-bold">Available for Purchase</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <Button 
                        onClick={() => handlePurchase(selectedNFT)}
                        className="flex-1 bg-orange-500 hover:bg-orange-600 text-black font-bold py-3"
                      >
                        <ShoppingCart className="w-5 h-5 mr-2" />
                        Buy Now
                      </Button>
                      <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-700">
                        <Heart className="w-5 h-5" />
                      </Button>
                      <SocialSharing
                        title={selectedNFT.title}
                        description={selectedNFT.description}
                        url={`${typeof window !== 'undefined' ? window.location.origin : 'https://playchange.io'}/nft/${selectedNFT.id}`}
                        imageUrl={selectedNFT.thumbnail}
                        type="nft"
                        referralCode="USER123"
                        onShare={(platform) => console.log(`Shared ${selectedNFT.title} on ${platform}`)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Purchase Modal with Payment Gateway */}
      <AnimatePresence>
        {showPurchaseModal && selectedNFT && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPurchaseModal(false)}
          >
            <motion.div
              className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">Complete Purchase</h3>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowPurchaseModal(false)}
                    className="border-gray-600 text-white hover:bg-gray-700"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* NFT Preview */}
                  <div className="space-y-4">
                    <div className="aspect-square rounded-xl overflow-hidden bg-gray-800">
                      <img
                        src={selectedNFT.thumbnail}
                        alt={selectedNFT.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">{selectedNFT.title}</h4>
                      <p className="text-gray-400">{selectedNFT.description}</p>
                      <div className="flex items-center space-x-4 mt-2">
                        <span className="text-sm text-gray-500">Created by</span>
                        <span className="text-orange-400 font-bold">{selectedNFT.creator}</span>
                      </div>
                    </div>
                  </div>

                  {/* Payment Gateway */}
                  <div>
                    <PaymentGateways
                      amount={selectedNFT.price}
                      currency={selectedNFT.currency}
                      nftTitle={selectedNFT.title}
                      onPaymentComplete={handlePaymentComplete}
                      premiumFeatures={true}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default function NFTMarketplacePage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <EnhancedBackground />
      <Navigation />
      <div className="pt-24">
        <NFTMarketplace />
      </div>
      <Footer />
      
      {/* AI Virtual Assistant - Always available */}
      <AIVirtualAssistant 
        customerServicePhone="+1-800-PLAYCHANGE"
        position="bottom-right"
        theme="playchange"
      />
    </div>
  )
}