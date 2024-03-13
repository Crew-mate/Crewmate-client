import Slider from "react-slick";
import { useState } from "react";
import './club_history.css'

export default function Club_his_slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
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
      <div className="his-slider-container">
        <Slider {...settings}>
          <div className="s1">
            <h3>1</h3>
          </div>
          <div className="s1">
            <h3>2</h3>
          </div>
          <div className="s1">
            <h3>3</h3>
          </div>
          <div className="s1">
            <h3>4</h3>
          </div>
          <div className="s1">
            <h3>5</h3>
          </div>
          <div className="slide1">
            <h3>6</h3>
          </div>
          <div className="s1">
            <h3>7</h3>
          </div>
          <div className="s1">
            <h3>8</h3>
          </div>
          <div className="s1">
            <h3>9</h3>
          </div>
        </Slider>
      </div>
  )
}