import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"
import { Gallery } from "@/components/Gallery"
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Location } from "@/components/Location"
import { Services } from "@/components/Services"

export default function Home() {
  return (
    <div className='min-h-screen bg-[#0a0a0a]'>
      <Header />
      <Hero />
      <Gallery />
      <Services />
      <Location />
      <Footer />
    </div>
  )
}
