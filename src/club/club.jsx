import React from "react";
import Layout from "../Layout";
import Slider from "react-slick";
import "../club/slick.css";
import "../club/slick-theme.css";
import "./club.css"; 
import cpu_logo from "../assets/cpu_logo.svg"
import { Link } from "react-router-dom";

export default function Club() {
  // 사용자 정의 이전 화살표 컴포넌트
  const CustomPrevArrow = (props) => (
    <button {...props} className="slick-prev"></button>
  );

  // 사용자 정의 다음 화살표 컴포넌트
  const CustomNextArrow = (props) => (
    <button {...props} className="slick-next"></button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
  };

  return (
    <Layout>
      <div className="slider-container">
        <Slider {...settings}>
          <div className="cpu">
          <img src={cpu_logo} />
          <button className="signup_cpu"><Link to="/join_cpu">신청하기</Link></button>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </Layout>
  );
}
