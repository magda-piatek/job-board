import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { TUser } from "../../../../types/user";
import { fetchUser } from "../../api/user-requests";
import { initialState } from "./typedef";

export const getUser = createAsyncThunk("get/user", fetchUser);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state, action) => {});
    builder.addCase(getUser.fulfilled, (state, { payload }) => {
      state = payload.data;
    });
  },
});

export default userSlice.reducer;
