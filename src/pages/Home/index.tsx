import { HeroSection } from './components/HeroSection'
import { FeaturedCollections } from './components/FeaturedCollections'

export function HomePage() {
  return (
    <div className=''>
      <HeroSection />

      <FeaturedCollections />
    </div>
  )
}
