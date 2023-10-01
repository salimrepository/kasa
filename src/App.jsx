import React from 'react';
import Navbar from './component/Navbar.jsx';
import './App.css';
import Banner from './component/Banner.jsx';
import Gallery from './component/Gallery.jsx';
import Footer from './component/Footer.jsx';

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