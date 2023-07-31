import { Paper } from "@mui/material";

const StreamingArea = () => {
  return (
    <Paper
      className="whiteBox"
      sx={{
        position: "absolute",
        bottom: "0px",
        width: "90vw",
        height: "75vh",
        backgroundColor: "#f2f2f2",
        borderRadius: "30px 30px 0px 0px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        className="RealStreamingBox"
        sx={{
          width: "50vw",
          height: "60vh",
          backgroundColor: "#323232",
          //   borderRadius: "30px",
        }}
      ></Paper>
    </Paper>
  );
};

export default StreamingArea;
