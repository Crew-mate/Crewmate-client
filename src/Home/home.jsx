import React from "react";
import Layout from "../Layout";
import '../Home/home.css';
import mainImage from '../assets/home_logo.svg';
import home_cal from '../assets/home_cal.svg';

export default function Home() {
  return (
    <Layout>
      <div className="wrapHome">
        <img src={mainImage} />
        <div className="intro">
          <h2 className="intro_title">CREW MATE 소개</h2>
          <div className="what_crewmate">
            <h3>CREW MATE란?</h3>
            <p className="what_crewmate_content">Crew mate는 학교 내의 모든 동아리를 종합적으로 소개하고, <br />관심 있는 학생들에게 자세한 정보를 제공합니다. <br /> 학생들은 간편하게 동아리의 활동 시간, 담당 선생님, <br /> 동아리의 활동 내역 등을 확인할 수 있습니다. <br /> 또한, 각 동아리들의 신청폼을 찾을 필요없이 <br /> crew mate를 통해 동아리 가입 신청도 쉽게 할 수 있도록하여, <br /> 학생들이 자신에게 가장 알맞은 동아리를 찾아 학교 생활을 더욱 <br /> 풍부하게 만들 수 있습니다.</p>
          </div>
          <div className="crewmate_customer">
            <h3>CREW MATE 사용자는?</h3>
            <p className="crewmate_customer_content">
              웹사이트를 통해 학생들은 자율 동아리 정보를 간편하게 <br />
              확인하고, 동아리 활동 일정을 효율적으로 관리할 수 있습니다.<br />
              이를 통해 학생들은 자신에게 가장 적합한 활동을 빠르게 선택하고 <br />
              참여하고 싶은 학생과, 웹사이트를 통해 학생들은 다양한 <br />
              자율 동아리에 쉽게 접근할 수 있으며, 동아리 신청 과정이 간편화됨으로써 <br />
              학교 내 활동에 참여하는 학생들의 수가 늘어날 것입니다. <br />
              이는 학생들이 더 많은 경험을 하는 데 도움이 될 것 입니다.<br />
              또한 학교 생활을 더욱 풍부하게 만들고 싶은 학생이 사용합니다.
            </p>
          </div>
        </div>
        <div className="cal_content_wrap">
          <div className="cal_content">
            <h1 className="cal_content_title">효율적인 동아리 관리 <br />가능합니다!</h1>
            <span>달력으로 동아리 일정을 간편하게 확인 할 수 있어요.</span>
          </div>

          <img src={home_cal} style={{ marginTop: '10%' }} />
        </div>
      </div>
    </Layout>
  )
}
