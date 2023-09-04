import React from "react";
import styled from "styled-components";
import MapAPI from "./MapAPI";

const MapContainer = styled.div`
  background-color: #323232;
  width: 60vw;
  height: 60vh;
  position: relative;
  left: 5%;
`;

const Map = ({ carNumber }) => {
  return (
    <MapContainer>
      {carNumber ? <MapAPI location={carNumber} /> : null}
    </MapContainer>
  );
};

export default Map;
