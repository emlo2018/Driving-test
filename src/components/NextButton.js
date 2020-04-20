import React  from 'react'
import { useDispatch } from 'react-redux'
import { quiz } from '../reducers/quiz'


export const NextButton = ({setAnswered}) => {

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch (
        quiz.actions.goToNextQuestion()
        )
        setAnswered(false)
    }

    return ( 
    <button className="button" onClick={handleClick}>Next!</button>
    )
}