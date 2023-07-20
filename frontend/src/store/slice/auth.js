import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const authAdapter = createEntityAdapter({});

export const authSlice = createSlice({
  name: "auth",
  initialState: authAdapter.getInitialState({
    userToken: null,
    user: null,
  }),
  reducers: {
    signIn: (state, action) => {
      state.userToken = action.payload.userToken;
      state.user = action.payload.user;
    },
    signOut: (state, action) => {  
      state.userToken = null;
      state.user = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { signIn, signOut } = authSlice.actions;

export default authSlice.reducer;
