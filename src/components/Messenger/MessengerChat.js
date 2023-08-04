import React, { useState, useEffect } from "react";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import { Box } from "@mui/material";
import styled from "styled-components";

const InputContainer = styled.div`
  width: 80%;
  height: 9.5%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  right: -4vw;
  padding: 10px;
  overflow: hidden;
`;

const InputMessage = styled.input`
  width: 70%;
  height: 65%;
  padding-left: 20px;
  background-color: #f6f6f6;
  border-radius: 30px;
  font-size: 14px;
  border: none;
  outline: none;
`;

const SendButton = styled.button`
  width: 15%;
  height: 65%;
  background-color: #5ac467;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: white;
`;
const MessagesWrapper = styled.div`
  overflow-y: auto;
  max-height: 90vh; // Adjust this value based on your layout
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.userType ? "flex-end" : "flex-start")};
  margin-bottom: 10px;
  margin-right: 50px;
  margin-left: 50px;
`;

const MessageText = styled.p`
  background-color: ${(props) => (props.userType ? "#5AC467" : "#f1f0f0")};
  border-radius: 18px;
  padding: 10px;
  max-width: 60%;
  line-height: 1.3;
`;

const TimeStamp = styled.div`
  font-size: 10px;
  color: #888;
`;

const MessengerChat = ({ chats }) => {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState(chats);

  useEffect(() => {
    setMessages(chats);
  }, [chats]);

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    const time = new Date();
    let hour = time.getHours();
    const minute = String(time.getMinutes()).padStart(2, "0");
    const ampm = hour >= 12 ? "오후" : "오전";
    hour = hour % 12 || 12;
    hour = String(hour).padStart(2, "0");

    const userMessage = {
      type: "user",
      name: "김한슬",
      message: inputText,
      time: `${ampm} ${hour}:${minute}`,
    };
    setMessages([...messages, userMessage]);
    setInputText("");
  };

  return (
    <Box>
      <MessagesWrapper>
        {messages.map((message, index) => (
          <MessageContainer key={index} userType={message.type === "user"}>
            <MessageText userType={message.type === "user"}>
              {message.name}: {message.message}
            </MessageText>
            <TimeStamp userType={message.type === "user"}>
              {message.time}
            </TimeStamp>
          </MessageContainer>
        ))}
      </MessagesWrapper>
      <form>
        <InputContainer>
          <InputMessage
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <SendButton onClick={handleMessageSubmit}>
            <ArrowUpwardRoundedIcon />
          </SendButton>
        </InputContainer>
      </form>
    </Box>
  );
};

export default MessengerChat;
