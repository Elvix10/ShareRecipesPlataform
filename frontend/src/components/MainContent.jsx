import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import RecipeCard from "./cards/RecipieCard";
import { useDispatch, useSelector } from "react-redux";
import { getMyRecipie } from "../store/slice/recipie";

function MainContent() {
  const dispatch = useDispatch();

  const { recipie } = useSelector((state) => state.recipie);

  useEffect(() => {
    dispatch(getMyRecipie());
  }, [dispatch]);

  console.log("recipie", recipie);

  return (
    <div className="MainContent">
      <Grid container sx={{ m: 3, p: 2 }}>
        <Grid container flexDirection="column">
          <Typography sx={{ mb: 5 }} component="h1" variant="h5">
            My Recipies
          </Typography>
          <Grid container spacing={2}>
            {recipie?.map((item) => (
              <Grid item xs={12} md={3}>
                <RecipeCard data={item} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid container flexDirection="column">
          <Typography sx={{ my: 5 }} component="h1" variant="h5">
            All Recepies
          </Typography>
          <Grid container spacing={2}>
            {recipie?.map((item) => (
              <Grid item xs={12} md={3}>
                <RecipeCard data={item} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default MainContent;
