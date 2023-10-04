import React from "react";
import "./Thumb.css";


function Thumb({data}) {
    

    return (
        <figure className="thumb">
            <img src={data.cover} alt={data.description} />
            <figcaption className="thumb__title">
                {data.title} 
            </figcaption>
        </figure>
    )
}

export default Thumb;