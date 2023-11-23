import {useEffect, useState} from 'react'

function Timer() {

  const [ timerValue, setTimerValue ] = useState(0)

  useEffect(() => {
    console.log("Component Did Mount")

    setInterval(() => {
      console.log("timer andando")
      console.log(timerValue) // se registra el valor inicial del estado al momento de iniciar el intervalo. No se hace referencia al valor real.
      setTimerValue((currentStateValue) => {
        return currentStateValue + 1
      })
    }, 1000)

    return () => {
      console.log("Component Will Unmount")
    }

  }, []) // ! IMPORTANTE, añadimos un array vacio como segundo argumento

  return (
    <div>
      
      <h4>Temporizador</h4>

      <h2>{timerValue}</h2>

    </div>
  )
}

export default Timer