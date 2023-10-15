import React from "react";
import "./Carousel.css";
import Collapse from "../Collapse/Collapse";

function Carousel() {
    return (
        <div className="carousel">
            <div className="carousel__img">
                <img src="IMG-banner.png" alt="" />
            </div>
            <div className="appartment__title">
                <h1>Chez vous, partout et ailleurs</h1>
                <h2>Lorem ipsum dolor sit amet.</h2>
            </div>
            <div className="tag">
                <p>number1</p>
                <p>number2</p>
                <p>number3</p>
            </div>

            <div className="carousel__collapse">
            <Collapse />
                <Collapse/>
            </div>
            
            
        </div>
    );
}

export default Carousel;