import { useState } from 'react'
import styled from 'styled-components'
import StartGame from './components/StartGame';
import GamePlay from './components/GamePlay';

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const ToggleStartGame = () =>{
    setIsGameStarted((prev) => !prev);    //toggle previous value
  }

  return (
    <>
      {
        isGameStarted ? <GamePlay /> : <StartGame toggle= {ToggleStartGame} />
      }
    </>
  )
}

export default App
