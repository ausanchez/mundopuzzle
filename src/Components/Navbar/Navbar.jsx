import React from 'react';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{<i className="bi bi-puzzle-fill" />} Mundo Puzzle</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home
                                    <span className="visually-hidden">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Nosotros</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Categorias</a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Infantiles</a>
                                    <a className="dropdown-item" href="#">Hasta 3000pz</a>
                                    <a className="dropdown-item" href="#">Hasta 5000pz</a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#">Pegamentos y Porta Puzzles</a>
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
