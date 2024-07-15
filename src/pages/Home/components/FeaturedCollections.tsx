import Categories from './Categories'
import { CollectionItem } from './CollectionItem'

import { COLLECTION_ITEMS } from '@/constants'

export function FeaturedCollections() {
  return (
    <section className='px-5 pt-9 pb-32 md:px-24 bg-slate-100'>
      <h2 className='text-2xl text-zinc-500 font-bold mb-8'>
        Coleções em destaque
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {COLLECTION_ITEMS.map((item) => (
          <CollectionItem
            key={item.imageSrc}
            discount={item.discount}
            title={item.title}
            imageSrc={item.imageSrc}
            altText={item.altText}
          />
        ))}
      </div>

      <section className='my-24 flex flex-col items-center gap-6'>
        <h2 className='text-2xl text-zinc-500 font-bold'>
          Coleções em destaque
        </h2>

        <Categories />
      </section>
    </section>
  )
}
