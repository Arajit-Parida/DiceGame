import React, { useState } from 'react'
import styled from 'styled-components'

const NumberSelector = ({selectedNumber, setSelectedNumber, error, setError}) => {
    const ArrayNumbers = [1, 2, 3, 4, 5, 6];

    const numberSelectorHandler = (value) =>{
        setSelectedNumber(value);
        setError("")
    }


    return (
        <NumberSelectorContainer>
            <p className='error' >{error}</p>
            <div className='flex' >
                {
                    ArrayNumbers.map((value, index) => (
                        <Box
                            isSelected={value === selectedNumber}     //isSelected is a props, it retuns a boolean
                            key={index} onClick={() => numberSelectorHandler(value)} >{value}

                        </Box>
                    ))
                }
            </div>
            <p>Select Number</p>
        </NumberSelectorContainer>
    )
}

export default NumberSelector

const NumberSelectorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
   .flex{
    display: flex;
    gap: 24px;
   } 
   p{
    font-size:24px;
    font-weight: 700px;
   }
   .error{
    color: red ;
   }
`

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display:grid;
    place-items: center;
    font-size:24px;
    font-weight:700;
    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) => (props.isSelected ? "white" : "black")};
`