import React from "react";
import Layout from "../Layout";
import "../join_cpu/join_cpu.css"


export default function join_cpu() {
  return (
    <Layout>
      <div className="wrap_join_cpu">
        <div className="join_cpu_content">
          <div className="join_name">이름</div>
          <input
            className="join_name_input"
            type="text"
            placeholder="이름을 입력하세요"
          />
          <div className="join_number">학번</div>
          <input
            className="join_number_input"
            type="text"
            placeholder="ex) 2109"
          />
          <div className="join_call">전화번호</div>
          <input
            className="join_call_input"
            type="text"
            placeholder="숫자만 입력해 주세요"
          />
          <div className="why_join">cpu 지원동기</div>
          <input
            className="why_join_input"
            type="text"
            placeholder="지원동기"
          />
          <div className="another_content">추후에 하고싶은 활동</div>
          <input
            className="another_content_input"
            type="text"
            placeholder="내용"
          />
          <button className="joining">신청하기</button>
        </div>
      </div>
    </Layout>
  )
}