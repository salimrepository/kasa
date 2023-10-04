import React from "react";
import './Banner.css';

function Banner() {
    return (
        <div className="banner">
            <div className="banner__img"><img src="./IMG-banner.png" alt="" /></div>
            <div className="banner__title"><h1>Chez vous, partout et ailleurs</h1></div>
        </div>
        
    )
}

export default Banner;