import logo from '@/assets/logo_footer.svg'
import { Separator } from '../../ui/separator'
import { FooterSocials } from './Socials'
import { FooterLinkList } from './LinkList'
import { FOOTER_INFO_LINKS_1, FOOTER_INFO_LINKS_2 } from '@/constants'
import { FooterSection } from './Section'
import { FooterContact } from './Contact'

export function Footer() {
  return (
    <footer className='bg-neutral-900 text-neutral-300 py-8 px-0 md:px-24'>
      <div className='container px-5'>
        <div className='flex flex-col gap-10 md:flex-row md:justify-between'>
          <div className='flex flex-col items-start md:max-w-[307px] '>
            <img src={logo} alt='Digital Store Logo' className='h-8 mb-8' />
            <p className='md:text-left'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
            <FooterSocials />
          </div>

          <div className='md:mt-0 flex gap-8 md:gap-0 md:space-x-16'>
            <FooterSection title='Informação'>
              <FooterLinkList links={FOOTER_INFO_LINKS_1} />
            </FooterSection>

            <FooterSection title='Informação'>
              <FooterLinkList links={FOOTER_INFO_LINKS_2} />
            </FooterSection>
          </div>

          <div className='mt-8 md:mt-0'>
            <FooterContact />
          </div>
        </div>

        <Separator className='mt-8 bg-neutral-700' />
        <div className='text-center pt-4'>
          &copy; {new Date().getFullYear()} Digital College
        </div>
      </div>
    </footer>
  )
}
