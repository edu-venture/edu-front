import { Paper, Box } from "@mui/material";
import React, { useState } from "react";
import MessengerUser from "../components/Messenger/MessengerUser";

const Messenger = () => {
  const [selectedBox, setSelectedBox] = useState(null);

  return (
    <Box
      sx={{
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
        }}
      >
        {/* 데이터 받아 map */}
        {["사용자명1", "사용자명2", "사용자명3"].map((user, index) => (
          <MessengerUser
            key={index}
            isSelected={selectedBox === index}
            onSelect={() => setSelectedBox(index)}
            user={user}
          ></MessengerUser>
        ))}
      </Paper>
      <Paper sx={{ margin: 0 }}>채팅</Paper>
    </Box>
  );
};

export default Messenger;
