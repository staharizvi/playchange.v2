"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Wallet,
  Link2,
  Shield,
  Zap,
  CheckCircle,
  AlertTriangle,
  Copy,
  ExternalLink,
  Coins,
  Activity,
  Clock,
  Hash,
  Download,
  Upload,
  RefreshCw,
  Settings,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Cpu,
  Globe,
  TrendingUp,
  Layers
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"

interface WalletConnection {
  address: string
  balance: {
    eth: string
    usdc: string
    tokens: string
  }
  network: string
  isConnected: boolean
  walletType: 'metamask' | 'coinbase' | 'walletconnect' | null
}

interface NFTMetadata {
  tokenId: string
  contractAddress: string
  name: string
  description: string
  image: string
  attributes: Array<{
    trait_type: string
    value: string
  }>
  creator: string
  owner: string
  royalties: number
}

interface Transaction {
  hash: string
  type: 'mint' | 'transfer' | 'sale' | 'bid'
  from: string
  to: string
  value: string
  timestamp: Date
  status: 'pending' | 'confirmed' | 'failed'
  gasUsed?: string
  gasPrice?: string
}

interface BlockchainIntegrationProps {
  autoConnect?: boolean
  supportedNetworks?: string[]
  defaultNetwork?: string
}

const BlockchainIntegration = ({
  autoConnect = true,
  supportedNetworks = ['mainnet', 'polygon', 'arbitrum'],
  defaultNetwork = 'mainnet'
}: BlockchainIntegrationProps) => {
  const [wallet, setWallet] = useState<WalletConnection>({
    address: '',
    balance: { eth: '0', usdc: '0', tokens: '0' },
    network: defaultNetwork,
    isConnected: false,
    walletType: null
  })
  
  const [selectedTab, setSelectedTab] = useState("wallet")
  const [isConnecting, setIsConnecting] = useState(false)
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [nftMetadata, setNftMetadata] = useState<NFTMetadata | null>(null)
  const [isPrivateMode, setIsPrivateMode] = useState(false)
  const [networkStats, setNetworkStats] = useState({
    gasPrice: '25 gwei',
    blockNumber: '18,500,234',
    networkLoad: 75
  })

  // Mock wallet addresses for demo
  const mockWallet = {
    address: "0x742d35Cc6644C008532e8aB8B8Db71C7Ac6c8F21",
    balance: { eth: "5.247", usdc: "12,450.00", tokens: "8,750" }
  }

  // Mock transactions for demo
  const mockTransactions: Transaction[] = [
    {
      hash: "0xa1b2c3d4e5f6789012345678901234567890abcdef1234567890abcdef123456",
      type: "sale",
      from: "0x1234...abcd",
      to: "0x5678...efgh",
      value: "2.5 ETH",
      timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
      status: "confirmed",
      gasUsed: "84,532",
      gasPrice: "25 gwei"
    },
    {
      hash: "0xb2c3d4e5f6789012345678901234567890abcdef1234567890abcdef1234567a",
      type: "mint",
      from: "0x0000...0000",
      to: "0x742d...8F21",
      value: "1 NFT",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
      status: "confirmed",
      gasUsed: "125,847",
      gasPrice: "28 gwei"
    },
    {
      hash: "0xc3d4e5f6789012345678901234567890abcdef1234567890abcdef1234567ab2",
      type: "transfer",
      from: "0x742d...8F21",
      to: "0x9876...5432",
      value: "100 USDC",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 6), // 6 hours ago
      status: "pending",
      gasUsed: "65,432",
      gasPrice: "30 gwei"
    }
  ]

  // Auto-connect wallet on component mount
  useEffect(() => {
    if (autoConnect) {
      // Check if user previously connected
      const previousConnection = localStorage.getItem('wallet_connection')
      if (previousConnection) {
        const connectionData = JSON.parse(previousConnection)
        setWallet({
          ...mockWallet,
          network: defaultNetwork,
          isConnected: true,
          walletType: connectionData.walletType
        })
      }
    }
    
    setTransactions(mockTransactions)
  }, [autoConnect, defaultNetwork])

  const connectWallet = async (walletType: 'metamask' | 'coinbase' | 'walletconnect') => {
    setIsConnecting(true)
    
    try {
      // Simulate wallet connection
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      const newWalletState = {
        ...mockWallet,
        network: defaultNetwork,
        isConnected: true,
        walletType
      }
      
      setWallet(newWalletState)
      
      // Save connection to localStorage
      localStorage.setItem('wallet_connection', JSON.stringify({ walletType }))
      
      // Show success notification
      console.log(`Connected to ${walletType}`)
      
    } catch (error) {
      console.error('Wallet connection failed:', error)
    } finally {
      setIsConnecting(false)
    }
  }

  const disconnectWallet = () => {
    setWallet({
      address: '',
      balance: { eth: '0', usdc: '0', tokens: '0' },
      network: defaultNetwork,
      isConnected: false,
      walletType: null
    })
    localStorage.removeItem('wallet_connection')
  }

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      console.log('Copied to clipboard:', text)
    } catch (error) {
      console.error('Failed to copy:', error)
    }
  }

  const shortenAddress = (address: string) => {
    if (!address) return ''
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  const formatTimeAgo = (timestamp: Date) => {
    const now = new Date()
    const diffMs = now.getTime() - timestamp.getTime()
    const diffMins = Math.floor(diffMs / (1000 * 60))
    const diffHours = Math.floor(diffMins / 60)
    
    if (diffMins < 60) return `${diffMins}m ago`
    if (diffHours < 24) return `${diffHours}h ago`
    return timestamp.toLocaleDateString()
  }

  const getTransactionStatusColor = (status: Transaction['status']) => {
    switch (status) {
      case 'confirmed': return 'text-green-500'
      case 'pending': return 'text-orange-500'
      case 'failed': return 'text-red-500'
      default: return 'text-gray-400'
    }
  }

  const getTransactionTypeIcon = (type: Transaction['type']) => {
    switch (type) {
      case 'mint': return <Upload className="w-4 h-4" />
      case 'transfer': return <RefreshCw className="w-4 h-4" />
      case 'sale': return <Coins className="w-4 h-4" />
      case 'bid': return <TrendingUp className="w-4 h-4" />
      default: return <Activity className="w-4 h-4" />
    }
  }

  return (
    <div className="space-y-6">
      {/* Wallet Connection Status */}
      <Card className="bg-gray-800/50 border-gray-700 p-6 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
              wallet.isConnected ? 'bg-green-500/20 text-green-500' : 'bg-orange-500/20 text-orange-500'
            }`}>
              <Wallet className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                {wallet.isConnected ? 'Wallet Connected' : 'Connect Wallet'}
              </h3>
              <p className="text-gray-400">
                {wallet.isConnected ? `${wallet.walletType} • ${wallet.network}` : 'Connect to start trading NFTs'}
              </p>
            </div>
          </div>
          
          {wallet.isConnected && (
            <div className="flex items-center space-x-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => setIsPrivateMode(!isPrivateMode)}
                className="border-gray-600 text-white"
              >
                {isPrivateMode ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={disconnectWallet}
                className="border-red-600 text-red-400 hover:bg-red-700"
              >
                Disconnect
              </Button>
            </div>
          )}
        </div>

        {!wallet.isConnected ? (
          <div className="space-y-4">
            <p className="text-gray-300 mb-6">
              Choose your preferred wallet to securely manage your NFTs and crypto assets:
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { type: 'metamask' as const, name: 'MetaMask', logo: '🦊', popular: true },
                { type: 'coinbase' as const, name: 'Coinbase Wallet', logo: '🔵', popular: false },
                { type: 'walletconnect' as const, name: 'WalletConnect', logo: '🔗', popular: false }
              ].map((walletOption) => (
                <motion.button
                  key={walletOption.type}
                  onClick={() => connectWallet(walletOption.type)}
                  disabled={isConnecting}
                  className="p-4 bg-gray-700 hover:bg-gray-600 rounded-xl border border-gray-600 hover:border-orange-500 transition-all duration-300 relative"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {walletOption.popular && (
                    <Badge className="absolute -top-2 -right-2 bg-orange-500 text-black">
                      Popular
                    </Badge>
                  )}
                  <div className="text-center">
                    <div className="text-3xl mb-2">{walletOption.logo}</div>
                    <h4 className="text-white font-bold">{walletOption.name}</h4>
                    <p className="text-gray-400 text-sm mt-1">Connect securely</p>
                  </div>
                </motion.button>
              ))}
            </div>
            
            {isConnecting && (
              <div className="flex items-center justify-center space-x-3 p-4 bg-orange-500/10 border border-orange-500/30 rounded-lg">
                <RefreshCw className="w-5 h-5 text-orange-500 animate-spin" />
                <span className="text-orange-400">Connecting to wallet...</span>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-6">
            {/* Wallet Address */}
            <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
              <div className="flex items-center space-x-3">
                <Hash className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-gray-400 text-sm">Wallet Address</p>
                  <code className="text-white font-mono">
                    {isPrivateMode ? '••••••••••••••••••••••••••••••••••••••••••••' : wallet.address}
                  </code>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => copyToClipboard(wallet.address)}
                  className="border-gray-600 text-white"
                >
                  <Copy className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-white"
                >
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Balance Overview */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { symbol: 'ETH', amount: wallet.balance.eth, icon: '⟠', color: 'text-blue-400' },
                { symbol: 'USDC', amount: wallet.balance.usdc, icon: '●', color: 'text-green-400' },
                { symbol: 'PLAY', amount: wallet.balance.tokens, icon: '🎮', color: 'text-orange-400' }
              ].map((asset) => (
                <div key={asset.symbol} className="text-center p-4 bg-gray-700/30 rounded-lg">
                  <div className="text-2xl mb-2">{asset.icon}</div>
                  <p className={`text-xl font-bold ${asset.color}`}>
                    {isPrivateMode ? '•••••' : asset.amount}
                  </p>
                  <p className="text-gray-400 text-sm">{asset.symbol}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </Card>

      {wallet.isConnected && (
        <Tabs value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList className="grid w-full grid-cols-4 bg-gray-800/50">
            <TabsTrigger value="wallet" className="data-[state=active]:bg-orange-500 data-[state=active]:text-black">
              <Wallet className="w-4 h-4 mr-2" />
              Wallet
            </TabsTrigger>
            <TabsTrigger value="transactions" className="data-[state=active]:bg-orange-500 data-[state=active]:text-black">
              <Activity className="w-4 h-4 mr-2" />
              History
            </TabsTrigger>
            <TabsTrigger value="nft-tools" className="data-[state=active]:bg-orange-500 data-[state=active]:text-black">
              <Layers className="w-4 h-4 mr-2" />
              NFT Tools
            </TabsTrigger>
            <TabsTrigger value="network" className="data-[state=active]:bg-orange-500 data-[state=active]:text-black">
              <Globe className="w-4 h-4 mr-2" />
              Network
            </TabsTrigger>
          </TabsList>

          {/* Wallet Tab */}
          <TabsContent value="wallet" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Quick Actions */}
              <Card className="bg-gray-800/50 border-gray-700 p-6 backdrop-blur-sm">
                <h4 className="text-lg font-bold text-white mb-4">Quick Actions</h4>
                <div className="grid grid-cols-2 gap-3">
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    <Download className="w-4 h-4 mr-2" />
                    Deposit
                  </Button>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Upload className="w-4 h-4 mr-2" />
                    Withdraw
                  </Button>
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Swap
                  </Button>
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                    <Zap className="w-4 h-4 mr-2" />
                    Bridge
                  </Button>
                </div>
              </Card>

              {/* Security */}
              <Card className="bg-gray-800/50 border-gray-700 p-6 backdrop-blur-sm">
                <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-green-500" />
                  Security Status
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Wallet Encryption</span>
                    <div className="flex items-center space-x-2">
                      <Lock className="w-4 h-4 text-green-500" />
                      <span className="text-green-500 text-sm">Secured</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">2FA Enabled</span>
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Backup Status</span>
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Transaction History Tab */}
          <TabsContent value="transactions" className="space-y-4">
            <Card className="bg-gray-800/50 border-gray-700 p-6 backdrop-blur-sm">
              <h4 className="text-lg font-bold text-white mb-4">Recent Transactions</h4>
              
              <div className="space-y-4">
                {transactions.map((tx) => (
                  <motion.div
                    key={tx.hash}
                    className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors cursor-pointer"
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        tx.status === 'confirmed' ? 'bg-green-500/20 text-green-500' :
                        tx.status === 'pending' ? 'bg-orange-500/20 text-orange-500' :
                        'bg-red-500/20 text-red-500'
                      }`}>
                        {getTransactionTypeIcon(tx.type)}
                      </div>
                      
                      <div>
                        <h5 className="text-white font-bold capitalize">{tx.type}</h5>
                        <p className="text-gray-400 text-sm">
                          From {shortenAddress(tx.from)} to {shortenAddress(tx.to)}
                        </p>
                        <p className="text-gray-500 text-xs">{formatTimeAgo(tx.timestamp)}</p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <p className="text-white font-bold">{isPrivateMode ? '•••••' : tx.value}</p>
                      <p className={`text-sm ${getTransactionStatusColor(tx.status)}`}>
                        {tx.status}
                      </p>
                      {tx.gasUsed && (
                        <p className="text-gray-500 text-xs">Gas: {tx.gasUsed}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <Button variant="outline" className="w-full mt-4 border-gray-600 text-white">
                <ExternalLink className="w-4 h-4 mr-2" />
                View All on Explorer
              </Button>
            </Card>
          </TabsContent>

          {/* NFT Tools Tab */}
          <TabsContent value="nft-tools" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              {/* NFT Minting */}
              <Card className="bg-gray-800/50 border-gray-700 p-6 backdrop-blur-sm">
                <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                  <Cpu className="w-5 h-5 mr-2 text-orange-500" />
                  NFT Minting
                </h4>
                
                <div className="space-y-4">
                  <div className="p-4 bg-gray-700/30 rounded-lg">
                    <p className="text-gray-300 mb-2">Estimated Gas Fee</p>
                    <p className="text-2xl font-bold text-orange-400">0.045 ETH</p>
                    <p className="text-gray-500 text-sm">≈ $85.50 USD</p>
                  </div>
                  
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold">
                    <Upload className="w-4 h-4 mr-2" />
                    Mint New NFT
                  </Button>
                  
                  <p className="text-gray-400 text-sm text-center">
                    Mint directly to Ethereum mainnet with full ownership rights
                  </p>
                </div>
              </Card>

              {/* NFT Transfer */}
              <Card className="bg-gray-800/50 border-gray-700 p-6 backdrop-blur-sm">
                <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                  <RefreshCw className="w-5 h-5 mr-2 text-blue-500" />
                  NFT Transfer
                </h4>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-400 mb-2">Recipient Address</label>
                    <input
                      type="text"
                      placeholder="0x..."
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none"
                    />
                  </div>
                  
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Transfer NFT
                  </Button>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Network Tab */}
          <TabsContent value="network" className="space-y-4">
            <Card className="bg-gray-800/50 border-gray-700 p-6 backdrop-blur-sm">
              <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                <Globe className="w-5 h-5 mr-2 text-blue-500" />
                Network Status
              </h4>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-700/30 rounded-lg">
                  <Zap className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                  <p className="text-white font-bold">{networkStats.gasPrice}</p>
                  <p className="text-gray-400 text-sm">Gas Price</p>
                </div>
                
                <div className="text-center p-4 bg-gray-700/30 rounded-lg">
                  <Hash className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <p className="text-white font-bold">{networkStats.blockNumber}</p>
                  <p className="text-gray-400 text-sm">Latest Block</p>
                </div>
                
                <div className="text-center p-4 bg-gray-700/30 rounded-lg">
                  <Activity className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <p className="text-white font-bold">{networkStats.networkLoad}%</p>
                  <p className="text-gray-400 text-sm">Network Load</p>
                </div>
              </div>
              
              <div className="mt-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400">Network Health</span>
                  <span className="text-green-400">Excellent</span>
                </div>
                <Progress value={networkStats.networkLoad} className="h-2 bg-gray-700" />
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      )}
    </div>
  )
}

export default BlockchainIntegration