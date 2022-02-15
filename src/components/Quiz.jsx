import React,{useState,useContext} from 'react'
import { Question } from './helpers/QuestionBank'
import { QuizContext } from './helpers/context'
const Quiz = () => {
  const{score,setscore}=useContext(Quiz)
  const[current,setCurrent]=useState(1)
  const[optionChosen,setOption]=useState('')

  const nextQuestion=()=>{

  }
  return (
    <div className='quiz'>
      <h1>{Question[current].prompt}</h1>
      <div className='option'>
        <button onClick={()=>setOption('A')}>{Question[current].optionA}</button>
        <button onClick={()=>setOption('B')}>{Question[current].optionB}</button>
        <button onClick={()=>setOption('C')}>{Question[current].optionC}</button>
        <button onClick={()=>setOption('D')}>{Question[current].optionD}</button>
      </div>
      <button onClick={nextQuestion()}>next question</button>
    </div>
  )
}

export default Quiz