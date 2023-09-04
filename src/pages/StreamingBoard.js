import Title from "../components/Title";
import StreamingList from "../components/StreamingBoard/StreamingList";
import { Link } from "react-router-dom";

const styles = {
  titleContainer: {
    padding: "20px 0px 20px 50px",
  },
  styledButton: {
    marginLeft: "110px",
    padding: "12px 25px",
    backgroundColor: "#ffffff",
    color: "#171A2B",
    border: "none",
    borderRadius: "30px",
    cursor: "pointer",
    fontSize: "15px",
  },
};

const StreamingBoard = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "calc(100vh - 50px)",
        overflow: "hidden",
        backgroundColor: "#5AC467",
        position: "relative",
      }}
    >
      <div style={styles.titleContainer}>
        <Title subtitle="진행 중인" title="실시간 강의" color="#ffffff" />
      </div>
      <Link to="/admin/streaming/create">
        <button style={styles.styledButton}>강의 시작</button>
      </Link>
      <StreamingList />
    </div>
  );
};

export default StreamingBoard;
