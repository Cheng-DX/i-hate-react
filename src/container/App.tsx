import './App.css'

import { Link } from 'react-router-dom'
import TheRouter from '~/router'
import { routes } from '~/router/routes'

export default function App() {
  return (
    <div className="app">
      <header className="app-header">
        {routes.map(route => {
          if (route.path === '*')
            return null
          return (
            <Link key={route.path} to={route.path}>
              <button className="router-link-button">
                {route.meta.title}
              </button>
            </Link>
          )
        })}
      </header>
      <main className="app-main" >
        <TheRouter />
      </main>
    </div>
  )
}
