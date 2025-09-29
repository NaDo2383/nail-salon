"use client"
import { Play } from "lucide-react"
import { Button } from "./ui/button"
import { ImageWithFallback } from "./figma/ImageWithFallback"

export function Hero() {
  return (
    <section
      id='home'
      className='relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 md:px-8'>
      {/* Background Video Placeholder */}
      <div className='absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black'>
        <ImageWithFallback
          src='https://images.unsplash.com/photo-1595944024804-733665a112db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBuYWlsJTIwc2Fsb24lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTkxMTI5ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
          alt='Luxury nail salon interior'
          className='w-full h-full object-cover opacity-30'
        />
        <div className='absolute inset-0 bg-black/50' />
      </div>

      {/* Content */}
      <div className='relative z-10 text-center max-w-2xl 2xl:max-w-5xl mx-auto px-4'>
        <h1 className='text-4xl lg:text-3xl 2xl:text-7xl font-bold mb-6 leading-tight'>
          <span className='text-white block sm:inline'>Luxury</span>{" "}
          <span className='text-gold-shiny gold-glow block sm:inline'>Nail Care</span>
        </h1>

        <p className='text-base sm:text-lg md:text-xl lg:text-lg 2xl:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed'>
          Experience the finest in nail artistry and beauty treatments in our luxurious
          salon
        </p>

        <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12'>
          <Button
            size='lg'
            className='btn-gold-shiny px-5 md:px-6 lg:px-8 py-3 md:py-4 lg:py-5 text-base md:text-lg gold-shimmer w-full sm:w-auto'>
            Book Appointment
          </Button>
          <Button
            variant='outline'
            size='lg'
            className='border-gold-shiny text-[#d4af37] hover:btn-gold-shiny px-5 md:px-6 lg:px-8 py-3 md:py-4 lg:py-5 text-base md:text-lg gold-glow w-full sm:w-auto'>
            <Play className='mr-2 h-5 w-5' />
            Watch Our Story
          </Button>
        </div>

        {/* Video Placeholder */}
        <div className='relative max-w-sm 3xl:max-w-2xl mx-auto'>
          <div className=' aspect-video bg-black/40 rounded-lg border-2 border-[#d4af37]/30 flex items-center justify-center group cursor-pointer hover:border-gold-shiny transition-all duration-300'>
            <div className='text-center p-4 sm:p-6'>
              <div className='w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 bg-gold-shiny rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform gold-shimmer'>
                <Play className='w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-black ml-1' />
              </div>
              <p className='text-[#d4af37] gold-glow text-sm sm:text-base md:text-lg'>
                Watch Our Intro Video
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className='hidden md:block absolute top-1/4 left-6 sm:left-10 w-1.5 sm:w-2 h-16 sm:h-20 bg-gradient-to-b from-[#ffd700] via-[#d4af37] to-transparent opacity-60 gold-shimmer'></div>
      <div className='hidden md:block absolute bottom-1/4 right-6 sm:right-10 w-1.5 sm:w-2 h-16 sm:h-20 bg-gradient-to-t from-[#ffd700] via-[#d4af37] to-transparent opacity-60 gold-shimmer'></div>
    </section>
  )
}
