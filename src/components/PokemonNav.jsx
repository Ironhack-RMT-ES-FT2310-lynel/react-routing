import React from 'react'
import { Link } from 'react-router-dom'

function PokemonNav() {
  return (
    <div>
      
        <h4>Lista de pokemon</h4>

        <p><Link>pikachu</Link></p>
        <p><Link>bulbasaur</Link></p>
        <p><Link>charmander</Link></p>

    </div>
  )
}

export default PokemonNav