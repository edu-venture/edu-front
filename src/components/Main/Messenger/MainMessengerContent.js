import Box from "@mui/material/Box";

const messageBox = {
  position: "relative",
  backgroundColor: "#f2f2f2",
  width: "60vw",
  height: "13vh",
  left: "20vw",
  borderRadius: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: "0 20px",
  margin: "10px",
};

const messageBoxDeco = {
  position: "absolute",
  left: "20px",
  backgroundColor: "#5ac467",
  borderRadius: "50%",
  width: "70px",
  height: "70px",
};

const MessengerContainer = () => {
  return (
    <Box
      data-aos="fade-left"
      data-aos-easing="ease-in"
      data-aos-duration="2000"
      data-aos-offset="200"
      data-aos-delay="500"
      data-aos-anchor="#fade-left"
      className="messageBox"
      sx={messageBox}
    >
      <div className="messageBoxDeco" style={messageBoxDeco} />
      <p
        style={{
          color: "black",
          position: "relative",
          left: "90px",
          width: "50vw",
        }}
      >
        안녕하세요 저희는 EduVenture입니다. 데이터를 받아 표출
      </p>
    </Box>
  );
};

export default MessengerContainer;
