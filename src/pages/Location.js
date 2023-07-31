import { Box } from "@mui/material";
import React, { Suspense } from "react";
import LocationLoading from "../components/Location/LocationLoading";

const LocationContent = React.lazy(() =>
  import("../components/Location/LocationContent")
);
const textBox = {
  position: "relative",
  left: "50px",
  top: "10px",
};
const Location = () => {
  return (
    <>
      <Box sx={textBox}>
        <h2>실시간</h2>
        <h1>차량 위치</h1>
      </Box>
      <Suspense fallback={<LocationLoading />}>
        <LocationContent />
      </Suspense>
    </>
  );
};

export default Location;
