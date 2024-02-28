import React from "react";
import Layout from "../Layout";
import Slider from "react-slick";
import "../club/slick.css";
import "../club/slick-theme.css";
import "./club.css";
import cpu_logo from "../assets/cpu_logo.svg";
import { Link } from "react-router-dom";

export default function Club() {
  const CustomPrevArrow = (props) => (
    <button {...props} className="slick-prev1"></button>
  );

  const CustomNextArrow = (props) => (
    <button {...props} className="slick-next1"></button>
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
      <div className="slider-s">
        <div className="slider-container">
          <Slider {...settings}>
            <div className="club-slide">
              <div className="club">

                <div className="club_content">
                  <h2>CPU</h2>
                  <p>선배들과 함께하는 c언어 코딩테스트</p>
                  <h4>C Project with U!</h4>
                  <p>사실 CPU는 C Project with U의 약자이기도 합니다</p>
                  <p>
                    공부하는 주 언어가 C 언어인만큼 C 언어를 활용한 게임 제작,
                    프로젝트 진행,
                    <br />
                    공모전 참가 등 다양한 활동을 활발하게 진행하고 있습니다.
                  </p>
                </div>
                <img src={cpu_logo} className="cpu_logo" />
              </div>
              <button className="signup_club">
                <Link to="/join_cpu">신청하기</Link>
              </button>
            </div>
            <div className="cpu2">
              <h3>cpu</h3>
            </div>
            <div className="cpu3">
              <h3>3</h3>
            </div>
            <div className="cpu4">
              <h3>4</h3>
            </div>
            <div className="cpu5">
              <h3>5</h3>
            </div>
            <div className="cpu6">
              <h3>6</h3>
            </div>
            <div className="cpu7">
              <h3>7</h3>
            </div>
          </Slider>
        </div>
      </div>
    </Layout>
  );
}
