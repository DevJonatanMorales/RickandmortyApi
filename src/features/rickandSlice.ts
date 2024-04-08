import { createSlice } from "@reduxjs/toolkit";
import { Personaje } from "../models/personaje";

const initialState: Personaje[] | [] = [];
export const personajeSlice = createSlice({
  name: "personaje",
  initialState,
  reducers: {},
});

export default personajeSlice.reducer
