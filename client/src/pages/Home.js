import React, { useState, useEffect } from "react";
import "./Home.css";
import PeoplesGrp from '../assets/PeoplesGroup.png';
import Live_Label from '../assets/Live_Label.png'
import About from "../pages/About";
import Card from "./Card";
import ProjectPage from "./projectPage";
import Insights from "./Insights";

function Home() {
    const lines = [
       
        "Professionally",
        "Beyond hello world",
        "For your career",
    ];
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % lines.length);
        }, 1500);
        return () => clearInterval(interval);
    }, [lines.length]);

    return (
        <div className="Main-container">
            <div className="Home-s1">
            <h1>Doing Projects made easy</h1>
            <div className="Home-s1-p1">
            {lines.map((line, index) => (
                    <h1
                        key={index}
                        className={`line ${
                            index === activeIndex ? "visible" : "hidden"
                        }`}
                    >
                        {line}
                    </h1>
                    
                ))}
               
            </div>
            <div className="Home-s1-p2"> <p>Discover the path to success with us! Learn new skills, build <br/> remarkable projects, and conquer challenges alongside a vibrant <br/> community of thousands of like-minded professionals.<br/>  Join now for free and start your journey to greatness!</p></div>
            <div className="Home-s1-p3">
            <img src={PeoplesGrp} alt="PeoplesGrp"/>
            <p>+ 11.1k</p>
            <div className="Home-s1-p3-section">
                <img src={Live_Label} alt="Live_Label"/>
                <p>Join Codeate Community of over 10k+ peoples ></p>
            </div>
            </div>
            </div>
            <About/>
            <Card/>
            <ProjectPage/>
            <Insights/>

        </div>
        
    );
}

export default Home;
