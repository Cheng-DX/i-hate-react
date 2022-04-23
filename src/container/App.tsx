import { useState } from 'react'
import Clock from '../components/clock/Clock'
import BoilingVerdict from '../components/boilingVerdict'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)
  const [celsius, setCelsius] = useState(0)

  return (
    <div className="App">
      <button type="button" onClick={() => setCount(count => count + 1)}>
        count is: {count}
      </button>
      <Clock title='Hi' />
      <input value={celsius} onChange={({ target: { value } }) => setCelsius(Number(value))} />
      <BoilingVerdict celsius={celsius} />
    </div>
  )
}
