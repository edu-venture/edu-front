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
          // flexDirection: "column",
          // justifyContent: "flex-start",
          // alignItems: "center",
          // borderRight: "1px solid #ccc",
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
