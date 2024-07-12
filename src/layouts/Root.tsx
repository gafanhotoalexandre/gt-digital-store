import { Outlet } from 'react-router-dom'

import { Header } from '@/components/shared/Header'
import { Footer } from '@/components/shared/Footer'

export function RootLayout() {
  return (
    <>
      <Header />

      <main className='bg-red-400 p-5'>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}
