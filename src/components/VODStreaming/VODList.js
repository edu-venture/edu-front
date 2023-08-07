import React from 'react';
import VODListItem from './VODListItem';
import styled from 'styled-components';

const Container = styled.div`
  width: 90%;
  height: 100%;
  margin: 50px auto;
  background: #ececec;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const VODList = () => {

  const lectureName="프로그래밍 기초" 
  const teacherName="홍길동" 
  const viewCount="100" 
  const uploadDate="2023-07-28" 
  return (
    <Container>
      <VODListItem lectureName={lectureName} teacherName={teacherName} 
      viewCount={viewCount} uploadDate={uploadDate}></VODListItem>
      <VODListItem lectureName={lectureName} teacherName={teacherName} 
      viewCount={viewCount} uploadDate={uploadDate}></VODListItem>
      <VODListItem lectureName={lectureName} teacherName={teacherName} 
      viewCount={viewCount} uploadDate={uploadDate}></VODListItem>
      <VODListItem lectureName={lectureName} teacherName={teacherName} 
      viewCount={viewCount} uploadDate={uploadDate}></VODListItem>
      <VODListItem lectureName={lectureName} teacherName={teacherName} 
      viewCount={viewCount} uploadDate={uploadDate}></VODListItem>
      <VODListItem lectureName={lectureName} teacherName={teacherName} 
      viewCount={viewCount} uploadDate={uploadDate}></VODListItem>
      <VODListItem lectureName={lectureName} teacherName={teacherName} 
      viewCount={viewCount} uploadDate={uploadDate}></VODListItem>
      <VODListItem lectureName={lectureName} teacherName={teacherName} 
      viewCount={viewCount} uploadDate={uploadDate}></VODListItem>
      <VODListItem lectureName={lectureName} teacherName={teacherName} 
      viewCount={viewCount} uploadDate={uploadDate}></VODListItem>
      <VODListItem lectureName={lectureName} teacherName={teacherName} 
      viewCount={viewCount} uploadDate={uploadDate}></VODListItem>
    </Container>
  )
}

export default VODList