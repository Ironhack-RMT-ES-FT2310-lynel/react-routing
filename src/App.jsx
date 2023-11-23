import { Route, Routes } from 'react-router-dom'
import './App.css'
import PokemonNav from './components/PokemonNav'
import Home from './pages/Home'
import PokemonProfile from './pages/PokemonProfile'

function App() {
  return (
    <div>
      
      <h1>Mi Pokedex</h1>

      <div className='pokemon-container'>

        <PokemonNav />

        <Routes>

          <Route path="/" element={ <Home /> }/>
          <Route path="/pokemon/:pokemonName" element={ <PokemonProfile /> }/>

        </Routes>

      </div>


    </div>
  )
}

export default App