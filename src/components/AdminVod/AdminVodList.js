import React, { useState } from "react";
import AdminVodListItem from "./AdminVodListItem";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";

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

const AdminVodList = ({ VODList, setVODList }) => {


  const handleVideoDelete = async (deletedId) => {
    try {
      setVODList(VODList.filter((item) => item.id !== deletedId));
    } catch(error) {
      console.log(error);
    }
  };

  return (
    <Container>
      {
      VODList.map((item) => (
        <AdminVodListItem
          key={item.id}
          id={item.id}
          lectureName={item.title}
          teacherName={item.writer}
          viewCount={item.hits}
          uploadDate={item.regDate}
          thumbnail={item.saveThumb}
          handleDeleteView={() => handleVideoDelete(item.id)}
        />
      ))}
    </Container>
  );
};

export default AdminVodList;
