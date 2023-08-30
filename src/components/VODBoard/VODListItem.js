import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const ListItem = styled.div`
  width: 100%;
  height: 220px;
  display: flex;
  align-items: center;
  background: #ffffff;
  margin: 20px auto;
`;

const VideoFrame = styled.div`
  width: 300px;
  height: 180px;
  margin: 0 50px 0 20px;
  background-color: #323232;
  cursor: pointer;
`;

const VODListItem = ({
  id,
  lectureName,
  teacherName,
  viewCount,
  uploadDate,
  thumbnail,
}) => {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/video/detail/${id}`);
  };

  return (
    <ListItem>
      <VideoFrame onClick={goToDetail}>
        <img src={thumbnail} alt="Video Thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </VideoFrame>  
      <div>
        <Link to={`/video/detail/${id}`}>
          <div style={{ fontSize: "25px" }}>{lectureName}</div>
        </Link>
        <div style={{ marginTop: "40px", fontSize: "20px" }}>
          {teacherName} 선생님
        </div>
        <div style={{ marginTop: "25px", color: "#323232" }}>
          조회수 {viewCount}회 | {uploadDate.slice(0, 10)}
        </div>
      </div>
    </ListItem>
  );
};

export default VODListItem;
