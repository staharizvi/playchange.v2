"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Upload,
  Edit3,
  Trash2,
  Eye,
  Users,
  DollarSign,
  Activity,
  Settings,
  Image as ImageIcon,
  Video,
  FileText,
  Plus,
  Search,
  Filter,
  Download,
  BarChart3,
  Shield,
  Bell,
  Star,
  Zap
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Navigation from "@/components/shared/Navigation"
import Footer from "@/components/shared/Footer"
import EnhancedBackground from "@/components/shared/EnhancedBackground"

const AdminDashboard = () => {
  const [selectedTab, setSelectedTab] = useState("overview")
  const [searchQuery, setSearchQuery] = useState("")

  const dashboardStats = [
    { label: "Total NFTs", value: "1,247", icon: ImageIcon, change: "+12%", color: "text-blue-500" },
    { label: "Active Users", value: "8,432", icon: Users, change: "+8%", color: "text-green-500" },
    { label: "Revenue (30d)", value: "$45.2K", icon: DollarSign, change: "+15%", color: "text-orange-500" },
    { label: "Platform Activity", value: "94%", icon: Activity, change: "+3%", color: "text-purple-500" }
  ]

  const recentNFTs = [
    {
      id: 1,
      title: "Epic CryptoBoxers Knockout",
      creator: "ProGamer_Elite",
      status: "active",
      price: "2.5 ETH",
      thumbnail: "/placeholder.svg?height=60&width=60&text=NFT1",
      uploadDate: "2024-01-22",
      views: "45.2K"
    },
    {
      id: 2,
      title: "Token Quest Speedrun WR",
      creator: "SpeedRunner_X",
      status: "pending",
      price: "1.8 ETH",
      thumbnail: "/placeholder.svg?height=60&width=60&text=NFT2",
      uploadDate: "2024-01-21",
      views: "28.7K"
    },
    {
      id: 3,
      title: "Rare Trophy Unlock Moment",
      creator: "TrophyHunter",
      status: "active",
      price: "0.95 ETH",
      thumbnail: "/placeholder.svg?height=60&width=60&text=NFT3",
      uploadDate: "2024-01-20",
      views: "19.4K"
    }
  ]

  const sponsorAds = [
    {
      id: "playchange-premium",
      title: "PlayChange Premium Membership",
      sponsor: "PlayChange",
      status: "active",
      impressions: 125000,
      clicks: 3250,
      ctr: 2.6,
      revenue: "$1,250"
    },
    {
      id: "gaming-headset-sponsor",
      title: "HyperSound Gaming Headset",
      sponsor: "HyperSound",
      status: "active",
      impressions: 89000,
      clicks: 2140,
      ctr: 2.4,
      revenue: "$890"
    }
  ]

  const userManagement = [
    {
      id: 1,
      username: "CryptoGamer_Pro",
      email: "pro@email.com",
      role: "Creator",
      status: "active",
      nftsOwned: 23,
      totalSpent: "12.5 ETH"
    },
    {
      id: 2,
      username: "SpeedRunner_X",
      email: "speed@email.com",
      role: "Seller",
      status: "verified",
      nftsOwned: 15,
      totalSpent: "8.2 ETH"
    }
  ]

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-black via-gray-900/10 to-black relative min-h-screen">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-6xl md:text-8xl font-black mb-6 font-exo2"
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
            ADMIN DASHBOARD
          </motion.h2>
          <motion.p
            className="text-xl text-orange-400 font-orbitron font-bold"
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
            MANAGE YOUR MARKETPLACE
          </motion.p>
        </motion.div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {dashboardStats.map((stat, index) => (
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
                  className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center bg-orange-500/20 border-2 border-orange-500/50"
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
                  <stat.icon className="w-6 h-6 text-orange-500" />
                </motion.div>
                <div className="text-2xl font-black text-orange-400 mb-2 font-orbitron">{stat.value}</div>
                <div className="text-gray-400 font-medium mb-2">{stat.label}</div>
                <div className={`text-sm font-bold ${stat.color}`}>
                  {stat.change}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Admin Tabs */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 bg-gray-800/50 mb-8">
            <TabsTrigger value="overview" className="data-[state=active]:bg-orange-500 data-[state=active]:text-black">
              <BarChart3 className="w-4 h-4 mr-2" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="nfts" className="data-[state=active]:bg-orange-500 data-[state=active]:text-black">
              <ImageIcon className="w-4 h-4 mr-2" />
              NFTs
            </TabsTrigger>
            <TabsTrigger value="users" className="data-[state=active]:bg-orange-500 data-[state=active]:text-black">
              <Users className="w-4 h-4 mr-2" />
              Users
            </TabsTrigger>
            <TabsTrigger value="sponsors" className="data-[state=active]:bg-orange-500 data-[state=active]:text-black">
              <Star className="w-4 h-4 mr-2" />
              Sponsors
            </TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-orange-500 data-[state=active]:text-black">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Recent Activity */}
              <Card className="bg-gray-800/50 border-gray-700 p-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-4">Recent NFT Activity</h3>
                <div className="space-y-4">
                  {recentNFTs.map((nft) => (
                    <div key={nft.id} className="flex items-center space-x-4 p-3 bg-gray-700/30 rounded-lg">
                      <Image
                        src={nft.thumbnail}
                        alt={nft.title}
                        width={40}
                        height={40}
                        className="rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-white">{nft.title}</h4>
                        <p className="text-sm text-gray-400">by {nft.creator}</p>
                      </div>
                      <Badge className={`${nft.status === 'active' ? 'bg-green-500' : 'bg-yellow-500'} text-black`}>
                        {nft.status}
                      </Badge>
                      <span className="text-orange-400 font-bold">{nft.price}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Quick Actions */}
              <Card className="bg-gray-800/50 border-gray-700 p-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-black font-bold">
                    <Plus className="w-4 h-4 mr-2" />
                    Add NFT
                  </Button>
                  <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-700">
                    <Upload className="w-4 h-4 mr-2" />
                    Bulk Upload
                  </Button>
                  <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-700">
                    <Bell className="w-4 h-4 mr-2" />
                    Send Alert
                  </Button>
                  <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-700">
                    <Download className="w-4 h-4 mr-2" />
                    Export Data
                  </Button>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* NFTs Tab */}
          <TabsContent value="nfts" className="space-y-6">
            {/* Search and Filter */}
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search NFTs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none backdrop-blur-sm"
                />
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600 text-black font-bold">
                <Plus className="w-4 h-4 mr-2" />
                Add NFT
              </Button>
            </div>

            {/* NFT Management */}
            <div className="space-y-4">
              {recentNFTs.map((nft) => (
                <Card key={nft.id} className="bg-gray-800/50 border-gray-700 p-4 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Image
                        src={nft.thumbnail}
                        alt={nft.title}
                        width={60}
                        height={60}
                        className="rounded-lg"
                      />
                      <div>
                        <h4 className="font-bold text-white">{nft.title}</h4>
                        <p className="text-gray-400">by {nft.creator}</p>
                        <div className="flex items-center space-x-4 mt-2">
                          <span className="text-orange-400 font-bold">{nft.price}</span>
                          <Badge className={`${nft.status === 'active' ? 'bg-green-500' : 'bg-yellow-500'} text-black`}>
                            {nft.status}
                          </Badge>
                          <span className="text-gray-500 text-sm">{nft.views} views</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="border-gray-600 text-white hover:bg-gray-700">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="border-gray-600 text-white hover:bg-gray-700">
                        <Edit3 className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="border-red-600 text-red-400 hover:bg-red-700">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Users Tab */}
          <TabsContent value="users" className="space-y-6">
            <div className="space-y-4">
              {userManagement.map((user) => (
                <Card key={user.id} className="bg-gray-800/50 border-gray-700 p-4 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-orange-500" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white">{user.username}</h4>
                        <p className="text-gray-400">{user.email}</p>
                        <div className="flex items-center space-x-4 mt-2">
                          <Badge className="bg-purple-500 text-white">{user.role}</Badge>
                          <Badge className={`${user.status === 'active' ? 'bg-green-500' : 'bg-blue-500'} text-white`}>
                            {user.status}
                          </Badge>
                          <span className="text-gray-500 text-sm">{user.nftsOwned} NFTs</span>
                          <span className="text-orange-400 font-bold">{user.totalSpent}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="border-gray-600 text-white hover:bg-gray-700">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="border-gray-600 text-white hover:bg-gray-700">
                        <Shield className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Sponsors Tab */}
          <TabsContent value="sponsors" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold text-white">Sponsor Management</h3>
              <Button className="bg-orange-500 hover:bg-orange-600 text-black font-bold">
                <Plus className="w-4 h-4 mr-2" />
                Add Sponsor
              </Button>
            </div>
            
            <div className="space-y-4">
              {sponsorAds.map((ad) => (
                <Card key={ad.id} className="bg-gray-800/50 border-gray-700 p-6 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-white text-lg">{ad.title}</h4>
                      <p className="text-orange-400 font-medium mb-2">by {ad.sponsor}</p>
                      <div className="grid grid-cols-4 gap-4">
                        <div>
                          <p className="text-gray-400 text-sm">Impressions</p>
                          <p className="text-white font-bold">{ad.impressions.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Clicks</p>
                          <p className="text-white font-bold">{ad.clicks.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">CTR</p>
                          <p className="text-white font-bold">{ad.ctr}%</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Revenue</p>
                          <p className="text-green-400 font-bold">{ad.revenue}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <Badge className="bg-green-500 text-white">{ad.status}</Badge>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="border-gray-600 text-white hover:bg-gray-700">
                          <Edit3 className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="border-red-600 text-red-400 hover:bg-red-700">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gray-800/50 border-gray-700 p-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-4">Platform Settings</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white">NFT Approval Required</span>
                    <Button size="sm" className="bg-green-500 text-white">ON</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white">Auto-Moderate Content</span>
                    <Button size="sm" className="bg-green-500 text-white">ON</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white">Public Registration</span>
                    <Button size="sm" className="bg-green-500 text-white">ON</Button>
                  </div>
                </div>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 p-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-4">Fee Structure</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white">Platform Fee</span>
                    <span className="text-orange-400 font-bold">2.5%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white">Creator Royalty</span>
                    <span className="text-orange-400 font-bold">5-20%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white">Gas Fee Coverage</span>
                    <Badge className="bg-purple-500 text-white">Premium Only</Badge>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <EnhancedBackground />
      <Navigation />
      <div className="pt-24">
        <AdminDashboard />
      </div>
      <Footer />
    </div>
  )
}