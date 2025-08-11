"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  Users,
  Flame,
  Sparkles,
  Heart,
  Target,
  Joystick,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/shared/Navigation"
import Footer from "@/components/shared/Footer"
import EnhancedBackground from "@/components/shared/EnhancedBackground"

// TrendingGames Component
const TrendingGames = () => {
  const trendingGames = [
    {
      id: "1",
      rank: 1,
      title: "CryptoBoxers Championship",
      players: "24.5K",
      change: "+15%",
      image: "/placeholder.svg?height=80&width=80&text=CB",
    },
    {
      id: "2",
      rank: 2,
      title: "Eco Warriors",
      players: "18.2K",
      change: "+8%",
      image: "/placeholder.svg?height=80&width=80&text=EW",
    },
    {
      id: "3",
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

                  <div className="w-16 h-16 rounded-lg overflow-hidden">
                    <Image
                      src={game.image || "/placeholder.svg"}
                      alt={game.title}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>

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

                  <Link href={game.id ? `/games/${game.id}` : "#"}>
                    <Button
                      size="sm"
                      className="bg-orange-500 hover:bg-orange-600 text-black font-bold opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// EnhancedGameCategories Component
const EnhancedGameCategories = () => {
  const [activeCategory, setActiveCategory] = useState(0)
  const [isAutoSliding, setIsAutoSliding] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

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

                <div className="relative z-10 h-full flex flex-col justify-between p-8">
                  <motion.div
                    className="flex items-center mb-4"
                    animate={{
                      scale: index === activeCategory ? [1, 1.1, 1] : 1,
                    }}
                    transition={{
                      duration: 2,
                      repeat: index === activeCategory ? Number.POSITIVE_INFINITY : 0,
                    }}
                  >
                    <category.icon className="w-8 h-8 text-orange-500 mr-3" />
                    <div className="text-orange-400 font-bold font-orbitron">{category.count}</div>
                  </motion.div>

                  <div>
                    <h3
                      className={`font-black font-exo2 mb-4 transition-all duration-500 ${
                        index === activeCategory ? "text-4xl text-white" : "text-lg text-gray-300 writing-mode-vertical"
                      }`}
                      style={
                        index !== activeCategory
                          ? {
                              writingMode: "vertical-rl",
                              textOrientation: "mixed",
                            }
                          : {}
                      }
                    >
                      {category.title}
                    </h3>

                    <AnimatePresence>
                      {index === activeCategory && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          transition={{ delay: 0.3 }}
                        >
                          <p className="text-gray-300 mb-6 text-lg font-exo2 leading-relaxed">
                            {category.description}
                          </p>

                          <div className="grid grid-cols-2 gap-3 mb-6">
                            {category.games.map((game, gameIndex) => (
                              <motion.div
                                key={gameIndex}
                                className="bg-black/30 backdrop-blur-sm rounded-lg p-3 border border-orange-500/20"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 + gameIndex * 0.1 }}
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 111, 0, 0.1)" }}
                              >
                                <div className="text-white font-medium text-sm">{game}</div>
                              </motion.div>
                            ))}
                          </div>

                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                          >
                            <Button className="bg-orange-500 hover:bg-orange-600 text-black font-bold">
                              Explore Category
                              <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {categories.map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeCategory ? "bg-orange-500 w-8" : "bg-gray-600"
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

export default function GamesPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <EnhancedBackground />
      <Navigation />
      <div className="pt-24">
        <TrendingGames />
        <EnhancedGameCategories />
      </div>
      <Footer />
    </div>
  )
}