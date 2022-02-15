import React,{useState,useContext} from 'react'
import { Question } from './helpers/QuestionBank'
import { QuizContext } from './helpers/context'
const Quiz = () => {
  const{score,setscore,setgame}=useContext(QuizContext)
  const[current,setCurrent]=useState(0)
  const[optionChosen,setOption]=useState('')

  const nextQuestion=()=>{
     if(Question[current].answer === optionChosen){
       setscore(score + 1)
     }
     alert(score)
     setCurrent(current+1)
  }
  const finishQuiz=()=>{
    if(Question[current].answer === optionChosen){
      setscore(score + 1)
    }
    setgame('endscreen')
  }
  return (
    <div className='Quiz'>
      <h1>{Question[current].prompt}</h1>
      <div className='option'>
        <button onClick={()=>setOption('A')}>{Question[current].optionA}</button>
        <button onClick={()=>setOption('B')}>{Question[current].optionB}</button>
        <button onClick={()=>setOption('C')}>{Question[current].optionC}</button>
        <button onClick={()=>setOption('D')}>{Question[current].optionD}</button>
      </div>
      {current===Question.length-1?
       (<button onClick={finishQuiz}>finish quiz</button>):
       ( <button onClick={nextQuestion}>next question</button>)
      }
    </div>
  )
}

export default Quiz