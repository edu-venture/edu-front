import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import AOS from "aos";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import MainMessenger from "../components/Main/MainMessenger/MainMessenger";
import MainStreaming from "../components/Main/MainStreaming/MainStreaming";
import Footer from "../components/Footer";
import MainIntro from "../components/Main/MainIntro";
import MainLecture from "../components/Main/MainLecture";
import axios from "axios";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const downArrowAnimation = {
  color: "#5ac467",
  position: "static",
  top: "10vh",
  animation: "moveUpDown 2s linear infinite",
  "@keyframes moveUpDown": {
    "0%, 100%": { transform: "translateY(-10px)" },
    "50%": { transform: "translateY(10px)" },
  },
  fontSize: "80px",
};

const Main = () => {
  const [lectures, setLectures] = useState([]);
  const [notices, setNotices] = useState([]);

  const getTimetable = async () => {
    try {
      const response = await axios.get(
        "http://192.168.0.216:8081/timetable/student/list",
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("ACCESS_TOKEN")}`,
          },
        }
      );
      console.log("개별 시간표 들어왔다.", response);
      if (response.data && response.data.items) {
        setLectures(response.data.items);
      }
    } catch (e) {
      console.log("개별 시간표 안들어옴?", e);
    }
  };

  const getNotices = async () => {
    try {
      const response = await axios.get(
        "http://192.168.0.216:8081/notice/course",
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("ACCESS_TOKEN")}`,
          },
        }
      );
      console.log("공지사항 들어왔다", response);
      if (response.data && response.data.items) {
        setNotices(response.data.items);
      }
    } catch (e) {
      console.log("공지사항 안들어옴?", e);
    }
  };

  const noticeContent = notices
    ? notices.map((notice) => {
        const userType = notice.userDTO.userType;
        if (userType === "admin") {
          return `<span style="color: green; font-size: 25px; font-weight: bolder;"}>${notice.noticeTitle}</span>
          ${notice.claName}
          <br/><br/>
          ${notice.noticeContent}`;
        } else {
          return `${notice.claName} (${notice.userDTO.userName} 선생님) ${notice.noticeContent}`;
        }
      })
    : ["게시된 공지 사항이 없습니다."];

  const userType = sessionStorage.getItem("userType");

  useEffect(() => {
    getTimetable();
    getNotices();
    AOS.refresh();
  }, []);

  const myRef = useRef(null);
  const moveScroll = () => myRef.current.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <MainContainer>
        <MainIntro />
        <KeyboardArrowDownRoundedIcon
          onClick={moveScroll}
          sx={downArrowAnimation}
        />
        <div ref={myRef} />
        {(userType === "student") | (userType === "parent") ? (
          <>
            <MainLecture lectures={lectures} noticeContent={noticeContent} />
            <MainMessenger />
            <MainStreaming />
          </>
        ) : (userType === "admin") | (userType === "teacher") ? (
          <MainMessenger />
        ) : (
          <></>
        )}
      </MainContainer>
      <Footer />
    </>
  );
};

export default Main;
