import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import axios from "axios";
const ListItem = styled.div`
  width: 100%;
  height: 220px;
  display: flex;
  align-items: center;
  background: #ffffff;
  margin: 20px auto;
  display: flex;
`;

const VideoFrame = styled.div`
  width: 300px;
  height: 180px;
  margin: 0 50px 0 20px;
  background-color: #323232;
  cursor: pointer;
  border: 2px solid black;
`;

const TitleAndButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; // 세로 중앙 정렬을 통해 글 제목과 버튼들이 동일한 선상에 있게 합니다.
`;

const AdminVodListItem = ({
  id,
  lectureName,
  teacherName,
  viewCount,
  uploadDate,
  handleDeleteView,
  thumbnail,
}) => {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/video/detail/${id}`);
  };

  const goToUpdate = () => {
    navigate(`/admin/video/update/${id}`);
  }

  const onDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8081/vod/board/${id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('ACCESS_TOKEN')}`
        }
      });
      console.log("동영상 삭제 완료");
      console.log(response.data);
      handleDeleteView(id);
    } catch (error) {
      console.error("삭제 오류", error);
    }
  };

  return (
    <ListItem>
      <VideoFrame onClick={goToDetail}>
        <img src={thumbnail} alt="Video Thumbnail" style={{width: '100%', height: '100%'}}/>
      </VideoFrame>
      <div style={{width: '100%'}}>
        <TitleAndButtons>
          {" "}
          <Link to={`/video/detail/${id}`}>
            <div style={{ fontSize: "25px" }}>{lectureName}</div>
          </Link>
        </TitleAndButtons>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div>
            <div style={{ marginTop: "40px", fontSize: "20px" }}>
              {teacherName} 선생님
            </div>
            <div style={{ marginTop: "25px", color: "#323232" }}>
              조회수 {viewCount}회 | {uploadDate.slice(0, 10)}
            </div>
          </div>
          <div style={{marginTop: '100px'}}>
            <Button
                size="small"
                onClick={goToUpdate} // TODO: 여기에 수정 함수를 추가합니다.
                style={{ marginLeft: "10px" }}
              >
                수정
              </Button>
              <Button
                size="small"
                onClick={() => onDelete(id)} // TODO: 여기에 삭제 함수를 추가합니다.
                style={{ marginLeft: "5px" }}
              >
                삭제
              </Button>
            </div>
          </div>
      </div>
    </ListItem>
  );
};

export default AdminVodListItem;
