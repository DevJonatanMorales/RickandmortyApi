import { createSlice } from "@reduxjs/toolkit";
import { info } from "../models/info";

const initialState: info = {
  siguiente: 1,
  anterior: 1
};

export const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    setInfo: (state, actions) => {
      state.siguiente = actions.payload.siguiente;
      state.anterior = actions.payload.anterior;
    },
  },
});

export const { setInfo } = infoSlice.actions;
