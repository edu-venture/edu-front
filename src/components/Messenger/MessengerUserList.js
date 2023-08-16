import React, { useState } from "react";
import { useParams } from "react-router-dom";
import MessengerUser from "./MessengerUser";

const MessengerUserList = ({ users, channel }) => {
  const { id } = useParams();
  console.log(id);
  const [selectedUserId, setSelectedUserId] = useState(id);

  const handleSelect = (userId) => {
    setSelectedUserId(userId);
  };

  return (
    <div style={{ width: "100%" }}>
      {Object.entries(users).map(([, value]) => {
        return (
          <div key={value.id}>
            <MessengerUser
              userInfo={value}
              isSelected={value.id === id}
              onSelect={handleSelect}
              channel={channel}
            />
          </div>
        );
      })}
    </div>
  );
};

export default MessengerUserList;
