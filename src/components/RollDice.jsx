import React, { useState } from 'react'
import styled from 'styled-components'

const RollDice = ({rollDice, currentDice}) => {
 
  return (
    <DiceContainer>
      <div className='dice' onClick={rollDice} >
        <img src= {`Images/dices/dice_${currentDice}.png`} alt="" />
      </div>
      <p>Click on dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = styled.div`
    margin-top: 45px;
    display: flex;
    align-items: center;
    flex-direction: column;

    p{
        /* flex-direction: column; */
    }

    .dice{
        cursor: pointer;
    }
`