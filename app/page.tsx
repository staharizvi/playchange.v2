"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  Play,
  Heart,
  Globe,
  Star,
  Users,
  Coins,
  Gamepad2,
  ChevronDown,
  Eye,
  Search,
  Menu,
  X,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Trophy,
  Shield,
  Target,
  Flame,
  Sparkles,
  CreditCard,
  Wallet,
  Check,
  ChevronRight,
  MessageSquare,
  Joystick,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import Navigation from "@/components/shared/Navigation"
import EnhancedBackground from "@/components/shared/EnhancedBackground"
import Footer from "@/components/shared/Footer"
import AIVirtualAssistant from "@/components/shared/AIVirtualAssistant"
import PlatformIntegration from "@/components/shared/PlatformIntegration"



// Animated stats component
const AnimatedStats = () => {
  const [counts, setCounts] = useState({ community: 0, impact: 0, collections: 0 })

  useEffect(() => {
    const targets = { community: 50, impact: 2, collections: 5 }
    const duration = 2000
    const steps = 60

    const intervals = Object.keys(targets).map((key) => {
      const target = targets[key as keyof typeof targets]
      const increment = target / steps
      let current = 0

      const interval = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(interval)
        }
        setCounts((prev) => ({ ...prev, [key]: Math.floor(current) }))
      }, duration / steps)

      return interval
    })

    return () => intervals.forEach(clearInterval)
  }, [])

  const stats = [
    { label: "Global Community", value: `${counts.community}K+`, icon: Globe },
    { label: "Social Impact", value: `$${counts.impact}M+`, icon: Heart },
    { label: "NFT Collections", value: counts.collections.toString(), icon: Star },
  ]

  return (
    <div className="grid grid-cols-3 gap-8 mb-12">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="text-center"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            delay: 1.2 + index * 0.2,
            duration: 0.8,
            type: "spring",
            stiffness: 100,
          }}
          whileHover={{
            scale: 1.1,
            y: -10,
            transition: { duration: 0.3 },
          }}
        >
          <motion.div
            className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-orange-500/20 border-2 border-orange-500/50"
            whileHover={{
              boxShadow: "0 0 30px rgba(255, 111, 0, 0.6)",
              borderColor: "rgba(255, 111, 0, 0.8)",
            }}
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
              ease: "easeInOut",
            }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <stat.icon className="w-8 h-8 text-orange-500" />
            </motion.div>
          </motion.div>
          <motion.div
            className="text-3xl font-black font-orbitron mb-2 text-orange-500"
            animate={{
              textShadow: [
                "0 0 10px rgba(255, 111, 0, 0.5)",
                "0 0 20px rgba(255, 111, 0, 0.8)",
                "0 0 10px rgba(255, 111, 0, 0.5)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            {stat.value}
          </motion.div>
          <div className="text-gray-400 font-medium">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  )
}

// Hero Banner with original background
const HeroBanner = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-black mb-6 font-exo2 text-white"
            animate={{
              textShadow: [
                "0 0 20px rgba(255, 255, 255, 0.5)",
                "0 0 40px rgba(255, 111, 0, 0.8)",
                "0 0 20px rgba(255, 255, 255, 0.5)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            Play
            <motion.span
              className="text-orange-500"
              animate={{
                scale: [1, 1.05, 1],
                textShadow: [
                  "0 0 20px rgba(255, 111, 0, 0.8)",
                  "0 0 40px rgba(255, 111, 0, 1)",
                  "0 0 20px rgba(255, 111, 0, 0.8)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              Change
            </motion.span>
            .io
          </motion.h1>

          <motion.div
            className="text-2xl md:text-3xl mb-4 font-orbitron font-bold"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.span
              className="text-orange-500"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0 }}
            >
              IN
            </motion.span>{" "}
            <motion.span
              className="text-white"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.3 }}
            >
              GAMES
            </motion.span>{" "}
            <motion.span
              className="text-orange-400"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.6 }}
            >
              WE
            </motion.span>{" "}
            <motion.span
              className="text-orange-500"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.9 }}
            >
              TRUST
            </motion.span>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl mb-12 text-gray-300 max-w-4xl mx-auto font-exo2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            The ultimate gaming platform where trust meets innovation. Join millions of gamers in a revolutionary
            ecosystem built on blockchain technology.
          </motion.p>

          <AnimatedStats />

          {/* Enhanced buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <Link href="/games">
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 50px rgba(255, 111, 0, 0.8)",
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(255, 111, 0, 0.5)",
                    "0 0 40px rgba(255, 111, 0, 0.8)",
                    "0 0 20px rgba(255, 111, 0, 0.5)",
                  ],
                }}
                transition={{
                  boxShadow: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                }}
              >
                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-bold px-12 py-6 text-xl rounded-full shadow-2xl font-exo2 relative overflow-hidden group">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full"
                    transition={{ duration: 0.8 }}
                  />
                  <span className="flex items-center relative z-10">
                    START PLAYING
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <ArrowRight className="ml-3 w-6 h-6" />
                    </motion.div>
                  </span>
                </Button>
              </motion.div>
            </Link>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black px-12 py-6 text-xl bg-transparent rounded-full font-exo2 relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-orange-500/20 scale-x-0 group-hover:scale-x-100 origin-left"
                  transition={{ duration: 0.3 }}
                />
                <span className="flex items-center relative z-10">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <Play className="mr-3 w-6 h-6" />
                  </motion.div>
                  WATCH TRAILER
                </span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Animated scroll indicator */}
          <motion.div
            className="flex justify-center"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              animate={{
                boxShadow: [
                  "0 0 10px rgba(255, 111, 0, 0.5)",
                  "0 0 30px rgba(255, 111, 0, 0.8)",
                  "0 0 10px rgba(255, 111, 0, 0.5)",
                ],
              }}
              transition={{
                boxShadow: { duration: 2, repeat: Number.POSITIVE_INFINITY },
              }}
              className="p-2 rounded-full"
            >
              <ChevronDown className="w-8 h-8 text-orange-500" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Games People Are Playing Section
