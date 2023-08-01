import { Paper } from "@mui/material";
import { styled } from "styled-components";
const BoxContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80vw;
  background-color: #f2f2f2;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 5px;
  border-radius: 30px;
  transform: translate(0%, -50%);
`;
const calenderContentBox = {
  width: "100vw",
  height: "25vh",
  backgroundColor: "#ffffff",
  margin: "0 3px",
  borderRadius: "30px",
  color: "#171a2b",
};
const CalenderContent = ({ month, date }) => {
  return (
    <BoxContainer>
      {[...Array(7)].map(() => {
        return (
          <Paper className="calenderContentBox" sx={calenderContentBox}>
            <h4
              style={{ fontWeight: "normal", marginLeft: "20px" }}
            >{`${date}일`}</h4>
          </Paper>
        );
      })}
    </BoxContainer>
  );
};

export default CalenderContent;
