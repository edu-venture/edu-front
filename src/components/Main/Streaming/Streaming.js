import { Paper } from "@mui/material";
import StreamingTitle from "./StreamingTitle";
import StreamingArea from "./StreamingArea";

const streamingContainer = {
  borderRadius: "0px",
  position: "relative",
  width: "100vw",
  height: "100vh",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#171A2B",
};

const Streaming = () => {
  return (
    <Paper
      className="streamingContainer"
      id="fade-up"
      elevation={4}
      sx={streamingContainer}
    >
      <StreamingTitle />
      <StreamingArea />
    </Paper>
  );
};

export default Streaming;
