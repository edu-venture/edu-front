import React from "react";
import Title from "../components/Title";
import { useParams } from "react-router-dom";
import vodData from "../utils/vodData.json";
import VODSection from "../components/VODDetail/VODSection";
import ChatSection from "../components/VODDetail/ChatSection";

const styles = {
  titleContainer: {
    padding: "20px 0px 20px 50px",
  },
};

const VODDetail = () => {
  const { id } = useParams();

  const videoDetail = vodData.find((item) => item.id === parseInt(id));

  if (!videoDetail) {
    return <div>Not Found</div>;
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "auto",
        overflow: "hidden",
        backgroundColor: "#D2D2D2",
        position: "relative",
      }}
    >
      <div style={styles.titleContainer}>
        <Title
          subtitle={`${videoDetail.teacherName} 선생님의`}
          title={videoDetail.lectureName}
          color="#171A2B"
        />
      </div>
      <VODSection videoDetail={videoDetail} />
      <ChatSection />
    </div>
  );
};

export default VODDetail;
