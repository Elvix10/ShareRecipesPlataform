import React from "react";
import Button from "@mui/material/Button";
import { Stack } from "@mui/system";
import Avatar from "@mui/material/Avatar";

import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import { Grid } from "@mui/material";
import DialogCard from "./cards/DialogCard";
import { signOut } from "../store/slice/auth";
import { useDispatch, useSelector } from "react-redux";
import { axiosInstance } from "../utils/axios";

function SideBar() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleLogOut = () => {

    axiosInstance.post('/logout')
    dispatch(signOut())
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="sideBarContainer">
      <div className="sideBar">
        <Grid
          container
          justifyContent="space-evenly"
          flexDirection="column"
          sx={{ height: "100%" }}
        >
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Avatar sx={{ width: 120, height: 120 }}>
              <PersonIcon />
            </Avatar>
            <Typography
              component="h1"
              variant="h5"
              sx={{ mt: 2 }}
              style={{ color: "#fff" }}
            >
              {user.username}
            </Typography>
          </Grid>
          <Grid
            item
            sx={{
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Button variant="outlined" startIcon={<AddIcon />} onClick={handleClickOpen}>
              New Recepie
            </Button>
          </Grid>
          <Grid
            item
            sx={{
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Button onClick={handleLogOut} variant="outlined" startIcon={<ExitToAppIcon />}>
              Logout
            </Button>
          </Grid>
          <DialogCard open={open} close={handleClose}/>
        </Grid>
      </div>
    </div>
  );
}

export default SideBar;
