import { createSlice } from "@reduxjs/toolkit";
import { number } from "yup";

interface IUserSliceState {
  user: IUser | null;
}

export interface IUser {
  mail: string;
  phone_number: string;
  user_id: number;
  name: string;
  reg_date: string;
  city: string;
}

const initialState: IUserSliceState = {
  user: null,
};

export const userSlice = createSlice({
  name: "userSLice",
  initialState,
  reducers: {
    changeUser(state, action) {
      state.user = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { changeUser } = userSlice.actions;
