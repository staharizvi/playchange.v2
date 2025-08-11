"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Eye, Clock, Zap, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface SponsorAd {
  id: string
  title: string
  description: string
  imageUrl: string
  videoUrl?: string
  clickUrl: string
  sponsor: string
  sponsorLogo: string
  type: 'banner' | 'video' | 'interactive' | 'membership'
  priority: number
  startDate: string
  endDate: string
  targetAudience?: string[]
  isActive: boolean
  impressions: number
  clicks: number
  ctr: number
}

interface SponsorSlotProps {
  slotId: string
  size?: 'small' | 'medium' | 'large' | 'banner'
  position?: 'sidebar' | 'header' | 'content' | 'footer'
  className?: string
  fallbackContent?: React.ReactNode
}

// Simulated admin-managed ads - in production, this would come from an API/CMS
const mockSponsorAds: SponsorAd[] = [
  {
    id: "playchange-premium",
    title: "PlayChange Premium Membership",
    description: "Unlock exclusive NFT drops, premium games, and VIP support!",
    imageUrl: "/placeholder.svg?height=200&width=400&text=PlayChange+Premium",
    clickUrl: "/store",
    sponsor: "PlayChange",
    sponsorLogo: "/placeholder.svg?height=40&width=40&text=PC",
    type: "membership",
    priority: 100,
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    isActive: true,
    impressions: 125000,
    clicks: 3250,
    ctr: 2.6
  },
  {
    id: "gaming-headset-sponsor",
    title: "HyperSound Gaming Headset",
    description: "Experience gaming like never before with 7.1 surround sound",
    imageUrl: "/placeholder.svg?height=200&width=400&text=HyperSound+Gaming",
    videoUrl: "/placeholder-video.mp4",
    clickUrl: "https://hypersound-gaming.com?ref=playchange",
    sponsor: "HyperSound",
    sponsorLogo: "/placeholder.svg?height=40&width=40&text=HS",
    type: "interactive",
    priority: 80,
    startDate: "2024-01-15",
    endDate: "2024-03-15",
    targetAudience: ["gaming", "nft-collectors"],
    isActive: true,
    impressions: 89000,
    clicks: 2140,
    ctr: 2.4
  },
  {
    id: "crypto-wallet-sponsor",
    title: "SecureWallet Pro",
    description: "The safest way to store your NFTs and crypto assets",
    imageUrl: "/placeholder.svg?height=200&width=400&text=SecureWallet+Pro",
    clickUrl: "https://securewallet.com?ref=playchange",
    sponsor: "SecureWallet",
    sponsorLogo: "/placeholder.svg?height=40&width=40&text=SW",
    type: "banner",
    priority: 70,
    startDate: "2024-02-01",
    endDate: "2024-04-01",
    targetAudience: ["crypto", "nft-collectors"],
    isActive: true,
    impressions: 67000,
    clicks: 1340,
    ctr: 2.0
  },
  {
    id: "gaming-chair-sponsor",
    title: "ProGamer Elite Chair",
    description: "Game in comfort with ergonomic design and RGB lighting",
    imageUrl: "/placeholder.svg?height=200&width=400&text=ProGamer+Chair",
    clickUrl: "https://progamer-furniture.com?ref=playchange",
    sponsor: "ProGamer",
    sponsorLogo: "/placeholder.svg?height=40&width=40&text=PG",
    type: "banner",
    priority: 60,
    startDate: "2024-01-10",
    endDate: "2024-03-10",
    targetAudience: ["gaming", "streamer"],
    isActive: true,
    impressions: 45000,
    clicks: 810,
    ctr: 1.8
  }
]

