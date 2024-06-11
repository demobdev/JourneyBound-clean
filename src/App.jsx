import React, { useLayoutEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './assets/css/global-style.css';
import './assets/css/fonts.css';
import './assets/css/style.css';
import Header from './components/Navbar.jsx';
import Footer from './components/footer.jsx';
import Home from './pages/Home';
import Ecosystem from './pages/Ecosystem.jsx';
import GuidedServices from './pages/GuidedServices.jsx';
import Legal from './components/Legal.jsx';

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ecosystem' element={<Ecosystem />} />
          <Route path='/guided-services' element={<GuidedServices />} />
          <Route path='/legal' element={<Legal/>} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
