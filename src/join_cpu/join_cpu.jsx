import React, { useState } from "react";
import Layout from "../Layout";
import axios from "axios"; // Axios 라이브러리 import
import "../join_cpu/join_cpu.css";
import { Navigate } from "react-router";

export default function JoinCpu() {
  const [name, setName] = useState("");
  const [student_num, setstudent_num] = useState("");
  const [phone_num, setphone_num] = useState("");
  const [answer1, setanswer1] = useState("");
  const [answer2, setanswer2] = useState("");
  const [answer3, setanswer3] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmission = async() => {
    const errors = {};
    if (!name) {
      errors.name = "이름을 입력하세요";
    }
    if (!student_num || !/^\d+$/.test(student_num)) {
      errors.student_num = "학번을 숫자로 입력하세요";
    }
    if (!phone_num || !/^\d+$/.test(phone_num)) {
      errors.phone_num = "전화번호를 숫자로 입력하세요";
    }
    if (!answer1) {
      errors.answer1 = "CPU 지원동기를 입력하세요";
    }
    if (!answer2) {
      errors.answer2 = "추후 활동을 입력하세요";
    }if (!answer3) {
      errors.answer2 = "자신을 색깔로 표현한다면?";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
    const newApply={name,student_num,phone_num,answer1,answer2,answer3};
    try{
      const response=await axios.post('http://localhost:5000/apply_form',newApply);
      if(response.status===201){
        alert('동아리 지원을 완료하였습니다');
        Navigate('/')
      }
    }catch(error){
      alert('동아리 지원에 실패했습니다');
      console.log(error);
    }
  };


  const clearError = (fieldName) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: undefined,
    }));
  };

  return (
    <Layout>
      <div className="wrap_join_cpu">
        <div className="join_club_name">JOIN CPU</div>
        <div className="join_cpu_content">
          <div className="join_name">이름</div>
          <input
            className="join_name_input"
            type="text"
            placeholder="이름을 입력하세요"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              clearError("name");
            }}
          />
          {errors.name && <div className="error-message">{errors.name}</div>}
          <div className="join_number">학번</div>
          <input
            className="join_number_input"
            type="text"
            placeholder="ex) 2109"
            value={student_num}
            onChange={(e) => {
              setstudent_num(e.target.value);
              clearError("student_num");
            }}
          />
          {errors.student_num && <div className="error-message">{errors.student_num}</div>}
          <div className="join_call">전화번호</div>
          <input
            className="join_call_input"
            type="text"
            placeholder="숫자만 입력해 주세요"
            value={phone_num}
            onChange={(e) => {
              setphone_num(e.target.value);
              clearError("phone_num");
            }}
          />
          {errors.phone_num && <div className="error-message">{errors.phone_num}</div>}
          <div className="why_join">CPU 지원동기</div>
          <textarea
            className="why_join_input"
            type="text"
            placeholder="지원동기"
            value={answer1}
            onChange={(e) => {
              setanswer1(e.target.value);
              clearError("answer1");
            }}
          />
          {errors.answer1 && <div className="error-message">{errors.answer1}</div>}
          <div className="another_content">추후에 하고싶은 활동</div>
          <textarea
            className="another_content_input"
            type="text"
            placeholder="내용"
            value={answer2}
            onChange={(e) => {
              setanswer2(e.target.value);
              clearError("answer2");
            }}
          />
          {errors.answer2 && <div className="error-message">{errors.answer2}</div>}
          <div className="another_content">자신을 색깔로 표현한다면?</div>
          <textarea
            className="another_content_input"
            type="text"
            placeholder="내용"
            value={answer3}
            onChange={(e) => {
              setanswer3(e.target.value);
              clearError("answer3");
            }}
          />
          {errors.answer3 && <div className="error-message">{errors.answer3}</div>}
          <div className="joining_btn">
            <button className="joining" onClick={handleSubmission}>신청하기</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
