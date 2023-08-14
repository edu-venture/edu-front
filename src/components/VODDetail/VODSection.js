import React from "react";
import styled from "@emotion/styled";

const VideoPlayer = styled.div`
  position: relative;
  width: 80%;
  height: 650px;
  background: #323232;
  margin: 0px auto;
`;

const VODSectionDetail = () => {
  return (
    <main
      style={{
        background: "#D2D2D2",
        width: "100vw",
        height: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <VideoPlayer />
    </main>
  );
};

export default VODSectionDetail;
