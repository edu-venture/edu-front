import React from "react";
import styled from "styled-components";
import EmojiSection from "./EmojiSection";
import ExpandCircleDownRoundedIcon from "@mui/icons-material/ExpandCircleDownRounded";
import { useNavigate } from "react-router-dom";

const VideoEmojiWrapper = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const VideoContainer = styled.div`
  width: 100%;
  height: 75%;
  background: #323232;
`;

const EmojiContainer = styled.div`
  width: 100%;
  height: 25%;
  background: #5ac467;
  display: flex;
  justify-content: space-around;
`;

const VideoSection = ({ addEmojiMessage }) => {
  const 응원하기 = ["🍊", "🍎", "🥝", "🍈"];
  const 반응하기 = ["🎉", "😂", "👍🏻", "✋🏻"];

  const navigate = useNavigate();

  const handleEmojiClick = (emoji, type) => {
    addEmojiMessage(emoji, type);
  };

  return (
    <VideoEmojiWrapper>
      <VideoContainer>
        <ExpandCircleDownRoundedIcon
          onClick={() => navigate(-1)}
          sx={{
            margin: "10px 0 0 10px",
            fontSize: "50px",
            color: "#ffffff",
            cursor: "pointer",
            transform: "rotate(90deg)",
          }}
        />
      </VideoContainer>
      <EmojiContainer>
        <EmojiSection
          title="응 원 하 기"
          emojis={응원하기}
          onEmojiClick={(emoji) => handleEmojiClick(emoji, "응원하기")}
        />
        <EmojiSection
          title="반 응 하 기"
          emojis={반응하기}
          onEmojiClick={(emoji) => handleEmojiClick(emoji, "반응하기")}
        />
      </EmojiContainer>
    </VideoEmojiWrapper>
  );
};

export default VideoSection;
