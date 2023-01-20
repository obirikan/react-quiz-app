import {useState,useContext} from 'react'
import './App.css'
import EndScreen from './components/EndScreen';
import MainMenu from './components/MainMenu';
import Quiz from './components/Quiz';
import {QuizContext} from './components/helpers/context.js'


function App() {
  const [gamestate,setgame]=useState('menu')
  const [score,setscore]=useState(0)
  return (
  <QuizContext.Provider value={{gamestate,setgame,score,setscore}}>
    <div className="App">
     <h1>Quiz app</h1>
     {gamestate == 'menu' &&<MainMenu/>}
     {gamestate == 'quiz' &&<Quiz/>}
     {gamestate == 'endscreen' &&<EndScreen/>}
    </div>
  </QuizContext.Provider>
  );
}

export default App;
