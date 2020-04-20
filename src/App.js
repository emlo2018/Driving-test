import './App.css';
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { quiz } from './reducers/quiz'
import { StartPage } from './pages/Start'
import { Question } from './pages/Question'
import { Summary } from './pages/Summary'



const reducer = combineReducers({
  quiz: quiz.reducer
})

const store = configureStore({ reducer })


export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <StartPage />
          </Route>
          <Route path="/quiz" exact>
            <Question />
          </Route>
          <Route path="/summary" exact>
            <Summary />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>

  )
}