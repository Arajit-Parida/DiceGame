import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'
import { Button, OutlineButton } from '../styled/Button'
import Rules from './Rules'

const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState()
  const [currentDice, setCurrentDice] = useState(1)
  const [score, setScore] = useState(0)
  const [error, setError] = useState('')
  const [showRules, setShowRules] = useState(false);

  //Random number for Dice:
  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const rollDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }

    const randomNumber = generateRandomNumber(1, 7)
    setCurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber)
    }
    else {
      setScore((prev) => prev - 2)
    }

    setSelectedNumber()
  }

  const resetScore = () => {
    setScore(0);
  }

  return (
    <MainContainer>

      <div className='topSection'>
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
      </div>

      <RollDice currentDice={currentDice} rollDice={rollDice} />
      
      <div className="btns">
        <OutlineButton onClick={resetScore} >Reset</OutlineButton>
        <Button onClick={() => {
          setShowRules((prev) => !prev)
        }} >
          {showRules ? "hide" : "show"}Rules
        </Button>
      </div>

      {showRules && <Rules />}

    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.main`
  padding-top: 50px;
  .topSection{
    display:flex;
    justify-content: space-between;
    align-items: center;
  }

  .btns{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 40px;
  }
`