import React, { useState } from 'react'
import Timer from '../components/Timer'

function About() {

  const [ isTimerShowing, setIsTimerShowing ] = useState(false)

  const handleToggleTimer = () => {
    setIsTimerShowing(!isTimerShowing)
  }

  return (
    <div>
      
      <h2>Mi pagina de React, ahora con enlaces!</h2>

      <button onClick={handleToggleTimer}>ver/ocultar temporizador</button>

      { isTimerShowing && <Timer /> }

    </div>
  )
}

export default About