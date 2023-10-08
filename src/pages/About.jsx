import React from 'react';
import Navbar from '../components/Navbar/Navbar.jsx';
import Footer from '../components/Footer/Footer.jsx';
import Collapse from '../components/Collapse/Collapse.jsx';
import Banner from '../components/Banner/Banner.jsx';
import './About.css';

function About() {
    const newImageSource = "Banner-about.png";
    return (
        <div className="about">
            <Navbar />
            <Banner img={newImageSource} title={false}/>
            <main>
                <Collapse description="Fiabilité" lorem="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."/>
                <Collapse description="Respect"lorem="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
                <Collapse description= "Service" lorem="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
                <Collapse description= "Securité" lorem="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
            </main>
            <Footer />
        </div>
    );
}

export default About;
