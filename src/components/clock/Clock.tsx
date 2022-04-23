import React from "react";

interface ClockProps {
  title: string
}
interface ClockState {
  date: Date
  name: string
}

export default class Clock extends React.Component<ClockProps, ClockState> {
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
          {nums.map(num => <li key={num}>{num}</li>)}
        </ul>
      </div>
    )
  }
}