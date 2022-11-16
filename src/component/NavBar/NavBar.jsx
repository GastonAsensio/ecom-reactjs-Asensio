import React from 'react'
import CartWidget from '../CarWidget/CartWidget'
import  huella  from '../../media/huella.png'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
        <img src={huella} alt='huella' />
        <div class="container-fluid">
            <NavLink className="navbar-brand" to="/">Tienda Morea</NavLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/categoria/golosinas">golosinas</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/categoria/accesorios">Accesorios</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="cart"><CartWidget /></NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}

export default NavBar
