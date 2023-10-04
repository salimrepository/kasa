import React from 'react';
import Navbar from '../components/Navbar/Navbar.jsx';
import Footer from '../components/Footer/Footer.jsx';
import Collapse from '../components/Collapse/Collapse.jsx';
import './About.css';

function About() {
    const newImageSource = "Banner-about.png";
    return (
        <div className="about">
            <Navbar />
            
            <main>
                <div className="banner">
                    <div className="banner__img"><img src="Banner-about.png" alt="" /></div>
                </div>

                <Collapse/>
                <Collapse/>
                <Collapse/>
                <Collapse/>
            </main>

            <Footer />
        </div>
    );
}

export default About;
