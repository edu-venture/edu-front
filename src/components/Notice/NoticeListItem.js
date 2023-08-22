import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ListItem } from "@mui/material";
import styled from "./NoticeStyled.module.css";

function NoticeListItem({ notice, onDelete }) {
  const navi = useNavigate();
  // const {  noticeNo,id,claName,noticeTitle,date, noticeContent, noticeRegdate } = notice;
  const { noticeNo, claName, noticeTitle, date, noticeContent } = notice;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const deleteBoard = (e) => {
    e.preventDefault();
    if (window.confirm("삭제하시겠습니까?")) {
      // "예"를 선택한 경우
      onDelete(noticeNo); // 상위 컴포넌트의 삭제 함수 호출
    }
  };

  return (
    <ListItem>
      <div className={styled.noticeListItem}>
        <p>{noticeNo}</p>

        <div className={styled.noticeListItemTop}>
          <div>
            <p
              className={styled.noticeListItemTitle}
              style={{ padding: "0px", margin: "10px 0 0 0" }}
            >
              {claName} / <span style={{ color: "green" }}>{date}</span>
            </p>
          </div>

          <div className={styled.noticeListItemTitleBtns}>
            <button>
              <Link to={`/admin/notice/update/${noticeNo}`}>수정</Link>
            </button>
            <div> | </div>
            <button onClick={deleteBoard}>삭제</button>
          </div>
        </div>

        <div
          className={styled.noticeListItemTitle}
          style={{ padding: "0px", margin: "10px 0 0 0" }}
        >
          {noticeTitle}
        </div>

        <div
          className={styled.noticeListItemContent}
          style={{ padding: "0px", margin: "10px 0 10px 0 " }}
        >
          {noticeContent}
        </div>
      </div>
    </ListItem>
  );
}

export default NoticeListItem;
