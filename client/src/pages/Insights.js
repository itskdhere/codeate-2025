import React from "react";
import "./Insights.css";

function Insights(){
    return(
        <div className="insightSection">
            <div className="upperSection">
                <div className="upperSection-s1">
                <div className="card">
                <h2>About us</h2>
                <p>At Codeate, we leverage AI-driven experiential learning to provide <br/>personalized, hands-on opportunities for skill development.<br/> Our platform intelligently adapts to your learning pace, guiding you <br/>through real-world projects and connecting you with industry professionals.<br/> Get ready to gain the practical expertise and insights needed to<br/> thrive in today’s fast-evolving tech landscape.</p>
                </div>
                </div>

                <div className="upperSection-s2">
                <div className="card">
                <h2>Vision</h2>
                <p>
                At Codeate, we integrate AI-powered tools to create a tailored <br/>learning experience. Our platform personalizes your path, <br/>ensuring you receive the right resources, projects, and mentorship <br/>at every step of your journey. With AI, we make experiential learning <br/>more effective, intuitive, and aligned with industry demands.
                </p>

                </div>
                <div className="card">
                <h2>Mission</h2>
                <p>
                Our platform connects you with real-world projects across various <br/>tech domains, developed by peers and guided by industry professionals. <br/>Through hands-on, collaborative work, you'll hone your skills, gain <br/>valuable exposure, and build a portfolio that sets you apart in the job market.
                </p>
                </div>

                </div>
            </div>

            <div className="lowerSection">

            </div>
        </div>
    );
}

export default Insights;