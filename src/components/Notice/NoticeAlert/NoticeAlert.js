import React from 'react';
import styled from './NoticeAlertStyled.module.css';

function NoticeAlert({ isOpen, onClose, onDelete, title }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styled.modalBackdrop}>
      <div className={styled.modal}>
        <div className={styled.modalHeaderDiv}>
          <div className={styled.modalHeaderBtn} onClick={onClose} />
        </div>
        <div className={styled.modalText}>
          <p>{title}을(를)</p>
          <p>정말 삭제하시겠습니까?</p>
        </div>
        <div className={styled.modalButtons}>
          <button onClick={onClose}>취소</button>
          <button onClick={onDelete}>삭제</button>
        </div>
      </div>
    </div>
  );
}

export default NoticeAlert;
