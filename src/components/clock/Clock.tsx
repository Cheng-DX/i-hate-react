/**
 * Component in Class
 */
import React from 'react'
import type { ClockProps, ClockState } from './types'

export default class Clock extends React.Component<ClockProps, ClockState> {
  timerID: number | undefined

  constructor(props: ClockProps) {
    super(props)
    this.state = {
      date: new Date(),
      name: 'clock'
    }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    const { title } = this.props
    const { date, name } = this.state

    const nums = [1, 2, 3, 4, 5]

    return (
      <div>
        <h1>{title}</h1>
        <h2>It is {date.toLocaleTimeString()} </h2>
        <h3>{name}</h3>
        <ul>
          {nums.map(num => (
            <li key={num}>{num}</li>
          ))}
        </ul>
      </div>
    )
  }
}
