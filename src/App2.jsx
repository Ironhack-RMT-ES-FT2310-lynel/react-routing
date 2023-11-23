
import './App.css'
import { Routes, Route, Link } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Profile from './pages/Profile'

// usando sistema de router con react. App va a funcionar como un controlador de rutas/paginas
function App() {


  return (
    <>

      <nav>
        {/* <a href="/">Home</a>
        <a href="/about">About</a> */}
        {/* para navegaciones internar, NUNCA usamos anchor tags. SIEMPRE usamos componentes Link */}
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/profile/antonio"}>Ver perfil de Antonio</Link>
        <Link to={"/profile/ruth"}>Ver perfil de Ruth</Link>

      </nav>

      <Routes>

        {/* aqui estaran organizadas todas las rutas de FE */}

        {/* // * la mejor forma de ver esto es como un sistema de condicionales */}

        <Route path={"/"} element={ <Home /> }/>
        {/* path es: a donde registro que va el usuario */}
        {/* element es: el componente que le quiero renderizar */}

        <Route path={"/about"} element={ <About /> }/>
        <Route path={"/profile/:username"} element={ <Profile /> }/>

        {/* siempre debe ser la ultima. Error 404 */}
        <Route path={"*"} element={ <NotFound /> }/>

      </Routes>



    </>
  )
}

export default App
