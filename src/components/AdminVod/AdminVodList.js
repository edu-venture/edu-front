import React, { useState } from "react";
import AdminVodListItem from "./AdminVodListItem";
import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  height: 100%;
  margin: 40px auto 0 auto;
  background: #ececec;
  border-radius: 20px 20px 0 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const AdminVodList = ({ vodData }) => {
  const [videos, setVideos] = useState(vodData);

  const handleVideoDelete = (deletedId) => {
    const updatedVideos = videos.filter((video) => video.id !== deletedId);
    setVideos(updatedVideos);
  };

  return (
    <Container>
      {videos.map((item, index) => (
        <AdminVodListItem
          key={index}
          id={item.id}
          lectureName={`[${item.className}] ${item.lectureName}`}
          teacherName={item.teacherName}
          viewCount={item.viewCount}
          uploadDate={item.uploadDate}
          handleDelete={handleVideoDelete}
        />
      ))}
    </Container>
  );
};

export default AdminVodList;
