import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow-y: auto;
`;

const ViewerTitle = styled.div`
  height: 100%;
  width: 15%;
  background: #5AC467;
  color: #fff;
  display: flex;  
  align-items: center;  
  justify-content: center;  
`;

const ViewerListSection = styled.div`
  width: 85%;
  height: 100%;
  background: #D8D8D8;
  color: #000;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`;

const ViewerListItem = styled.div`
  background: #fff;
  color: #000;
  border-radius: 20px;
  text-align: center;
  padding: 15px 30px;
  margin: 15px;
`;
const ViewerList = ({chatLog, userList}) => {
  console.log(`chatLog  어떤거 오냐? ${JSON.stringify(chatLog)}`);

  return (
    <Wrapper>
    <ViewerTitle>참여자 목록</ViewerTitle>
      <ViewerListSection>
      {userList && userList.length > 0 && userList.map((user, index) => (
          <ViewerListItem key={index}>{user}</ViewerListItem>
          ))}
      </ViewerListSection>
  </Wrapper>
  )
}

export default ViewerList