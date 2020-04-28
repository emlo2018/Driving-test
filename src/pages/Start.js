import React from "react"
import { Link } from "react-router-dom"
import '../styling/buttons.css'


export const StartPage = () => {
    return (
        <div className="start-container">
            <h1>Välkommen till körkorts quiz! 🚗</h1>
            <h1>Du behöver svara rätt på alla frågorna för att få godkänt. Klockan räknar ner från 120 sekunder.</h1>
            <Link className="button" to="/quiz">Start!</Link>
        </div>

    )
}