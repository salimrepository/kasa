import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Carousel from "../components/Carousel/Carousel";
import Footer from "../components/Footer/Footer";
import "./Accommodations.css";


function Accommodations() {
    return (
        <div className="accommodations">
            <Navbar />
            <main>
                <Carousel />
            </main>
            <Footer />
        </div>
    );
}
export default Accommodations;