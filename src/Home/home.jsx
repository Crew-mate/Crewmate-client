import React from "react";
import Layout from "../Layout";
import '../Home/home.css';
import mainImage from '../assets/home_logo.svg';
import Home_slider from '../Home/home_slider'
import Calendar from '../Home/home_cal'


export default function Home() {

  return (
    <Layout>
      <div className="wrapHome">
        <img src={mainImage} />
        <div className="home-slider">
          <Home_slider/>
        </div>
          <div className="home_cal">
            <Calendar/>
          </div>
        </div>
    </Layout>
  )
}
