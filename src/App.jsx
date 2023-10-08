import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import './App.css';
import Banner from './components/Banner/Banner.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
    const ImageSource = "IMG-banner.png";
  return (
    <div className="App">
      <Navbar />
      <Banner img={ImageSource} title={true}/>
      <Gallery/>
      <Footer/>
    </div>
  );
}

export default App;