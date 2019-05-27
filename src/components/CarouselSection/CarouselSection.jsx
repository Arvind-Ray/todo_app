
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default class CarouselSection extends Component {
  render() {
    let carousel_data = this.props.stateData;
    let choices = this.props.StaticData;
    console.log(choices[carousel_data])
    for(let i=choices[carousel_data]; i>=0; i--) {

      console.log(choices[i])
    }
    const {value, label} = carousel_data || {};
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: value,
      slidesToScroll: value,
      autoplay: true
    };
    return (
      <div style={{backgroundColor: "gray"}}>
        <h2>Shaadi Carousel</h2>
        <Slider {...settings}>
          {this.props.StaticData.map(function(slide_array, slide) {
            
            
          
            return (
              <div key={slide_array}>
                <h3>{slide_array}</h3>
              </div>
             );
          })} 
        </Slider>
      </div>
    );
  }
}
