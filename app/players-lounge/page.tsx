"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Users,
  MessageSquare,
  Globe,
  Trophy,
  Eye,
  Clock,
  Star,
  ChevronRight,
  Send,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Heart,
  Share,
  ThumbsUp,
  MessageCircle,
  Gamepad2,
  Zap,
  Award,
  Crown,
  Mic,
  Video,
  Settings,
  MoreVertical,
  UserPlus,
  Gift,
  Calendar,
  MapPin,
  Wifi,
  TrendingUp,
  Filter,
  Search,
  Pin,
  Lock,
  Flame,
  StreamIcon
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Navigation from "@/components/shared/Navigation"
import Footer from "@/components/shared/Footer"
import EnhancedBackground from "@/components/shared/EnhancedBackground"

const PlayersLounge = () => {
  const [activeTab, setActiveTab] = useState("streaming-now")
  const [selectedStream, setSelectedStream] = useState(0)
  const [chatMessage, setChatMessage] = useState("")
  const [isStreamMuted, setIsStreamMuted] = useState(false)
  const [isStreamPlaying, setIsStreamPlaying] = useState(true)

  const communityStats = [
    { label: "Live Viewers", value: "127K", icon: Eye, color: "text-red-500" },
    { label: "Active Streamers", value: "2.4K", icon: Video, color: "text-orange-500" },
    { label: "Daily Messages", value: "890K", icon: MessageSquare, color: "text-blue-500" },
    { label: "Tournament Players", value: "45K", icon: Trophy, color: "text-yellow-500" },
  ]

  const liveStreams = [
    {
      id: 1,
      title: "CryptoBoxers Championship Finals - EPIC COMEBACK!",
      streamer: "ProGamer_Elite",
      game: "CryptoBoxers",
      viewers: "12.4K",
      duration: "2:34:22",
      thumbnail: "/placeholder.svg?height=200&width=350&text=Live+Stream+1",
      tags: ["Tournament", "PvP", "Championship"],
      isLive: true,
      category: "Esports",
      language: "English",
      followers: "89K"
    },
    {
      id: 2,
      title: "Token Quest Speedrun World Record Attempt!",
      streamer: "SpeedRunner_X",
      game: "Token Quest",
      viewers: "8.7K",
      duration: "1:45:12",
      thumbnail: "/placeholder.svg?height=200&width=350&text=Live+Stream+2",
      tags: ["Speedrun", "WR Attempt", "Skill"],
      isLive: true,
      category: "Gaming",
      language: "English",
      followers: "45K"
    },
    {
      id: 3,
      title: "Community Game Night - Join the Fun!",
      streamer: "CommunityHub",
      game: "Various Games",
      viewers: "15.2K",
      duration: "3:12:45",
      thumbnail: "/placeholder.svg?height=200&width=350&text=Community+Stream",
      tags: ["Community", "Interactive", "Casual"],
      isLive: true,
      category: "Community",
      language: "English",
      followers: "156K"
    },
    {
      id: 4,
      title: "NFT Trading Masterclass - Learn Pro Strategies",
      streamer: "CryptoTrader_Pro",
      game: "NFT Trading",
      viewers: "6.3K",
      duration: "1:28:33",
      thumbnail: "/placeholder.svg?height=200&width=350&text=NFT+Trading",
      tags: ["Educational", "NFT", "Trading"],
      isLive: true,
      category: "Education",
      language: "English",
      followers: "78K"
    }
  ]

  const chatMessages = [
    { user: "GameMaster_Pro", message: "This comeback is insane! 🔥", timestamp: "2m ago", role: "moderator", badges: ["mod", "subscriber"] },
    { user: "CryptoKing_99", message: "LET'S GOOO! Best match ever!", timestamp: "2m ago", role: "subscriber", badges: ["subscriber", "veteran"] },
    { user: "NoobPlayer_01", message: "How did he pull that combo off???", timestamp: "3m ago", role: "viewer", badges: [] },
    { user: "StreamSniper", message: "ProGamer_Elite never disappoints! Legend 👑", timestamp: "3m ago", role: "follower", badges: ["follower"] },
    { user: "TourneyFan", message: "This is why I love PlayChange tournaments", timestamp: "4m ago", role: "viewer", badges: [] },
    { user: "EsportsEnthusiast", message: "The skill level here is incredible", timestamp: "4m ago", role: "subscriber", badges: ["subscriber"] },
    { user: "GamingGuru", message: "Teaching us all how it's done 🎮", timestamp: "5m ago", role: "moderator", badges: ["mod"] }
  ]

  const forumCategories = [
    {
      title: "General Discussion",
      description: "Talk about anything PlayChange related",
      posts: 15420,
      topics: 2340,
      icon: MessageSquare,
      color: "from-orange-500 to-red-500",
      lastPost: { user: "CommunityLead", time: "5 min ago", topic: "Welcome New Players!" }
    },
    {
      title: "Game Strategies",
      description: "Share tips, tricks, and winning strategies",
      posts: 8760,
      topics: 1580,
      icon: Gamepad2,
      color: "from-blue-500 to-purple-500",
      lastPost: { user: "StrategyMaster", time: "12 min ago", topic: "CryptoBoxers Advanced Combos" }
    },
    {
      title: "Tournament Central",
      description: "Everything about competitive gaming",
      posts: 12350,
      topics: 890,
      icon: Trophy,
      color: "from-yellow-500 to-orange-500",
      lastPost: { user: "TourneyOrganizer", time: "1 hour ago", topic: "Championship Semi-Finals Results" }
    },
    {
      title: "NFT Marketplace",
      description: "Buy, sell, and trade your digital collectibles",
      posts: 6540,
      topics: 1200,
      icon: Star,
      color: "from-purple-500 to-pink-500",
      lastPost: { user: "NFTCollector", time: "30 min ago", topic: "Rare Trophy Cards Available" }
    },
    {
      title: "Technical Support",
      description: "Get help with technical issues",
      posts: 4320,
      topics: 980,
      icon: Settings,
      color: "from-green-500 to-teal-500",
      lastPost: { user: "SupportTeam", time: "2 hours ago", topic: "Connection Issues - Resolved" }
    },
    {
      title: "Community Events",
      description: "Join community organized events and meetups",
      posts: 3210,
      topics: 450,
      icon: Calendar,
      color: "from-pink-500 to-red-500",
      lastPost: { user: "EventCoordinator", time: "4 hours ago", topic: "Weekly Game Night - This Friday!" }
    }
  ]

  const upcomingTournaments = [
    {
      title: "PlayChange World Championship 2024",
      game: "CryptoBoxers",
      prizePool: "50,000 USDC",
      participants: "2,456",
      startDate: "Dec 15, 2024",
      status: "Registration Open",
      type: "Professional",
      format: "Single Elimination",
      image: "/placeholder.svg?height=100&width=100&text=WC2024"
    },
    {
      title: "Token Quest Speedrun Competition",
      game: "Token Quest",
      prizePool: "15,000 USDC",
      participants: "890",
      startDate: "Dec 8, 2024",
      status: "Starting Soon",
      type: "Speedrun",
      format: "Best Time",
      image: "/placeholder.svg?height=100&width=100&text=Speed"
    },
    {
      title: "Community Cup - Weekly Tournament",
      game: "Various",
      prizePool: "5,000 USDC",
      participants: "1,234",
      startDate: "Every Friday",
      status: "Ongoing",
      type: "Community",
      format: "Round Robin",
      image: "/placeholder.svg?height=100&width=100&text=Cup"
    }
  ]

  const leaderboard = [
    { rank: 1, username: "CryptoGamer_Elite", score: "147,562", trophies: 24, streak: 12, status: "online" },
    { rank: 2, username: "ProPlayer_X", score: "134,789", trophies: 19, streak: 8, status: "in-game" },
    { rank: 3, username: "TokenMaster", score: "128,456", trophies: 17, streak: 15, status: "online" },
    { rank: 4, username: "GameChanger_99", score: "119,234", trophies: 15, streak: 6, status: "offline" },
    { rank: 5, username: "StrategyKing", score: "112,897", trophies: 13, streak: 9, status: "streaming" }
  ]

  const featuredClips = [
    {
      title: "Impossible Comeback in CryptoBoxers!",
      streamer: "ProGamer_Elite",
      views: "45K",
      likes: "3.2K",
      duration: "0:47",
      thumbnail: "/placeholder.svg?height=120&width=200&text=Clip+1"
    },
    {
      title: "World Record Speedrun Attempt",
      streamer: "SpeedRunner_X",
      views: "28K",
      likes: "2.8K",
      duration: "1:23",
      thumbnail: "/placeholder.svg?height=120&width=200&text=Clip+2"
    },
    {
      title: "Epic NFT Trade Gone Wrong",
      streamer: "CryptoTrader_Pro",
      views: "67K",
      likes: "4.1K",
      duration: "2:15",
      thumbnail: "/placeholder.svg?height=120&width=200&text=Clip+3"
    }
  ]

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
            PLAYERS LOUNGE
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
            STREAM • COMPETE • CONNECT
          </motion.p>
        </motion.div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {communityStats.map((stat, index) => (
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
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </motion.div>
                <div className="text-3xl font-black text-orange-400 mb-2 font-orbitron">{stat.value}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800/50 rounded-2xl p-2 backdrop-blur-sm border border-gray-700">
            {["streaming-now", "streamers", "forums", "tournaments", "leaderboard", "clips"].map((tab) => (
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
          {/* Streaming Now Section */}
          {activeTab === "streaming-now" && (
            <motion.div
              key="streaming-now"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="max-w-7xl mx-auto"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Stream Player */}
                <div className="lg:col-span-2">
                  <Card className="bg-gray-800/50 border-gray-700 overflow-hidden backdrop-blur-sm">
                    {/* Stream Video */}
                    <div className="relative aspect-video bg-black">
                      <Image
                        src={liveStreams[selectedStream].thumbnail}
                        alt={liveStreams[selectedStream].title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-red-500 text-white font-bold animate-pulse">
                          🔴 LIVE
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4 flex space-x-2">
                        <Badge className="bg-black/70 text-white">
                          👁 {liveStreams[selectedStream].viewers}
                        </Badge>
                        <Badge className="bg-black/70 text-white">
                          ⏱ {liveStreams[selectedStream].duration}
                        </Badge>
                      </div>
                      
                      {/* Stream Controls */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Button
                            size="sm"
                            className="bg-black/70 hover:bg-black/90 text-white"
                            onClick={() => setIsStreamPlaying(!isStreamPlaying)}
                          >
                            {isStreamPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                          </Button>
                          <Button
                            size="sm"
                            className="bg-black/70 hover:bg-black/90 text-white"
                            onClick={() => setIsStreamMuted(!isStreamMuted)}
                          >
                            {isStreamMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                          </Button>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" className="bg-red-500 hover:bg-red-600 text-white">
                            <Heart className="w-4 h-4 mr-1" />
                            Follow
                          </Button>
                          <Button size="sm" className="bg-black/70 hover:bg-black/90 text-white">
                            <Maximize className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Stream Info */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-2 font-exo2">
                        {liveStreams[selectedStream].title}
                      </h3>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <Image
                            src="/placeholder.svg?height=40&width=40&text=Avatar"
                            alt={liveStreams[selectedStream].streamer}
                            width={40}
                            height={40}
                            className="rounded-full"
                          />
                          <div>
                            <div className="font-bold text-orange-400">{liveStreams[selectedStream].streamer}</div>
                            <div className="text-sm text-gray-400">{liveStreams[selectedStream].followers} followers</div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          {liveStreams[selectedStream].tags.map((tag, index) => (
                            <Badge key={index} className="bg-orange-500/20 text-orange-400 border border-orange-500/50">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-gray-400">
                          Playing: <span className="text-white font-bold">{liveStreams[selectedStream].game}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-black font-bold">
                            <ThumbsUp className="w-4 h-4 mr-1" />
                            Like
                          </Button>
                          <Button size="sm" className="bg-gray-700 hover:bg-gray-600 text-white">
                            <Share className="w-4 h-4 mr-1" />
                            Share
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Stream Grid */}
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    {liveStreams.filter((_, index) => index !== selectedStream).map((stream, index) => (
                      <motion.div
                        key={stream.id}
                        className="cursor-pointer group"
                        onClick={() => setSelectedStream(liveStreams.findIndex(s => s.id === stream.id))}
                        whileHover={{ scale: 1.02 }}
                      >
                        <Card className="bg-gray-800/50 border-gray-700 overflow-hidden group-hover:border-orange-500 transition-all duration-300 backdrop-blur-sm">
                          <div className="relative aspect-video">
                            <Image
                              src={stream.thumbnail}
                              alt={stream.title}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute top-2 left-2">
                              <Badge className="bg-red-500 text-white text-xs animate-pulse">
                                LIVE
                              </Badge>
                            </div>
                            <div className="absolute top-2 right-2">
                              <Badge className="bg-black/70 text-white text-xs">
                                {stream.viewers}
                              </Badge>
                            </div>
                            <div className="absolute bottom-2 right-2">
                              <Badge className="bg-black/70 text-white text-xs">
                                {stream.duration}
                              </Badge>
                            </div>
                          </div>
                          <div className="p-4">
                            <h4 className="font-bold text-white text-sm mb-1 line-clamp-2 group-hover:text-orange-400 transition-colors">
                              {stream.title}
                            </h4>
                            <div className="text-xs text-gray-400">{stream.streamer}</div>
                            <div className="text-xs text-gray-500">{stream.game}</div>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Live Chat */}
                <div className="lg:col-span-1">
                  <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm h-full">
                    <div className="p-4 border-b border-gray-700">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-white">Stream Chat</h3>
                        <div className="flex items-center space-x-2">
                          <Badge className="bg-green-500 text-white text-xs">
                            🟢 {Math.floor(Math.random() * 500) + 100} chatting
                          </Badge>
                          <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                            <Settings className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="h-96 overflow-y-auto p-4 space-y-3">
                      {chatMessages.map((message, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start space-x-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Image
                            src="/placeholder.svg?height=24&width=24&text=U"
                            alt={message.user}
                            width={24}
                            height={24}
                            className="rounded-full flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-1 mb-1">
                              <span className={`font-bold text-sm ${
                                message.role === 'moderator' ? 'text-green-400' : 
                                message.role === 'subscriber' ? 'text-orange-400' : 'text-white'
                              }`}>
                                {message.user}
                              </span>
                              {message.badges.map((badge, badgeIndex) => (
                                <span
                                  key={badgeIndex}
                                  className={`text-xs px-1 rounded ${
                                    badge === 'mod' ? 'bg-green-500 text-white' :
                                    badge === 'subscriber' ? 'bg-orange-500 text-black' :
                                    badge === 'veteran' ? 'bg-purple-500 text-white' :
                                    'bg-gray-500 text-white'
                                  }`}
                                >
                                  {badge}
                                </span>
                              ))}
                              <span className="text-xs text-gray-500">{message.timestamp}</span>
                            </div>
                            <div className="text-sm text-gray-300 break-words">{message.message}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="p-4 border-t border-gray-700">
                      <div className="flex items-center space-x-2">
                        <input
                          type="text"
                          placeholder="Type in chat..."
                          value={chatMessage}
                          onChange={(e) => setChatMessage(e.target.value)}
                          className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none text-sm"
                        />
                        <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-black font-bold">
                          <Send className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex space-x-1">
                          <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-1">
                            😀
                          </Button>
                          <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-1">
                            🎮
                          </Button>
                          <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-1">
                            🔥
                          </Button>
                        </div>
                        <Button size="sm" variant="ghost" className="text-gray-400 hover:text-orange-400">
                          <Gift className="w-4 h-4 mr-1" />
                          Gift
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </motion.div>
          )}

          {/* Streamers Section */}
          {activeTab === "streamers" && (
            <motion.div
              key="streamers"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="max-w-6xl mx-auto"
            >
              {/* Profile Building Message for New Visitors */}
              <motion.div
                className="bg-gradient-to-r from-orange-500/10 to-purple-500/10 border border-orange-500/30 rounded-2xl p-8 mb-12"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="text-center">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="w-16 h-16 mx-auto mb-4"
                  >
                    <Sparkles className="w-16 h-16 text-orange-500" />
                  </motion.div>
                  <h3 className="text-2xl font-black text-white mb-4 font-exo2">Start Your Streaming Journey!</h3>
                  <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                    Build your profile, showcase your skills, and earn from your gaming passion. Our streamers earn 
                    up to <span className="text-orange-400 font-bold">$5,000+/month</span> through subscriptions, 
                    donations, and exclusive tournaments.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-8 py-4">
                      <Video className="w-5 h-5 mr-2" />
                      Start Streaming
                    </Button>
                    <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black px-8 py-4">
                      Learn About Earnings
                    </Button>
                  </div>
                </div>
              </motion.div>

              {/* Filter Options */}
              <div className="flex flex-wrap gap-3 mb-8">
                {["All Streamers", "Top Earners", "New Streamers", "Live Now", "Most Followed"].map((filter, index) => (
                  <Button
                    key={filter}
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:border-orange-500 hover:text-orange-400"
                  >
                    {filter}
                  </Button>
                ))}
              </div>

              {/* Active and Popular Streamers Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {liveStreams.map((stream, index) => (
                  <motion.div
                    key={stream.id}
                    className="group cursor-pointer"
                    whileHover={{ scale: 1.03, y: -5 }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="bg-gray-800/50 border-gray-700 overflow-hidden group-hover:border-orange-500 transition-all duration-300 backdrop-blur-sm">
                      {/* Streamer Profile Header */}
                      <div className="relative p-6 bg-gradient-to-r from-gray-800/50 to-gray-900/50">
                        <div className="flex items-center space-x-4">
                          <div className="relative">
                            <Image
                              src="/placeholder.svg?height=60&width=60&text=Avatar"
                              alt={stream.streamer}
                              width={60}
                              height={60}
                              className="rounded-full border-2 border-orange-500/50"
                            />
                            <div className="absolute -bottom-1 -right-1">
                              <Badge className="bg-red-500 text-white text-xs animate-pulse">
                                LIVE
                              </Badge>
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                              {stream.streamer}
                            </h3>
                            <div className="text-sm text-gray-400">{stream.followers} followers</div>
                            <div className="text-sm text-orange-400">Playing {stream.game}</div>
                          </div>
                          <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-black font-bold">
                            <UserPlus className="w-4 h-4 mr-1" />
                            Follow
                          </Button>
                        </div>
                      </div>

                      {/* Current Stream Preview */}
                      <div className="relative aspect-video">
                        <Image
                          src={stream.thumbnail}
                          alt={stream.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                        
                        {/* Stream Stats Overlay */}
                        <div className="absolute top-3 left-3 flex space-x-2">
                          <Badge className="bg-black/70 text-white text-xs">
                            👁 {stream.viewers}
                          </Badge>
                          <Badge className="bg-black/70 text-white text-xs">
                            ⏱ {stream.duration}
                          </Badge>
                        </div>

                        {/* Play Button */}
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100"
                          initial={false}
                        >
                          <Button className="bg-orange-500 hover:bg-orange-600 text-black rounded-full p-4">
                            <Play className="w-6 h-6 fill-current" />
                          </Button>
                        </motion.div>
                      </div>

                      {/* Stream Info */}
                      <div className="p-4">
                        <h4 className="font-bold text-white mb-2 line-clamp-2 group-hover:text-orange-400 transition-colors">
                          {stream.title}
                        </h4>
                        <div className="flex items-center justify-between">
                          <div className="flex space-x-1">
                            {stream.tags.slice(0, 2).map((tag, tagIndex) => (
                              <Badge key={tagIndex} className="bg-orange-500/20 text-orange-400 border border-orange-500/50 text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button size="sm" variant="ghost" className="text-gray-400 hover:text-red-500 p-1">
                              <Heart className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-1">
                              <Share className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Featured Streamers of the Week */}
              <motion.div
                className="mt-16"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="text-3xl font-black text-white mb-8 font-exo2 text-center">
                  🌟 Featured Streamers This Week
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { name: "CryptoGamer_Elite", specialty: "Tournament Champion", earnings: "$8,200", badge: "Crown" },
                    { name: "SpeedRunner_X", specialty: "World Record Holder", earnings: "$5,900", badge: "Lightning" },
                    { name: "CommunityHub", specialty: "Community Builder", earnings: "$7,500", badge: "Heart" }
                  ].map((streamer, index) => (
                    <motion.div
                      key={streamer.name}
                      className="text-center"
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <Card className="bg-gradient-to-br from-orange-500/20 to-purple-500/20 border-orange-500/50 p-6">
                        <div className="relative w-20 h-20 mx-auto mb-4">
                          <Image
                            src="/placeholder.svg?height=80&width=80&text=Star"
                            alt={streamer.name}
                            width={80}
                            height={80}
                            className="rounded-full border-2 border-orange-500"
                          />
                          <motion.div
                            className="absolute -top-2 -right-2"
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          >
                            {streamer.badge === "Crown" && <Crown className="w-8 h-8 text-yellow-500" />}
                            {streamer.badge === "Lightning" && <Zap className="w-8 h-8 text-blue-500" />}
                            {streamer.badge === "Heart" && <Heart className="w-8 h-8 text-red-500" />}
                          </motion.div>
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2">{streamer.name}</h4>
                        <p className="text-orange-400 mb-2">{streamer.specialty}</p>
                        <Badge className="bg-green-500 text-black font-bold">
                          💰 {streamer.earnings} this month
                        </Badge>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Forums Section */}
          {activeTab === "forums" && (
            <motion.div
              key="forums"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="max-w-6xl mx-auto"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {forumCategories.map((category, index) => (
                  <motion.div
                    key={index}
                    className="group cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="bg-gray-800/50 border-gray-700 p-6 group-hover:border-orange-500 transition-all duration-300 backdrop-blur-sm h-full">
                      <div className="flex items-start space-x-4">
                        <motion.div
                          className={`w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-r ${category.color}`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <category.icon className="w-8 h-8 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors font-exo2">
                            {category.title}
                          </h3>
                          <p className="text-gray-400 mb-4 text-sm">{category.description}</p>
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                              <div className="text-2xl font-bold text-orange-400">{category.posts.toLocaleString()}</div>
                              <div className="text-xs text-gray-500">Posts</div>
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-orange-400">{category.topics.toLocaleString()}</div>
                              <div className="text-xs text-gray-500">Topics</div>
                            </div>
                          </div>
                          <div className="border-t border-gray-700 pt-3">
                            <div className="text-xs text-gray-500 mb-1">Latest Activity</div>
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="text-sm font-medium text-white line-clamp-1">{category.lastPost.topic}</div>
                                <div className="text-xs text-gray-400">by {category.lastPost.user}</div>
                              </div>
                              <div className="text-xs text-orange-400">{category.lastPost.time}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Tournaments Section */}
          {activeTab === "tournaments" && (
            <motion.div
              key="tournaments"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="max-w-6xl mx-auto"
            >
              <div className="space-y-6">
                {upcomingTournaments.map((tournament, index) => (
                  <motion.div
                    key={index}
                    className="group cursor-pointer"
                    whileHover={{ scale: 1.01 }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="bg-gray-800/50 border-gray-700 p-6 group-hover:border-orange-500 transition-all duration-300 backdrop-blur-sm">
                      <div className="flex items-center space-x-6">
                        <div className="relative">
                          <Image
                            src={tournament.image}
                            alt={tournament.title}
                            width={100}
                            height={100}
                            className="rounded-xl"
                          />
                          <div className="absolute -top-2 -right-2">
                            <Badge className={`${
                              tournament.status === "Registration Open" ? "bg-green-500" :
                              tournament.status === "Starting Soon" ? "bg-orange-500" :
                              "bg-blue-500"
                            } text-white font-bold animate-pulse`}>
                              {tournament.status === "Registration Open" && "🟢"}
                              {tournament.status === "Starting Soon" && "🟡"}
                              {tournament.status === "Ongoing" && "🔵"}
                            </Badge>
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors font-exo2">
                                {tournament.title}
                              </h3>
                              <div className="flex items-center space-x-4 text-sm text-gray-400">
                                <span>🎮 {tournament.game}</span>
                                <span>📅 {tournament.startDate}</span>
                                <span>🏆 {tournament.type}</span>
                                <span>⚔️ {tournament.format}</span>
                              </div>
                            </div>
                            <Badge className={`${
                              tournament.status === "Registration Open" ? "bg-green-500" :
                              tournament.status === "Starting Soon" ? "bg-orange-500" :
                              "bg-blue-500"
                            } text-white font-bold`}>
                              {tournament.status}
                            </Badge>
                          </div>
                          
                          <div className="grid grid-cols-3 gap-6 mb-6">
                            <div>
                              <div className="text-orange-400 font-bold text-sm">PRIZE POOL</div>
                              <div className="text-2xl font-black text-white">{tournament.prizePool}</div>
                            </div>
                            <div>
                              <div className="text-orange-400 font-bold text-sm">PARTICIPANTS</div>
                              <div className="text-2xl font-black text-white">{tournament.participants}</div>
                            </div>
                            <div>
                              <div className="text-orange-400 font-bold text-sm">FORMAT</div>
                              <div className="text-lg font-bold text-white">{tournament.format}</div>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <Button className="bg-orange-500 hover:bg-orange-600 text-black font-bold">
                                {tournament.status === "Registration Open" ? "Register Now" : "View Details"}
                              </Button>
                              <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-700">
                                View Bracket
                              </Button>
                            </div>
                            <div className="text-sm text-gray-400">
                              🏅 Winner gets exclusive NFT trophy
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Leaderboard Section */}
          {activeTab === "leaderboard" && (
            <motion.div
              key="leaderboard"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="max-w-4xl mx-auto"
            >
              <div className="space-y-4">
                {leaderboard.map((player, index) => (
                  <motion.div
                    key={index}
                    className="group"
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="bg-gray-800/50 border-gray-700 p-6 group-hover:border-orange-500 transition-all duration-300 backdrop-blur-sm">
                      <div className="flex items-center space-x-6">
                        <motion.div
                          className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-xl ${
                            player.rank <= 3 ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-black" : "bg-gray-700 text-white"
                          }`}
                          animate={{
                            boxShadow: player.rank <= 3 ? [
                              "0 0 10px rgba(255, 215, 0, 0.5)",
                              "0 0 20px rgba(255, 215, 0, 0.8)",
                              "0 0 10px rgba(255, 215, 0, 0.5)",
                            ] : "none",
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                          }}
                        >
                          {player.rank <= 3 && <Crown className="w-6 h-6" />}
                          {player.rank > 3 && player.rank}
                        </motion.div>

                        <Image
                          src="/placeholder.svg?height=50&width=50&text=Avatar"
                          alt={player.username}
                          width={50}
                          height={50}
                          className="rounded-full"
                        />

                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                              {player.username}
                            </h3>
                            <Badge className={`${
                              player.status === 'online' ? 'bg-green-500' :
                              player.status === 'in-game' ? 'bg-blue-500' :
                              player.status === 'streaming' ? 'bg-red-500' :
                              'bg-gray-500'
                            } text-white text-xs`}>
                              {player.status}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-6 text-sm text-gray-400">
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4 text-yellow-500" />
                              <span>{player.score}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Trophy className="w-4 h-4 text-orange-500" />
                              <span>{player.trophies}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Flame className="w-4 h-4 text-red-500" />
                              <span>{player.streak} streak</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Button
                            size="sm"
                            className="bg-orange-500 hover:bg-orange-600 text-black font-bold opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <UserPlus className="w-4 h-4 mr-1" />
                            Follow
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-gray-600 text-white hover:bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            Profile
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Clips Section */}
          {activeTab === "clips" && (
            <motion.div
              key="clips"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="max-w-6xl mx-auto"
            >
              <div className="grid md:grid-cols-3 gap-6">
                {featuredClips.map((clip, index) => (
                  <motion.div
                    key={index}
                    className="group cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="bg-gray-800/50 border-gray-700 overflow-hidden group-hover:border-orange-500 transition-all duration-300 backdrop-blur-sm">
                      <div className="relative aspect-video">
                        <Image
                          src={clip.thumbnail}
                          alt={clip.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                          <motion.div
                            className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                            whileHover={{ scale: 1.1 }}
                          >
                            <Play className="w-8 h-8 text-black ml-1" />
                          </motion.div>
                        </div>
                        <div className="absolute bottom-2 right-2">
                          <Badge className="bg-black/70 text-white text-xs">
                            {clip.duration}
                          </Badge>
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold text-white mb-2 line-clamp-2 group-hover:text-orange-400 transition-colors">
                          {clip.title}
                        </h4>
                        <div className="flex items-center justify-between text-sm text-gray-400">
                          <span>{clip.streamer}</span>
                          <div className="flex items-center space-x-3">
                            <span className="flex items-center space-x-1">
                              <Eye className="w-3 h-3" />
                              <span>{clip.views}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <ThumbsUp className="w-3 h-3" />
                              <span>{clip.likes}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default function PlayersLoungePage() {
  return (
    <div className="min-h-stream bg-black text-white relative overflow-hidden">
      <EnhancedBackground />
      <Navigation />
      <div className="pt-24">
        <PlayersLounge />
      </div>
      <Footer />
    </div>
  )
}