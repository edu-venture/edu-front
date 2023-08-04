import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const messageBox = {
  position: "relative",
  backgroundColor: "#f2f2f2",
  width: "100%",
  height: "12vh",
  display: "flex",
  alignItems: "center",
  padding: "0px",
};

const clickedMessageBox = {
  ...messageBox,
  backgroundColor: "#ffffff",
};

const messageBoxDeco = {
  position: "absolute",
  left: "50px",
  backgroundColor: "#5ac467",
  borderRadius: "50%",
  width: "50px",
  height: "50px",
};

const textContainer = {
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const MessengerUser = ({ isSelected, onSelect, user, id }) => {
  return (
    <Box sx={isSelected ? clickedMessageBox : messageBox} onClick={onSelect}>
      <div className="messageBoxDeco" style={messageBoxDeco} />
      <Box sx={textContainer}>
        <Link to={`/messenger/${id}`}>
          <h3
            style={{
              color: "black",
              margin: 0,
            }}
          >
            {user}
          </h3>
        </Link>
      </Box>
    </Box>
  );
};

export default MessengerUser;
