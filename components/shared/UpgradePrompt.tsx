"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Crown, Zap, Star, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

interface UpgradePromptProps {
  feature: string
  description: string
  onClose?: () => void
  showCloseButton?: boolean
  variant?: "modal" | "banner" | "card"
  recommendedPlan?: "gamer" | "pro" | "champion"
}

const UpgradePrompt = ({
  feature,
  description,
  onClose,
  showCloseButton = true,
  variant = "modal",
  recommendedPlan = "gamer"
}: UpgradePromptProps) => {
  const [isVisible, setIsVisible] = useState(true)

  const plans = {
    gamer: {
      name: "Gamer",
      price: "$7.59",
      color: "from-orange-500 to-orange-600",
      icon: Star
    },
    pro: {
      name: "Pro Player", 
      price: "$24.59",
      color: "from-purple-500 to-purple-600",
      icon: Trophy
    },
    champion: {
      name: "Champion",
      price: "$45.95",
      color: "from-yellow-500 to-yellow-600",
      icon: Crown
    }
  }

  const plan = plans[recommendedPlan]
  const PlanIcon = plan.icon

  const handleClose = () => {
    setIsVisible(false)
    onClose?.()
  }

  if (!isVisible) return null

  if (variant === "banner") {
    return (
      <motion.div
        className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/30 rounded-2xl p-6 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className={`p-3 rounded-full bg-gradient-to-r ${plan.color}`}>
              <PlanIcon className="w-6 h-6 text-black" />
            </div>
            <div>
              <h3 className="text-white font-bold">{feature}</h3>
              <p className="text-gray-400 text-sm">{description}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Link href="/membership">
              <Button className={`bg-gradient-to-r ${plan.color} hover:opacity-90 text-black font-bold`}>
                Upgrade to {plan.name}
              </Button>
            </Link>
            {showCloseButton && (
              <button onClick={handleClose} className="text-gray-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </motion.div>
    )
  }

  if (variant === "card") {
    return (
      <Card className="bg-gray-800/50 border-orange-500/30 p-6 backdrop-blur-sm">
        <div className="text-center">
          <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center`}>
            <PlanIcon className="w-8 h-8 text-black" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{feature}</h3>
          <p className="text-gray-400 mb-4">{description}</p>
          <Link href="/membership">
            <Button className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 text-black font-bold`}>
              Upgrade to {plan.name} - {plan.price}/mo
            </Button>
          </Link>
        </div>
      </Card>
    )
  }

  // Modal variant
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-gray-900 border border-orange-500/30 rounded-3xl p-8 max-w-md w-full text-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
        >
          {showCloseButton && (
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          )}
          
          <motion.div
            className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center`}
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <PlanIcon className="w-10 h-10 text-black" />
          </motion.div>

          <h2 className="text-2xl font-black text-white mb-4 font-exo2">Unlock {feature}</h2>
          <p className="text-gray-400 mb-6">{description}</p>
          
          <div className="space-y-3">
            <Link href="/membership">
              <Button className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 text-black font-bold py-4 text-lg rounded-full`}>
                <PlanIcon className="w-5 h-5 mr-2" />
                Upgrade to {plan.name} - {plan.price}/mo
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="w-full border-gray-600 text-gray-400 hover:bg-gray-700"
              onClick={handleClose}
            >
              Maybe Later
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default UpgradePrompt