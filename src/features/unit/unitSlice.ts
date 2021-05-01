import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Unit } from "./types";

const initialState = Unit.CELCIUS;

const slice = createSlice({
  name: "unit",
  initialState,
  reducers: {
    setUnit(_state, action: PayloadAction<Unit>) {
      return action.payload;
    },
  },
});

export const { setUnit } = slice.actions;

export const selectUnit = (state: RootState) => state.unit;

export default slice.reducer;
