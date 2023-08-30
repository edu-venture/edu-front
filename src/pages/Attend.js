import React, { useEffect } from "react";
import AttendCard from "../components/Attend/AttendCard";
import Title from "../components/Title";
import AttendCalendar from "../components/Attend/AttendCalendar";
import styled from "styled-components";
import axios from "axios";

const styles = {
  titleContainer: {
    padding: "20px 0px 20px 50px",
  },
  textContainer: {
    display: "flex",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  timeCardContainer: {
    display: "flex",
    paddingTop: 50,
    justifyContent: "center",
    gap: 30,
  },
};

const textStyles = {
  fontSize: 20,
  letterSpacing: 1,
  color: "#171a2b",
};

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 70px;
`;

const StyledButton = styled.button`
  width: 130px;
  height: 50px;
  background-color: #171a2b;
  color: #ffffff;
  border: none;
  border-radius: 30px;
  font-size: 20px;
  cursor: pointer;
`;

const Attend = () => {
  const userType = sessionStorage.getItem("userType");
  const userName = sessionStorage.getItem("userName");
  const childName = sessionStorage.getItem("childName");
  const time = new Date();
  const month = time.getMonth() + 1;
  const today = time.getDate();

  /** 출석부 가져오기 함수 */
  const getIsAttend = async () => {
    try {
      const response = await axios.get(
        "http://192.168.0.7:8081/attendance/attend",
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("ACCESS_TOKEN")}`,
          },
        }
      );
      console.log("출석 여부 잘 들어옴?", response);
    } catch (e) {
      console.log("개별학생 출석여부 안가져옴", e);
    }
  };

  useEffect(() => {
    getIsAttend();
  }, []);

  return (
    <div>
      <div style={{ height: "600px", background: "#F9F9F9" }}>
        <div style={styles.titleContainer}>
          <Title subtitle={`${month}월 ${today}일`} title="출석 여부" />
        </div>
        <div style={styles.textContainer}>
          <p style={textStyles}>
            오늘은{" "}
            <span style={{ fontSize: 25 }}>
              {userType === "student" ? userName : childName}
            </span>{" "}
            학생의 수업일입니다.
          </p>
        </div>
        <div style={styles.timeCardContainer}>
          <AttendCard header="입실 시간" body="17:00" />
          <AttendCard header="퇴실 시간" body="21:00" />
        </div>
        <ButtonContainer>
          <StyledButton>입실하기</StyledButton>
        </ButtonContainer>
      </div>
      <div style={{ height: "800px", background: "#DADADA" }}>
        <div style={styles.titleContainer}>
          <Title subtitle={`${month}월`} title="출석부" />
        </div>
        <AttendCalendar />
      </div>
    </div>
  );
};
export default Attend;
