import React, { useState } from "react";
import Layout from "../Layout";
import axios from "axios"; // Axios 라이브러리 import
import "../join_cpu/join_cpu.css";

export default function JoinCpu() {
  const [name, setName] = useState("");
  const [studentNumber, setStudentNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [motivation, setMotivation] = useState("");
  const [futureActivity, setFutureActivity] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmission = () => {
    const errors = {};
    if (!name) {
      errors.name = "이름을 입력하세요";
    }
    if (!studentNumber || !/^\d+$/.test(studentNumber)) {
      errors.studentNumber = "학번을 숫자로 입력하세요";
    }
    if (!phoneNumber || !/^\d+$/.test(phoneNumber)) {
      errors.phoneNumber = "전화번호를 숫자로 입력하세요";
    }
    if (!motivation) {
      errors.motivation = "CPU 지원동기를 입력하세요";
    }
    if (!futureActivity) {
      errors.futureActivity = "추후 활동을 입력하세요";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    
    axios.post("http://localhost:5000/users/club", {
      name,
      studentNumber,
      phoneNumber,
      motivation,
      futureActivity
    })
    
    .then(response => {
      console.log("서버 응답:", response.data);
      
      setName("");
      setStudentNumber("");
      setPhoneNumber("");
      setMotivation("");
      setFutureActivity("");
  
      setErrors({});
    })
    .catch(error => {
      console.error("서버 요청 오류:", error);
    });
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
            value={studentNumber}
            onChange={(e) => {
              setStudentNumber(e.target.value);
              clearError("studentNumber");
            }}
          />
          {errors.studentNumber && <div className="error-message">{errors.studentNumber}</div>}
          <div className="join_call">전화번호</div>
          <input
            className="join_call_input"
            type="text"
            placeholder="숫자만 입력해 주세요"
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
              clearError("phoneNumber");
            }}
          />
          {errors.phoneNumber && <div className="error-message">{errors.phoneNumber}</div>}
          <div className="why_join">CPU 지원동기</div>
          <textarea
            className="why_join_input"
            type="text"
            placeholder="지원동기"
            value={motivation}
            onChange={(e) => {
              setMotivation(e.target.value);
              clearError("motivation");
            }}
          />
          {errors.motivation && <div className="error-message">{errors.motivation}</div>}
          <div className="another_content">추후에 하고싶은 활동</div>
          <textarea
            className="another_content_input"
            type="text"
            placeholder="내용"
            value={futureActivity}
            onChange={(e) => {
              setFutureActivity(e.target.value);
              clearError("futureActivity");
            }}
          />
          {errors.futureActivity && <div className="error-message">{errors.futureActivity}</div>}
          <div className="joining_btn">
            <button className="joining" onClick={handleSubmission}>신청하기</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
