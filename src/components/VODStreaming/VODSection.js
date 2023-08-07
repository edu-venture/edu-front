import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import styles from './css/VODSectionStyled.module.css';

const VODSection = ({children}) => {
  return (
    <main style={{background: '#5AC467', width: '100%', height: '100%', position: 'relative'}}>
        <div className={styles.sectionTitle} >
          <p>복습해봐요</p>
          <h1>지난 수업 영상</h1>
        </div>
        <form className={styles.searchForm}>
          <input></input>
          <button type='button'>
            <SearchIcon></SearchIcon>
          </button>
        </form>
        {children}
    </main>
  )
}

export default VODSection