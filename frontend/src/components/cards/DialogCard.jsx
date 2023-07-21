import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Stack } from "@mui/system";
import { axiosInstance } from "../../utils/axios";
import { useDispatch, useSelector } from "react-redux";

import Swal from "sweetalert2";
import { Box } from "@mui/material";
import { getMyRecipie } from "../../store/slice/recipie";

export default function DialogCard({ open, close, edit, data }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [descrption, setDescription] = useState("");

  const { user } = useSelector((state) => state.auth);

  const handleSubmit = async () => {
    const response = await axiosInstance
      .post("/recipie", {
        title: title,
        ingredients: ingredients,
        description: descrption,
        user_id: user.id,
      })
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Recipie publibished",
        });

        dispatch(getMyRecipie())

        close();
      });

    console.log("response", response);
  };

  return (
    <div>
      <Dialog open={open} onClose={close}>
        <DialogTitle>{"New Recipie"}</DialogTitle>
        <DialogContent>
          <Box sx={{ mt: 1 }}>
            <TextField
              name="title"
              onChange={(event) => setTitle(event.target.value)}
              id="title"
              fullWidth
              label="title"
              variant="outlined"
            />
            <TextField
              name="ingredients"
              id="ingredients"
              onChange={(event) => setIngredients(event.target.value)}
              fullWidth
              label="ingredients"
              variant="outlined"
              sx={{ mt: 3 }}
            />
            <TextField
              name="description"
              id="description"
              onChange={(event) => setDescription(event.target.value)}
              fullWidth
              label="Description"
              multiline
              rows={6}
              variant="outlined"
              sx={{ mt: 3 }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            fullWidth
            variant="contained"
            onClick={handleSubmit}
            sx={{ mt: 3, mb: 2 }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
