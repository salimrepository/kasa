import React from "react";
import "./Gallery.css";
import Apartment from "./Apartment";

function Gallery() {
    return (
        <div className="gallery">
            <Apartment/>
            <Apartment/>
            <Apartment/>
            <Apartment/>
            <Apartment/>
            <Apartment/>
        </div>
    );
}

export default Gallery;