import React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Paper,
  Box,
  Grid,
  Typography,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { Transition } from "react-transition-group";
import { Link } from "react-router-dom";

const Login = () => {
  const defaultTheme = createTheme();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const transitionStylesImg = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  const transitionStylesForm = {
    entering: { transform: "translateX(-100%)" },
    entered: { transform: "translateX(0)" },
    exiting: { transform: "translateX(-100%)" },
    exited: { transform: "translateX(-100%)" },
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />

        <Transition in={true} timeout={1000} appear>
          {(state) => (
            <Grid
              item
              xs={false}
              sm={4}
              md={7}
              sx={{
                backgroundImage: "url(/img/Logo.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0,
                transition: "opacity 1s ease-in-out",
                ...transitionStylesImg[state],
              }}
            />
          )}
        </Transition>

        <Transition in={true} timeout={1000} appear>
          {(state) => (
            <Grid
              item
              xs={12}
              sm={8}
              md={5}
              component={Paper}
              elevation={6}
              square
              sx={{
                transition: "transform 1s ease-in-out",
                ...transitionStylesForm[state],
              }}
            >
              <Box
                sx={{
                  my: 8,
                  mx: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ m: 1, background: "black" }}>
                  <LockOutlinedIcon sx={{ background: "black" }} />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Login
                </Typography>
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{ mt: 1 }}
                >
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="아이디 저장하기"
                  />
                  <Link to="/main">
                    <Button
                      type="submit"
                      variant="contained"
                      color="success"
                      fullWidth
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Sign In
                    </Button>
                  </Link>
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2" color="#5AC467">
                        비밀번호 찾기
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link to="/register" variant="body2" color="#5AC467">
                        회원가입
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          )}
        </Transition>
      </Grid>
    </ThemeProvider>
  );
};
export default Login;
