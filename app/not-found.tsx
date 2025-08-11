"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Home, Search } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/shared/Navigation"
import Footer from "@/components/shared/Footer"
import EnhancedBackground from "@/components/shared/EnhancedBackground"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <EnhancedBackground />
      <Navigation />
      
      <div className="pt-24 px-6">
        <div className="container mx-auto">
          <div className="min-h-[60vh] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-2xl mx-auto"
            >
              <motion.div
                className="text-9xl font-black mb-8 font-exo2"
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
                404
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-black mb-6 font-exo2 text-white"
              >
                Page Not Found
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-gray-300 mb-12 font-exo2 leading-relaxed"
              >
                The page you're looking for doesn't exist or has been moved. 
                Let's get you back to the action!
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link href="/">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-8 py-3 text-lg">
                    <Home className="w-5 h-5 mr-2" />
                    Go Home
                  </Button>
                </Link>
                
                <Link href="/games">
                  <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black px-8 py-3 text-lg">
                    <Search className="w-5 h-5 mr-2" />
                    Browse Games
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-12"
              >
                <p className="text-gray-500 text-sm">
                  Or go back to the previous page
                </p>
                <Button
                  variant="ghost"
                  className="text-orange-500 hover:text-orange-400 mt-2"
                  onClick={() => window.history.back()}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Go Back
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}