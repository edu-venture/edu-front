import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Paper } from "@mui/material";
import { useParams } from "react-router-dom";
import MessengerUserList from "../components/Messenger/MessengerUserList";
import MessengerChat from "../components/Messenger/MessengerChat";
import DefaultChatPage from "../components/Messenger/DefaultChatPage";

const Messenger = () => {
  // const [users, setUsers] = useState([]);
  const [chats, setChats] = useState([]);
  const [channel, setChannel] = useState([]);
  const { id } = useParams();
  // useEffect(() => {       이 친구는.... 사실상 필요가 없습니다.... 유저가 필요할 때 주석을 풀어서 사용하세요....
  // 유저 이름
  //   axios
  //     .get(
  //       "https://dashboard-api.ncloudchat.naverncp.com/v1/api/members?filter={}",
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           "x-project-id": "d30c0ab7-2e15-40dd-816c-89ae0b868caf",
  //           "x-api-key": "bcea402a90cd3236d4cc69455887d5b0de4d2edb7f05610c",
  //         },
  //       }
  //     )
  //     .then((response) => {
  //       setUsers(response.data);
  //     })

  //     .catch((error) => {
  //       console.error("유저" + error);
  //     });
  // }, []);

  useEffect(() => {
    // 채널
    axios
      .get(
        "https://dashboard-api.ncloudchat.naverncp.com/v1/api/channels?filter={}",
        {
          headers: {
            "Content-Type": "application/json",
            "x-project-id": "d30c0ab7-2e15-40dd-816c-89ae0b868caf",
            "x-api-key": "bcea402a90cd3236d4cc69455887d5b0de4d2edb7f05610c",
          },
        }
      )
      .then((response) => {
        setChannel(response.data);
      })

      .catch((error) => {
        console.error("채널" + error);
      });
  }, []);

  useEffect(() => {
    // 채팅 내용
    channel.forEach((channel) =>
      axios
        .get(
          `https://dashboard-api.ncloudchat.naverncp.com/v1/api/messages/${channel.id}?filter={}`,
          {
            headers: {
              "Content-Type": "application/json",
              "x-project-id": "d30c0ab7-2e15-40dd-816c-89ae0b868caf",
              "x-api-key": "bcea402a90cd3236d4cc69455887d5b0de4d2edb7f05610c",
            },
          }
        )
        .then((response) => {
          setChats((prevChats) => ({
            ...prevChats,
            [channel.id]: response.data,
          }));
        })
        .catch((error) => {
          console.error("채팅" + error);
        })
    );
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
        {id ? <MessengerChat chats={chats[id] || []} /> : <DefaultChatPage />}
      </Paper>
    </Box>
  );
};

export default Messenger;
