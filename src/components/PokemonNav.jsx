import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

// Preguntas antes de trabajar el componente

// 1. Donde estan los pokemons? => PokeApi
// 2. Como traemos la data de la API? => fetch o axios
// 3. En que momento hacemos la llamada a la API? => useEffect - componentDidMount
// 4. Donde almacenamos la data? => en un estado
// * siempre que traigamos data de un lugar externo, lo guardamos en un estado
// 5. Una vez tengamos la data en el estado, como la renderizamos? => .map, agregar el id al enlace

function PokemonNav() {

  // 1. creamos el estado
  const [ pokemonList, setPokemonList ] = useState(null)
  const [ isLoading, setIsLoading ] = useState(true) // el componente empieza esperando data externa

  // 2. empezamos el useEffect/componentDidMount
  useEffect(() => {

    // 3. hacemos la llamada de axios a el lugar donde esta la data
    axios.get("https://pokeapi.co/api/v2/pokemon")
    .then((response) => {
      console.log(response)
      // 4. guardar la data en el estado
      setPokemonList(response.data.results)
      setIsLoading(false)
    })
    .catch((err) => console.log(err))

  }, [])

  // 5. crear un efecto de espera, antes de recibir la data (loading)
  if (isLoading === true) {
    return <h3>...buscando</h3>
  }

  return (
    <div>
      
        <h4>Lista de pokemon</h4>

        {/* 6. Renderizar la info del estado */}

        {pokemonList.map((eachPokemon) => {
          return (
            <p key={eachPokemon.name}>
              <Link to={`/pokemon/${eachPokemon.name}`}>{eachPokemon.name}</Link>
            </p>
          )
        })}

    </div>
  )
}

export default PokemonNav