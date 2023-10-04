import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            <img className="navbar__logo" src="Logo.png" alt="" />
        
            <ul className='navbar__menu'>
                <li>
                    <a href="#">Accueil</a>
                </li>
                <li>
                    <a href="#">A Propos</a>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;