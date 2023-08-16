import React from "react";
import LectureDayBox from "./LectureDayBox";
import { weekData } from "../../utils/weekData";
import styled from "styled-components";

const CalendarContainer = styled.div`
  width: 80%;
  height: 220px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f2f2f2;
  border-radius: 30px;
`;

// const getWeek = () => {
//   const days = ["일", "월", "화", "수", "목", "금", "토"];
//   const current = new Date();
//   const sundayTime = current.getTime() - 86400000 * current.getDay();
//   const sunday = new Date(sundayTime);
//   const week = [
//     { date: sunday.toISOString().slice(8, 10), day: days[sunday.getDay()] },
//   ];

//   for (let i = 1; i < 7; i++) {
//     sunday.setTime(sunday.getTime() + 86400000);
//     week.push({
//       date: sunday.toISOString().slice(8, 10),
//       day: days[sunday.getDay()],
//     });
//   }
//   return week;
// };

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
      {/* {week.map((item, index) => (
        <LectureDayBox
          key={index}
          date={item.date}
          day={item.day}
        />
      ))} */}
    </CalendarContainer>
  );
};

export default LectureCalendar;
