import { useState } from 'react'

const Button = ({ onPress, text }) => {
  return (
    <div>
      <button onClick={onPress}>{text}</button>
    </div>
  )
}

const Statistics = (props) => {
  if (props.score.length === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <StatisticLine text="good" value={props.good}/>
      <StatisticLine text="neutral" value={props.neutral}/>
      <StatisticLine text="bad" value={props.bad}/>
      <StatisticLine text="all" value={props.totalVotes}/>
      <StatisticLine text="average" value={props.average}/>
      <StatisticLine text="positive" value={props.positiveFeedback}/>
    </div>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <>
      <p>{text}: {value}</p>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [score, addScore] = useState([])

  const totalVotes = good + neutral + bad
  const totalScore = score.reduce((previousScore, currentScore) => {
    return previousScore + currentScore
  }, 0)
  const average = totalScore / totalVotes
  const positiveFeedback = ((good / totalVotes) * 100).toString() + "%"

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
        <Button onPress={addVoteToGood} text='good' />
        <Button onPress={addVoteToNeutral} text='neutral' />
        <Button onPress={addVoteToBad} text='bad' />
      </div>

      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} score={score} totalVotes={totalVotes} average={average} positiveFeedback={positiveFeedback} />
    </div>
  )
}

export default App
