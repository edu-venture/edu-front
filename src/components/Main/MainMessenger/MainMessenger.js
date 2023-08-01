import Box from "@mui/material/Box";
import MainMessengerContent from "./MainMessengerContent";
import Title from "../../Title";
import styled from "styled-components";

const MessengerContainer = styled.div`
  display: flex;
  position: relative;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
`;

const styles = {
  titleContainer: {
    padding: "60px 0px 20px 50px",
  },
};

const MainMessenger = () => {
  return (
    <MessengerContainer id="fade-left">
      <div style={styles.titleContainer}>
        <Title subtitle="주요" title="메신저 알림" color="#171A2B" />
      </div>
      <Box sx={{ position: "absolute", left: "80px", top: "25vh" }}>
        {[...Array(4)].map((_, index) => {
          return <MainMessengerContent key={index} />;
        })}
      </Box>
    </MessengerContainer>
  );
};

export default MainMessenger;
