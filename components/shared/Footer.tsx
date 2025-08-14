"use client"

import { motion } from "framer-motion"
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Gamepad2,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-8 sm:py-12 lg:py-16 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <Gamepad2 className="w-4 sm:w-6 h-4 sm:h-6 text-black" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white font-exo2">PlayChange.io</h3>
                <p className="text-xs text-orange-500 font-orbitron">IN GAMES WE TRUST</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
              The ultimate gaming platform where trust meets innovation. Join millions of gamers in a revolutionary
              ecosystem.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <motion.a
                href="#"
                className="w-8 sm:w-10 h-8 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-orange-500 hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="w-4 sm:w-5 h-4 sm:h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="w-8 sm:w-10 h-8 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-orange-500 hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter className="w-4 sm:w-5 h-4 sm:h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="w-8 sm:w-10 h-8 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-orange-500 hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="w-4 sm:w-5 h-4 sm:h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="w-8 sm:w-10 h-8 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-orange-500 hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Youtube className="w-4 sm:w-5 h-4 sm:h-5" />
              </motion.a>
            </div>
          </div>

          {/* Playchange Ecosystem */}
          <div>
            <h4 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6 font-exo2">Playchange Ecosystem</h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { name: "Playchange", desc: "Gaming Hub", href: "/" },
                { name: "Playclothes", desc: "Gear Store", href: "/playclothes" },
                { name: "Playmotion", desc: "Video Player", href: "/play-motion" },
                { name: "Playcoverage", desc: "Athlete Support", href: "/playcoverage" },
                { name: "Cryptoboxers", desc: "Boxing Game", href: "/cryptoboxers" }
              ].map((brand) => (
                <li key={brand.name}>
                  <motion.a
                    href={brand.href}
                    className="block group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="text-orange-400 hover:text-orange-300 transition-colors font-semibold text-sm sm:text-base">
                      {brand.name}
                    </div>
                    <div className="text-gray-500 text-xs sm:text-sm group-hover:text-gray-400 transition-colors">
                      {brand.desc}
                    </div>
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6 font-exo2">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {["Games", "Players Lounge", "Player's Pride", "NFT Marketplace", "Membership", "Support", "Community"].map((link) => (
                <li key={link}>
                  <motion.a
                    href="#"
                    className="text-gray-400 hover:text-orange-500 transition-colors text-sm sm:text-base"
                    whileHover={{ x: 5 }}
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6 font-exo2">Contact Us</h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Mail className="w-4 sm:w-5 h-4 sm:h-5 text-orange-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm sm:text-base">support@playchange.io</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Phone className="w-4 sm:w-5 h-4 sm:h-5 text-orange-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm sm:text-base">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-orange-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm sm:text-base">San Francisco, CA</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6 sm:mt-8">
              <h5 className="text-white font-bold mb-3 text-sm sm:text-base">Stay Updated</h5>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm sm:text-base text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none"
                />
                <Button className="bg-orange-500 hover:bg-orange-600 text-black font-bold text-sm sm:text-base px-4 py-2 whitespace-nowrap">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © 2024 PlayChange.io. All rights reserved. Built with trust and innovation.
            </p>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <span className="text-gray-400 text-xs sm:text-sm">Powered by Blockchain Technology</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-500 text-xs sm:text-sm">All Systems Operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer