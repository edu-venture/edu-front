import React from "react";

const styles = {
  container: {
    filter: "drop-shadow(0px 0px 5px rgba(0,0,0,0.2))",
  },
  header: {
    width: 220,
    height: 65,
    borderRadius: "30px 30px 0 0",
    background: "#4A4F6B",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    color: "#ffffff",
  },
  body: {
    width: 220,
    height: 75,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    background: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 25,
    color: "#171a2b",
  },
};

const AttendCard = ({ header, body }) => (
  <div style={styles.container}>
    <div style={styles.header}>{header}</div>
    <div style={styles.body}>{body}</div>
  </div>
);

export default AttendCard;
