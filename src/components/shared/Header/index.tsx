import { DesktopHeader } from './DesktopHeader'
import { MobileHeader } from './MobileHeader'

export function Header() {
  return (
    <>
      <div className='hidden md:block'>
        <DesktopHeader />
      </div>
      <div className='block md:hidden'>
        <MobileHeader />
      </div>
    </>
  )
}
