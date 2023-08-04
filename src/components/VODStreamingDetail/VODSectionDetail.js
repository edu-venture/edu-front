import React, {useState} from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import styled from '@emotion/styled';
import VODSectionChat from './VODSectionChat';

const styles = {
  sectionTitle: {
    color: '#000',
  },
  teacherName: {
    padding: '40px 0 0 90px',
    marginBottom: '0px'
  },
  lectureName: {
    margin: '0px',
    paddingLeft: '90px'
  },
  FavoriteIcon: {
    color: 'red'
  },
}

const FavoriteButton = styled.button`
  position: absolute;
  right: 150px;
  width: 65px;
  height: 65px;
  border: none;
  border-radius: 50%;
`;

const VideoPlayer = styled.div`
  width: 90%;
  height: 700px;
  background: #323232;
  margin: 70px auto;
`;




const VODSectionDetail = () => {
  const [favoriteCount, setFavoriteCount] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);

  const FavoriteClickHandler = () => {
    setIsFavorited(!isFavorited);
    setFavoriteCount(prevCount => isFavorited ? prevCount - 1 : prevCount + 1);
  }

  return (
    <main style={{background: '#D2D2D2', width: '100%', height: '100%', position: 'relative'}}>
        <div style={styles.sectionTitle}>
          <p style={styles.teacherName}>[강사명] 선생님의</p>
          <h1 style={styles.lectureName}>[강의명]</h1>
        </div>
        <FavoriteButton type='button' onClick={FavoriteClickHandler} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <FavoriteIcon style={styles.FavoriteIcon}></FavoriteIcon>
          <div>
            {favoriteCount}
          </div>
        </FavoriteButton>
        <VideoPlayer></VideoPlayer>
       <VODSectionChat></VODSectionChat>
    </main>
  )
}

export default VODSectionDetail