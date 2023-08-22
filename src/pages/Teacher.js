import React from "react";
import Title from "../components/Title";
import TeacherList from "../components/Teacher/TeacherList";

const styles = {
  titleContainer: {
    padding: "20px 0px 20px 50px",
  },
  deleteButton: {
    marginLeft: "110px",
    padding: "12px 25px",
    backgroundColor: "#5AC467",
    color: "#ffffff",
    border: "none",
    borderRadius: "30px",
    cursor: "pointer",
    fontSize: "15px",
  },
};

const Teacher = () => {
  const handleDelete = () => {
    console.log("선택 항목 삭제");
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "calc(100vh - 50px)",
        overflow: "hidden",
        backgroundColor: "#ffffff",
        position: "relative",
      }}
    >
      <div style={styles.titleContainer}>
        <Title subtitle="EduVenture" title="선생님 승인" color="#5AC467" />
      </div>
      <button style={styles.deleteButton} onClick={handleDelete}>
        선택 삭제
      </button>
      <TeacherList />
    </div>
  );
};

export default Teacher;
