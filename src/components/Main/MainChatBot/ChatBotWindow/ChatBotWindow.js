import React, { useEffect, useRef, useState } from "react";
import ChatBotHeader from "./ChatBotHeader";
import ChatBotContent from "./ChatBotContent";
import ChatBotInput from "./ChatBotInput";
import styled from "styled-components";
import botData from "../../../../utils/botData.json";

const ChatWrapper = styled.div`
  width: 25%;
  height: 75%;
  display: flex;
  position: fixed;
  z-index: 1;
  margin: 60px 130px;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 0 10px 0px gray;
`;

const ChatBotWindow = ({ onClose }) => {
  const [chatLog, setChatLog] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const chatContentRef = useRef(null);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleSendMessage = () => {
    const time = new Date();
    let hour = time.getHours();
    const minute = String(time.getMinutes()).padStart(2, "0");
    const ampm = hour >= 12 ? "오후" : "오전";
    hour = hour % 12 || 12;
    hour = String(hour).padStart(2, "0");

    const userMessage = {
      type: "user",
      name: "김한슬",
      message: inputMessage,
      time: `${ampm} ${hour}:${minute}`,
    };
    setChatLog([...chatLog, userMessage]);
    setInputMessage("");

    const randomResponse = botData[Math.floor(Math.random() * botData.length)];
    const botMessage = {
      type: "bot",
      name: "챗봇",
      message: randomResponse,
      time: `${ampm} ${hour}:${minute}`,
    };
    setChatLog((prevChatLog) => [...prevChatLog, botMessage]);
  };

  useEffect(() => {
    if (chatContentRef.current) {
      chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
    }
  }, [chatLog]);

  return (
    <ChatWrapper>
      <ChatBotHeader onClose={onClose} />
      <ChatBotContent chatLog={chatLog} ref={chatContentRef} />
      <ChatBotInput
        inputMessage={inputMessage}
        setInputMessage={setInputMessage}
        handleKeyPress={handleKeyPress}
        handleSendMessage={handleSendMessage}
      />
    </ChatWrapper>
  );
};

export default ChatBotWindow;
