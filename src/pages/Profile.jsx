import { Navigate, useParams } from "react-router-dom"
// los hooks SIEMPRE serán funciones
// Siempre debemos invocarlas dentro del componente en la base

function Profile() {

  const params = useParams()
  console.log(params) // es igual que req.params

  return (
    <div>
      
      <h4>Estas viendo el perfil de <span>{params.username}</span></h4>

    </div>
  )
}

export default Profile