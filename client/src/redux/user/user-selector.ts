import { RootState } from "../store";

export const selectIsCandidate = (state: RootState) =>
  state.user.user.isCandidate;

export const selectUser = (state: RootState) => state.user.user;

export const selectModule = (state: RootState) => state.user.user.module;

export const selectUserId = (state: RootState) => state.user.user._id;
