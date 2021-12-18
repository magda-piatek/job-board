import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchUser } from "../../api/user-requests";
import { Modules } from "../../typedf";
import { initialState } from "./typedef";

export const getUser = createAsyncThunk("get/user", fetchUser);

export const userSlice = createSlice({
  name: "user",
  initialState: { user: initialState },
  reducers: {
    setInitialStateUser(state) {
      state.user = initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state, action) => {});
    builder.addCase(getUser.fulfilled, (state, { payload }) => {
      state.user = {
        ...payload.data,
        module: payload.data.isCandidate ? Modules.Candidate : Modules.Employer,
      };
    });
  },
});

export const { setInitialStateUser } = userSlice.actions;

export default userSlice.reducer;
