import { createSlice } from '@reduxjs/toolkit'

const questions = [
  { id: 1, questionText: 'Vad är sant angående avfarter från motorvägar?', options: ['Avfarten ligger alltid på vänster sida.', 'Avfarten kan ligga på antingen höger eller vänster sida.', 'Avfarten ligger alltid på höger sida.'], correctAnswerIndex: 2 },
  { id: 2, questionText: 'Vad är sant angående slitna däck med dåligt mönsterdjup?', options: ['Slitna däck fungerar bättre än nya däck i regn, men sämre under normala förhållanden.', 'Slitna däck fungerar extra dåligt i regn.', 'När det regnar är det ingen skillnad mellan greppnivån i slitna och nya däck.'], correctAnswerIndex: 1 },
  { id: 3, questionText: 'Är det tillåtet att låta ett barn under 3 år färdas i taxi utan bilbarnstol?', options: ['Ja, en kort sträcka i baksätet.', 'Ja, dock endast om det sker för att uppsöka vård.', 'Ja, och det finns inga begränsningar, eftersom föraren har särskild utbildning.', 'Nej, eftersom alla taxibilar enligt lag måste tillhandahålla lämpliga bilbarnstolar.'], correctAnswerIndex: 3 },
  { id: 4, questionText: 'Vad är sant för unga män med körkort?', options: ['Unga män har bäst reaktionstid i trafiken.', 'Unga män har en tendens att överskatta sin körförmåga mer när de har haft körkort i något år än när de precis har fått körkort.', 'Unga män har en tendens att överskatta sin körförmåga mer när de precis har fått körkort än när de har haft körkort i något år.', 'Unga män löper 5–6 gånger större risk att råka ut för en trafikolycka jämfört med de över 75 år.'], correctAnswerIndex: 2 },
  { id: 5, questionText: 'Hur bör du bete dig när du korsar en järnväg där sikten är delvis skymd?', options: ['Köra som vanligt eftersom det finns varningssignaler som meddelar om ett tåg kommer.', 'Sakta in, kolla åt båda hållen, växla ner och sedan köra över snabbt.', 'Sakta in, kolla åt båda hållen och sedan köra över långsamt.'], correctAnswerIndex: 1 },
  { id: 6, questionText: 'Vilket alternativ ger ett exempel på miljövänlig körning?', options: ['Mycket långsam fartökning.', 'Hoppa över växlar.', 'Körning på så låga växlar som möjligt.', 'Hålla motorns varvtal på minst 3 000 varv/minut.'], correctAnswerIndex: 1 },
  { id: 7, questionText: 'Är det tillåtet att parkera direkt efter ett övergångsställe?', options: ['Ja, det är tillåtet.', 'Nej, det är inte tillåtet.'], correctAnswerIndex: 1 },
]

const initialState = {
  questions,
  answers: [],
  currentQuesionIndex: 0,
  quizOver: false,
  startTime: null
}

export const quiz = createSlice({
  name: 'quiz',
  initialState,
  reducers: {

    /**
     * Use this action when a user selects an answer to the question.
     * The answer will be stored in the `quiz.answers` state with the
     * following values:
     *
     *    questionId  - The id of the question being answered.
     *    answerIndex - The index of the selected answer from the question's options.
     *    question    - A copy of the entire question object, to make it easier to show
     *                  details about the question in your UI.
     *    answer      - The answer string.
     *    isCorrect   - true/false if the answer was the one which the question says is correct.
     *
     * When dispatching this action, you should pass an object as the payload with `questionId`
     * and `answerIndex` keys. See the readme for more details.
     */
    submitAnswer: (state, action) => {
      const { questionId, answerIndex } = action.payload
      const question = state.questions.find((q) => q.id === questionId)

      if (!question) {
        throw new Error('Could not find question! Check to make sure you are passing the question id correctly.')
      }

      if (question.options[answerIndex] === undefined) {
        //throw new Error(`You passed answerIndex ${answerIndex}, but it is not in the possible answers array!`)
        console.error()
      }

      state.answers.push({
        questionId,
        answerIndex,
        question,
        answer: question.options[answerIndex],
        isCorrect: question.correctAnswerIndex === answerIndex
      })
    },

    /**
     * Use this action to progress the quiz to the next question. If there's
     * no more questions (the user was on the final question), set `quizOver`
     * to `true`.
     *
     * This action does not require a payload.
     */
    goToNextQuestion: (state) => {
      if (state.currentQuesionIndex + 1 === state.questions.length) {
        state.quizOver = true
      } else {
        state.currentQuesionIndex += 1
      }
    },

    /**
     * Use this action to reset the state to the initial state the page had
     * when it was loaded. Who doesn't like re-doing a quiz when you know the
     * answers?!
     *
     * This action does not require a payload.
     */
    restart: () => {
      return initialState
    }

  }
})