import React from "react";
import "./Insights.css";
import bg from '../assets/backDaim.png';
import editLogo from '../assets/editLogo.png';
import bg2 from '../assets/sectionBg.png';
import inRect from "../assets/inRect.png";


function Insights(){
    return(
        <div className="insightSection">
            <div className="upperSection">
                <div className="upperSection-s1">
                
                <div className="card">
              
                

                {/* <img className="bgImage" src={bg} alt="Background" /> */}
                <div className="about-us-content">
                <div className="content-row">
                <img src={inRect} alt="Rect"/>
                <h2>About us</h2>
                </div>
                <p>At Codeate, we leverage AI-driven experiential learning to provide personalized, hands-on opportunities for skill development. Our platform intelligently adapts to your learning pace, guiding you through real-world projects and connecting you with industry professionals. Get ready to gain the practical expertise and insights needed to thrive in today’s fast-evolving tech landscape.</p>
                </div>
                
                </div>
                </div>

                <div className="upperSection-s2">
                <div className="card">
                {/* <img className="bgImage" src={bg} alt="Background" /> */}
                <div className="vision-content">
                <div className="content-row">
                <img src={inRect} alt="Rect"/>
                <h2>Vision</h2>
                </div>
                <p>
                At Codeate, we integrate AI-powered tools to create a tailored learning experience. Our platform personalizes your path, ensuring you receive the right resources, projects, and mentorship at every step of your journey. With AI, we make experiential learning more effective, intuitive, and aligned with industry demands.
                </p>
                </div>
                

                </div>
                <div className="card">
                {/* <img className="bgImage" src={bg} alt="Background" /> */}
                <div className="mission-content">
                
                <div className="content-row">
                <img src={inRect} alt="Rect"/>
                <h2>Mission</h2>
                </div>
                <p>
                Our platform connects you with real-world projects across various tech domains, developed by peers and guided by industry professionals. Through hands-on, collaborative work, you'll hone your skills, gain valuable exposure, and build a portfolio that sets you apart in the job market.
                </p>
                </div>
                
                </div>

                </div>
            </div>

            <div className="lowerSection">
            <img className="bg2Image" src={bg2} alt="background"/>
  <h2 className="lowerSection-title">Why choose us</h2>
  <div className="lowerSection-grid">
  <div className="lowerSection-item">
  <div className="lowerSection-content">
    <img src={editLogo} alt="edit logo" />
    <p>Project Building Opportunities</p>
  </div>
</div>

    <div className="lowerSection-item">
    <div className="lowerSection-content">
    <img src={editLogo} alt="edit logo"/>
    <p>Hands-on Learning</p>
    </div>
    </div>

    <div className="lowerSection-item">
    <div className="lowerSection-content">
    <img src={editLogo} alt="edit logo"/>
    <p>Direct Industry Connect</p>
    </div>
    </div>

    <div className="lowerSection-item">
    <div className="lowerSection-content">
    <img src={editLogo} alt="edit logo"/>
    <p>Internships</p>
    </div>
    </div>

    <div className="lowerSection-item">
    <div className="lowerSection-content">
    <img src={editLogo} alt="edit logo"/>
    <p>Certifications</p>
    </div>
    </div>

    <div className="lowerSection-item">
    <div className="lowerSection-content">
    <img src={editLogo} alt="edit logo"/>
    <p>24×7 Community Support</p>
    </div>
      
    </div>
  </div>
</div>

            
        </div>
    );
}

export default Insights;