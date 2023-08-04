import React from 'react';
import './scss/VODListStyled.scss';
import VODListItem from './VODListItem';


const VODList = () => {

  const lectureName="프로그래밍 기초" 
  const teacherName="홍길동" 
  const viewCount="100" 
  const uploadDate="2023-07-28" 
  return (
    <div className='vodList'>
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
    </div>
  )
}

export default VODList