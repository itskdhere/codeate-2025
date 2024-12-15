import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
// import Contact from './pages/Contact';
// import About from './pages/About';
// import Testimonials from './pages/Testimonials';
import logo from './assets/codeateLogo.png'
// eslint-disable-next-line
function App() {
  return (
    <Router>
      <div >
        {/* Navigation Menu */}

        <div className='nav-bar'>
        <div className='logo_here'> {/*This div is for putting the logo of luminere*/}
          <img src={logo} alt='logo' />
        </div>
       <div> {/*This div is for putting the menus of the navigation*/}
       <nav>
          <ul class='nav-address'>
            <li style={{color:'white'}}><Link to="/">Home</Link></li>
            <li><Link to="/build">Build</Link></li>
            <li><Link to="/learn">Learn</Link></li>
            <li><Link to="/community">Community</Link></li>
            <li><Link to="/consultancy">Consultancy</Link></li>
            <li>
              <Link to="#">
                Get Started
              </Link>
            </li>
            
            
            {/* <li><Link to="/contact">Contact</Link></li> */}
            {/* <li><Link to="/testimonials">Testimonials</Link></li> */}
          </ul>
        </nav>
       </div>    
        </div>
      

        {/* Route Configuration */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;