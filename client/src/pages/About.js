import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './About.css';
import v1 from '../assets/amazonV.png';
import v2 from '../assets/ciscoV.png';
import v3 from '../assets/deloitteV.png';
import v4 from '../assets/tcsV.png';
function About() {
    return(
        <div className="section">
            <div className='textSection'>
            <p>Learn from expert mentors with experience at top global companies.</p>
            </div>

            <div className="mentorComp">
            <img src={v1} alt='Amazon '/>
            <img src={v2} alt='Cisco'/>
            <img src={v3} alt='Deloitte'/>
            <img src={v4} alt='Tsc'/>
            </div>
        </div>
    );
}

export default About;