import { createSlice } from "@reduxjs/toolkit";

type userState = {
  isLoggedIn: boolean;
};

const initialState = {
  isLoggedIn: false,
} as userState;

export const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setIsLoggedIn } = authReducer.actions;
export default authReducer.reducer;