import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Paper } from "@mui/material";
import { useParams } from "react-router-dom";
import MessengerUser from "../components/Messenger/MessengerUser";
import MessengerChat from "../components/Messenger/MessengerChat";

const Messenger = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [chats, setChats] = useState([]);

  const { id } = useParams();

  const changeUser = (id) => {
    setSelectedUser(id);
    setChats([]);
  };

  useEffect(() => {
    changeUser(id);
    axios
      .get("/MessengerUserData.json")
      .then((response) => {
        setUsers(response.data.User);
      })
      .catch((error) => {
        console.error("There was an error retrieving the user data!", error);
      });
  }, [id]);

  useEffect(() => {
    if (selectedUser) {
      axios
        .get(`/MessengerChatData.json?userId=${selectedUser}`)
        .then((response) => {
          setChats((prevChats) => ({
            ...prevChats,
            [selectedUser]: response.data.Chat,
          }));
        })
        .catch((error) => {
          console.error("There was an error retrieving the chat data!", error);
        });
    }
  }, [selectedUser]);

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
        {users.map((element, index) => (
          <MessengerUser
            key={index}
            isSelected={selectedUser === element.id}
            onSelect={() => changeUser(element.id)}
            user={element.name}
            id={element.id}
          />
        ))}
      </Paper>

      <Paper sx={{ margin: 0, overflowY: "auto" }}>
        <MessengerChat
          selectedUser={selectedUser}
          chats={chats[selectedUser] || []}
        />
      </Paper>
    </Box>
  );
};

export default Messenger;
