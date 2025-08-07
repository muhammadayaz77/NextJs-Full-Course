"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
// import { Search, Menu, X, User, ShoppingCart, Heart } from 'lucide-react'
import { CiSearch as Search } from "react-icons/ci";
import { CiMenuFries as Menu } from "react-icons/ci";
import { RxCross2 as X } from "react-icons/rx";
import { FaRegUser as User } from "react-icons/fa";
import { MdOutlineAddShoppingCart as ShoppingCart } from "react-icons/md";
import { CiHeart as Heart } from "react-icons/ci";


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Auctions", href: "/auctions" },
    { name: "Categories", href: "/categories" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-md shadow-lg border-b border-pink-500/20"
          : "bg-black/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
            </div>
            <span className="text-white font-bold text-xl hidden sm:block group-hover:text-pink-400 transition-colors duration-300">
              AuctionHub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-pink-400 transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center">
            <div
              className={`relative transition-all duration-300 ${
                isSearchOpen ? "w-64" : "w-10"
              }`}
            >
              <input
                type="text"
                placeholder="Search auctions..."
                className={`w-full bg-gray-800/50 border border-gray-600 rounded-full py-2 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-all duration-300 ${
                  isSearchOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              />
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-pink-400 transition-colors duration-300"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Wishlist */}
            <button className="relative p-2 text-gray-300 hover:text-pink-400 transition-colors duration-300 group">
              <Heart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-pink-500 text-white text-xs rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                3
              </span>
            </button>

            {/* Cart */}
            <button className="relative p-2 text-gray-300 hover:text-pink-400 transition-colors duration-300 group">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-pink-500 text-white text-xs rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                2
              </span>
            </button>

            {/* User Account */}
            <button className="p-2 text-gray-300 hover:text-pink-400 transition-colors duration-300">
              <User className="w-5 h-5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-pink-400 transition-colors duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-4 border-t border-gray-700">
            {/* Mobile Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search auctions..."
                className="w-full bg-gray-800/50 border border-gray-600 rounded-full py-2 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-pink-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>

            {/* Mobile Navigation */}
            <nav className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-gray-300 hover:text-pink-400 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
