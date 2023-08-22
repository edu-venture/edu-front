import React from "react";
import Title from "../components/Title";
import { styled } from "styled-components";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";

const styles = {
  Container: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "#5AC467",
    position: "relative",
  },

  titleContainer: {
    padding: "20px 0px 20px 50px",
  },
  button: {
    fontSize: "22px",
    width: "143px",
    height: "58px",
    backgroundColor: "#5AC467",
    borderRadius: "20px",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#5AC467",
    },
    mr: 4,
  },
};

const MainTitle = styled.h1`
  margin: 30px 0 20px 100px;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 20px auto;
`;

const InputTitle = styled.div`
  border: none;
  border-radius: 20px;
  background: #7f7f7f;
  padding: 10px 20px;
  color: #fff;
  width: 8%;
  height: 3rem;
  margin-right: 30px;
  text-align: center;
`;

const InputField = styled.input`
  width: 75%;
  height: 3rem;
  border: none;
  border-radius: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 30px;
  justify-content: center;
`;
const ContentContainer = styled.div`
  width: 90%;
  height; 100%;
  margin: 50px auto 0 auto;
  padding-bottom: 50px; 
  background: #ececec;
  border-radius: 20px 20px 0 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const StreamingCreate = () => {
  const navigate = useNavigate();

  const buttonClickHandler = () => {
    navigate("/admin/streaming/create/setting");
  };

  return (
    <div style={styles.Container}>
      <div style={styles.titleContainer}>
        <Title
          subtitle="수업을 위한"
          title="실시간 강의 생성"
          color="#ffffff"
        />
      </div>
      <ContentContainer>
        <MainTitle>강의 생성</MainTitle>
        <InputWrapper>
          <InputTitle>강의명</InputTitle>
          <InputField />
        </InputWrapper>
        <InputWrapper>
          <InputTitle>강사명</InputTitle>
          <InputField />
        </InputWrapper>
        <InputWrapper>
          <InputTitle>반</InputTitle>
          <InputField />
        </InputWrapper>
        <ButtonContainer>
          <Button sx={styles.button} onClick={buttonClickHandler}>
            채널 생성
          </Button>
        </ButtonContainer>
      </ContentContainer>
    </div>
  );
};

export default StreamingCreate;
