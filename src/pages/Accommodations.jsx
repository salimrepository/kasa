import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Carousel from "../components/Carousel/Carousel";
import Footer from "../components/Footer/Footer";
import "./Accommodations.css";
import Collapse from "../components/Collapse/Collapse";


function Accommodations() {
    return (
        <div className="accommodations">
            <Navbar />
            <main>
                <Carousel />
                <div className="collapse__containerd">
                
                </div>
                
            </main>
            <Footer />
        </div>
    );
}
export default Accommodations;