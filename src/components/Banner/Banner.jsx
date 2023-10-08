import React from "react";
import './Banner.css';

function Banner({img, title}) {
    return (
        <div className="banner">
            <div className="banner__img"><img src={img} alt="" /></div>
            {title && <div className="banner__title"><h1>Chez vous, partout et ailleurs</h1></div>}
        </div>
    )
}

export default Banner;