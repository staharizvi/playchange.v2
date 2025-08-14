"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  CreditCard,
  Wallet,
  DollarSign,
  Euro,
  Bitcoin,
  Coins,
  Shield,
  CheckCircle,
  AlertTriangle,
  Clock,
  Zap,
  Globe,
  Lock,
  RefreshCw,
  ArrowRight,
  ArrowLeft,
  Info,
  Star,
  Gift,
  Percent,
  Receipt,
  Download,
  Eye,
  EyeOff
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import Image from "next/image"

interface PaymentMethod {
  id: string
  name: string
  type: 'crypto' | 'fiat' | 'card' | 'digital'
  icon: any
  supported: boolean
  fees: string
  processingTime: string
  minAmount?: string
  maxAmount?: string
  popular?: boolean
  description: string
  networks?: string[]
}

interface PaymentGatewaysProps {
  amount?: string
  currency?: string
  nftTitle?: string
  onPaymentComplete?: (method: string, transactionId: string) => void
  premiumFeatures?: boolean
}

const PaymentGateways = ({
  amount = "12.5",
  currency = "SOL",
  nftTitle = "Epic CryptoBoxers Knockout",
  onPaymentComplete,
  premiumFeatures = true
}: PaymentGatewaysProps) => {
  const [selectedMethod, setSelectedMethod] = useState<string>("")
  const [selectedTab, setSelectedTab] = useState("crypto")
  const [isProcessing, setIsProcessing] = useState(false)
  const [showPrivateMode, setShowPrivateMode] = useState(false)
  const [conversionRates, setConversionRates] = useState({
    solToUsd: 100,
    ethToUsd: 1700,
    btcToUsd: 43500,
    usdcToUsd: 1
  })
  const [gasEstimate, setGasEstimate] = useState("0.00001") // Solana transaction fees are much lower

  const paymentMethods: PaymentMethod[] = [
    // Crypto payments (Solana first - cost efficient)
    {
      id: 'solana',
      name: 'Solana',
      type: 'crypto',
      icon: '☀️',
      supported: true,
      fees: '0.1%',
      processingTime: '< 30 seconds',
      description: 'Ultra-low fees & fast',
      popular: true,
      networks: ['Mainnet', 'Devnet']
    },
    {
      id: 'ethereum',
      name: 'Ethereum',
      type: 'crypto',
      icon: '⟠',
      supported: true,
      fees: '0.5%',
      processingTime: '2-5 minutes',
      description: 'Most popular for NFTs',
      popular: false,
      networks: ['Mainnet', 'Polygon', 'Arbitrum']
    },
    {
      id: 'bitcoin',
      name: 'Bitcoin',
      type: 'crypto',
      icon: '₿',
      supported: true,
      fees: '1.0%',
      processingTime: '10-30 minutes',
      description: 'Store of value',
      networks: ['Lightning Network']
    },
    {
      id: 'usdc',
      name: 'USDC',
      type: 'crypto',
      icon: '●',
      supported: true,
      fees: '0.3%',
      processingTime: '1-3 minutes',
      description: 'Stable digital dollar',
      popular: true,
      networks: ['Ethereum', 'Polygon', 'Arbitrum']
    },
    {
      id: 'play-tokens',
      name: 'PLAY Tokens',
      type: 'crypto',
      icon: '🎮',
      supported: true,
      fees: '0%',
      processingTime: '< 1 minute',
      description: 'Platform native token',
      popular: true,
      networks: ['PlayChange Network']
    },
    
    // Fiat payments
    {
      id: 'credit-card',
      name: 'Credit/Debit Card',
      type: 'fiat',
      icon: CreditCard,
      supported: true,
      fees: '2.9%',
      processingTime: 'Instant',
      description: 'Visa, Mastercard, Amex',
      popular: true,
      minAmount: '$10',
      maxAmount: '$10,000'
    },
    {
      id: 'bank-transfer',
      name: 'Bank Transfer',
      type: 'fiat',
      icon: DollarSign,
      supported: true,
      fees: '0.8%',
      processingTime: '1-3 business days',
      description: 'ACH or wire transfer',
      minAmount: '$50',
      maxAmount: '$100,000'
    },
    
    // Digital wallets
    {
      id: 'paypal',
      name: 'PayPal',
      type: 'digital',
      icon: '🅿️',
      supported: true,
      fees: '3.4%',
      processingTime: 'Instant',
      description: 'Popular digital wallet',
      minAmount: '$1',
      maxAmount: '$5,000'
    },
    {
      id: 'apple-pay',
      name: 'Apple Pay',
      type: 'digital',
      icon: '🍎',
      supported: true,
      fees: '2.9%',
      processingTime: 'Instant',
      description: 'Touch ID / Face ID',
      popular: true
    },
    {
      id: 'google-pay',
      name: 'Google Pay',
      type: 'digital',
      icon: '🔴',
      supported: true,
      fees: '2.9%',
      processingTime: 'Instant',
      description: 'Android devices'
    }
  ]

  const calculateTotal = (method: PaymentMethod) => {
    const baseAmount = parseFloat(amount)
    const feePercent = parseFloat(method.fees.replace('%', '')) / 100
    const fee = baseAmount * feePercent
    
    if (method.type === 'crypto') {
      // Add gas fees for crypto - Solana has much lower fees
      const gasInNative = parseFloat(gasEstimate)
      const isLowFeeNetwork = method.id === 'solana' || method.id === 'play-tokens'
      return {
        subtotal: baseAmount,
        fees: fee,
        gasFees: isLowFeeNetwork ? 0.00001 : gasInNative, // Solana fees are negligible
        total: baseAmount + fee + (isLowFeeNetwork ? 0.00001 : gasInNative)
      }
    } else {
      // Fiat conversion - use SOL rate if current currency is SOL
      const conversionRate = currency === 'SOL' ? conversionRates.solToUsd : conversionRates.ethToUsd
      const usdAmount = baseAmount * conversionRate
      const usdFee = usdAmount * feePercent
      return {
        subtotal: usdAmount,
        fees: usdFee,
        gasFees: 0,
        total: usdAmount + usdFee
      }
    }
  }

  const handlePayment = async (methodId: string) => {
    const method = paymentMethods.find(m => m.id === methodId)
    if (!method) return

    setIsProcessing(true)
    
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 3000))
      
      const transactionId = `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      
      onPaymentComplete?.(methodId, transactionId)
      
      console.log(`Payment completed with ${method.name}:`, transactionId)
      
    } catch (error) {
      console.error('Payment failed:', error)
    } finally {
      setIsProcessing(false)
    }
  }

  const filteredMethods = paymentMethods.filter(method => 
    selectedTab === 'all' || method.type === selectedTab
  )

  const getMethodsByType = (type: string) => 
    paymentMethods.filter(method => method.type === type && method.supported)

  return (
    <div className="space-y-6">
      {/* Payment Summary */}
      <Card className="bg-gray-800/50 border-gray-700 p-6 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-white">Purchase Summary</h3>
            <p className="text-gray-400">{nftTitle}</p>
          </div>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setShowPrivateMode(!showPrivateMode)}
            className="border-gray-600 text-white"
          >
            {showPrivateMode ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </Button>
        </div>

        <div className="bg-gray-700/30 rounded-lg p-4 mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-400">Item Price</span>
            <span className="text-white font-bold">
              {showPrivateMode ? '•••••' : `${amount} ${currency}`}
            </span>
          </div>
          
          {selectedMethod && (
            <div className="space-y-2 mt-4 pt-4 border-t border-gray-600">
              {(() => {
                const method = paymentMethods.find(m => m.id === selectedMethod)
                if (!method) return null
                const costs = calculateTotal(method)
                
                return (
                  <>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Platform Fee ({method.fees})</span>
                      <span className="text-gray-300">
                        {showPrivateMode ? '•••' : 
                          method.type === 'crypto' 
                            ? `${costs.fees.toFixed(4)} ${currency}`
                            : `$${costs.fees.toFixed(2)}`
                        }
                      </span>
                    </div>
                    
                    {costs.gasFees > 0 && (
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Gas Fee (estimated)</span>
                        <span className="text-gray-300">
                          {showPrivateMode ? '•••' : `${costs.gasFees.toFixed(4)} ETH`}
                        </span>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between pt-2 border-t border-gray-600 font-bold">
                      <span className="text-white">Total</span>
                      <span className="text-orange-400">
                        {showPrivateMode ? '••••••' : 
                          method.type === 'crypto'
                            ? `${costs.total.toFixed(4)} ${currency}`
                            : `$${costs.total.toFixed(2)}`
                        }
                      </span>
                    </div>
                  </>
                )
              })()}
            </div>
          )}
        </div>

        {/* Premium Features Banner */}
        {premiumFeatures && (
          <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 mb-4">
            <div className="flex items-center space-x-3">
              <Star className="w-5 h-5 text-purple-400" />
              <div>
                <h4 className="text-purple-400 font-bold">Premium Member Benefits</h4>
                <p className="text-gray-300 text-sm">Gas fees covered • Priority support • Exclusive drops</p>
              </div>
            </div>
          </div>
        )}
      </Card>

      {/* Payment Method Selection */}
      <Card className="bg-gray-800/50 border-gray-700 p-6 backdrop-blur-sm">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center">
          <CreditCard className="w-5 h-5 mr-2 text-orange-500" />
          Choose Payment Method
        </h3>

        <Tabs value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList className="grid w-full grid-cols-4 bg-gray-700/50 mb-6">
            <TabsTrigger value="crypto" className="data-[state=active]:bg-orange-500 data-[state=active]:text-black">
              <Bitcoin className="w-4 h-4 mr-2" />
              Crypto
            </TabsTrigger>
            <TabsTrigger value="fiat" className="data-[state=active]:bg-orange-500 data-[state=active]:text-black">
              <DollarSign className="w-4 h-4 mr-2" />
              Fiat
            </TabsTrigger>
            <TabsTrigger value="digital" className="data-[state=active]:bg-orange-500 data-[state=active]:text-black">
              <Wallet className="w-4 h-4 mr-2" />
              Digital
            </TabsTrigger>
            <TabsTrigger value="all" className="data-[state=active]:bg-orange-500 data-[state=active]:text-black">
              <Globe className="w-4 h-4 mr-2" />
              All
            </TabsTrigger>
          </TabsList>

          <TabsContent value="crypto" className="space-y-4">
            <RadioGroup value={selectedMethod} onValueChange={setSelectedMethod}>
              {getMethodsByType('crypto').map((method) => (
                <div key={method.id} className="space-y-2">
                  <div className="flex items-center space-x-3 p-4 border border-gray-600 rounded-lg hover:border-orange-500 transition-colors">
                    <RadioGroupItem value={method.id} id={method.id} />
                    <Label htmlFor={method.id} className="flex-1 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="text-2xl">{method.icon}</div>
                          <div>
                            <div className="flex items-center space-x-2">
                              <span className="text-white font-bold">{method.name}</span>
                              {method.popular && (
                                <Badge className="bg-orange-500 text-black text-xs">Popular</Badge>
                              )}
                            </div>
                            <p className="text-gray-400 text-sm">{method.description}</p>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <p className="text-green-400 font-bold">{method.fees} fee</p>
                          <p className="text-gray-400 text-sm">{method.processingTime}</p>
                        </div>
                      </div>
                    </Label>
                  </div>
                  
                  {method.networks && (
                    <div className="ml-6 flex space-x-2">
                      {method.networks.map((network) => (
                        <Badge key={network} variant="outline" className="border-gray-600 text-gray-300">
                          {network}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </RadioGroup>
          </TabsContent>

          <TabsContent value="fiat" className="space-y-4">
            <RadioGroup value={selectedMethod} onValueChange={setSelectedMethod}>
              {getMethodsByType('fiat').map((method) => (
                <div key={method.id} className="flex items-center space-x-3 p-4 border border-gray-600 rounded-lg hover:border-orange-500 transition-colors">
                  <RadioGroupItem value={method.id} id={method.id} />
                  <Label htmlFor={method.id} className="flex-1 cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <method.icon className="w-6 h-6 text-blue-400" />
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-white font-bold">{method.name}</span>
                            {method.popular && (
                              <Badge className="bg-orange-500 text-black text-xs">Popular</Badge>
                            )}
                          </div>
                          <p className="text-gray-400 text-sm">{method.description}</p>
                          {(method.minAmount || method.maxAmount) && (
                            <p className="text-gray-500 text-xs">
                              Limits: {method.minAmount || '$0'} - {method.maxAmount || 'No limit'}
                            </p>
                          )}
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <p className="text-orange-400 font-bold">{method.fees} fee</p>
                        <p className="text-gray-400 text-sm">{method.processingTime}</p>
                      </div>
                    </div>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </TabsContent>

          <TabsContent value="digital" className="space-y-4">
            <RadioGroup value={selectedMethod} onValueChange={setSelectedMethod}>
              {getMethodsByType('digital').map((method) => (
                <div key={method.id} className="flex items-center space-x-3 p-4 border border-gray-600 rounded-lg hover:border-orange-500 transition-colors">
                  <RadioGroupItem value={method.id} id={method.id} />
                  <Label htmlFor={method.id} className="flex-1 cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">{method.icon}</div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-white font-bold">{method.name}</span>
                            {method.popular && (
                              <Badge className="bg-orange-500 text-black text-xs">Popular</Badge>
                            )}
                          </div>
                          <p className="text-gray-400 text-sm">{method.description}</p>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <p className="text-orange-400 font-bold">{method.fees} fee</p>
                        <p className="text-gray-400 text-sm">{method.processingTime}</p>
                      </div>
                    </div>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </TabsContent>

          <TabsContent value="all" className="space-y-4">
            <RadioGroup value={selectedMethod} onValueChange={setSelectedMethod}>
              {paymentMethods.filter(m => m.supported).map((method) => (
                <div key={method.id} className="flex items-center space-x-3 p-4 border border-gray-600 rounded-lg hover:border-orange-500 transition-colors">
                  <RadioGroupItem value={method.id} id={method.id} />
                  <Label htmlFor={method.id} className="flex-1 cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {typeof method.icon === 'string' ? (
                          <div className="text-2xl">{method.icon}</div>
                        ) : (
                          <method.icon className="w-6 h-6 text-blue-400" />
                        )}
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-white font-bold">{method.name}</span>
                            {method.popular && (
                              <Badge className="bg-orange-500 text-black text-xs">Popular</Badge>
                            )}
                            <Badge variant="outline" className="border-gray-600 text-gray-300 capitalize">
                              {method.type}
                            </Badge>
                          </div>
                          <p className="text-gray-400 text-sm">{method.description}</p>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <p className="text-orange-400 font-bold">{method.fees} fee</p>
                        <p className="text-gray-400 text-sm">{method.processingTime}</p>
                      </div>
                    </div>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </TabsContent>
        </Tabs>

        {/* Security Notice */}
        <div className="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
          <div className="flex items-center space-x-3">
            <Shield className="w-5 h-5 text-green-400" />
            <div>
              <h4 className="text-green-400 font-bold">Secure Payment Processing</h4>
              <p className="text-gray-300 text-sm">
                All payments are processed securely with industry-standard encryption. Your financial information is never stored.
              </p>
            </div>
          </div>
        </div>

        {/* Payment Button */}
        {selectedMethod && (
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Button
              onClick={() => handlePayment(selectedMethod)}
              disabled={isProcessing}
              className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold py-4 text-lg"
            >
              {isProcessing ? (
                <div className="flex items-center space-x-2">
                  <RefreshCw className="w-5 h-5 animate-spin" />
                  <span>Processing Payment...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Lock className="w-5 h-5" />
                  <span>Complete Purchase</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              )}
            </Button>
            
            <p className="text-center text-gray-400 text-sm mt-2">
              By completing this purchase, you agree to our Terms of Service
            </p>
          </motion.div>
        )}
      </Card>

      {/* Payment Processing Modal */}
      <AnimatePresence>
        {isProcessing && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-800 rounded-2xl p-8 max-w-md w-full mx-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <div className="text-center">
                <motion.div
                  className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <RefreshCw className="w-8 h-8 text-black" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-white mb-2">Processing Payment</h3>
                <p className="text-gray-400 mb-4">
                  Please don't close this window while we process your payment securely.
                </p>
                
                <div className="space-y-2 text-left bg-gray-700/30 rounded-lg p-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-300 text-sm">Payment initiated</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RefreshCw className="w-4 h-4 text-orange-500 animate-spin" />
                    <span className="text-gray-300 text-sm">Verifying transaction</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-500 text-sm">Finalizing purchase</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default PaymentGateways