const SponsorSlot = ({
  slotId,
  size = 'medium',
  position = 'content',
  className = '',
  fallbackContent
}: SponsorSlotProps) => {
  const [currentAd, setCurrentAd] = useState<SponsorAd | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hasViewed, setHasViewed] = useState(false)

  useEffect(() => {
    // Simulate fetching ad from admin system
    const fetchAd = async () => {
      // Filter active ads and sort by priority
      const activeAds = mockSponsorAds
        .filter(ad => ad.isActive && new Date(ad.endDate) > new Date())
        .sort((a, b) => b.priority - a.priority)
      
      if (activeAds.length > 0) {
        // Select ad based on position and targeting (simplified)
        const selectedAd = activeAds[0] // In production, this would be more sophisticated
        setCurrentAd(selectedAd)
        setIsVisible(true)
      }
    }

    fetchAd()
  }, [slotId, position])

  const handleAdClick = (ad: SponsorAd) => {
    // Track click analytics
    console.log(`Ad clicked: ${ad.id} - ${ad.title}`)
    
    // Update click count (in production, this would be an API call)
    ad.clicks += 1
    ad.ctr = (ad.clicks / ad.impressions) * 100
    
    // Open sponsor link
    window.open(ad.clickUrl, '_blank', 'noopener,noreferrer')
  }

  const handleAdView = (ad: SponsorAd) => {
    if (!hasViewed) {
      // Track impression analytics
      console.log(`Ad viewed: ${ad.id} - ${ad.title}`)
      ad.impressions += 1
      ad.ctr = (ad.clicks / ad.impressions) * 100
      setHasViewed(true)
    }
  }

  const getSizeClasses = () => {
    switch (size) {
      case 'small': return 'h-24 w-48'
      case 'medium': return 'h-32 w-64'
      case 'large': return 'h-48 w-96'
      case 'banner': return 'h-20 w-full max-w-4xl'
      default: return 'h-32 w-64'
    }
  }

  if (!currentAd && !fallbackContent) {
    return null
  }

  if (!currentAd && fallbackContent) {
    return <div className={className}>{fallbackContent}</div>
  }

  if (!currentAd) return null

  return (
    <motion.div
      className={`${getSizeClasses()} ${className} relative group`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.95 }}
      whileHover={{ scale: 1.02 }}
      onViewportEnter={() => handleAdView(currentAd)}
    >
      <Card className="h-full w-full bg-gradient-to-br from-gray-800 to-gray-900 border-orange-500/30 overflow-hidden cursor-pointer relative"
        onClick={() => handleAdClick(currentAd)}
      >
        {/* Ad Content */}
        <div className="relative h-full">
          <Image
            src={currentAd.imageUrl}
            alt={currentAd.title}
            fill
            className="object-cover"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          
          {/* PlayChange Branding Corner */}
          <div className="absolute top-2 left-2 bg-orange-500 text-black px-2 py-1 rounded text-xs font-bold">
            PlayChange
          </div>
          
          {/* Ad Type Badge */}
          <div className="absolute top-2 right-2">
            {currentAd.type === 'membership' && (
              <Badge className="bg-purple-500 text-white">
                <Star className="w-3 h-3 mr-1" />
                Premium
              </Badge>
            )}
            {currentAd.type === 'interactive' && (
              <Badge className="bg-blue-500 text-white">
                <Zap className="w-3 h-3 mr-1" />
                Interactive
              </Badge>
            )}
            {currentAd.type === 'video' && (
              <Badge className="bg-red-500 text-white">
                <Eye className="w-3 h-3 mr-1" />
                Video
              </Badge>
            )}
          </div>
          
          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-3">
            <div className="flex items-center space-x-2 mb-1">
              <Image
                src={currentAd.sponsorLogo}
                alt={currentAd.sponsor}
                width={16}
                height={16}
                className="rounded"
              />
              <span className="text-orange-400 text-xs font-bold">{currentAd.sponsor}</span>
              <span className="text-gray-400 text-xs">•</span>
              <span className="text-gray-400 text-xs">Sponsored</span>
            </div>
            
            <h4 className="text-white font-bold text-sm mb-1 line-clamp-1">
              {currentAd.title}
            </h4>
            
            {size !== 'small' && (
              <p className="text-gray-300 text-xs line-clamp-2 mb-2">
                {currentAd.description}
              </p>
            )}
            
            {size === 'large' && (
              <Button 
                size="sm" 
                className="bg-orange-500 hover:bg-orange-600 text-black font-bold text-xs"
                onClick={(e) => {
                  e.stopPropagation()
                  handleAdClick(currentAd)
                }}
              >
                Learn More
                <ExternalLink className="w-3 h-3 ml-1" />
              </Button>
            )}
          </div>
          
          {/* Hover Effect */}
          <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          
          {/* Performance Indicator (only visible to admins in production) */}
          {process.env.NODE_ENV === 'development' && (
            <div className="absolute bottom-0 right-0 bg-black/70 text-white text-xs p-1 m-1 rounded">
              CTR: {currentAd.ctr.toFixed(1)}%
            </div>
          )}
        </div>
      </Card>
      
      {/* Optional close button for certain ad types */}
      {currentAd.type === 'interactive' && (
        <button
          className="absolute -top-1 -right-1 w-5 h-5 bg-gray-600 hover:bg-gray-500 rounded-full flex items-center justify-center text-white text-xs"
          onClick={(e) => {
            e.stopPropagation()
            setIsVisible(false)
          }}
        >
          ×
        </button>
      )}
    </motion.div>
  )
}

export default SponsorSlot