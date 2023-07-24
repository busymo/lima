import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import sprite from "../sprite.svg";

const images = [
  "img/portfolio/01-large.jpg",
  "img/portfolio/02-large.jpg",
  "img/portfolio/03-large.jpg",
  "img/portfolio/04-large.jpg",
  "img/portfolio/05-large.jpg",
  "img/portfolio/06-large.jpg",
];

function funx(data) {
  return (
    <div className="box">
      <Carousel 
      useKeyboardArrows={true} 
      autoPlay={true} 
      interval={2000} 
      stopOnHover={true} 
      style={{
        textAlign: "center",
        maxWidth: "850px",
        maxHeight: "500px",
        margin: "40px auto"
      }}
      infiniteLoop={true}>
        {images.map((URL, index) => (
          <div className="slide">
            <img alt="sample_file" src={URL} key={index} />
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
        <div className="row">
          <div className="portfolio-items">
            {funx(props.data)}
          </div>
        </div>
      </div>
    </div>
  );
};
