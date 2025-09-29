"use client"
import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Label } from "./ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Calendar, Phone, Mail, MessageSquare } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const timeSlots = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
  ]

  const services = [
    "Classic Manicure",
    "Gel Manicure",
    "Luxury Spa Pedicure",
    "Nail Art Design",
    "Acrylic Extensions",
    "Dip Powder Manicure",
  ]

  return (
    <section id='contact' className='py-20 bg-[#111111]'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            Book Your <span className='text-gold-shiny gold-glow'>Appointment</span>
          </h2>
          <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
            Ready to pamper yourself? Schedule your visit to our luxury nail salon today
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
          {/* Contact Info */}
          <div className='space-y-6'>
            <Card className='bg-[#1a1a1a] border-[#333333]'>
              <CardHeader>
                <CardTitle className='text-[#d4af37] flex items-center'>
                  <Phone className='w-5 h-5 mr-2' />
                  Call Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-white text-lg'>(555) 123-4567</p>
                <p className='text-gray-400'>Available Mon-Sun 9AM-7PM</p>
              </CardContent>
            </Card>

            <Card className='bg-[#1a1a1a] border-[#333333]'>
              <CardHeader>
                <CardTitle className='text-[#d4af37] flex items-center'>
                  <Mail className='w-5 h-5 mr-2' />
                  Email Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-white text-lg'>info@luxenails.com</p>
                <p className='text-gray-400'>We'll respond within 24 hours</p>
              </CardContent>
            </Card>

            <Card className='bg-[#1a1a1a] border-[#333333]'>
              <CardHeader>
                <CardTitle className='text-[#d4af37] flex items-center'>
                  <MessageSquare className='w-5 h-5 mr-2' />
                  Text Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-white text-lg'>(555) 123-4567</p>
                <p className='text-gray-400'>Quick questions and confirmations</p>
              </CardContent>
            </Card>

            <div className='bg-[#1a1a1a] border border-[#d4af37]/30 rounded-lg p-6'>
              <h3 className='text-[#d4af37] font-bold mb-3'>Booking Policy</h3>
              <ul className='text-gray-300 space-y-2 text-sm'>
                <li>• 24-hour cancellation policy</li>
                <li>• Credit card required to hold appointment</li>
                <li>• Late arrivals may result in shortened service</li>
                <li>• Group bookings available for 4+ people</li>
              </ul>
            </div>
          </div>

          {/* Booking Form */}
          <div className='lg:col-span-2'>
            <Card className='bg-[#1a1a1a] border-[#333333]'>
              <CardHeader>
                <CardTitle className='text-white'>Schedule Your Appointment</CardTitle>
                <CardDescription className='text-gray-400'>
                  Fill out the form below and we'll confirm your booking within 2 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className='space-y-6'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='space-y-2'>
                      <Label htmlFor='name' className='text-white'>
                        Full Name
                      </Label>
                      <Input
                        id='name'
                        type='text'
                        placeholder='Your full name'
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className='bg-[#0a0a0a] border-[#333333] text-white placeholder:text-gray-500 focus:border-[#d4af37]'
                        required
                      />
                    </div>
                    <div className='space-y-2'>
                      <Label htmlFor='email' className='text-white'>
                        Email Address
                      </Label>
                      <Input
                        id='email'
                        type='email'
                        placeholder='your@email.com'
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className='bg-[#0a0a0a] border-[#333333] text-white placeholder:text-gray-500 focus:border-[#d4af37]'
                        required
                      />
                    </div>
                  </div>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='space-y-2'>
                      <Label htmlFor='phone' className='text-white'>
                        Phone Number
                      </Label>
                      <Input
                        id='phone'
                        type='tel'
                        placeholder='(555) 123-4567'
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className='bg-[#0a0a0a] border-[#333333] text-white placeholder:text-gray-500 focus:border-[#d4af37]'
                        required
                      />
                    </div>
                    <div className='space-y-2'>
                      <Label htmlFor='service' className='text-white'>
                        Service
                      </Label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) => handleChange("service", value)}>
                        <SelectTrigger className='bg-[#0a0a0a] border-[#333333] text-white focus:border-[#d4af37]'>
                          <SelectValue placeholder='Select a service' />
                        </SelectTrigger>
                        <SelectContent className='bg-[#1a1a1a] border-[#333333]'>
                          {services.map((service) => (
                            <SelectItem
                              key={service}
                              value={service}
                              className='text-white focus:bg-[#d4af37] focus:text-black'>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='space-y-2'>
                      <Label htmlFor='date' className='text-white'>
                        Preferred Date
                      </Label>
                      <Input
                        id='date'
                        type='date'
                        value={formData.date}
                        onChange={(e) => handleChange("date", e.target.value)}
                        className='bg-[#0a0a0a] border-[#333333] text-white focus:border-[#d4af37]'
                        required
                      />
                    </div>
                    <div className='space-y-2'>
                      <Label htmlFor='time' className='text-white'>
                        Preferred Time
                      </Label>
                      <Select
                        value={formData.time}
                        onValueChange={(value) => handleChange("time", value)}>
                        <SelectTrigger className='bg-[#0a0a0a] border-[#333333] text-white focus:border-[#d4af37]'>
                          <SelectValue placeholder='Select time' />
                        </SelectTrigger>
                        <SelectContent className='bg-[#1a1a1a] border-[#333333] max-h-48'>
                          {timeSlots.map((time) => (
                            <SelectItem
                              key={time}
                              value={time}
                              className='text-white focus:bg-[#d4af37] focus:text-black'>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className='space-y-2'>
                    <Label htmlFor='message' className='text-white'>
                      Special Requests (Optional)
                    </Label>
                    <Textarea
                      id='message'
                      placeholder='Any special requests or notes...'
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      className='bg-[#0a0a0a] border-[#333333] text-white placeholder:text-gray-500 focus:border-[#d4af37] min-h-[100px]'
                    />
                  </div>

                  <Button
                    type='submit'
                    className='w-full btn-gold-shiny text-lg py-6 gold-shimmer'>
                    <Calendar className='w-5 h-5 mr-2' />
                    Schedule Appointment
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
