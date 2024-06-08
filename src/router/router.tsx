import Home from '@/pages/Home'
import { Routes as ReactRoutes, Route } from 'react-router-dom'

export const Router = () => {
  return (
    <ReactRoutes>
      <Route path="/" index element={<Home />} />
    </ReactRoutes>
  )
}
