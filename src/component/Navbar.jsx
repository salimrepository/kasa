import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <img src="Logo.png" alt="" />
            </div>
            <div>
                <ul className='navbar__menu'>
                    <li><a href="#">Accueil</a></li>
                    <li><a href="#">A Propos</a></li>
                </ul>
            </div>
            
        </nav>
    )
}
export default Navbar;