import React, { useState } from "react";
import { Box } from "@mui/material";
import MessengerUser from "./MessengerUser";
import { useParams } from "react-router-dom";

const MessengerUserList = ({ users }) => {
  const { id } = useParams();
  const [selectedUserId, setSelectedUserId] = useState(id);

  const handleSelect = (userId) => {
    setSelectedUserId(userId);
  };

  return (
    <Box>
      {users.map((user, index) => (
        <MessengerUser
          key={index}
          user={user.name}
          id={user.id}
          isSelected={user.id === selectedUserId}
          onSelect={handleSelect}
        />
      ))}
    </Box>
  );
};

export default MessengerUserList;