const TrendingGames = () => {
  const trendingGames = [
    {
      rank: 1,
      title: "CryptoBoxers Championship",
      players: "24.5K",
      change: "+15%",
      image: "/placeholder.svg?height=80&width=80&text=CB",
    },
    {
      rank: 2,
      title: "Eco Warriors",
      players: "18.2K",
      change: "+8%",
      image: "/placeholder.svg?height=80&width=80&text=EW",
    },
    {
      rank: 3,
      title: "Token Quest",
      players: "16.7K",
      change: "+12%",
      image: "/placeholder.svg?height=80&width=80&text=TQ",
    },
    {
      rank: 4,
      title: "Social Impact Racing",
      players: "14.3K",
      change: "+5%",
      image: "/placeholder.svg?height=80&width=80&text=SIR",
    },
    {
      rank: 5,
      title: "Players Lounge",
      players: "12.8K",
      change: "+22%",
      image: "/placeholder.svg?height=80&width=80&text=PL",
    },
    {
      rank: 6,
      title: "Retro Arcade Masters",
      players: "11.4K",
      change: "+7%",
      image: "/placeholder.svg?height=80&width=80&text=RAM",
    },
    {
      rank: 7,
      title: "Blockchain Battles",
      players: "9.9K",
      change: "+3%",
      image: "/placeholder.svg?height=80&width=80&text=BB",
    },
    {
      rank: 8,
      title: "NFT Legends",
      players: "8.6K",
      change: "+18%",
      image: "/placeholder.svg?height=80&width=80&text=NL",
    },
    {
      rank: 9,
      title: "Crypto Clash",
      players: "7.2K",
      change: "+9%",
      image: "/placeholder.svg?height=80&width=80&text=CC",
    },
    {
      rank: 10,
      title: "Digital Dynasty",
      players: "6.8K",
      change: "+14%",
      image: "/placeholder.svg?height=80&width=80&text=DD",
    },
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900 relative">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-6xl md:text-7xl font-black mb-4 font-exo2"
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
            GAMES PEOPLE ARE PLAYING
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
            TOP 10 TRENDING NOW
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 max-w-6xl mx-auto">
          {trendingGames.map((game, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, x: 10 }}
            >
              <Card className="bg-gray-900/50 border-gray-700 p-4 group-hover:border-orange-500 transition-all duration-300 backdrop-blur-sm">
                <div className="flex items-center space-x-4">
                  {/* Rank */}
                  <motion.div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-xl ${
                      game.rank <= 3 ? "bg-orange-500 text-black" : "bg-gray-700 text-white"
                    }`}
                    animate={{
                      boxShadow:
                        game.rank <= 3
                          ? [
                              "0 0 10px rgba(255, 111, 0, 0.5)",
                              "0 0 20px rgba(255, 111, 0, 0.8)",
                              "0 0 10px rgba(255, 111, 0, 0.5)",
                            ]
                          : "none",
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    {game.rank}
                  </motion.div>

                  {/* Game Image */}
                  <div className="w-16 h-16 rounded-lg overflow-hidden">
                    <Image
                      src={game.image || "/placeholder.svg"}
                      alt={game.title}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Game Info */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white group-hover:text-orange-500 transition-colors font-exo2">
                      {game.title}
                    </h3>
                    <div className="flex items-center space-x-4 mt-1">
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4 text-orange-500" />
                        <span className="text-orange-400 font-bold">{game.players}</span>
                      </div>
                      <Badge
                        className={`${
                          Number.parseFloat(game.change.replace("%", "")) > 10 ? "bg-green-500" : "bg-orange-500"
                        } text-black font-bold`}
                      >
                        {game.change}
                      </Badge>
                    </div>
                  </div>

                  {/* Play Button */}
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button className="bg-orange-500 hover:bg-orange-600 text-black font-bold">
                      <Play className="w-4 h-4" />
                    </Button>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Enhanced Game Categories with Retro Games
const EnhancedGameCategories = () => {
  const [activeCategory, setActiveCategory] = useState(0)
  const [isAutoSliding, setIsAutoSliding] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Alphabetically ordered categories with Retro Games
  const categories = [
    {
      title: "ACTION GAMES",
      icon: Flame,
      count: "12 Games",
      description: "High-octane adventures that reward skill and strategy",
      games: ["CryptoBoxers", "Battle Royale", "Arena Masters", "Combat Zone"],
      color: "from-orange-600 to-red-500",
      bgImage: "/placeholder.svg?height=400&width=600&text=Action+Games",
    },
    {
      title: "NFT COLLECTION",
      icon: Sparkles,
      count: "6 Collections",
      description: "Unique digital assets that unlock exclusive content",
      games: ["CryptoBoxers NFT", "Legendary Cards", "Rare Artifacts", "Digital Pets"],
      color: "from-orange-500 to-purple-500",
      bgImage: "/placeholder.svg?height=400&width=600&text=NFT+Games",
    },
    {
      title: "RETRO GAMES",
      icon: Joystick,
      count: "18 Games",
      description: "Classic arcade experiences with modern blockchain rewards",
      games: ["Pixel Warriors", "Retro Racers", "8-Bit Adventures", "Arcade Masters"],
      color: "from-orange-400 to-pink-500",
      bgImage: "/placeholder.svg?height=400&width=600&text=Retro+Games",
    },
    {
      title: "SOCIAL IMPACT",
      icon: Heart,
      count: "15 Games",
      description: "Games that make a real difference in the world",
      games: ["Eco Warriors", "Players Lounge", "Charity Champions", "Green Planet"],
      color: "from-orange-400 to-green-500",
      bgImage: "/placeholder.svg?height=400&width=600&text=Social+Games",
    },
    {
      title: "STRATEGY GAMES",
      icon: Target,
      count: "8 Games",
      description: "Think, plan, and conquer in these mind-bending challenges",
      games: ["Empire Builder", "Resource Wars", "Tactical Command", "City Planner"],
      color: "from-orange-500 to-blue-500",
      bgImage: "/placeholder.svg?height=400&width=600&text=Strategy+Games",
    },
  ]

  useEffect(() => {
    if (isAutoSliding) {
      intervalRef.current = setInterval(() => {
        setActiveCategory((prev) => (prev + 1) % categories.length)
      }, 4000)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isAutoSliding, categories.length])

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Animated grid background */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 111, 0, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 111, 0, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "100px 100px"],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <div className="container mx-auto relative z-10">
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
            GAME CATEGORIES
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
            DISCOVER YOUR PERFECT GAME
          </motion.p>
        </motion.div>

        {/* Interactive sliding panels */}
        <div
          className="relative h-[500px] rounded-3xl overflow-hidden"
          onMouseEnter={() => setIsAutoSliding(false)}
          onMouseLeave={() => setIsAutoSliding(true)}
        >
          <div className="flex h-full">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                className={`relative cursor-pointer transition-all duration-700 ease-out ${
                  index === activeCategory ? "flex-[3]" : "flex-1"
                }`}
                onClick={() => setActiveCategory(index)}
                whileHover={{ scale: index === activeCategory ? 1 : 1.02 }}
              >
                {/* Background */}
                <div className="absolute inset-0">
                  <Image
                    src={category.bgImage || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-40`} />
                </div>

                {/* Animated effects */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/30 to-orange-500/0"
                  animate={{
                    x: index === activeCategory ? ["-100%", "100%"] : "0%",
                  }}
                  transition={{
                    duration: 2,
                    repeat: index === activeCategory ? Number.POSITIVE_INFINITY : 0,
                    ease: "linear",
                  }}
                />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between p-8">
                  {/* Icon and title */}
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-4"
                      animate={{
                        scale: index === activeCategory ? [1, 1.2, 1] : 1,
                        rotate: index === activeCategory ? [0, 360] : 0,
                      }}
                      transition={{
                        scale: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                        rotate: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                      }}
                    >
                      <category.icon className="w-8 h-8 text-black" />
                    </motion.div>

                    <motion.h3
                      className={`font-black font-exo2 text-white mb-2 transition-all duration-500 ${
                        index === activeCategory ? "text-3xl" : "text-xl"
                      }`}
                      animate={{
                        textShadow:
                          index === activeCategory
                            ? [
                                "0 0 10px rgba(255, 111, 0, 0.5)",
                                "0 0 30px rgba(255, 111, 0, 0.8)",
                                "0 0 10px rgba(255, 111, 0, 0.5)",
                              ]
                            : "none",
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    >
                      {category.title}
                    </motion.h3>

                    <Badge className="bg-orange-500 text-black font-bold">{category.count}</Badge>
                  </div>

                  {/* Expanded content */}
                  <AnimatePresence>
                    {index === activeCategory && (
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                      >
                        <p className="text-gray-300 mb-6 text-lg font-exo2">{category.description}</p>

                        <div className="space-y-2 mb-6">
                          {category.games.map((game, gameIndex) => (
                            <motion.div
                              key={gameIndex}
                              className="bg-black/50 rounded-lg px-4 py-2 text-orange-400 font-medium"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: gameIndex * 0.1 }}
                            >
                              {game}
                            </motion.div>
                          ))}
                        </div>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-6 py-3 rounded-full">
                            EXPLORE CATEGORY
                          </Button>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Active indicator */}
                {index === activeCategory && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Category navigation */}
        <div className="flex justify-center mt-12 space-x-4">
          {categories.map((_, index) => (
            <motion.button
              key={index}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === activeCategory ? "bg-orange-500 w-12" : "bg-white/30"
              }`}
              onClick={() => setActiveCategory(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// NFT Trophy Showcase
const TrophyShowcase = () => {
  const [selectedTrophy, setSelectedTrophy] = useState(0)

  const trophies = [
    {
      name: "Champion's Crown",
      rarity: "Legendary",
      description: "Awarded to CryptoBoxers Championship winners",
      image: "/placeholder.svg?height=200&width=200&text=Crown",
      value: "2.5 ETH",
      owner: "CryptoGamer_Pro",
      achievements: ["First Place", "Undefeated", "Fan Favorite"],
      glow: "from-yellow-400 to-orange-500",
    },
    {
      name: "Eco Warrior Badge",
      rarity: "Epic",
      description: "For making significant environmental impact",
      image: "/placeholder.svg?height=200&width=200&text=Badge",
      value: "1.2 ETH",
      owner: "GreenGamer",
      achievements: ["Carbon Neutral", "Tree Planter", "Ocean Cleaner"],
      glow: "from-green-400 to-blue-500",
    },
    {
      name: "Social Impact Medal",
      rarity: "Rare",
      description: "Recognizing community building excellence",
      image: "/placeholder.svg?height=200&width=200&text=Medal",
      value: "0.8 ETH",
      owner: "CommunityBuilder",
      achievements: ["Helper", "Mentor", "Leader"],
      glow: "from-purple-400 to-pink-500",
    },
    {
      name: "Retro Master Trophy",
      rarity: "Epic",
      description: "Master of classic arcade games",
      image: "/placeholder.svg?height=200&width=200&text=Trophy",
      value: "1.5 ETH",
      owner: "RetroKing",
      achievements: ["High Score", "Speed Run", "Perfect Game"],
      glow: "from-orange-400 to-red-500",
    },
  ]

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Crypto-themed background */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 2, 0],
              opacity: [0, 1, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 6,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
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
              background: "linear-gradient(90deg, #ffffff, #ffd700, #ff6f00, #ffffff)",
              backgroundSize: "300% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            TROPHY ROOM
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
            SHOWCASE YOUR ACHIEVEMENTS
          </motion.p>
        </motion.div>

        {/* Featured Trophy Display */}
        <div className="max-w-6xl mx-auto mb-16">
          <motion.div className="relative h-[400px] rounded-3xl overflow-hidden" whileHover={{ scale: 1.02 }}>
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black" />
            <div className={`absolute inset-0 bg-gradient-to-br ${trophies[selectedTrophy].glow} opacity-20`} />

            {/* Animated glow effect */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-r ${trophies[selectedTrophy].glow} opacity-30`}
              animate={{
                background: [
                  `linear-gradient(45deg, transparent, ${trophies[selectedTrophy].glow.split(" ")[1]}, transparent)`,
                  `linear-gradient(225deg, transparent, ${trophies[selectedTrophy].glow.split(" ")[1]}, transparent)`,
                  `linear-gradient(45deg, transparent, ${trophies[selectedTrophy].glow.split(" ")[1]}, transparent)`,
                ],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
              }}
            />

            <div className="relative z-10 h-full flex items-center p-12">
              {/* Trophy Image */}
              <motion.div
                className="w-64 h-64 mr-12"
                animate={{
                  rotateY: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotateY: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  scale: { duration: 4, repeat: Number.POSITIVE_INFINITY },
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={trophies[selectedTrophy].image || "/placeholder.svg"}
                    alt={trophies[selectedTrophy].name}
                    fill
                    className="object-contain"
                  />
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${trophies[selectedTrophy].glow} opacity-50 rounded-full blur-xl`}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />
                </div>
              </motion.div>

              {/* Trophy Details */}
              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Badge
                    className={`mb-4 ${
                      trophies[selectedTrophy].rarity === "Legendary"
                        ? "bg-yellow-500"
                        : trophies[selectedTrophy].rarity === "Epic"
                          ? "bg-purple-500"
                          : "bg-blue-500"
                    } text-black font-bold text-lg px-4 py-2`}
                  >
                    {trophies[selectedTrophy].rarity}
                  </Badge>

                  <motion.h3
                    className="text-5xl font-black mb-4 font-exo2 text-white"
                    animate={{
                      textShadow: [
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
                    {trophies[selectedTrophy].name}
                  </motion.h3>

                  <p className="text-xl text-gray-300 mb-6 font-exo2">{trophies[selectedTrophy].description}</p>

                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-bold mb-2">VALUE</h4>
                      <p className="text-2xl font-black text-white">{trophies[selectedTrophy].value}</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-bold mb-2">OWNER</h4>
                      <p className="text-2xl font-black text-white">{trophies[selectedTrophy].owner}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-orange-500 font-bold mb-3">ACHIEVEMENTS</h4>
                    <div className="flex flex-wrap gap-2">
                      {trophies[selectedTrophy].achievements.map((achievement, index) => (
                        <motion.div
                          key={index}
                          className="bg-orange-500/20 border border-orange-500/50 rounded-lg px-3 py-1 text-orange-400 font-medium"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          {achievement}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trophy Grid */}
        <div className="grid md:grid-cols-4 gap-6">
          {trophies.map((trophy, index) => (
            <motion.div
              key={index}
              className={`cursor-pointer group ${index === selectedTrophy ? "ring-2 ring-orange-500" : ""}`}
              onClick={() => setSelectedTrophy(index)}
              whileHover={{ scale: 1.05, y: -10 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800/50 border-gray-700 overflow-hidden group-hover:border-orange-500 transition-all duration-500 backdrop-blur-sm">
                <div className="relative p-6">
                  <div className="w-24 h-24 mx-auto mb-4 relative">
                    <Image src={trophy.image || "/placeholder.svg"} alt={trophy.name} fill className="object-contain" />
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${trophy.glow} opacity-30 rounded-full blur-lg`}
                      animate={{
                        scale: index === selectedTrophy ? [1, 1.2, 1] : 1,
                        opacity: index === selectedTrophy ? [0.3, 0.6, 0.3] : 0.3,
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    />
                  </div>

                  <h3 className="text-lg font-bold text-white text-center mb-2 font-exo2">{trophy.name}</h3>
                  <Badge
                    className={`mx-auto block w-fit ${
                      trophy.rarity === "Legendary"
                        ? "bg-yellow-500"
                        : trophy.rarity === "Epic"
                          ? "bg-purple-500"
                          : "bg-blue-500"
                    } text-black font-bold`}
                  >
                    {trophy.rarity}
                  </Badge>
                  <p className="text-center text-orange-400 font-bold mt-2">{trophy.value}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Subscription Tiers (Netflix-inspired)
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

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      className={`w-full ${
                        tier.popular
                          ? "bg-orange-500 hover:bg-orange-600 text-black"
                          : "bg-gray-700 hover:bg-gray-600 text-white"
                      } font-bold py-3 text-lg rounded-full transition-all duration-300`}
                    >
                      {index === 0 ? "START FREE TRIAL" : "CHOOSE PLAN"}
                    </Button>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Payment Integration UI
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

          <motion.div className="mt-8" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-bold py-4 text-xl rounded-full">
              Complete Payment
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Players Lounge (Enhanced Community)
const PlayersLounge = () => {
  const [activeTab, setActiveTab] = useState("forums")

  const communityStats = [
    { label: "Active Players", value: "50K+", icon: Users },
    { label: "Daily Messages", value: "125K", icon: MessageSquare },
    { label: "Communities", value: "2.5K", icon: Globe },
    { label: "Events This Week", value: "48", icon: Trophy },
  ]

  const forumTopics = [
    {
      title: "CryptoBoxers Championship Discussion",
      author: "GameMaster_Pro",
      replies: 234,
      views: "12.5K",
      lastActivity: "2 min ago",
      category: "Tournaments",
      pinned: true,
    },
    {
      title: "Best Strategies for Token Quest",
      author: "StrategyKing",
      replies: 89,
      views: "5.2K",
      lastActivity: "15 min ago",
      category: "Strategy",
      pinned: false,
    },
    {
      title: "NFT Trading Tips & Tricks",
      author: "CryptoTrader",
      replies: 156,
      views: "8.7K",
      lastActivity: "1 hour ago",
      category: "Trading",
      pinned: false,
    },
  ]

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-black via-purple-900/10 to-black relative">
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
              background: "linear-gradient(90deg, #ffffff, #a855f7, #ff6f00, #ffffff)",
              backgroundSize: "300% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            PLAYERS LOUNGE
          </motion.h2>
          <motion.p
            className="text-2xl text-purple-400 font-orbitron font-bold"
            animate={{
              textShadow: [
                "0 0 10px rgba(168, 85, 247, 0.5)",
                "0 0 30px rgba(168, 85, 247, 0.8)",
                "0 0 10px rgba(168, 85, 247, 0.5)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
            }}
          >
            CONNECT • COMPETE • COLLABORATE
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
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-purple-500/20 border-2 border-purple-500/50"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(168, 85, 247, 0.3)",
                      "0 0 40px rgba(168, 85, 247, 0.5)",
                      "0 0 20px rgba(168, 85, 247, 0.3)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                >
                  <stat.icon className="w-8 h-8 text-purple-500" />
                </motion.div>
                <div className="text-3xl font-black text-purple-400 mb-2 font-orbitron">{stat.value}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Community Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800/50 rounded-2xl p-2 backdrop-blur-sm border border-gray-700">
            {["forums", "chat", "events", "leaderboard"].map((tab) => (
              <motion.button
                key={tab}
                className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                  activeTab === tab ? "bg-purple-500 text-white" : "text-gray-400 hover:text-purple-400"
                }`}
                onClick={() => setActiveTab(tab)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Community Content */}
        <AnimatePresence mode="wait">
          {activeTab === "forums" && (
            <motion.div
              key="forums"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="max-w-6xl mx-auto"
            >
              <div className="space-y-4">
                {forumTopics.map((topic, index) => (
                  <motion.div
                    key={index}
                    className="group cursor-pointer"
                    whileHover={{ scale: 1.02, x: 10 }}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="bg-gray-800/50 border-gray-700 p-6 group-hover:border-purple-500 transition-all duration-300 backdrop-blur-sm">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            {topic.pinned && <Badge className="bg-orange-500 text-black font-bold">PINNED</Badge>}
                            <Badge className="bg-purple-500/20 text-purple-400 border border-purple-500/50">
                              {topic.category}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors font-exo2 mb-2">
                            {topic.title}
                          </h3>
                          <div className="flex items-center space-x-6 text-gray-400">
                            <span>by {topic.author}</span>
                            <div className="flex items-center space-x-1">
                              <MessageSquare className="w-4 h-4" />
                              <span>{topic.replies} replies</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Eye className="w-4 h-4" />
                              <span>{topic.views} views</span>
                            </div>
                            <span>{topic.lastActivity}</span>
                          </div>
                        </div>
                        <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors" />
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "chat" && (
            <motion.div
              key="chat"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="max-w-4xl mx-auto"
            >
              <Card className="bg-gray-800/50 border-gray-700 h-96 backdrop-blur-sm">
                <div className="p-6 h-full flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-4 font-exo2">Live Chat</h3>
                  <div className="flex-1 bg-gray-900/50 rounded-lg p-4 mb-4 overflow-y-auto">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                          <span className="text-black font-bold text-sm">G</span>
                        </div>
                        <div>
                          <div className="text-orange-500 font-bold text-sm">GameMaster_Pro</div>
                          <div className="text-gray-300">Welcome to the Players Lounge! 🎮</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">P</span>
                        </div>
                        <div>
                          <div className="text-purple-400 font-bold text-sm">ProGamer123</div>
                          <div className="text-gray-300">Just finished an epic CryptoBoxers match!</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <input
                      type="text"
                      placeholder="Type your message..."
                      className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
                    />
                    <Button className="bg-purple-500 hover:bg-purple-600 text-white">Send</Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

// Strategic Ad Placements
const AdPlacement = ({ type, className = "" }: { type: "banner" | "square" | "native"; className?: string }) => {
  return (
    <motion.div
      className={`bg-gradient-to-r from-gray-800/30 to-gray-700/30 border-2 border-dashed border-gray-600 rounded-lg flex items-center justify-center backdrop-blur-sm ${className}`}
      whileHover={{ scale: 1.02, borderColor: "#ff6f00" }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-center p-4">
        <div className="text-gray-400 font-bold mb-2">AD SPACE</div>
        <div className="text-orange-500 text-sm">
          {type === "banner" && "728x90 Banner"}
          {type === "square" && "300x300 Square"}
          {type === "native" && "Native Content"}
        </div>
        <div className="text-gray-500 text-xs mt-1">NFT Collection Launch</div>
      </div>
    </motion.div>
  )
}

// Platform Overview Section
const PlatformOverview = () => {
  const [activeFeature, setActiveFeature] = useState(0)

  const platformFeatures = [
    {
      title: "EPIC GAMES",
      description: "Dive into our diverse game library",
      icon: Gamepad2,
      image: "/placeholder.svg?height=300&width=400&text=Games",
      features: ["5 Game Categories", "50+ Titles", "New Games Weekly", "All Skill Levels"],
      color: "from-orange-500 to-red-500",
      link: "/games"
    },
    {
      title: "PLAYERS LOUNGE",
      description: "Connect with the gaming community",
      icon: Users,
      image: "/placeholder.svg?height=300&width=400&text=Community",
      features: ["Live Streaming", "Discussion Forums", "Tournaments", "Real-time Chat"],
      color: "from-purple-500 to-pink-500",
      link: "/players-lounge"
    },
    {
      title: "NFT MARKETPLACE",
      description: "Trade epic game clips and collectibles",
      icon: Sparkles,
      image: "/placeholder.svg?height=300&width=400&text=NFT",
      features: ["Buy & Sell Clips", "Auction System", "Rarity Levels", "Creator Royalties"],
      color: "from-yellow-500 to-orange-500",
      link: "/nft-marketplace"
    },
    {
      title: "TROPHY ROOM",
      description: "Showcase your gaming achievements",
      icon: Trophy,
      image: "/placeholder.svg?height=300&width=400&text=Trophies",
      features: ["Achievement NFTs", "Rare Collections", "Social Showcase", "Value Tracking"],
      color: "from-yellow-400 to-yellow-600",
      link: "/trophy-room"
    },
    {
      title: "PREMIUM STORE",
      description: "Unlock premium gaming experiences",
      icon: Star,
      image: "/placeholder.svg?height=300&width=400&text=Store",
      features: ["4 Subscription Tiers", "7-Day Free Trial", "Crypto Payments", "Exclusive Access"],
      color: "from-blue-500 to-cyan-500",
      link: "/store"
    },
    {
      title: "24/7 SUPPORT",
      description: "Get help whenever you need it",
      icon: Shield,
      image: "/placeholder.svg?height=300&width=400&text=Support",
      features: ["Live Chat Support", "Knowledge Base", "Community Help", "Priority Response"],
      color: "from-green-500 to-teal-500",
      link: "/support"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % platformFeatures.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-black via-gray-900/20 to-black relative">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
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
            EXPLORE THE PLATFORM
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
            DISCOVER WHAT MAKES US DIFFERENT
          </motion.p>
        </motion.div>

        {/* Featured Section */}
        <motion.div
          className="relative h-[400px] rounded-3xl overflow-hidden mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0">
            <Image
              src={platformFeatures[activeFeature].image}
              alt={platformFeatures[activeFeature].title}
              fill
              className="object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${platformFeatures[activeFeature].color} opacity-60`} />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Animated Scanner Line */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent h-1"
            animate={{
              y: [0, 400, 0],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />

          <div className="relative z-10 h-full flex items-center p-12">
            <motion.div
              className="max-w-2xl"
              key={activeFeature}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="bg-orange-500 text-black font-bold mb-4 text-lg px-4 py-2">
                FEATURED
              </Badge>
              <h3 className="text-5xl font-black text-white mb-4 font-exo2">
                {platformFeatures[activeFeature].title}
              </h3>
              <p className="text-xl text-gray-200 mb-6">
                {platformFeatures[activeFeature].description}
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {platformFeatures[activeFeature].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Check className="w-5 h-5 text-orange-500" />
                    <span className="text-white font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <Link href={platformFeatures[activeFeature].link}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-8 py-4 text-lg rounded-full">
                    Explore Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Platform Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[
            { label: "Active Players", value: "127K+", icon: Users },
            { label: "Games Available", value: "50+", icon: Gamepad2 },
            { label: "NFTs Traded", value: "89K", icon: Sparkles },
            { label: "Community Events", value: "2.4K", icon: Trophy }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="bg-gray-800/30 border-gray-700 p-6 backdrop-blur-sm">
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
                    delay: index * 0.5,
                  }}
                >
                  <stat.icon className="w-8 h-8 text-orange-500" />
                </motion.div>
                <div className="text-4xl font-black text-orange-400 mb-2 font-orbitron">{stat.value}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Platform Features Grid */}
        <div className="mb-16">
          <motion.h3
            className="text-4xl font-black text-center mb-12 font-exo2 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            PLATFORM FEATURES
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Link href={feature.link}>
                    <Card className="bg-gray-800/30 border-gray-700 p-6 backdrop-blur-sm h-full hover:border-orange-500/50 transition-all duration-300 cursor-pointer">
                      <div className="text-center">
                        <motion.div
                          className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-gradient-to-r ${feature.color} group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </motion.div>
                        <h4 className="text-xl font-bold text-white mb-2 font-exo2 group-hover:text-orange-400 transition-colors">
                          {feature.title}
                        </h4>
                        <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                          {feature.description}
                        </p>
                        <div className="space-y-2">
                          {feature.features.slice(0, 2).map((featureItem, featureIndex) => (
                            <div key={featureIndex} className="flex items-center justify-center space-x-2">
                              <Check className="w-4 h-4 text-orange-500" />
                              <span className="text-sm text-gray-300">{featureItem}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border-gray-700 p-12 backdrop-blur-sm">
            <h3 className="text-4xl font-black text-white mb-4 font-exo2">Ready to Start Gaming?</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of players in the ultimate gaming experience. Play, earn, and connect in our revolutionary platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/games">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-8 py-4 text-lg rounded-full">
                    <Play className="mr-2 w-5 h-5" />
                    Start Playing
                  </Button>
                </motion.div>
              </Link>
              <Link href="/players-lounge">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black px-8 py-4 text-lg rounded-full">
                    <Users className="mr-2 w-5 h-5" />
                    Join Community
                  </Button>
                </motion.div>
              </Link>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}


export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <EnhancedBackground />
      <Navigation />
      <div className="pt-24">
        <HeroBanner />
        <PlatformOverview />
        
        {/* Platform Integration Showcase */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-black mb-6 font-exo2 text-white">
                CROSS-PLATFORM GAMING
              </h2>
              <p className="text-xl text-orange-400 font-orbitron">
                Seamless integration across all your favorite platforms
              </p>
            </motion.div>
            
            <PlatformIntegration 
              platforms={["playstation", "xbox", "netflix", "twitch"]}
              remoteControlSupport={true}
              streamingEnabled={true}
            />
          </div>
        </section>
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
