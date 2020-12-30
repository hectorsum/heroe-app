import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
    <h3 style={{fontFamily:'Lobster'}}>Heroe App</h3>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <NavLink exact to={"/heroe-app/marvel"} activeClassName="active" className="nav-item nav-link">
          Marvel
        </NavLink>
        <NavLink exact to={"/heroe-app/dc"} activeClassName="active" className="nav-item nav-link">
          DC
        </NavLink>
        <NavLink exact to={"/heroe-app/search"} activeClassName="active" className="nav-item nav-link">
          Search
        </NavLink>
        <NavLink exact to={"/heroe-app/login"} activeClassName="active" className="nav-item nav-link">
          Logout
        </NavLink>
      </ul>
    </div>
  </div>
</nav>
)
}