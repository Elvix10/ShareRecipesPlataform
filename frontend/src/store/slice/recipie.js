import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter,
  } from "@reduxjs/toolkit";
  import { axiosInstance } from "../../utils/axios";
  
  export const getMyRecipie = createAsyncThunk("getRecipie", async () => {
    try {
      const response = await axiosInstance.get(`/recipie`);
  
      return response.data;
    } catch (error) {
      console.log(error.response.data);
    }
  });
  
  
  
  const linkAdapter = createEntityAdapter({});
  
  const RecipieSlice = createSlice({
    name: "recipie",
    initialState: linkAdapter.getInitialState({
      Recipie: [],
     
    }),
  
    extraReducers: {
      [getMyRecipie.fulfilled]: (state, action) => {
        state.Recipie = action.payload;
      },
    
    },
  });
  
  export default RecipieSlice.reducer;