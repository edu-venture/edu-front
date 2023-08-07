import React from 'react';
import styled from 'styled-components';
import styles from './css/VODListItemStyled.module.css';
import { Link, useNavigate } from 'react-router-dom';

const ListItem = styled.div`
  width: 98%;
  height: 180px;
  background: #fff;
  margin: 10px auto;
  display: flex;
`;



const VODListItem = ({ lectureName, teacherName, viewCount, uploadDate }) => {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate('/video/detail');
  }
  
  return (
    <>
      <ListItem>
        <div className={styles.videoFrame} onClick={goToDetail}/>
        <div className={styles.VODInfo}>
          <Link to='/video/detail'>
            <div className={styles.VODTitle}>
              <p>[{lectureName}]</p>
            </div>
          </Link>
          <div className={styles.teacher}>
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