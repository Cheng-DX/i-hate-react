
import { Routes, Route } from 'react-router-dom'
import { routes } from './routes'

export default function TheRouter() {
  return (
    <Routes>
      {
        routes.map(route =>
        (
          <Route key={route.path} path={route.path} element={<route.component />} />
        ))
      }
    </Routes>
  )
}
