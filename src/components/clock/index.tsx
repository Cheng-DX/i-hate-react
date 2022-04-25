/**
 * Component in function
 */
import { useEffect, useState } from 'react'

export default function Clock() {
  const [date, setDate] = useState(new Date())
  const [name] = useState('clock')

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000)
    return () => clearInterval(timerID)
  }, [])

  function tick() {
    setDate(new Date())
  }

  return (
    <div>
      <h2>It is {date.toLocaleTimeString()} </h2>
      <h3>{name}</h3>
    </div>
  )
}
