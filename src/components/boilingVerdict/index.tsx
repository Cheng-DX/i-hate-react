interface BoilingVerdictProps {
  celsius: number
}

export default function BoilingVerdict(props: BoilingVerdictProps) {
  if (props.celsius >= 100)
    return <p>The water would boil.</p>

  return <p>The water would not boil.</p>
}
