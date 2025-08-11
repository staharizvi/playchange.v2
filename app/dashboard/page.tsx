"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Home,
  Search,
  Gamepad2,
  Users,
  Bell,
  Settings,
  Download,
  User,
  LogOut,
  Play,
  Star,
  ChevronRight,
  Trophy,
  Target,
  Zap,
  Clock,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

// Gaming sidebar
const GamingSidebar = () => {
  const [activeItem, setActiveItem] = useState("Dashboard")

  const menuItems = [
    { icon: Home, label: "Dashboard", active: true },
    { icon: Search, label: "Search" },
    { icon: Gamepad2, label: "My Games" },
    { icon: Users, label: "Friends" },
    { icon: Bell, label: "Notification" },
    { icon: Settings, label: "Settings" },
    { icon: Download, label: "Downloads", badge: "8" },
    { icon: User, label: "Profile" },
  ]

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-black/95 backdrop-blur-xl border-r border-gray-800 z-50">
      <div className="p-6">
        {/* Logo */}
        <motion.h1 className="text-3xl font-black text-white mb-12" whileHover={{ scale: 1.05 }}>
          HYPER<span className="text-orange-500">TECH</span>
        </motion.h1>

        {/* Navigation */}
        <nav className="space-y-2">
          {menuItems.map((item, index) => (
            <motion.button
              key={index}
              whileHover={{ x: 8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveItem(item.label)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-300 group ${
                activeItem === item.label
                  ? "bg-orange-500/20 text-orange-500 border-l-4 border-orange-500"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <div className="flex items-center space-x-3">
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </div>
              {item.badge && (
                <span className="bg-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">{item.badge}</span>
              )}
            </motion.button>
          ))}
        </nav>

        {/* Logout */}
        <motion.button
          whileHover={{ x: 8, scale: 1.02 }}
          className="w-full flex items-center space-x-3 px-4 py-3 mt-8 text-gray-400 hover:text-red-400 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </motion.button>
      </div>
    </div>
  )
}

// Gaming header
const GamingHeader = () => {
  return (
    <header className="bg-black/50 backdrop-blur-xl border-b border-gray-800 p-6 sticky top-0 z-30">
      <div className="flex items-center justify-between">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            placeholder="Search"
            className="pl-12 pr-4 py-3 bg-gray-900/50 border-gray-700 focus:border-orange-500 rounded-full text-white placeholder-gray-400"
          />
        </div>

        {/* User profile */}
        <div className="flex items-center space-x-4">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button variant="ghost" size="sm" className="relative hover:bg-orange-500/20">
              <Bell className="w-6 h-6 text-gray-400 hover:text-orange-500 transition-colors" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full"></span>
            </Button>
          </motion.div>

          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-bold text-white">Lexy Adeolu</p>
              <p className="text-sm text-gray-400">lexyadeoolu@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

// Hero banner
const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "CALL OF DUTY 6",
      subtitle: "Do not miss the beginning of the New Season.",
      image: "/images/cod6-hero.png",
      buttons: ["Download", "Watch Trailer"],
    },
  ]

  return (
    <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 h-full flex items-center p-12">
        <div className="max-w-lg">
          <motion.h1
            className="text-5xl font-black text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {slides[currentSlide].title}
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {slides[currentSlide].subtitle}
          </motion.p>

          <div className="flex space-x-4">
            <Button className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-8 py-3">Download</Button>
            <Button
              variant="outline"
              className="border-white/30 text-white hover:bg-white hover:text-black px-8 py-3 bg-transparent"
            >
              <Play className="w-4 h-4 mr-2" />
              Watch Trailer
            </Button>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {[0, 1, 2, 3].map((index) => (
          <div key={index} className={`w-3 h-3 rounded-full ${index === 0 ? "bg-orange-500" : "bg-white/30"}`} />
        ))}
      </div>
    </div>
  )
}

// Game categories
const GameCategories = () => {
  const [activeCategory, setActiveCategory] = useState("Sports")

  const categories = [
    { name: "Sports", icon: Trophy },
    { name: "Wars", icon: Target },
    { name: "Puzzles", icon: Zap },
    { name: "Racing", icon: Clock },
  ]

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-white mb-6">GAMES CATEGORIES</h2>
      <div className="flex space-x-4">
        {categories.map((category) => (
          <motion.button
            key={category.name}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory(category.name)}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              activeCategory === category.name
                ? "bg-orange-500 text-black"
                : "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"
            }`}
          >
            <category.icon className="w-4 h-4" />
            <span>{category.name}</span>
          </motion.button>
        ))}
      </div>
    </div>
  )
}

// Popular games grid
const PopularGames = () => {
  const games = [
    {
      title: "Battle Grounds",
      description: "Lorem ipsum nibeuowl gyf nibeugnfvds dh dafndsa",
      image: "/images/battle-grounds.png",
      rating: 4.5,
    },
    {
      title: "War Zone",
      description: "Lorem ipsum nibeuowl gyf nibeugnfvds dh dafndsa",
      image: "/images/war-zone.png",
      rating: 4.8,
    },
    {
      title: "Night Crawler",
      description: "Lorem ipsum nibeuowl gyf nibeugnfvds dh dafndsa",
      image: "/images/night-crawler.png",
      rating: 4.2,
    },
  ]

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">POPULAR GAMES</h2>
        <Button variant="ghost" className="text-orange-500 hover:text-orange-400">
          See All
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {games.map((game, index) => (
          <motion.div key={index} whileHover={{ scale: 1.05, y: -10 }} className="group cursor-pointer">
            <Card className="bg-gray-900/50 border-gray-800 overflow-hidden h-64 relative">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${game.image})` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>

              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">{game.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{game.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-orange-500 fill-current" />
                    <span className="text-orange-500 font-semibold">{game.rating}</span>
                  </div>
                  <Button
                    size="sm"
                    className="bg-orange-500 hover:bg-orange-600 text-black font-semibold opacity-0 group-hover:opacity-100 transition-all"
                  >
                    Play Now
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// Latest games sidebar
const LatestGames = () => {
  const games = [
    {
      title: "Assassin Creed",
      subtitle: "Don't miss the new seasons",
      rating: 4.5,
      image: "/images/assassin-creed.png",
    },
    {
      title: "Forza Horizon",
      subtitle: "Don't miss the new seasons",
      rating: 4.5,
      image: "/images/forza-horizon.png",
    },
    {
      title: "Far Cry 3",
      subtitle: "Don't miss the new seasons",
      rating: 4.5,
      image: "/images/far-cry-3.png",
    },
    {
      title: "BF1",
      subtitle: "Don't miss the new seasons",
      rating: 4.5,
      image: "/images/bf1.png",
    },
  ]

  return (
    <div className="w-80 bg-gray-900/30 backdrop-blur-xl rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white">LATEST GAMES</h3>
        <Button variant="ghost" className="text-orange-500 hover:text-orange-400 text-sm">
          See All
        </Button>
      </div>

      <div className="space-y-4">
        {games.map((game, index) => (
          <motion.div
            key={index}
            whileHover={{ x: 8, scale: 1.02 }}
            className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-800/50 transition-all cursor-pointer group"
          >
            <div
              className="w-16 h-16 bg-cover bg-center rounded-lg"
              style={{ backgroundImage: `url(${game.image})` }}
            />
            <div className="flex-1">
              <h4 className="font-semibold text-white group-hover:text-orange-500 transition-colors">{game.title}</h4>
              <p className="text-sm text-gray-400">{game.subtitle}</p>
              <div className="flex items-center space-x-1 mt-1">
                <Star className="w-3 h-3 text-orange-500 fill-current" />
                <span className="text-orange-500 text-sm font-semibold">{game.rating}</span>
              </div>
            </div>
            <Button size="sm" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-all">
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-black flex">
      <GamingSidebar />

      <div className="flex-1 ml-64">
        <GamingHeader />

        <main className="p-8">
          <div className="flex gap-8">
            <div className="flex-1">
              <HeroBanner />
              <GameCategories />
              <PopularGames />
            </div>

            <LatestGames />
          </div>
        </main>
      </div>
    </div>
  )
}
