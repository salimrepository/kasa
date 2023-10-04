import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import './App.css';
import Banner from './components/Banner/Banner.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner/>
      <Gallery/>
      <Footer/>
    </div>
  );
}

export default App;