import React, { useEffect, useRef, useState } from "react";
import { chatData } from "../../../utils/chatData";
import ChatContent from "./ChatContent";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import styled from "styled-components";

const ChatWrapper = styled.div`
  width: 25%;
  height: 100%;
  flex-direction: column;
`;

const ChatSection = ({ initialChatLog = chatData }) => {
  const [chatLog, setChatLog] = useState(initialChatLog);
  const [inputMessage, setInputMessage] = useState("");
  const chatContentRef = useRef(null);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleSendMessage = () => {
    const userName = sessionStorage.getItem("userName") || "익명";
    const time = new Date();
    let hour = time.getHours();
    const minute = String(time.getMinutes()).padStart(2, "0");

    const ampm = hour >= 12 ? "오후" : "오전";
    hour = hour % 12 || 12;
    hour = String(hour).padStart(2, "0");

    setChatLog([
      ...chatLog,
      {
        name: `${userName}`,
        message: inputMessage,
        time: `${ampm} ${hour}:${minute}`,
      },
    ]);
    setInputMessage("");
  };

  useEffect(() => {
    setChatLog(initialChatLog);
  }, [initialChatLog]);

  useEffect(() => {
    if (chatContentRef.current) {
      chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
    }
  }, [chatLog]);

  return (
    <ChatWrapper>
      <ChatHeader />
      <ChatContent chatLog={chatLog} ref={chatContentRef} />
      <ChatInput
        inputMessage={inputMessage}
        setInputMessage={setInputMessage}
        handleKeyPress={handleKeyPress}
        handleSendMessage={handleSendMessage}
      />
    </ChatWrapper>
  );
};

export default ChatSection;
