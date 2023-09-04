import React from "react";
import styled from "styled-components";

const VideoPlayer = styled.video`
  position: relative;
  display: flex;
  width: 1300px;
  height: 700px;
  background: #323232;
  margin: 20px auto;
`;

const VODSectionDetail = ({ videoDetail }) => {
  return (
    <div>
      <VideoPlayer
        src={videoDetail.savePath}
        controls
        poster={videoDetail.saveThumb}
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default VODSectionDetail;
