import React from "react";

const styles = (color) => ({
  container: {
    padding: 20,
    width: 500,
    height: 100,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: color,
    boxSizing: "border-box",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 200,
  },
  title: {
    fontSize: 40,
    fontWeight: 700,
  },
});

const Title = ({ subtitle, title, color = "171a2b" }) => {
  const style = styles(color);

  return (
    <p style={style.container}>
      <span style={style.subtitle}>{subtitle}</span>
      <span style={style.title}>{title}</span>
    </p>
  );
};

export default Title;
