import React from "react";
import LectureDayBox from "./LectureDayBox";
import { weekData } from "../../utils/weekData";
import styled from "styled-components";

const CalendarContainer = styled.div`
  width: 80%;
  height: 200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f2f2f2;
  border-radius: 30px;
`;

const LectureCalendar = () => {
  return (
    <CalendarContainer>
      {weekData.map((day, index) => (
        <LectureDayBox
          key={index}
          date={day.date}
          day={day.day}
          event={day.event}
        />
      ))}
    </CalendarContainer>
  );
};

export default LectureCalendar;
