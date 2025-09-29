"use client"
import { MapPin, Clock, Phone, Calendar } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"

export function Location() {
  const hours = [
    { day: "Weekdays", time: "9:00 AM - 7:00 PM" },
    { day: "Saturday", time: "8:00 AM - 6:00 PM" },
    { day: "Sunday", time: "10:00 AM - 5:00 PM" },
  ]

  return (
    <section id='location' className='py-20 bg-[#0a0a0a]'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            Visit Our <span className='text-gold-shiny gold-glow'>Salon</span>
          </h2>
          <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
            Located in the heart of the city, our luxury salon offers a serene escape from
            the everyday
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Map Placeholder */}
          <div className='relative h-full'>
            <div className='relative h-full z-10 text-center max-w-5xl mx-auto mb-16'>
              <div className='w-full h-full max-w-3xl mx-auto rounded-lg overflow-hidden border-2 border-[#d4af37]/40 shadow-lg'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.792720024056!2d-118.30785812428639!3d34.10199451805156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf25a9dd34e5%3A0x40e1af2ef2abef2f!2s5555%20Hollywood%20Blvd%2C%20Los%20Angeles%2C%20CA%2090028%2C%20USA!5e0!3m2!1sen!2sus!4v1696168700000!5m2!1sen!2sus'
                  width='100%'
                  height='100%'
                  style={{ border: 0 }}
                  allowFullScreen
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                />
              </div>
            </div>
          </div>

          {/* Location Info */}
          <div className='space-y-8'>
            <Card className='bg-[#1a1a1a] border-[#333333]'>
              <CardContent className='p-6'>
                <div className='flex items-start space-x-4'>
                  <MapPin className='w-6 h-6 text-[#d4af37] mt-1' />
                  <div>
                    <h3 className='text-xl font-bold text-white mb-2'>Address</h3>
                    <p className='text-gray-300'>
                      123 Luxury Lane
                      <br />
                      Beverly Hills, CA 90210
                      <br />
                      United States
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className='bg-[#1a1a1a] border-[#333333]'>
              <CardContent className='p-6'>
                <div className='flex items-start space-x-4'>
                  <Phone className='w-6 h-6 text-[#d4af37] mt-1' />
                  <div>
                    <h3 className='text-xl font-bold text-white mb-2'>Contact</h3>
                    <p className='text-gray-300'>
                      Phone: (555) 123-4567
                      <br />
                      Email: info@luxenails.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className='bg-[#1a1a1a] border-[#333333]'>
              <CardContent className='p-6'>
                <div className='flex items-start space-x-4'>
                  <Clock className='w-6 h-6 text-[#d4af37] mt-1' />
                  <div className='flex-1'>
                    <h3 className='text-xl font-bold text-white mb-4'>Hours</h3>
                    <div className='space-y-2'>
                      {hours.map((schedule, index) => (
                        <div key={index} className='flex justify-between items-center'>
                          <span className='text-gray-300'>{schedule.day}</span>
                          <span className='text-[#d4af37]'>{schedule.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className='flex flex-col sm:flex-row gap-4'>
              <Button className='flex-1 btn-gold-shiny'>
                <Calendar className='w-4 h-4 mr-2' />
                Book Appointment
              </Button>
              <Button
                variant='outline'
                className='flex-1 border-gold-shiny text-[#d4af37] hover:btn-gold-shiny gold-glow'>
                <Phone className='w-4 h-4 mr-2' />
                Call Now
              </Button>
            </div>
          </div>
        </div>

        {/* Parking Info */}
        <div className='mt-16 bg-[#1a1a1a] border border-[#333333] rounded-lg p-8'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
            <div>
              <div className='w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-black font-bold'>P</span>
              </div>
              <h4 className='text-white font-bold mb-2'>Free Parking</h4>
              <p className='text-gray-400'>Complimentary valet parking for all clients</p>
            </div>
            <div>
              <div className='w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-black font-bold'>🚇</span>
              </div>
              <h4 className='text-white font-bold mb-2'>Metro Access</h4>
              <p className='text-gray-400'>2 blocks from Beverly Hills Metro Station</p>
            </div>
            <div>
              <div className='w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-black font-bold'>♿</span>
              </div>
              <h4 className='text-white font-bold mb-2'>Accessible</h4>
              <p className='text-gray-400'>Fully wheelchair accessible facility</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
