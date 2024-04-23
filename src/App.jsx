import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addVoteToGood = () => setGood(good + 1)
  const addVoteToNeutral = () => setNeutral(neutral + 1)
  const addVoteToBad = () => setBad(bad + 1)

  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={addVoteToGood}>good</button>
      <button onClick={addVoteToNeutral}>neutral</button>
      <button onClick={addVoteToBad}>bad</button>
    </div>
  )
}

export default App
