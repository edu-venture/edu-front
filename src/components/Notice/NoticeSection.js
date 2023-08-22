import React from "react";
import styled from "./NoticeStyled.module.css";
import { Link } from "react-router-dom";
// import styles from './css/VODSectionStyled.module.css';

const NoticeSection = ({ children }) => {
  return (
    <main className={styled.noticeMain}>
      <div className={styled.noticeDiv}>
        <div className={styled.noticeTitle}>
          <p>7월 4주차</p>
          <h1>수업 공지사항</h1>
        </div>

        <Link to="/admin/notice/create">
          <div className={styled.noticeBtn}>
            <button type="button">공지사항 등록</button>
          </div>
        </Link>

        <div className={styled.noticeList}>{children}</div>
      </div>
    </main>
  );
};

export default NoticeSection;
