import React from "react";
import styled from "styled-components";
import VidoSection from "../components/Streaming/VideoSection/VideoSection";
import ChatSection from "../components/Streaming/ChatSection/ChatSection";

const MainContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const Streaming = () => {
  return (
    <MainContainer>
      <VidoSection />
      <ChatSection />
    </MainContainer>
  );
};

export default Streaming;
