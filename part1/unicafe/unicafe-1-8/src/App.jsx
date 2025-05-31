import { useState } from 'react'

const Statistics = (props) => {
const all = props.good + props.neutral + props.bad
const totalScore = (props.good * 1) + (props.neutral * 0) + (props.bad * -1)
const average =  all === 0 ? 0 :  totalScore / all
const positive = all === 0 ? 0 :  props.good * 100 / all
  return (
    <div>
       <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive} %</p>
    </div>
  )
}

const App = () => {
 // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

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
    <Statistics good={good} neutral={neutral} bad={bad}/>  
    </div>
  )
}

export default App