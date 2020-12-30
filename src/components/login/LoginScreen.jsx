import React from 'react'
//history props viene por defecto gracias al react-router-dom, lo llamamos mediante un hook
import { useHistory } from 'react-router-dom';

export const LoginScreen = () => {
  let history = useHistory();
  const handleLogin = ()=>{
    history.replace('/heroe-app') //Reemplazar en el history la ruta, y cuando quiera salir, ya no va leer el login
  }
  return (
    <div className="container mt-5">
      <h1>Login Screen</h1>
      <hr/>
      <button className="btn btn-success" onClick={handleLogin}>
        Log in
      </button>
    </div>
  )
}
