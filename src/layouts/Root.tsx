import { Outlet } from 'react-router-dom'

import { Header } from '@/components/shared/Header'
import { Footer } from '@/components/shared/Footer'

export function RootLayout() {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}
