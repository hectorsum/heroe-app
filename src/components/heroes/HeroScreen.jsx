import React, { useMemo } from 'react'
import { Redirect, useHistory, useParams } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroesById';


export const HeroScreen = () => {
  //Extrae los parametros que tenga el url
  const history = useHistory();
  const {heroeId} = useParams();
  const hero = useMemo(() => getHeroesById(heroeId), [heroeId]) // Se dispara el efecto si el heroeId cambia
  if (!hero){
    return <Redirect to="/"/>
  }
  const handleReturn = () =>{
    
    if (history.length<=2){ //history.length: monitoreo de redirecciones del cliente, si es 2, es para validar que cuando seleccione Return, le mande a la raiz
      history.push('/')
    }else{
      history.goBack()
    }
  }
  const { superhero,
          publisher,
          alter_ego,
          first_appearance,
          characters } = hero;
  return (
    <div className="row">
      <div className="col-md-4">
        <img src={`../assets/heroes/${heroeId}.jpg`} alt={superhero} className="img-thumbnail animate__animated animate__fadeInLeft" style={{height:"auto"}}/>
      </div>
      <div className="col-md-8">
        <h3 className="display-5 text-center fw-bold">{superhero}</h3>
        <hr/>
        <ul className="list-group">
          <li className="list-group-item p-1"> <b>Alter ego: </b>{alter_ego}</li>
          <li className="list-group-item p-1"> <b>Publisher: </b>{publisher}</li>
          <li className="list-group-item p-1"> <b>First Appeareance: </b>{first_appearance}</li>
          <li className="list-group-item p-1"> <b>Characters: </b>{characters}</li>
        </ul>
        <button className="btn btn-outline-info mt-2 w-100"
                onClick={handleReturn}>Return</button>
      </div>
    </div>
  )
}
