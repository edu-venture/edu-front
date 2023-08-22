import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Paper } from "@mui/material";
import { useParams } from "react-router-dom";
import MessengerUserList from "../components/Messenger/MessengerUserList";
import MessengerChat from "../components/Messenger/MessengerChat";
import DefaultChatPage from "../components/Messenger/DefaultChatPage";

const Messenger = () => {
  const [chats, setChats] = useState([]);
  const [channel, setChannel] = useState([]);
  const { id } = useParams();
  const selectedUser = channel.find((ch) => ch.id === id);
  // const selectedChat = chats.channel_id;
  // 선택하는 채팅방에 대한 정보
  // console.log("누구냐?", selectedUser);
  // id: 내가 선택한 채팅방 id (상대방)
  // name: 내가 선택한 채팅방 이름 (상대 이름)
  // user: 입력하는 사람의 정보 {더미}
  // user.name: 입력 상대이름 (나일수도, 다른 사람일수도)
  // user_id: 입력 상대 id (나일수도, 다른 사람일수도)

  useEffect(() => {
    // 채널
    axios
      .get(
        "https://dashboard-api.ncloudchat.naverncp.com/v1/api/channels?filter={}",
        {
          headers: {
            "Content-Type": "application/json",
            "x-project-id": "ea3a8bf5-e78c-4f9b-830d-e66bf1d4040b",
            "x-api-key": "c46a052f7681e29afc15cd5f962ca3e7c92ac10e423b41b6",
          },
        }
      )
      .then((response) => {
        setChannel(response.data);
      })

      .catch((error) => {
        console.error("채널", error);
      });
  }, []);

  useEffect(() => {
    // 채팅 내용
    if (channel.length === 0) return;

    const fetchChatData = async () => {
      const chatData = await Promise.all(
        channel.map(async (ch, index) => {
          const response = await axios.get(
            `https://dashboard-api.ncloudchat.naverncp.com/v1/api/messages/${ch.id}?filter={}&sort=%7B%22created_at%22%3A%22-1%22%7D`,
            {
              headers: {
                "Content-Type": "application/json",
                "x-project-id": "ea3a8bf5-e78c-4f9b-830d-e66bf1d4040b",
                "x-api-key": "c46a052f7681e29afc15cd5f962ca3e7c92ac10e423b41b6",
              },
            }
          );
          // 뭐 오노? : 채팅방 순으로 해당 채팅방의 내용 출력
          // 0 : 이완재
          // 1 : 김한슬
          // ...
          // 7 : EduVenture
          // response.data : 채팅방 내용을 담는다. (모든 내용은 아님)
          // response.data : [{}, {}, ...]
          // response.data[0] ... [3] : 채팅 1개씩 표출 (시간 순서 아님...)
          // response.data[]
          // content: 채팅 세부 내용
          // created_at (sended_at): 채팅 시간
          // sender: 채팅을 보낸 상대의 정보
          // sender.id: 채팅 보낸 상대 id
          // sender.name: 채팅 보낸 상대 name
          console.log(`뭐 오노? ${index}`, response);
          return { [ch.id]: response.data };
        })
      );
      setChats(Object.assign({}, ...chatData));
    };
    fetchChatData();
  }, [channel]);

  console.log(chats);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "25% 75%",
        width: "100vw",
        height: "calc(100vh - 50px)",
        margin: 0,
      }}
    >
      <Paper
        sx={{
          margin: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          overflowY: "auto",
          background: "#f2f2f2",
        }}
      >
        <MessengerUserList users={channel} />
      </Paper>

      <Paper sx={{ margin: 0, overflowY: "auto" }}>
        {id ? (
          <MessengerChat
            chats={chats[id] || []}
            selectedUser={selectedUser}
            channel_id={id}
          />
        ) : (
          <DefaultChatPage />
        )}
      </Paper>
    </Box>
  );
};

export default Messenger;
