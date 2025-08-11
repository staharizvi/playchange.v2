"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Users, Clock, Trophy } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/shared/Navigation"
import Footer from "@/components/shared/Footer"
import EnhancedBackground from "@/components/shared/EnhancedBackground"
import Image from "next/image"

interface Game {
  id: string
  title: string
  description: string
  players: string
  category: string
  image: string
  status: string
  lastPlayed: string
}

interface GamePageClientProps {
  game: Game
}

export default function GamePageClient({ game }: GamePageClientProps) {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <EnhancedBackground />
      <Navigation />
      
      <div className="pt-24 px-6">
        <div className="container mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link href="/games">
              <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Games
              </Button>
            </Link>
          </motion.div>

          {/* Game Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-orange-500 text-black font-bold mb-4">
                  {game.category}
                </Badge>
                <h1 className="text-5xl md:text-6xl font-black mb-6 font-exo2 text-white">
                  {game.title}
                </h1>
                <p className="text-xl text-gray-300 mb-8 font-exo2 leading-relaxed">
                  {game.description}
                </p>
                
                <div className="flex items-center space-x-6 mb-8">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-orange-500" />
                    <span className="text-orange-400 font-bold">{game.players} Players</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-orange-500" />
                    <span className="text-gray-400">Last played {game.lastPlayed}</span>
                  </div>
                  <Badge className={`${game.status === 'Live' ? 'bg-green-500' : 'bg-gray-500'} text-black font-bold`}>
                    {game.status}
                  </Badge>
                </div>

                <div className="flex space-x-4">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-8 py-3 text-lg">
                    Play Now
                  </Button>
                  <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black px-8 py-3 text-lg">
                    Watch Trailer
                  </Button>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src={game.image || "/placeholder.svg"}
                    alt={game.title}
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Trophy className="w-5 h-5 text-orange-500" />
                        <span className="text-white font-bold">Top Rated</span>
                      </div>
                      <Badge className="bg-orange-500 text-black font-bold">
                        4.8★
                      </Badge>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Game Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            <Card className="bg-gray-900/50 border-gray-700 p-6">
              <h3 className="text-orange-500 font-bold mb-2">Active Players</h3>
              <p className="text-3xl font-black text-white">{game.players}</p>
            </Card>
            <Card className="bg-gray-900/50 border-gray-700 p-6">
              <h3 className="text-orange-500 font-bold mb-2">Category</h3>
              <p className="text-3xl font-black text-white">{game.category}</p>
            </Card>
            <Card className="bg-gray-900/50 border-gray-700 p-6">
              <h3 className="text-orange-500 font-bold mb-2">Status</h3>
              <p className="text-3xl font-black text-white">{game.status}</p>
            </Card>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}