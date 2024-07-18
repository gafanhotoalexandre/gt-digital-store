import { Image } from '@/types'

interface ProductImagesProps {
  images: Image[]
  thumbnails: Image[]
}

export function ProductImages({ images, thumbnails }: ProductImagesProps) {
  return (
    <div className='w-full md:w-1/2 flex flex-col gap-5'>
      <img
        src={images[0].url}
        alt={images[0].altText}
        className='w-full rounded-lg shadow-md'
      />
      <div className='flex justify-center gap-2'>
        {thumbnails.map((thumbnail, index) => (
          <img
            key={index}
            src={thumbnail.url}
            alt={thumbnail.altText}
            className='w-20 h-20 object-cover border rounded-md cursor-pointer'
          />
        ))}
      </div>
    </div>
  )
}
