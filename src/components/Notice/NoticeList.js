import React, { useEffect, useState } from "react";
import NoticeListItem from "./NoticeListItem";
import styled from "./NoticeStyled.module.css";
// import axios from "axios";

const NoticeList = () => {
  const [boardList, setBoardList] = useState([]);

  useEffect(() => {
    const getBoardList = async () => {
      try {
        const response = await fetch("/boardList.json");
        const data = await response.json();

        if (data && data.items) {
          setBoardList(data.items);
        }

        // const response = await axios.get('http://localhost:8081/vod/board-list');
        // if (response.data && response.data.items) {
        //   setBoardList(response.data.items);
        // }
      } catch (e) {
        console.log(e);
      }
    };
    getBoardList();
  }, []);

  const handleDeleteBoard = (boardToDelete) => {
    // 여기에서 삭제 동작을 처리합니다.
    const updatedBoardList = boardList.filter(
      (board) => board !== boardToDelete
    );
    setBoardList(updatedBoardList);
  };

  return (
    <div className={styled.noticeContainer}>
      {boardList.map((VodBoardDTO, index) => (
        <NoticeListItem
          key={VodBoardDTO.index}
          notice={VodBoardDTO}
          onDelete={handleDeleteBoard}
        />
      ))}
    </div>
  );
};

export default NoticeList;
