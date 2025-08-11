import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Users, Clock, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import GamePageClient from "./game-client"

// Mock game data - in a real app, this would come from an API or database
const games = [
  {
    id: "1",
    title: "CryptoBoxers Championship",
    description: "High-octane boxing matches with blockchain rewards",
    players: "24.5K",
    category: "Action",
    image: "/placeholder.svg?height=400&width=600&text=CryptoBoxers",
    status: "Live",
    lastPlayed: "2 hours ago",
  },
  {
    id: "2", 
    title: "Eco Warriors",
    description: "Environmental action game making real-world impact",
    players: "18.2K",
    category: "Social Impact",
    image: "/placeholder.svg?height=400&width=600&text=EcoWarriors",
    status: "Live",
    lastPlayed: "30 minutes ago",
  },
  {
    id: "3",
    title: "Token Quest",
    description: "Adventure RPG with crypto rewards and NFT collectibles",
    players: "16.7K", 
    category: "RPG",
    image: "/placeholder.svg?height=400&width=600&text=TokenQuest",
    status: "Live",
    lastPlayed: "1 hour ago",
  }
]

// Generate fallback game data for any ID
function getGameById(id: string) {
  const existingGame = games.find(g => g.id === id)
  if (existingGame) {
    return existingGame
  }
  
  // Generate dynamic game data for any ID
  const categories = ["Action", "Adventure", "Strategy", "RPG", "Puzzle", "Racing", "Sports", "Simulation"]
  const statuses = ["Live", "Beta", "Coming Soon"]
  const playerCounts = ["1.2K", "5.7K", "12.3K", "24.5K", "45.2K", "67.8K"]
  
  return {
    id,
    title: `Game ${id}`,
    description: `An exciting ${categories[parseInt(id) % categories.length].toLowerCase()} game with amazing features and rewards.`,
    players: playerCounts[parseInt(id) % playerCounts.length],
    category: categories[parseInt(id) % categories.length],
    image: `/placeholder.svg?height=400&width=600&text=Game+${id}`,
    status: statuses[parseInt(id) % statuses.length],
    lastPlayed: `${Math.floor(Math.random() * 12) + 1} hours ago`,
  }
}

interface GamePageProps {
  params: {
    id: string
  }
}

export default function GamePage({ params }: GamePageProps) {
  const game = getGameById(params.id)
  
  // Only call notFound() for invalid IDs (non-numeric or empty)
  if (!params.id || params.id.trim() === '' || (isNaN(Number(params.id)) && !games.some(g => g.id === params.id))) {
    notFound()
  }

  return <GamePageClient game={game} />
}

export async function generateStaticParams() {
  // Pre-generate only the main games, allow others to be generated on demand
  return games.map((game) => ({
    id: game.id,
  }))
}

// Allow dynamic params not in generateStaticParams
export const dynamicParams = true