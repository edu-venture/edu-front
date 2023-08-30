import React, { useState, useEffect } from "react";
import Title from "../components/Title";
import { styled } from "styled-components";
import AdminVODUpdateListItem from '../components/AdminVod/AdminVODUpdateListItem'
import { Button } from "@mui/material";
import FileUpload from "../components/AdminVod/FileUpload";
import axios from "axios";
import { useNavigate, useParams } from "react-router";

const styles = {
  Container: {
    width: "100vw",
    height: "auto",
    overflow: "hidden",
    backgroundColor: "#5AC467",
    position: "relative",
  },

  titleContainer: {
    padding: "20px 0px 20px 50px",
  },
  button: {
    fontSize: "22px",
    width: "143px",
    height: "58px",
    backgroundColor: "#5AC467",
    borderRadius: "20px",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#5AC467",
    },
    mr: 4,
  },
};
const ButtonContainer = styled.div`
  display: flex;

  width: 100%;
  margin-top: 20px;
  justify-content: flex-end;
`;
const ContentContainer = styled.div`
  width: 90%;
  height: 100%;
  margin: 40px auto 0 auto;
  background: #ececec;
  border-radius: 20px 20px 0 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const AdminVODUpdate = () => {
  const [postData, setPostData] = useState({});
  const [fileList, setFileList] = useState([]);
  const [vodData, setVodData] = useState({ 
    title: '', // 수업 이름
    writer: '', // 반
    content: '', // 수업 내용
    videoFile: null, // 수업 영상
    thumbnail: null, // 썸네일 사진
    fileList: [], // 수업 자료
  });

  const navigate = useNavigate();

  const {id} = useParams();

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8081/vod/board/${id}`, {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('ACCESS_TOKEN')}`
          }
        });
        console.log(response.data.item.board);
        console.log(response.data.item.boardFileList);
        setPostData(response.data.item.board);
        setFileList(response.data.item.boardFileList);
        setVodData({
          title: response.data.item.board.title,
          writer: response.data.item.board.writer,
          content: response.data.item.board.content,
          videoFile: response.data.item.board.originPath,
          thumbnail: response.data.item.board.originThumb,
          fileList: response.data.item.boardFileList?.vodOriginName,
        });
        console.log(vodData);
      } catch(error) {
        console.log(error);
      }
    };

    fetchPostData();
  }, [id]);


  const handleCancelButton = () => {
    navigate(-1);
  }
  //텍스트 입력값 상태 관리 함수
  const handleInputChange = (key, value) => {
    setVodData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };
  //파일 상태 관리 함수
  const handleFileChange = (key, file) => {
    if(key === 'fileList') {
      setVodData((prevData) => ({ 
        ...prevData,
        fileList: Array.isArray(prevData.fileList) ? [...prevData.fileList, file] : [file],
      }));
    } else {
      setVodData((prevData) => ({
        ...prevData,
        [key]: file,
      }));
    }
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('boardDTO', new Blob([JSON.stringify({
      id: id,
      title: vodData.title,
      writer: vodData.writer,
      content: vodData.content
    })], {
      type: 'application/json'
    }));
    formData.append('videoFile', vodData.videoFile);
    formData.append('thumbnail', vodData.thumbnail);
    if(vodData.fileList) {
      vodData.fileList.forEach(file => {
        formData.append('fileList', file);
      });
    }

    try {
      const response = await axios.put(`http://localhost:8081/vod/board/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${sessionStorage.getItem('ACCESS_TOKEN')}`
        },
      });
      console.log(response.data);
      console.log('요청 성공!!!');
      navigate('/admin/video');
    } catch(error) {
      console.log(error);
    }
  };
  return (
    <div style={styles.Container}>
      <div style={styles.titleContainer}>
        <Title subtitle="학생을 위한" title="수업 영상 수정" color="#ffffff" />
      </div>
      <ContentContainer>
        <AdminVODUpdateListItem contentName="수업 이름" value={vodData.title} onChange={(value) => handleInputChange('title', value)} />
        <AdminVODUpdateListItem contentName="반" value={vodData.writer} onChange={(value) => handleInputChange('writer', value)}/>
        <AdminVODUpdateListItem
          contentName="수업 내용"
          customHeight="217px"
          inputHeight="217px"
          value={vodData.content} onChange={(value) => handleInputChange('content', value)}
        />
        <FileUpload
          contentName="수업 영상"
          placeholder="이곳을 클릭하여 선택하거나 파일을 드래그하세요."
          file={vodData.videoFile}
          onFileChange={(file) => handleFileChange('videoFile', file)} 
        />
        <FileUpload
          contentName="썸네일 사진"
          placeholder="이곳을 클릭하여 선택하거나 파일을 드래그하세요."
          file={vodData.thumbnail}
          onFileChange={(file) => handleFileChange('thumbnail', file)}
        />
        <FileUpload
          contentName="수업 자료"
          placeholder="이곳을 클릭하여 선택하거나 파일을 드래그하세요."
          file={vodData.fileList}
          onFileChange={(file) => handleFileChange('fileList', file)}
        />
        <ButtonContainer>
          <Button
            sx={{
              fontSize: "22px",
              backgroundColor: "#5AC467",
              mr: 2,
              color: "#ffffff",
              borderRadius: "20px",
              width: "143px",
              height: "58px",
              "&:hover": {
                backgroundColor: "#5AC467",
              },
            }}
            onClick={handleCancelButton}
          >
            취소하기
          </Button>
          <Button sx={styles.button} onClick={handleSubmit}>수정하기</Button>
        </ButtonContainer>
      </ContentContainer>
    </div>
  );
};

export default AdminVODUpdate;
