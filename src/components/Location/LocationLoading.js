import React from "react";
import { Box, Paper, Typography } from "@mui/material";

const loadingContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  opacity: "0.5",
};
const loadContentBox = {
  position: "relative",
  width: "80vw",
  height: "70vh",
  backgroundColor: "#323232",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const LocationLoading = () => {
  return (
    <Box sx={loadingContainer}>
      <Paper className="loadContentBox" sx={loadContentBox}>
        <Typography variant="h6" component="div">
          현재 [학생명] 학생이 탑승하는 [호차]가 운행되고 있지 않습니다.
        </Typography>
      </Paper>
    </Box>
  );
};

export default LocationLoading;
