"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Trophy,
  Star,
  Target,
  Zap,
  Crown,
  Award,
  Medal,
  Shield,
  Flame,
  Users,
  TrendingUp,
  Gift,
  Coins,
  Heart,
  Share2,
  Eye,
  MessageSquare,
  ChevronUp,
  ChevronDown,
  Lock,
  Unlock,
  CheckCircle,
  Calendar,
  Timer
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

interface GamificationProps {
  userId?: string
  showLeaderboard?: boolean
  showAchievements?: boolean
  showRewards?: boolean
}

interface Achievement {
  id: string
  title: string
  description: string
  icon: any
  rarity: 'common' | 'rare' | 'epic' | 'legendary'
  progress: number
  maxProgress: number
  unlocked: boolean
  reward: {
    type: 'tokens' | 'nft' | 'badge' | 'title'
    amount?: number
    item?: string
  }
  category: 'social' | 'trading' | 'collection' | 'engagement'
}

interface LeaderboardEntry {
  id: string
  username: string
  avatar: string
  score: number
  rank: number
  level: number
  badges: string[]
  change: 'up' | 'down' | 'same'
}

const Gamification = ({
  userId = "current-user",
  showLeaderboard = true,
  showAchievements = true,
  showRewards = true
}: GamificationProps) => {
  const [selectedTab, setSelectedTab] = useState("overview")
  const [userLevel, setUserLevel] = useState(12)
  const [userXP, setUserXP] = useState(2340)
  const [xpToNext, setXpToNext] = useState(660)
  const [rewardStreak, setRewardStreak] = useState(5)
  const [showXPAnimation, setShowXPAnimation] = useState(false)

  const achievements: Achievement[] = [
    {
      id: 'first-purchase',
      title: 'First Purchase',
      description: 'Make your first NFT purchase',
      icon: Trophy,
      rarity: 'common',
      progress: 1,
      maxProgress: 1,
      unlocked: true,
      reward: { type: 'tokens', amount: 50 },
      category: 'trading'
    },
    {
      id: 'social-butterfly',
      title: 'Social Butterfly',
      description: 'Share 25 NFTs on social media',
      icon: Share2,
      rarity: 'rare',
      progress: 18,
      maxProgress: 25,
      unlocked: false,
      reward: { type: 'tokens', amount: 100 },
      category: 'social'
    },
    {
      id: 'collector-supreme',
      title: 'Collector Supreme',
      description: 'Own 100 unique NFTs',
      icon: Crown,
      rarity: 'epic',
      progress: 67,
      maxProgress: 100,
      unlocked: false,
      reward: { type: 'nft', item: 'Exclusive Collector Badge NFT' },
      category: 'collection'
    },
    {
      id: 'legendary-trader',
      title: 'Legendary Trader',
      description: 'Complete trades worth 50 ETH',
      icon: Medal,
      rarity: 'legendary',
      progress: 32.5,
      maxProgress: 50,
      unlocked: false,
      reward: { type: 'title', item: 'Trading Legend' },
      category: 'trading'
    },
    {
      id: 'community-champion',
      title: 'Community Champion',
      description: 'Help 10 new users get started',
      icon: Heart,
      rarity: 'rare',
      progress: 6,
      maxProgress: 10,
      unlocked: false,
      reward: { type: 'tokens', amount: 200 },
      category: 'social'
    },
    {
      id: 'daily-visitor',
      title: 'Daily Visitor',
      description: 'Visit PlayChange for 30 consecutive days',
      icon: Calendar,
      rarity: 'epic',
      progress: 22,
      maxProgress: 30,
      unlocked: false,
      reward: { type: 'badge', item: 'Dedication Badge' },
      category: 'engagement'
    }
  ]

  const leaderboard: LeaderboardEntry[] = [
    {
      id: '1',
      username: 'CryptoKing_97',
      avatar: '/placeholder.svg?height=40&width=40&text=CK',
      score: 15420,
      rank: 1,
      level: 24,
      badges: ['legendary', 'collector', 'trader'],
      change: 'same'
    },
    {
      id: '2',
      username: 'NFT_Master',
      avatar: '/placeholder.svg?height=40&width=40&text=NM',
      score: 14890,
      rank: 2,
      level: 23,
      badges: ['epic', 'social'],
      change: 'up'
    },
    {
      id: '3',
      username: 'GameChanger_X',
      avatar: '/placeholder.svg?height=40&width=40&text=GC',
      score: 13750,
      rank: 3,
      level: 22,
      badges: ['rare', 'engagement'],
      change: 'down'
    },
    {
      id: '4',
      username: 'PlayChange_Pro',
      avatar: '/placeholder.svg?height=40&width=40&text=PC',
      score: 12340,
      rank: 4,
      level: 21,
      badges: ['trading', 'collector'],
      change: 'up'
    },
    {
      id: '5',
      username: 'You',
      avatar: '/placeholder.svg?height=40&width=40&text=YU',
      score: 11200,
      rank: 5,
      level: userLevel,
      badges: ['social', 'engagement'],
      change: 'up'
    }
  ]

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'legendary': return 'from-yellow-400 to-orange-500'
      case 'epic': return 'from-purple-500 to-pink-500'
      case 'rare': return 'from-blue-500 to-cyan-500'
      default: return 'from-gray-500 to-gray-600'
    }
  }

  const getRarityBadgeColor = (rarity: string) => {
    switch (rarity) {
      case 'legendary': return 'bg-yellow-500 text-black'
      case 'epic': return 'bg-purple-500 text-white'
      case 'rare': return 'bg-blue-500 text-white'
      default: return 'bg-gray-500 text-white'
    }
  }

  const simulateXPGain = (amount: number) => {
    setShowXPAnimation(true)
    setUserXP(prev => prev + amount)
    setTimeout(() => setShowXPAnimation(false), 2000)
  }

  const dailyRewards = [
    { day: 1, reward: '10 tokens', claimed: true },
    { day: 2, reward: '15 tokens', claimed: true },
    { day: 3, reward: '20 tokens', claimed: true },
    { day: 4, reward: '25 tokens', claimed: true },
    { day: 5, reward: '30 tokens', claimed: true },
    { day: 6, reward: 'Rare NFT', claimed: false, available: true },
    { day: 7, reward: 'Epic Badge', claimed: false, available: false }
  ]

  const challengesThisWeek = [
    {
      id: 'social-week',
      title: 'Social Media Challenge',
      description: 'Share 5 NFTs this week',
      progress: 3,
      maxProgress: 5,
      reward: '100 tokens',
      timeLeft: '2 days',
      difficulty: 'easy'
    },
    {
      id: 'trading-week',
      title: 'Trading Challenge',
      description: 'Complete 3 successful trades',
      progress: 1,
      maxProgress: 3,
      reward: 'Trading Badge',
      timeLeft: '4 days',
      difficulty: 'medium'
    },
    {
      id: 'collection-week',
      title: 'Collector Challenge',
      description: 'Add 10 new NFTs to collection',
      progress: 7,
      maxProgress: 10,
      reward: 'Epic Mystery Box',
      timeLeft: '6 days',
      difficulty: 'hard'
    }
  ]

  return (
    <div className="space-y-6">
      {/* XP Animation */}
      <AnimatePresence>
        {showXPAnimation && (
          <motion.div
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: -50 }}
          >
            <div className="bg-orange-500 text-black px-6 py-3 rounded-full font-bold text-lg">
              +50 XP!
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* User Progress Overview */}
      <Card className="bg-gray-800/50 border-gray-700 p-6 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
              <span className="text-2xl font-black text-black">{userLevel}</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Level {userLevel}</h3>
              <p className="text-gray-400">Gaming Legend</p>
            </div>
          </div>
          
          <div className="text-right">
            <div className="text-2xl font-bold text-orange-400">{userXP.toLocaleString()} XP</div>
            <p className="text-gray-400 text-sm">{xpToNext} to next level</p>
          </div>
        </div>

        <div className="space-y-2 mb-6">
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Level Progress</span>
            <span className="text-orange-400">{Math.round((userXP / (userXP + xpToNext)) * 100)}%</span>
          </div>
          <Progress 
            value={(userXP / (userXP + xpToNext)) * 100} 
            className="h-3 bg-gray-700" 
          />
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-1 mb-2">
              <Flame className="w-5 h-5 text-orange-500" />
              <span className="text-2xl font-bold text-orange-400">{rewardStreak}</span>
            </div>
            <p className="text-gray-400 text-sm">Day Streak</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center space-x-1 mb-2">
              <Trophy className="w-5 h-5 text-yellow-500" />
              <span className="text-2xl font-bold text-yellow-400">23</span>
            </div>
            <p className="text-gray-400 text-sm">Achievements</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center space-x-1 mb-2">
              <Users className="w-5 h-5 text-blue-500" />
              <span className="text-2xl font-bold text-blue-400">#5</span>
            </div>
            <p className="text-gray-400 text-sm">Global Rank</p>
          </div>
        </div>
      </Card>

      {/* Gamification Tabs */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="grid w-full grid-cols-4 bg-gray-800/50">
          {showAchievements && (
            <TabsTrigger value="achievements" className="data-[state=active]:bg-orange-500 data-[state=active]:text-black">
              <Trophy className="w-4 h-4 mr-2" />
              Achievements
            </TabsTrigger>
          )}
          {showLeaderboard && (
            <TabsTrigger value="leaderboard" className="data-[state=active]:bg-orange-500 data-[state=active]:text-black">
              <TrendingUp className="w-4 h-4 mr-2" />
              Leaderboard
            </TabsTrigger>
          )}
          {showRewards && (
            <TabsTrigger value="rewards" className="data-[state=active]:bg-orange-500 data-[state=active]:text-black">
              <Gift className="w-4 h-4 mr-2" />
              Rewards
            </TabsTrigger>
          )}
          <TabsTrigger value="challenges" className="data-[state=active]:bg-orange-500 data-[state=active]:text-black">
            <Target className="w-4 h-4 mr-2" />
            Challenges
          </TabsTrigger>
        </TabsList>

        {/* Achievements Tab */}
        {showAchievements && (
          <TabsContent value="achievements" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement) => {
                const IconComponent = achievement.icon
                const progressPercent = (achievement.progress / achievement.maxProgress) * 100
                
                return (
                  <motion.div
                    key={achievement.id}
                    className="group cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    onClick={() => achievement.unlocked && simulateXPGain(50)}
                  >
                    <Card className={`bg-gray-800/50 border-gray-700 p-4 backdrop-blur-sm relative overflow-hidden ${
                      achievement.unlocked ? 'border-orange-500/50' : ''
                    }`}>
                      {/* Rarity glow */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${getRarityColor(achievement.rarity)} opacity-10`} />
                      
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                              achievement.unlocked ? 'bg-orange-500/20 text-orange-500' : 'bg-gray-600/20 text-gray-500'
                            }`}>
                              {achievement.unlocked ? (
                                <IconComponent className="w-6 h-6" />
                              ) : (
                                <Lock className="w-6 h-6" />
                              )}
                            </div>
                            <div>
                              <h4 className={`font-bold ${achievement.unlocked ? 'text-white' : 'text-gray-400'}`}>
                                {achievement.title}
                              </h4>
                              <p className="text-gray-500 text-sm">{achievement.description}</p>
                            </div>
                          </div>
                          
                          <div className="flex flex-col items-end">
                            <Badge className={`${getRarityBadgeColor(achievement.rarity)} mb-2`}>
                              {achievement.rarity}
                            </Badge>
                            {achievement.unlocked && <CheckCircle className="w-5 h-5 text-green-500" />}
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Progress</span>
                            <span className={achievement.unlocked ? 'text-green-400' : 'text-orange-400'}>
                              {achievement.progress}/{achievement.maxProgress}
                            </span>
                          </div>
                          <Progress value={progressPercent} className="h-2 bg-gray-700" />
                        </div>
                        
                        <div className="mt-3 flex items-center justify-between">
                          <div className="text-sm">
                            <span className="text-gray-400">Reward: </span>
                            <span className="text-orange-400 font-medium">
                              {achievement.reward.type === 'tokens' && `${achievement.reward.amount} tokens`}
                              {achievement.reward.type === 'nft' && achievement.reward.item}
                              {achievement.reward.type === 'badge' && achievement.reward.item}
                              {achievement.reward.type === 'title' && achievement.reward.item}
                            </span>
                          </div>
                          
                          {achievement.unlocked && (
                            <Badge className="bg-green-500 text-white">
                              <CheckCircle className="w-3 h-3 mr-1" />
                              Claimed
                            </Badge>
                          )}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </TabsContent>
        )}

        {/* Leaderboard Tab */}
        {showLeaderboard && (
          <TabsContent value="leaderboard" className="space-y-4">
            <Card className="bg-gray-800/50 border-gray-700 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-orange-500" />
                Global Leaderboard
              </h3>
              
              <div className="space-y-3">
                {leaderboard.map((entry, index) => (
                  <motion.div
                    key={entry.id}
                    className={`flex items-center justify-between p-4 rounded-lg transition-all duration-300 ${
                      entry.username === 'You' ? 'bg-orange-500/10 border border-orange-500/30' : 'bg-gray-700/30'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-8 h-8 flex items-center justify-center rounded-full font-bold ${
                        entry.rank === 1 ? 'bg-yellow-500 text-black' :
                        entry.rank === 2 ? 'bg-gray-400 text-black' :
                        entry.rank === 3 ? 'bg-orange-600 text-white' :
                        'bg-gray-600 text-white'
                      }`}>
                        {entry.rank}
                      </div>
                      
                      <Image
                        src={entry.avatar}
                        alt={entry.username}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      
                      <div>
                        <div className="flex items-center space-x-2">
                          <h4 className="text-white font-bold">{entry.username}</h4>
                          <Badge className="bg-purple-500 text-white">
                            Lv.{entry.level}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-1">
                          {entry.badges.slice(0, 3).map((badge, badgeIndex) => (
                            <div key={badgeIndex} className="w-4 h-4 bg-orange-500/20 rounded-full" />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="text-right">
                        <p className="text-orange-400 font-bold">{entry.score.toLocaleString()}</p>
                        <p className="text-gray-400 text-sm">points</p>
                      </div>
                      
                      <div className={`w-6 h-6 flex items-center justify-center rounded-full ${
                        entry.change === 'up' ? 'bg-green-500' : 
                        entry.change === 'down' ? 'bg-red-500' : 
                        'bg-gray-500'
                      }`}>
                        {entry.change === 'up' && <ChevronUp className="w-4 h-4 text-white" />}
                        {entry.change === 'down' && <ChevronDown className="w-4 h-4 text-white" />}
                        {entry.change === 'same' && <span className="text-white text-xs">-</span>}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </TabsContent>
        )}

        {/* Rewards Tab */}
        {showRewards && (
          <TabsContent value="rewards" className="space-y-4">
            <Card className="bg-gray-800/50 border-gray-700 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Gift className="w-5 h-5 mr-2 text-orange-500" />
                Daily Rewards - Day {rewardStreak}
              </h3>
              
              <div className="grid grid-cols-7 gap-3">
                {dailyRewards.map((reward, index) => (
                  <motion.div
                    key={index}
                    className={`p-3 rounded-lg text-center cursor-pointer transition-all ${
                      reward.claimed ? 'bg-green-500/20 border border-green-500/30' :
                      reward.available ? 'bg-orange-500/20 border border-orange-500/30 hover:scale-105' :
                      'bg-gray-700/30 border border-gray-600'
                    }`}
                    whileHover={reward.available ? { scale: 1.05 } : {}}
                    whileTap={reward.available ? { scale: 0.95 } : {}}
                  >
                    <div className="w-8 h-8 mx-auto mb-2 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-black font-bold text-sm">{reward.day}</span>
                    </div>
                    <p className="text-xs text-white font-medium">{reward.reward}</p>
                    {reward.claimed && (
                      <CheckCircle className="w-4 h-4 text-green-500 mx-auto mt-1" />
                    )}
                    {reward.available && !reward.claimed && (
                      <Button size="sm" className="mt-2 bg-orange-500 text-black text-xs h-6">
                        Claim
                      </Button>
                    )}
                  </motion.div>
                ))}
              </div>
            </Card>
          </TabsContent>
        )}

        {/* Challenges Tab */}
        <TabsContent value="challenges" className="space-y-4">
          <div className="space-y-4">
            {challengesThisWeek.map((challenge) => (
              <Card key={challenge.id} className="bg-gray-800/50 border-gray-700 p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-white font-bold text-lg">{challenge.title}</h4>
                    <p className="text-gray-400">{challenge.description}</p>
                  </div>
                  <div className="text-right">
                    <Badge className={`${
                      challenge.difficulty === 'easy' ? 'bg-green-500' :
                      challenge.difficulty === 'medium' ? 'bg-orange-500' :
                      'bg-red-500'
                    } text-white mb-2`}>
                      {challenge.difficulty}
                    </Badge>
                    <div className="flex items-center space-x-1 text-gray-400">
                      <Timer className="w-4 h-4" />
                      <span className="text-sm">{challenge.timeLeft}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Progress</span>
                    <span className="text-orange-400">
                      {challenge.progress}/{challenge.maxProgress}
                    </span>
                  </div>
                  <Progress 
                    value={(challenge.progress / challenge.maxProgress) * 100} 
                    className="h-3 bg-gray-700" 
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-400 text-sm">Reward: </span>
                    <span className="text-orange-400 font-bold">{challenge.reward}</span>
                  </div>
                  {challenge.progress === challenge.maxProgress && (
                    <Button className="bg-green-500 hover:bg-green-600 text-white">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Claim Reward
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Gamification