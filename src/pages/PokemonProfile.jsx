import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"

function PokemonProfile() {

  const params = useParams()
  console.log(params.pokemonName)

  // 1.
  const [ pokemonDetails, setPokemonDetails ] = useState(null)
  const [ isLoading, setIsLoading ] = useState(true)

  // 2. 
  // useEffect(() => {
  //   getData()
  // }, [])

  useEffect(() => {
    getData()
    // cuando le pasamos dependencias al useEffect, actual como dos metodos del ciclo de vida del componente
    // 1. componentDidMount
    // 2. componentDidUpdate
  }, [params.pokemonName])

  const getData = async () => {
    try {
      
      // 3
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.pokemonName}`)
      console.log(response)

      // 4
      setPokemonDetails(response.data)
      setIsLoading(false)

    } catch (error) {
      console.log(error)
    }
  }

  // 5. 
  if (isLoading === true) {
    return <h3>...buscando</h3>
  }

  return (
    <div>
      
      {/* 6. */}

      <h4>Detalles de Pokemon</h4>

      <div>
        <h5>{pokemonDetails.name}</h5>
        <img src={pokemonDetails.sprites.front_default} alt="pokemon" width={150}/>
      </div>

    </div>
  )
}

export default PokemonProfile