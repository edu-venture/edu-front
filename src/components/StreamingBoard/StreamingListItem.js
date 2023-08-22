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
  display: flex;
`;

const VideoFrame = styled.div`
  width: 300px;
  height: 180px;
  margin: 0 50px 0 20px;
  background-color: #323232;
  cursor: pointer;
`;

const StreamingListItem = ({
  id,
  lectureName,
  teacherName,
  viewer,
  uploadDate,
}) => {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/video/detail/${id}`);
  };

  return (
    <ListItem>
      <VideoFrame onClick={goToDetail} />
      <div>
        <Link to={`/video/detail/${id}`}>
          <div style={{ fontSize: "25px" }}>{lectureName}</div>
        </Link>
        <div style={{ marginTop: "40px", fontSize: "20px" }}>
          {teacherName} 선생님
        </div>
        <div style={{ marginTop: "25px", color: "#323232" }}>
          수강중인 학생 {viewer} | {uploadDate}
        </div>
      </div>
    </ListItem>
  );
};

export default StreamingListItem;
