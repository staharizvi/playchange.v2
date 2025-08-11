"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  MessageSquare,
  Send,
  Mic,
  MicOff,
  Phone,
  PhoneCall,
  Bot,
  User,
  Zap,
  HelpCircle,
  ShoppingCart,
  Settings,
  Heart,
  X,
  Volume2,
  VolumeX,
  Minimize2,
  Maximize2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
  type?: 'text' | 'suggestion' | 'action' | 'nft-recommendation'
  metadata?: any
}

interface AIVirtualAssistantProps {
  customerServicePhone?: string
  position?: 'bottom-right' | 'bottom-left' | 'center'
  theme?: 'playchange' | 'dark' | 'light'
}

const AIVirtualAssistant = ({
  customerServicePhone = "+1-800-PLAYCHANGE",
  position = 'bottom-right',
  theme = 'playchange'
}: AIVirtualAssistantProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isListening, setIsListening] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentContext, setCurrentContext] = useState<string>('general')
  
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Position classes
  const getPositionClasses = () => {
    switch (position) {
      case 'bottom-left': return 'bottom-6 left-6'
      case 'center': return 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
      default: return 'bottom-6 right-6'
    }
  }

  // Initialize with welcome message
  useEffect(() => {
    const welcomeMessage: Message = {
      id: 'welcome',
      role: 'assistant',
      content: "Hi! I'm PlayBot, your AI gaming assistant. I can help you find NFTs, guide purchases, answer questions, or connect you with support. What can I help you with today?",
      timestamp: new Date(),
      type: 'text'
    }
    setMessages([welcomeMessage])
  }, [])

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // AI Response simulation
  const generateAIResponse = async (userMessage: string): Promise<Message> => {
    setIsTyping(true)
    
    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    let response = ""
    let messageType: Message['type'] = 'text'
    let metadata = {}

    // Context-aware responses
    const lowerMessage = userMessage.toLowerCase()
    
    if (lowerMessage.includes('nft') || lowerMessage.includes('buy') || lowerMessage.includes('purchase')) {
      setCurrentContext('nft-shopping')
      response = "I'd love to help you find the perfect NFT! Based on your interests, here are some epic gaming moments you might enjoy:"
      messageType = 'nft-recommendation'
      metadata = {
        recommendations: [
          { title: "Epic CryptoBoxers Knockout", price: "2.5 ETH", thumbnail: "/placeholder.svg?height=60&width=60&text=NFT1" },
          { title: "Token Quest Speedrun WR", price: "1.8 ETH", thumbnail: "/placeholder.svg?height=60&width=60&text=NFT2" }
        ]
      }
    } else if (lowerMessage.includes('help') || lowerMessage.includes('support')) {
      setCurrentContext('support')
      response = "I'm here to help! You can reach our human support team at " + customerServicePhone + " or I can assist you with common questions right now. What specific issue are you facing?"
    } else if (lowerMessage.includes('price') || lowerMessage.includes('value') || lowerMessage.includes('worth')) {
      response = "NFT prices are determined by rarity, creator reputation, and community demand. I can help you understand the market value of specific pieces. Which NFT are you interested in?"
    } else if (lowerMessage.includes('gas') || lowerMessage.includes('fee')) {
      response = "PlayChange covers gas fees for Premium members! Free users pay standard blockchain fees. Would you like to learn about our Premium membership benefits?"
    } else if (lowerMessage.includes('wallet') || lowerMessage.includes('connect')) {
      response = "To get started, connect your crypto wallet. We support MetaMask, Coinbase Wallet, and WalletConnect. Need help setting up a wallet?"
    } else {
      // General responses
      const generalResponses = [
        "That's a great question! Let me help you with that. PlayChange is designed to make gaming NFTs accessible and valuable.",
        "I understand! The gaming NFT space can be complex. I'm here to guide you through every step.",
        "Absolutely! PlayChange focuses on creating value through epic gaming moments. What would you like to know more about?",
        "Great point! Our platform combines gaming, social impact, and blockchain technology. How can I explain this better?"
      ]
      response = generalResponses[Math.floor(Math.random() * generalResponses.length)]
    }

    setIsTyping(false)
    
    return {
      id: Date.now().toString(),
      role: 'assistant',
      content: response,
      timestamp: new Date(),
      type: messageType,
      metadata
    }
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue("")

    // Generate AI response
    const aiResponse = await generateAIResponse(inputValue)
    setMessages(prev => [...prev, aiResponse])
  }

  const handleVoiceInput = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert("Voice recognition not supported in this browser")
      return
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    const recognition = new SpeechRecognition()
    
    recognition.continuous = false
    recognition.interimResults = false
    recognition.lang = 'en-US'

    recognition.onstart = () => {
      setIsListening(true)
    }

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript
      setInputValue(transcript)
    }

    recognition.onend = () => {
      setIsListening(false)
    }

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error)
      setIsListening(false)
    }

    recognition.start()
  }

  const quickActions = [
    { label: "Find NFTs", icon: ShoppingCart, action: () => setInputValue("I'm looking for gaming NFTs") },
    { label: "Get Help", icon: HelpCircle, action: () => setInputValue("I need help with my account") },
    { label: "Contact Support", icon: Phone, action: () => window.open(`tel:${customerServicePhone}`) },
    { label: "Settings", icon: Settings, action: () => setInputValue("How do I change my settings?") }
  ]

  return (
    <>
      {/* Chat Trigger Button */}
      {!isOpen && (
        <motion.div
          className={`fixed ${getPositionClasses()} z-50`}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            onClick={() => setIsOpen(true)}
            className="w-16 h-16 rounded-full bg-orange-500 hover:bg-orange-600 text-black shadow-2xl relative group"
          >
            <MessageSquare className="w-8 h-8" />
            
            {/* Notification indicator */}
            <motion.div
              className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-white text-xs font-bold">!</span>
            </motion.div>
            
            {/* Hover tooltip */}
            <div className="absolute bottom-full mb-2 right-0 bg-black text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Chat with PlayBot AI
            </div>
          </Button>
        </motion.div>
      )}

      {/* Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`fixed ${getPositionClasses()} z-50`}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
          >
            <Card className={`${
              isMinimized ? 'h-16' : 'h-[500px]'
            } w-80 bg-gray-800/95 border-orange-500/50 backdrop-blur-md shadow-2xl transition-all duration-300`}>
              
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-700">
                <div className="flex items-center space-x-3">
                  <Avatar className="w-8 h-8 bg-orange-500">
                    <AvatarFallback className="bg-orange-500 text-black">
                      <Bot className="w-4 h-4" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-white font-bold text-sm">PlayBot AI</h3>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-xs text-green-400">Online</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setIsMuted(!isMuted)}
                    className="w-6 h-6 p-0 text-gray-400 hover:text-white"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="w-6 h-6 p-0 text-gray-400 hover:text-white"
                  >
                    {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setIsOpen(false)}
                    className="w-6 h-6 p-0 text-gray-400 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {!isMinimized && (
                <>
                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4 h-80">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`max-w-[70%] ${message.role === 'user' ? 'bg-orange-500 text-black' : 'bg-gray-700 text-white'} rounded-lg p-3`}>
                          <p className="text-sm">{message.content}</p>
                          
                          {/* NFT Recommendations */}
                          {message.type === 'nft-recommendation' && message.metadata?.recommendations && (
                            <div className="mt-3 space-y-2">
                              {message.metadata.recommendations.map((nft: any, index: number) => (
                                <div key={index} className="bg-black/20 rounded p-2 flex items-center space-x-2">
                                  <div className="w-8 h-8 bg-orange-200 rounded"></div>
                                  <div className="flex-1">
                                    <p className="text-xs font-medium">{nft.title}</p>
                                    <p className="text-xs text-orange-200">{nft.price}</p>
                                  </div>
                                  <Button size="sm" className="bg-orange-600 hover:bg-orange-700 text-white text-xs h-6">
                                    View
                                  </Button>
                                </div>
                              ))}
                            </div>
                          )}
                          
                          <span className="text-xs opacity-75 mt-1 block">
                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </span>
                        </div>
                      </div>
                    ))}
                    
                    {/* Typing indicator */}
                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="bg-gray-700 rounded-lg p-3">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" />
                            <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                            <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Quick Actions */}
                  <div className="px-4 py-2 border-t border-gray-700">
                    <div className="flex space-x-2 mb-2">
                      {quickActions.map((action, index) => (
                        <Button
                          key={index}
                          size="sm"
                          variant="outline"
                          onClick={action.action}
                          className="border-gray-600 text-white hover:bg-gray-700 text-xs h-8"
                        >
                          <action.icon className="w-3 h-3 mr-1" />
                          {action.label}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Input */}
                  <div className="p-4 border-t border-gray-700">
                    <div className="flex space-x-2">
                      <input
                        ref={inputRef}
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="Type your message..."
                        className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 text-sm focus:border-orange-500 focus:outline-none"
                      />
                      <Button
                        size="sm"
                        onClick={handleVoiceInput}
                        className={`w-8 h-8 p-0 ${isListening ? 'bg-red-500 hover:bg-red-600' : 'bg-gray-600 hover:bg-gray-500'} text-white`}
                      >
                        {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                      </Button>
                      <Button
                        size="sm"
                        onClick={handleSendMessage}
                        className="w-8 h-8 p-0 bg-orange-500 hover:bg-orange-600 text-black"
                      >
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    {/* Customer Service Link */}
                    <div className="mt-2 text-center">
                      <Button
                        variant="link"
                        size="sm"
                        onClick={() => window.open(`tel:${customerServicePhone}`)}
                        className="text-orange-400 hover:text-orange-300 text-xs"
                      >
                        <PhoneCall className="w-3 h-3 mr-1" />
                        Need human support? Call {customerServicePhone}
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default AIVirtualAssistant