import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Carousel from "../components/Carousel/Carousel";
import Footer from "../components/Footer/Footer";
import "./Accommodations.css";
import Collapse from "../components/Collapse/Collapse";



function Accommodations() {
    const [logements, setLogements] = useState([]);

    useEffect(() => {
      fetch('./logements.json')
        .then(response => response.json())
        .then(data => {
          // Mettez à jour l'état avec les données du fichier logements.json
          setLogements(data);
        })
        .catch(error => {
          // Gérez les erreurs ici
          console.error(error);
        });
    }, []);
    return (
        <div className="accommodations">
            <Navbar />
            
            {logements.length > 0 && (
        <Carousel images={logements.map(logement => logement.cover)} />
      )}
                <div className="appartment__title">
                <h1>Chez vous, partout et ailleurs</h1>
                <h2>Lorem ipsum dolor sit amet.</h2>
            </div>
            <div className="tag">
                <p>Cozy</p>
                <p>Canal</p>
                <p>Paris 10</p>
            </div>

            <div className="carousel__collapse">
                <Collapse description="Description"/>
                <Collapse description="Description"/>
            </div>
            
            <Footer />
        </div>
    );
}
export default Accommodations;