import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Card from './pages/Card';
import About from './pages/About';
import ProjectPage from './pages/projectPage';
import Insights from './pages/Insights';
import Testimonial from './pages/Testimonial';
import Upcoming from './pages/Upcoming';
import logo from './assets/codeateLogo.png';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div className="all">
        <div className="nav-bar">
          <div className="nav-left">
            <img src={logo} alt="logo" className="logo" />
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              ☰
            </div>
          </div>

          <nav>
            <ul className={`nav-address ${menuOpen ? "open" : ""}`}>
              <li><Link to="/upcoming"><p>Build</p></Link></li>
              <li><Link to="/upcoming"><p>Learn</p></Link></li>
              <li><Link to="/upcoming"><p>Community</p></Link></li>
              <li className="getStarted">
                <Link to="/upcoming">
                  <p>Get Started</p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/card" element={<Card />} />
          <Route path="/projectPage" element={<ProjectPage />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/upcoming" element={<Upcoming />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
