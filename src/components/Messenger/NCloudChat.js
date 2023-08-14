import React, { useState, useEffect, useRef } from "react";
import * as ncloudchat from "ncloudchat";
import axios from "axios";

function NCloudChat() {
  // 상태 설정
  const [channelName, setChannelName] = useState("");
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [channel, setChannel] = useState(null);
  const [user, setUser] = useState("");
  const ncRef = useRef(new ncloudchat.Chat());

  // 컴포넌트가 마운트될 때 채팅 서버와 연결
  useEffect(() => {
    async function connectToChat() {
      ncRef.current.initialize("d30c0ab7-2e15-40dd-816c-89ae0b868caf");
      await ncRef.current.connect({
        id: "ab60c9f0-7b79-4ee8-9d77-9275bbbc75be",
        name: "구민수",
      });
    }
    connectToChat();
  }, []);

  // 채널 생성 및 채널 상태 업데이트
  const createAndSubscribeChannel = async () => {
    const newChannel = await ncRef.current.createChannel({
      type: "PUBLIC",
      name: channelName,
    });
    setChannel(newChannel);
  };

  // 채널을 구독하고 메시지를 보여줌
  const subscribeChannel = async () => {
    const channels = await ncRef.current.getChannels(
      { name: channelName },
      { created_at: -1 },
      { offset: 0, per_page: 10 }
    );
    const foundChannel = channels.edges[0].node;
    setChannel(foundChannel);
    await ncRef.current.subscribe(foundChannel.id);
    showMessage(foundChannel.id);
  };

  // 새로운 메시지 전송
  const sendMessage = async () => {
    if (!channel) {
      alert("채널이 없습니다.");
      return;
    }
    await ncRef.current.sendMessage(channel.id, {
      type: "text",
      message: message,
    });
    setMessage("");
    showMessage(channel.id);
  };

  // 이미지를 포함한 메시지 전송
  const sendImgMessage = async () => {
    if (!channelName) {
      alert("채널 이름이 없습니다.");
      return;
    }
    if (!channel) {
      alert("채널을 찾을 수 없습니다.");
      return;
    }
    const file = document.getElementById("uploadfile").files[0];
    if (!file) {
      alert("이미지가 없습니다.");
      return;
    }
    const response = await ncRef.current.sendImage(channel.id, file);
    const img_base = "https://dashboard-api.ncloudchat.naverncp.com";
    const img_url = img_base + response.file.url;

    const imgElement = document.createElement("img");
    imgElement.src = img_url;
    imgElement.style.maxWidth = "100%";

    const pElement = document.getElementById("imageContainer");
    if (!pElement) {
      console.error("Element with id 'imageContainer' not found");
      return;
    }
    pElement.innerHTML = "";
    pElement.appendChild(imgElement);

    const newMessage =
      response.created_at +
      "\n" +
      response.sender.name +
      ": " +
      response.content;
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    showMessage(channel.id);
  };

  // 채널에 저장된 메시지를 가져옴
  const showMessage = async (channel_id) => {
    const filter = { channel_id: channel_id };
    const sort = { created_at: -1 };
    const option = { offset: 0, per_page: 100 };
    const messagesData = await ncRef.current.getMessages(filter, sort, option);
    setMessages(messagesData.edges);
  };

  // 회원 조회 API
  // useEffect(() => {
  //   axios
  //     .get("https://dashboard-api.ncloudchat.naverncp.com/v1/api/members")
  //     .then((res) => setUser(res.data));
  //   console.log(user);
  // }, []);

  return (
    <>
      {/* <MessengerChat /> */}
      <div>
        {/* 메인 제목 */}
        <h1>NCloud Chat</h1>

        {/* 채널 이름 입력 */}
        <input
          value={channelName}
          onChange={(e) => setChannelName(e.target.value)}
        />

        {/* 채널 생성 및 접속 버튼 */}
        <button onClick={createAndSubscribeChannel}>채널 생성</button>
        <button onClick={subscribeChannel}>채널 접속</button>

        <div>
          {/* 현재 채널의 이름 */}
          <h1>{channelName}</h1>

          {/* 메시지 입력 필드 */}
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="메시지를 입력하세요"
          />

          {/* 메시지 및 이미지 전송 버튼 */}
          <button onClick={sendMessage}>전송</button>
          <button onClick={sendImgMessage}>이미지 전송</button>

          {/* 이미지 파일 업로드 필드 */}
          <input type="file" id="uploadfile" />

          {/* 메시지 목록 표시 */}
          <div>
            {messages.map((message, index) => {
              if (
                message &&
                message.created_at &&
                message.sender &&
                message.content
              ) {
                return (
                  <p key={index}>
                    {message.created_at} {message.sender.name}:{" "}
                    {message.content}
                  </p>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default NCloudChat;
