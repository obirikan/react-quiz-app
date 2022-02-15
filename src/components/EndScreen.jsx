import React,{useContext} from 'react'
import { QuizContext } from './helpers/context'
import { Question } from './helpers/QuestionBank'
const EndScreen = () => {
  const {score,setscore,setgame}=useContext(QuizContext)

  const restartQuiz=()=>{
    setscore(0)
    setgame('menu')
  }
  return (
    <div className='Endscreen'>
      <h3>{score}/{Question.length}</h3>
      <button onClick={restartQuiz}>restart quiz</button>
    </div>
  )
}

export default EndScreen