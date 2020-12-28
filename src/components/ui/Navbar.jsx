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
        <NavLink activeClassName="active" className="nav-item nav-link" exact to="/marvel">
          Marvel
        </NavLink>
        <NavLink activeClassName="active" className="nav-item nav-link" exact to="/dc">
          DC
        </NavLink>
        <NavLink activeClassName="active" className="nav-item nav-link" exact to="/search">
          Search
        </NavLink>
        <NavLink activeClassName="active" className="nav-item nav-link" exact to="/login">
          Logout
        </NavLink>
      </ul>
    </div>
  </div>
</nav>
)
}