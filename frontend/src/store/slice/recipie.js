import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter,
  } from "@reduxjs/toolkit";
  import { axiosInstance } from "../../utils/axios";
  
  export const getMyRecipie = createAsyncThunk("getRecipie", async () => {
    try {
      const response = await axiosInstance.get(`/recipie`);

     
      return response.data.data
    } catch (error) {
      console.log(error.response.data);
    }
  });
  
  
  const recipieAdapter = createEntityAdapter({});
  
  const RecipieSlice = createSlice({
    name: "recipie",
    initialState: recipieAdapter.getInitialState({
      recipie: [],   
    }),
  
    extraReducers: {
      [getMyRecipie.fulfilled]: (state, action) => {

        state.recipie = action.payload;
      }, 
    },
  });
  
  export default RecipieSlice.reducer;