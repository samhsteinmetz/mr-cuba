import { useState } from 'react'

interface GalleryProps {
  images?: string[]
  title?: string
}

export function Gallery({
  images = [],
  title = 'Tour Gallery'
}: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const handleImageClick = (image: string) => {
    setSelectedImage(image)
    setIsLightboxOpen(true)
  }

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false)
    setTimeout(() => setSelectedImage(null), 300)
  }

  const handlePrevious = () => {
    if (!selectedImage) return
    const currentIndex = images.indexOf(selectedImage)
    const previousIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1
    setSelectedImage(images[previousIndex])
  }

  const handleNext = () => {
    if (!selectedImage) return
    const currentIndex = images.indexOf(selectedImage)
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1
    setSelectedImage(images[nextIndex])
  }

  const hasImages = images.length > 0

  return (
    <section id="gallery" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Photos from my past tours. Some I will take of you and some you will take!
          </p>
        </div>

        {hasImages ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl cursor-pointer aspect-[4/3] bg-gray-100"
                onClick={() => handleImageClick(image)}
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">
              Gallery images will appear here. Add photos to the <code className="bg-gray-100 px-2 py-1 rounded">/public/images</code> folder.
            </p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {isLightboxOpen && selectedImage && (
        <div
          className={`fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 transition-opacity duration-300 ${
            isLightboxOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={handleCloseLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white text-4xl font-light z-10"
            onClick={handleCloseLightbox}
            aria-label="Close"
          >
            ×
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-5xl font-light z-10 p-4"
            onClick={(e) => {
              e.stopPropagation()
              handlePrevious()
            }}
            aria-label="Previous"
          >
            ‹
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-5xl font-light z-10 p-4"
            onClick={(e) => {
              e.stopPropagation()
              handleNext()
            }}
            aria-label="Next"
          >
            ›
          </button>

          <img
            src={selectedImage}
            alt="Full size"
            className="max-h-full max-w-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}

