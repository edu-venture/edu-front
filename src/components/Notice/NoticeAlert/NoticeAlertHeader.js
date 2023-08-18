import React from 'react';
import styles from './NoticeAlertStyled.module.css';

const NoticeAlertHeader = ({ onClose }) => {
  return (
    <div className={styles.modalHeaderDiv}>
      <div className={styles.modalHeaderBtn} onClick={onClose} />
    </div>
  );
};

export default NoticeAlertHeader;
