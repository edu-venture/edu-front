import React, { useState, useEffect } from "react";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import { Box, TextField } from "@mui/material";

const inputContainer = {
  display: "flex",
  justifyContent: "space-between",
  position: "fixed",
  bottom: 0,
  width: "100%",
  backgroundColor: "white",
  padding: "10px",
};

const MessengerChat = ({ selectedUser, chats }) => {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState(chats);

  useEffect(() => {
    setMessages(chats);
  }, [chats]);

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    setMessages([...messages, inputText]);
    setInputText("");
  };

  return (
    <Box>
      {messages.map((message, index) => (
        <p key={index}>{message}</p>
      ))}

      <Box sx={inputContainer}>
        <form onSubmit={handleMessageSubmit}>
          <TextField
            id="outlined-basic"
            label="채팅을 입력하세요"
            variant="outlined"
            fullWidth
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button
            type="submit"
            style={{ borderRadius: "50%", background: "#5AC467" }}
          >
            <ArrowUpwardRoundedIcon sx={{ fontSize: "45px" }} />
          </button>
        </form>
      </Box>
    </Box>
  );
};

export default MessengerChat;
