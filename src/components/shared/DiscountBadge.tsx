import { cn } from '@/lib/utils'

interface DiscountBadgeProps {
  discount: string
  className?: string
}

const DiscountBadge = ({ discount, className }: DiscountBadgeProps) => (
  <span
    className={cn(
      'bg-lime-200 text-zinc-600 font-bold rounded-full mb-4 w-24 h-8 flex justify-center items-center text-xs sm:text-sm md:text-base',
      className
    )}
  >
    {discount}
  </span>
)

export default DiscountBadge
