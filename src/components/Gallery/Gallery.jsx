import React, { useEffect, useState } from "react";
import "./Gallery.css";
import Thumb from "../Thumb/Thumb";
import { Link } from 'react-router-dom';
import Carousel from "../Carousel/Carousel";

function Gallery() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    // Effectuer la requête pour charger les données depuis logements.json
    fetch("logements.json")
      .then((res) => res.json())
      .then((data) => setLogements(data))
      .catch(console.error);
  }, []);

  return (
    <ul className="gallery">
      {logements.map((logement, index) => (
        <li key={index}>
          <Link to={`/Accommodations/${logement.id}`}>
            <Thumb data={logement} />
          </Link>
          
        </li>
      ))}
    </ul>
  );
}

export default Gallery;
