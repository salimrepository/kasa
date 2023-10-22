import React, { useState } from "react";
import './Collapse.css';


function Collapse({ description, lorem }) {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {setIsCollapsed(!isCollapsed);};

    const collapseClass = isCollapsed ? "collapse" : "collapse open";
    const textClass = isCollapsed ? "collapse__text" : "collapse__text dropdown";
    const arrowClass = isCollapsed ? "rotate-down" : "rotate-up";

    return (
        <div className="collapse__container">
            <div className={collapseClass}>
                <p className="collapse__title">{description}</p>
            <div>
            <img
                src="../arrow-down.png"
                alt="arrow"
                onClick={toggleCollapse}
                className={arrowClass}/>
            </div>
            </div>
            <div className={textClass}>
                <p >{lorem}</p>
            </div>
        
        
        
    </div>
    );
}

export default Collapse;




