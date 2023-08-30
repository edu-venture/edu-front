import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import LectureBox from "../components/Lecture/LectureBox";
import LectureCalendar from "../components/Lecture/LectureCalendar";
import axios from "axios";

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
  const [lectures, setLectures] = useState([]);
  const getTimetable = async () => {
    try {
      const response = await axios.get(
        "http://192.168.0.7:8081/timetable/student/list",
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("ACCESS_TOKEN")}`,
          },
        }
      );
      if (response.data && response.data.items) {
        setLectures(response.data.items);
        console.log("누고?", lectures);
      }
      console.log("시간표 잘 들어옴?", response);
    } catch (e) {
      console.log("개별 학생 시간표 가져오기", e);
    }
  };

  useEffect(() => {
    getTimetable();
  }, []);

  const lectureContent = lectures.map(
    (lecture) =>
      `${lecture.claName} (${lecture.timeTeacher} 선생님)의 "${lecture.timeTitle}"`
  );

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
      <LectureBox title="이번 주 수업" content={lectureContent} />
      <LectureBox
        title="공지 사항"
        content={noticeContent}
        $borderRadius="30px 30px 0 0"
      />
    </div>
  );
};

export default Lecture;
