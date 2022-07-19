import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import companyLogo from "../../assets/Saveari-logo.svg";
import { useState } from "react";
import { validateLogin } from "../../data/Data";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}

      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Validation = async (username, password) => {
  if (username == "admin" && password == "admin") {
    console.log(username, password);
  }
  console.log(username, password);
};
const theme = createTheme();

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    const response = await Validation(username, password);

    if (true) {
      // await toast(`Welcome ${response.name}`, {
      //   position: 'top-center',
      //   autoClose: 3000,
      //   closeOnClick: true,
      //   limit: 1,
      // });
      await toast(`Welcome to Manasik`, {
        position: "top-center",
        autoClose: 3000,
        closeOnClick: true,
        limit: 1,
      });
      await window.localStorage.setItem("isAuthenticated", true);
      await window.localStorage.setItem("userID", "admin");
      window.location.href = "/home";
    } else {
      toast("Invalid username or password", {
        position: "top-center",
        autoClose: 3000,
        closeOnClick: true,
        limit: 1,
      });
      setUsername("");
      setPassword("");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <ToastContainer hideProgressBar />
          <div style={{ textAlign: "center" }}>
            <h2>Manasik Aviation</h2>
          </div>
          <Typography component="h1" variant="h5">
            Log In
          </Typography>
          <Box noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="userID"
              label="User ID"
              name="userID"
              autoFocus
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{ backgroundColor: "#FEC711" }}
              onClick={handleLogin}
            >
              Log In
            </Button>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  );
}
