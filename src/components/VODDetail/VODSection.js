import React from "react";
import styled from "@emotion/styled";

const VideoPlayer = styled.video`
  position: relative;
  width: 80%;
  height: 650px;
  background: #323232;
  margin: 0px auto;
`;

const VODSectionDetail = ({videoDetail}) => {
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
      <VideoPlayer src={videoDetail.savePath} controls poster={videoDetail.saveThumb} style={{ height: '100%'}}/>
    </main>
  );
};

export default VODSectionDetail;
