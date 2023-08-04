import React, { useEffect, useRef, useState } from "react";
import ChatBotHeader from "./ChatBotHeader";
import ChatBotContent from "./ChatBotContent";
import ChatBotInput from "./ChatBotInput";
import styled from "styled-components";

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

const formatTime = () => {
  const time = new Date();
  let hour = time.getHours();
  const minute = String(time.getMinutes()).padStart(2, "0");
  const ampm = hour >= 12 ? "오후" : "오전";
  hour = hour % 12 || 12;
  hour = String(hour).padStart(2, "0");

  return `${ampm} ${hour}:${minute}`;
};

const ChatBotWindow = ({ onClose, stompClient, roomId }) => {
  const [chatLog, setChatLog] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const chatContentRef = useRef(null);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleSendMessage = () => {
    const userMessage = {
      type: "user",
      name: "김한슬",
      message: inputMessage,
      time: formatTime(),
    };
    setChatLog([...chatLog, userMessage]);

    if (stompClient && roomId) {
      stompClient.send(
        `/app/sendMessage/${roomId}`,
        {},
        JSON.stringify(inputMessage)
      );
    }

    setInputMessage("");
  };

  useEffect(() => {
    if (stompClient) {
      stompClient.subscribe(`/topic/public/${roomId}`, function (message) {
        const receivedMessage = JSON.parse(message.body);

        const time = new Date();
        let hour = time.getHours();
        const minute = String(time.getMinutes()).padStart(2, "0");
        const ampm = hour >= 12 ? "오후" : "오전";
        hour = hour % 12 || 12;
        hour = String(hour).padStart(2, "0");

        const botMessage = {
          type: "bot",
          name: "챗봇",
          message: receivedMessage.content,
          time: `${ampm} ${hour}:${minute}`,
        };

        setChatLog((prevChatLog) => [...prevChatLog, botMessage]);
      });
    }

    if (chatContentRef.current) {
      chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
    }
  }, [stompClient, chatLog, roomId]);

  return (
    <ChatWrapper>
      <ChatBotHeader onClose={onClose} />
      <ChatBotContent chatLog={chatLog} ref={chatContentRef} />
      <ChatBotInput
        inputMessage={inputMessage}
        setInputMessage={setInputMessage}
        handleKeyPress={handleKeyPress}
        handleSendMessage={handleSendMessage}
        stompClient={stompClient}
        roomId={roomId}
      />
    </ChatWrapper>
  );
};

export default ChatBotWindow;
