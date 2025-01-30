// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import './App.css'
// import Home from './pages/Home';
// import Card from './pages/Card';
// import About from './pages/About';
// import ProjectPage from './pages/projectPage';
// import Insights from './pages/Insights';
// import logo from './assets/codeateLogo.png';
// import Testimonial from './pages/Testimonial';
// // eslint-disable-next-line
// function App() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <Router>
//       <div className='all'>
//         {/* Navigation Menu */}

//         <div className='nav-bar'>
//         <div className='logo_here'> {/*This div is for putting the logo of luminere*/}
//           <img src={logo} alt='logo' />
//         </div>
//        <div className=''> {/*This div is for putting the menus of the navigation*/}
//        {/* <nav>
//           <ul class='nav-address'>
//             <li><Link to="#">Build</Link></li>
//             <li><Link to="#">Learn</Link></li>
//             <li><Link to="#">Community</Link></li>
//             <li className='getStarted'>
//               <Link to="#">
//                 <p>Get Started</p>
//               </Link>
//             </li>
//           </ul>
//         </nav> */}

//         <nav className="navbar">
//       <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
//         ☰
//       </div>

//       <ul className={`nav-address ${menuOpen ? "open" : ""}`}>
//         <li><Link to="#">Build</Link></li>
//         <li><Link to="#">Learn</Link></li>
//         <li><Link to="#">Community</Link></li>
//         <li className="getStarted">
//           <Link to="#"><p>Get Started</p></Link>
//         </li>
//       </ul>
//     </nav>
//        </div>    
//         </div>
      

//         {/* Route Configuration */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/card" element={<Card />} />
//           <Route path="/projectPage" element={<ProjectPage />} />
//           <Route path="/insights" element={<Insights />} />
//           <Route path="/testimonial" element={<Testimonial />} />


//           </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;




import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Card from './pages/Card';
import About from './pages/About';
import ProjectPage from './pages/projectPage';
import Insights from './pages/Insights';
import Testimonial from './pages/Testimonial';
import logo from './assets/codeateLogo.png';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div className="all">
        {/* Navigation Bar */}
        <div className="nav-bar">
          <div className="nav-left">
            {/* Logo */}
            <img src={logo} alt="logo" className="logo" />

            {/* Hamburger Button */}
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              ☰
            </div>
          </div>

          {/* Navigation Links */}
          <nav>
            <ul className={`nav-address ${menuOpen ? "open" : ""}`}>
              <li><Link to="#">Build</Link></li>
              <li><Link to="#">Learn</Link></li>
              <li><Link to="#">Community</Link></li>
              <li className="getStarted">
                <Link to="#">
                  <p>Get Started</p>
                </Link>
              </li>
            </ul>
          </nav>
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
