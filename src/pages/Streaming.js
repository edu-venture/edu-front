import React, { useState } from "react";
import styled from "styled-components";
import VideoSection from "../components/Streaming/VideoSection/VideoSection";
import ChatSection from "../components/Streaming/ChatSection/ChatSection";
import { chatData } from "../utils/chatData";

const MainContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const Streaming = () => {
  const [chatLog, setChatLog] = useState(chatData);

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

    setChatLog([
      ...chatLog,
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
      <VideoSection addEmojiMessage={addEmojiMessage} />
      <ChatSection initialChatLog={chatLog} />
    </MainContainer>
  );
};

export default Streaming;
