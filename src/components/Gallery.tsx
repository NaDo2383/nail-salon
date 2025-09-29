"use client"
import { ImageWithFallback } from "./figma/ImageWithFallback"

export function Gallery() {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1613457492120-4fcfbb7c3a5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWlsJTIwc2Fsb24lMjBtYW5pY3VyZXxlbnwxfHx8fDE3NTkxMTI5NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Professional manicure service",
      category: "Manicure",
    },
    {
      src: "https://images.unsplash.com/photo-1609353864300-f19013dedb39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWlsJTIwYXJ0JTIwZGVzaWdufGVufDF8fHx8MTc1OTExMjk3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Creative nail art designs",
      category: "Nail Art",
    },
    {
      src: "https://images.unsplash.com/photo-1580893196685-f061a838ba99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWRpY3VyZSUyMHNwYSUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NTkxMTI5Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Relaxing pedicure treatment",
      category: "Pedicure",
    },
    {
      src: "https://images.unsplash.com/photo-1659391542239-9648f307c0b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZWwlMjBuYWlsJTIwcG9saXNofGVufDF8fHx8MTc1OTExMjk4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Gel nail polish application",
      category: "Gel Polish",
    },
    {
      src: "https://images.unsplash.com/photo-1643968704781-df3b260df6a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWlsJTIwdGVjaG5pY2lhbiUyMHdvcmtpbmd8ZW58MXx8fHwxNzU5MTEyOTg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Professional nail technician at work",
      category: "Professional Care",
    },
    {
      src: "https://images.unsplash.com/photo-1595944024804-733665a112db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBuYWlsJTIwc2Fsb24lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTkxMTI5ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Luxury salon interior",
      category: "Salon",
    },
  ]

  return (
    <section id='gallery' className='py-20 bg-[#0a0a0a]'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            Our <span className='text-gold-shiny gold-glow'>Gallery</span>
          </h2>
          <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
            Discover the artistry and precision of our work through our stunning portfolio
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className='group relative overflow-hidden rounded-lg bg-[#1a1a1a] border border-[#333333] hover:border-[#d4af37] transition-all duration-300'>
              <div className='aspect-square overflow-hidden'>
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                />
              </div>
              <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <div className='absolute bottom-4 left-4 text-white'>
                  <p className='text-[#d4af37] text-sm uppercase tracking-wider mb-1'>
                    {image.category}
                  </p>
                  <p className='text-white text-lg'>{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='text-center mt-12'>
          <div className='inline-flex items-center gap-4 bg-[#1a1a1a] border border-[#333333] rounded-lg px-6 py-3'>
            <span className='text-[#d4af37]'>✨</span>
            <span className='text-white'>
              Follow us on Instagram for daily inspiration
            </span>
            <span className='text-[#d4af37]'>@luxenails</span>
          </div>
        </div>
      </div>
    </section>
  )
}
