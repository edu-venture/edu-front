import React from "react";
import Title from "../Title";
import LectureBox from "../Lecture/LectureBox";
import LectureCalendar from "../Lecture/LectureCalendar";

const styles = {
  titleContainer: {
    padding: "60px 0px 20px 50px",
  },
};

const MainLecture = () => {
  const noticeTitle = "공지 사항";
  const noticeContent = ["게시된 공지 사항이 없습니다."];

  return (
    <div
      data-aos="fade-right"
      data-aos-easing="ease-in"
      data-aos-duration="2000"
      data-aos-offset="200"
      data-aos-delay="500"
      data-aos-anchor="#fade-right"
    >
      <div
        style={{
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          backgroundColor: "#5AC467",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div style={styles.titleContainer}>
            <Title subtitle="7월 4주차" title="수강 강좌" color="#ffffff" />
          </div>
          <LectureCalendar />
        </div>
        <LectureBox
          title={noticeTitle}
          content={noticeContent}
          $borderRadius="30px 30px 0 0"
        />
      </div>
    </div>
  );
};

export default MainLecture;
