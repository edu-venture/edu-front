import styled from "styled-components";
import "../../../utils/AOSCustom/AOSCustom.css";
import Paper from "@mui/material/Paper";
import CalenderContent from "./CalenderContent";

const TextBox = styled.div`
  position: absolute;
  top: 5vh;
  left: 10vh;
`;

const notice = {
  position: "absolute",
  bottom: "0",
  width: "80vw",
  height: "40vh",
  backgroundColor: "#f2f2f2",
  borderRadius: "30px 30px 0px 0px",
};

const mainCalenderContainer = {
  borderRadius: "0px",
  position: "relative",
  marginTop: "11vh",
  width: "100vw",
  height: "100vh",
  backgroundColor: "#5ac467",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const Calener = () => {
  const dayData = new Date();
  const month = dayData.getMonth() + 1;
  const date = dayData.getDate();

  return (
    <div
      data-aos="fade-right"
      data-aos-easing="ease-in"
      data-aos-duration="2000"
      data-aos-offset="200"
      data-aos-delay="500"
      data-aos-anchor="#fade-right"
    >
      <Paper
        className="mainCalenderContainer"
        id="fade-right"
        elevation={4}
        sx={mainCalenderContainer}
      >
        {/* <Container id="fade-right"> */}
        <TextBox>
          <h3>
            {month}월 {date}일
          </h3>
          <h1>수강 강좌</h1>
        </TextBox>
        <CalenderContent month={month} date={date} />
        <Paper className="notice" sx={notice}>
          {/* <Notice> */}
          <h2 style={{ color: "black", marginLeft: "50px", marginTop: "50px" }}>
            공지사항
          </h2>
          <br />
          <p style={{ color: "black", marginLeft: "50px", marginTop: "20px" }}>
            게시된 공지 사항이 없습니다.
          </p>
          {/* </Notice> */}
        </Paper>
      </Paper>
      {/* </Container> */}
    </div>
  );
};

export default Calener;
