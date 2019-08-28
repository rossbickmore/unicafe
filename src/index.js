import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
  const Statistics = (props) => {
    return (
        <div>
        <p>{props.text} {props.stat}</p>
        </div>
    )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const average = (good + bad*-1)/9
  const positive = (good / all)*100+"%"

  if (all===0) {
    return (
        <div>
        <h1>give feedback</h1>
          <Button onClick={() => setGood(good + 1)} text="good" />
          <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
          <Button onClick={() => setBad(bad + 1)} text="bad" />
        <p>No feedback given</p>
        </div>
        
      )
  } else {
    return (
        <div>
          <h1>give feedback</h1>
          <Button onClick={() => setGood(good + 1)} text="good" />
          <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
          <Button onClick={() => setBad(bad + 1)} text="bad" />
          <h1>statistics</h1>
          <Statistics stat={good} text="good"/>
          <Statistics stat={neutral} text="neutral"/>
          <Statistics stat={bad} text="bad"/>
          <Statistics stat={all} text="all"/>
          <Statistics stat={average} text="average"/>
          <Statistics stat={positive} text="positive"/>
        </div>
      )
  }
  
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)