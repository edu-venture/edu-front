import React from "react";
import Title from "../components/Title";
import { styled } from "styled-components";
import AdminVodCreateListItem from "../components/AdminVod/AdminVodCreateListItem";
import { Button } from "@mui/material";
import FileUpload from "../components/AdminVod/FileUpload";

const styles = {
  Container: {
    width: "100vw",
    height: "auto",
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
  height: 100%;
  margin: 40px auto 0 auto;
  background: #ececec;
  border-radius: 20px 20px 0 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const AdminVodCreate = () => {
  return (
    <div style={styles.Container}>
      <div style={styles.titleContainer}>
        <Title subtitle="학생을 위한" title="수업 영상 등록" color="#ffffff" />
      </div>
      <ContentContainer>
        <AdminVodCreateListItem contentName="수업 이름" />
        <AdminVodCreateListItem contentName="반" />
        <AdminVodCreateListItem
          contentName="수업 내용"
          customHeight="217px"
          inputHeight="217px"
        />
        <FileUpload
          contentName="수업 영상"
          placeholder="이곳을 클릭하여 선택하거나 파일을 드래그하세요."
        />
        <FileUpload
          contentName="썸네일 사진"
          placeholder="이곳을 클릭하여 선택하거나 파일을 드래그하세요."
        />
        <FileUpload
          contentName="수업 자료"
          placeholder="이곳을 클릭하여 선택하거나 파일을 드래그하세요."
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

export default AdminVodCreate;
