import React from 'react'
import { useSelector } from 'react-redux'

export const Progress = () => {
    const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuesionIndex])
    const questionList = useSelector((state) => state.quiz.questions)

    return (
    <h1>{question.id}/{questionList.length}</h1>
    )
}