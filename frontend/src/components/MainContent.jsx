import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import RecipeCard from "./cards/RecipieCard";

function MainContent() {
  return (
    <div className="MainContent">
      <Grid container sx={{ m: 3, p: 2 }}>
        <Grid container flexDirection="column">
          <Typography sx={{ mb: 5 }} component="h1" variant="h5">
            My Recipies
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <RecipeCard />
            </Grid>
            <Grid item xs={12} md={4}>
              <RecipeCard />
            </Grid>
            <Grid item xs={12} md={4}>
              <RecipeCard />
            </Grid>
          </Grid>
        </Grid>
        <Grid container flexDirection="column">
          <Typography sx={{ my: 5 }} component="h1" variant="h5">
            All Recepies
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <RecipeCard />
            </Grid>
            <Grid item xs={12} md={4}>
              <RecipeCard />
            </Grid>
            <Grid item xs={12} md={4}>
              <RecipeCard />
            </Grid>
          </Grid>
        </Grid>
       
      </Grid>
    </div>
  );
}

export default MainContent;
