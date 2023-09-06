import React, { useState, useEffect } from "react";
import Title from "../components/Title";
import { useParams } from "react-router-dom";
import VODSection from "../components/VODDetail/VODSection";
import ChatSection from "../components/VODDetail/ChatSection";
import axios from "axios";

const styles = {
  container: {
    width: "100vw",
    height: "auto",
    overflow: "hidden",
    backgroundColor: "#D2D2D2",
    position: "relative",
  },
  titleContainer: {
    padding: "20px 0px 20px 50px",
  },
  downloadButton: {
    padding: "10px 20px",
    backgroundColor: "#5AC467",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    textDecoration: "none",
    fontSize: "14px",
    display: "inline-block",
    margin: "10px 0",
  },
};

const VODDetail = () => {
  const [postData, setPostData] = useState({});
  const [commentsList, setCommentsList] = useState([]);
  const [fileList, setFileList] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await axios.get(
          `http://223.130.161.116:80/vod/board/${id}`,
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("ACCESS_TOKEN")}`,
            },
          }
        );
        console.log("뭐 들었어?", response.data.item);
        setPostData(response.data.item.board);
        setCommentsList(response.data.item.commentList);
        setFileList(response.data.item.boardFileList);
      } catch (error) {
        console.log("개별 동영상 안 가져옴?", error);
      }
    };

    fetchPostData();
  }, [id]);

  const file = fileList && fileList[0];
  const fileUrl = file
    ? `http://223.130.161.116:80/storage/download/${file.vodSaveName}`
    : "#";

  return (
    <div style={styles.container}>
      <div style={styles.titleContainer}>
        <Title
          subtitle={`${postData.writer} 선생님의`}
          title={postData.title}
          color="#171A2B"
        />
      </div>
      <div>
        <VODSection videoDetail={postData} />
        <div style={{ textAlign: "center" }}>
          {file && (
            <a
              href={fileUrl}
              download={file.vodSaveName}
              style={styles.downloadButton}
            >
              강의 자료 다운로드 | {file.vodOriginName}
            </a>
          )}
        </div>
        <ChatSection
          commentsList={commentsList}
          setCommentsList={setCommentsList}
          id={id}
        />
      </div>
    </div>
  );
};

export default VODDetail;
