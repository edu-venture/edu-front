import React, { useEffect, useState } from "react";
import NoticeListItem from "./NoticeListItem";
import styled from "./NoticeStyled.module.css";
import axios from "axios";

const NoticeList = () => {
  const [noticeList, setNoticeList] = useState([]);

  const getNoticeList = async () => {
    try {
      console.log("엑시오스 들어간다");
      // const response = await axios.get('/NoticeTest.json');
      const response = await axios.get(
        "http://192.168.0.220:8081/notice/notice-list"
      );

      console.log(response);
      console.log("위에껀 리스폰스");

      if (response.data && response.data.items) {
        setNoticeList(response.data.items);
      }
      console.log(noticeList);
    } catch (e) {
      console.log(e);
    }
  };

  const deleteNotice = async (noticeNo) => {
    try {
      await axios.delete(
        `http://192.168.0.220:8081/notice/delete/${noticeNo}`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("ACCESS_TOKEN")}`,
          },
        }
      );
      getNoticeList(); // 삭제 후 목록 다시 불러오기
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getNoticeList();
  }, []);

  return (
    <div className={styled.noticeContainer}>
      {noticeList.map((notice, index) => (
        <NoticeListItem key={index} notice={notice} onDelete={deleteNotice} />
      ))}
    </div>
  );
};

export default NoticeList;
