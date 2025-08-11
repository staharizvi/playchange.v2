"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Heart,
  Coins,
  Star,
  Gamepad2,
} from "lucide-react"

const EnhancedBackground = () => {
  const [particles, setParticles] = useState<
    Array<{
      id: number
      x: number
      y: number
      size: number
      delay: number
      duration: number
      type: "heart" | "coin" | "star" | "gamepad"
    }>
  >([])

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 10,
      delay: Math.random() * 10,
      duration: 15 + Math.random() * 10,
      type: ["heart", "coin", "star", "gamepad"][Math.floor(Math.random() * 4)] as
        | "heart"
        | "coin"
        | "star"
        | "gamepad",
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated grid */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 111, 0, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 111, 0, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "60px 60px"],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, 50, -20, 0],
            rotate: [0, 360],
            scale: [0.5, 1.2, 0.8, 1],
            opacity: [0.2, 0.8, 0.3, 0.6],
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        >
          {particle.type === "heart" && <Heart className="w-full h-full text-orange-400/40" />}
          {particle.type === "coin" && <Coins className="w-full h-full text-orange-500/40" />}
          {particle.type === "star" && <Star className="w-full h-full text-orange-300/40" />}
          {particle.type === "gamepad" && <Gamepad2 className="w-full h-full text-orange-600/40" />}
        </motion.div>
      ))}

      {/* Scanning lines */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/10 to-transparent h-32"
        animate={{
          y: ["-100%", "100vh"],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* Pulsing orbs */}
      <motion.div
        className="absolute top-20 left-20 w-40 h-40 bg-orange-500/20 rounded-full blur-xl"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-60 h-60 bg-orange-400/15 rounded-full blur-2xl"
        animate={{
          scale: [1.2, 0.8, 1.2],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Data streams */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 bg-gradient-to-b from-transparent via-orange-500/60 to-transparent"
            style={{
              left: `${20 + i * 15}%`,
              height: "200px",
            }}
            animate={{
              y: ["-200px", "100vh"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.5,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default EnhancedBackground