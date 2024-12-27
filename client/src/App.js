import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Card from './pages/Card';
import About from './pages/About';
import ProjectPage from './pages/projectPage';
import Insights from './pages/Insights';
import logo from './assets/codeateLogo.png';
import Testimonial from './pages/Testimonial';
// eslint-disable-next-line
function App() {
  return (
    <Router>
      <div className='all'>
        {/* Navigation Menu */}

        <div className='nav-bar'>
        <div className='logo_here'> {/*This div is for putting the logo of luminere*/}
          <img src={logo} alt='logo' />
        </div>
       <div className=''> {/*This div is for putting the menus of the navigation*/}
       <nav>
          <ul class='nav-address'>
            <li style={{color:'white'}}><Link to="/">Home</Link></li>
            <li><Link to="/testimonial">Build</Link></li>
            <li><Link to="/learn">Learn</Link></li>
            <li><Link to="/community">Community</Link></li>
            <li><Link to="/consultancy">Consultancy</Link></li>
            <li className='getStarted'>
              <Link to="#">
                <p>Get Started</p>
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
          <Route path="/about" element={<About />} />
          <Route path="/card" element={<Card />} />
          <Route path="/projectPage" element={<ProjectPage />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/testimonial" element={<Testimonial />} />


          </Routes>
      </div>
    </Router>
  );
}

export default App;