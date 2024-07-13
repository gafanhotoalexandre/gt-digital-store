import logo from '@/assets/logo.svg'

interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export function Logo(props: LogoProps) {
  return <img src={logo} {...props} alt='Digital Store Logo' className='h-8' />
}
