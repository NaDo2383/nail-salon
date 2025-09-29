"use client"
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className='bg-black border-t border-[#333333]'>
      <div className='container mx-auto px-6 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* Brand */}
          <div className='space-y-4'>
            <h3 className='text-2xl font-bold text-gold-shiny gold-glow'>LuxeNails</h3>
            <p className='text-gray-400'>
              Experience luxury nail care with our expert technicians and premium products
              in the heart of Beverly Hills.
            </p>
            <div className='flex space-x-4'>
              <a
                href='#'
                className='text-gray-400 hover:text-[#d4af37] transition-colors'>
                <Instagram className='w-5 h-5' />
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-[#d4af37] transition-colors'>
                <Facebook className='w-5 h-5' />
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-[#d4af37] transition-colors'>
                <Twitter className='w-5 h-5' />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className='space-y-4'>
            <h4 className='text-lg font-bold text-white'>Quick Links</h4>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#home'
                  className='text-gray-400 hover:text-[#d4af37] transition-colors'>
                  Home
                </a>
              </li>
              <li>
                <a
                  href='#services'
                  className='text-gray-400 hover:text-[#d4af37] transition-colors'>
                  Services
                </a>
              </li>
              <li>
                <a
                  href='#gallery'
                  className='text-gray-400 hover:text-[#d4af37] transition-colors'>
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href='#location'
                  className='text-gray-400 hover:text-[#d4af37] transition-colors'>
                  Location
                </a>
              </li>
              <li>
                <a
                  href='#contact'
                  className='text-gray-400 hover:text-[#d4af37] transition-colors'>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className='space-y-4'>
            <h4 className='text-lg font-bold text-white'>Services</h4>
            <ul className='space-y-2'>
              <li>
                <span className='text-gray-400'>Classic Manicure</span>
              </li>
              <li>
                <span className='text-gray-400'>Gel Manicure</span>
              </li>
              <li>
                <span className='text-gray-400'>Spa Pedicure</span>
              </li>
              <li>
                <span className='text-gray-400'>Nail Art</span>
              </li>
              <li>
                <span className='text-gray-400'>Extensions</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className='space-y-4'>
            <h4 className='text-lg font-bold text-white'>Contact Info</h4>
            <div className='space-y-3'>
              <div className='flex items-start space-x-3'>
                <MapPin className='w-5 h-5 text-[#d4af37] mt-0.5' />
                <span className='text-gray-400'>
                  123 Luxury Lane
                  <br />
                  Beverly Hills, CA 90210
                </span>
              </div>
              <div className='flex items-center space-x-3'>
                <Phone className='w-5 h-5 text-[#d4af37]' />
                <span className='text-gray-400'>(555) 123-4567</span>
              </div>
              <div className='flex items-center space-x-3'>
                <Mail className='w-5 h-5 text-[#d4af37]' />
                <span className='text-gray-400'>info@luxenails.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-[#333333] mt-12 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <div className='text-gray-400 text-sm'>
              © {new Date().getFullYear()} LuxeNails. All rights reserved.
            </div>
            <div className='flex space-x-6'>
              <a
                href='#'
                className='text-gray-400 hover:text-[#d4af37] text-sm transition-colors'>
                Privacy Policy
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-[#d4af37] text-sm transition-colors'>
                Terms of Service
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-[#d4af37] text-sm transition-colors'>
                Cancellation Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
