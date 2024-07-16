import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import { HomePage } from './pages/Home'
import { RootLayout as Root } from './layouts/Root'
import ProductsPage from './pages/Products'
import { NotFoundPage } from './pages/NotFound'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Root />} errorElement={<NotFoundPage />}>
        <Route index element={<HomePage />} />
        <Route path='/produtos' element={<ProductsPage />} />
      </Route>
    </>
  )
)
