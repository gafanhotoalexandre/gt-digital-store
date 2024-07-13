import logo from '@/assets/logo.svg'
import logoFooter from '@/assets/logo_footer.svg'

interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  variant: 'default' | 'footer'
}

export function Logo({ variant, ...props }: LogoProps) {
  const selectedLogo = variant === 'default' ? logo : logoFooter

  return <img src={selectedLogo} {...props} alt='Digital Store Logo' />
}
