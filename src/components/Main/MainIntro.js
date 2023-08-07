import React from "react";
import styled from "styled-components";
import ChatBot from "./MainChatBot/ChatBot";

const IntroContainer = styled.div`
  display: flex;
  width: 100vw;
  height: calc(100vh - 130px);
`;

const TextContainer = styled.div`
  margin-left: auto;
  margin-top: 200px;
`;

const TitleBox = styled.h1`
  color: #5ac467;
  font-size: 4vw;
  text-align: right;
  transform: translate(-20%, 1em);
`;

const ContentBox = styled.h6`
  margin: 3vw 0;
  font-size: 2vw;
  font-weight: normal;
  text-align: right;
  transform: translate(-20%, 3em);
`;

const MainIntro = () => {
  return (
    <IntroContainer>
      <TextContainer>
        <TitleBox>
          꿈을 위한 도약, <span style={{ fontSize: "5vw" }}>EduVenture</span>
        </TitleBox>
        <ContentBox>이완재님 안녕하세요.</ContentBox>
        <ContentBox>이완재의 종합 관리 화면입니다.</ContentBox>
      </TextContainer>
      <ChatBot />
    </IntroContainer>
  );
};

export default MainIntro;
