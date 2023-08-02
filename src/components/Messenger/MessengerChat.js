import React from "react";
// import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import { Box, TextField } from "@mui/material/";

const MessengerChat = () => {
  return (
    <>
      <Box display="flex">
        <form>
          <TextField
            id="outlined-basic"
            label="채팅을 입력하세요"
            variant="outlined"
          />
          <button>test</button>
        </form>
      </Box>
    </>
  );
};

export default MessengerChat;
