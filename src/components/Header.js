import { Tabs, Tab, Box } from "@mui/material";
import { Link } from "react-router-dom";

const headerContainer = {
  display: "flex",
  justifyContent: "space-between",
  position: "sticky",
  top: 0,
  opacity: 0.7,
  zIndex: "999",
  backdropFilter: "blur(5px)",
};

const Header = () => {
  return (
    <Box className="headerContainer" sx={headerContainer}>
      <Tabs
        textColor="secondary"
        indicatorColor="secondary"
        sx={{ width: "100%" }}
      >
        <Link to="/">
          <Tab value="로고" label="EduVenture" sx={{ flexGrow: 1 }} />
        </Link>
        <Tab display="none" />
        <Tab value="출결" label="출결" sx={{ flexGrow: 1 }} />
        <Tab value="수업" label="수업" sx={{ flexGrow: 1 }} />
        <Link to="/Location">
          <Tab value="차량" label="차량" sx={{ flexGrow: 1 }} />
        </Link>
        <Link to="/Payment">
          <Tab value="수납" label="수납" sx={{ flexGrow: 1 }} />
        </Link>
        <Link to="/messenger">
          <Tab value="메신저" label="메신저" sx={{ flexGrow: 1 }} />
        </Link>
        <Tab value="사용자" label="사용자명 님" sx={{ flexGrow: 1 }} />
      </Tabs>
    </Box>
  );
};

export default Header;
