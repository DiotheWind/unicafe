import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [score, addScore] = useState([])

  const totalVotes = good + neutral + bad
  const totalScore = score.reduce((previousScore, currentScore) => {
    return previousScore + currentScore
  }, 0)
  const positiveFeedback = (good / totalVotes) * 100

  const addVoteToGood = () => {
    setGood(good + 1)
    const updatedScore = score.concat(1)
    addScore(updatedScore)
  }

  const addVoteToNeutral = () => {
    setNeutral(neutral + 1)
    const updatedScore = score.concat(0)
    addScore(updatedScore)
  }

  const addVoteToBad = () => {
    setBad(bad + 1)
    const updatedScore = score.concat(-1)
    addScore(updatedScore)
  }

  return (
    <div>
      <div>
        <h2>give feedback</h2>
        <button onClick={addVoteToGood}>good</button>
        <button onClick={addVoteToNeutral}>neutral</button>
        <button onClick={addVoteToBad}>bad</button>
      </div>
      <div>
        <h2>statistics</h2>
        <p>good: {good}</p>
        <p>neutral: {neutral}</p>
        <p>bad: {bad}</p>
        <p>all: {totalVotes}</p>
        <p>average: {totalScore / totalVotes}</p>
        <p>positive: {positiveFeedback}%</p>
      </div>
    </div>
  )
}

export default App
