import React from "react";
import AttendCard from "../components/Attend/AttendCard";
import Title from "../components/Title";
import AttendCalendar from "../components/Attend/AttendCalendar";

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

const Attend = () => {
  const userName = sessionStorage.getItem("userName");
  const time = new Date();
  const month = time.getMonth() + 1;
  const today = time.getDate();

  return (
    <div>
      <div style={{ height: "500px", background: "#F9F9F9" }}>
        <div style={styles.titleContainer}>
          <Title subtitle={`${month}월 ${today}일`} title="출석 여부" />
        </div>
        <div style={styles.textContainer}>
          <p style={textStyles}>
            오늘은 <span style={{ fontSize: 25 }}>{userName}</span> 학생의
            수업일입니다.
          </p>
        </div>
        <div style={styles.timeCardContainer}>
          <AttendCard header="입실 시간" body="17:00" />
          <AttendCard header="퇴실 시간" body="21:00" />
        </div>
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
