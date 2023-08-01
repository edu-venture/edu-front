import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import AOS from "aos";
import Calender from "../components/Main/Calender/MainCalender";
import TextContainer from "../components/Main/TextContainer";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import Messenger from "../components/Main/Messenger/MainMessenger";
import Streaming from "../components/Main/Streaming/Streaming";
import Footer from "../components/Footer";
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const downArrowAnimation = {
  color: "#5ac467",
  position: "relative",
  top: "12vh",
  animation: "moveUpDown 2s linear infinite",
  "@keyframes moveUpDown": {
    "0%, 100%": { transform: "translateY(-10px)" },
    "50%": { transform: "translateY(10px)" },
  },
  fontSize: "5em",
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
        <TextContainer />

        <KeyboardArrowDownRoundedIcon
          onClick={moveScroll}
          sx={downArrowAnimation}
        />
        <div ref={myRef}>
          <Calender />
        </div>
        <Messenger />
        <Streaming />
      </MainContainer>
      <Footer />
    </>
  );
};

export default Main;
