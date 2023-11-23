import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
      
      <h4>Lo siento, pero estas perdido :(</h4>

      <Link to={"/"}>Vuelve a casa</Link>

    </div>
  )
}

export default NotFound