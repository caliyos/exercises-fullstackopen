import { useState } from 'react'
import './Statistics.css';

const Button = ({onClick,text}) => <button onClick={onClick}>{text}</button>
const Statistics = (props) => {
const all = props.good + props.neutral + props.bad
const totalScore = (props.good * 1) + (props.neutral * 0) + (props.bad * -1)
const average = totalScore / all
const positive = (props.good  / all) * 100
 if (all === 0) {    
        return (      
        <div>        
          No feedback given  
        </div>    
        )  
      }  
  return (
    <div>
      <StatisticLine text="good" value={props.good}/>
      <StatisticLine text="neutral" value={props.neutral}/>
      <StatisticLine text="bad" value={props.bad}/>
      <StatisticLine text="all" value={all}/>
      <StatisticLine text="average" value={average}/>
      <StatisticLine text="positive" value={positive}/>
    </div>
  )
}

const StatisticLine = (props) => {
        return (      
        <div>  
          <table>
            <tbody>
            <tr>
              <td>{props.text}</td>
              <td>{props.value} {props.text === 'positive' ? ' %' : ''}</td>
            </tr>
            </tbody>
            </table>      
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
    <Button onClick={callSetGood} text='good'/>
    <Button onClick={callSetNeutral} text='neutral'/>
    <Button onClick={callSetBad} text='bad'/>
    <h1>statistics</h1>
    <Statistics  good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App