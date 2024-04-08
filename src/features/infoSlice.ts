import { createSlice } from "@reduxjs/toolkit";
import { info } from "../models/info";

const initialState: info | {} = {
  count: 0,
  pages: 0,
  next: "",
  prev: null,
};
export const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {},
});

export default infoSlice.reducer