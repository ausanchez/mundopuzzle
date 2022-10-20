import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link to ='/' className="navbar-brand">{<i className="bi bi-puzzle-fill" />} Mundo Puzzle</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Categorias</a>
                                <div className="dropdown-menu">
                                    <Link to = {'/category/Infantiles'} className="dropdown-item">Infantiles</Link>
                                    <Link to = {'category/Medium'} className="dropdown-item">Hasta 3000pz</Link>
                                    <Link to = {'category/Hard'} className="dropdown-item">Hasta 5000pz</Link>
                                    <div className="dropdown-divider" />
                                    <Link to = {'category/Accesorios'} className="dropdown-item">Pegamentos y Porta Puzzles</Link>
                                </div>
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
}

export default Navbar;
