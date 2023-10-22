import React from "react";
import "./Carousel.css";


function Carousel({ logements }) {
    const cover = logements.length > 0 ? logements[0].cover : "";
    return (
        <div className="carousel">
            <div className="carousel__img">
                <img src={cover} alt="" />
            </div>
            <div className="carousel__arrows">
                <img src="../arrow_back.png" alt="hjhj" />
                <img src="../arrow_forward.png" alt="" />
            </div>
            
            
        </div>
    );
}

export default Carousel;