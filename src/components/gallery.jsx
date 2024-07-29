import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import sprite from "../sprite.svg";
import '../Carousel.css'; 

const images = [
  "img/portfolio/img1.jpg",
  "img/portfolio/img2.jpg",
  "img/portfolio/img3.jpg",
  "img/portfolio/img4.jpg",
  "img/portfolio/img5.jpg"
];

function funx(data) {
  return (
    <div className="box" >
      <Carousel pauseOnHover
      useKeyboardArrows={true} 
      autoPlay={true} 
      interval={4000} 
      stopOnHover={true} 
      infiniteLoop={true}>
        {images.map((URL, index) => (
          <div key={index} className="slide">
          <img alt="sample_file" src={URL} className="carousel-image" />
        </div>
        ))}
      </Carousel>
    </div>
  );
}
export default funx;

export const Gallery = (props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  return (
    <div id="gallery" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>
          Unten sehen Sie einige unserer jüngsten Arbeiten für verschiedene Kunden:
          </p>
        </div>            
        <div className="row" >
          <div className="portfolio-items">
            {funx(props.data)}
          </div>
        </div>
      </div>
    </div>
  );
};
