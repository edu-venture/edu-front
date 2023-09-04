import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import VideoSection from "../components/Streaming/VideoSection/VideoSection";
import ChatSection from "../components/Streaming/ChatSection/ChatSection";
import axios from "axios";
import { ChannelContext } from "../context/context";
import { Stomp } from "@stomp/stompjs";
import SockJS from 'sockjs-client';


const MainContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const Streaming = () => {
  const [chatLog, setChatLog] = useState([]);
  const [streamingUrl, setStreamingUrl] = useState([]);
  const { channelInfo, setChannelInfo} = useContext(ChannelContext);
  const [userType, setUserType] = useState(sessionStorage.getItem('userType'));
  const [stompClient, setStompClient] = useState(null);
  const [lectureId, setLectureId] = useState(0);

  useEffect(() => {
    const savedChannelInfo = JSON.parse(sessionStorage.getItem('channelInfo'));
    if (savedChannelInfo) {
      setChannelInfo(savedChannelInfo);
    }
  }, []);


  useEffect(() => {

    const channelId = channelInfo.channelId;
    const lectureId = channelInfo.lectureId;
    
    console.log(channelId, lectureId);
    const getStreamingUrl = async () => {
      const url = (userType === 'teacher' || userType === 'admin')
      ? `http://localhost:8081/live/url/${channelId}` 
      : 'http://localhost:8081/lecture/student/lecture';    
      try {
        
        const response = await axios.get(url, 
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem('ACCESS_TOKEN')}`
            }
          }
        );
        console.log(response.data);
        setStreamingUrl(response.data.items);
        if(userType === 'student') {
          setLectureId(response.data.item.lectureId);
        }
        // if(response.data.errorMessage !== null) {
        //   alert(response.data.errorMessage);
        // }
      } catch(error) {
        console.log(error);
        const message = userType === 'teacher' || userType === 'admin' 
        ? '강의를 송출할 수 없습니다 다시 채널을 만들어 주세요' 
        : '현재 수강 중인 강의가 없습니다';
      alert(message);
      }
    };
    
    if(userType === 'teacher' || userType === 'admin') {
      if(channelId)
        getStreamingUrl();
    } else {
      getStreamingUrl();
    }

    const socket = new SockJS('http://localhost:8081/ws');
    const client = Stomp.over(socket);

    setStompClient(client);

    client.connect({}, (frame) => {
      console.log('Connected: ' + frame);
      client.subscribe(`/topic/lecture/${lectureId}`, (message) => {
        const newMessage = JSON.parse(message.body).message;
        setChatLog((prevChatLog) => [...prevChatLog, newMessage]);
      });
    });

    return () => {
      client.disconnect();
    };
    
  }, [channelInfo]);

  const addEmojiMessage = (emoji, type) => {
    const userName = sessionStorage.getItem("userName") || "익명";
    const messageType = type === "응원하기" ? "응원" : "반응";
    const message = `${emoji} ${messageType}을 보냈습니다.`;

    const time = new Date();
    let hour = time.getHours();
    const minute = String(time.getMinutes()).padStart(2, "0");
    const ampm = hour >= 12 ? "오후" : "오전";
    hour = hour % 12 || 12;
    hour = String(hour).padStart(2, "0");

    setChatLog((prevChatLog) => [
      ...prevChatLog,
      {
        name: userName,
        message: message,
        time: `${ampm} ${hour}: ${minute}`,
      },
    ]);

    console.log(chatLog);
  };

  return (
    <MainContainer>
      <VideoSection addEmojiMessage={addEmojiMessage} streamingUrl={streamingUrl} userType={userType}/>
      <ChatSection chatLog={chatLog} setChatLog={setChatLog} stompClient={stompClient} lectureId={lectureId}/>
    </MainContainer>
  );
};

export default Streaming;
