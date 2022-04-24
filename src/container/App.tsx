import { useState } from 'react'
import './App.css'

import TheRouter from '../router'
import { Link } from 'react-router-dom'

export default function App() {
  const [path, setPath] = useState('/clock1')

  function switchPath() {
    setPath(path === '/clock1' ? '/clock2' : '/clock1')
  }

  return (
    <div className="App">
      <Link to={path} >
        <button onClick={switchPath}>Switch</button>
      </Link>
      <TheRouter />
    </div>
  )
}
