import React, { useState } from "react";
import ChatBotButton from "./ChatBotButton";
import ChatBotWindow from "./ChatBotWindow/ChatBotWindow";
import SockJS from "sockjs-client";
import { Stomp } from "@stomp/stompjs";

const ChatBot = () => {
  const [showWindow, setShowWindow] = useState(false);
  var stompClient = null;
  const roomId = Math.random().toString();

  const connect = () => {
    var socket = new SockJS("http://192.168.0.29:8081/ws");
    stompClient = Stomp.over(() => socket);
    stompClient.connect({}, function (frame) {
      console.log("Connected: " + frame);
    });
  };

  const handleWindow = () => {
    setShowWindow(!showWindow);
    if (!showWindow) connect();
  };

  return (
    <>
      <ChatBotButton onClick={handleWindow} />
      {showWindow && (
        <ChatBotWindow
          onClose={handleWindow}
          stompClient={stompClient}
          roomId={roomId}
        />
      )}
    </>
  );
};

export default ChatBot;
