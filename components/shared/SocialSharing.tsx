"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Share2,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Copy,
  ExternalLink,
  MessageSquare,
  Heart,
  Users,
  CheckCircle,
  Link as LinkIcon
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface SocialSharingProps {
  title: string
  description?: string
  url?: string
  imageUrl?: string
  type?: 'nft' | 'marketplace' | 'referral'
  referralCode?: string
  onShare?: (platform: string) => void
}

const SocialSharing = ({
  title,
  description = "Check out this epic NFT on PlayChange.io!",
  url = "",
  imageUrl = "",
  type = 'nft',
  referralCode,
  onShare
}: SocialSharingProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const shareUrl = referralCode ? `${url}?ref=${referralCode}` : url
  const encodedUrl = encodeURIComponent(shareUrl)
  const encodedTitle = encodeURIComponent(title)
  const encodedDescription = encodeURIComponent(description)

  const socialPlatforms = [
    {
      name: "Facebook",
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedTitle} - ${encodedDescription}`,
      color: "hover:bg-blue-600",
      bgColor: "bg-blue-500"
    },
    {
      name: "Twitter/X",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle} - ${encodedDescription}&hashtags=PlayChange,NFT,Gaming`,
      color: "hover:bg-gray-800",
      bgColor: "bg-gray-700"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "#", // Instagram doesn't support direct sharing via URL
      color: "hover:bg-pink-600",
      bgColor: "bg-pink-500",
      isSpecial: true
    },
    {
      name: "TikTok",
      icon: MessageSquare,
      url: "#", // TikTok sharing would need special handling
      color: "hover:bg-black",
      bgColor: "bg-gray-900",
      isSpecial: true
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "#", // YouTube sharing for clips would need special handling
      color: "hover:bg-red-600",
      bgColor: "bg-red-500",
      isSpecial: true
    },
    {
      name: "Copy Link",
      icon: Copy,
      url: shareUrl,
      color: "hover:bg-orange-600",
      bgColor: "bg-orange-500",
      isCopy: true
    }
  ]

  const handleShare = async (platform: any) => {
    if (platform.isCopy) {
      try {
        await navigator.clipboard.writeText(shareUrl)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch (err) {
        console.error('Failed to copy link:', err)
      }
    } else if (platform.isSpecial) {
      // Handle special platforms that require different approaches
      if (platform.name === "Instagram") {
        // For Instagram, we could generate a story template or provide instructions
        alert("To share on Instagram: Screenshot this NFT and share to your story with #PlayChange #NFT")
      } else if (platform.name === "TikTok") {
        alert("Share this NFT on TikTok by creating a video about your gaming moment!")
      } else if (platform.name === "YouTube") {
        alert("Create a YouTube video showcasing this NFT clip!")
      }
    } else {
      window.open(platform.url, '_blank', 'noopener,noreferrer')
    }
    
    onShare?.(platform.name)
  }

  const getReferralReward = (platform: string) => {
    // Different rewards for different platforms
    const rewards = {
      "Facebook": "5 tokens",
      "Twitter/X": "3 tokens", 
      "Instagram": "10 tokens",
      "TikTok": "15 tokens",
      "YouTube": "25 tokens"
    }
    return rewards[platform as keyof typeof rewards] || "2 tokens"
  }

  return (
    <div className="relative">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="outline"
        size="sm"
        className="border-gray-600 text-white hover:bg-gray-700"
      >
        <Share2 className="w-4 h-4 mr-2" />
        Share
      </Button>

      {isOpen && (
        <motion.div
          className="absolute right-0 top-12 bg-gray-800 border border-gray-700 rounded-xl p-4 z-50 min-w-[300px] shadow-2xl backdrop-blur-sm"
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
        >
          <div className="mb-4">
            <h3 className="text-white font-bold mb-2 flex items-center">
              <Share2 className="w-4 h-4 mr-2 text-orange-500" />
              Share {type === 'marketplace' ? 'Marketplace' : type === 'referral' ? 'Referral' : 'NFT'}
            </h3>
            {referralCode && (
              <Badge className="bg-green-500/20 text-green-400 border border-green-500/30">
                <Users className="w-3 h-3 mr-1" />
                Earn rewards for shares!
              </Badge>
            )}
          </div>

          <div className="grid grid-cols-3 gap-3 mb-4">
            {socialPlatforms.map((platform, index) => (
              <motion.button
                key={platform.name}
                onClick={() => handleShare(platform)}
                className={`${platform.bgColor} ${platform.color} p-3 rounded-lg flex flex-col items-center space-y-1 transition-all duration-200 relative group`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <platform.icon className="w-5 h-5 text-white" />
                <span className="text-xs text-white font-medium">
                  {platform.name === "Twitter/X" ? "X" : platform.name === "Copy Link" ? "Copy" : platform.name}
                </span>
                
                {/* Reward indicator for referral sharing */}
                {referralCode && !platform.isCopy && (
                  <div className="absolute -top-1 -right-1 bg-green-500 text-white text-xs px-1 rounded-full">
                    +{getReferralReward(platform.name).split(' ')[0]}
                  </div>
                )}
                
                {/* Copy success indicator */}
                {platform.isCopy && copied && (
                  <motion.div
                    className="absolute inset-0 bg-green-500 rounded-lg flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <CheckCircle className="w-5 h-5 text-white" />
                  </motion.div>
                )}
              </motion.button>
            ))}
          </div>

          {/* Direct URL sharing */}
          <div className="border-t border-gray-700 pt-4">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={shareUrl}
                readOnly
                className="flex-1 bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white text-sm"
              />
              <Button
                size="sm"
                onClick={() => handleShare({ name: "Copy Link", isCopy: true })}
                className="bg-orange-500 hover:bg-orange-600 text-black"
              >
                {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </Button>
            </div>
          </div>

          {/* Referral info */}
          {referralCode && (
            <div className="mt-4 p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Heart className="w-4 h-4 text-green-400" />
                <span className="text-green-400 font-bold text-sm">Referral Rewards Active!</span>
              </div>
              <p className="text-gray-300 text-xs">
                Your friends get 10% off their first purchase, and you earn tokens for each successful referral!
              </p>
            </div>
          )}

          {/* Close button */}
          <div className="absolute top-2 right-2">
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <span className="sr-only">Close</span>
              ✕
            </button>
          </div>
        </motion.div>
      )}

      {/* Background overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}

export default SocialSharing