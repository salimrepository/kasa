import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <header>
            <nav className="navbar">
            <img className="navbar__logo" src="../Logo.png" alt="" />
        
            <ul className='navbar__menu'>
                <li>
                <Link to={'/'}> Accueil</Link>
                </li>
                <li>
                    <Link to={'/About'}> A propos</Link>
                </li>
            </ul>
        </nav>
        </header>
        
    )
}
export default Navbar;