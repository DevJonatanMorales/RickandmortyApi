import { createSlice } from "@reduxjs/toolkit";
import { info } from "../models/info";

const initialState: info | {} = {
  siguiente: null,
  anterior: null,
};

export const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    setInfo: (state, actions) => {
      const { next, prev } = actions.payload.info;
      state.siguiente = next;
      state.anterior = prev;
    },
  },
});

export default infoSlice.reducer;
