import React from 'react';
import styled from 'styled-components';
import './scss/VODListItemStyled.scss';

const ListItem = styled.div`
  width: 98%;
  height: 180px;
  background: #fff;
  margin: 10px auto;
  display: flex;
`;



const VODListItem = ({ lectureName, teacherName, viewCount, uploadDate }) => {

  
  return (
    <>
      <ListItem>
        <div className='videoFrame'></div>
        <div className='VODInfo'>
          <div className='VODTitle'>
            <p>[{lectureName}]</p>
          </div>
          <div className='teacher'>
            <p>[{teacherName}]</p>
          </div>
          <div className='cntAndUploadDate'>
            <p>조회수 [{viewCount}]회 | [{uploadDate}]</p>
          </div>
        </div>
      </ListItem>
    </>
  )
}

export default VODListItem