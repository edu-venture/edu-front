import React, { useEffect, useState } from "react";
import VODListItem from "./VODListItem";
import axios from "axios";
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


const VODList = () => {
  const [VODList, setVODList] = useState([]);

  useEffect(() => {
    const getVODList = async () => {
      try {
        const response = await axios.get(
          'http://192.168.0.213:8081/vod/list',
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem('ACCESS_TOKEN')}`
            }
          }
        );
        console.log(response);
  
        if(response.data.items && 
          setVODList(response.data.items));
      } catch (e) {
        console.log(e);
      }
    };
    getVODList();
  }, []);
  

  return (
    <Container>
      {
      VODList.map((item) => (
        <VODListItem
          key={item.id}
          lectureName={item.title}
          teacherName={item.writer}
          viewCount={item.hits}
          uploadDate={item.regDate}
        />
      ))}
    </Container>
  );
};

export default VODList;
