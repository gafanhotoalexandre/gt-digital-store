import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import { ReactNode } from 'react'

interface SectionProps {
  title: string
  titleAlign?: 'left' | 'center'
  link?: {
    text: string
    href: string
  }
  children: ReactNode
  className?: string
}

export const Section = ({
  title,
  titleAlign = 'left',
  link,
  children,
  className,
}: SectionProps) => (
  <section
    className={cn('px-5 pt-9 pb-1 md:pb-4 md:px-24 bg-slate-100', className)}
  >
    <div
      className={cn(
        `flex items-center mb-5`,
        titleAlign === 'center' ? 'justify-center' : 'justify-between'
      )}
    >
      <h2
        className={`text-2xl text-zinc-500 font-bold ${
          titleAlign === 'center' ? 'text-center' : 'text-left'
        }`}
      >
        {title}
      </h2>
      {link && (
        <Button
          variant={'link'}
          className='text-primary font-normal text-lg flex justify-center items-center gap-2'
        >
          <span>Ver todos</span>
          <ArrowRight width={16} className='font-bold' />
        </Button>
      )}
    </div>
    {children}
  </section>
)
