import React from "react";
import vodData from "../../utils/vodData.json";
import styled from "styled-components";
import StreamingListItem from "./StreamingListItem";

const Container = styled.div`
  width: 90%;
  height: 100%;
  margin: 20px auto 0 auto;
  background: #ececec;
  border-radius: 20px 20px 0 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const StreamingList = () => {
  return (
    <Container>
      {vodData.map((item, index) => (
        <StreamingListItem
          key={index}
          id={item.id}
          lectureName={`[${item.className}] ${item.lectureName}`}
          teacherName={item.teacherName}
          viewer={item.viewCount}
          uploadDate={item.uploadDate}
        />
      ))}
    </Container>
  );
};

export default StreamingList;
