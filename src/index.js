import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const sum = good + neutral + bad
  const average = (good + bad*-1)/9
  const positive = (good / sum)*100

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      <h1>statistics</h1>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>badsd sd {bad}</p>
        <p>all {sum}</p>
        <p>average {average}</p>
        <p>positive {positive+"%"}</p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)