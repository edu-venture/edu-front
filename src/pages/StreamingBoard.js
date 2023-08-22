import Title from "../components/Title";
import StreamingList from "../components/StreamingBoard/StreamingList";
import { useNavigate } from "react-router";

const styles = {
  titleContainer: {
    padding: "20px 0px 20px 50px",

  },
};

const StreamingBoard = () => {
  const navigate = useNavigate();

  const buttonClickHandler = () => {
    navigate('/admin/streaming/create');
  }


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
        <Title subtitle="LIVE" title="실시간 수업 영상" color="#ffffff" />
        <button 
            style={{fontSize: "22px",
                    width: "143px",
                    height: "58px",
                    backgroundColor: "#D3D3D3",
                    borderRadius: "20px",
                    color: "#000",
                    margin: '50px 0 0 40px',
                    cursor: 'pointer'
                    }} onClick={buttonClickHandler}>수업 생성
            </button>
      </div>
      <StreamingList />
    </div>
  );
};

export default StreamingBoard;
