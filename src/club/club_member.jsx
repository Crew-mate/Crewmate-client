import Slider from "react-slick";
import { useState } from "react";
import './club_member.css'

export default function Club_member_slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    dots: true,
    centerMode: true,
    beforeChange: (current, next) => setCurrentSlide(next),
  };


  return (
      <div className="club-slider-container">
        <span>HISTORY</span>
        <Slider {...settings}>
          
          <div className="slide1">
            <h3>1</h3>
          </div>
          <div className="slide1">
            <h3>2</h3>
          </div>
          <div className="slide1">
            <h3>3</h3>
          </div>
          <div className="slide1">
            <h3>4</h3>
          </div>
          <div className="slide1">
            <h3>5</h3>
          </div>
          <div className="slide1">
            <h3>6</h3>
          </div>
          <div className="slide1">
            <h3>7</h3>
          </div>
          <div className="slide1">
            <h3>8</h3>
          </div>
          <div className="slide1">
            <h3>9</h3>
          </div>
        </Slider>
      </div>
  )
}