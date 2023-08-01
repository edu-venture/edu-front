import { Box, Button } from "@mui/material";
const StreamingTitle = () => {
  return (
    <Box sx={{ position: "absolute", left: "80px", top: "40px" }}>
      <h2>스트리밍</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <h1>Live 수업</h1>{" "}
        <Button
          variant="contained"
          type="button"
          style={{
            color: "#323232",
            background: "white",
            border: "0px",
            borderRadius: "10px",
            height: "40px",
            width: "90px",
          }}
        >
          참관하기
        </Button>
      </div>
    </Box>
  );
};
export default StreamingTitle;
