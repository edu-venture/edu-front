import React, { useState, useEffect } from "react";
const ncloudchat = require("ncloudchat");

const NCloudChat = () => {
  // 상태 관리: 사용자가 입력한 메시지를 저장
  const [message, setMessage] = useState("");

  // 상태 관리: 모든 채팅 메시지를 저장
  const [allMessages, setAllMessages] = useState([]);

  useEffect(() => {
    const initializeAndFetch = async () => {
      // nCloud 채팅 서비스 초기화
      const nc = new ncloudchat.Chat();
      nc.initialize("d30c0ab7-2e15-40dd-816c-89ae0b868caf");

      // nCloud 채팅 서버에 연결
      await nc.connect({
        id: "0cf0f5fa-78f2-4bcd-b510-2566f71c0c1f",
        name: "구민수",
      });

      // 특정 채널을 구독(채팅방에 참여)
      await nc.subscribe("5a8538b0-a669-4ce0-8fab-77928abac722");

      // 필터, 정렬, 옵션 설정으로 메시지 가져오기
      const filter = { channel_id: "5a8538b0-a669-4ce0-8fab-77928abac722" };
      const sort = { created_at: -1 };
      const option = { offset: 0, per_page: 100 };

      // 해당 채널의 메시지를 가져오기
      const fetchedMessages = await nc.getMessages(filter, sort, option);

      // 가져온 메시지를 상태에 저장
      setAllMessages(fetchedMessages ? fetchedMessages.edges : []);
    };

    // 위에서 정의한 함수 실행
    initializeAndFetch();
  }, []);

  // 사용자가 메시지를 전송할 때 실행되는 함수
  const handleSendMessage = async (e) => {
    e.preventDefault();

    // nCloud 채팅 서비스 초기화
    const nc = new ncloudchat.Chat();
    nc.initialize("d30c0ab7-2e15-40dd-816c-89ae0b868caf");

    // 메시지 전송
    await nc.sendMessage("5a8538b0-a669-4ce0-8fab-77928abac722", {
      type: "text",
      message,
    });

    // 입력 상자 초기화
    setMessage("");
  };

  return (
    <>
      {/* 메시지 전송 폼 */}
      <form onSubmit={handleSendMessage}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">전송</button>
      </form>

      {/* 모든 채팅 메시지를 리스트로 표시 */}
      {allMessages.map((element, index) => (
        <li key={index}>{element.node.content}</li>
      ))}
    </>
  );
};

export default NCloudChat;
