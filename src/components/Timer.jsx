import {useEffect, useState} from 'react'

function Timer(props) {

  const [ timerValue, setTimerValue ] = useState(0)

  useEffect(() => {
    console.log("Component Did Mount")

    const intervalId = setInterval(() => {
      console.log("timer andando")
      // console.log(timerValue) // se registra el valor inicial del estado al momento de iniciar el intervalo. No se hace referencia al valor real.
      setTimerValue((currentStateValue) => {
        return currentStateValue + 1; // retornamos el nuevo valor
      })
    }, 1000)

    return () => {
      console.log("Component Will Unmount") // limpieza del temporizador
      clearInterval(intervalId)
    }

  }, []) // ! IMPORTANTE, añadimos un array vacio como segundo argumento

  useEffect(() => {
    console.log("componentDidUpdate", timerValue)
    if (timerValue >= 10) {
      props.setIsTimerShowing(false)
    }
  }, [timerValue])
  //  |
  // dependencia: que va a cambiar para que ocasione este componentDidUpdate

  return (
    <div>
      
      <h4>Temporizador</h4>

      <h2>{timerValue}</h2>

    </div>
  )
}

export default Timer