import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
//import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { axiosInstance } from "../utils/axios";
import { useDispatch } from "react-redux";
import { signIn } from "../store/slice/auth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

     await axiosInstance.post("/user", {
      username: data.get("username"),
      password: data.get("password"),
    }).then(()=>{
      Swal.fire({
        position: "center",
        icon: "success",
        title: "User successfully registed",
      });
    })

    navigate("/");

    
    

  };
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage:
            "url(https://z-p3-scontent.frai2-1.fna.fbcdn.net/v/t39.30808-6/240732521_253362726656570_2978354159663101127_n.jpg?_nc_cat=1&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHpPMIAo1iUXVGJLFMtHTJkZwSVPcxSpQFnBJU9zFKlASoiEaIraBwELh-rTcJgNNNPBJY5ZtJX_EhUEDVoCnYC&_nc_ohc=LuQc4oxTVScAX_vMiN8&_nc_zt=23&_nc_ht=z-p3-scontent.frai2-1.fna&oh=00_AfC74-5Emynkm0N3XqDTvqwUkLAApgo1iwKdplNn7yzWeA&oe=64BE8175)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
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
              id="username"
              label="username"
              name="username"
              autoComplete="username"
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

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/login" variant="body2">
                  {"already have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Register;
