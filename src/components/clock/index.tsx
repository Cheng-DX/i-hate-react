/**
 * Component in function
 */
import { useState, useEffect } from 'react'
import type { ClockProps } from './types'

export default function Clock(props: ClockProps) {
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
      <h1>{props.title}</h1>
      <h2>It is {date.toLocaleTimeString()} </h2>
      <h3>{name}</h3>
    </div>
  )
}
