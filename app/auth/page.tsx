"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  ArrowLeft,
  Shield,
  CheckCircle,
  AlertCircle,
  Fingerprint,
  Rocket,
  Github,
  Terminal,
  Activity,
  Heart,
  Globe,
  Coins,
  Star,
  Gamepad2,
  Trophy,
  Zap,
  Users,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

// Enhanced cyberpunk grid with animations
const EnhancedCyberpunkGrid = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated grid */}
      <motion.svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <defs>
          <pattern id="enhancedGrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <motion.path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="rgba(255, 111, 0, 0.4)"
              strokeWidth="1"
              animate={{
                strokeWidth: [1, 2, 1],
                stroke: ["rgba(255, 111, 0, 0.4)", "rgba(255, 111, 0, 0.8)", "rgba(255, 111, 0, 0.4)"],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </pattern>
          <linearGradient id="enhancedGridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255, 111, 0, 0.2)" />
            <stop offset="50%" stopColor="rgba(255, 111, 0, 0.05)" />
            <stop offset="100%" stopColor="rgba(255, 111, 0, 0.15)" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#enhancedGrid)" />
        <motion.rect
          width="100%"
          height="100%"
          fill="url(#enhancedGridGradient)"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </motion.svg>

      {/* Multiple animated scan lines */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/20 to-transparent h-40"
          animate={{
            y: ["-200px", "100vh"],
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: i * 2,
          }}
        />
      ))}

      {/* Pulsing corner orbs */}
      <motion.div
        className="absolute top-10 left-10 w-60 h-60 bg-orange-500/15 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.2, 0.6, 0.2],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 0.8, 1.2],
          opacity: [0.15, 0.4, 0.15],
          x: [0, -40, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* Digital rain effect */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 bg-gradient-to-b from-transparent via-orange-500/60 to-transparent"
            style={{
              left: `${10 + i * 12}%`,
              height: "300px",
            }}
            animate={{
              y: ["-300px", "100vh"],
              opacity: [0, 1, 0],
              scaleY: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.8,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </div>
  )
}

// Enhanced PlayChange particles with more variety
const EnhancedPlayChangeParticles = () => {
  const [particles, setParticles] = useState<
    Array<{
      id: number
      x: number
      y: number
      size: number
      delay: number
      duration: number
      type: "heart" | "coin" | "star" | "globe" | "gamepad" | "trophy" | "zap" | "users"
      opacity: number
      rotation: number
    }>
  >([])

  useEffect(() => {
    const icons = ["heart", "coin", "star", "globe", "gamepad", "trophy", "zap", "users"]
    const newParticles = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 12,
      delay: Math.random() * 15,
      duration: 20 + Math.random() * 15,
      type: icons[Math.floor(Math.random() * icons.length)] as any,
      opacity: Math.random() * 0.4 + 0.1,
      rotation: Math.random() * 360,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
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
            y: [0, -120, 20, -80, 0],
            x: [0, 60, -30, 40, 0],
            rotateX: [0, 360, 180, 360],
            rotateY: [0, 180, 360, 180],
            rotateZ: [particle.rotation, particle.rotation + 360],
            scale: [0.3, 1.4, 0.8, 1.2, 0.5],
            opacity: [
              particle.opacity,
              particle.opacity * 3,
              particle.opacity * 0.5,
              particle.opacity * 2,
              particle.opacity,
            ],
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
          {particle.type === "globe" && <Globe className="w-full h-full text-orange-600/40" />}
          {particle.type === "gamepad" && <Gamepad2 className="w-full h-full text-orange-400/40" />}
          {particle.type === "trophy" && <Trophy className="w-full h-full text-orange-500/40" />}
          {particle.type === "zap" && <Zap className="w-full h-full text-orange-300/40" />}
          {particle.type === "users" && <Users className="w-full h-full text-orange-600/40" />}
        </motion.div>
      ))}
    </div>
  )
}

