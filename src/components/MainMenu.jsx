import React,{useContext} from 'react'
import { QuizContext } from './helpers/context'
const MainMenu = () => {
  const {gamestate,setgame}=useContext(QuizContext)
  return (
    <div className='menu'>
      <button
      onClick={()=>{setgame('quiz')}}
      >
        start quiz
      </button>
    </div>
  )
}

export default MainMenu