import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]) // Se dispara el efecto si el publisher cambia
  return (
    <div className="card-columns row d-flex justify-content-center animate__animated animate__fadeIn">
      {
        heroes.map(hero => (
          <HeroCard key={hero.id} {...hero}/>
        ))
      }
    </div>
  )
}
