import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import RecipeCard from "./cards/RecipieCard";
import { useDispatch, useSelector } from "react-redux";
import { getMyRecipie } from "../store/slice/recipie";

function MainContent() {
  const dispatch = useDispatch();

  const { recipie } = useSelector((state) => state.recipie);
  const { user } = useSelector((state) => state.auth);

  const myRecipie = recipie.filter((item) => item.user_id === user.id);

  const allRecipie = recipie.filter((item) => item.user_id !== user.id);

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
            {myRecipie?.length > 0 ? (
              <Grid container spacing={2}>
              {myRecipie?.map((item) => (
                <Grid item xs={12} md={3}>
                  <RecipeCard data={item} />
                </Grid>
              ))}
            </Grid>
            ) : (
              <Grid container alignItems="center" justifyContent="center">
                <Typography>You didnt published any recipie yet</Typography>
              </Grid>
            )}
          </Grid>
        </Grid>
        <Grid container flexDirection="column">
          <Typography sx={{ my: 5 }} component="h1" variant="h5">
            All Recepies
          </Typography>
          <Grid container spacing={2}>
          {allRecipie?.length > 0 ? (
              <Grid container spacing={2}>
              {allRecipie?.map((item) => (
                <Grid item xs={12} md={3}>
                  <RecipeCard data={item} />
                </Grid>
              ))}
            </Grid>
            ) : (
              <Grid container alignItems="center" justifyContent="center">
                <Typography>No Recipies Published</Typography>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default MainContent;
