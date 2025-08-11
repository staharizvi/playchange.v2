"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Trophy, Star, Eye, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Navigation from "@/components/shared/Navigation"
import Footer from "@/components/shared/Footer"
import EnhancedBackground from "@/components/shared/EnhancedBackground"

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
                    className="text-5xl font-black text-white mb-4 font-exo2"
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
              <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-3xl border border-gray-700 group-hover:border-orange-500 transition-all duration-300 relative overflow-hidden">
                {/* Glow effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${trophy.glow} opacity-20`}
                  animate={{
                    scale: index === selectedTrophy ? [1, 1.2, 1] : 1,
                    opacity: index === selectedTrophy ? [0.3, 0.6, 0.3] : 0.3,
                  }}
                  transition={{
                    duration: 2,
                    repeat: index === selectedTrophy ? Number.POSITIVE_INFINITY : 0,
                  }}
                />

                <div className="relative z-10">
                  <div className="w-full h-32 mb-4 relative">
                    <Image
                      src={trophy.image || "/placeholder.svg"}
                      alt={trophy.name}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <Badge
                    className={`mb-2 ${
                      trophy.rarity === "Legendary"
                        ? "bg-yellow-500"
                        : trophy.rarity === "Epic"
                          ? "bg-purple-500"
                          : "bg-blue-500"
                    } text-black font-bold text-xs`}
                  >
                    {trophy.rarity}
                  </Badge>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                    {trophy.name}
                  </h3>

                  <p className="text-sm text-gray-400 mb-3">{trophy.description}</p>

                  <div className="flex justify-between items-center text-xs">
                    <span className="text-orange-400 font-bold">{trophy.value}</span>
                    <div className="flex items-center space-x-1 text-gray-500">
                      <Eye className="w-3 h-3" />
                      <span>{Math.floor(Math.random() * 1000)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Button className="bg-orange-500 hover:bg-orange-600 text-black font-bold text-lg px-8 py-4">
            <Trophy className="mr-2 w-5 h-5" />
            Start Earning Trophies
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default function TrophyRoomPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <EnhancedBackground />
      <Navigation />
      <div className="pt-24">
        <TrophyShowcase />
      </div>
      <Footer />
    </div>
  )
}