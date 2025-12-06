
import FeaturedTours from './FeaturedToursSection/FeaturedTours'
import Hero from './HeroSection/Hero'
import Review from './ReviewSection/Review'

const Home = () => {
  return (
    <section className='min-h-screen'>
     <Hero/>
     <FeaturedTours/>
     <Review/>
    </section>
  )
}

export default Home
