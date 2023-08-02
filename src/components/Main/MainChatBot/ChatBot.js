import React, { useState } from "react";
import ChatBotButton from "./ChatBotButton";
import ChatBotWindow from "./ChatBotWindow/ChatBotWindow";

const ChatBot = () => {
  const [showWindow, setShowWindow] = useState(false);

  const handleWindow = () => {
    setShowWindow(!showWindow);
  };

  return (
    <>
      <ChatBotButton onClick={handleWindow} />
      {showWindow && <ChatBotWindow onClose={handleWindow} />}
    </>
  );
};

export default ChatBot;
