import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  width: 100%;
  height: 9.5%;
  display: flex;
  align-items: center;
  justify-content: center;
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
  width: 20%;
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

const ChatBotInput = ({
  inputMessage,
  setInputMessage,
  handleKeyPress,
  handleSendMessage,
}) => (
  <InputContainer>
    <InputMessage
      type="text"
      value={inputMessage}
      onChange={(e) => setInputMessage(e.target.value)}
      onKeyPress={handleKeyPress}
    />
    <SendButton onClick={handleSendMessage}>보내기</SendButton>
  </InputContainer>
);

export default ChatBotInput;
