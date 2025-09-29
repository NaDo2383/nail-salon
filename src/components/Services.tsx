"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Clock, Star } from "lucide-react"

export function Services() {
  const services = [
    {
      name: "Classic Manicure",
      description: "Professional nail shaping, cuticle care, and polish application",
      price: "$35",
      duration: "45 min",
      popular: false,
      features: ["Nail shaping", "Cuticle care", "Hand massage", "Polish application"],
    },
    {
      name: "Gel Manicure",
      description: "Long-lasting gel polish with superior shine and durability",
      price: "$55",
      duration: "60 min",
      popular: true,
      features: ["Gel application", "UV curing", "2-3 weeks lasting", "Chip resistant"],
    },
    {
      name: "Luxury Spa Pedicure",
      description: "Comprehensive foot care with exfoliation and massage",
      price: "$65",
      duration: "75 min",
      popular: false,
      features: ["Foot soak", "Exfoliation", "Callus removal", "Massage", "Polish"],
    },
    {
      name: "Nail Art Design",
      description: "Custom artistic designs created by our talented artists",
      price: "$25+",
      duration: "30 min",
      popular: false,
      features: ["Custom designs", "Hand-painted art", "Rhinestones", "3D elements"],
    },
    {
      name: "Acrylic Extensions",
      description: "Strong, durable nail extensions for length and strength",
      price: "$75",
      duration: "90 min",
      popular: true,
      features: [
        "Length extension",
        "Shape customization",
        "Strengthening",
        "Long-lasting",
      ],
    },
    {
      name: "Dip Powder Manicure",
      description: "Healthy, long-lasting alternative to gel and acrylics",
      price: "$60",
      duration: "70 min",
      popular: false,
      features: ["No UV light", "Strengthening", "3-4 weeks lasting", "Natural look"],
    },
  ]

  return (
    <section id='services' className='py-20 bg-[#111111]'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            Our <span className='text-gold-shiny gold-glow'>Services</span>
          </h2>
          <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
            Indulge in our comprehensive menu of nail care services, each designed to
            pamper and perfect
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <Card
              key={index}
              className='bg-[#1a1a1a] border-[#333333] hover:border-[#d4af37] transition-all duration-300 group'>
              <CardHeader className='relative'>
                {service.popular && (
                  <Badge className='absolute -top-2 -right-2 bg-[#d4af37] text-black'>
                    <Star className='w-3 h-3 mr-1' />
                    Popular
                  </Badge>
                )}
                <CardTitle className='text-white group-hover:text-[#d4af37] transition-colors'>
                  {service.name}
                </CardTitle>
                <CardDescription className='text-gray-400'>
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='flex items-center justify-between'>
                  <span className='text-2xl font-bold text-[#d4af37]'>
                    {service.price}
                  </span>
                  <div className='flex items-center text-gray-400'>
                    <Clock className='w-4 h-4 mr-1' />
                    <span>{service.duration}</span>
                  </div>
                </div>

                <ul className='space-y-2'>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className='flex items-center text-gray-300'>
                      <span className='w-2 h-2 bg-[#d4af37] rounded-full mr-3'></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button className='w-full btn-gold-shiny'>Book This Service</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className='text-center mt-16'>
          <div className='bg-[#1a1a1a] border border-[#333333] rounded-lg p-8 max-w-2xl mx-auto'>
            <h3 className='text-2xl font-bold text-white mb-4'>Special Package Deals</h3>
            <p className='text-gray-300 mb-6'>
              Save more with our exclusive combination packages designed for the ultimate
              nail care experience
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='bg-[#0a0a0a] border border-[#d4af37]/30 rounded-lg p-4'>
                <h4 className='text-[#d4af37] font-bold mb-2'>Mani + Pedi Combo</h4>
                <p className='text-white'>
                  <span className='line-through text-gray-500'>$120</span>
                  <span className='ml-2 text-xl font-bold'>$95</span>
                </p>
              </div>
              <div className='bg-[#0a0a0a] border border-[#d4af37]/30 rounded-lg p-4'>
                <h4 className='text-[#d4af37] font-bold mb-2'>Monthly Membership</h4>
                <p className='text-white'>
                  <span className='text-xl font-bold'>$150/month</span>
                  <span className='block text-sm text-gray-400'>Unlimited services</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
