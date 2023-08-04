import { Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const messageBox = {
  position: "relative", // <--- Add this
  backgroundColor: "#f2f2f2",
  width: "100vw",
  height: "12vh",
  display: "flex",
  alignItems: "center",
  padding: "0px",
  cursor: "pointer",
};

const clickedMessageBox = {
  ...messageBox,
  backgroundColor: "#ffffff",
};

const messageBoxDeco = {
  position: "relative",
  backgroundColor: "#5ac467",
  borderRadius: "50%",
  width: "50px",
  height: "50px",
  left: "-30px",
};

const textContainer = {
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const MessengerUser = ({ isSelected, user, id, onSelect }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (isSelected) {
      onSelect(null);
      navigate("/messenger");
    } else {
      onSelect(id);
      navigate(`/messenger/${id}`);
    }
  };

  return (
    <Box sx={isSelected ? clickedMessageBox : messageBox} onClick={handleClick}>
      <Box sx={textContainer}>
        <div className="messageBoxDeco" style={messageBoxDeco} />
        <h3 style={{ color: "black", margin: 0 }}>{user}</h3>
      </Box>
    </Box>
  );
};

export default MessengerUser;
