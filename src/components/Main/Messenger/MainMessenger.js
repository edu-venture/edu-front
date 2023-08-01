import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import MainMessengerContent from "./MainMessengerContent";

const messengerContainer = {
  position: "relative",
  width: "100vw",
  height: "100vh",
  backgroundColor: "#fff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "0px",
};

const Messenger = () => {
  return (
    <Paper
      className="messengerContainer"
      id="fade-left"
      sx={messengerContainer}
    >
      <Box sx={{ position: "absolute", left: "80px", top: "70px" }}>
        <h2>주요</h2>
        <h1>메신저 알림</h1>
        {[...Array(5)].map((_, index) => {
          return <MainMessengerContent key={index} />;
        })}
      </Box>
    </Paper>
  );
};

export default Messenger;
