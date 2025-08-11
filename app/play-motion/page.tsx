"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Star,
  Clock,
  Calendar,
  Users,
  Heart,
  Share,
  Download,
  Filter,
  Search,
  Grid,
  List,
  Sparkles,
  Crown,
  Zap,
  Eye
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import Navigation from "@/components/shared/Navigation"
import EnhancedBackground from "@/components/shared/EnhancedBackground"
import Footer from "@/components/shared/Footer"

// Featured Content Carousel
const FeaturedCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const featuredContent = [
    {
      id: 1,
      title: "Epic Gaming Documentary",
      description: "Behind the scenes of the world's biggest gaming tournament",
      thumbnail: "/placeholder.svg?height=300&width=500&text=Gaming+Doc",
      duration: "2h 15m",
      year: "2024",
      rating: "9.2",
      genre: "Documentary",
      isPremium: false
    },
    {
      id: 2,
      title: "Crypto Chronicles",
      description: "The rise of blockchain gaming and NFTs",
      thumbnail: "/placeholder.svg?height=300&width=500&text=Crypto+Chronicles",
      duration: "1h 45m",
      year: "2024",
      rating: "8.8",
      genre: "Series",
      isPremium: true
    },
    {
      id: 3,
      title: "Player One: Ready",
      description: "A sci-fi thriller about virtual reality gaming",
      thumbnail: "/placeholder.svg?height=300&width=500&text=Player+One",
      duration: "2h 30m",
      year: "2024",
      rating: "9.5",
      genre: "Thriller",
      isPremium: true
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-full"
        >
          <div className="absolute inset-0">
            <Image
              src={featuredContent[currentSlide].thumbnail}
              alt={featuredContent[currentSlide].title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
          </div>

          <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
            <motion.div
              className="max-w-2xl"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="flex items-center space-x-4 mb-6">
                {featuredContent[currentSlide].isPremium && (
                  <Badge className="bg-yellow-500 text-black font-bold">
                    <Crown className="w-4 h-4 mr-1" />
                    PREMIUM
                  </Badge>
                )}
                <Badge className="bg-orange-500 text-black font-bold">FEATURED</Badge>
                <div className="flex items-center text-yellow-400">
                  <Star className="w-4 h-4 mr-1 fill-current" />
                  <span>{featuredContent[currentSlide].rating}</span>
                </div>
              </div>

              <h1 className="text-6xl font-black text-white mb-4 font-exo2">
                {featuredContent[currentSlide].title}
              </h1>
              
              <p className="text-xl text-gray-300 mb-6 max-w-lg">
                {featuredContent[currentSlide].description}
              </p>

              <div className="flex items-center space-x-6 text-gray-300 mb-8">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{featuredContent[currentSlide].duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{featuredContent[currentSlide].year}</span>
                </div>
                <Badge variant="outline">{featuredContent[currentSlide].genre}</Badge>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-8 py-4 text-lg rounded-full">
                  <Play className="w-5 h-5 mr-2 fill-current" />
                  Watch Now
                </Button>
                <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black px-8 py-4 text-lg rounded-full">
                  <Heart className="w-5 h-5 mr-2" />
                  Add to List
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {featuredContent.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-orange-500 w-8" : "bg-white/30"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}

// Content Grid
const ContentGrid = () => {
  const [filter, setFilter] = useState("all")
  const [viewMode, setViewMode] = useState("grid")

  const categories = [
    { id: "all", name: "All Content" },
    { id: "free", name: "Free with Ads" },
    { id: "premium", name: "Premium" },
    { id: "movies", name: "Movies" },
    { id: "series", name: "Series" },
    { id: "documentaries", name: "Documentaries" }
  ]

  const content = [
    {
      id: 1,
      title: "Gaming Legends",
      thumbnail: "/placeholder.svg?height=200&width=300&text=Gaming+Legends",
      duration: "1h 30m",
      genre: "Documentary",
      rating: 8.5,
      isPremium: false,
      type: "documentaries"
    },
    {
      id: 2,
      title: "Virtual Reality Wars",
      thumbnail: "/placeholder.svg?height=200&width=300&text=VR+Wars",
      duration: "2h 15m",
      genre: "Sci-Fi",
      rating: 9.1,
      isPremium: true,
      type: "movies"
    },
    {
      id: 3,
      title: "Esports Chronicles",
      thumbnail: "/placeholder.svg?height=200&width=300&text=Esports+Chronicles",
      duration: "45m per episode",
      genre: "Series",
      rating: 8.8,
      isPremium: true,
      type: "series"
    },
    {
      id: 4,
      title: "Indie Game Revolution",
      thumbnail: "/placeholder.svg?height=200&width=300&text=Indie+Games",
      duration: "1h 20m",
      genre: "Documentary",
      rating: 8.3,
      isPremium: false,
      type: "documentaries"
    },
    {
      id: 5,
      title: "Pixel Perfect",
      thumbnail: "/placeholder.svg?height=200&width=300&text=Pixel+Perfect",
      duration: "1h 50m",
      genre: "Comedy",
      rating: 7.9,
      isPremium: false,
      type: "movies"
    },
    {
      id: 6,
      title: "Game Dev Life",
      thumbnail: "/placeholder.svg?height=200&width=300&text=Game+Dev",
      duration: "30m per episode",
      genre: "Series",
      rating: 8.6,
      isPremium: true,
      type: "series"
    }
  ]

  const filteredContent = filter === "all" 
    ? content 
    : filter === "free" 
      ? content.filter(item => !item.isPremium)
      : filter === "premium"
        ? content.filter(item => item.isPremium)
        : content.filter(item => item.type === filter)

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-5xl font-black text-white mb-4 font-exo2">Browse Content</h2>
            <p className="text-xl text-gray-400">Discover movies, series, and documentaries</p>
          </div>

          <div className="flex items-center space-x-4 mt-6 lg:mt-0">
            <div className="flex items-center bg-gray-800 rounded-lg p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded ${viewMode === "grid" ? "bg-orange-500 text-black" : "text-gray-400"}`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded ${viewMode === "list" ? "bg-orange-500 text-black" : "text-gray-400"}`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap gap-3 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                filter === category.id
                  ? "bg-orange-500 text-black"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Content Grid */}
        <motion.div
          className={viewMode === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8" : "space-y-6"}
          layout
        >
          {filteredContent.map((item, index) => (
            <motion.div
              key={item.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="bg-gray-800/50 border-gray-700 overflow-hidden group-hover:border-orange-500 transition-all duration-500 backdrop-blur-sm">
                {viewMode === "grid" ? (
                  <div>
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={item.thumbnail}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                      
                      {/* Play Button Overlay */}
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100"
                        initial={false}
                        animate={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <Button className="bg-orange-500 hover:bg-orange-600 text-black rounded-full p-4">
                          <Play className="w-6 h-6 fill-current" />
                        </Button>
                      </motion.div>

                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex space-x-2">
                        {item.isPremium && (
                          <Badge className="bg-yellow-500 text-black font-bold">
                            <Crown className="w-3 h-3 mr-1" />
                            PREMIUM
                          </Badge>
                        )}
                        {!item.isPremium && (
                          <Badge className="bg-green-500 text-black font-bold">
                            FREE
                          </Badge>
                        )}
                      </div>

                      {/* Rating */}
                      <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg px-2 py-1">
                        <div className="flex items-center text-yellow-400 text-sm">
                          <Star className="w-3 h-3 mr-1 fill-current" />
                          <span>{item.rating}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                        {item.title}
                      </h3>
                      <div className="flex items-center justify-between text-gray-400 mb-4">
                        <span>{item.duration}</span>
                        <Badge variant="outline">{item.genre}</Badge>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-black">
                          <Play className="w-3 h-3 mr-1" />
                          Watch
                        </Button>
                        <Button size="sm" variant="outline" className="border-gray-600 text-gray-400">
                          <Heart className="w-3 h-3" />
                        </Button>
                        <Button size="sm" variant="outline" className="border-gray-600 text-gray-400">
                          <Share className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center p-6 space-x-6">
                    <div className="relative w-32 h-20 flex-shrink-0 overflow-hidden rounded-lg">
                      <Image
                        src={item.thumbnail}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                          {item.title}
                        </h3>
                        {item.isPremium && (
                          <Badge className="bg-yellow-500 text-black font-bold text-xs">
                            <Crown className="w-3 h-3 mr-1" />
                            PREMIUM
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center space-x-4 text-gray-400 text-sm">
                        <span>{item.duration}</span>
                        <span>{item.genre}</span>
                        <div className="flex items-center">
                          <Star className="w-3 h-3 mr-1 fill-current text-yellow-400" />
                          <span>{item.rating}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-black">
                        <Play className="w-3 h-3 mr-1" />
                        Watch
                      </Button>
                      <Button size="sm" variant="outline" className="border-gray-600 text-gray-400">
                        <Heart className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Membership Promotion
const MembershipPromotion = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-purple-900/20 to-orange-900/20">
      <div className="container mx-auto">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-orange-500/30 p-12 backdrop-blur-sm">
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(255, 111, 0, 0.3)",
                  "0 0 40px rgba(255, 111, 0, 0.5)",
                  "0 0 20px rgba(255, 111, 0, 0.3)",
                ],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              className="mb-8"
            >
              <Sparkles className="w-16 h-16 text-orange-500 mx-auto mb-4" />
            </motion.div>
            
            <h2 className="text-4xl font-black text-white mb-4 font-exo2">Unlock Premium Content</h2>
            <p className="text-xl text-gray-300 mb-8">
              Get ad-free streaming, exclusive content, and early access to new releases
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Zap className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <h3 className="text-lg font-bold text-white mb-2">Ad-Free Experience</h3>
                <p className="text-gray-400">Watch without interruptions</p>
              </div>
              <div className="text-center">
                <Crown className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                <h3 className="text-lg font-bold text-white mb-2">Exclusive Content</h3>
                <p className="text-gray-400">Premium movies and series</p>
              </div>
              <div className="text-center">
                <Eye className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                <h3 className="text-lg font-bold text-white mb-2">Early Access</h3>
                <p className="text-gray-400">See new releases first</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/store">
                <Button className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-8 py-4 text-lg rounded-full">
                  <Crown className="w-5 h-5 mr-2" />
                  Upgrade to Premium
                </Button>
              </Link>
              <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black px-8 py-4 text-lg rounded-full">
                View Plans
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default function PlayMotionPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <EnhancedBackground />
      <Navigation />
      <div className="pt-24">
        <FeaturedCarousel />
        <ContentGrid />
        <MembershipPromotion />
      </div>
      <Footer />
    </div>
  )
}