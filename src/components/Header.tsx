"use client"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "./ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Location", href: "#location" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header className='fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-[#333333]'>
      <div className='container mx-auto px-6 py-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <h1 className='text-gold-shiny text-2xl font-bold gold-glow'>LuxeNails</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-8'>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className='text-white hover:text-[#d4af37] hover:gold-glow transition-all duration-200'>
                {item.name}
              </a>
            ))}
            <Button className='btn-gold-shiny'>Book Now</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden text-white'
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className='md:hidden mt-4 pb-4'>
            <div className='flex flex-col space-y-4'>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className='text-white hover:text-[#d4af37] hover:gold-glow transition-all duration-200'
                  onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </a>
              ))}
              <Button className='btn-gold-shiny w-fit'>Book Now</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
