import { Box, Container, Typography } from "@mui/material";

const Footer = () => (
  <>
    <Box
      component="footer"
      sx={{
        py: 6, // padding on y-axis increased
        px: 2,
        mt: "auto",
        height: "200px", // height increased
        backgroundColor: "#4A4F6B",
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1">
          My sticky footer can be found here.
        </Typography>
      </Container>
    </Box>
  </>
);

export default Footer;
