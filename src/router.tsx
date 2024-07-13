import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import { HomePage } from './pages/Home'
import { RootLayout as Root } from './layouts/Root'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Root />}>
        <Route index element={<HomePage />} />
      </Route>
    </>
  )
)
