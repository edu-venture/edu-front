import React, { useState } from "react";
import ChatBotButton from "./ChatBotButton";
import ChatBotWindow from "./ChatBotWindow/ChatBotWindow";
import SockJS from "sockjs-client";
import { Stomp } from "@stomp/stompjs";

const ChatBot = () => {
  const [showWindow, setShowWindow] = useState(false);
  const [roomId, setRoomId] = useState(null);
  const [stompClient, setStompClient] = useState(null);
  const [connected, setConnected] = useState(false);

  const connect = () => {
    const newRoomId = Math.floor(Math.random() * 1000000).toString();
    setRoomId(newRoomId);

    let socket = new SockJS("http://192.168.0.29:8081/ws");
    const newStompClient = Stomp.over(() => socket);
    setStompClient(newStompClient);

    newStompClient.connect({}, function (frame) {
      console.log("Connected: " + frame);
      setConnected(true);
    });
  };

  const handleWindow = () => {
    connect();
    setShowWindow(!showWindow);
  };

  return (
    <>
      <ChatBotButton onClick={handleWindow} />
      {showWindow && (
        <ChatBotWindow
          onClose={handleWindow}
          stompClient={stompClient}
          roomId={roomId}
          connected={connected}
        />
      )}
    </>
  );
};

export default ChatBot;
