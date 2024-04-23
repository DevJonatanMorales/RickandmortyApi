import { createSlice } from "@reduxjs/toolkit";
import { Personaje } from "../models/personaje";

const initialState: Personaje[] | [] = [];
export const personajeSlice = createSlice({
  name: "personaje",
  initialState,
  reducers: {
    setPersonas: (state, action) => {
      state.splice(0, state.length, ...action.payload);
    },
  },
});

export const { setPersonas } = personajeSlice.actions;
