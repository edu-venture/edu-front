import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Paper } from "@mui/material";
import { useParams } from "react-router-dom";
import MessengerUserList from "../components/Messenger/MessengerUserList";
import MessengerChat from "../components/Messenger/MessengerChat";
import DefaultChatPage from "../components/Messenger/DefaultChatPage";

const Messenger = () => {
  const [users, setUsers] = useState([]);
  const [chats, setChats] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get("/MessengerUserData.json")
      .then((response) => {
        setUsers(response.data.User);
      })
      .catch((error) => {
        console.error(error);
      });

    if (id) {
      axios
        .get(`/MessengerChatData.json?userId=${id}`)
        .then((response) => {
          setChats((prevChats) => ({
            ...prevChats,
            [id]: response.data[id],
          }));
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  return (
    <Box
      sx={{
        overflow: "hidden",
        display: "grid",
        gridTemplateColumns: "2.5fr 7.5fr",
        height: "100vh",
        width: "100vw",
        margin: 0,
      }}
    >
      <Paper
        sx={{
          margin: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          background: "#F1F1F1",
          overflowY: "auto",
          borderRight: "1px solid #ccc",
        }}
      >
        <MessengerUserList users={users} />
      </Paper>

      <Paper sx={{ margin: 0, overflowY: "auto" }}>
        {id ? <MessengerChat chats={chats[id] || []} /> : <DefaultChatPage />}
      </Paper>
    </Box>
  );
};

export default Messenger;
