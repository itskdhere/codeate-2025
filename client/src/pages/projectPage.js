import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./projectPage.css";
import P1 from "../assets/p1.png";
import P2 from "../assets/p2.png";
import P3 from "../assets/p3.png";

function ProjectPage() {
  const settings = {
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    focusOnSelect: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, // For tablets and smaller screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="project-page">
      <h1 className="project-header">Our Flagship Projects</h1>
      <p className="project-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="project-gallery">
        <Slider {...settings}>
          <div className="slider-item">
            <img src={P1} alt="Project 1" />
          </div>
          <div className="slider-item">
            <img src={P2} alt="Project 2" />
          </div>
          <div className="slider-item">
            <img src={P3} alt="Project 3" />
          </div>
          <div className="slider-item">
            <img src={P1} alt="Project 1" />
          </div>
          <div className="slider-item">
            <img src={P2} alt="Project 2" />
          </div>
          <div className="slider-item">
            <img src={P3} alt="Project 3" />
          </div>
         
        </Slider>
      </div>
    </div>
  );
}

export default ProjectPage;
