"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  RotateCcw,
  RotateCw,
  Settings,
  Fullscreen,
  Download,
  Share2,
  Heart,
  MessageSquare,
  Zap,
  Star,
  Clock,
  Eye,
  Skip
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import Image from "next/image"

interface PlayMotionPlayerProps {
  nftContent?: {
    id: string
    title: string
    creator: string
    videoUrl?: string
    thumbnailUrl?: string
    duration?: number
  }
  autoplayAds?: boolean
  membershipTier?: 'free' | 'premium' | 'vip'
  onPlayModeChange?: (isPlaying: boolean) => void
}

interface Ad {
  id: string
  title: string
  sponsor: string
  duration: number
  videoUrl: string
  clickUrl: string
  type: 'membership' | 'sponsor'
  skipAfter?: number
}

const PlayMotionPlayer = ({
  nftContent,
  autoplayAds = true,
  membershipTier = 'free',
  onPlayModeChange
}: PlayMotionPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState([75])
  const [isMuted, setIsMuted] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showControls, setShowControls] = useState(true)
  const [playbackRate, setPlaybackRate] = useState(1)
  const [currentAd, setCurrentAd] = useState<Ad | null>(null)
  const [adProgress, setAdProgress] = useState(0)
  const [canSkipAd, setCanSkipAd] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const controlsTimeoutRef = useRef<NodeJS.Timeout>()

  // Sample ads - in production, these would come from an ad server
  const sampleAds: Ad[] = [
    {
      id: 'playchange-premium',
      title: 'PlayChange Premium Membership',
      sponsor: 'PlayChange',
      duration: 30,
      videoUrl: '/sample-ad.mp4',
      clickUrl: '/premium',
      type: 'membership',
      skipAfter: 5
    },
    {
      id: 'gaming-headset',
      title: 'HyperSound Gaming Headset',
      sponsor: 'HyperSound',
      duration: 15,
      videoUrl: '/sample-sponsor-ad.mp4',
      clickUrl: 'https://hypersound.com?ref=playchange',
      type: 'sponsor',
      skipAfter: 5
    }
  ]

  // Auto-hide controls
  useEffect(() => {
    const handleMouseMove = () => {
      setShowControls(true)
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current)
      }
      controlsTimeoutRef.current = setTimeout(() => {
        if (isPlaying) setShowControls(false)
      }, 3000)
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('mousemove', handleMouseMove)
      return () => {
        container.removeEventListener('mousemove', handleMouseMove)
        if (controlsTimeoutRef.current) {
          clearTimeout(controlsTimeoutRef.current)
        }
      }
    }
  }, [isPlaying])

  // Handle ad logic
  useEffect(() => {
    if (autoplayAds && membershipTier === 'free' && !currentAd) {
      // Show membership commercial first, then switch to paid ads when available
      const defaultAd = sampleAds.find(ad => ad.type === 'membership')
      const paidAd = sampleAds.find(ad => ad.type === 'sponsor')
      
      // Simulate ad selection logic - in production this would be more sophisticated
      const selectedAd = Math.random() > 0.5 && paidAd ? paidAd : defaultAd
      if (selectedAd) {
        setCurrentAd(selectedAd)
        setAdProgress(0)
        setCanSkipAd(false)
        if (selectedAd.skipAfter) {
          setTimeout(() => setCanSkipAd(true), selectedAd.skipAfter * 1000)
        }
      }
    }
  }, [autoplayAds, membershipTier, currentAd])

  const togglePlayPause = () => {
    const video = videoRef.current
    if (!video) return

    if (isPlaying) {
      video.pause()
    } else {
      video.play()
    }
    setIsPlaying(!isPlaying)
    onPlayModeChange?.(!isPlaying)
  }

  const handleTimeUpdate = () => {
    const video = videoRef.current
    if (!video) return
    
    setCurrentTime(video.currentTime)
    
    if (currentAd) {
      const progress = (video.currentTime / currentAd.duration) * 100
      setAdProgress(progress)
    }
  }

  const handleLoadedMetadata = () => {
    const video = videoRef.current
    if (!video) return
    setDuration(video.duration)
  }

  const handleSeek = (value: number[]) => {
    const video = videoRef.current
    if (!video || currentAd) return // Don't allow seeking during ads
    
    const newTime = (value[0] / 100) * duration
    video.currentTime = newTime
    setCurrentTime(newTime)
  }

  const handleVolumeChange = (value: number[]) => {
    const video = videoRef.current
    if (!video) return
    
    const newVolume = value[0]
    video.volume = newVolume / 100
    setVolume(value)
    setIsMuted(newVolume === 0)
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return
    
    if (isMuted) {
      video.volume = volume[0] / 100
      setIsMuted(false)
    } else {
      video.volume = 0
      setIsMuted(true)
    }
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  const skipAd = () => {
    if (canSkipAd && currentAd) {
      setCurrentAd(null)
      setAdProgress(0)
      setCanSkipAd(false)
    }
  }

  const handleAdClick = () => {
    if (currentAd) {
      window.open(currentAd.clickUrl, '_blank', 'noopener,noreferrer')
    }
  }

  const changePlaybackRate = (rate: number) => {
    const video = videoRef.current
    if (!video) return
    
    video.playbackRate = rate
    setPlaybackRate(rate)
    setShowSettings(false)
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-video bg-black rounded-xl overflow-hidden group"
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
        poster={nftContent?.thumbnailUrl || "/placeholder.svg?height=400&width=600&text=NFT+Video"}
        preload="metadata"
      >
        <source src={currentAd?.videoUrl || nftContent?.videoUrl || "/sample-nft-video.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Ad Overlay */}
      {currentAd && (
        <motion.div
          className="absolute inset-0 bg-black/80 flex items-center justify-center cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleAdClick}
        >
          <div className="text-center">
            <motion.div
              className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mb-4 mx-auto"
              animate={{
                scale: [1, 1.1, 1],
                boxShadow: [
                  "0 0 20px rgba(255, 111, 0, 0.5)",
                  "0 0 40px rgba(255, 111, 0, 0.8)",
                  "0 0 20px rgba(255, 111, 0, 0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {currentAd.type === 'membership' ? (
                <Star className="w-10 h-10 text-black" />
              ) : (
                <Zap className="w-10 h-10 text-black" />
              )}
            </motion.div>
            
            <h3 className="text-2xl font-bold text-white mb-2">{currentAd.title}</h3>
            <p className="text-orange-400 font-medium mb-4">Sponsored by {currentAd.sponsor}</p>
            
            <div className="flex items-center justify-center space-x-4">
              <Badge className="bg-orange-500 text-black">
                Click to learn more
              </Badge>
              {canSkipAd && (
                <Button
                  onClick={(e) => {
                    e.stopPropagation()
                    skipAd()
                  }}
                  className="bg-gray-600 hover:bg-gray-500 text-white"
                >
                  <Skip className="w-4 h-4 mr-2" />
                  Skip Ad
                </Button>
              )}
            </div>
            
            {/* Ad Progress */}
            <div className="w-64 mx-auto mt-4">
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-orange-500 h-2 rounded-full transition-all duration-100"
                  style={{ width: `${adProgress}%` }}
                />
              </div>
              <div className="flex justify-between mt-2 text-sm text-gray-400">
                <span>Ad {canSkipAd ? '(skippable)' : `- skip in ${Math.max(0, (currentAd.skipAfter || 0) - Math.floor(currentTime))}s`}</span>
                <span>{formatTime(currentAd.duration - currentTime)}</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Main Play Button Overlay */}
      {!isPlaying && !currentAd && (
        <motion.div
          className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={togglePlayPause}
        >
          <motion.div
            className="w-24 h-24 bg-orange-500/90 backdrop-blur-sm rounded-full flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="w-12 h-12 text-black ml-2" />
          </motion.div>
        </motion.div>
      )}

      {/* Controls */}
      <AnimatePresence>
        {(showControls || !isPlaying) && !currentAd && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            {/* Progress Bar */}
            <div className="mb-4">
              <Slider
                value={duration ? [(currentTime / duration) * 100] : [0]}
                onValueChange={handleSeek}
                max={100}
                step={0.1}
                className="w-full"
              />
              <div className="flex justify-between mt-1 text-xs text-gray-300">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Control Buttons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Button
                  size="sm"
                  onClick={togglePlayPause}
                  className="bg-orange-500 hover:bg-orange-600 text-black"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </Button>
                
                <div className="flex items-center space-x-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={toggleMute}
                    className="text-white hover:text-orange-400"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </Button>
                  <div className="w-20">
                    <Slider
                      value={isMuted ? [0] : volume}
                      onValueChange={handleVolumeChange}
                      max={100}
                      step={1}
                    />
                  </div>
                </div>

                <div className="text-white text-sm">
                  {playbackRate !== 1 && (
                    <Badge className="bg-orange-500 text-black">
                      {playbackRate}x
                    </Badge>
                  )}
                </div>
              </div>

              {/* NFT Info */}
              {nftContent && (
                <div className="flex items-center space-x-3">
                  <div className="text-right">
                    <p className="text-white font-medium text-sm">{nftContent.title}</p>
                    <p className="text-gray-400 text-xs">by {nftContent.creator}</p>
                  </div>
                </div>
              )}

              <div className="flex items-center space-x-2">
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-white hover:text-orange-400"
                >
                  <Heart className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-white hover:text-orange-400"
                >
                  <Share2 className="w-4 h-4" />
                </Button>
                <div className="relative">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setShowSettings(!showSettings)}
                    className="text-white hover:text-orange-400"
                  >
                    <Settings className="w-4 h-4" />
                  </Button>
                  
                  {/* Settings Dropdown */}
                  <AnimatePresence>
                    {showSettings && (
                      <motion.div
                        className="absolute bottom-full right-0 mb-2 bg-gray-800 border border-gray-700 rounded-lg p-3 min-w-[150px]"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                      >
                        <p className="text-white font-medium mb-2 text-sm">Playback Speed</p>
                        {[0.5, 0.75, 1, 1.25, 1.5, 2].map((rate) => (
                          <button
                            key={rate}
                            onClick={() => changePlaybackRate(rate)}
                            className={`block w-full text-left px-2 py-1 rounded text-sm transition-colors ${
                              playbackRate === rate
                                ? 'bg-orange-500 text-black'
                                : 'text-gray-300 hover:text-white hover:bg-gray-700'
                            }`}
                          >
                            {rate}x {rate === 1 ? '(Normal)' : ''}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={toggleFullscreen}
                  className="text-white hover:text-orange-400"
                >
                  <Fullscreen className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Membership Upgrade Prompt */}
      {membershipTier === 'free' && !currentAd && (
        <div className="absolute top-4 right-4">
          <motion.div
            className="bg-purple-500 text-white px-3 py-2 rounded-lg text-sm font-medium"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Star className="w-4 h-4 inline mr-1" />
            Upgrade to remove ads
          </motion.div>
        </div>
      )}

      {/* Auto-switch notification */}
      {autoplayAds && (
        <div className="absolute bottom-20 left-4">
          <Badge className="bg-blue-500/80 text-white">
            <Zap className="w-3 h-3 mr-1" />
            Auto-switching to paid ads when available
          </Badge>
        </div>
      )}
    </div>
  )
}

export default PlayMotionPlayer