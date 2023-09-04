import React from "react";
import { useParams } from "react-router-dom";
import MessengerUser from "./MessengerUser";

const MessengerUserList = ({ channel, user }) => {
  const { id } = useParams();
  // console.log(id);
  // const [selectedUserId, setSelectedUserId] = useState(id);

  // const handleSelect = (userId) => {
  //   setSelectedUserId(userId);
  // };

  return (
    <div style={{ width: "100%" }}>
      {Object.entries(channel).map(([key, value]) => {
        return (
          <div key={value.id}>
            <MessengerUser
              user={user}
              channelInfo={value}
              isSelected={value.id === id}
            />
          </div>
        );
      })}
    </div>
  );
};

export default MessengerUserList;
