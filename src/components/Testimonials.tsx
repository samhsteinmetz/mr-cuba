interface Testimonial {
  name: string
  country: string
  text: string
  rating?: number
  image?: string
}

interface TestimonialsProps {
  testimonials?: Testimonial[]
  title?: string
}

const defaultTestimonials: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    country: 'Australia',
    text: 'An absolutely incredible experience! Mr. Cuba showed us the real Vietnam - hidden waterfalls, local villages, and breathtaking mountain passes. His knowledge and passion for his country made this trip unforgettable.',
    rating: 5
  },
  {
    name: 'Michael Schmidt',
    country: 'Germany',
    text: 'Best tour guide in Central Vietnam! Professional, safe, and knows all the secret spots. The motorbike adventure through the countryside was the highlight of our vacation.',
    rating: 5
  },
  {
    name: 'Emma & James',
    country: 'United Kingdom',
    text: 'Amazing tour guide with vast experience and local connections. We met him out drinking one night in Hue, and he offered to take us out to Hoi An and the countryside the next two days. Our itinerary was fully planned out by Mr Cuba, providing us with motorbikes, gas, and leading us to both well-known attractions and more local stops such as farmers markets and family-owned rice paper & rice wine makers! \n\nWould definitely recommend to travel with Mr Cuba for any Vietnam trips.',
    rating: 5
  }
]

function StarRating({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${index < rating ? 'text-primary' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export function Testimonials({
  testimonials = defaultTestimonials,
  title = 'What Travelers Say'
}: TestimonialsProps) {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Hear from travelers who have experienced Central Vietnam with me on my motorbike tour!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              {/* Avatar */}
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xl font-bold mr-4">
                  {testimonial.image ? (
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    testimonial.name.charAt(0)
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg">
                    {testimonial.name}
                  </h3>
                  <p className="text-white/60 text-sm">{testimonial.country}</p>
                </div>
              </div>

              {/* Rating */}
              {testimonial.rating && (
                <div className="mb-4">
                  <StarRating rating={testimonial.rating} />
                </div>
              )}

              {/* Testimonial Text */}
              <p className="text-white/80 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

