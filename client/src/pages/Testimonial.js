import React from 'react';
import "./Testimonial.css";
import testi1 from '../assets/testi1.png';
import quote from '../assets/Quote.png';

function Testimonial() {
    return(
        <div className='testimonial'>
            <div className='upper-section'>
            <div className='upper-section-left'>
                <h2>Number That Tell Our Story</h2>
                <p>At Codeate, our numbers reflect the tangible impact we're making. From groundbreaking projects to a thriving community of learners and professionals, every stat tells the story of our success.</p>
            </div>
            <div className='upper-section-right'>
                <div className='upper-section-right-elems'>
                    <h3>150+</h3>
                    <p>Colleges</p>
                </div>
                <div className='upper-section-right-elems'>
                    <h3>5000+</h3>
                    <p>Community Members</p>
                </div>
                <div className='upper-section-right-elems'>
                    <h3>125+</h3>
                    <p>Projects</p>
                </div>
                <div className='upper-section-right-elems'>
                    <h3>25+</h3>
                    <p>Partners</p>
                </div>
                <div className='upper-section-right-elems'>
                    <h3>1000+</h3>
                    <p>Opportunities</p>
                </div>
            </div>
            </div>
            <div className='middle-section'>
                <div className='middle-section-p1'>
                    <h3 className="project-header"><span className='highlight'>Our </span>Testimonials</h3>
                    <p>About our success stories.</p>
                </div>
                <div className='middle-section-p2'>
                    <div>
                        <img src={testi1} alt='testi 1 img'/>
                    </div>
                    <div className='middle-section-alpha'>
                        <img src={quote} alt='Quote'/>
                        <p>Amazing experience with Codeate! The instructors are skilled and supportive, and the learning process is seamless. Highly recommend it to anyone passionate about growing their talents!</p>
                        <h3> - Christy Santonia</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;
