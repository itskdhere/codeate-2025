import React from 'react';
import "./Card.css";
import learnCard from "../assets/learnRef.png";
import buildCard from "../assets/buildRef.png"
import comCard from "../assets/communityRef.png";

function Card() {
    return(
        <div className='fullCard'>
            <div className='learn'>
            <div className='left'>
                <img src={learnCard} alt='Card'/>
            </div>
            <div className='right'>
                <h2 >Learn</h2>
                <p></p>
                <h3>Elevate Your Skills with Experiential Learning.</h3>
                <p><br/>Discover the power of cohort-based courses designed to take your <br/>learning to the next level. At Codeate, we combine cutting-edge content <br/>with project-based experiential learning, giving you the competitive <br/>edge to excel in the tech world. Learn alongside a thriving <br/>community and turn knowledge into real-world expertise.</p>
                <h3><br/>Learn More</h3>
            </div>
            </div>

            <div className='learn'>
                <div className='left'>
                <h2>Build</h2>
                <p></p>
                <h3>AI-Powered Projects. Real-World Skills. Certified Success.
</h3>
                <p><br/>Unleash your potential with our AI-powered Build program,<br/> designed to offer personalized, project-based learning in <br/>the most industry-relevant tech stacks. Gain hands-on experience, <br/>validate your expertise with impactful certifications, and elevate <br/>your career with the future of learning—powered by AI.</p>
                <h3><br/>Learn More</h3>
                </div>
                <div className='right'>
                    <img src={buildCard} alt='card'/>
                </div>
            </div>

            <div className='learn'>
            <div className='left'>
                <img src={comCard} alt='Card'/>
            </div>
            <div className='right'>
                <h2>Community</h2>
                <p></p>
                <h3>Your Gateway to an AI-Powered Career.
</h3>
                <p><br/>
                Join a professional community that bridges the gap between learning<br/> and industry. Collaborate with peers, gain direct exposure to real-world<br/> projects, and stay ahead with AI-driven insights and workshops.<br/> Build your network, sharpen your skills.<br/> And get ready for the career of tomorrow, today.</p>
                <h3><br/>Learn More</h3>
            </div>
            </div>
        </div>
    );
}

export default Card;