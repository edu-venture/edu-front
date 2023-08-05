import React from "react";
import Eunsuk from "./Eunsuk";

function Car({ gps }) {
  return (
    <div>
      <p>{gps.carnumber} 번차의 위치</p>
      <p>{gps.time} 이시간에 등록됨</p>
      <p>{gps.longitude} 이것이 위도</p>
      <p>{gps.latitude} 이것이 경도</p>
      <Eunsuk location={gps} />
    </div>
  );
}

export default Car;
