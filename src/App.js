import React from 'react';
import {Route,Routes} from 'react-router-dom';
import  ColorModeSwitcher  from './ColorModeSwitcher';
import Header from './Component/Header';
import Home from './Component/Home';
import About from './Component/About';
import UploadVideo from './Component/Video';

function App() {
  return (
    <div>
      <Header/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/upload" element={<UploadVideo />} />
        </Routes>
      <ColorModeSwitcher/>
    </div>
      );
}

export default App;
