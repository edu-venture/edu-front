import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ListItem } from "@mui/material";
import styled from "./NoticeStyled.module.css";
import Modal from "./NoticeAlert/NoticeAlert";

function NoticeListItem({ notice, onDelete }) {
  const { title, content } = notice;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ListItem>
      <div className={styled.noticeListItem}>
        <div className={styled.noticeListItemTop}>
          <div>
            <p className={styled.noticeListItemTitle}>{title}</p>
          </div>

          <div className={styled.noticeListItemTitleBtns}>
            <Link to="/admin/notice/update">
              <button className={styled.fakeLink}>수정</button>
            </Link>
            <span> | </span>
            <button className={styled.fakeLink} onClick={handleDeleteClick}>
              삭제
            </button>
          </div>

          <Modal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onDelete={() => {
              onDelete(notice);
              handleCloseModal();
            }}
            title={title}
          />
        </div>

        <div className={styled.noticeListItemContent}>
          <p>{content}</p>
        </div>
      </div>
    </ListItem>
  );
}

export default NoticeListItem;
