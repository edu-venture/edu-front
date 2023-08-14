import React, { useState } from "react";
import MessengerUser from "./MessengerUser";
import { useParams } from "react-router-dom";

const MessengerUserList = ({ users }) => {
  const { id } = useParams();
  const [selectedUserId, setSelectedUserId] = useState(id);

  const handleSelect = (userId) => {
    setSelectedUserId(userId);
  };

  return (
    <div style={{ width: "100%" }}>
      {users.map((user, index) => (
        <MessengerUser
          key={index}
          user={user}
          isSelected={user.id === selectedUserId}
          onSelect={handleSelect}
        />
      ))}
    </div>
  );
};

export default MessengerUserList;
