// import { ncloudchat } from "ncloudchat";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
const ncloudchat = require("ncloudchat");

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
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  right: -2.5vw;
  padding: 10px;
  overflow: hidden;
`;

const InputMessage = styled.input`
  width: 80%;
  height: 80%;
  padding: 0 20px;
  background-color: #ededed;
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
  margin-left: 15px;
`;

// const formatTime = () => {
//   const time = new Date();
//   let hour = time.getHours();
//   const minute = String(time.getMinutes()).padStart(2, "0");
//   const ampm = hour >= 12 ? "오후" : "오전";
//   hour = hour % 12 || 12;
//   hour = String(hour).padStart(2, "0");

//   return `${ampm} ${hour}:${minute}`;
// };

const MessengerChat = ({ chats, selectedUser }) => {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState(chats);
  const sortedMessages = messages.sort(
    (a, b) => new Date(a.sended_at) - new Date(b.sended_at)
  );
  console.log("chat에 관한 data", chats);
  useEffect(() => {
    setMessages(chats);
  }, [chats]);

  console.log("이건 chat", chats);
  console.log("이건 selectedUser", selectedUser);
  // const handleMessageSubmit = (e) => {
  //   e.preventDefault();

  //   const userMessage = {
  //     userType: "이완재",
  //     message: inputText,
  //     sended_at: formatTime(),
  //   };
  //   setMessages([...messages, userMessage]);
  //   setInputText("");
  // };

  const handleMessageSubmit = async (e) => {
    e.preventDefault();
    // nCloud 채팅 서비스 초기화
    const nc = new ncloudchat.Chat();
    nc.initialize("ea3a8bf5-e78c-4f9b-830d-e66bf1d4040b"); // 프로젝트 id로 초기화
    // nCloud 채팅 서버에 연결
    await nc.connect({
      id: "522244b0-9bfb-4507-a310-270d89f11c1a",
      name: "Admin",
    });

    // 특정 채널을 구독(채팅방에 참여)     /** */
    await nc.subscribe("a0b43d8f-ea0a-49de-aa51-489cc558a3f4");
    // 메시지 전송
    await nc.sendMessage("a0b43d8f-ea0a-49de-aa51-489cc558a3f4", {
      // 채널 id에 보내기
      type: "text",
      message: inputText,
    });

    // 입력 상자 초기화
    setInputText("");
    //이게 원래코드
    // const userMessage = {
    //   userType: "user",
    //   message: inputText,
    //   sended_at: formatTime(),
    // };
    // setMessages([...messages, userMessage]);

    // // 선택된 사용자에게 메시지 보내기

    // console.log("내가 선택한 사용자의 id", messages.channel_id);
    // // const USER_ID = "0cf0f5fa-78f2-4bcd-b510-2566f71c0c1f"; // 내 ID (이완재)
    // await ncloudchat?.sendMessage(messages.channel_id, {
    //   type: "text",
    //   // mentions: [USER_ID],
    //   message: messages,
    // });

    // setInputText("");
  };

  const formatSendedAt = (sendedAt) => {
    const date = new Date(sendedAt);
    let hour = date.getHours();
    const minute = String(date.getMinutes()).padStart(2, "0");
    const ampm = hour >= 12 ? "오후" : "오전";
    hour = hour % 12 || 12;

    return `${ampm} ${hour}:${minute}`;
  };
  console.log("이건 srotedMessages", sortedMessages);
  return (
    <div>
      <MessagesWrapper>
        {sortedMessages.map((message, index) => (
          <MessageContainer
            key={index}
            userType={message.sender?.name === "Admin"}
          >
            <MessageText userType={message.sender?.name === "Admin"}>
              <div style={{ fontSize: "15px", fontWeight: "bolder" }}>
                {message.sender?.name}
              </div>
              <div style={{ fontSize: "16px" }}>{message.content}</div>
            </MessageText>
            <TimeStamp>{formatSendedAt(message?.sended_at)}</TimeStamp>
          </MessageContainer>
        ))}
      </MessagesWrapper>
      <form onSubmit={handleMessageSubmit}>
        <InputContainer>
          <InputMessage
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <SendButton>보 내 기</SendButton>
        </InputContainer>
      </form>
    </div>
  );
};

export default MessengerChat;
