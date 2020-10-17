import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import "./nav.css";
import illustration1 from "./images/illustration1.png";
import illustration2 from "./images/illustration2.png"
import illustration3 from "./images/illustration3.png"
import illustration4 from "./images/illustration4.jpg"

class ReactSlickDemo extends React.Component {
  render() {
    var settings = {
      dots: true
    };
    return (
      <div className="container">
        <Slider {...settings}>
          <div>
            <img src={illustration1} />
          </div>
          <div>
            <img src={illustration2} />
          </div>
          <div>
            <img src={illustration3} />
          </div>
          <div>
            <img src={illustration4} />
          </div>
        </Slider>
      </div>
    );
  }
}

export default ReactSlickDemo
