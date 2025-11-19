interface AboutProps {
  name?: string
  description?: string
  image?: string
}

export function About({
  name = 'Mr. Cuba',
  description = 'With over 5 years of experience guiding tours through Central Vietnam, I offer authentic, personalized Easy Rider motorbike adventures that showcase the hidden gems and breathtaking landscapes of my homeland. From misty mountains to pristine beaches, ancient temples to vibrant local markets – experience Vietnam through the eyes of a local. No license or experience on scooters is required, I will teach you everything you need to know.',
  image
}: AboutProps) {
  return (
    <section id="about" className="py-20 md:py-32 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                {image ? (
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-amber-500 to-orange-600" />
                )}
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/20 rounded-2xl -z-10" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary mb-6">
              Meet {name}
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              {description.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="bg-white px-6 py-4 rounded-lg shadow-md">
                <p className="text-3xl font-bold text-primary">5+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
              <div className="bg-white px-6 py-4 rounded-lg shadow-md">
                <p className="text-3xl font-bold text-primary">100%</p>
                <p className="text-sm text-gray-600">Authentic</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

