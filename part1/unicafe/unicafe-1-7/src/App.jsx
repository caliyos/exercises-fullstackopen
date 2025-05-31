import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad
  const totalScore = (good * 1) + (neutral * 0) + (bad * -1)
  const average =  all === 0 ? 0 :  totalScore / all
  const positive = all === 0 ? 0 :  good * 100 / all

  const callSetGood = () => {
    setGood(good + 1)
  }

  const callSetNeutral = () => {
    setNeutral (neutral + 1)
  }

  const callSetBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={callSetGood}>good</button>
      <button onClick={callSetNeutral}>neutral</button>
      <button onClick={callSetBad}>bad</button>
  
    <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive} %</p>
    </div>
  )
}

export default App