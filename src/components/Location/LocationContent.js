import { Box, Paper } from "@mui/material";
import React from "react";

const locationContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
};
const locationContent = {
  position: "relative",
  width: "80vw",
  height: "70vh",
  backgroundColor: "#323232",
};
const LocationContent = () => {
  return (
    <Box sx={locationContainer}>
      <Paper className="locationContent" sx={locationContent} />
    </Box>
  );
};

export default LocationContent;
