import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import AOS from "aos";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import MainMessenger from "../components/Main/MainMessenger/MainMessenger";
import MainStreaming from "../components/Main/MainStreaming/MainStreaming";
import Footer from "../components/Footer";
import MainIntro from "../components/Main/MainIntro";
import MainLecture from "../components/Main/MainLecture";

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
  useEffect(() => {
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
        <MainLecture />
        <MainMessenger />
        <MainStreaming />
      </MainContainer>
      <Footer />
    </>
  );
};

export default Main;
