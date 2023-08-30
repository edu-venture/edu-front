import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import StreamingSettingContent from "./StreamingSettingContent";

const Container = styled.div`
  width: 90%;
  height: auto;
  margin: 63px auto 0 auto;
  padding: 25px 45px;
  background: #ececec;
  border-radius: 20px 20px 0 0;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const InputBox = styled.div`
  width: 100%;
  height: 50px;
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 25px;
  margin-bottom: 15px;
`;

const TitleText = styled.p`
  width: 140px;
  height: 50px;
  margin: 0 10px 0 0;
  border-radius: 30px;
  background: #7f7f7f;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #fff;
`;

const InputField = styled.input`
  width: 1500px;
  height: 50px;
  border-radius: 30px;
  border: none;
  padding-left: 25px;
  font-size: 18px;
  outline: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 30px;
  gap: 20px;
`;

const StyledButton = styled.button`
  width: 230px;
  height: 50px;
  background-color: #5ac467;
  color: #ffffff;
  border: none;
  border-radius: 30px;
  font-size: 20px;
  cursor: pointer;
`;

const TextBox = styled.div`
  font-size: 20px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StreamingSettingItem = () => {
  return (
    <div>
      <Container>
        <h1>
          방송 인코더 <span style={{ fontWeight: "lighter" }}>설정</span>
        </h1>
        <InputBox>
          <TitleText>강의 생성</TitleText>
          <InputField placeholder="강의가 생성 중입니다" readOnly={true} />
        </InputBox>
        <InputBox>
          <TitleText>스트림 URL</TitleText>
          <InputField placeholder="스트림 URL 생성 중입니다" readOnly={true} />
        </InputBox>
        <InputBox>
          <TitleText>스트림 키</TitleText>
          <InputField placeholder="스트림 키 생성 중입니다" readOnly={true} />
        </InputBox>
        <TextBox>
          <p>
            <b>스트림 URL과 스트림 키</b>가 활성화될 때까지 기다려주세요.
          </p>
          <p>
            스트림 URL과 스트림 키가 활성화되었다면 아래의 단계에 따라{" "}
            <b>OBS 인코더를 설정</b>합니다.
          </p>
        </TextBox>
        <h1 style={{ margin: "100px 0 0" }}>
          OBS 인코더 <span style={{ fontWeight: "lighter" }}>설정</span>
        </h1>
        <StreamingSettingContent />
        <ButtonContainer>
          <Link to="/streaming/:id">
            <StyledButton>방송 시작 확인하기</StyledButton>
          </Link>
        </ButtonContainer>
      </Container>
    </div>
  );
};

export default StreamingSettingItem;
