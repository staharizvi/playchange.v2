"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import {
  Search,
  Menu,
  X,
  Gamepad2,
  Zap,
  Sparkles,
  Trophy,
  Users,
  ShoppingCart,
  Store,
  HelpCircle,
  Home,
  Wifi,
  Signal,
  Settings,
  Crown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Games", href: "/games", icon: Gamepad2 },
    { name: "Play Motion", href: "/play-motion", icon: Sparkles },
    { name: "Players Lounge", href: "/players-lounge", icon: Users },
    { name: "NFT Marketplace", href: "/nft-marketplace", icon: Store },
    { name: "Player's Pride", href: "/players-pride", icon: Trophy },
    { name: "Membership", href: "/membership", icon: Crown },
    { name: "Support", href: "/support", icon: HelpCircle }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const getActiveItem = () => {
    return navItems.find(item => item.href === pathname) || navItems[0]
  }

  const activeItem = getActiveItem()

  return (
    <>
      {/* Gaming HUD Background Effects */}
      <div className="fixed top-0 left-0 right-0 z-40 pointer-events-none">
        <motion.div
          className="h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-black/95 backdrop-blur-xl border-b-2 border-orange-500/30 shadow-2xl shadow-orange-500/10" 
            : "bg-black/80 backdrop-blur-lg border-b border-orange-500/20"
        }`}
        initial={{ y: -120 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
      >
        {/* Gaming Grid Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(255, 111, 0, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 111, 0, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: "30px 30px",
          }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 relative">
          <div className="flex items-center justify-between w-full">
            {/* Logo - Left Corner */}
            <Link href="/">
              <motion.div 
                className="flex items-center space-x-2 sm:space-x-3 cursor-pointer group flex-shrink-0 mr-4 sm:mr-8"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className="relative w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 via-orange-600 to-red-500 rounded-xl flex items-center justify-center shadow-lg"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(255, 111, 0, 0.5)",
                      "0 0 30px rgba(255, 111, 0, 0.8)",
                      "0 0 20px rgba(255, 111, 0, 0.5)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <Gamepad2 className="w-5 h-5 sm:w-7 sm:h-7 text-black" />
                  </motion.div>
                </motion.div>
                
                <div className="flex flex-col">
                  <motion.h1 
                    className="text-lg sm:text-2xl font-black text-white font-exo2 group-hover:text-orange-400 transition-colors"
                    animate={{
                      textShadow: [
                        "0 0 10px rgba(255, 255, 255, 0.5)",
                        "0 0 20px rgba(255, 111, 0, 0.8)",
                        "0 0 10px rgba(255, 255, 255, 0.5)",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  >
                    PlayChange.io
                  </motion.h1>
                  <motion.div className="flex items-center space-x-2">
                    <motion.div
                      className="w-2 h-2 bg-green-500 rounded-full"
                      animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    />
                    <p className="text-xs sm:text-xs text-orange-500 font-orbitron font-bold hidden sm:block">
                      IN GAMES WE TRUST
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </Link>

            {/* Center Navigation */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-2 xl:space-x-3 bg-gray-900/30 backdrop-blur-sm rounded-2xl px-3 xl:px-4 py-2 border border-gray-700">
                {navItems.map((item, index) => {
                  const isActive = pathname === item.href
                  return (
                    <Link key={item.name} href={item.href}>
                      <motion.div
                        className={`relative px-3 lg:px-4 xl:px-5 py-2 lg:py-3 rounded-xl transition-all duration-300 cursor-pointer group flex items-center space-x-1 lg:space-x-2 h-9 lg:h-11 ${
                          isActive
                            ? "bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg shadow-orange-500/25"
                            : "hover:bg-orange-500/10 hover:shadow-md hover:shadow-orange-500/20"
                        }`}
                        whileHover={{ scale: 1.02, y: -1 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <motion.div
                          animate={isActive ? { rotate: [0, 360] } : {}}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        >
                          <item.icon className={`w-3 lg:w-4 h-3 lg:h-4 ${isActive ? "text-black" : "text-orange-500 group-hover:text-orange-400"}`} />
                        </motion.div>
                        <span className={`text-xs lg:text-sm font-bold ${isActive ? "text-black" : "text-white group-hover:text-orange-400"} hidden xl:inline`}>
                          {item.name}
                        </span>
                        
                        {isActive && (
                          <motion.div
                            className="absolute inset-0 rounded-xl border-2 border-orange-400/50"
                            animate={{
                              boxShadow: [
                                "0 0 10px rgba(255, 111, 0, 0.3)",
                                "0 0 20px rgba(255, 111, 0, 0.6)",
                                "0 0 10px rgba(255, 111, 0, 0.3)",
                              ],
                            }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          />
                        )}
                      </motion.div>
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Right Side - Search + Auth Buttons */}
            <div className="hidden lg:flex items-center space-x-2 xl:space-x-4 flex-shrink-0 ml-4 xl:ml-8">
              {/* Search */}
              <motion.div 
                className="relative group"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Search className="absolute left-3 lg:left-4 top-1/2 transform -translate-y-1/2 w-3 lg:w-4 h-3 lg:h-4 text-orange-500 z-10" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-gray-900/50 border-2 border-gray-700 rounded-xl pl-10 lg:pl-12 pr-3 lg:pr-4 h-9 lg:h-11 text-sm lg:text-base text-white placeholder-gray-400 focus:border-orange-500 focus:shadow-md focus:shadow-orange-500/20 focus:outline-none backdrop-blur-sm transition-all duration-300 w-40 lg:w-48 xl:w-56 group-hover:border-orange-400 group-hover:shadow-sm group-hover:shadow-orange-500/10"
                />
              </motion.div>

              {/* Sign In Button */}
              <motion.div
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black hover:shadow-md hover:shadow-orange-500/25 h-9 lg:h-11 px-3 lg:px-4 rounded-xl font-bold font-exo2 transition-all duration-300 text-sm lg:text-base">
                  <span className="flex items-center justify-center">
                    <span>SIGN IN</span>
                  </span>
                </Button>
              </motion.div>

              {/* Sign Up Button */}
              <motion.div
                className="ml-3"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-red-500 hover:shadow-md hover:shadow-orange-500/30 text-black font-black h-9 lg:h-11 px-3 lg:px-4 rounded-xl shadow-lg font-exo2 relative overflow-hidden group text-sm lg:text-base">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full"
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10 flex items-center space-x-2">
                    <Zap className="w-3 lg:w-4 h-3 lg:h-4" />
                    <span>SIGN UP</span>
                  </span>
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button - Right Side */}
            <motion.button
              className="lg:hidden relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-700 flex items-center justify-center flex-shrink-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                borderColor: isMenuOpen ? "#ff6f00" : "#374151",
              }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Enhanced Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="lg:hidden mt-4 sm:mt-6 pb-4 sm:pb-6"
                initial={{ opacity: 0, height: 0, y: -20 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="space-y-2">
                  {navItems.map((item, index) => {
                    const isActive = pathname === item.href
                    return (
                      <Link key={item.name} href={item.href}>
                        <motion.div
                          className={`flex items-center space-x-3 w-full text-left px-3 sm:px-4 py-3 sm:py-4 rounded-xl cursor-pointer transition-all duration-300 ${
                            isActive
                              ? "bg-gradient-to-r from-orange-500 to-orange-600 text-black shadow-lg shadow-orange-500/25"
                              : "text-gray-300 hover:text-orange-400 hover:bg-orange-500/10 hover:shadow-sm hover:shadow-orange-500/10"
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                          initial={{ opacity: 0, x: -50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <item.icon className={`w-4 sm:w-5 h-4 sm:h-5 ${isActive ? "text-black" : "text-orange-500"}`} />
                          <span className="font-bold font-exo2 text-sm sm:text-base">{item.name}</span>
                          {isActive && (
                            <motion.div
                              className="ml-auto w-2 h-2 bg-black rounded-full"
                              animate={{ scale: [1, 1.3, 1] }}
                              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                            />
                          )}
                        </motion.div>
                      </Link>
                    )
                  })}
                </div>
                
                <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-700 space-y-3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Button variant="outline" className="w-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black hover:shadow-md hover:shadow-orange-500/25 h-10 sm:h-11 rounded-xl font-bold font-exo2 transition-all duration-300 text-sm sm:text-base">
                      SIGN IN
                    </Button>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-red-500 hover:shadow-md hover:shadow-orange-500/30 text-black font-black h-10 sm:h-11 rounded-xl font-exo2 transition-all duration-300 text-sm sm:text-base">
                      <Zap className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
                      SIGN UP
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Active Page Indicator */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-orange-500 to-red-500"
          animate={{
            width: ["0%", "100%", "0%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </motion.nav>
    </>
  )
}

export default Navigation