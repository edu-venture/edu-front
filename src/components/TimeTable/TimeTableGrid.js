import React from "react";

const styles = {
  //시간표 전체
  table: {
    width: "100%",
    height: "100%",
    borderCollapse: "collapse",
  },

  //시간표 선생님 이름 줄
  headerCell: {
    height: "50px",
    border: "1px solid #ccc",
    textAlign: "center",
    padding: "8px",
    width: "20px",
  },

  //시간표 **교시 줄
  timeColumnCell: {
    width: "2px",
    border: "1px solid #ccc",
    textAlign: "center",
    padding: "8px",
    height: "100px",
  },

  //시간표 안에 내용
  cell: {
    border: "1px solid #ccc",
    textAlign: "center",
    padding: "8px",
    height: "100px",
    width: "20px",
  },

  //시간표 안 마우스 커서
  cursorPointer: {
    cursor: "pointer",
  },
};

const TimeTableGrid = ({
  teachers,
  times,
  mergedRows,
  selectedDayCourses,
  handleShowOptionsPopup,
}) => {
  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.headerCell}></th>
          {teachers.map((teacher, index) => (
            <th key={index} style={styles.headerCell}>
              {teacher.userName}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {times.map((time, timeIndex) => (
          <tr key={timeIndex}>
            <td style={styles.timeColumnCell}>{time}</td>
            {teachers.map((teacher, teacherIndex) => {

              if (mergedRows[teacherIndex] && mergedRows[teacherIndex] > 0) {
                mergedRows[teacherIndex]--;
                return null;
              }

              let courseInfo;
              let rowspan = 1;

              // 현재 교시의 과목 정보
              courseInfo = selectedDayCourses.find(course =>
                  course.timeClass === time &&
                  course.timeTeacher === teacher.userName
              );


              // 연달아 있는 교시 계산
              if (courseInfo) {

                let nextRowIndex = 1;

                while (
                  timeIndex + nextRowIndex < times.length &&
                  selectedDayCourses.some(
                    (c) =>
                      c.timeClass === times[timeIndex + nextRowIndex] &&
                      c.timeTeacher === teacher.userName &&
                      c.claName === courseInfo.claName &&
                      c.timeTitle === courseInfo.timeTitle
                  )
                ) {
                  nextRowIndex++;
                }

                if (nextRowIndex > 1) {
                  rowspan = nextRowIndex;
                }
              }

              // rowspan이 1보다 크면 해당 교사의 mergedRows 값 설정
              if (rowspan > 1) {
                mergedRows[teacherIndex] = rowspan - 1;
              }

              if (courseInfo) {
                console.log("=============================================");
                console.log("courseInfo=============", courseInfo);
                console.log("Course Color===========", courseInfo.timeColor);
                return (
                  <td
                    key={teacherIndex}
                    rowSpan={rowspan}
                    style={{
                      ...styles.cell,
                      ...styles.cursorPointer,
                      backgroundColor: courseInfo.timeColor,
                      position: "relative", // 추가된 스타일
                    }}
                    onClick={(event) =>
                      handleShowOptionsPopup(
                        teacherIndex,
                        timeIndex,   
                        courseInfo.timeNo,
                        courseInfo.couNo,   
                        courseInfo.claName,
                        courseInfo.timePlace,  
                        courseInfo.timeColor,
                        courseInfo.timeWeek,
                        courseInfo.timeTitle,
                        teacher.userName,
                        event
                      )
                    }
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: 10,
                        left: 10,
                        fontWeight: "bold",
                      }}
                    >
                      {courseInfo.claName}
                    </div>

                    <div
                      style={{
                        position: "absolute",
                        top: 30,
                        left: 10
                      }}
                    >
                      {courseInfo.timeTitle}
                    </div>

                    <div
                      style={{
                        position: "absolute",
                        bottom: 10,
                        right: 10,
                      }}
                    >
                      {courseInfo.timePlace}
                    </div>
                  </td>
                );
              } else {
                return (
                  <td
                    key={teacherIndex}
                    style={{ ...styles.cell, ...styles.cursorPointer }}
                    onClick={(event) =>
                      handleShowOptionsPopup(
                        teacherIndex,
                        timeIndex,
                        null,
                        event
                      )
                    }
                  ></td>
                );
              }
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TimeTableGrid;
