import { Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const messageBox = {
  width: "100%",
  height: "10vh",
  display: "flex",
  alignItems: "center",
  backgroundColor: "#f2f2f2",
  padding: "0px",
  cursor: "pointer",
};

const clickedMessageBox = {
  ...messageBox,
  backgroundColor: "#ffffff",
};

const textContainer = {
  flex: 1,
  display: "flex",
  justifyContent: "left",
  alignItems: "center",
};

const messageBoxDeco = {
  backgroundColor: "#5ac467",
  borderRadius: "50%",
  width: "50px",
  height: "50px",
  margin: "0px 30px",
};

const MessengerUser = ({ isSelected, user, onSelect }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (isSelected) {
      onSelect(null);
      navigate("/messenger");
    } else {
      onSelect(user.id);
      navigate(`/messenger/${user.id}`);
    }
  };

  return (
    <Box sx={isSelected ? clickedMessageBox : messageBox} onClick={handleClick}>
      <Box sx={textContainer}>
        <div className="messageBoxDeco" style={messageBoxDeco} />
        <p>
          <b>{user.name}</b> {user.type}
        </p>
      </Box>
    </Box>
  );
};

export default MessengerUser;
