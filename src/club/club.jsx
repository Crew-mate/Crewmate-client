import React from "react";
import Layout from "../Layout";
import cpu_logo from "../assets/cpu_logo.svg";
import activity_content from "../assets/activity_content.svg";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

import "../club/slick.css";
import "../club/slick-theme.css";
import "../club/club.css";
import Club_member_slider from "./club_member";
import Club_his_slider from "./club_history";


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

      <div className="show_cpu">
        <span className="cpu_title">CPU <span className="소개">소개</span></span>
        <p><span className="pull_name_cpu">CPU Central Procesiing Unit</span>, 즉 중앙 처리 장치를 뜻합니다!<br />
          <span className="pull_name_cpu">CPU</span> 는 컴퓨터에서 기억, 해석, 연산, 제어라는 4대 주요 기능을 담당합니다.<br />
          <span className="point">컴퓨터의 두뇌</span> 역할이라고 할 정도로 없어서는 안 될 부분 중 하나입니다.</p>
        <p>함께 공부하며 없어서는 안 될 중요한 사람으로 성장하자는 목표로 출발하여<br />다양한 활동과 함께 성장하고 있습니다.</p>
        <p>사실 <span className="pull_name_cpu">CPU</span>는 <span className="pull_name_cpu">C Project with U</span>의 약자이기도 합니다</p>
        <p>공부하는 주 언어가 C 언어인만큼 C 언어를 활용한 <span className="point">게임 제작, 프로젝트 진행, <br /> 공모전 참가</span> 등 다양한 활동을 활발하게 진행하고 있습니다.</p>
      </div>
      <div className="his_slider">
        <Club_his_slider />
      </div>
      <div className="main-activities">
        <h2>주요활동</h2>
        <div className="activity_content">
        <img src={activity_content} className="activity_img"/>
        <p className="act_title">[소통의 장]</p>
          <p> - 월요일 오후 3시 반부터 4시 반 까지 회의, 프로젝트 해커톤, 서브젝트 미팅 등 <br /> 여러가지 행사를 통해 CPU 멤버들과 함께 공부 현황을 공유합니다.</p>
          <p> - 협업툴 (github, notion) 를 배울 수 있습니다.</p>
        </div>

        <div className="activity_content">
        <img src={activity_content} className="activity_img"/>
          <p> - 월요일 오후 3시 반부터 4시 반 까지 회의, 프로젝트 해커톤, 서브젝트 미팅 등 <br /> 여러가지 행사를 통해 CPU 멤버들과 함께 공부 현황을 공유합니다.</p>
          <p> - 협업툴 (github, notion) 를 배울 수 있습니다.</p>
        </div>
      </div>

      <div className="club-ss">
        <Club_member_slider />
      </div>
    </Layout>
  );
}
