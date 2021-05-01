import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { City } from "../api/accuWeather/types";
import { RootState } from "../app/store";

const initialState: City = {
  name: "Tel Aviv",
  country: "IL",
  key: "215854",
};

const slice = createSlice({
  name: "selectedCity",
  initialState,
  reducers: {
    setCity(_state, action: PayloadAction<City>) {
      return action.payload;
    },
  },
});

export const { setCity } = slice.actions;

export const selectCity = (state: RootState) => state.selectedCity;

export default slice.reducer;
