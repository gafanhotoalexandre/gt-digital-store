import { HeroSection } from './components/HeroSection'
import { FeaturedCollections } from './components/FeaturedCollections'
import { TrendingProducts } from './components/TrendingProducts'

export function HomePage() {
  return (
    <div className=''>
      <HeroSection />

      <FeaturedCollections />

      <TrendingProducts />
    </div>
  )
}
