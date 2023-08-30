import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  height: 660px;
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
  margin-top: 260px;
  gap: 20px;
`;

const StyledButton = styled.button`
  width: 130px;
  height: 50px;
  background-color: #5ac467;
  color: #ffffff;
  border: none;
  border-radius: 30px;
  font-size: 20px;
  cursor: pointer;
`;

const StreamingCreateItem = () => {
  return (
    <div>
      <Container>
        <h1>
          실시간 강의 <span style={{ fontWeight: "lighter" }}>생성</span>
        </h1>
        <InputBox>
          <TitleText>반 (강사명)</TitleText>
          <InputField placeholder="반을 선택하세요" />
        </InputBox>
        <InputBox>
          <TitleText>강의명</TitleText>
          <InputField placeholder="강의명을 입력하세요" />
        </InputBox>
        <ButtonContainer>
          <Link to="/admin/streaming">
            <StyledButton>취소하기</StyledButton>
          </Link>
          <Link to="/admin/streaming/create/setting">
            <StyledButton>생성하기</StyledButton>
          </Link>
        </ButtonContainer>
      </Container>
    </div>
  );
};

export default StreamingCreateItem;
