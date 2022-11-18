import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
/* import CartWidget from "../CartWidget/CartWidget"; */

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/"><i className="bi bi-puzzle" /> Mundo Puzzle</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarColor03">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink className="nav-link active" to="/category/Infantiles">Infantiles</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/category/Intermedios">Intermedios</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/category/Expertos">Expertos</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/category/Accesorios">Accesorios</NavLink>
              </li>
            </ul>
            <CartWidget/>
            <form className="d-flex">
              <input className="form-control me-sm-2" type="text" placeholder="¿Qué necesitas?" />
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">Buscar</button>
            </form>
          </div>
        </div>
      </nav>

    </>
  );
};

export default Navbar;
