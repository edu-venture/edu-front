import React from "react";
import Title from "../components/Title";
import LectureBox from "../components/Lecture/LectureBox";
import LectureCalendar from "../components/Lecture/LectureCalendar";

const styles = {
  titleContainer: {
    padding: "20px 0px 20px 50px",
  },
};

const getMonthWeek = () => {
  const time = new Date();
  const month = time.getMonth() + 1;
  const today = time.getDate();
  const firstDay = new Date(time.setDate(1)).getDay();
  const week = Math.ceil((today + firstDay) / 7);
  return `${month}월 ${week}주차`;
};

const Lecture = () => {
  const lectureTitle = "이번 주 수업";
  const lectureContent = [
    '고3 화목반 (이완재 선생님)의 “파이널 수능대비"',
    '고3 주말반 (전두하 선생님)의 “쪽집게 특강"',
  ];

  const noticeTitle = "공지 사항";
  const noticeContent = ["게시된 공지 사항이 없습니다."];

  return (
    <div
      style={{
        height: "auto",
        overflow: "hidden",
        backgroundColor: "#5AC467",
        position: "relative",
      }}
    >
      <div style={styles.titleContainer}>
        <Title subtitle={getMonthWeek()} title="수강 강좌" color="#ffffff" />
      </div>
      <LectureCalendar />
      <LectureBox title={lectureTitle} content={lectureContent} />
      <LectureBox
        title={noticeTitle}
        content={noticeContent}
        $borderRadius="30px 30px 0 0"
      />
    </div>
  );
};

export default Lecture;
