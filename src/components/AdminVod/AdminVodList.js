import React from "react";
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

const AdminVodList = ({ vodData, handleVideoDelete }) => {
  return (
    <Container>
      {vodData.map((item) => (
        <AdminVodListItem
          key={item.id}
          id={item.id}
          lectureName={`[${item.className}] ${item.lectureName}`}
          teacherName={item.teacherName}
          viewCount={item.viewCount}
          uploadDate={item.uploadDate}
        />
      ))}
    </Container>
  );
};
export default AdminVodList;
