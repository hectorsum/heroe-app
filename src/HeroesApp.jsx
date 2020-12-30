import React from 'react'
import { AppRouter } from './routers/AppRouter'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter } from 'react-router-dom';
export const HeroesApp = () => {
  return (
    <BrowserRouter basename="/heroe-app">
      <AppRouter/>
    </BrowserRouter>
  )
}
