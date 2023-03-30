import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userObject } from "../interfaces/userInterfaces";
import { RootState } from "./store";

const initialState = {
  value: {
    sub: "",
    email: "",
    name: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<userObject>) => {
      state.value = action.payload;
    },
  },
});

export const { updateUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.value;

export default userSlice.reducer;
