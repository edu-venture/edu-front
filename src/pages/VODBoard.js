import Title from "../components/Title";
import VODList from "../components/VODBoard/VODList";

const styles = {
  titleContainer: {
    padding: "20px 0px 20px 50px",
  },
};

const VODBoard = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "auto",
        overflow: "hidden",
        backgroundColor: "#5AC467",
        position: "relative",
      }}
    >
      <div style={styles.titleContainer}>
        <Title subtitle="복습해봐요" title="지난 수업 영상" color="#ffffff" />
      </div>
      <VODList />
    </div>
  );
};

export default VODBoard;
