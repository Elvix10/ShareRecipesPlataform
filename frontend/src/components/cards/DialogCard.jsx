import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Stack } from "@mui/system";
import { axiosInstance } from "../../utils/axios";
import { useDispatch } from "react-redux";

import Swal from "sweetalert2";

export default function DialogCard({ open, close, edit, data }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(edit ? data.title : "");
  const [url, setUrl] = useState(edit ? data.url : "");

  async function saveLink() {
    try {
      await axiosInstance
        .post("/links", { title: title, url: url })
        .then(() => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Link saved",
          });
          setTitle("");
          setUrl("");
          close();
        });
      //dispatch(getMyLinks());
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Dialog md open={open} onClose={close}>
        <DialogTitle>{ "New Recipie"}</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ mt: 1 }}>
            <TextField
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              fullWidth
              label="name"
              variant="outlined"
            />
            <TextField
              value={url}
              onChange={(event) => setUrl(event.target.value)}
              fullWidth
              label="ingredients"
              variant="outlined"
            />
             <TextField
              
              //onChange={(event) => setUrl(event.target.value)}
              fullWidth
              label="Description"
              multiline
              rows={6}
              variant="outlined"
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={saveLink}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
