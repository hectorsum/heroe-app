import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { Navbar } from '../components/ui/Navbar'
import { DcScreen } from '../components/dc/DcScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import NotFound from '../components/not-found/Not-Found'
export const DashboardRoutes = () => {
  return (
    <>
      <Navbar/>
      <div className="container mt-2">
        <Switch>
          <Route exact path="/heroe-app/marvel" component={MarvelScreen} />
          <Route exact path="/heroe-app/hero/:heroeId" component={HeroScreen} />
          <Route exact path="/heroe-app/dc" component={DcScreen} />
          <Route exact path="/heroe-app/search" component={SearchScreen} />
          <Redirect to="/heroe-app/marvel" />
          <Route component={NotFound} />
        </Switch>
      </div>
    </>
  )
}
