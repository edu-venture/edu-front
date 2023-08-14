import React, { useState, useEffect } from "react";
import styled from "styled-components";

const MessagesWrapper = styled.div`
  overflow-y: auto;
  height: 85vh;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.userType ? "flex-end" : "flex-start")};
  margin: 10px 30px 25px;
`;

const MessageText = styled.p`
  background-color: ${(props) => (props.userType ? "#e4e4e4" : "#5ac467")};
  color: ${(props) => (props.userType ? "#323232" : "#ffffff")};
  border-radius: 20px;
  padding: 15px 20px;
  max-width: 60%;
  line-height: 1.6;
`;

const TimeStamp = styled.div`
  margin: -5px 5px;
  font-size: 13px;
  color: #888;
`;

const InputContainer = styled.div`
  width: 80%;
  height: 60px;
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
  width: 75%;
  height: 80%;
  padding: 0 20px;
  background-color: #f6f6f6;
  border-radius: 30px;
  font-size: 14px;
  border: none;
  outline: none;
`;

const SendButton = styled.button`
  width: 10%;
  height: 80%;
  background-color: #5ac467;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  color: white;
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

const MessengerChat = ({ chats }) => {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState(chats);

  useEffect(() => {
    setMessages(chats);
  }, [chats]);

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    const userMessage = {
      type: "user",
      name: "김한슬",
      message: inputText,
      time: formatTime(),
    };
    setMessages([...messages, userMessage]);
    setInputText("");
  };

  return (
    <div>
      <MessagesWrapper>
        {messages.map((message, index) => (
          <MessageContainer key={index} userType={message.type === "user"}>
            <MessageText userType={message.type === "user"}>
              <div style={{ fontSize: "15px", fontWeight: "bolder" }}>
                {message.name}
              </div>
              <div style={{ fontSize: "16px" }}>{message.message}</div>
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
          <SendButton onClick={handleMessageSubmit}>보 내 기</SendButton>
        </InputContainer>
      </form>
    </div>
  );
};

export default MessengerChat;
