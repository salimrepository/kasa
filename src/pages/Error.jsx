import React from 'react';
import Navbar from '../components/Navbar/Navbar.jsx';
import Footer from '../components/Footer/Footer.jsx';
import './Error.css';


function Error() {
    return (
        <div className="error">
            <Navbar />
            <main>
                <div className='error__title'>
                    <h1>404</h1>
                    <p>Oups! La page que <span>vous demandez n'existe pas</span> </p>
                </div>

                <div className='error__link'>
                    <a href="#">Retourner sur la page d'accueil</a>
                </div>
                
            </main>
            <Footer />
        </div>
    );
}

export default Error;