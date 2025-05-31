import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0,0,0,0,0,0,0,0])

  const handleNext = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex)
  }

  const handleVote = (arr, key) => {
    const handler = () => {
      const copy = [...arr];
      copy[key] += 1
      /* 
        the copied array and its passed key will be incremented
        e.g second element passed as key
        now value of array e.g [0,1,0,0,0,0,0,0] 
        now setVotes will set these array values [0,1,0,0,0,0,0,0] to votes hook
      */
      setVotes(copy) 
    }
    // console.log(handler)         
    return handler
  }

   return (
    <div>
     <p>{anecdotes[selected]}</p>
     <p>has {votes[selected]} votes</p>
      <button onClick={handleVote( votes, selected )} >vote</button>
      <button onClick={handleNext} >Next Anecdote</button>
    </div>
  )
}

export default App