// Enhanced PlayChange input field with more animations
const EnhancedPlayChangeInput = ({
  icon: Icon,
  type,
  name,
  placeholder,
  value,
  onChange,
  required = false,
  showPasswordToggle = false,
  onTogglePassword,
  showPassword = false,
  error = "",
  success = false,
}: {
  icon: any
  type: string
  name: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
  showPasswordToggle?: boolean
  onTogglePassword?: () => void
  showPassword?: boolean
  error?: string
  success?: boolean
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (value.length > 0) {
      setIsTyping(true)
      const timer = setTimeout(() => setIsTyping(false), 500)
      return () => clearTimeout(timer)
    }
  }, [value])

  return (
    <div className="relative group">
      <motion.div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{
          scale: isFocused ? 1.03 : isHovered ? 1.01 : 1,
          rotateX: isFocused ? 2 : 0,
        }}
        transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
      >
        {/* Enhanced border with multiple layers */}
        <div className="absolute inset-0 rounded-xl overflow-hidden">
          <motion.div
            className="absolute inset-0"
            animate={{
              background: isFocused
                ? "linear-gradient(135deg, rgba(255, 111, 0, 0.4), rgba(255, 111, 0, 0.1), rgba(255, 111, 0, 0.4))"
                : error
                  ? "linear-gradient(135deg, rgba(239, 68, 68, 0.4), rgba(239, 68, 68, 0.1), rgba(239, 68, 68, 0.4))"
                  : success
                    ? "linear-gradient(135deg, rgba(34, 197, 94, 0.4), rgba(34, 197, 94, 0.1), rgba(34, 197, 94, 0.4))"
                    : "linear-gradient(135deg, rgba(75, 85, 99, 0.4), rgba(75, 85, 99, 0.1), rgba(75, 85, 99, 0.4))",
            }}
            style={{ padding: "2px" }}
          >
            <motion.div
              className="w-full h-full bg-gray-900/95 backdrop-blur-xl rounded-xl"
              animate={{
                boxShadow: isFocused ? "inset 0 0 50px rgba(255, 111, 0, 0.1)" : "inset 0 0 20px rgba(0, 0, 0, 0.5)",
              }}
            />
          </motion.div>
        </div>

        {/* Enhanced glow with pulsing effect */}
        <motion.div
          className="absolute inset-0 rounded-xl"
          animate={{
            boxShadow: isFocused
              ? [
                  "0 0 40px rgba(255, 111, 0, 0.3), inset 0 0 40px rgba(255, 111, 0, 0.05)",
                  "0 0 60px rgba(255, 111, 0, 0.5), inset 0 0 60px rgba(255, 111, 0, 0.1)",
                  "0 0 40px rgba(255, 111, 0, 0.3), inset 0 0 40px rgba(255, 111, 0, 0.05)",
                ]
              : error
                ? "0 0 30px rgba(239, 68, 68, 0.4)"
                : success
                  ? "0 0 30px rgba(34, 197, 94, 0.4)"
                  : "0 0 0px transparent",
          }}
          transition={{
            duration: isFocused ? 2 : 0.3,
            repeat: isFocused ? Number.POSITIVE_INFINITY : 0,
            ease: "easeInOut",
          }}
        />

        {/* Animated icon with enhanced effects */}
        <motion.div
          className="absolute left-5 top-1/2 transform -translate-y-1/2 z-10"
          animate={{
            color: isFocused ? "#ff6f00" : error ? "#ef4444" : success ? "#22c55e" : "#9ca3af",
            scale: isFocused ? 1.2 : isTyping ? 1.1 : 1,
            rotate: isTyping ? [0, -5, 5, 0] : 0,
          }}
          transition={{
            rotate: { duration: 0.3 },
            scale: { duration: 0.2 },
          }}
        >
          <motion.div
            animate={{
              boxShadow: isFocused
                ? [
                    "0 0 10px rgba(255, 111, 0, 0.5)",
                    "0 0 20px rgba(255, 111, 0, 0.8)",
                    "0 0 10px rgba(255, 111, 0, 0.5)",
                  ]
                : "0 0 0px transparent",
            }}
            transition={{
              duration: 2,
              repeat: isFocused ? Number.POSITIVE_INFINITY : 0,
            }}
            className="p-1 rounded-full"
          >
            <Icon className="w-6 h-6" />
          </motion.div>
        </motion.div>

        {/* Enhanced floating label with glow */}
        <motion.label
          className="absolute left-20 pointer-events-none font-mono font-bold tracking-wider"
          animate={{
            y: isFocused || value ? -32 : 0,
            scale: isFocused || value ? 0.85 : 1,
            color: isFocused ? "#ff6f00" : error ? "#ef4444" : success ? "#22c55e" : "#9ca3af",
            textShadow: isFocused
              ? [
                  "0 0 10px rgba(255, 111, 0, 0.5)",
                  "0 0 20px rgba(255, 111, 0, 0.8)",
                  "0 0 10px rgba(255, 111, 0, 0.5)",
                ]
              : "none",
          }}
          style={{
            top: isFocused || value ? "8px" : "50%",
            transform: isFocused || value ? "none" : "translateY(-50%)",
          }}
          transition={{
            textShadow: {
              duration: 2,
              repeat: isFocused ? Number.POSITIVE_INFINITY : 0,
            },
          }}
        >
          {placeholder}
          {required && (
            <motion.span
              className="text-red-400 ml-1"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
              }}
            >
              *
            </motion.span>
          )}
        </motion.label>

        {/* Enhanced input field */}
        <Input
          ref={inputRef}
          type={showPasswordToggle && showPassword ? "text" : type}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="pl-20 pr-20 py-7 bg-transparent border-0 text-white placeholder-transparent h-18 rounded-xl focus:ring-0 focus:outline-none relative z-10 font-mono text-lg tracking-wide"
          required={required}
        />

        {/* Enhanced password toggle */}
        {showPasswordToggle && (
          <motion.button
            type="button"
            onClick={onTogglePassword}
            className="absolute right-5 top-1/2 transform -translate-y-1/2 z-10"
            whileHover={{ scale: 1.3, rotate: 10 }}
            whileTap={{ scale: 0.9, rotate: -10 }}
            animate={{
              color: showPassword ? "#ff6f00" : "#9ca3af",
              boxShadow: showPassword
                ? [
                    "0 0 10px rgba(255, 111, 0, 0.5)",
                    "0 0 20px rgba(255, 111, 0, 0.8)",
                    "0 0 10px rgba(255, 111, 0, 0.5)",
                  ]
                : "0 0 0px transparent",
            }}
            transition={{
              boxShadow: {
                duration: 2,
                repeat: showPassword ? Number.POSITIVE_INFINITY : 0,
              },
            }}
          >
            <motion.div
              animate={{ rotate: showPassword ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="p-1 rounded-full"
            >
              {showPassword ? <EyeOff className="w-6 h-6" /> : <Eye className="w-6 h-6" />}
            </motion.div>
          </motion.button>
        )}

        {/* Enhanced status indicator */}
        <AnimatePresence>
          {(error || success) && (
            <motion.div
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0, rotate: 180, opacity: 0 }}
              className="absolute right-5 top-1/2 transform -translate-y-1/2 z-10"
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {error ? (
                <motion.div
                  animate={{
                    rotate: [0, -15, 15, -10, 10, 0],
                    scale: [1, 1.2, 1],
                    boxShadow: [
                      "0 0 10px rgba(239, 68, 68, 0.5)",
                      "0 0 20px rgba(239, 68, 68, 0.8)",
                      "0 0 10px rgba(239, 68, 68, 0.5)",
                    ],
                  }}
                  transition={{
                    rotate: { duration: 0.6 },
                    scale: { duration: 0.4 },
                    boxShadow: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                  }}
                  className="p-1 rounded-full"
                >
                  <AlertCircle className="w-6 h-6 text-red-500" />
                </motion.div>
              ) : (
                <motion.div
                  animate={{
                    scale: [1, 1.4, 1],
                    rotate: [0, 360],
                    boxShadow: [
                      "0 0 10px rgba(34, 197, 94, 0.5)",
                      "0 0 20px rgba(34, 197, 94, 0.8)",
                      "0 0 10px rgba(34, 197, 94, 0.5)",
                    ],
                  }}
                  transition={{
                    scale: { duration: 0.8 },
                    rotate: { duration: 1 },
                    boxShadow: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                  }}
                  className="p-1 rounded-full"
                >
                  <CheckCircle className="w-6 h-6 text-green-500" />
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Enhanced data stream effect */}
        <AnimatePresence>
          {isFocused && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="absolute right-16 top-1/2 transform -translate-y-1/2 z-10"
            >
              <div className="flex space-x-1">
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="w-1 h-8 bg-orange-500 rounded-full"
                    animate={{
                      scaleY: [0.2, 1.2, 0.2],
                      opacity: [0.2, 1, 0.2],
                      boxShadow: [
                        "0 0 5px rgba(255, 111, 0, 0.5)",
                        "0 0 15px rgba(255, 111, 0, 1)",
                        "0 0 5px rgba(255, 111, 0, 0.5)",
                      ],
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.15,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Typing particles effect */}
        <AnimatePresence>
          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 pointer-events-none"
            >
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-orange-400 rounded-full"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${30 + Math.random() * 40}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.1,
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Enhanced error message */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.8, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            exit={{ opacity: 0, y: -15, scale: 0.8, rotateX: 90 }}
            className="mt-4 ml-3"
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <motion.div
              className="flex items-center space-x-3 text-red-400 font-mono text-sm bg-red-500/10 backdrop-blur-xl border border-red-500/30 rounded-lg p-3"
              animate={{
                boxShadow: [
                  "0 0 10px rgba(239, 68, 68, 0.3)",
                  "0 0 20px rgba(239, 68, 68, 0.5)",
                  "0 0 10px rgba(239, 68, 68, 0.3)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
              }}
            >
              <motion.div
                animate={{
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 0.6 },
                  scale: { duration: 0.4 },
                }}
              >
                <Terminal className="w-5 h-5" />
              </motion.div>
              <span className="font-bold tracking-wider">ERROR: {error}</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// Enhanced PlayChange tabs with more animations
const EnhancedPlayChangeTabs = ({
  isLogin,
  setIsLogin,
}: { isLogin: boolean; setIsLogin: (value: boolean) => void }) => {
  return (
    <div className="relative mb-12">
      <motion.div
        className="relative bg-gray-900/60 backdrop-blur-2xl rounded-2xl p-2 border border-gray-700/50"
        animate={{
          boxShadow: [
            "0 0 30px rgba(255, 111, 0, 0.2)",
            "0 0 50px rgba(255, 111, 0, 0.4)",
            "0 0 30px rgba(255, 111, 0, 0.2)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        {/* Enhanced animated background */}
        <motion.div
          className="absolute top-2 bottom-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl shadow-2xl"
          animate={{
            left: isLogin ? "0.5rem" : "50%",
            width: "calc(50% - 0.5rem)",
            boxShadow: [
              "0 0 40px rgba(255, 111, 0, 0.4), inset 0 0 40px rgba(255, 111, 0, 0.1)",
              "0 0 60px rgba(255, 111, 0, 0.6), inset 0 0 60px rgba(255, 111, 0, 0.2)",
              "0 0 40px rgba(255, 111, 0, 0.4), inset 0 0 40px rgba(255, 111, 0, 0.1)",
            ],
          }}
          transition={{
            left: { type: "spring", stiffness: 400, damping: 30 },
            width: { type: "spring", stiffness: 400, damping: 30 },
            boxShadow: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
        />

        <div className="relative flex">
          <motion.button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-6 px-10 rounded-xl font-bold text-xl transition-all duration-300 relative z-10 font-mono tracking-wider ${
              isLogin ? "text-black" : "text-gray-400 hover:text-white"
            }`}
            whileHover={{ scale: isLogin ? 1 : 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="flex items-center justify-center space-x-4"
              animate={{
                y: isLogin ? [0, -4, 0] : 0,
                textShadow: isLogin
                  ? ["0 0 10px rgba(0, 0, 0, 0.5)", "0 0 20px rgba(0, 0, 0, 0.8)", "0 0 10px rgba(0, 0, 0, 0.5)"]
                  : "none",
              }}
              transition={{
                y: { duration: 0.6, repeat: isLogin ? Number.POSITIVE_INFINITY : 0, repeatDelay: 3 },
                textShadow: { duration: 2, repeat: isLogin ? Number.POSITIVE_INFINITY : 0 },
              }}
            >
              <motion.div
                animate={{
                  rotate: isLogin ? [0, 360] : 0,
                  scale: isLogin ? [1, 1.1, 1] : 1,
                }}
                transition={{
                  rotate: { duration: 4, repeat: isLogin ? Number.POSITIVE_INFINITY : 0, ease: "linear" },
                  scale: { duration: 2, repeat: isLogin ? Number.POSITIVE_INFINITY : 0 },
                }}
              >
                <Fingerprint className="w-7 h-7" />
              </motion.div>
              <span>SIGN IN</span>
            </motion.div>
          </motion.button>

          <motion.button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-6 px-10 rounded-xl font-bold text-xl transition-all duration-300 relative z-10 font-mono tracking-wider ${
              !isLogin ? "text-black" : "text-gray-400 hover:text-white"
            }`}
            whileHover={{ scale: !isLogin ? 1 : 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="flex items-center justify-center space-x-4"
              animate={{
                y: !isLogin ? [0, -4, 0] : 0,
                textShadow: !isLogin
                  ? ["0 0 10px rgba(0, 0, 0, 0.5)", "0 0 20px rgba(0, 0, 0, 0.8)", "0 0 10px rgba(0, 0, 0, 0.5)"]
                  : "none",
              }}
              transition={{
                y: { duration: 0.6, repeat: !isLogin ? Number.POSITIVE_INFINITY : 0, repeatDelay: 3 },
                textShadow: { duration: 2, repeat: !isLogin ? Number.POSITIVE_INFINITY : 0 },
              }}
            >
              <motion.div
                animate={{
                  y: !isLogin ? [0, -5, 0] : 0,
                  rotate: !isLogin ? [0, 10, -10, 0] : 0,
                  scale: !isLogin ? [1, 1.2, 1] : 1,
                }}
                transition={{
                  y: { duration: 1.5, repeat: !isLogin ? Number.POSITIVE_INFINITY : 0 },
                  rotate: { duration: 2, repeat: !isLogin ? Number.POSITIVE_INFINITY : 0 },
                  scale: { duration: 2, repeat: !isLogin ? Number.POSITIVE_INFINITY : 0 },
                }}
              >
                <Rocket className="w-7 h-7" />
              </motion.div>
              <span>JOIN MOVEMENT</span>
            </motion.div>
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}

// Enhanced PlayChange social buttons
const EnhancedPlayChangeSocials = () => {
  const socials = [
    {
      name: "DISCORD",
      icon: Activity,
      color: "bg-gray-800/80 hover:bg-gray-700/80 border-gray-600/50",
      glow: "rgba(255, 111, 0, 0.3)",
    },
    {
      name: "GITHUB",
      icon: Github,
      color: "bg-gray-800/80 hover:bg-gray-700/80 border-gray-600/50",
      glow: "rgba(255, 111, 0, 0.3)",
    },
    {
      name: "WALLET",
      icon: Coins,
      color: "bg-gray-800/80 hover:bg-gray-700/80 border-gray-600/50",
      glow: "rgba(255, 111, 0, 0.3)",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Enhanced divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <motion.div
            className="w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"
            animate={{
              opacity: [0.3, 1, 0.3],
              scaleX: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>
        <div className="relative flex justify-center">
          <motion.span
            className="px-8 bg-black text-orange-400 font-mono font-bold tracking-widest"
            animate={{
              textShadow: [
                "0 0 10px rgba(255, 111, 0, 0.5)",
                "0 0 20px rgba(255, 111, 0, 0.8)",
                "0 0 10px rgba(255, 111, 0, 0.5)",
              ],
              scale: [1, 1.05, 1],
            }}
            transition={{
              textShadow: { duration: 2, repeat: Number.POSITIVE_INFINITY },
              scale: { duration: 4, repeat: Number.POSITIVE_INFINITY },
            }}
          >
            OR CONNECT VIA
          </motion.span>
        </div>
      </div>

      {/* Enhanced social buttons */}
      <div className="space-y-5">
        {socials.map((social, index) => (
          <motion.button
            key={social.name}
            type="button"
            initial={{ opacity: 0, x: -100, rotateY: -90 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{
              delay: index * 0.2,
              type: "spring",
              stiffness: 200,
              damping: 20,
            }}
            whileHover={{
              scale: 1.03,
              x: 15,
              rotateY: 5,
              boxShadow: `0 0 40px ${social.glow}`,
            }}
            whileTap={{ scale: 0.97, rotateY: -2 }}
            className={`w-full flex items-center justify-center space-x-5 p-5 rounded-xl ${social.color} transition-all duration-500 group relative overflow-hidden border backdrop-blur-xl`}
            style={{
              boxShadow: `0 0 25px ${social.glow}`,
            }}
          >
            {/* Enhanced scan line effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/30 to-transparent -translate-x-full group-hover:translate-x-full"
              style={{ width: "200%" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />

            {/* Animated particles on hover */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-orange-400 rounded-full"
                  style={{
                    left: `${10 + Math.random() * 80}%`,
                    top: `${20 + Math.random() * 60}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.1,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 2,
                  }}
                />
              ))}
            </motion.div>

            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                scale: { duration: 3, repeat: Number.POSITIVE_INFINITY },
              }}
            >
              <social.icon className="w-7 h-7 text-orange-400 group-hover:text-orange-300 transition-colors relative z-10" />
            </motion.div>
            <span className="font-mono font-bold text-white tracking-wider relative z-10 group-hover:text-orange-100 transition-colors">
              CONNECT WITH {social.name}
            </span>
          </motion.button>
        ))}
      </div>
    </div>
  )
}

// Enhanced PlayChange success animation
const EnhancedPlayChangeSuccess = () => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="fixed inset-0 flex items-center justify-center z-50 bg-black/95 backdrop-blur-2xl"
    >
      <div className="text-center relative">
        {/* Enhanced background effects */}
        <motion.div
          className="absolute inset-0 -m-40"
          animate={{
            background: [
              "radial-gradient(circle, rgba(255, 111, 0, 0.1) 0%, transparent 70%)",
              "radial-gradient(circle, rgba(255, 111, 0, 0.3) 0%, transparent 70%)",
              "radial-gradient(circle, rgba(255, 111, 0, 0.1) 0%, transparent 70%)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
          }}
        />

        {/* Enhanced success icon */}
        <motion.div
          className="w-48 h-48 mx-auto mb-10 relative"
          animate={{
            rotateY: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotateY: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            scale: { duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
          }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center"
            animate={{
              boxShadow: [
                "0 0 50px rgba(255, 111, 0, 0.5)",
                "0 0 100px rgba(255, 111, 0, 0.8)",
                "0 0 50px rgba(255, 111, 0, 0.5)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
            }}
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                scale: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                rotate: { duration: 4, repeat: Number.POSITIVE_INFINITY },
              }}
            >
              <Heart className="w-24 h-24 text-black" />
            </motion.div>
          </motion.div>

          {/* Multiple pulsing rings */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 bg-orange-500/20 rounded-full"
              animate={{
                scale: [1, 2 + i * 0.5, 1],
                opacity: [0.4, 0.1, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.5,
              }}
            />
          ))}
        </motion.div>

        {/* Enhanced success text */}
        <motion.h2
          className="text-7xl font-black text-orange-500 mb-8 font-mono tracking-wider"
          animate={{
            textShadow: [
              "0 0 30px rgba(255, 111, 0, 0.5)",
              "0 0 60px rgba(255, 111, 0, 0.8)",
              "0 0 30px rgba(255, 111, 0, 0.5)",
            ],
            scale: [1, 1.05, 1],
          }}
          transition={{
            textShadow: { duration: 2, repeat: Number.POSITIVE_INFINITY },
            scale: { duration: 4, repeat: Number.POSITIVE_INFINITY },
          }}
        >
          WELCOME TO PLAYCHANGE
        </motion.h2>

        <motion.p
          className="text-gray-400 text-2xl font-mono mb-10 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          READY TO GAME FOR GOOD...
        </motion.p>

        {/* Enhanced loading bars */}
        <div className="flex justify-center space-x-3">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-12 bg-gradient-to-t from-orange-600 to-orange-400 rounded-full"
              animate={{
                scaleY: [0.2, 1.5, 0.2],
                opacity: [0.3, 1, 0.3],
                boxShadow: [
                  "0 0 10px rgba(255, 111, 0, 0.5)",
                  "0 0 20px rgba(255, 111, 0, 1)",
                  "0 0 10px rgba(255, 111, 0, 0.5)",
                ],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-orange-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}

    if (!isLogin && !formData.name.trim()) {
      newErrors.name = "GAMER TAG REQUIRED"
    }

    if (!formData.email.trim()) {
      newErrors.email = "EMAIL REQUIRED"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "INVALID EMAIL FORMAT"
    }

    if (!formData.password.trim()) {
      newErrors.password = "PASSWORD REQUIRED"
    } else if (formData.password.length < 8) {
      newErrors.password = "PASSWORD TOO WEAK"
    }

    return newErrors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const validationErrors = validateForm()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setIsLoading(true)
    setErrors({})

    await new Promise((resolve) => setTimeout(resolve, 3000))

    setIsLoading(false)
    setShowSuccess(true)

    setTimeout(() => {
      window.location.href = "/dashboard"
    }, 5000)
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6 relative overflow-hidden">
      <EnhancedCyberpunkGrid />
      <EnhancedPlayChangeParticles />

      <AnimatePresence>{showSuccess && <EnhancedPlayChangeSuccess />}</AnimatePresence>

      <div className="w-full max-w-2xl z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 100, rotateX: -20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", type: "spring", stiffness: 100 }}
        >
          {/* Enhanced back button */}
          <Link
            href="/"
            className="inline-flex items-center text-orange-400 hover:text-orange-300 mb-10 transition-all duration-300 group font-mono font-bold tracking-wider"
          >
            <motion.div
              whileHover={{ x: -15, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-4"
            >
              <motion.div
                animate={{
                  rotate: [0, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                }}
                className="p-2 rounded-full bg-orange-500/20 border border-orange-500/50"
              >
                <ArrowLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </motion.div>
              <span className="text-xl">BACK TO PLAYCHANGE</span>
            </motion.div>
          </Link>

          {/* Enhanced main container */}
          <div className="relative">
            {/* Enhanced container with multiple layers */}
            <motion.div
              className="absolute inset-0 bg-gray-900/90 backdrop-blur-3xl rounded-3xl border border-gray-700/50"
              animate={{
                boxShadow: [
                  "0 0 60px rgba(255, 111, 0, 0.1)",
                  "0 0 100px rgba(255, 111, 0, 0.3)",
                  "0 0 60px rgba(255, 111, 0, 0.1)",
                ],
                borderColor: ["rgba(75, 85, 99, 0.5)", "rgba(255, 111, 0, 0.3)", "rgba(75, 85, 99, 0.5)"],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            <div className="relative z-10 p-12">
              {/* Enhanced header */}
              <div className="text-center mb-12">
                <motion.div
                  initial={{ scale: 0, rotateY: -180, opacity: 0 }}
                  animate={{ scale: 1, rotateY: 0, opacity: 1 }}
                  transition={{
                    delay: 0.3,
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                  className="w-32 h-32 mx-auto mb-8 relative"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center"
                    animate={{
                      boxShadow: [
                        "0 0 40px rgba(255, 111, 0, 0.5)",
                        "0 0 80px rgba(255, 111, 0, 0.8)",
                        "0 0 40px rgba(255, 111, 0, 0.5)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        rotate: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                        scale: { duration: 4, repeat: Number.POSITIVE_INFINITY },
                      }}
                    >
                      <Heart className="w-16 h-16 text-black" />
                    </motion.div>
                  </motion.div>

                  {/* Multiple pulsing rings */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute inset-0 bg-orange-500/20 rounded-full"
                      animate={{
                        scale: [1, 1.5 + i * 0.3, 1],
                        opacity: [0.3, 0.1, 0.3],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.8,
                      }}
                    />
                  ))}
                </motion.div>

                <motion.h1
                  className="text-6xl font-black text-orange-500 mb-6 font-mono tracking-wider"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  style={{
                    textShadow: "0 0 40px rgba(255, 111, 0, 0.6)",
                  }}
                >
                  <motion.span
                    animate={{
                      textShadow: [
                        "0 0 30px rgba(255, 111, 0, 0.5)",
                        "0 0 60px rgba(255, 111, 0, 0.8)",
                        "0 0 30px rgba(255, 111, 0, 0.5)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    PLAYCHANGE.IO
                  </motion.span>
                </motion.h1>

                <motion.p
                  className="text-gray-400 text-xl font-mono tracking-wide"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  {isLogin ? "WELCOME BACK, CHANGEMAKER" : "JOIN THE GAMING REVOLUTION"}
                </motion.p>
              </div>

              <EnhancedPlayChangeTabs isLogin={isLogin} setIsLogin={setIsLogin} />

              <form onSubmit={handleSubmit} className="space-y-10">
                <AnimatePresence mode="wait">
                  {!isLogin && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, rotateX: -90, scale: 0.8 }}
                      animate={{ opacity: 1, height: "auto", rotateX: 0, scale: 1 }}
                      exit={{ opacity: 0, height: 0, rotateX: 90, scale: 0.8 }}
                      transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
                    >
                      <EnhancedPlayChangeInput
                        icon={User}
                        type="text"
                        name="name"
                        placeholder="GAMER TAG"
                        value={formData.name}
                        onChange={handleInputChange}
                        required={!isLogin}
                        error={errors.name}
                        success={!errors.name && formData.name.length > 1}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                <EnhancedPlayChangeInput
                  icon={Mail}
                  type="email"
                  name="email"
                  placeholder="EMAIL ADDRESS"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  error={errors.email}
                  success={!errors.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)}
                />

                <EnhancedPlayChangeInput
                  icon={Lock}
                  type="password"
                  name="password"
                  placeholder="PASSWORD"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  showPasswordToggle
                  onTogglePassword={() => setShowPassword(!showPassword)}
                  showPassword={showPassword}
                  error={errors.password}
                  success={!errors.password && formData.password.length >= 8}
                />

                {/* Enhanced submit button */}
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-20 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-bold text-2xl font-mono tracking-wider transition-all duration-300 relative overflow-hidden group border-0 rounded-xl"
                    style={{
                      boxShadow: "0 0 40px rgba(255, 111, 0, 0.4), inset 0 0 40px rgba(255, 111, 0, 0.1)",
                    }}
                  >
                    <AnimatePresence mode="wait">
                      {isLoading ? (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="flex items-center space-x-5"
                        >
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            className="w-8 h-8 border-4 border-black border-t-transparent rounded-full"
                          />
                          <span>CONNECTING...</span>
                          <motion.div
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Number.POSITIVE_INFINITY,
                            }}
                          >
                            <Sparkles className="w-8 h-8" />
                          </motion.div>
                        </motion.div>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="flex items-center justify-center space-x-5"
                        >
                          <span>{isLogin ? "ENTER PLAYCHANGE" : "START CHANGING"}</span>
                          <motion.div
                            animate={{
                              x: [0, 8, 0],
                              scale: [1, 1.3, 1],
                              rotate: [0, 10, -10, 0],
                            }}
                            transition={{
                              duration: 2.5,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                            }}
                          >
                            {isLogin ? <Heart className="w-8 h-8" /> : <Rocket className="w-8 h-8" />}
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Enhanced button effects */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full"
                      style={{ width: "200%" }}
                      transition={{ duration: 1.2 }}
                    />

                    {/* Button particles */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {[...Array(12)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-white rounded-full"
                          style={{
                            left: `${10 + Math.random() * 80}%`,
                            top: `${20 + Math.random() * 60}%`,
                          }}
                          animate={{
                            scale: [0, 1, 0],
                            opacity: [0, 1, 0],
                            y: [0, -20, 0],
                          }}
                          transition={{
                            duration: 2,
                            delay: i * 0.1,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatDelay: 3,
                          }}
                        />
                      ))}
                    </motion.div>
                  </Button>
                </motion.div>
              </form>

              <div className="mt-12">
                <EnhancedPlayChangeSocials />
              </div>

              {/* Enhanced footer */}
              <div className="mt-10 text-center">
                <motion.p
                  className="text-gray-400 mb-8 text-xl font-mono"
                  animate={{
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                >
                  {isLogin ? "NEW TO PLAYCHANGE? " : "ALREADY A CHANGEMAKER? "}
                  <motion.button
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-orange-400 hover:text-orange-300 font-bold transition-colors tracking-wider"
                    whileHover={{
                      scale: 1.05,
                      textShadow: "0 0 10px rgba(255, 111, 0, 0.8)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isLogin ? "JOIN THE MOVEMENT" : "SIGN IN HERE"}
                  </motion.button>
                </motion.p>

                <div className="flex items-center justify-center space-x-12 text-sm text-gray-500 font-mono">
                  <motion.div
                    className="flex items-center space-x-3"
                    whileHover={{
                      scale: 1.1,
                      color: "#ff6f00",
                      textShadow: "0 0 10px rgba(255, 111, 0, 0.5)",
                    }}
                    animate={{
                      y: [0, -2, 0],
                    }}
                    transition={{
                      y: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                    }}
                  >
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        rotate: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                        scale: { duration: 3, repeat: Number.POSITIVE_INFINITY },
                      }}
                    >
                      <Shield className="w-5 h-5" />
                    </motion.div>
                    <span>SECURE</span>
                  </motion.div>

                  <motion.div
                    className="w-2 h-2 bg-orange-500 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                      boxShadow: [
                        "0 0 5px rgba(255, 111, 0, 0.5)",
                        "0 0 15px rgba(255, 111, 0, 1)",
                        "0 0 5px rgba(255, 111, 0, 0.5)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />

                  <motion.div
                    className="flex items-center space-x-3"
                    whileHover={{
                      scale: 1.1,
                      color: "#ff6f00",
                      textShadow: "0 0 10px rgba(255, 111, 0, 0.5)",
                    }}
                    animate={{
                      y: [0, -2, 0],
                    }}
                    transition={{
                      y: { duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 },
                    }}
                  >
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        rotate: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                        scale: { duration: 4, repeat: Number.POSITIVE_INFINITY },
                      }}
                    >
                      <Globe className="w-5 h-5" />
                    </motion.div>
                    <span>GLOBAL</span>
                  </motion.div>

                  <motion.div
                    className="w-2 h-2 bg-orange-500 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                      boxShadow: [
                        "0 0 5px rgba(255, 111, 0, 0.5)",
                        "0 0 15px rgba(255, 111, 0, 1)",
                        "0 0 5px rgba(255, 111, 0, 0.5)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: 1,
                    }}
                  />

                  <motion.div
                    className="flex items-center space-x-3"
                    whileHover={{
                      scale: 1.1,
                      color: "#ff6f00",
                      textShadow: "0 0 10px rgba(255, 111, 0, 0.5)",
                    }}
                    animate={{
                      y: [0, -2, 0],
                    }}
                    transition={{
                      y: { duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 },
                    }}
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        scale: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                        rotate: { duration: 4, repeat: Number.POSITIVE_INFINITY },
                      }}
                    >
                      <Heart className="w-5 h-5" />
                    </motion.div>
                    <span>IMPACT</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AuthPage
