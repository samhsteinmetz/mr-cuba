import { useState, useEffect } from 'react'

interface HeroProps {
  title?: string
  subtitle?: string
  images?: string[]
}

export function Hero({ 
  title = 'MR. CUBA', 
  subtitle = 'Authentic Easy Rider Motorbike Tours in Central Vietnam',
  images = []
}: HeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const hasImages = images.length > 0

  useEffect(() => {
    if (!hasImages || images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [hasImages, images.length])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0 z-0">
        {hasImages ? (
          images.map((image, index) => (
            <div
              key={image}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`Tour ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-amber-600 via-orange-500 to-red-600" />
        )}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="font-display text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
          {title}
        </h1>
        <p className="text-xl md:text-3xl text-white/90 font-light mb-12 text-balance">
          {subtitle}
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-4 bg-primary hover:bg-primary/90 text-secondary font-semibold text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl"
        >
          Book Your Adventure
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <a href="#about" className="flex flex-col items-center text-white/70 hover:text-white transition-colors">
          <span className="text-sm mb-2 font-light">Discover More</span>
          <svg
            className="w-6 h-6 animate-bounce"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  )
}

