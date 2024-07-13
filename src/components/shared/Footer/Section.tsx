import { ReactNode } from 'react'

interface FooterSectionProps {
  title: string
  children: ReactNode
}

export function FooterSection({ title, children }: FooterSectionProps) {
  return (
    <div className='flex flex-col items-start md:max-w-[135px]'>
      <h3 className='font-semibold mb-7 text-lg'>{title}</h3>
      {children}
    </div>
  )
}
