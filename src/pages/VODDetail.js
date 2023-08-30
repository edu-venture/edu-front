import React, { useState, useEffect } from "react";
import Title from "../components/Title";
import { useParams } from "react-router-dom";
import VODSection from "../components/VODDetail/VODSection";
import ChatSection from "../components/VODDetail/ChatSection";
import axios from "axios";

const styles = {
  titleContainer: {
    padding: "20px 0px 20px 50px",
  },
};

const VODDetail = () => {
  const [postData, setPostData] = useState({});
  const [commentsList, setCommentsList] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8081/vod/board/${id}`, {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('ACCESS_TOKEN')}`
          }
        });
        console.log(response.data.item.commentList);
        setPostData(response.data.item.board); 
        setCommentsList(response.data.item.commentList);
        
      } catch(error) {
        console.log(error);
      }
    };

    fetchPostData();
  }, [id]);

  return (
    <div
      style={{
        width: "100vw",
        height: "auto",
        overflow: "hidden",
        backgroundColor: "#D2D2D2",
        position: "relative",
      }}
    >
      <div style={styles.titleContainer}>
        <Title
          subtitle={`${postData.writer} 선생님의`}
          title={postData.title}
          color="#171A2B"
        />
      </div>
      <VODSection videoDetail={postData} />
      <ChatSection commentsList={commentsList} setCommentsList={setCommentsList} id={id}/>
    </div>
  );
};

export default VODDetail;
