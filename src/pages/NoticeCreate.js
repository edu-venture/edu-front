import React from "react";
import Title from "../components/Title";
import { styled } from "styled-components";
import AdminVodCreateListItem from "../components/AdminVod/AdminVodCreateListItem";
import { Button } from "@mui/material";

const styles = {
  Container: {
    width: "100vw",
    height: "calc(100vh - 50px)",
    overflow: "hidden",
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
const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
  justify-content: flex-end;
`;
const ContentContainer = styled.div`
  width: 90%;
  height: 80%;
  margin: 50px auto 0 auto;
  background: #ececec;
  border-radius: 20px 20px 0 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const NoticeCreate = () => {
  return (
    <div style={styles.Container}>
      <div style={styles.titleContainer}>
        <Title
          subtitle="7월 4주차"
          title="수업 공지사항 등록"
          color="#ffffff"
        />
      </div>
      <ContentContainer>
        <AdminVodCreateListItem contentName="반" />
        <AdminVodCreateListItem contentName="날짜" />
        <AdminVodCreateListItem contentName="공지사항 제목" />
        <AdminVodCreateListItem
          contentName="공지사항 내용"
          customHeight="300px"
          inputHeight="300px"
        />
        <ButtonContainer>
          <Button
            sx={{
              fontSize: "22px",
              backgroundColor: "#5AC467",
              mr: 2,
              color: "#ffffff",
              borderRadius: "20px",
              width: "143px",
              height: "58px",
              "&:hover": {
                backgroundColor: "#5AC467",
              },
            }}
          >
            취소하기
          </Button>
          <Button sx={styles.button}>등록하기</Button>
        </ButtonContainer>
      </ContentContainer>
    </div>
  );
};

export default NoticeCreate;
