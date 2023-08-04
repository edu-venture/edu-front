import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const linkStyle = { textDecoration: "none", color: "inherit" };

const NavigationTab = ({ label, to, onClick }) => (
  <Link to={to || "#"} style={linkStyle} onClick={onClick}>
    <Tab label={label} />
  </Link>
);

const LectureMenuItem = ({ handleClose, to, children }) => (
  <MenuItem
    onClick={handleClose}
    component={Link}
    to={to}
    sx={{ fontSize: "12px" }}
  >
    {children}
  </MenuItem>
);

const LectureMenuItems = ({ handleClose }) => (
  <>
    <LectureMenuItem handleClose={handleClose} to="/lecture">
      수업 정보
    </LectureMenuItem>
    <LectureMenuItem handleClose={handleClose} to="/streaming">
      실시간 수업
    </LectureMenuItem>
    <LectureMenuItem handleClose={handleClose} to="/video">
      수업 영상
    </LectureMenuItem>
  </>
);

const HeaderTabs = ({ handleMenuOpen, value, onChange }) => (
  <Tabs
    textColor="secondary"
    indicatorColor="secondary"
    value={value}
    onChange={onChange}
    TabIndicatorProps={{ style: { height: 0 } }}
  >
    <NavigationTab label="출 결" to="/attend" />
    <NavigationTab label="수 업" onClick={handleMenuOpen} />
    <NavigationTab label="차 량" to="/location" />
    <NavigationTab label="수 납" to="/payment" />
    <NavigationTab label="메 신 저" to="/messenger" />
    <Tab label="사용자명 님" />
  </Tabs>
);

const Header = () => {
  const [menuAnchor, setMenuAnchor] = useState(null);
  const isMenuOpen = Boolean(menuAnchor);
  const [value, setValue] = useState(0);

  const handleMenuOpen = (event) => setMenuAnchor(event.currentTarget);
  const handleMenuClose = () => setMenuAnchor(null);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar
      position="sticky"
      color="default"
      elevation={5}
      sx={{
        backgroundColor: "#ffffff",
        opacity: 0.9,
        boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
        height: "50px",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          margin: "-0.8vh 7vw",
        }}
      >
        <Link to="/" style={linkStyle}>
          <Typography sx={{ fontSize: "18px", color: "#5AC467" }}>
            EduVenture
          </Typography>
        </Link>
        <HeaderTabs
          handleMenuOpen={handleMenuOpen}
          value={value}
          onChange={handleChange}
        />
        <Menu anchorEl={menuAnchor} open={isMenuOpen} onClose={handleMenuClose}>
          <LectureMenuItems handleClose={handleMenuClose} />
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
