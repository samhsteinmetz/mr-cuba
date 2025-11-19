import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Gallery } from './components/Gallery'
import { Testimonials } from './components/Testimonials'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  // You can easily customize the content here
  const heroImages = [
    '/images/vietnamPicture-125.jpg',
    '/images/vietnamPicture-38.jpg',
    '/images/vietnamPicture-44.jpg'
  ]

  const galleryImages = [
    '/images/vietnamPicture-125.jpg',
    '/images/vietnamPicture-38.jpg',
    '/images/vietnamPicture-44.jpg',
    '/images/vietnamPicture-113.jpg',
    '/images/vietnamPicture-42.jpg',
    '/images/vietnamPicture-52.jpg',
    '/images/photo-in-ho-chi-minh.jpg',
    '/images/twoperson-photo-in-nature.jpg',
    '/images/mountain-bike-toursit-photo.jpg',
    '/images/motorbike-mountainphoto.jpg',
    '/images/motorbike-groupphoto.jpg',
    '/images/motorbikegroup-photo.jpg',
    '/images/groupphoto-mountainroad.jpg',
    '/images/groupphoto-clouds.jpg',
    '/images/groupphoto-eating.jpg'
  ]

  const testimonials = [
    {
      name: 'Sarah Wong',
      country: 'Perth, Australia',
      text: 'An absolutely incredible experience! Mr. Cuba showed us an auethentic experience. He brought us all along the coast to fishing villages and special areas in Hoi An where we were staying. 100% would recommend',
      rating: 5
    },
    {
      name: 'Emory Ranes',
      country: 'Anchorage, USA',
      text: 'I was a beginner motorbiking and Mr Cuba taught me everything I needed. Immediatley we were on mountain passes going through the rain forest and finding temple ruins all in one day!',
      rating: 5
    },
    {
      name: 'Eddie Zhou',
      country: 'Seuol, Korea',
      text: 'Amazing tour guide with vast experience and local connections. We met him out drinking one night in Hue, and he offered to take us out to Hoi An and the countryside the next two days. Our itinerary was fully planned out by Mr Cuba, providing us with motorbikes, gas, and leading us to both well-known attractions and more local stops such as farmers markets and family-owned rice paper & rice wine makers! \n\n Would definitely recommend to travel with Mr Cuba for any Vietnam trips.',
    rating: 5
    }
  ]

  const contactInfo = {
    phone: '+84 366 952 767',
    email: 'mrcuba@example.com',
    whatsapp: '+84 366 952 767'
  }

  const aboutContent = {
    name: 'Mr. Cuba',
    description: '\tWith over 5 years of experience guiding tours through Central Vietnam, I offer authentic, personalized Easy Rider motorbike adventures that showcase the hidden gems and breathtaking landscapes of my homeland. \n\n \tFrom misty mountains to pristine beaches, ancient temples to vibrant local markets – experience Vietnam through the eyes of a local.\n\n \tNo license or experience on scooters is required, I will teach you everything you need to know.',
    image: '/images/motorbike-groupphoto.jpg'
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero
          title="MR. CUBA"
          subtitle="Authentic Easy Rider Motorbike Tours in Central Vietnam"
          images={heroImages}
        />
        <About
          name={aboutContent.name}
          description={aboutContent.description}
          image={aboutContent.image}
        />
        <Gallery
          title="Tour Gallery"
          images={galleryImages}
        />
        <Testimonials
          title="What Travelers Say"
          testimonials={testimonials}
        />
        <Contact
          title="Get In Touch"
          subtitle="Ready to explore Central Vietnam? Contact me to book your authentic easy rider motorbike adventure!"
          contactInfo={contactInfo}
        />
      </main>
      <Footer />
    </div>
  )
}

export default App
