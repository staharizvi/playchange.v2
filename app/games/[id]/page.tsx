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

interface GamePageProps {
  params: {
    id: string
  }
}

export default function GamePage({ params }: GamePageProps) {
  const game = games.find(g => g.id === params.id)
  
  if (!game) {
    notFound()
  }

  return <GamePageClient game={game} />
}

export async function generateStaticParams() {
  return games.map((game) => ({
    id: game.id,
  }))
}