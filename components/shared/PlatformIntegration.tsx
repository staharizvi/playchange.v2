"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Gamepad2,
  Tv,
  Video,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Settings,
  Cast,
  Share2,
  Heart,
  MessageSquare,
  Users,
  Radio,
  Monitor
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"

interface PlatformIntegrationProps {
  platforms?: ("playstation" | "xbox" | "netflix" | "twitch")[]
  remoteControlSupport?: boolean
  streamingEnabled?: boolean
}

const PlatformIntegration = ({
  platforms = ["playstation", "xbox", "netflix", "twitch"],
  remoteControlSupport = true,
  streamingEnabled = true
}: PlatformIntegrationProps) => {
  const [selectedPlatform, setSelectedPlatform] = useState(platforms[0])
  const [isConnected, setIsConnected] = useState(false)
  const [remoteMode, setRemoteMode] = useState(false)
  const [volume, setVolume] = useState([75])

  const platformConfigs = {
    playstation: {
      name: "PlayStation",
      color: "bg-blue-600",
      hoverColor: "hover:bg-blue-700",
      icon: Gamepad2,
      features: ["Remote Navigation", "Voice Commands", "Share to PS Network", "Trophy Integration"],
      controllerKeys: {
        up: "△ Triangle",
        down: "✕ Cross", 
        left: "◻ Square",
        right: "○ Circle",
        select: "R1 Select",
        back: "L1 Back"
      }
    },
    xbox: {
      name: "Xbox",
      color: "bg-green-600",
      hoverColor: "hover:bg-green-700",
      icon: Gamepad2,
      features: ["Remote Navigation", "Kinect Voice", "Share to Xbox Live", "Achievement Sync"],
      controllerKeys: {
        up: "Y Navigate Up",
        down: "A Navigate Down",
        left: "X Navigate Left", 
        right: "B Navigate Right",
        select: "RB Select",
        back: "LB Back"
      }
    },
    netflix: {
      name: "Netflix",
      color: "bg-red-600",
      hoverColor: "hover:bg-red-700",
      icon: Tv,
      features: ["Media Player", "Autoplay Ads", "Continue Watching", "Profile Integration"],
      controllerKeys: {
        up: "↑ Navigate Up",
        down: "↓ Navigate Down",
        left: "← Navigate Left",
        right: "→ Navigate Right", 
        select: "OK Select",
        back: "Back"
      }
    },
    twitch: {
      name: "Twitch",
      color: "bg-purple-600",
      hoverColor: "hover:bg-purple-700",
      icon: Video,
      features: ["Live Streaming", "Chat Integration", "Clip Creation", "Channel Integration"],
      controllerKeys: {
        up: "↑ Navigate Up",
        down: "↓ Navigate Down",
        left: "← Navigate Left",
        right: "→ Navigate Right",
        select: "Enter Select", 
        back: "Escape Back"
      }
    }
  }

  const currentPlatform = platformConfigs[selectedPlatform]

  // Simulate platform connection
  useEffect(() => {
    const connectTimeout = setTimeout(() => {
      setIsConnected(true)
    }, 2000)

    return () => clearTimeout(connectTimeout)
  }, [selectedPlatform])

  // Remote control key handler
  useEffect(() => {
    if (!remoteMode || !remoteControlSupport) return

    const handleKeyPress = (event: KeyboardEvent) => {
      event.preventDefault()
      
      const keyMap = {
        'ArrowUp': 'up',
        'ArrowDown': 'down', 
        'ArrowLeft': 'left',
        'ArrowRight': 'right',
        'Enter': 'select',
        'Escape': 'back',
        'Backspace': 'back'
      }

      const action = keyMap[event.key as keyof typeof keyMap]
      if (action) {
        console.log(`Platform ${selectedPlatform} remote action:`, action)
        // Here you would implement actual navigation logic
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [remoteMode, selectedPlatform, remoteControlSupport])

  return (
    <div className="space-y-6">
      {/* Platform Selector */}
      <Card className="bg-gray-800/50 border-gray-700 p-6 backdrop-blur-sm">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
          <Monitor className="w-5 h-5 mr-2 text-orange-500" />
          Platform Integration
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {platforms.map((platform) => {
            const config = platformConfigs[platform]
            const IconComponent = config.icon
            
            return (
              <motion.button
                key={platform}
                onClick={() => {
                  setSelectedPlatform(platform)
                  setIsConnected(false)
                }}
                className={`${config.color} ${config.hoverColor} p-4 rounded-xl text-white font-bold transition-all duration-300 ${
                  selectedPlatform === platform ? 'ring-2 ring-orange-500' : ''
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconComponent className="w-8 h-8 mx-auto mb-2" />
                {config.name}
              </motion.button>
            )
          })}
        </div>

        {/* Connection Status */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`w-3 h-3 rounded-full ${isConnected ? 'bg-green-500' : 'bg-orange-500'} animate-pulse`} />
            <span className="text-white font-medium">
              {isConnected ? `Connected to ${currentPlatform.name}` : `Connecting to ${currentPlatform.name}...`}
            </span>
          </div>
          
          {remoteControlSupport && (
            <Button
              onClick={() => setRemoteMode(!remoteMode)}
              size="sm"
              className={`${remoteMode ? 'bg-orange-500 text-black' : 'bg-gray-700 text-white'} font-bold`}
            >
              <Gamepad2 className="w-4 h-4 mr-2" />
              {remoteMode ? 'Remote ON' : 'Remote OFF'}
            </Button>
          )}
        </div>
      </Card>

      {/* Platform Features */}
      <Card className="bg-gray-800/50 border-gray-700 p-6 backdrop-blur-sm">
        <h4 className="text-lg font-bold text-white mb-4">
          {currentPlatform.name} Features
        </h4>
        
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {currentPlatform.features.map((feature, index) => (
            <motion.div
              key={feature}
              className="flex items-center space-x-3 p-3 bg-gray-700/30 rounded-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-2 h-2 bg-orange-500 rounded-full" />
              <span className="text-gray-300">{feature}</span>
              <Badge className="bg-green-500/20 text-green-400 border border-green-500/30 ml-auto">
                Active
              </Badge>
            </motion.div>
          ))}
        </div>

        {/* Remote Control Guide */}
        {remoteMode && remoteControlSupport && (
          <motion.div
            className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h5 className="text-orange-400 font-bold mb-3 flex items-center">
              <Gamepad2 className="w-4 h-4 mr-2" />
              {currentPlatform.name} Remote Controls
            </h5>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
              {Object.entries(currentPlatform.controllerKeys).map(([action, key]) => (
                <div key={action} className="flex items-center space-x-2">
                  <kbd className="px-2 py-1 bg-gray-700 rounded text-orange-400 font-mono text-xs">
                    {key}
                  </kbd>
                  <span className="text-gray-300 capitalize">{action}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </Card>

      {/* Netflix-style Media Player Integration */}
      {selectedPlatform === 'netflix' && (
        <Card className="bg-gray-800/50 border-gray-700 p-6 backdrop-blur-sm">
          <h4 className="text-lg font-bold text-white mb-4 flex items-center">
            <Play className="w-5 h-5 mr-2 text-red-500" />
            Play Motion - Netflix Integration
          </h4>
          
          <div className="bg-gray-900 rounded-xl p-4 mb-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h5 className="text-white font-bold">PlayChange Membership Ad</h5>
                <p className="text-gray-400 text-sm">Premium gaming moments • Ad supported</p>
              </div>
              <Badge className="bg-red-500 text-white">Live</Badge>
            </div>
            
            {/* Video Player Controls */}
            <div className="flex items-center space-x-4">
              <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                <Play className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-gray-600 text-white">
                <Volume2 className="w-4 h-4" />
              </Button>
              <div className="flex-1">
                <Slider
                  value={volume}
                  onValueChange={setVolume}
                  max={100}
                  step={1}
                  className="w-full"
                />
              </div>
              <Button size="sm" variant="outline" className="border-gray-600 text-white">
                <Maximize className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="mt-4 text-sm text-gray-400">
              Auto-switching to paid ads when available • Next: Gaming Headset Ad
            </div>
          </div>
        </Card>
      )}

      {/* Twitch Live Streaming Integration */}
      {selectedPlatform === 'twitch' && streamingEnabled && (
        <Card className="bg-gray-800/50 border-gray-700 p-6 backdrop-blur-sm">
          <h4 className="text-lg font-bold text-white mb-4 flex items-center">
            <Radio className="w-5 h-5 mr-2 text-purple-500" />
            Live Streaming Integration
          </h4>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                <div>
                  <p className="text-white font-medium">NFT Drop Event</p>
                  <p className="text-gray-400 text-sm">Live showcase of epic gaming moments</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-purple-400" />
                <span className="text-purple-400 font-bold">1,247</span>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                <Video className="w-4 h-4 mr-2" />
                Go Live
              </Button>
              <Button variant="outline" className="border-gray-600 text-white">
                <MessageSquare className="w-4 h-4 mr-2" />
                Chat
              </Button>
              <Button variant="outline" className="border-gray-600 text-white">
                <Share2 className="w-4 h-4 mr-2" />
                Clip
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* Platform Store Integration */}
      {(selectedPlatform === 'playstation' || selectedPlatform === 'xbox') && (
        <Card className="bg-gray-800/50 border-gray-700 p-6 backdrop-blur-sm">
          <h4 className="text-lg font-bold text-white mb-4 flex items-center">
            <currentPlatform.icon className="w-5 h-5 mr-2" />
            {currentPlatform.name} Store Integration
          </h4>
          
          <div className="bg-gray-900 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-white font-medium">Epic CryptoBoxers NFT</p>
                <p className="text-gray-400 text-sm">Available in {currentPlatform.name} Store</p>
              </div>
              <Button size="sm" className={`${currentPlatform.color} ${currentPlatform.hoverColor} text-white`}>
                View in Store
              </Button>
            </div>
            
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <Heart className="w-4 h-4 text-red-500" />
                <span className="text-gray-300">2.1K likes</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4 text-blue-500" />
                <span className="text-gray-300">850 owners</span>
              </div>
              <Badge className="bg-green-500 text-black">Trending</Badge>
            </div>
          </div>
        </Card>
      )}
    </div>
  )
}

export default PlatformIntegration